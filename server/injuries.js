// Example injuries for demo purposes

const injuries = [
  // ...existing injuries...
  // New injuries with in-depth descriptions and images
  {
    name: 'ACL Tear',
    symptoms: 'Severe knee pain, instability, swelling',
    exercises: 'Post-surgery rehab, quad sets, heel slides',
    foods: 'High-protein foods, vitamin C, omega-3s',
    treatment: 'Surgery, physical therapy, bracing',
    recovery_days: 120,
    descriptions: {
      symptoms: 'An ACL tear is a serious knee injury often accompanied by a popping sound, immediate swelling, and a feeling of instability. Athletes may find it difficult to bear weight or continue activity.',
      exercises: 'Rehabilitation focuses on restoring range of motion and strength. Early exercises include quad sets and heel slides, progressing to balance and agility work as healing continues.',
      foods: 'A diet rich in protein, vitamin C, and omega-3s supports tissue repair and reduces inflammation. Lean meats, citrus fruits, and fatty fish are recommended.',
      treatment: 'Treatment typically involves surgical reconstruction followed by months of physical therapy. Bracing and gradual return to activity are key for recovery.',
    },
    images: {
      symptoms: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Knee_injury.jpg',
      exercises: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Physical_therapy_exercise.jpg',
      foods: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Salmon_dish.jpg',
      treatment: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Knee_brace.jpg',
    }
  },
  {
    name: 'Concussion',
    symptoms: 'Headache, confusion, dizziness, nausea',
    exercises: 'Rest, gradual return to activity',
    foods: 'Antioxidant-rich foods, hydration',
    treatment: 'Rest, monitoring, medical evaluation',
    recovery_days: 14,
    descriptions: {
      symptoms: 'A concussion is a brain injury caused by a blow to the head. Symptoms include headache, confusion, dizziness, and sometimes nausea or sensitivity to light and sound.',
      exercises: 'Initial treatment is complete rest. Gradual return to light activity is allowed only after symptoms resolve, under medical supervision.',
      foods: 'Antioxidant-rich foods like berries and leafy greens may help reduce inflammation. Staying hydrated is also important for brain recovery.',
      treatment: 'Rest and monitoring are essential. Medical evaluation ensures no further complications. Avoid screens and strenuous activity until cleared.',
    },
    images: {
      symptoms: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Headache.jpg',
      exercises: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Resting_person.jpg',
      foods: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Berries.jpg',
      treatment: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Doctor_consult.jpg',
    }
  },
  {
    name: 'Meniscus Tear',
    symptoms: 'Knee pain, locking, swelling',
    exercises: 'Quad sets, straight leg raises',
    foods: 'Collagen-rich foods, vitamin C',
    treatment: 'Rest, physical therapy, surgery',
    recovery_days: 60,
    descriptions: {
      symptoms: 'A meniscus tear causes pain, swelling, and sometimes locking or catching in the knee. It often occurs during twisting movements.',
      exercises: 'Rehab focuses on strengthening the quadriceps and improving knee stability. Quad sets and straight leg raises are common early exercises.',
      foods: 'Collagen-rich foods like bone broth and vitamin C from citrus fruits help support cartilage healing.',
      treatment: 'Treatment may include rest, physical therapy, and sometimes surgery to repair or remove the damaged meniscus.',
    },
    images: {
      symptoms: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Knee_swelling.jpg',
      exercises: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Physical_therapy_exercise.jpg',
      foods: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Bone_broth.jpg',
      treatment: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Knee_brace.jpg',
    }
  },
  {
    name: 'Patellar Dislocation',
    symptoms: 'Knee deformity, pain, swelling',
    exercises: 'Quad sets, gentle stretching',
    foods: 'Protein, anti-inflammatory foods',
    treatment: 'Reduction, immobilization, rehab',
    recovery_days: 30,
    descriptions: {
      symptoms: 'Patellar dislocation is when the kneecap moves out of place, causing pain, swelling, and visible deformity. It often happens during sports involving sudden direction changes.',
      exercises: 'Rehab includes quad sets and gentle stretching to restore strength and flexibility. Avoid high-impact activities until fully healed.',
      foods: 'Protein and anti-inflammatory foods like fish and leafy greens help reduce swelling and support healing.',
      treatment: 'Immediate treatment is reduction (putting the kneecap back), followed by immobilization and physical therapy.',
    },
    images: {
      symptoms: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Knee_swelling.jpg',
      exercises: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Physical_therapy_exercise.jpg',
      foods: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Salmon_dish.jpg',
      treatment: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Knee_brace.jpg',
    }
  },
  {
    name: 'Shoulder Dislocation',
    symptoms: 'Shoulder deformity, pain, swelling',
    exercises: 'Pendulum exercises, gentle stretching',
    foods: 'Protein, vitamin C',
    treatment: 'Reduction, immobilization, rehab',
    recovery_days: 28,
    descriptions: {
      symptoms: 'A shoulder dislocation occurs when the upper arm bone pops out of the shoulder socket. It causes pain, swelling, and visible deformity.',
      exercises: 'Pendulum exercises and gentle stretching help restore mobility. Strengthening is added gradually as pain subsides.',
      foods: 'Protein and vitamin C support tissue repair. Include lean meats and citrus fruits in your diet.',
      treatment: 'Immediate reduction is needed, followed by immobilization and a structured rehab program.',
    },
    images: {
      symptoms: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Shoulder_injury.jpg',
      exercises: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Physical_therapy_exercise.jpg',
      foods: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Salmon_dish.jpg',
      treatment: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Shoulder_brace.jpg',
    }
  },
  {
    name: 'Turf Toe',
    symptoms: 'Pain at big toe, swelling, limited movement',
    exercises: 'Toe stretches, gentle movement',
    foods: 'Vitamin D, calcium',
    treatment: 'Rest, ice, taping',
    recovery_days: 14,
    descriptions: {
      symptoms: 'Turf toe is a sprain of the big toe joint, common in athletes who play on artificial turf. It causes pain, swelling, and limited movement.',
      exercises: 'Toe stretches and gentle movement help maintain flexibility. Avoid pushing off forcefully until healed.',
      foods: 'Vitamin D and calcium support bone and joint health. Dairy products and leafy greens are recommended.',
      treatment: 'Rest, ice, and taping the toe help reduce pain and swelling.',
    },
    images: {
      symptoms: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Toe_injury.jpg',
      exercises: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Physical_therapy_exercise.jpg',
      foods: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Milk_and_spinach.jpg',
      treatment: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Ice_pack.jpg',
    }
  },
  {
    name: 'Hip Labral Tear',
    symptoms: 'Hip pain, clicking, instability',
    exercises: 'Hip stretches, core strengthening',
    foods: 'Omega-3s, protein',
    treatment: 'Rest, physical therapy, surgery',
    recovery_days: 60,
    descriptions: {
      symptoms: 'A hip labral tear causes pain, clicking, and instability in the hip joint. It may result from repetitive twisting or trauma.',
      exercises: 'Hip stretches and core strengthening exercises help stabilize the joint and reduce pain.',
      foods: 'Omega-3s and protein support joint health and tissue repair. Include fatty fish and lean meats.',
      treatment: 'Rest and physical therapy are first-line treatments. Surgery may be needed for severe cases.',
    },
    images: {
      symptoms: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Hip_injury.jpg',
      exercises: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Physical_therapy_exercise.jpg',
      foods: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Salmon_dish.jpg',
      treatment: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Hip_brace.jpg',
    }
  },
  {
    name: 'Achilles Rupture',
    symptoms: 'Sudden heel pain, inability to walk',
    exercises: 'Post-surgery rehab, gentle stretching',
    foods: 'Protein, vitamin C',
    treatment: 'Surgery, immobilization, rehab',
    recovery_days: 90,
    descriptions: {
      symptoms: 'An Achilles rupture is a complete tear of the tendon, causing sudden pain and inability to walk. It often occurs during explosive movements.',
      exercises: 'Rehab after surgery includes gentle stretching and gradual strengthening. Early movement is limited to protect healing.',
      foods: 'Protein and vitamin C support tendon repair. Include lean meats and citrus fruits.',
      treatment: 'Surgical repair is common, followed by immobilization and a structured rehab program.',
    },
    images: {
      symptoms: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Achilles_injury.jpg',
      exercises: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Physical_therapy_exercise.jpg',
      foods: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Salmon_dish.jpg',
      treatment: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Leg_brace.jpg',
    }
  },
  {
    name: 'Chest Contusion',
    symptoms: 'Chest pain, bruising, tenderness',
    exercises: 'Gentle breathing, arm movement',
    foods: 'Vitamin C, anti-inflammatory foods',
    treatment: 'Rest, ice, pain management',
    recovery_days: 10,
    descriptions: {
      symptoms: 'A chest contusion is a bruise to the chest wall, causing pain, tenderness, and sometimes difficulty breathing. It usually results from direct impact.',
      exercises: 'Gentle breathing exercises and arm movement help maintain mobility and prevent stiffness.',
      foods: 'Vitamin C and anti-inflammatory foods like berries and leafy greens help reduce swelling and support healing.',
      treatment: 'Rest, ice, and pain management are key. Avoid strenuous activity until pain resolves.',
    },
    images: {
      symptoms: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Chest_injury.jpg',
      exercises: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Resting_person.jpg',
      foods: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Berries.jpg',
      treatment: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Ice_pack.jpg',
    }
  },
  {
    name: 'Forearm Fracture',
    symptoms: 'Forearm pain, swelling, deformity',
    exercises: 'Post-cast rehab, gentle movement',
    foods: 'Calcium, vitamin D',
    treatment: 'Casting, surgery, rehab',
    recovery_days: 45,
    descriptions: {
      symptoms: 'A forearm fracture causes pain, swelling, and sometimes visible deformity. It often occurs from falls or direct impact.',
      exercises: 'Rehab after casting includes gentle movement and strengthening. Early exercises focus on restoring range of motion.',
      foods: 'Calcium and vitamin D support bone healing. Dairy products and sunlight exposure are recommended.',
      treatment: 'Casting is common, but surgery may be needed for severe fractures. Rehab is essential for full recovery.',
    },
    images: {
      symptoms: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Forearm_injury.jpg',
      exercises: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Physical_therapy_exercise.jpg',
      foods: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Milk_and_spinach.jpg',
      treatment: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Arm_cast.jpg',
    }
  },
  // ...existing injuries...
  {
    name: 'IT Band Syndrome',
    symptoms: 'pain knee hip tightness',
    exercises: 'Foam rolling, hip stretches',
    foods: 'Anti-inflammatory foods',
    treatment: 'Rest, ice, stretching',
    recovery_days: 16
    ,
    descriptions: {
      symptoms: 'IT Band Syndrome causes pain and tightness on the outside of the knee and hip, often due to repetitive running or cycling. The iliotibial band becomes inflamed from friction over the knee.',
      exercises: 'Foam rolling and hip stretches help relieve tension in the IT band and surrounding muscles. Strengthening the hip abductors can prevent recurrence.',
      foods: 'Anti-inflammatory foods such as berries, leafy greens, and fatty fish may help reduce swelling and promote healing.',
      treatment: 'Rest and ice are essential to reduce inflammation. Stretching and physical therapy restore flexibility and strength. Avoid aggravating activities until pain subsides.'
    }
  },
  {
    name: 'Plantar Fasciitis',
    symptoms: 'pain heel arch stiffness',
    exercises: 'Foot stretches, rolling',
    foods: 'Vitamin C, turmeric',
    treatment: 'Rest, ice, arch support',
    recovery_days: 20
    ,
    descriptions: {
      symptoms: 'Plantar fasciitis is inflammation of the tissue on the bottom of the foot, causing heel and arch pain, especially with the first steps in the morning.',
      exercises: 'Foot stretches and rolling a ball under the arch help loosen the fascia. Calf stretches and strengthening can also aid recovery.',
      foods: 'Vitamin C and turmeric are known for their anti-inflammatory properties and may help reduce pain and swelling.',
      treatment: 'Rest, ice, and supportive footwear or arch supports are key. Avoid high-impact activities until symptoms improve.'
    }
  },
  {
    name: 'Patellar Tendonitis',
    symptoms: 'pain knee swelling',
    exercises: 'Quad stretches, eccentric squats',
    foods: 'Protein, leafy greens',
    treatment: 'Rest, ice, physical therapy',
    recovery_days: 17
    ,
    descriptions: {
      symptoms: 'Patellar tendonitis, or jumper’s knee, causes pain and swelling just below the kneecap, often from repetitive jumping or running.',
      exercises: 'Quad stretches and eccentric squats strengthen the tendon and surrounding muscles, promoting healing.',
      foods: 'Protein and leafy greens provide nutrients for tendon repair and reduce inflammation.',
      treatment: 'Rest, ice, and physical therapy are recommended. Gradual return to activity is important to prevent recurrence.'
    }
  },
  {
    name: 'Calf Strain',
    symptoms: 'pain calf tightness swelling',
    exercises: 'Calf stretches, gentle walking',
    foods: 'Potassium-rich foods',
    treatment: 'Rest, ice, compression',
    recovery_days: 12
    ,
    descriptions: {
      symptoms: 'A calf strain is a tear or overstretching of the calf muscles, causing pain, tightness, and swelling, often after sudden acceleration or jumping.',
      exercises: 'Gentle calf stretches and walking help maintain mobility. Avoid strenuous activity until pain resolves.',
      foods: 'Potassium-rich foods like bananas and potatoes support muscle function and recovery.',
      treatment: 'Rest, ice, and compression reduce swelling and pain. Gradual return to activity is recommended.'
    }
  },
  {
    name: 'Hip Flexor Strain',
    symptoms: 'pain hip groin tightness',
    exercises: 'Hip flexor stretches, gentle walking',
    foods: 'Lean protein, spinach',
    treatment: 'Rest, ice, stretching',
    recovery_days: 15
    ,
    descriptions: {
      symptoms: 'Hip flexor strain causes pain and tightness in the front of the hip or groin, often from sprinting or kicking.',
      exercises: 'Hip flexor stretches and gentle walking help restore flexibility and prevent stiffness.',
      foods: 'Lean protein and spinach provide nutrients for muscle repair and recovery.',
      treatment: 'Rest, ice, and stretching are key. Avoid high-intensity activities until pain subsides.'
    }
  },
  {
    name: 'Shoulder Impingement',
    symptoms: 'pain shoulder weakness',
    exercises: 'Shoulder stretches, band exercises',
    foods: 'Omega-3s, nuts',
    treatment: 'Rest, ice, physical therapy',
    recovery_days: 18
    ,
    descriptions: {
      symptoms: 'Shoulder impingement occurs when tendons are pinched during arm movement, causing pain and weakness, especially with overhead activities.',
      exercises: 'Shoulder stretches and resistance band exercises improve mobility and strengthen the rotator cuff.',
      foods: 'Omega-3s and nuts help reduce inflammation and support tissue repair.',
      treatment: 'Rest, ice, and physical therapy are recommended. Avoid repetitive overhead movements until symptoms improve.'
    }
  },
  {
    name: 'Tennis Elbow',
    symptoms: 'pain elbow weakness',
    exercises: 'Wrist stretches, forearm exercises',
    foods: 'Vitamin C, cherries',
    treatment: 'Rest, ice, compression',
    recovery_days: 14
    ,
    descriptions: {
      symptoms: 'Tennis elbow is inflammation of the tendons on the outside of the elbow, causing pain and weakness, often from repetitive gripping or lifting.',
      exercises: 'Wrist stretches and forearm strengthening exercises help restore function and reduce pain.',
      foods: 'Vitamin C and cherries provide antioxidants that may help reduce inflammation.',
      treatment: 'Rest, ice, and compression are key. Gradual return to activity is important.'
    }
  },
  {
    name: 'Groin Strain',
    symptoms: 'pain groin swelling',
    exercises: 'Adductor stretches, gentle walking',
    foods: 'Lean protein, berries',
    treatment: 'Rest, ice, compression',
    recovery_days: 13
    ,
    descriptions: {
      symptoms: 'Groin strain is a tear or overstretching of the inner thigh muscles, causing pain and swelling, often from sudden movements or sprinting.',
      exercises: 'Adductor stretches and gentle walking help maintain flexibility and prevent stiffness.',
      foods: 'Lean protein and berries support muscle repair and reduce inflammation.',
      treatment: 'Rest, ice, and compression are essential for recovery. Avoid strenuous activity until pain resolves.'
    }
  },
  {
    name: 'Lower Back Strain',
    symptoms: 'pain back stiffness',
    exercises: 'Back stretches, gentle walking',
    foods: 'Magnesium-rich foods',
    treatment: 'Rest, ice, stretching',
    recovery_days: 16
    ,
    descriptions: {
      symptoms: 'Lower back strain is a common injury from lifting or twisting, causing pain and stiffness in the lumbar region.',
      exercises: 'Gentle back stretches and walking help restore mobility and reduce stiffness.',
      foods: 'Magnesium-rich foods like nuts and leafy greens support muscle relaxation and healing.',
      treatment: 'Rest, ice, and stretching are recommended. Avoid heavy lifting until pain subsides.'
    }
  },
  {
    name: 'Wrist Sprain',
    symptoms: 'pain wrist swelling bruising',
    exercises: 'Wrist stretches, gentle movement',
    foods: 'Vitamin C, protein',
    treatment: 'Rest, ice, compression',
    recovery_days: 10
    ,
    descriptions: {
      symptoms: 'A wrist sprain is an injury to the ligaments of the wrist, causing pain, swelling, and bruising, often from a fall or sudden twist.',
      exercises: 'Wrist stretches and gentle movement help restore flexibility and prevent stiffness.',
      foods: 'Vitamin C and protein support ligament repair and healing.',
      treatment: 'Rest, ice, and compression are key. Gradual return to activity is recommended.'
    }
  },
  {
    name: 'Finger Jam',
    symptoms: 'pain finger swelling bruising',
    exercises: 'Gentle movement, finger stretches',
    foods: 'Vitamin C, leafy greens',
    treatment: 'Rest, ice, compression',
    recovery_days: 7
    ,
    descriptions: {
      symptoms: 'A finger jam is a sprain or minor fracture from impact, causing pain, swelling, and bruising.',
      exercises: 'Gentle movement and finger stretches help restore mobility and reduce stiffness.',
      foods: 'Vitamin C and leafy greens provide nutrients for tissue repair.',
      treatment: 'Rest, ice, and compression are recommended. Avoid forceful gripping until pain resolves.'
    }
  },
  {
    name: 'Quad Strain',
    symptoms: 'pain thigh swelling tightness',
    exercises: 'Quad stretches, gentle walking',
    foods: 'Protein, leafy greens',
    treatment: 'Rest, ice, compression',
    recovery_days: 13
    ,
    descriptions: {
      symptoms: 'Quad strain is a tear or overstretching of the thigh muscles, causing pain, swelling, and tightness, often from sprinting or jumping.',
      exercises: 'Quad stretches and gentle walking help maintain flexibility and promote healing.',
      foods: 'Protein and leafy greens support muscle repair and reduce inflammation.',
      treatment: 'Rest, ice, and compression are essential. Gradual return to activity is recommended.'
    }
  },
  {
    name: 'Neck Strain',
    symptoms: 'pain neck stiffness',
    exercises: 'Neck stretches, gentle movement',
    foods: 'Magnesium-rich foods',
    treatment: 'Rest, ice, stretching',
    recovery_days: 11
    ,
    descriptions: {
      symptoms: 'Neck strain is an injury to the muscles or ligaments of the neck, causing pain and stiffness, often from poor posture or sudden movement.',
      exercises: 'Neck stretches and gentle movement help restore flexibility and reduce pain.',
      foods: 'Magnesium-rich foods like nuts and leafy greens support muscle relaxation and healing.',
      treatment: 'Rest, ice, and stretching are recommended. Avoid heavy lifting until pain subsides.'
    }
  },
  {
    name: 'Hip Bursitis',
    symptoms: 'pain hip swelling',
    exercises: 'Hip stretches, gentle walking',
    foods: 'Omega-3s, leafy greens',
    treatment: 'Rest, ice, anti-inflammatory meds',
    recovery_days: 15
    ,
    descriptions: {
      symptoms: 'Hip bursitis is inflammation of the fluid-filled sacs in the hip, causing pain and swelling, often from repetitive movement or pressure.',
      exercises: 'Hip stretches and gentle walking help maintain mobility and reduce stiffness.',
      foods: 'Omega-3s and leafy greens help reduce inflammation and support healing.',
      treatment: 'Rest, ice, and anti-inflammatory medications are recommended. Avoid aggravating activities until pain resolves.'
    }
  },
  {
    name: 'Rotator Cuff Strain',
    symptoms: 'pain shoulder weakness',
    exercises: 'Shoulder stretches, band exercises',
    foods: 'Protein, nuts',
    treatment: 'Rest, ice, physical therapy',
    recovery_days: 19
    ,
    descriptions: {
      symptoms: 'Rotator cuff strain is an injury to the shoulder muscles and tendons, causing pain and weakness, often from repetitive overhead activity.',
      exercises: 'Shoulder stretches and resistance band exercises strengthen the rotator cuff and improve mobility.',
      foods: 'Protein and nuts provide nutrients for muscle and tendon repair.',
      treatment: 'Rest, ice, and physical therapy are recommended. Gradual return to activity is important.'
    }
  },
  {
    name: 'Groin Tear (Mild)',
    symptoms: 'pain groin bruising swelling',
    exercises: 'Adductor stretches, gentle walking',
    foods: 'Lean protein, berries',
    treatment: 'Rest, ice, compression',
    recovery_days: 20
    ,
    descriptions: {
      symptoms: 'A groin tear is a serious injury causing sharp pain, swelling, and bruising in the inner thigh, often from sprinting or sudden changes in direction.',
      exercises: 'Gentle adductor stretches and walking help maintain mobility. Avoid strenuous activity until pain resolves.',
      foods: 'Lean protein and antioxidant-rich berries support muscle repair and reduce inflammation.',
      treatment: 'Rest, ice, and compression are essential for initial recovery. Gradual return to activity is recommended.'
    }
  },
  {
    name: 'Foot Stress Fracture',
    symptoms: 'pain foot swelling tenderness',
    exercises: 'Rest, gentle stretching',
    foods: 'Calcium, vitamin D',
    treatment: 'Rest, immobilization',
    recovery_days: 30
    ,
    descriptions: {
      symptoms: 'A foot stress fracture is a small crack in the bone from overuse, causing pain, swelling, and tenderness, especially during activity.',
      exercises: 'Rest and gentle stretching help maintain flexibility without aggravating the injury.',
      foods: 'Calcium and vitamin D support bone healing and strength.',
      treatment: 'Rest and immobilization are key. Avoid weight-bearing activities until cleared by a doctor.'
    }
  }
];

module.exports = injuries;
