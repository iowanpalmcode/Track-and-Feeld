const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, 'trackandfeeld.db');
const db = new sqlite3.Database(dbPath);

// Initialize SQLite DB
db.serialize(() => {
  const injuriesSeed = require('./injuries');

  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS injuries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      symptoms TEXT,
      exercises TEXT,
      foods TEXT,
      treatment TEXT,
      recovery_days INTEGER
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS user_progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT,
      injury_id INTEGER,
      start_date TEXT,
      last_checkin TEXT,
      status TEXT,
      FOREIGN KEY(injury_id) REFERENCES injuries(id)
    )`);

    // Always reseed injuries table with latest data
    db.run('DELETE FROM injuries', [], (err) => {
      if (err) {
        console.error('Error clearing injuries table:', err.message);
      } else {
        injuriesSeed.forEach(injury => {
          db.run('INSERT INTO injuries (name, symptoms, exercises, foods, treatment, recovery_days) VALUES (?, ?, ?, ?, ?, ?)',
            [injury.name, injury.symptoms, injury.exercises, injury.foods, injury.treatment, injury.recovery_days]);
        });
        console.log('Reseeded injuries table with latest data.');
      }
    });
  });


  // API: Get all injuries
  app.get('/api/injuries', (req, res) => {
    db.all('SELECT * FROM injuries', [], (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    });
  });

  // API: Get all unique symptoms
  app.get('/api/symptoms', (req, res) => {
    db.all('SELECT symptoms FROM injuries', [], (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      // Split symptoms and deduplicate
      const allSymptoms = rows.flatMap(row => row.symptoms.split(/[, ]+/).map(s => s.trim()).filter(Boolean));
      const uniqueSymptoms = Array.from(new Set(allSymptoms));
      res.json(uniqueSymptoms);
    });
  });

  // API: Guess injuries by symptoms (multi-select)
  app.post('/api/guess-injury', (req, res) => {
    const { symptoms } = req.body; // symptoms: array of selected symptoms
    db.all('SELECT * FROM injuries', [], (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!Array.isArray(symptoms) || symptoms.length === 0) return res.json([]);
      // Find injuries that match any selected symptom
      const matches = rows.filter(row => {
        const injurySymptoms = row.symptoms.split(/[, ]+/).map(s => s.trim().toLowerCase());
        return symptoms.some(sym => injurySymptoms.includes(sym.toLowerCase()));
      });
      res.json(matches);
    });
  });

  // API: Get injuries by names (multi-select)
  app.post('/api/injury', (req, res) => {
    const { names } = req.body; // names: array of injury names
    if (!Array.isArray(names) || names.length === 0) return res.json([]);
    const placeholders = names.map(() => '?').join(',');
    db.all(`SELECT * FROM injuries WHERE name IN (${placeholders})`, names, (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    });
  });

  // API: Add user progress
  app.post('/api/progress', (req, res) => {
    const { user_id, injury_id, start_date, last_checkin, status } = req.body;
    db.run('INSERT INTO user_progress (user_id, injury_id, start_date, last_checkin, status) VALUES (?, ?, ?, ?, ?)', [user_id, injury_id, start_date, last_checkin, status], function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    });
  });

  // API: Get user progress
  app.get('/api/progress/:user_id', (req, res) => {
    const { user_id } = req.params;
    db.all('SELECT * FROM user_progress WHERE user_id = ?', [user_id], (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    });
  });

  app.listen(PORT, () => {
    console.log(`Track and Feeld backend running on port ${PORT}`);
  });
});
