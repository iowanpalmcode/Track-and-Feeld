


import React, { useState, useEffect } from 'react';
import './App.css';


async function getImage(query: string, type: 'food' | 'exercise') {
  // Try Wikipedia, Unsplash, Wikimedia, fallback to placeholder
  const searchTerm = query.split(',')[0].split(' ')[0];
  // Wikipedia
  try {
    const wikiRes = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchTerm)}`);
    const wikiData = await wikiRes.json();
    if (wikiData.thumbnail && wikiData.thumbnail.source) return wikiData.thumbnail.source;
  } catch {}
  // Unsplash
  try {
    const unsplashRes = await fetch(`https://source.unsplash.com/120x120/?${encodeURIComponent(searchTerm)}`);
    if (unsplashRes.url) return unsplashRes.url;
  } catch {}
  // Wikimedia
  try {
    const wikiMediaRes = await fetch(`https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=pageimages&titles=${encodeURIComponent(searchTerm)}&pithumbsize=120&origin=*`);
    const wikiMediaData = await wikiMediaRes.json();
    const pages = wikiMediaData.query && wikiMediaData.query.pages;
    if (pages) {
      const page = Object.values(pages)[0] as { thumbnail?: { source?: string } };
      if (page && page.thumbnail && page.thumbnail.source) return page.thumbnail.source;
    }
  } catch {}
  // Placeholder
  return type === 'food'
    ? 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Food_placeholder.png'
    : 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Exercise_placeholder.png';
}

export default App;

function App() {
  const [screen, setScreen] = useState<'title' | 'menu' | 'dropdown' | 'results'>('title');
  const [showAbout, setShowAbout] = useState(false);
  const [symptomsList, setSymptomsList] = useState<string[]>([]);
  const [injuriesList, setInjuriesList] = useState<any[]>([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedInjuries, setSelectedInjuries] = useState<string[]>([]);
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState('');
  const [popupInjury, setPopupInjury] = useState<any | null>(null);
  const [activeInjuryBar, setActiveInjuryBar] = useState<any | null>(null);

  useEffect(() => {
    fetch('https://track-and-feeld.onrender.com/api/symptoms')
      .then(res => res.json())
      .then(setSymptomsList);
    fetch('https://track-and-feeld.onrender.com/api/injuries')
      .then(res => res.json())
      .then(setInjuriesList);
  }, []);

  const handleStart = () => setScreen('menu');
  const handleGoToMenu = () => setScreen('menu');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResults([]);
    let found: any[] = [];
    if (selectedSymptoms.length > 0) {
      const res = await fetch('https://track-and-feeld.onrender.com/api/guess-injury', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symptoms: selectedSymptoms })
      });
      found = await res.json();
    }
    if (selectedInjuries.length > 0) {
      const res = await fetch('https://track-and-feeld.onrender.com/api/injury', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ names: selectedInjuries })
      });
      const foundInjuries = await res.json();
      found = [
        ...found,
        ...foundInjuries.filter((i: any) => !found.some((f: any) => f.id === i.id))
      ];
    }
    if (found.length === 0) setError('No matching injuries found.');
    setResults(found);
    setScreen('results');
  };

  const handleBack = () => {
    setScreen('menu');
    setSelectedSymptoms([]);
    setSelectedInjuries([]);
    setResults([]);
    setError('');
    setPopupInjury(null);
  };

  // When user clicks an injury result, show blue dropdown at bottom right
  const handlePopup = (injury: any) => {
    setActiveInjuryBar(injury);
  }


  const handleSelectDropdown = (type: 'symptom' | 'injury', value: string, reset: () => void) => {
    if (!value) return;
    if (type === 'symptom') {
      if (!selectedSymptoms.includes(value)) setSelectedSymptoms([...selectedSymptoms, value]);
    } else {
      if (!selectedInjuries.includes(value)) setSelectedInjuries([...selectedInjuries, value]);
    }
    reset();
  };

  const handleRemove = (type: 'symptom' | 'injury', value: string) => {
    if (type === 'symptom') {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== value));
    } else {
      setSelectedInjuries(selectedInjuries.filter(i => i !== value));
    }
  };

  return (
    <div className="App">
      {/* Background music (autoplay, no controls) */}
      <audio autoPlay loop style={{display:'none'}}>
        <source src="https://cdn.pixabay.com/audio/2023/02/24/audio_126b6e.mp3" type="audio/mp3" />
      </audio>

      {/* Animated beige triangles for title screen and main menu */}
      {(screen === 'title' || screen === 'menu' || screen === "results") && (
        <>
          {Array.from({ length: 50 }).map((_, i) => {
            // Randomize position, rotation, and animation direction
            const side = i % 2 === 0 ? 'left' : 'right';
            const spread = Math.random();
            const left = side === 'left' ? `${spread * 25}%` : undefined;
            const right = side === 'right' ? `${spread * 25}%` : undefined;
            const startTop = Math.random() * 100; // 0% to 100% vertically
            const size = Math.random() * 18 + 12; // 12px to 30px
            const duration = Math.random() * 2 + 2; // 2s to 4s
            const rotate = Math.random() * 360; // 0 to 360 degrees
            const animName = side === 'left' ? `triangleUpLoop${i}` : `triangleDownLoop${i}`;
            return (
              <div key={i}
                style={{
                  position: 'fixed',
                  left,
                  right,
                  top: `${startTop}%`,
                  zIndex: 1,
                  pointerEvents: 'none',
                  width: 0,
                  height: 0,
                  borderLeft: side === 'left' ? `${size}px solid #f5e9d6` : undefined,
                  borderRight: side === 'right' ? `${size}px solid #f5e9d6` : undefined,
                  borderTop: `${size * 0.7}px solid transparent`,
                  borderBottom: `${size * 0.7}px solid transparent`,
                  transform: `rotate(${rotate}deg)`,
                  animation: `${animName} ${duration}s linear infinite`,
                }}
              />
            );
          })}
          {/* Triangle keyframes for each triangle */}
          <style>{`
            ${Array.from({ length: 50 }).map((_, i) => {
              const side = i % 2 === 0 ? 'left' : 'right';
              if (side === 'left') {
                return `@keyframes triangleUpLoop${i} {
                  0% { top: 100%; }
                  100% { top: 0%; }
                }`;
              } else {
                return `@keyframes triangleDownLoop${i} {
                  0% { top: 0%; }
                  100% { top: 100%; }
                }`;
              }
            }).join('\n')}
          `}</style>
        </>
      )}

      {screen === 'title' && (
        <div className="title-screen">
          <h1>Track and Feeld</h1>
          <h2> A mini sports injury checker </h2>
          <button style={{marginTop:'18px'}} onClick={handleStart}>Go to Main Menu</button>
          {/* About Me button in upper right */}
          <button style={{position:'fixed',top:'24px',right:'32px',zIndex:3100,padding:'10px 18px',background:'#1976d2',color:'#fff',borderRadius:'8px',fontWeight:'bold',boxShadow:'0 2px 8px rgba(0,0,0,0.12)'}} onClick={()=>setShowAbout(true)}>About Me</button>
        </div>
      )}

      {showAbout && (
        <div className="about-modal" style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.5)',zIndex:3000,display:'flex',alignItems:'center',justifyContent:'center'}} onClick={()=>setShowAbout(false)}>
          <div style={{background:'#fff',borderRadius:'16px',padding:'24px',width:'340px',boxShadow:'0 4px 24px rgba(0,0,0,0.18)',textAlign:'left',border:'2px solid #1976d2'}} onClick={e=>e.stopPropagation()}>
            <h2 style={{textAlign:'center'}}>About This App</h2>
            <div style={{margin:'12px 0'}}>
              <span>This app was made by Felix using React (TypeScript) for the frontend and Node.js/Express with SQLite for the backend.</span>
              <hr />
              <span>It features dynamic injury/symptom selection, recommendations, image fetching, and progress tracking.</span>
              <hr />
              <span>Tools used include Babel, ESLint, and open APIs for images and music.</span>
              <hr />
              <span>No personal data is collected.</span>
              <hr />
              <span>While I used Microsoft's Copilot for a good chunk of this code, all code is original and open source.</span>
              <hr />
              <span>Check out my other game, <a href="https://cooperative.pythonanywhere.com">Co-Operative!</a></span>
            </div>
            <button style={{marginTop:'8px',float:'right'}} onClick={()=>setShowAbout(false)}>Close</button>
          </div>
        </div>
      )}

      {screen === 'menu' && (
        <div className="main-menu" style={{position:'relative',zIndex:10}}>
          <h2>Main Menu</h2>
          <button
            style={{
              position:'fixed',
              top:'24px',
              left:'32px',
              zIndex:3100,
              padding:'10px 18px',
              background:'#1976d2',
              color:'#fff',
              borderRadius:'8px',
              fontWeight:'bold',
              boxShadow:'0 2px 8px rgba(0,0,0,0.12)',
              fontSize:'1rem',
              border:'none',
              cursor:'pointer'
            }}
            onClick={()=>setScreen('title')}
          >Back to Title Screen</button>
          <form onSubmit={handleSubmit}>
            <div style={{marginBottom:'18px'}}>
              <label style={{display:'block',color:'#888',fontWeight:'bold',marginBottom:'12px'}}>Select symptom</label>
              <div style={{marginBottom:'8px'}}>
                <Dropdown
                  options={symptomsList.filter(sym => !selectedSymptoms.includes(sym))}
                  placeholder="Select symptom"
                  onSelect={value => handleSelectDropdown('symptom', value, () => {
                    const el = document.getElementById('symptomDropdown') as HTMLSelectElement | null;
                    if (el) el.selectedIndex = 0;
                  })}
                  id="symptomDropdown"
                />
              </div>
              <div className="selected-chips">
                {selectedSymptoms.map(sym => (
                  <span key={sym} className="chip selected" onClick={() => handleRemove('symptom', sym)}>{sym} ×</span>
                ))}
              </div>
            </div>
            <div style={{marginBottom:'18px'}}>
              <label style={{display:'block',color:'#888',fontWeight:'bold',marginBottom:'12px'}}>Select injury</label>
              <div style={{marginBottom:'8px'}}>
                <Dropdown
                  options={injuriesList.filter(injury => !selectedInjuries.includes(injury.name)).map(i => i.name)}
                  placeholder="Select injury"
                  onSelect={value => handleSelectDropdown('injury', value, () => {
                    const el = document.getElementById('injuryDropdown') as HTMLSelectElement | null;
                    if (el) el.selectedIndex = 0;
                  })}
                  id="injuryDropdown"
                />
              </div>
              <div className="selected-chips">
                {selectedInjuries.map(injury => (
                  <span key={injury} className="chip selected" onClick={() => handleRemove('injury', injury)}>{injury} ×</span>
                ))}
              </div>
            </div>
            <button type="submit">Get Recommendations</button>
          </form>
        </div>
      )}

      {screen === 'dropdown' && (
        <div className="dropdown-menu" style={{position:'relative',zIndex:10}}>
          <h2>Dropdown Menu</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Choose a symptom:</label>
              <Dropdown
                options={symptomsList.filter(sym => !selectedSymptoms.includes(sym))}
                placeholder="Select symptom"
                onSelect={value => handleSelectDropdown('symptom', value, () => {
                  const el = document.getElementById('symptomDropdown') as HTMLSelectElement | null;
                  if (el) el.selectedIndex = 0;
                })}
                id="symptomDropdown"
              />
              <div className="selected-chips">
                {selectedSymptoms.map(sym => (
                  <span key={sym} className="chip selected" onClick={() => handleRemove('symptom', sym)}>{sym} ×</span>
                ))}
              </div>
            </div>
            <div>
              <label>Choose an injury:</label>
              <Dropdown
                options={injuriesList.filter(injury => !selectedInjuries.includes(injury.name)).map(i => i.name)}
                placeholder="Select injury"
                onSelect={value => handleSelectDropdown('injury', value, () => {
                  const el = document.getElementById('injuryDropdown') as HTMLSelectElement | null;
                  if (el) el.selectedIndex = 0;
                })}
                id="injuryDropdown"
              />
              <div className="selected-chips">
                {selectedInjuries.map(injury => (
                  <span key={injury} className="chip selected" onClick={() => handleRemove('injury', injury)}>{injury} ×</span>
                ))}
              </div>
            </div>
            <button type="submit">Get Recommendations</button>
          </form>
          <button style={{marginTop:'16px'}} onClick={handleGoToMenu}>Back to Main Menu</button>
        </div>
      )}
      {screen === 'results' && (
        <div className="results-screen">
          <button onClick={handleBack}>Back</button>
          {error && <div className="error">{error}</div>}
          {results.length > 0 && results.map(injury => (
            <InjuryResult injury={injury} handlePopup={handlePopup} />
          ))}
        </div>
      )}
      {/* Blue button for injury detail, bottom right */}

      {/* Always show RevealImagesBox if an injury has been selected */}
      {activeInjuryBar && (
        <RevealImagesBox
          injury={activeInjuryBar}
          onShow={() => {
            setPopupInjury(activeInjuryBar);
          }}
        />
      )}

      {popupInjury && (
        <InjuryModal injury={popupInjury} onClose={() => setPopupInjury(null)} />
      )}
      {/* ...triangle keyframes are now generated above... */}
      </div>
    );
  }


function InjuryResult({ injury, handlePopup }: { injury: any, handlePopup: (injury: any) => void }) {
  return (
    <div className="injury-result" onClick={() => handlePopup(injury)} style={{cursor:'pointer'}}>
      <h2>{injury.name}</h2>
      <p><strong>Symptoms:</strong> {injury.symptoms}</p>
      <p><strong>Exercises:</strong> {injury.exercises}</p>
      <p><strong>Foods:</strong> {injury.foods}</p>
      <p><strong>Treatment:</strong> {injury.treatment}</p>
      <p><strong>Estimated Recovery:</strong> {injury.recovery_days} days</p>
    </div>
  );
}

function InjuryModal({ injury, onClose }: { injury: any, onClose: () => void }) {
  // Use new descriptions and images if available
  return (
    <div className="injury-modal">
      <div className="injury-modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{injury.name}</h2>
        <div style={{marginBottom:'16px'}}>
          <strong>Symptoms:</strong>
          <div style={{margin:'8px 0'}}>
            <span>{injury.descriptions?.symptoms || injury.symptoms}</span>
            {injury.images?.symptoms && <img className="injury-img" src={injury.images.symptoms} alt="Symptoms" style={{maxWidth:'220px',margin:'8px 0'}} />}
          </div>
        </div>
        <div style={{marginBottom:'16px'}}>
          <strong>Exercises:</strong>
          <div style={{margin:'8px 0'}}>
            <span>{injury.descriptions?.exercises || injury.exercises}</span>
            {injury.images?.exercises && <img className="injury-img" src={injury.images.exercises} alt="Exercises" style={{maxWidth:'220px',margin:'8px 0'}} />}
          </div>
        </div>
        <div style={{marginBottom:'16px'}}>
          <strong>Foods:</strong>
          <div style={{margin:'8px 0'}}>
            <span>{injury.descriptions?.foods || injury.foods}</span>
            {injury.images?.foods && <img className="injury-img" src={injury.images.foods} alt="Foods" style={{maxWidth:'220px',margin:'8px 0'}} />}
          </div>
        </div>
        <div style={{marginBottom:'16px'}}>
          <strong>Treatment:</strong>
          <div style={{margin:'8px 0'}}>
            <span>{injury.descriptions?.treatment || injury.treatment}</span>
            {injury.images?.treatment && <img className="injury-img" src={injury.images.treatment} alt="Treatment" style={{maxWidth:'220px',margin:'8px 0'}} />}
          </div>
        </div>
        <p><strong>Estimated Recovery:</strong> {injury.recovery_days} days</p>
      </div>
    </div>
  );
}

function Dropdown({ options, placeholder, onSelect, id }: { options: string[], placeholder: string, onSelect: (value: string) => void, id: string }) {
  // Vertically longer, horizontally shorter dropdown
  return (
    <select
      id={id}
      style={{
        width: '180px',
        fontSize: '1.08rem',
        marginBottom: '0.5rem',
        padding: '2px 8px',
        borderRadius: '10px',
        boxSizing: 'border-box',
        textAlign: 'center',
        appearance: 'none',
        transition: 'width 0.2s, height 0.2s',
        lineHeight: '1.4',
        height: 'auto',
        minHeight: '32px',
        position: 'relative',
        zIndex: 2
      }}
      onChange={e => { onSelect(e.target.value); e.target.selectedIndex = 0; }}
      defaultValue=""
    >
      <option value="" disabled style={{fontSize:'1.08rem',padding:'2px 8px',lineHeight:'1.4'}}>{placeholder}</option>
      {options.map(opt => (
        <option key={opt} value={opt} style={{position:'relative',zIndex:2}}>{opt}</option>
      ))}
    </select>
  );
}

// Move RevealImagesBox outside App function block
// Updated RevealImagesBox to show injury details and custom button
function RevealImagesBox({ injury, onShow }: { injury: any, onShow: () => void }) {
  const [showDetails, setShowDetails] = React.useState(false);
  return (
    <div className="reveal-dropdown" style={{position:'fixed',bottom:24,right:24,zIndex:1000,display:'flex',flexDirection:'column',alignItems:'center',maxWidth:'320px'}}>
      <div style={{display:'flex',flexDirection:'row',alignItems:'stretch',gap:'0'}}>
        <div style={{background:'#1976d2',color:'#fff',borderRadius:'8px 0 0 8px',padding:'10px 18px',fontWeight:'bold',fontSize:'1.08rem',minWidth:'120px',boxShadow:'0 2px 8px rgba(0,0,0,0.12)'}}>
          {injury?.name}
        </div>
        <button
          style={{background:'#1976d2',color:'#fff',border:'none',borderRadius:'0 8px 8px 0',padding:'10px 24px',fontWeight:'bold',fontSize:'1rem',cursor:'pointer',boxShadow:'0 2px 8px rgba(0,0,0,0.12)'}}
          onClick={() => setShowDetails(!showDetails)}
        >In Detail</button>
      </div>
      {showDetails && (
        <div style={{background:'#fff',color:'#222',borderRadius:'8px',padding:'10px 18px',fontSize:'1rem',marginTop:'8px',boxShadow:'0 2px 8px rgba(0,0,0,0.08)',textAlign:'left',width:'100%'}}>
          <div><strong>Exercises:</strong> {injury?.exercises}</div>
          <div><strong>Foods:</strong> {injury?.foods}</div>
          <div><strong>Treatment:</strong> {injury?.treatment}</div>
          <div><strong>Estimated Recovery:</strong> {injury?.recovery_days} days</div>
          <button
            style={{background:'#1976d2',color:'#fff',border:'none',borderRadius:'8px',padding:'8px 24px',fontWeight:'bold',fontSize:'1rem',cursor:'pointer',boxShadow:'0 2px 8px rgba(0,0,0,0.12)',marginTop:'8px'}}
            onClick={onShow}
          >Open Full Modal</button>
        </div>
      )}
    </div>
  );
}
void getImage
