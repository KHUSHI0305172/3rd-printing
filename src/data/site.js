// Edit this file to change the business details and website content.
export const site = {
  brandA: 'Aqua ',
  brandB: '3D',
  studio: 'Aqua 3D Studio',
  city: 'Ahmedabad, Gujarat',
  whatsapp: '910000000000', // country code + number, no + or spaces
  phoneLabel: '+91 00000 00000',
  hours: 'Mon to Sat, 10am to 7pm',
  designer: 'Khushi Parikh',
  year: 2026,
};

export const waLink = (text = 'Hi, I want a 3D printing quote') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const navLinks = [['Home','/'],['About Us','/about'],['Materials','/materials'],['Products Store','/products'],['Projects','/projects'],['Industries','/industries'],['Contact Us','/contact']];
export const materials = ['PLA','PLA+','PETG','ABS','ASA','TPU','NYLON','PC','PETG-CF','PA-CF','RESIN'];
export const contactOptions = ['Prototype','Custom gift','Spare part','Architecture model','3D modelling','Other'];
export const faqs = [
 {
  "q": "What file format do I need?",
  "a": "STL or OBJ works best. No file? Send a sketch or photo and we can model it for you."
 },
 {
  "q": "How long does printing take?",
  "a": "Small items are ready in 1 day. Larger or detailed prints take 2 to 4 days."
 },
 {
  "q": "Which material should I choose?",
  "a": "PLA for general use, PETG or ABS for strength, TPU for flexible parts, resin for fine detail."
 },
 {
  "q": "Do you deliver outside the city?",
  "a": "Yes, we ship across India by courier."
 }
];
export const prints = [
 {
  "cat": "model",
  "bg": "#178aa1,#0b3f4d",
  "time": "9h 20m",
  "svg": "<svg viewBox=\"0 0 200 200\"><rect x=\"28\" y=\"96\" width=\"86\" height=\"84\" fill=\"#fff\"/><polygon points=\"28,96 71,56 114,96\" fill=\"#d6f1f6\"/><rect x=\"114\" y=\"62\" width=\"52\" height=\"118\" fill=\"#b9e4ed\"/><rect x=\"40\" y=\"112\" width=\"16\" height=\"20\" fill=\"#0b3f4d\" opacity=\".55\"/><rect x=\"72\" y=\"112\" width=\"16\" height=\"20\" fill=\"#0b3f4d\" opacity=\".55\"/><rect x=\"126\" y=\"76\" width=\"12\" height=\"14\" fill=\"#0b3f4d\" opacity=\".55\"/><rect x=\"146\" y=\"76\" width=\"12\" height=\"14\" fill=\"#0b3f4d\" opacity=\".55\"/><rect x=\"126\" y=\"104\" width=\"12\" height=\"14\" fill=\"#0b3f4d\" opacity=\".55\"/><rect x=\"146\" y=\"104\" width=\"12\" height=\"14\" fill=\"#0b3f4d\" opacity=\".55\"/><rect x=\"14\" y=\"180\" width=\"172\" height=\"6\" rx=\"3\" fill=\"#fff\" opacity=\".6\"/></svg>",
  "title": "Residential Tower Model",
  "desc": "1:100 scale architecture model made for a builder presentation.",
  "tags": [
   "PLA",
   "0.12mm layers"
  ]
 },
 {
  "cat": "prototype",
  "bg": "#3b82f6,#1e2a5a",
  "time": "4h 45m",
  "svg": "<svg viewBox=\"0 0 200 200\"><circle cx=\"100\" cy=\"100\" r=\"64\" fill=\"none\" stroke=\"#fff\" stroke-width=\"20\" stroke-dasharray=\"11.5 10.84\"/><circle cx=\"100\" cy=\"100\" r=\"56\" fill=\"#fff\"/><circle cx=\"100\" cy=\"100\" r=\"34\" fill=\"#cfe0ff\"/><circle cx=\"100\" cy=\"100\" r=\"16\" fill=\"#1e2a5a\"/></svg>",
  "title": "Gearbox Prototype",
  "desc": "Functional gear set to test the fit before CNC machining.",
  "tags": [
   "PETG",
   "0.16mm layers"
  ]
 },
 {
  "cat": "gift",
  "bg": "#a855f7,#3b1c5a",
  "time": "6h 10m",
  "svg": "<svg viewBox=\"0 0 200 200\"><circle cx=\"62\" cy=\"48\" r=\"18\" fill=\"#fff\"/><circle cx=\"138\" cy=\"48\" r=\"18\" fill=\"#fff\"/><circle cx=\"62\" cy=\"48\" r=\"9\" fill=\"#e9d5ff\"/><circle cx=\"138\" cy=\"48\" r=\"9\" fill=\"#e9d5ff\"/><circle cx=\"100\" cy=\"70\" r=\"40\" fill=\"#fff\"/><ellipse cx=\"100\" cy=\"82\" rx=\"16\" ry=\"12\" fill=\"#e9d5ff\"/><circle cx=\"86\" cy=\"64\" r=\"5\" fill=\"#3b1c5a\"/><circle cx=\"114\" cy=\"64\" r=\"5\" fill=\"#3b1c5a\"/><ellipse cx=\"100\" cy=\"78\" rx=\"5\" ry=\"3.5\" fill=\"#3b1c5a\"/><ellipse cx=\"100\" cy=\"138\" rx=\"42\" ry=\"50\" fill=\"#fff\"/><ellipse cx=\"100\" cy=\"142\" rx=\"24\" ry=\"30\" fill=\"#e9d5ff\"/><circle cx=\"52\" cy=\"120\" r=\"14\" fill=\"#fff\"/><circle cx=\"148\" cy=\"120\" r=\"14\" fill=\"#fff\"/><circle cx=\"76\" cy=\"184\" r=\"16\" fill=\"#fff\"/><circle cx=\"124\" cy=\"184\" r=\"16\" fill=\"#fff\"/></svg>",
  "title": "Custom Figurine",
  "desc": "Personalised character created from a customer’s photo.",
  "tags": [
   "Resin",
   "0.05mm layers"
  ]
 },
 {
  "cat": "gift",
  "bg": "#10b981,#0b4a37",
  "time": "3h 30m",
  "svg": "<svg viewBox=\"0 0 200 200\"><ellipse cx=\"100\" cy=\"60\" rx=\"8\" ry=\"30\" fill=\"#bbf7d0\" transform=\"rotate(-30 100 80)\"/><ellipse cx=\"100\" cy=\"50\" rx=\"8\" ry=\"34\" fill=\"#86efac\"/><ellipse cx=\"100\" cy=\"60\" rx=\"8\" ry=\"30\" fill=\"#bbf7d0\" transform=\"rotate(30 100 80)\"/><path d=\"M62 84 H138 L128 176 Q127 184 119 184 H81 Q73 184 72 176 Z\" fill=\"#fff\"/><path d=\"M66 112 H134 M69 138 H131 M72 160 H128\" stroke=\"#10b981\" stroke-width=\"3\" opacity=\".5\" fill=\"none\"/><rect x=\"58\" y=\"78\" width=\"84\" height=\"12\" rx=\"6\" fill=\"#fff\"/></svg>",
  "title": "Designer Planter",
  "desc": "Geometric vase with a spiral pattern, printed in vase mode.",
  "tags": [
   "PLA",
   "Vase mode"
  ]
 },
 {
  "cat": "gift",
  "bg": "#f59e0b,#6b4306",
  "time": "5h 00m",
  "svg": "<svg viewBox=\"0 0 200 200\"><rect x=\"22\" y=\"56\" width=\"156\" height=\"84\" rx=\"20\" fill=\"#fff\"/><text x=\"100\" y=\"112\" text-anchor=\"middle\" font-size=\"46\" font-weight=\"800\" font-family=\"system-ui,sans-serif\" fill=\"#f59e0b\">ARYA</text><rect x=\"44\" y=\"140\" width=\"112\" height=\"14\" rx=\"5\" fill=\"#ffe7b0\"/><rect x=\"34\" y=\"154\" width=\"132\" height=\"14\" rx=\"7\" fill=\"#fff\"/><circle cx=\"100\" cy=\"30\" r=\"10\" fill=\"#fff6d1\"/></svg>",
  "title": "Name Lamp",
  "desc": "Backlit name sign with a warm LED base, popular for gifting.",
  "tags": [
   "PLA+",
   "LED base"
  ]
 },
 {
  "cat": "part",
  "bg": "#ef4444,#5a1414",
  "time": "2h 15m",
  "svg": "<svg viewBox=\"0 0 200 200\"><path d=\"M52 44 H100 V120 H172 V172 H52 Z\" fill=\"#fecaca\" opacity=\".55\"/><path d=\"M44 36 H92 V112 H164 V164 H44 Z\" fill=\"#fff\"/><circle cx=\"68\" cy=\"62\" r=\"9\" fill=\"#5a1414\"/><circle cx=\"68\" cy=\"138\" r=\"9\" fill=\"#5a1414\"/><circle cx=\"138\" cy=\"138\" r=\"9\" fill=\"#5a1414\"/></svg>",
  "title": "Spare Bracket",
  "desc": "Replacement for a discontinued machine mount, built to last.",
  "tags": [
   "ABS",
   "100% infill"
  ]
 }
];

export const expertise = [
 {
  "icon": "🏭",
  "title": "Industrial 3D Printing",
  "desc": "Functional components and parts for industrial use, printed with consistent quality."
 },
 {
  "icon": "🧩",
  "title": "Rapid Prototyping",
  "desc": "Turn a design into a physical prototype quickly, from a single piece."
 },
 {
  "icon": "📦",
  "title": "Bulk 3D Printing",
  "desc": "Small-batch production and multiple parts, with the same quality on every piece."
 },
 {
  "icon": "🎨",
  "title": "Custom 3D Printing",
  "desc": "Customized products made to your design, for industrial and individual customers."
 }
];
export const whyChoose = [
 "Quality-focused 3D printing.",
 "Multiple material options.",
 "Industrial and retail solutions.",
 "Custom part manufacturing.",
 "Single-piece and bulk orders.",
 "Support from design to final printed part."
];
export const steps = [
 {
  "title": "Share Your Requirement",
  "desc": "Send your 3D file, sketch or idea with the quantity you need."
 },
 {
  "title": "Get a Quote",
  "desc": "We review your requirement and share the price and timeline."
 },
 {
  "title": "3D Printing",
  "desc": "Your part is printed in the right material and settings."
 },
 {
  "title": "Quality Check & Delivery",
  "desc": "Every part is checked before it is delivered to you."
 }
];

export const fdm = [
 {
  "name": "PLA",
  "sub": "",
  "tag": "General Purpose",
  "line": "Easy to Print • Rigid • Good Finish",
  "mech": [
   [
    "Tensile Strength",
    "45 – 60 MPa"
   ],
   [
    "Flexural Strength",
    "70 – 100 MPa"
   ],
   [
    "Elongation at Break",
    "4 – 10 %"
   ],
   [
    "Hardness (Shore D)",
    "75 – 80 D"
   ],
   [
    "Density",
    "1.24 – 1.27 g/cm³"
   ]
  ],
  "therm": [
   [
    "Heat Deflection Temp. (HDT)",
    "50 – 60 °C"
   ],
   [
    "Glass Transition Temp. (Tg)",
    "55 – 65 °C"
   ]
  ],
  "perf": [
   "Low",
   "Moderate",
   "Good",
   "Good",
   "Limited"
  ],
  "apps": "Prototypes, visual models, decorative parts, non-load components.",
  "price": "₹5 – ₹7 / gram"
 },
 {
  "name": "PLA+",
  "sub": "",
  "tag": "Improved PLA",
  "line": "Tougher • More Durable • Better Impact Resistance",
  "mech": [
   [
    "Tensile Strength",
    "50 – 65 MPa"
   ],
   [
    "Flexural Strength",
    "80 – 110 MPa"
   ],
   [
    "Elongation at Break",
    "8 – 15 %"
   ],
   [
    "Hardness (Shore D)",
    "78 – 82 D"
   ],
   [
    "Density",
    "1.24 – 1.27 g/cm³"
   ]
  ],
  "therm": [
   [
    "Heat Deflection Temp. (HDT)",
    "50 – 60 °C"
   ],
   [
    "Glass Transition Temp. (Tg)",
    "55 – 65 °C"
   ]
  ],
  "perf": [
   "Low",
   "Good",
   "Moderate",
   "Good",
   "Limited"
  ],
  "apps": "Functional prototypes, casings, jigs, hobby parts, general-purpose components.",
  "price": "₹6 – ₹8 / gram"
 },
 {
  "name": "PETG",
  "sub": "",
  "tag": "Functional Parts",
  "line": "Strong • Durable • Chemical Resistant",
  "mech": [
   [
    "Tensile Strength",
    "40 – 55 MPa"
   ],
   [
    "Flexural Strength",
    "60 – 80 MPa"
   ],
   [
    "Elongation at Break",
    "10 – 25 %"
   ],
   [
    "Hardness (Shore D)",
    "75 – 85 D"
   ],
   [
    "Density",
    "1.24 – 1.27 g/cm³"
   ]
  ],
  "therm": [
   [
    "Heat Deflection Temp. (HDT)",
    "65 – 80 °C"
   ],
   [
    "Glass Transition Temp. (Tg)",
    "75 – 85 °C"
   ]
  ],
  "perf": [
   "Medium",
   "Good",
   "Good",
   "Good",
   "Limited"
  ],
  "apps": "Machine covers, brackets, enclosures, functional components, fixtures.",
  "price": "₹7 – ₹9 / gram"
 },
 {
  "name": "ABS",
  "sub": "",
  "tag": "Engineering Grade",
  "line": "Tough • Impact Resistant • Higher Heat Resistance",
  "mech": [
   [
    "Tensile Strength",
    "30 – 45 MPa"
   ],
   [
    "Flexural Strength",
    "50 – 75 MPa"
   ],
   [
    "Elongation at Break",
    "10 – 30 %"
   ],
   [
    "Hardness (Shore D)",
    "70 – 80 D"
   ],
   [
    "Density",
    "1.03 – 1.07 g/cm³"
   ]
  ],
  "therm": [
   [
    "Heat Deflection Temp. (HDT)",
    "85 – 100 °C"
   ],
   [
    "Glass Transition Temp. (Tg)",
    "105 – 115 °C"
   ]
  ],
  "perf": [
   "Medium",
   "Good",
   "Moderate",
   "Moderate",
   "Poor"
  ],
  "apps": "Functional parts, automotive components, housings, tools and durable prototypes.",
  "price": "₹7 – ₹10 / gram"
 },
 {
  "name": "ASA",
  "sub": "",
  "tag": "Outdoor Grade",
  "line": "UV & Weather Resistant • Tough • Durable",
  "mech": [
   [
    "Tensile Strength",
    "35 – 50 MPa"
   ],
   [
    "Flexural Strength",
    "60 – 85 MPa"
   ],
   [
    "Elongation at Break",
    "10 – 20 %"
   ],
   [
    "Hardness (Shore D)",
    "75 – 85 D"
   ],
   [
    "Density",
    "1.06 – 1.10 g/cm³"
   ]
  ],
  "therm": [
   [
    "Heat Deflection Temp. (HDT)",
    "90 – 105 °C"
   ],
   [
    "Glass Transition Temp. (Tg)",
    "105 – 115 °C"
   ]
  ],
  "perf": [
   "Medium",
   "Good",
   "Good",
   "Good",
   "Excellent"
  ],
  "apps": "Outdoor enclosures, automotive parts, UV exposed components, durable housings.",
  "price": "₹8 – ₹11 / gram"
 },
 {
  "name": "TPU",
  "sub": "(95A)",
  "tag": "Flexible Material",
  "line": "Rubber-Like • Shock Absorbing • Wear Resistant",
  "mech": [
   [
    "Tensile Strength",
    "20 – 50 MPa"
   ],
   [
    "Flexural Strength",
    "10 – 30 MPa"
   ],
   [
    "Elongation at Break",
    "300 – 600 %"
   ],
   [
    "Hardness (Shore A)",
    "95 A"
   ],
   [
    "Density",
    "1.18 – 1.23 g/cm³"
   ]
  ],
  "therm": [
   [
    "Heat Deflection Temp. (HDT)",
    "50 – 80 °C"
   ],
   [
    "Glass Transition Temp. (Tg)",
    "−40 – 0 °C"
   ]
  ],
  "perf": [
   "High",
   "Excellent",
   "Good",
   "Good",
   "Limited"
  ],
  "apps": "Gaskets, seals, dampers, flexible joints, protective covers and shock-absorbing parts.",
  "price": "₹12 – ₹18 / gram"
 },
 {
  "name": "Nylon",
  "sub": "(PA)",
  "tag": "High Strength",
  "line": "Tough • Wear Resistant • Low Friction",
  "mech": [
   [
    "Tensile Strength",
    "45 – 80 MPa"
   ],
   [
    "Flexural Strength",
    "70 – 120 MPa"
   ],
   [
    "Elongation at Break",
    "20 – 50 %"
   ],
   [
    "Hardness (Shore D)",
    "75 – 85 D"
   ],
   [
    "Density",
    "1.12 – 1.15 g/cm³"
   ]
  ],
  "therm": [
   [
    "Heat Deflection Temp. (HDT)",
    "70 – 120 °C"
   ],
   [
    "Glass Transition Temp. (Tg)",
    "40 – 60 °C"
   ]
  ],
  "perf": [
   "Medium",
   "Excellent",
   "Moderate",
   "Good",
   "Limited"
  ],
  "apps": "Gears, bushings, functional mechanical parts, wear components and high-strength prototypes.",
  "price": "₹12 – ₹18 / gram"
 },
 {
  "name": "PC",
  "sub": "(Polycarbonate)",
  "tag": "High Performance",
  "line": "High Strength • High Heat • Impact Resistant",
  "mech": [
   [
    "Tensile Strength",
    "50 – 70 MPa"
   ],
   [
    "Flexural Strength",
    "80 – 110 MPa"
   ],
   [
    "Elongation at Break",
    "80 – 120 %"
   ],
   [
    "Hardness (Shore D)",
    "78 – 85 D"
   ],
   [
    "Density",
    "1.20 – 1.22 g/cm³"
   ]
  ],
  "therm": [
   [
    "Heat Deflection Temp. (HDT)",
    "100 – 120 °C"
   ],
   [
    "Glass Transition Temp. (Tg)",
    "145 – 150 °C"
   ]
  ],
  "perf": [
   "Medium",
   "Excellent",
   "Good",
   "Moderate",
   "Limited"
  ],
  "apps": "High-strength housings, safety covers, engineering parts, heat-resistant components.",
  "price": "₹14 – ₹20 / gram"
 },
 {
  "name": "PETG-CF",
  "sub": "",
  "tag": "Carbon Filled PETG",
  "line": "Higher Stiffness • Better Strength • Dimensional Stability",
  "mech": [
   [
    "Tensile Strength",
    "35 – 55 MPa"
   ],
   [
    "Flexural Strength",
    "70 – 100 MPa"
   ],
   [
    "Elongation at Break",
    "5 – 15 %"
   ],
   [
    "Hardness (Shore D)",
    "80 – 85 D"
   ],
   [
    "Density",
    "1.30 – 1.35 g/cm³"
   ]
  ],
  "therm": [
   [
    "Heat Deflection Temp. (HDT)",
    "65 – 80 °C"
   ],
   [
    "Glass Transition Temp. (Tg)",
    "75 – 85 °C"
   ]
  ],
  "perf": [
   "Low",
   "Good",
   "Good",
   "Good",
   "Moderate"
  ],
  "apps": "Stiff and dimensionally stable parts, jigs, fixtures, structural prototypes and functional components.",
  "price": "₹14 – ₹20 / gram"
 },
 {
  "name": "PA-CF",
  "sub": "(Nylon Carbon Fiber)",
  "tag": "High Strength Engineering",
  "line": "Lightweight • Rigid • High Heat Resistance",
  "mech": [
   [
    "Tensile Strength",
    "60 – 100 MPa"
   ],
   [
    "Flexural Strength",
    "100 – 150 MPa"
   ],
   [
    "Elongation at Break",
    "5 – 15 %"
   ],
   [
    "Hardness (Shore D)",
    "80 – 90 D"
   ],
   [
    "Density",
    "1.25 – 1.35 g/cm³"
   ]
  ],
  "therm": [
   [
    "Heat Deflection Temp. (HDT)",
    "120 – 160 °C"
   ],
   [
    "Glass Transition Temp. (Tg)",
    "50 – 70 °C"
   ]
  ],
  "perf": [
   "Low",
   "Excellent",
   "Moderate",
   "Good",
   "Moderate"
  ],
  "apps": "High-strength, lightweight parts, jigs & fixtures, drone/robotics components, industrial end-use parts.",
  "price": "₹18 – ₹28 / gram"
 }
];
export const resin = [
 {
  "name": "Standard Resin",
  "tag": "General Purpose",
  "line": "High detail • Smooth surface • Cost effective",
  "mech": [
   [
    "Tensile Strength",
    "30–45 MPa"
   ],
   [
    "Flexural Strength",
    "50–70 MPa"
   ],
   [
    "Elongation at Break",
    "4–8%"
   ]
  ],
  "therm": [
   [
    "Heat Resistance (HDT)",
    "50–60°C"
   ]
  ],
  "perf": [
   [
    "Hardness",
    "80–85 Shore D"
   ],
   [
    "Density",
    "1.10–1.15 g/cm³"
   ]
  ],
  "apps": "Detail models, visual prototypes, product design, miniatures, display parts.",
  "price": "₹12 – ₹18/g"
 },
 {
  "name": "ABS-Like Resin",
  "tag": "Tough & Durable",
  "line": "Higher strength • Impact resistant • ABS-like performance",
  "mech": [
   [
    "Tensile Strength",
    "40–55 MPa"
   ],
   [
    "Flexural Strength",
    "70–90 MPa"
   ],
   [
    "Elongation at Break",
    "10–20%"
   ]
  ],
  "therm": [
   [
    "Heat Resistance (HDT)",
    "70–80°C"
   ]
  ],
  "perf": [
   [
    "Hardness",
    "83–87 Shore D"
   ],
   [
    "Density",
    "1.10–1.15 g/cm³"
   ]
  ],
  "apps": "Functional prototypes, snap-fit parts, housings, end-use components.",
  "price": "₹14 – ₹22/g"
 },
 {
  "name": "Tough Resin",
  "tag": "High Impact",
  "line": "Strong • Durable • Better weight-bearing",
  "mech": [
   [
    "Tensile Strength",
    "45–65 MPa"
   ],
   [
    "Flexural Strength",
    "70–110 MPa"
   ],
   [
    "Elongation at Break",
    "20–40%"
   ]
  ],
  "therm": [
   [
    "Heat Resistance (HDT)",
    "60–70°C"
   ]
  ],
  "perf": [
   [
    "Hardness",
    "75–82 Shore D"
   ],
   [
    "Density",
    "1.08–1.12 g/cm³"
   ]
  ],
  "apps": "Functional parts, assemblies, jigs & fixtures, load-bearing prototypes.",
  "price": "₹16 – ₹24/g"
 },
 {
  "name": "Flexible Resin",
  "tag": "Elastic & Soft",
  "line": "Rubber-like • Bending resistant • Shock absorbing",
  "mech": [
   [
    "Tensile Strength",
    "3–10 MPa"
   ],
   [
    "Flexural Strength",
    "2–8 MPa"
   ],
   [
    "Elongation at Break",
    "100–300%"
   ]
  ],
  "therm": [
   [
    "Heat Resistance (HDT)",
    "40–60°C"
   ]
  ],
  "perf": [
   [
    "Hardness",
    "50–85 Shore A"
   ],
   [
    "Density",
    "1.02–1.08 g/cm³"
   ]
  ],
  "apps": "Gaskets, seals, grips, vibration dampers, soft-touch components.",
  "price": "₹18 – ₹28/g"
 },
 {
  "name": "High Temp Resin",
  "tag": "Heat Resistant",
  "line": "Withstands higher temperatures for functional use",
  "mech": [
   [
    "Tensile Strength",
    "30–70 MPa"
   ],
   [
    "Flexural Strength",
    "80–120 MPa"
   ],
   [
    "Elongation at Break",
    "6–12%"
   ]
  ],
  "therm": [
   [
    "Heat Resistance (HDT)",
    "120–160°C"
   ]
  ],
  "perf": [
   [
    "Hardness",
    "85–90 Shore D"
   ],
   [
    "Density",
    "1.15–1.20 g/cm³"
   ]
  ],
  "apps": "Heat-exposed parts, functional testing, engineering prototypes, jigs & fixtures.",
  "price": "₹10 – ₹32/g"
 },
 {
  "name": "Castable Resin",
  "tag": "Investment Casting",
  "line": "Burns out cleanly • Low ash • For metal casting",
  "mech": [
   [
    "Tensile Strength",
    "20–40 MPa"
   ],
   [
    "Flexural Strength",
    "40–70 MPa"
   ],
   [
    "Elongation at Break",
    "2–6%"
   ]
  ],
  "therm": [
   [
    "Heat Resistance (HDT)",
    "55–65°C"
   ]
  ],
  "perf": [
   [
    "Ash Residue",
    "< 0.1%"
   ],
   [
    "Density",
    "1.05–1.12 g/cm³"
   ]
  ],
  "apps": "Jewellery casting, dental casting, precision metal casting patterns.",
  "price": "₹20 – ₹35/g"
 },
 {
  "name": "Dental / Biocompatible Resin",
  "tag": "Dental Applications",
  "line": "High accuracy • Safe • Precision results",
  "mech": [
   [
    "Tensile Strength",
    "50–80 MPa"
   ],
   [
    "Flexural Strength",
    "100–130 MPa"
   ],
   [
    "Elongation at Break",
    "5–10%"
   ]
  ],
  "therm": [
   [
    "Heat Resistance (HDT)",
    "70–90°C"
   ]
  ],
  "perf": [
   [
    "Hardness",
    "85–90 Shore D"
   ],
   [
    "Density",
    "1.10–1.16 g/cm³"
   ]
  ],
  "apps": "Dental models, aligners (indirect), surgical guides, orthodontic appliances.",
  "price": "₹18 – ₹30/g"
 },
 {
  "name": "Engineering Resin",
  "tag": "Rigid & Accurate",
  "line": "High strength • Dimensionally stable • Smooth & precise",
  "mech": [
   [
    "Tensile Strength",
    "60–85 MPa"
   ],
   [
    "Flexural Strength",
    "110–150 MPa"
   ],
   [
    "Elongation at Break",
    "4–10%"
   ]
  ],
  "therm": [
   [
    "Heat Resistance (HDT)",
    "80–100°C"
   ]
  ],
  "perf": [
   [
    "Hardness",
    "85–92 Shore D"
   ],
   [
    "Density",
    "1.15–1.20 g/cm³"
   ]
  ],
  "apps": "Functional components, precision parts, engineering prototypes, jigs & fixtures.",
  "price": "₹18 – ₹32/g"
 }
];
export const quoteMaterials = [...fdm.map((m) => m.name), ...resin.map((r) => 'Resin – ' + r.name.replace(/ Resin$/, ''))];

export const fdmCompare = [
 {
  "name": "PLA",
  "sub": "",
  "color": "#3b6fd4",
  "v": [
   "50–65 MPa",
   "70–110 MPa",
   "3–6%",
   "50–60°C",
   "80–85 D",
   "1.24 g/cm³"
  ],
  "d": [
   3,
   2,
   1,
   1,
   1,
   2
  ],
  "price": "₹5 – ₹7/g"
 },
 {
  "name": "PLA+",
  "sub": "",
  "color": "#12a28f",
  "v": [
   "60–70 MPa",
   "80–120 MPa",
   "5–8%",
   "55–65°C",
   "82–86 D",
   "1.24 g/cm³"
  ],
  "d": [
   4,
   3,
   2,
   2,
   2,
   3
  ],
  "price": "₹6 – ₹8/g"
 },
 {
  "name": "PETG",
  "sub": "",
  "color": "#5b3fa8",
  "v": [
   "40–55 MPa",
   "60–80 MPa",
   "10–25%",
   "65–80°C",
   "75–85 D",
   "1.24–1.27 g/cm³"
  ],
  "d": [
   4,
   4,
   3,
   4,
   2,
   3
  ],
  "price": "₹7 – ₹9/g"
 },
 {
  "name": "ABS",
  "sub": "",
  "color": "#b03a6e",
  "v": [
   "30–45 MPa",
   "60–90 MPa",
   "10–30%",
   "90–100°C",
   "90–95 D",
   "1.04 g/cm³"
  ],
  "d": [
   3,
   4,
   3,
   3,
   1,
   3
  ],
  "price": "₹7 – ₹10/g"
 },
 {
  "name": "ASA",
  "sub": "",
  "color": "#e8692e",
  "v": [
   "40–50 MPa",
   "70–100 MPa",
   "12–25%",
   "95–110°C",
   "90–95 D",
   "1.04 g/cm³"
  ],
  "d": [
   4,
   4,
   3,
   4,
   5,
   3
  ],
  "price": "₹8 – ₹11/g"
 },
 {
  "name": "TPU",
  "sub": "(95A)",
  "color": "#4aa23c",
  "v": [
   "25–40 MPa",
   "10–25 MPa",
   "300–500%",
   "70–80°C",
   "95 A",
   "1.04 g/cm³"
  ],
  "d": [
   2,
   5,
   5,
   4,
   2,
   4
  ],
  "price": "₹12 – ₹18/g"
 },
 {
  "name": "Nylon",
  "sub": "(PA)",
  "color": "#2d6cdf",
  "v": [
   "60–80 MPa",
   "80–120 MPa",
   "20–50%",
   "100–120°C",
   "80–85 D",
   "1.13–1.15 g/cm³"
  ],
  "d": [
   4,
   4,
   3,
   4,
   2,
   4
  ],
  "price": "₹10 – ₹14/g"
 },
 {
  "name": "PC",
  "sub": "",
  "color": "#1e8a9e",
  "v": [
   "60–70 MPa",
   "95–130 MPa",
   "5–10%",
   "120–135°C",
   "85–90 D",
   "1.20 g/cm³"
  ],
  "d": [
   4,
   4,
   2,
   4,
   3,
   3
  ],
  "price": "₹12 – ₹18/g"
 },
 {
  "name": "PETG-CF",
  "sub": "",
  "color": "#1b1f26",
  "v": [
   "55–70 MPa",
   "85–120 MPa",
   "8–15%",
   "70–85°C",
   "80–86 D",
   "1.28 g/cm³"
  ],
  "d": [
   4,
   4,
   2,
   5,
   4,
   3
  ],
  "price": "₹14 – ₹20/g"
 },
 {
  "name": "PA-CF",
  "sub": "",
  "color": "#1b1f26",
  "v": [
   "75–95 MPa",
   "110–150 MPa",
   "8–20%",
   "120–150°C",
   "80–90 D",
   "1.25–1.30 g/cm³"
  ],
  "d": [
   5,
   5,
   2,
   5,
   4,
   5
  ],
  "price": "₹18 – ₹25/g"
 }
];
export const fdmGuide = [
 [
  "Easy & Cost Effective",
  "PLA, PLA+"
 ],
 [
  "Functional & Durable",
  "PETG, ABS"
 ],
 [
  "Outdoor / UV Use",
  "ASA"
 ],
 [
  "Flexible Parts",
  "TPU (95A)"
 ],
 [
  "High Strength & Engineering Use",
  "Nylon (PA), PC, PETG-CF, PA-CF"
 ]
];
export const fdmUses = [
 [
  "PLA / PLA+",
  "Prototypes, models, visual parts"
 ],
 [
  "PETG",
  "Functional parts, enclosures, brackets"
 ],
 [
  "ABS",
  "Mechanical parts, housings, general use"
 ],
 [
  "ASA",
  "Outdoor and UV-exposed parts"
 ],
 [
  "TPU",
  "Flexible parts, gaskets, grips"
 ],
 [
  "Nylon",
  "Wear parts, gears, jigs & fixtures"
 ],
 [
  "PC",
  "High-strength, heat-resistant parts"
 ],
 [
  "PETG-CF / PA-CF",
  "Strong, stiff, lightweight engineering components"
 ]
];

export const industries = [
 {
  "icon": "🏭",
  "title": "Manufacturing",
  "desc": "Machinery & Components"
 },
 {
  "icon": "🚗",
  "title": "Automotive",
  "desc": "Vehicles & EV"
 },
 {
  "icon": "✈️",
  "title": "Aerospace",
  "desc": "Aircraft & Defence"
 },
 {
  "icon": "🔌",
  "title": "Electrical",
  "desc": "Electronics & Enclosures"
 },
 {
  "icon": "🏥",
  "title": "Medical",
  "desc": "Healthcare & Dental"
 },
 {
  "icon": "🏗️",
  "title": "Architecture",
  "desc": "Building & Interior"
 },
 {
  "icon": "🛢️",
  "title": "Oil & Gas",
  "desc": "Pumps, Valves & Energy"
 },
 {
  "icon": "🌾",
  "title": "Agriculture",
  "desc": "Farm Machinery"
 },
 {
  "icon": "🤖",
  "title": "Robotics",
  "desc": "Automation & Drones"
 },
 {
  "icon": "🎓",
  "title": "Education",
  "desc": "Research & Projects"
 },
 {
  "icon": "🛍️",
  "title": "Consumer",
  "desc": "Lifestyle Products"
 },
 {
  "icon": "📦",
  "title": "Packaging",
  "desc": "Moulds & Equipment"
 },
 {
  "icon": "🍽️",
  "title": "Food",
  "desc": "Processing Machinery"
 },
 {
  "icon": "🧵",
  "title": "Textile",
  "desc": "Garment & Footwear"
 },
 {
  "icon": "🚢",
  "title": "Marine",
  "desc": "Shipbuilding"
 },
 {
  "icon": "⛏️",
  "title": "Mining",
  "desc": "Heavy Equipment"
 },
 {
  "icon": "🦺",
  "title": "Safety",
  "desc": "Protection Systems"
 },
 {
  "icon": "🔬",
  "title": "Laboratory",
  "desc": "Scientific Equipment"
 },
 {
  "icon": "💍",
  "title": "Art & Jewellery",
  "desc": "Creative Manufacturing"
 },
 {
  "icon": "🛒",
  "title": "Retail",
  "desc": "E-Commerce & Branding"
 }
];
export const resinCompare = [
 {
  "name": "Standard",
  "sub": "Resin",
  "color": "#1c5fb0",
  "v": [
   "30–45 MPa",
   "50–70 MPa",
   "4–8%",
   "50–60°C",
   "80–85 D",
   "1.10–1.15 g/cm³"
  ],
  "d": [
   3,
   2,
   1,
   5,
   5
  ],
  "price": "₹12 – ₹18/g"
 },
 {
  "name": "ABS-Like",
  "sub": "Resin",
  "color": "#12a28f",
  "v": [
   "40–55 MPa",
   "70–90 MPa",
   "10–20%",
   "70–80°C",
   "83–87 D",
   "1.10–1.15 g/cm³"
  ],
  "d": [
   4,
   4,
   2,
   5,
   5
  ],
  "price": "₹14 – ₹22/g"
 },
 {
  "name": "Tough",
  "sub": "Resin",
  "color": "#5b3fa8",
  "v": [
   "45–65 MPa",
   "70–110 MPa",
   "20–40%",
   "60–70°C",
   "75–82 D",
   "1.08–1.12 g/cm³"
  ],
  "d": [
   4,
   5,
   3,
   3,
   3
  ],
  "price": "₹16 – ₹24/g"
 },
 {
  "name": "Flexible",
  "sub": "Resin",
  "color": "#b0235f",
  "v": [
   "3–10 MPa",
   "2–8 MPa",
   "100–300%",
   "40–60°C",
   "50–85 A",
   "1.02–1.08 g/cm³"
  ],
  "d": [
   1,
   4,
   5,
   4,
   4
  ],
  "price": "₹18 – ₹28/g"
 },
 {
  "name": "High Temp",
  "sub": "Resin",
  "color": "#e8692e",
  "v": [
   "30–70 MPa",
   "80–120 MPa",
   "6–12%",
   "120–160°C",
   "85–90 D",
   "1.15–1.20 g/cm³"
  ],
  "d": [
   4,
   3,
   1,
   4,
   4
  ],
  "price": "₹10 – ₹32/g"
 },
 {
  "name": "Castable",
  "sub": "Resin",
  "color": "#b8860b",
  "v": [
   "20–40 MPa",
   "40–70 MPa",
   "2–6%",
   "55–65°C",
   "–",
   "1.05–1.12 g/cm³"
  ],
  "d": [
   3,
   2,
   1,
   5,
   5
  ],
  "price": "₹20 – ₹35/g"
 },
 {
  "name": "Dental / Biocompatible",
  "sub": "Resin",
  "color": "#1f8a8a",
  "v": [
   "50–80 MPa",
   "100–150 MPa",
   "5–10%",
   "70–90°C",
   "85–90 D",
   "1.10–1.16 g/cm³"
  ],
  "d": [
   4,
   2,
   2,
   5,
   5
  ],
  "price": "₹18 – ₹30/g"
 },
 {
  "name": "Engineering",
  "sub": "Resin",
  "color": "#17479a",
  "v": [
   "60–85 MPa",
   "110–150 MPa",
   "4–10%",
   "80–100°C",
   "85–92 D",
   "1.15–1.20 g/cm³"
  ],
  "d": [
   5,
   4,
   2,
   5,
   5
  ],
  "price": "₹18 – ₹32/g"
 }
];
export const resinGuide = [
 [
  "General Use & High Detail",
  "Standard Resin"
 ],
 [
  "Durable & Functional Parts",
  "ABS-Like Resin, Tough Resin"
 ],
 [
  "Flexible Parts (Elastic)",
  "Flexible Resin"
 ],
 [
  "High Temperature Parts",
  "High Temp Resin"
 ],
 [
  "Casting (Jewellery / Metal)",
  "Castable Resin"
 ],
 [
  "Dental & Medical Use",
  "Dental Resin"
 ],
 [
  "Strong & Precision Parts",
  "Engineering Resin"
 ]
];
export const resinUses = [
 [
  "Standard",
  "Models, prototypes, display parts"
 ],
 [
  "ABS-Like",
  "Snap-fit parts, housings, enclosures"
 ],
 [
  "Tough",
  "Functional parts, load-bearing prototypes"
 ],
 [
  "Flexible",
  "Gaskets, seals, grips, soft components"
 ],
 [
  "High Temp",
  "Heat-exposed parts, testing, jigs"
 ],
 [
  "Castable",
  "Jewellery, investment casting"
 ],
 [
  "Dental",
  "Dental models, aligners, surgical guides"
 ],
 [
  "Engineering",
  "High-strength, precise & dimensionally stable parts"
 ]
];
export const selectionGuide = [
 [
  "High Strength",
  "PA-CF / PC"
 ],
 [
  "Flexible Parts",
  "TPU"
 ],
 [
  "Outdoor Use",
  "ASA"
 ],
 [
  "Low Cost",
  "PLA"
 ],
 [
  "Heat Resistance",
  "PC / Nylon"
 ],
 [
  "Fine Details",
  "Standard Resin"
 ],
 [
  "Industrial Production",
  "SLS PA12"
 ]
];
export const fdmColours = {
 "groups": [
  {
   "title": "Standard Colours",
   "items": [
    [
     "Black",
     "#111"
    ],
    [
     "White",
     "#f5f5f5"
    ],
    [
     "Grey",
     "#8a8f98"
    ],
    [
     "Light Grey",
     "#c4c8cf"
    ],
    [
     "Red",
     "#e0262c"
    ],
    [
     "Blue",
     "#1f5fd6"
    ],
    [
     "Green",
     "#1fa03a"
    ],
    [
     "Yellow",
     "#f5d90f"
    ],
    [
     "Orange",
     "#f28a1b"
    ],
    [
     "Pink",
     "#f59ab8"
    ],
    [
     "Purple",
     "#6f3fc0"
    ],
    [
     "Brown",
     "#7a4a2a"
    ],
    [
     "Beige",
     "#e3c9a0"
    ],
    [
     "Natural",
     "#efe6cf"
    ],
    [
     "Transparent",
     "repeating-conic-gradient(#d9d9d9 0 25%,#fff 0 50%) 0 0/12px 12px"
    ]
   ]
  },
  {
   "title": "Special Shades",
   "items": [
    [
     "Royal Blue",
     "#2038d6"
    ],
    [
     "Sky Blue",
     "#6fb4f0"
    ],
    [
     "Teal",
     "#1f9e96"
    ],
    [
     "Cyan",
     "#35c5e8"
    ],
    [
     "Navy Blue",
     "#14307a"
    ],
    [
     "Forest Green",
     "#14543a"
    ],
    [
     "Lime Green",
     "#55d12e"
    ],
    [
     "Olive Green",
     "#6a7a45"
    ],
    [
     "Army Green",
     "#5b6240"
    ],
    [
     "Magenta",
     "#d6168c"
    ],
    [
     "Atomic Pink",
     "#f27a98"
    ],
    [
     "Mauve",
     "#b98ad8"
    ],
    [
     "Violet",
     "#5a2fd0"
    ],
    [
     "Ivory",
     "#efe3c4"
    ],
    [
     "Khaki",
     "#c8a878"
    ]
   ]
  },
  {
   "title": "Metallic / Silk Colours",
   "items": [
    [
     "Silk Gold",
     "#d8a52a"
    ],
    [
     "Silk Silver",
     "#b8bdc6"
    ],
    [
     "Silk Copper",
     "#b8683a"
    ],
    [
     "Silk Bronze",
     "#7a4a30"
    ],
    [
     "Silk Red",
     "#c2181f"
    ],
    [
     "Silk Blue",
     "#1c58c9"
    ],
    [
     "Silk Purple",
     "#6a35b8"
    ],
    [
     "Rose Gold",
     "#d9948a"
    ],
    [
     "Metallic Grey",
     "#7b8088"
    ],
    [
     "Metallic Black",
     "#1a1c20"
    ],
    [
     "Metallic Blue",
     "#17479a"
    ],
    [
     "Metallic Green",
     "#12853a"
    ],
    [
     "Metallic Red",
     "#a8141c"
    ],
    [
     "Metallic Purple",
     "#52239a"
    ]
   ]
  },
  {
   "title": "Multicolour & Effect Filaments",
   "items": [
    [
     "Rainbow",
     "linear-gradient(135deg,#f33,#fb3,#3c5,#38f,#a3f)"
    ],
    [
     "Silk Rainbow",
     "linear-gradient(135deg,#f6a,#fd8,#8e9,#8cf,#c9f)"
    ],
    [
     "Dual Colour",
     "linear-gradient(135deg,#1c58c9 50%,#d6168c 50%)"
    ],
    [
     "Tri Colour",
     "linear-gradient(135deg,#1796c8 33%,#6cc93a 33% 66%,#8a2ec8 66%)"
    ],
    [
     "Gradient",
     "linear-gradient(135deg,#6a35b8,#35c5e8)"
    ],
    [
     "Colour Changing (Thermochromic)",
     "linear-gradient(135deg,#2a8ef0,#a6d8ff)"
    ],
    [
     "Glow in Dark",
     "#43e06a"
    ],
    [
     "Marble",
     "linear-gradient(135deg,#eee,#aaa 40%,#f4f4f4 60%,#999)"
    ],
    [
     "Wood Fill",
     "#b98a56"
    ],
    [
     "Stone Fill",
     "#b5b3ae"
    ],
    [
     "Carbon Fiber Look (CF)",
     "repeating-linear-gradient(45deg,#111 0 3px,#2d2d2d 3px 6px)"
    ],
    [
     "Glitter",
     "radial-gradient(circle at 30% 30%,#fff 0 6%,transparent 7%),radial-gradient(circle at 70% 65%,#fff 0 5%,transparent 6%),#7a4fd0"
    ],
    [
     "Matte",
     "#26272b"
    ],
    [
     "Translucent Tinted",
     "linear-gradient(135deg,#8fd0ff,#2a7fd6)"
    ]
   ]
  }
 ],
 "availTitle": "Common Material Colour Availability",
 "avail": [
  [
   "PLA / PLA+",
   "Wide colour range (standard, silk, multi-colour)",
   [
    "Black",
    "White",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
    "Silk Gold",
    "Rainbow"
   ]
  ],
  [
   "PETG",
   "Standard, transparent & special shades",
   [
    "Black",
    "White",
    "Blue",
    "Transparent",
    "Teal",
    "Cyan"
   ]
  ],
  [
   "ABS",
   "Standard & matte colours (Black, White, Grey, etc.)",
   [
    "Black",
    "White",
    "Grey",
    "Matte"
   ]
  ],
  [
   "ASA",
   "Outdoor shades (Black, White, Grey, Green, etc.)",
   [
    "Black",
    "White",
    "Grey",
    "Green"
   ]
  ],
  [
   "TPU (95A)",
   "Black, White, Grey, Red, Blue, Transparent",
   [
    "Black",
    "White",
    "Grey",
    "Red",
    "Blue",
    "Transparent"
   ]
  ],
  [
   "Nylon (PA)",
   "Black, White, Grey, Natural",
   [
    "Black",
    "White",
    "Grey",
    "Natural"
   ]
  ],
  [
   "PC",
   "Black, White, Grey, Transparent",
   [
    "Black",
    "White",
    "Grey",
    "Transparent"
   ]
  ],
  [
   "CF Filled (PETG-CF / PA-CF)",
   "Black, Dark Grey (Carbon look)",
   [
    "Black",
    "Dark Grey",
    "Carbon Fiber Look (CF)"
   ]
  ]
 ],
 "note": "Colour availability may vary by material, brand and stock. Custom colours can be sourced on request."
};
export const resinColours = {
 "groups": [
  {
   "title": "Standard Colours",
   "items": [
    [
     "Grey",
     "#8a8f98"
    ],
    [
     "Light Grey",
     "#c4c8cf"
    ],
    [
     "Dark Grey",
     "#4a4e57"
    ],
    [
     "White",
     "#f5f5f5"
    ],
    [
     "Black",
     "#111"
    ],
    [
     "Beige",
     "#e3c9a0"
    ],
    [
     "Skin",
     "#e7b08a"
    ],
    [
     "Red",
     "#e0262c"
    ],
    [
     "Blue",
     "#1f5fd6"
    ],
    [
     "Green",
     "#1fa03a"
    ],
    [
     "Yellow",
     "#f5d90f"
    ],
    [
     "Orange",
     "#f28a1b"
    ],
    [
     "Pink",
     "#f59ab8"
    ],
    [
     "Purple",
     "#6f3fc0"
    ],
    [
     "Brown",
     "#7a4a2a"
    ]
   ]
  },
  {
   "title": "Transparent & Translucent Colours",
   "items": [
    [
     "Clear (Transparent)",
     "repeating-conic-gradient(#d9d9d9 0 25%,#fff 0 50%) 0 0/12px 12px"
    ],
    [
     "Translucent Blue",
     "#6ecbf0"
    ],
    [
     "Translucent Red",
     "#e7676d"
    ],
    [
     "Translucent Green",
     "#62d86f"
    ],
    [
     "Clear Blue",
     "#b5dcf3"
    ],
    [
     "Clear Green",
     "#b5e7cc"
    ],
    [
     "Clear Yellow",
     "#f3ec9a"
    ],
    [
     "Smoky Transparent",
     "#9aa0a8"
    ]
   ]
  },
  {
   "title": "Special Shades",
   "items": [
    [
     "Maroon",
     "#7a1f2b"
    ],
    [
     "Mint Green",
     "#7de3b4"
    ],
    [
     "Sky Blue",
     "#5fb4f2"
    ],
    [
     "Taro Purple",
     "#b7a0ec"
    ],
    [
     "Sakura Pink",
     "#f4a9c8"
    ],
    [
     "Lemon Yellow",
     "#f5ef5a"
    ],
    [
     "Light Beige",
     "#f0dfc4"
    ],
    [
     "Dark Beige",
     "#cfa57c"
    ],
    [
     "Olive Green",
     "#5d7a38"
    ],
    [
     "Fluorescent Green",
     "#4cff2a"
    ],
    [
     "Fluorescent Orange",
     "#ff8a1a"
    ],
    [
     "Navy Blue",
     "#16337a"
    ]
   ]
  }
 ],
 "availTitle": "Popular Colour by Resin Type",
 "avail": [
  [
   "Standard Resin",
   "Grey, White, Black, Beige, Clear",
   [
    "Grey",
    "White",
    "Black",
    "Beige",
    "Clear"
   ]
  ],
  [
   "ABS-Like Resin",
   "Grey, Black, White, Beige, Clear",
   [
    "Grey",
    "Black",
    "White",
    "Beige",
    "Clear"
   ]
  ],
  [
   "Tough Resin",
   "Grey, Black, Clear",
   [
    "Grey",
    "Black",
    "Clear"
   ]
  ],
  [
   "Flexible Resin",
   "Black, Clear, White",
   [
    "Black",
    "Clear",
    "White"
   ]
  ],
  [
   "High Temp Resin",
   "Amber, Grey, Clear",
   [
    "Amber",
    "Grey",
    "Clear"
   ]
  ],
  [
   "Dental / Biocompatible",
   "Beige, White, Clear",
   [
    "Beige",
    "White",
    "Clear"
   ]
  ],
  [
   "Castable Resin",
   "Purple, Blue, Green, Clear",
   [
    "Purple",
    "Blue",
    "Green",
    "Clear"
   ]
  ]
 ],
 "note": ""
};

// Social media handles – replace these links with your real profile URLs.
export const social = [
  ['Instagram', 'https://www.instagram.com/'],
  ['Facebook', 'https://www.facebook.com/'],
  ['LinkedIn', 'https://www.linkedin.com/'],
  ['YouTube', 'https://www.youtube.com/'],
];

export const reviews = [
 {
  "service": "Custom 3D Printing",
  "icon": "🎨",
  "text": "Aqua 3D provided excellent custom 3D printing services in Ahmedabad. The printed part had a clean finish, accurate dimensions and great detailing. Their team understood our requirements and delivered a quality product."
 },
 {
  "service": "Rapid Prototyping",
  "icon": "🧩",
  "text": "We needed a quick prototype for our product development, and Aqua 3D delivered exactly what we needed. Their rapid prototyping service helped us test our design faster and make improvements before production."
 },
 {
  "service": "Industrial 3D Printing",
  "icon": "🏭",
  "text": "Good experience with Aqua 3D for industrial 3D printing. They helped us manufacture a custom mechanical component with good dimensional accuracy and finishing. A useful service for engineering and manufacturing requirements."
 },
 {
  "service": "3D Printed Parts",
  "icon": "⚙️",
  "text": "Aqua 3D provided high-quality 3D printed parts as per our design requirements. The communication was clear, and the team helped us choose a suitable material for our application. Recommended for custom 3D printing work."
 },
 {
  "service": "Product Design & Prototyping",
  "icon": "📐",
  "text": "We approached Aqua 3D for product design and prototyping support. The team helped turn our concept into a physical prototype, making it easier to understand and evaluate the design. Professional service and good support."
 }
];

// About page counters. These numbers are PLACEHOLDERS – replace them with your real figures.
export const aboutStats = [
  { icon: '🏗️', value: 100, suffix: '+', label: 'Projects Completed' },
  { icon: '😊', value: 50, suffix: '+', label: 'Happy Customers' },
  { icon: '📅', value: 2, suffix: '+', label: 'Years of Experience' },
  { icon: '🏭', value: 20, suffix: '+', label: 'Industry Segments' },
];
