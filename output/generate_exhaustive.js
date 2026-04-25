const XLSX = require('xlsx');

const headers = [
  'S.No','Collar Type','Category','Subcategory','Sub-Subcategory','Specialization / Job Title','Sector','Min Qualification','Salary Range (INR/month)','Hiring Route','Demand'
];

const rows = [];
let n = 0;
const add = (collar, cat, sub, ssub, title, sector, edu, salary, exam, demand) => {
  n++;
  rows.push([n, collar, cat, sub, ssub, title, sector, edu, salary, exam, demand]);
};

/* =============================================================
   1. EDUCATION & TEACHING (every subject + every level)
   ============================================================= */
const schoolSubjects = [
  'Hindi','English','Sanskrit','Urdu','Tamil','Telugu','Marathi','Bengali','Gujarati','Kannada','Malayalam','Punjabi','Odia','Assamese','French','German','Spanish','Japanese','Chinese','Arabic',
  'Mathematics','Physics','Chemistry','Biology','Botany','Zoology','Computer Science','Information Technology','Environmental Science',
  'History','Geography','Civics','Political Science','Economics','Sociology','Psychology','Philosophy','Public Administration',
  'Accountancy','Business Studies','Commerce',
  'Physical Education','Yoga','Music (Vocal)','Music (Instrumental)','Dance','Drawing & Painting','Fine Arts','Art & Craft','Home Science',
  'Library Science','Moral Science','General Knowledge'
];
const schoolLevels = [
  ['Pre-Primary Teacher','Nursery / KG','NTT/Montessori','₹10,000 – ₹35,000'],
  ['Primary Teacher (PRT)','Class 1-5','D.El.Ed/B.El.Ed + CTET','₹25,000 – ₹65,000'],
  ['Trained Graduate Teacher (TGT)','Class 6-10','Graduation + B.Ed + CTET','₹35,000 – ₹85,000'],
  ['Post Graduate Teacher (PGT)','Class 11-12','PG + B.Ed + CTET/UGC-NET','₹47,600 – ₹1,51,000']
];

schoolLevels.forEach(([role, level, qual, sal]) => {
  schoolSubjects.forEach(sub => {
    add('White Collar','Education & Academia','School Teaching',role,`${role} – ${sub}`,'Govt/Private',qual,sal, role.includes('PGT')||role.includes('TGT')?'CTET + KVS/NVS/State TET':'CTET/State TET','High');
  });
});

// Higher Education / College & University (Assistant Professor by subject)
const collegeSubjects = [
  'Hindi Literature','English Literature','Sanskrit','Urdu','Tamil','Mathematics','Statistics','Physics','Chemistry','Botany','Zoology','Microbiology','Biotechnology','Biochemistry','Genetics','Computer Science','Information Technology','Electronics','History','Geography','Political Science','Economics','Commerce','Management','Sociology','Psychology','Philosophy','Public Administration','Education','Library Science','Law','Journalism & Mass Communication','Social Work','Fine Arts','Music','Physical Education','Geology','Anthropology','Defence Studies','Home Science','Linguistics','International Relations'
];
collegeSubjects.forEach(sub => {
  add('White Collar','Education & Academia','Higher Education','Assistant Professor',`Assistant Professor – ${sub}`,'Govt/Private','PG + NET/PhD','₹57,700 – ₹1,77,500','UGC-NET / SET / PhD','High');
});

// Coaching / EdTech specializations
['JEE Mains/Advanced','NEET-UG','UPSC CSE','SSC/Banking','GATE','CAT/MBA','GMAT/GRE','IELTS/TOEFL','CLAT','NDA/CDS','CA Foundation','Olympiads','Spoken English','Vedic Maths','Coding for Kids'].forEach(exam => {
  add('White Collar','Education & Academia','Coaching / EdTech','Subject Coach',`${exam} Faculty / Mentor`,'Private','PG/Domain Expert','₹40,000 – ₹5,00,000','Demo + Interview','Very High');
});

// Special Educators
['Special Educator (Autism)','Special Educator (Dyslexia)','Special Educator (ADHD)','Special Educator (Hearing Impaired)','Special Educator (Visually Impaired)','Special Educator (Intellectual Disability)','Speech Therapist','Behaviour Analyst (BCBA)'].forEach(t => {
  add('Gray Collar','Education & Academia','Special Education','Inclusive Schools',t,'Govt/Private','B.Ed Special Education','₹20,000 – ₹80,000','RCI Registration','Very High');
});

/* =============================================================
   2. IT / SOFTWARE (every language, framework, role)
   ============================================================= */
// Programming language developers
['Python','Java','C','C++','C#','.NET','Go (Golang)','Rust','Ruby on Rails','PHP','Laravel','Node.js','TypeScript','JavaScript','Kotlin','Swift','Scala','R','MATLAB','COBOL','Perl','Elixir','Erlang','Dart (Flutter)','Objective-C','Solidity (Blockchain)','Haskell','Julia','VBA','PL/SQL','SAP ABAP'].forEach(lang => {
  add('White Collar','IT, Software & Digital','Software Development','Programming Languages',`${lang} Developer`,'Private','B.Tech/BCA/MCA','₹35,000 – ₹4,00,000','Coding Interview','Very High');
});

// Frontend frameworks
['React.js','Angular','Vue.js','Next.js','Svelte','Ember.js','jQuery'].forEach(fw => {
  add('White Collar','IT, Software & Digital','Software Development','Frontend Frameworks',`${fw} Developer`,'Private','B.Tech/BCA','₹35,000 – ₹3,00,000','Coding Interview','Very High');
});

// Backend / API
['Spring Boot (Java)','Django (Python)','Flask (Python)','FastAPI (Python)','Express.js','NestJS','GraphQL API','REST API','Microservices Architect'].forEach(fw => {
  add('White Collar','IT, Software & Digital','Software Development','Backend Frameworks',`${fw} Developer`,'Private','B.Tech/BCA','₹40,000 – ₹3,50,000','Coding Interview','Very High');
});

// Mobile
['Android (Kotlin)','iOS (Swift)','React Native','Flutter','Xamarin','Ionic'].forEach(p => {
  add('White Collar','IT, Software & Digital','Software Development','Mobile Development',`${p} Developer`,'Private','B.Tech/BCA','₹35,000 – ₹3,00,000','Coding Interview','Very High');
});

// Database
['MySQL','PostgreSQL','Oracle DB','MongoDB','Cassandra','Redis','MS-SQL Server','Snowflake','BigQuery','Redshift'].forEach(db => {
  add('White Collar','IT, Software & Digital','Database','DBMS Specialization',`${db} Database Administrator`,'Private','B.Tech/BCA','₹40,000 – ₹3,00,000','Technical Interview','High');
});

// Cloud
['AWS','Azure','Google Cloud (GCP)','Oracle Cloud','IBM Cloud','OpenStack','Kubernetes','Docker','Terraform'].forEach(c => {
  add('White Collar','IT, Software & Digital','Cloud & DevOps','Cloud Platforms',`${c} Specialist / Architect`,'Private','B.Tech','₹50,000 – ₹4,50,000','Cloud Cert + Interview','Very High');
});

// Data / AI specializations
['Data Analyst','Data Engineer','Data Scientist','Big Data Engineer (Hadoop/Spark)','BI Developer (Power BI)','BI Developer (Tableau)','BI Developer (Qlik)','ETL Developer (Informatica)','MLOps Engineer','ML Engineer','Computer Vision Engineer','NLP Engineer','LLM Engineer (GenAI)','Prompt Engineer','AI Research Scientist','AI Product Manager','Reinforcement Learning Engineer','Recommendation Systems Engineer','Speech Recognition Engineer'].forEach(r => {
  add('White Collar','IT, Software & Digital','Data & AI','Specializations',r,'Private','B.Tech/M.Tech','₹50,000 – ₹6,00,000','Technical Interview','Very High');
});

// Cybersecurity
['SOC Analyst (L1/L2/L3)','Penetration Tester','Red Team Specialist','Blue Team Specialist','Threat Intelligence Analyst','Cloud Security Engineer','Application Security Engineer','Identity & Access Management (IAM)','Security Architect','CISO','Forensics Investigator','GRC Analyst','OT/ICS Security Specialist'].forEach(r => {
  add('White Collar','IT, Software & Digital','Cybersecurity','Specializations',r,'Private','B.Tech + CEH/CISSP','₹40,000 – ₹6,00,000','Practical + Interview','Very High');
});

// Networking
['Network Engineer (CCNA)','Network Architect (CCIE)','Wireless Network Engineer','SD-WAN Engineer','VoIP Engineer','Firewall Engineer (Palo Alto/Fortinet)'].forEach(r => {
  add('White Collar','IT, Software & Digital','Networking','Cisco/Juniper',r,'Private','B.Tech + Cert','₹35,000 – ₹2,50,000','Technical Interview','High');
});

// Design specializations
['UI Designer','UX Designer','UX Researcher','Interaction Designer (IxD)','CX Designer (Customer Experience)','Service Designer','Product Designer','Visual Designer','Motion Designer','3D Designer','Information Architect','Usability Tester','Accessibility Specialist','Design System Specialist','Conversation Designer (Voice/Chatbot)','Brand Designer','Packaging Designer','Industrial Designer','Furniture Designer','Jewellery Designer','Toy Designer','Automobile Designer','Footwear Designer','Game UI Designer','AR/VR Designer','Wearable Designer'].forEach(r => {
  add('White Collar','Design & Creative','Digital & Product Design','Specializations',r,'Private','B.Des / NID / Self-taught','₹35,000 – ₹4,00,000','Portfolio + Interview','Very High');
});

// Graphic / Creative
['Graphic Designer','Illustrator','Animator (2D)','Animator (3D)','VFX Artist','Compositor','Motion Graphics Artist','Storyboard Artist','Concept Artist','Character Designer','Game Artist','Comic Artist','Calligrapher','Logo Designer','Infographic Designer'].forEach(r => {
  add('White Collar','Design & Creative','Graphic & Animation','Specializations',r,'Private','BFA/B.Des/Diploma','₹20,000 – ₹2,50,000','Portfolio + Interview','Very High');
});

// Product / Project / Tech management
['Associate Product Manager','Product Manager','Senior Product Manager','Group Product Manager','Director of Product','VP Product','Technical Program Manager','Engineering Manager','Scrum Master','Agile Coach','Release Manager','Solutions Architect','Enterprise Architect','CTO'].forEach(r => {
  add('White Collar','IT, Software & Digital','Product & Tech Leadership','Roles',r,'Private','B.Tech/MBA','₹70,000 – ₹15,00,000','Case + Behavioural','Very High');
});

// Testing / QA
['Manual QA Tester','Automation Tester (Selenium)','SDET','Performance Tester (JMeter)','Mobile App Tester','Security Tester','API Tester (Postman/SoapUI)','Game Tester'].forEach(r => {
  add('White Collar','IT, Software & Digital','Testing / QA','Specializations',r,'Private','B.Tech/BCA','₹25,000 – ₹2,50,000','Technical Interview','High');
});

// ERP / SAP / Salesforce
['SAP FICO Consultant','SAP MM Consultant','SAP SD Consultant','SAP HCM Consultant','SAP ABAP Developer','SAP S/4HANA Consultant','Oracle Apps Consultant','Salesforce Admin','Salesforce Developer','Salesforce Marketing Cloud','ServiceNow Developer','Workday Consultant','PeopleSoft Consultant','Microsoft Dynamics 365'].forEach(r => {
  add('White Collar','IT, Software & Digital','ERP & SaaS Platforms','Consultants',r,'Private','B.Tech/MBA + Cert','₹50,000 – ₹4,50,000','Cert + Interview','High');
});

// Web3 / Emerging
['Blockchain Developer (Ethereum)','Smart Contract Auditor','DeFi Engineer','NFT Developer','Web3 Product Manager','Metaverse Developer','AR Developer (ARKit/ARCore)','VR Developer (Unity)','XR Designer','IoT Developer','Embedded Systems Engineer','Edge Computing Engineer','Quantum Computing Researcher'].forEach(r => {
  add('White Collar','IT, Software & Digital','Emerging Tech (Web3/AR/VR/IoT)','Specializations',r,'Private','B.Tech/M.Tech','₹50,000 – ₹6,00,000','Technical Interview','Growing');
});

/* =============================================================
   3. ENGINEERING (every branch + Govt PSU posts)
   ============================================================= */
const engBranches = [
  'Civil','Mechanical','Electrical','Electronics & Communication','Computer Science','Information Technology','Chemical','Aerospace','Automobile','Production / Industrial','Mechatronics','Metallurgical','Mining','Petroleum','Marine','Naval Architecture','Agricultural','Food Technology','Biotechnology','Biomedical','Textile','Leather Technology','Plastic Technology','Polymer','Ceramic','Pulp & Paper','Environmental','Instrumentation','Robotics','Nanotechnology','Nuclear','Power','Renewable Energy'
];
engBranches.forEach(br => {
  add('White Collar','Engineering','Branch-wise',`${br} Engineering`,`${br} Engineer (Junior/Design/R&D)`,'Govt/Private','B.Tech / B.E.','₹30,000 – ₹3,00,000','GATE / Campus / Interview','High');
  add('White Collar','Engineering','PSU Recruitment',`${br} Engineering`,`Engineer Trainee / Executive Trainee – ${br} (PSU via GATE)`,'Government','B.Tech / B.E.','₹50,000 – ₹2,00,000','GATE → ONGC/IOCL/NTPC/BHEL/SAIL/GAIL','High');
});

// Civil Engineering subspecialties
['Structural Engineer','Geotechnical Engineer','Transportation Engineer','Highway Engineer','Bridge Engineer','Tunnel Engineer','Hydraulic Engineer','Water Resources Engineer','Coastal Engineer','Earthquake Engineer','BIM Modeller','Construction Manager','Site Engineer','Quantity Surveyor','Estimation Engineer','Planning Engineer','Billing Engineer'].forEach(r => {
  add('White Collar','Engineering','Civil Specializations','Sub-disciplines',r,'Private','B.Tech Civil','₹30,000 – ₹2,50,000','Interview','High');
});

// Mechanical subspecialties
['Design Engineer (CAD)','Production Engineer','Maintenance Engineer','HVAC Engineer','Tool & Die Engineer','Automotive Engineer','Robotics Engineer','Mechatronics Engineer','Welding Engineer','Quality Engineer (Six Sigma)'].forEach(r => {
  add('White Collar','Engineering','Mechanical Specializations','Sub-disciplines',r,'Private','B.Tech Mech','₹30,000 – ₹2,50,000','Interview','High');
});

/* =============================================================
   4. HEALTHCARE (every medical specialty + allied)
   ============================================================= */
// Medical specialties (MD/MS)
['General Medicine','General Surgery','Pediatrics','Obstetrics & Gynaecology (OBG)','Orthopaedics','ENT','Ophthalmology','Dermatology','Psychiatry','Anaesthesiology','Radiology','Pathology','Microbiology','Forensic Medicine','Community Medicine (PSM)','Pulmonary Medicine','Emergency Medicine','Family Medicine','Sports Medicine','Tropical Medicine','Geriatric Medicine','Nuclear Medicine','Transfusion Medicine','Palliative Medicine','Aerospace Medicine'].forEach(s => {
  add('White Collar','Healthcare','Medical Specialist (MD/MS)','PG Specialty',`${s} Specialist`,'Govt/Private','MBBS + MD/MS','₹80,000 – ₹10,00,000','NEET-PG','Very High');
});

// Super-specialty (DM/MCh)
['Cardiology','Cardiothoracic Surgery','Neurology','Neurosurgery','Nephrology','Urology','Gastroenterology','GI Surgery','Endocrinology','Hematology','Medical Oncology','Surgical Oncology','Pediatric Surgery','Pediatric Cardiology','Plastic Surgery','Vascular Surgery','Reproductive Medicine','Critical Care Medicine'].forEach(s => {
  add('White Collar','Healthcare','Super-Specialist (DM/MCh)','Super-Specialty',`${s} Specialist`,'Govt/Private','MD/MS + DM/MCh','₹1,50,000 – ₹15,00,000+','NEET-SS','High');
});

// Dental specializations
['Orthodontist','Endodontist','Periodontist','Prosthodontist','Oral & Maxillofacial Surgeon','Pediatric Dentist','Oral Pathologist','Public Health Dentist'].forEach(s => {
  add('White Collar','Healthcare','Dental Specialist (MDS)','Specialty',s,'Govt/Private','BDS + MDS','₹40,000 – ₹3,00,000','NEET-MDS','High');
});

// AYUSH practitioners
[['BAMS – Ayurvedic Doctor','Ayurveda'],['BHMS – Homeopathic Doctor','Homeopathy'],['BUMS – Unani Doctor','Unani'],['BSMS – Siddha Doctor','Siddha'],['BNYS – Naturopathy & Yoga Doctor','Naturopathy']].forEach(([t, s]) => {
  add('White Collar','Healthcare','AYUSH','System',t,'Govt/Private','5.5 yr Degree','₹20,000 – ₹1,00,000','NEET-UG / State','Medium');
});

// Nursing specializations
['General Staff Nurse','ICU Nurse (Critical Care)','OT Nurse','Cardiac Nurse','Oncology Nurse','Pediatric Nurse','Neonatal Nurse','Psychiatric Nurse','Community Health Nurse','Nurse Practitioner','Nurse Educator','Nurse Administrator','Midwife','Public Health Nurse'].forEach(r => {
  add('Gray Collar','Healthcare','Nursing','Specializations',r,'Govt/Private','GNM/B.Sc/M.Sc Nursing','₹18,000 – ₹80,000','NORCET / State','Very High');
});

// Allied health
['Medical Lab Technician (DMLT)','Radiology Technician','MRI Technician','CT Scan Technician','Cath-Lab Technician','Dialysis Technician','OT Technician','Anaesthesia Technician','Perfusionist','ECG Technician','EEG Technician','Audiologist','Speech-Language Pathologist','Optometrist','Prosthetist & Orthotist','Respiratory Therapist','Cardiac Care Technician','Emergency Medical Technician (EMT)','Ophthalmic Assistant','Dental Hygienist'].forEach(r => {
  add('Gray Collar','Healthcare','Allied Health Sciences','Technicians',r,'Govt/Private','Diploma/B.Sc Allied Health','₹15,000 – ₹60,000','Direct Recruitment','Very High');
});

// Pharmacy
['Hospital Pharmacist','Retail Pharmacist','Industrial Pharmacist (Production)','Pharmaceutical R&D Scientist','Clinical Research Associate (CRA)','Medical Representative','Drug Inspector (Govt)','Pharmacovigilance Officer','Regulatory Affairs Officer'].forEach(r => {
  add('Gray Collar','Healthcare','Pharmacy & Pharma Industry','Roles',r,'Govt/Private','D.Pharm/B.Pharm/M.Pharm','₹15,000 – ₹1,50,000','State Pharmacy / Interview','High');
});

// Therapy
['Physiotherapist (Sports)','Physiotherapist (Neuro)','Physiotherapist (Ortho)','Physiotherapist (Cardio-Pulmonary)','Physiotherapist (Pediatric)','Occupational Therapist','Recreational Therapist','Music Therapist','Art Therapist','Dance/Movement Therapist'].forEach(r => {
  add('Gray Collar','Healthcare','Therapy','Specializations',r,'Govt/Private','BPT/BOT + Specialization','₹20,000 – ₹80,000','Direct Recruitment','High');
});

// Veterinary
['Small Animal Vet','Large Animal Vet','Avian/Poultry Vet','Wildlife Vet','Veterinary Surgeon','Veterinary Pathologist','Veterinary Pharmacologist','Animal Nutritionist'].forEach(r => {
  add('White Collar','Healthcare','Veterinary','Specializations',r,'Govt/Private','BVSc & AH','₹25,000 – ₹1,50,000','State Vet Exam','High');
});

/* =============================================================
   5. BANKING / FINANCE / INSURANCE (specializations)
   ============================================================= */
['Branch Banking PO','Forex Officer','Treasury Officer','Trade Finance Officer','Credit Analyst','Credit Manager','Loan Officer (Retail)','Loan Officer (Corporate)','Risk Manager','KYC/AML Officer','Compliance Officer','Internal Auditor','Statutory Auditor','Forensic Auditor','GST Practitioner','Income Tax Practitioner','TDS Specialist','Transfer Pricing Specialist','International Tax Consultant','Investment Advisor (SEBI RIA)','Mutual Fund Distributor (AMFI)','Stock Broker','Sub-Broker','Equity Dealer','Derivatives Trader','Forex Trader','Commodity Trader','Quantitative Analyst (Quant)','Algo Trading Developer','Portfolio Manager','Hedge Fund Analyst','Private Equity Analyst','Venture Capital Analyst','Investment Banking Associate','M&A Analyst','Debt Capital Markets Analyst','Equity Capital Markets Analyst','Equity Research Analyst (Buy-side)','Equity Research Analyst (Sell-side)','Credit Rating Analyst (CRISIL/ICRA/CARE)','Insurance Underwriter','Insurance Claims Manager','Insurance Surveyor','Reinsurance Specialist','Bancassurance Manager','Microfinance Officer','Cooperative Bank Manager','NBFC Sales Officer','FinTech Product Manager','Payments Specialist (UPI/Cards)','Digital Lending Specialist','Crypto Analyst','RBI Grade-B Officer','SEBI Grade-A Officer','NABARD Grade-A Officer','SIDBI Grade-A Officer','EPFO Enforcement Officer','LIC AAO','LIC ADO','GIC AO'].forEach(r => {
  const govt = /RBI|SEBI|NABARD|SIDBI|EPFO|LIC|GIC/.test(r);
  add('White Collar','Banking, Finance & Insurance','Specializations','Roles',r,govt?'Government':'Private','Graduation/MBA/CA/CFA','₹30,000 – ₹6,00,000',govt?'RBI/SEBI/NABARD Exams':'Interview','High');
});

/* =============================================================
   6. LAW / JUDICIARY / COMPLIANCE
   ============================================================= */
['Civil Judge / Judicial Magistrate','District Judge','High Court Judge','Supreme Court Judge','Public Prosecutor','Additional Public Prosecutor','Special Public Prosecutor','Government Pleader','Standing Counsel','Civil Lawyer','Criminal Lawyer','Family Lawyer','Corporate Lawyer','Tax Lawyer','Banking Lawyer','Real Estate Lawyer','Constitutional Lawyer','Cyber Lawyer','Environmental Lawyer','Immigration Lawyer','Labour Lawyer','Intellectual Property (IP) Lawyer','Patent Attorney','Trademark Attorney','Mediator/Arbitrator','Legal Consultant','Legal Researcher','Paralegal','Legal Process Outsourcing (LPO) Associate','Compliance Officer','Company Secretary (CS)','Notary Public','Legal Translator'].forEach(r => {
  add('White Collar','Legal & Judiciary','Specializations','Roles',r,r.includes('Judge')||r.includes('Prosecutor')||r.includes('Government Pleader')?'Government':'Private','LLB / LLM / CS','₹25,000 – ₹6,00,000','Bar Council / Judicial Exam','High');
});

/* =============================================================
   7. CIVIL SERVICES & GOVT (UPSC/SSC/State)
   ============================================================= */
['IAS – Indian Administrative Service','IPS – Indian Police Service','IFS – Indian Foreign Service','IRS (IT) – Income Tax','IRS (C&CE) – Customs & Indirect Taxes','IAAS – Indian Audit & Accounts','ICAS – Civil Accounts','IDAS – Defence Accounts','IRPS – Railway Personnel Service','IRMS – Railway Management Service','IPoS – Indian Postal Service','ITS – Indian Trade Service','IIS – Indian Information Service','IRAS – Railway Accounts Service','IDES – Defence Estates','IES – Economic Service','ISS – Statistical Service','AFHQ Civil Services','Indian Forest Service (IFoS)','CAPF Assistant Commandant'].forEach(r => {
  add('White Collar','Civil Services & Public Administration','UPSC Recruited','All India / Central',r,'Government','Graduation','₹56,100 – ₹2,50,000','UPSC CSE / IFoS / CAPF AC','High');
});

['SSC CGL – Assistant Section Officer','SSC CGL – Income Tax Inspector','SSC CGL – Excise Inspector','SSC CGL – CBI Sub-Inspector','SSC CGL – Auditor','SSC CGL – Accountant','SSC CGL – Statistical Investigator','SSC CHSL – LDC','SSC CHSL – DEO','SSC CHSL – Postal Assistant','SSC Stenographer Grade C','SSC Stenographer Grade D','SSC MTS','SSC GD Constable','SSC JE (Civil/Mech/Elec)','SSC CPO – Sub-Inspector (Delhi Police/CAPF)','SSC Selection Post','SSC JHT (Hindi Translator)'].forEach(r => {
  const collar = /Officer|Inspector|JE|SI/.test(r) ? 'White Collar' : 'Gray Collar';
  add(collar,'Civil Services & Public Administration','SSC Recruited','Central Govt Posts',r,'Government','10th/12th/Graduation','₹18,000 – ₹1,50,000','SSC Exam','Very High');
});

/* =============================================================
   8. DEFENCE (every entry route)
   ============================================================= */
['Army Officer via NDA','Army Officer via CDS (IMA)','Army Officer via CDS (OTA)','Army Officer via TGC (Engineering)','Army Officer via SSC Tech','Army Officer via JAG (Law)','Army Officer via AEC (Education)','Army Officer via ACC','Army Officer via TES (10+2)','Naval Officer via NDA','Naval Officer via CDS (INA)','Naval Officer via INET','Naval Officer via 10+2 B.Tech (Cadet Entry)','Air Force Officer via NDA','Air Force Officer via CDS','Air Force Officer via AFCAT','Air Force Officer via NCC Special Entry','Coast Guard Asst Commandant','Military Nursing Service Officer (MNS)','Territorial Army Officer'].forEach(r => {
  add('White Collar','Defence (Officer Cadre)','Entry Routes','Officer Entry',r,'Government','12th/Graduation','₹56,100 – ₹2,50,000','NDA/CDS/AFCAT/INET/TGC/SSC','High');
});
['Agniveer (Army GD)','Agniveer (Army Tech)','Agniveer (Army Clerk/Storekeeper)','Agniveer (Army Tradesman)','Agniveer (Navy SSR/MR)','Agniveer Vayu (IAF)','Naval Sailor – Artificer Apprentice','Naval Sailor – SSR (legacy)','Indian Coast Guard Navik (GD)','Indian Coast Guard Navik (DB)','Indian Coast Guard Yantrik','Border Security Force Constable','CRPF Constable','CISF Constable','ITBP Constable','SSB Constable','Assam Rifles Rifleman'].forEach(r => {
  add('Gray Collar','Defence (PBOR / Soldiers)','Soldier Entry','Other Ranks',r,'Government','10th/12th','₹21,000 – ₹50,000','Agniveer / SSC GD / CAPF','Very High');
});

/* =============================================================
   9. RAILWAYS (RRB exhaustive)
   ============================================================= */
['Junior Engineer (Civil)','Junior Engineer (Mechanical)','Junior Engineer (Electrical)','Junior Engineer (S&T – Signal)','Junior Engineer (IT)','Senior Section Engineer','Chemical & Metallurgical Asst','Depot Material Superintendent','Station Master','Goods Guard / Train Manager','Sr Commercial-cum-Ticket Clerk','Commercial Apprentice','Traffic Apprentice','Junior Account Asst cum Typist','Sr Clerk cum Typist','Asst Loco Pilot (Diesel/Electric)','Technician Grade III','RPF Constable','RPF Sub-Inspector','Trackman / Track Maintainer','Helper / Khalasi','Pointsman','Gateman','Porter / Hamal','Safaiwala','Cook / Pantry Staff','TTE (Travelling Ticket Examiner)'].forEach(r => {
  let collar = 'Gray Collar';
  if (/Engineer|Apprentice|Master|Manager|Sub-Inspector/.test(r)) collar = 'White Collar';
  if (/Trackman|Helper|Pointsman|Gateman|Porter|Safaiwala|Cook/.test(r)) collar = 'Blue Collar';
  add(collar,'Railways','RRB Recruitment','Posts',r,'Government','8th/10th/12th/Diploma/B.Tech','₹18,000 – ₹1,00,000','RRB JE/NTPC/ALP/Group D/RPF','Very High');
});

/* =============================================================
   10. POLICE & PARAMILITARY (state)
   ============================================================= */
['Director General of Police (DGP)','Inspector General of Police (IG)','Deputy Inspector General (DIG)','Superintendent of Police (SP)','Additional SP','Deputy SP / ACP','Inspector','Sub-Inspector','Asst Sub-Inspector','Head Constable','Constable','Driver Constable','Wireless Operator','Bandsman','Mounted Police','Dog Handler','Bomb Disposal Squad','Anti-Terrorism Squad (ATS)','Crime Branch Detective','Cyber Crime Officer','Traffic Police','Women Police Cell','Tourist Police','Railway Police','Reserve Police'].forEach(r => {
  let collar = 'Gray Collar';
  if (/DGP|IG|DIG|SP|ACP|Inspector(?! )/.test(r)) collar = 'White Collar';
  add(collar,'Police & Paramilitary','State Police','Ranks & Wings',r,'Government','10th/12th/Graduation','₹20,000 – ₹2,25,000','UPSC/State PSC/Police Recruitment','High');
});

/* =============================================================
   11. HR / MARKETING / SALES / OPERATIONS specializations
   ============================================================= */
['Talent Acquisition Specialist','Tech Recruiter','Non-Tech Recruiter','Campus Recruiter','HR Generalist','HR Business Partner (HRBP)','Compensation & Benefits Manager','Learning & Development (L&D) Specialist','Organizational Development (OD) Specialist','Diversity & Inclusion Officer','Employee Engagement Manager','Performance Management Specialist','Payroll Specialist','HRIS Specialist (Workday/SAP)','Industrial Relations Officer','Labour Welfare Officer','HR Analytics Specialist'].forEach(r => {
  add('White Collar','Management & Corporate','Human Resources','Specializations',r,'Private','MBA HR','₹25,000 – ₹3,50,000','Interview','High');
});
['Brand Manager','Product Marketing Manager','Growth Marketing Manager','Performance Marketing Specialist','SEO Specialist','SEM/PPC Specialist','Social Media Manager','Influencer Marketing Manager','Email Marketing Specialist','Affiliate Marketing Manager','Content Marketing Manager','Marketing Automation Specialist (HubSpot/Marketo)','CRM Specialist (Salesforce)','PR Manager','Event Manager','Trade Marketing Manager','Category Manager','Market Research Analyst','Insights Manager'].forEach(r => {
  add('White Collar','Management & Corporate','Marketing','Specializations',r,'Private','Graduation/MBA','₹30,000 – ₹4,00,000','Portfolio + Interview','Very High');
});
['Inside Sales Executive','Field Sales Executive','Territory Sales Manager','Area Sales Manager','Regional Sales Manager','National Sales Manager','Key Account Manager','B2B SaaS Sales','Enterprise Sales','Channel Sales Manager','Distributor Sales Manager','Pre-Sales Consultant','Sales Operations Analyst','Sales Trainer'].forEach(r => {
  add('White Collar','Management & Corporate','Sales','Specializations',r,'Private','Graduation/MBA','₹25,000 – ₹4,00,000','Interview','Very High');
});

/* =============================================================
   12. MEDIA / JOURNALISM / ENTERTAINMENT
   ============================================================= */
['Print Journalist','TV News Reporter','Anchor / News Presenter','Radio Jockey (RJ)','Podcast Producer','Investigative Journalist','Sports Journalist','Business Journalist','Political Journalist','Feature Writer','Sub-Editor','Copy Editor','News Editor','Photojournalist','Videographer','Camera Operator (Studio)','Camera Operator (ENG)','Cinematographer / DoP','Video Editor (Premiere/FCP)','Sound Engineer','Sound Designer','Foley Artist','Music Producer','Music Composer','Lyricist','Playback Singer','Voice-over Artist','Dubbing Artist','Translator (Subtitles)','Director (Film/TV)','Asst Director','Producer','Line Producer','Production Manager','Casting Director','Costume Designer','Make-up Artist','Hair Stylist','Choreographer','Stunt Coordinator','Set Designer','Prop Master','Script Writer','Screenplay Writer','Dialogue Writer','OTT Content Strategist','YouTuber / Content Creator','Twitch Streamer','Influencer'].forEach(r => {
  let collar = /Camera Operator \(Studio\)|Set Designer|Prop Master|Make-up|Hair Stylist|Foley/.test(r) ? 'Gray Collar' : 'White Collar';
  add(collar,'Media, Entertainment & Journalism','Specializations','Roles',r,'Private/Self','BJMC/Diploma/Self-taught','₹15,000 – ₹10,00,000+','Audition / Portfolio / Interview','High');
});

/* =============================================================
   13. ARCHITECTURE / PLANNING / INTERIORS
   ============================================================= */
['Architect (B.Arch)','Landscape Architect','Urban Planner','Town Planner','Interior Designer','Set Designer','Furniture Designer','Lighting Designer','Sustainable Architect','Heritage Conservation Architect','Architectural Visualizer','BIM Architect','Construction Project Manager','Vastu Consultant'].forEach(r => {
  add('White Collar','Architecture & Planning','Specializations','Roles',r,'Govt/Private','B.Arch / B.Planning / Diploma','₹25,000 – ₹3,00,000','Interview / Portfolio','High');
});

/* =============================================================
   14. AVIATION / MERCHANT NAVY / SPACE
   ============================================================= */
['Commercial Pilot (CPL)','Airline Captain','First Officer / Co-pilot','Helicopter Pilot','Test Pilot','Flight Engineer','Air Traffic Controller (ATC)','Aerodrome Officer','Aircraft Maintenance Engineer (B1)','Aircraft Maintenance Engineer (B2)','Avionics Technician','Cabin Crew','Cabin Crew In-charge','Ground Staff – Check-in','Ground Staff – Ramp','Ground Staff – Cargo','Aircraft Cleaner','Airport Security (CISF)','Airport Customs Officer','Airport Immigration Officer'].forEach(r => {
  let collar = 'Gray Collar';
  if (/Pilot|Captain|First Officer|ATC|Aerodrome|Officer/.test(r)) collar = 'White Collar';
  if (/Cleaner|Ramp|Cargo/.test(r)) collar = 'Blue Collar';
  add(collar,'Aviation','Specializations','Roles',r,'Govt/Private','12th/Diploma/Degree','₹15,000 – ₹6,00,000','DGCA / AAI / Airline','High');
});
['Deck Cadet','Engine Cadet','Trainee Marine Engineer','Third Officer','Second Officer','Chief Officer','Master Mariner (Captain)','Fourth Engineer','Second Engineer','Chief Engineer','Electro-Technical Officer (ETO)','Bosun','AB Seaman','Oiler','Wiper','Cook (Ship)','Steward (Ship)','Marine Surveyor','Port Pilot','Dock Master','Lighthouse Keeper'].forEach(r => {
  let collar = 'Gray Collar';
  if (/Cadet|Officer|Engineer|Master|Surveyor|Pilot|Dock Master/.test(r)) collar = 'White Collar';
  if (/AB Seaman|Oiler|Wiper|Cook|Steward|Bosun|Lighthouse/.test(r)) collar = 'Blue Collar';
  add(collar,'Merchant Navy / Shipping','Specializations','Roles',r,'Private','B.Sc Nautical / Marine / GP Rating','₹25,000 – ₹8,00,000','IMU CET / DGS','Medium');
});
['ISRO Scientist/Engineer (SC)','ISRO Technician','ISRO Driver / Light Vehicle','ISRO Cook / Catering','VSSC Researcher','SAC Researcher','In-SPACe Officer','Private Space (Skyroot/Agnikul) Engineer'].forEach(r => {
  add('White Collar','Space & Astronomy','Specializations','Roles',r,'Govt/Private','B.Tech/M.Tech/PhD','₹40,000 – ₹3,00,000','ISRO ICRB','Medium');
});

/* =============================================================
   15. AGRICULTURE / FOOD / RURAL
   ============================================================= */
['Krishi Vigyan Kendra (KVK) Subject Specialist','Agricultural Extension Officer','Agronomist','Soil Scientist','Plant Pathologist','Plant Breeder','Seed Officer','Horticulture Officer','Floriculturist','Mushroom Cultivator','Beekeeper (Apiculture)','Sericulturist','Aquaculture Specialist','Fisheries Inspector','Dairy Farm Manager','Poultry Farm Manager','Goat Farm Manager','Veterinary Asst Surgeon','Forest Range Officer','Forest Guard','Wildlife Warden','Agri-Tech Drone Operator','Precision Farming Specialist','Organic Farming Consultant','FPO Manager (Farmer Producer Org)','NABARD Officer','Rural Development Officer','Cooperative Inspector','Block Development Officer (BDO)'].forEach(r => {
  let collar = /Forest Guard|Drone Operator|Farm Manager(?! )/.test(r) ? 'Gray Collar' : 'White Collar';
  add(collar,'Agriculture, Forestry & Rural','Specializations','Roles',r,'Govt/Private','B.Sc Agri/Forestry/Vet','₹20,000 – ₹1,50,000','State Agri/Forest/UPSC','High');
});

/* =============================================================
   16. SKILLED TRADES (ITI trades exhaustive)
   ============================================================= */
const itiTrades = [
  'Electrician','Wireman','Fitter','Turner','Machinist','Welder','Sheet Metal Worker','Mechanic Diesel','Mechanic Motor Vehicle','Mechanic Tractor','Mechanic Auto-Body Repair','Mechanic Auto-Body Painting','Mechanic Refrigeration & AC','Mechanic Two/Three Wheeler','Mechanic Agricultural Machinery','Plumber','Carpenter','Mason (Building Constructor)','Painter (General)','Surveyor','Draughtsman (Civil)','Draughtsman (Mechanical)','Computer Operator & Programming Asst (COPA)','Information & Communication Tech System Maintenance (ICTSM)','Stenographer (English/Hindi)','Cosmetology / Beauty Culture','Sewing Technology','Fashion Design & Technology','Food Production (General)','Baker & Confectioner','Hospital Housekeeping','Health Sanitary Inspector','Dental Laboratory Technician','Cabin/Room Attendant','Dairying','Fruit & Vegetable Processing','Library & Information Science','Multimedia Animation & Special Effects','Photography','Marine Engine Fitter','Marine Fitter','Foundry Man','Pattern Maker','Tool & Die Maker','Instrument Mechanic','Electronics Mechanic','Information Technology'
];
itiTrades.forEach(t => {
  let collar = 'Blue Collar';
  if (['COPA','ICTSM','Stenographer (English/Hindi)','Multimedia Animation & Special Effects','Photography','Information Technology','Library & Information Science','Surveyor','Draughtsman (Civil)','Draughtsman (Mechanical)','Cosmetology / Beauty Culture','Health Sanitary Inspector','Dental Laboratory Technician'].includes(t)) collar = 'Gray Collar';
  add(collar,'Skilled Trades (ITI)','NCVT Trades','Trade',`${t} (ITI)`,'Govt/Private','8th/10th + ITI','₹12,000 – ₹50,000','ITI + Apprenticeship','Very High');
});

/* =============================================================
   17. CONSTRUCTION (deep)
   ============================================================= */
['Mason (Stone)','Mason (Brick)','Mason (Tile/Marble)','Plasterer','POP / False-Ceiling Worker','Painter (Building)','Painter (Industrial)','Carpenter (Furniture)','Carpenter (Shuttering)','Plumber','Sanitary Fitter','Welder (Arc/MIG/TIG)','Bar Bender','Steel Fitter','Glazier','Roofer','Scaffolder','Crane Operator','JCB / Excavator Operator','Concrete Pump Operator','Road Roller Operator','Bulldozer Operator','Site Supervisor','Site Foreman','Lift Installer','Solar Panel Installer','Tiles Polisher','Stone Polisher'].forEach(r => {
  add('Blue Collar','Construction','Trades & Operators','Roles',r,'Private','On-the-job / ITI','₹400 – ₹1,500/day','Direct Hire / ITI','Very High');
});

/* =============================================================
   18. HOSPITALITY / TOURISM / WELLNESS
   ============================================================= */
['Hotel General Manager','Front Office Manager','Reservations Manager','Revenue Manager','Housekeeping Manager','F&B Manager','Restaurant Manager','Executive Chef','Sous Chef','Chef-de-Partie','Pastry Chef','Pizza Chef','Tandoor Chef','Continental Chef','Indian Chef','Chinese Chef','Japanese Sushi Chef','Vegan Chef','Sommelier (Wine)','Mixologist / Bartender','Barista','Steward / Waiter','Captain','Banquet Manager','Concierge','Bell Boy','Doorman','Valet','Travel Consultant','Tour Operator','Tour Manager','Adventure Tour Guide','Trekking Guide','Mountaineering Instructor','Scuba Diving Instructor','Yoga Instructor','Aerobic Instructor','Zumba Instructor','Personal Trainer (Gym)','Pilates Instructor','Wellness Coach','Spa Therapist','Beautician','Hair Stylist','Make-up Artist','Nail Technician','Massage Therapist'].forEach(r => {
  let collar = 'Gray Collar';
  if (/Manager|Chef(?! )|Sommelier|Consultant|Operator|Coach/.test(r)) collar = 'White Collar';
  if (/Bell Boy|Doorman|Valet|Steward|Waiter/.test(r)) collar = 'Blue Collar';
  add(collar,'Hospitality, Tourism & Wellness','Specializations','Roles',r,'Private','BHM/Diploma/Course','₹15,000 – ₹3,00,000','Interview / Audition','High');
});

/* =============================================================
   19. RETAIL / E-COMMERCE / GIG
   ============================================================= */
['Store Manager','Asst Store Manager','Department Manager','Visual Merchandiser','Cashier','Sales Associate','Customer Service Desk','Stock Keeper','Inventory Manager','E-commerce Catalog Manager','Product Listing Specialist','Marketplace Account Manager (Amazon/Flipkart)','Last-Mile Delivery Executive (Swiggy/Zomato/Amazon/Dunzo/Blinkit/Zepto)','Quick-Commerce Picker','Warehouse Manager','Warehouse Picker/Packer','Forklift Operator','Loader / Unloader','Driver (Tempo/Mini-truck)','Dark Store Manager','Customer Returns Specialist'].forEach(r => {
  let collar = 'Gray Collar';
  if (/Manager|Specialist/.test(r)) collar = 'White Collar';
  if (/Loader|Picker|Packer|Driver|Forklift/.test(r)) collar = 'Blue Collar';
  add(collar,'Retail & E-commerce','Specializations','Roles',r,'Private','10th/12th/Grad','₹12,000 – ₹2,00,000','Walk-in / Interview','Very High');
});

/* =============================================================
   20. DOMESTIC / SANITATION / GIG SERVICES
   ============================================================= */
['Domestic Cook','Live-in Cook','Maid (Daily)','Maid (Live-in)','Babysitter / Nanny','Elderly Caretaker','Pet-sitter / Dog Walker','Personal Driver','Gardener','Watchman / Chowkidar','Security Guard','Bouncer','Sanitation Worker','Sewer Cleaner','Garbage Collector','Pest Control Worker','House Painter','Furniture Polisher','Curtain Installer','UrbanCompany Beautician','UrbanCompany AC Technician','UrbanCompany Plumber','UrbanCompany Electrician'].forEach(r => {
  add('Blue Collar','Domestic, Sanitation & Gig Services','Specializations','Roles',r,'Self/Private','None / On-the-job','₹5,000 – ₹40,000','Direct Hire / App','Very High');
});

/* =============================================================
   21. SPORTS / ARMED FORCES SPORTS / FITNESS
   ============================================================= */
['Cricketer (BCCI)','Footballer (ISL/I-League)','Hockey Player','Kabaddi Player (PKL)','Badminton Player','Tennis Player','Boxer','Wrestler','Athlete (Track & Field)','Shooter','Archer','Chess Player','Esports Player','Sports Coach','Sports Physiotherapist','Sports Nutritionist','Strength & Conditioning Coach','Umpire / Referee','Sports Psychologist','Sports Journalist','Sports Manager','Sports Agent','PE Teacher (NIS)','Sports Authority of India (SAI) Coach'].forEach(r => {
  add('White Collar','Sports & Fitness','Specializations','Roles',r,'Govt/Private/Self','Talent + Cert (NIS)','₹20,000 – ₹50,00,000+','Trials / NIS / Cert','Medium');
});

/* =============================================================
   22. MISC EMERGING / GIG / FREELANCE
   ============================================================= */
['Freelance Writer','Ghostwriter','Translator','Transcriptionist','Subtitle Editor','Voice Artist','Tarot Reader','Astrologer','Numerologist','Palmist','Vastu Consultant','Wedding Planner','Event Photographer','Wedding Photographer','Drone Pilot (DGCA)','Real Estate Agent','Property Manager','Mortgage Broker','Insurance Agent (LIC/Pvt)','Direct Selling Agent (DSA)','Tiffin Service Operator','Cloud Kitchen Owner','Food Truck Operator','Home Baker','YouTuber','Blogger','Affiliate Marketer','Dropshipper','Stock Photographer','NFT Artist','Online Tutor','Virtual Assistant','Notion Consultant','Excel Consultant','Resume Writer','LinkedIn Coach','Career Coach','Life Coach','Relationship Coach','Personal Stylist','Image Consultant'].forEach(r => {
  add('White Collar','Freelance / Self-Employed / Gig','Specializations','Roles',r,'Self/Freelance','Skill-based','₹10,000 – ₹5,00,000','Self / Platforms (Upwork/Fiverr)','Very High');
});

/* =============================================================
   23. C-SUITE / EXECUTIVE LEADERSHIP
   ============================================================= */
[
  ['CEO – Chief Executive Officer','Apex executive, full P&L responsibility'],
  ['COO – Chief Operating Officer','Day-to-day operations head'],
  ['CFO – Chief Financial Officer','Finance, treasury, investor relations'],
  ['CMO – Chief Marketing Officer','Marketing, brand, growth'],
  ['CTO – Chief Technology Officer','Technology vision & engineering'],
  ['CIO – Chief Information Officer','Internal IT systems'],
  ['CISO – Chief Information Security Officer','Cybersecurity head'],
  ['CHRO – Chief Human Resources Officer','People, talent, culture'],
  ['CPO – Chief Product Officer','Product strategy & roadmap'],
  ['CRO – Chief Revenue Officer','Sales + revenue across channels'],
  ['CSO – Chief Strategy Officer','Corporate strategy & M&A'],
  ['CDO – Chief Data Officer','Data strategy & governance'],
  ['CAIO – Chief AI Officer','AI strategy & deployment'],
  ['CCO – Chief Compliance Officer','Regulatory compliance'],
  ['CXO – Chief Experience Officer','Customer experience'],
  ['CCO – Chief Communications Officer','PR & corporate comms'],
  ['CLO – Chief Legal Officer / General Counsel','Legal head'],
  ['CSO – Chief Sustainability Officer','ESG & sustainability'],
  ['CDIO – Chief Diversity & Inclusion Officer','D&I'],
  ['CGO – Chief Growth Officer','Growth & expansion'],
  ['CKO – Chief Knowledge Officer','Knowledge management'],
  ['CMO – Chief Medical Officer (Hospitals)','Medical head'],
  ['CNO – Chief Nursing Officer','Nursing head (hospitals)'],
  ['Managing Director (MD)','Top operational leader'],
  ['Executive Director','Board-level executive'],
  ['Country Head / Country Manager','India operations head'],
  ['Vice President (VP)','Senior leadership'],
  ['Senior Vice President (SVP)','Senior leadership'],
  ['Executive Vice President (EVP)','Top leadership'],
  ['President (Business Unit)','BU head'],
  ['General Manager (GM)','Plant/Region/BU head'],
  ['Founder / Co-founder','Startup founder'],
  ['Board Member / Director','Board governance'],
  ['Independent Director','Statutory board role'],
  ['Chairperson / Chairman','Board chair']
].forEach(([t, d]) => {
  add('White Collar','C-Suite & Executive Leadership','Top Management','Roles',t,'Private','MBA / CA / Domain + 15-25 yr exp','₹1,50,000 – ₹50,00,000+','Board / Search Firm','High');
});

// PSU & Govt top brass
['Chairman & Managing Director (CMD) – PSU','Director (Finance) – PSU','Director (HR) – PSU','Director (Operations) – PSU','Director (Marketing) – PSU','Director General (DG) – Govt Dept','Additional Secretary – GoI','Joint Secretary – GoI','Secretary – GoI','Cabinet Secretary','Principal Secretary (State)','Chief Secretary (State)'].forEach(t => {
  add('White Collar','C-Suite & Executive Leadership','Government / PSU Top Brass','Roles',t,'Government','IAS / Senior Service','₹2,25,000 – ₹3,00,000','Promotion / PESB','Medium');
});

/* =============================================================
   24. PROFESSIONAL CERTIFICATIONS / CHARTERED PROFESSIONS
   ============================================================= */
[
  ['CA – Chartered Accountant','Audit, Tax, Advisory','ICAI'],
  ['CS – Company Secretary','Corporate law, governance','ICSI'],
  ['CMA – Cost & Management Accountant','Cost accounting, MIS','ICMAI'],
  ['CPA – Certified Public Accountant (US/India)','US accounting','AICPA'],
  ['ACCA – Association of Chartered Certified Accountants','Global accounting','ACCA UK'],
  ['CIMA – Chartered Institute of Management Accountants','Management accounting','CIMA UK'],
  ['CFA – Chartered Financial Analyst','Investment management','CFA Institute'],
  ['FRM – Financial Risk Manager','Risk management','GARP'],
  ['CAIA – Chartered Alternative Investment Analyst','Alternative investments','CAIA Assoc'],
  ['CFP – Certified Financial Planner','Personal financial planning','FPSB'],
  ['CIA – Certified Internal Auditor','Internal audit','IIA'],
  ['CISA – Certified Information Systems Auditor','IT audit','ISACA'],
  ['CISM – Certified Information Security Manager','Information security mgmt','ISACA'],
  ['CISSP – Certified Information Systems Security Professional','Cybersecurity','(ISC)²'],
  ['CEH – Certified Ethical Hacker','Pen testing','EC-Council'],
  ['OSCP – Offensive Security Certified Professional','Pen testing','Offensive Security'],
  ['PMP – Project Management Professional','Project management','PMI'],
  ['PRINCE2 Practitioner','Project management','AXELOS'],
  ['CSM – Certified Scrum Master','Agile','Scrum Alliance'],
  ['SAFe Agilist','Scaled Agile','Scaled Agile Inc'],
  ['ITIL Expert','IT service management','AXELOS'],
  ['Six Sigma Black Belt','Process improvement','ASQ'],
  ['Lean Six Sigma Master Black Belt','Process improvement','ASQ'],
  ['Actuary (FIAI / FIA)','Actuarial science','IAI / IFoA'],
  ['Certified Associate in Insurance Services (CAIS)','Insurance','III'],
  ['Licentiate / Associateship – Insurance Institute','Insurance','III'],
  ['Certified Treasury Professional (CTP)','Treasury','AFP'],
  ['Certified Management Consultant (CMC)','Consulting','ICMCI'],
  ['Certified Bank Compliance Officer','Banking compliance','IIBF'],
  ['JAIIB / CAIIB','Banking certification','IIBF'],
  ['NISM Certifications (Series I-XX)','Capital markets','NISM'],
  ['Insolvency Professional (IP)','Insolvency & bankruptcy','IBBI'],
  ['Registered Valuer (Plant/Securities/Land)','Asset valuation','IBBI'],
  ['Trademark Agent','IP','IPO'],
  ['Patent Agent','IP / Patents','IPO']
].forEach(([t, d, body]) => {
  add('White Collar','Professional Certifications & Chartered Professions','Designations','Body / Institute',`${t} (Body: ${body})`,'Govt/Private/Self','Specific Eligibility','₹40,000 – ₹10,00,000+',`${body} Exams`,'High');
});

/* =============================================================
   25. ACCOUNTING / TAX / FINANCE OPERATIONS (granular)
   ============================================================= */
['Accounts Executive','Junior Accountant','Senior Accountant','Accounts Payable (AP) Executive','Accounts Receivable (AR) Executive','General Ledger (GL) Accountant','Reconciliation Specialist','Fixed Asset Accountant','Inventory Accountant','Project Accountant','Cost Accountant','Management Accountant','Financial Accountant','Forensic Accountant','Government Accountant','Bookkeeper','Tally Operator','SAP FICO Accountant','Accounting Manager','Controller / Financial Controller','Chief Accountant','Internal Auditor','External / Statutory Auditor','Tax Auditor','GST Auditor','Concurrent Auditor (Banks)','Stock Auditor','Revenue Auditor','EDP Auditor','Income Tax Practitioner','GST Practitioner','TDS Specialist','TCS Specialist','Direct Tax Consultant','Indirect Tax Consultant','International Tax Consultant','Transfer Pricing Specialist','SEZ/STPI Compliance Specialist','FEMA Consultant','Tax Litigation Specialist','Treasury Analyst','Treasury Manager','Cash Management Specialist','Working Capital Manager','FP&A Analyst (Financial Planning & Analysis)','Budget Analyst','Costing Analyst','Pricing Analyst','Revenue Analyst','Billing Specialist','Collections Specialist','Credit Control Manager','Payroll Accountant','Compliance Accountant','ESOP Specialist','Investor Relations Manager','Mergers & Acquisitions (M&A) Analyst','Corporate Restructuring Specialist','Insolvency Resolution Professional','Liquidator','Valuation Analyst','Due Diligence Analyst'].forEach(r => {
  add('White Collar','Accounting, Tax & Finance Operations','Specializations','Roles',r,'Govt/Private','B.Com/M.Com/CA/CMA/MBA','₹15,000 – ₹6,00,000','Interview','Very High');
});

/* =============================================================
   26. REAL ESTATE / CONSTRUCTION BUSINESS
   ============================================================= */
['Real Estate Developer / Builder','Real Estate Sales Manager','Property Consultant / Broker','Channel Partner / Pre-sales','Mortgage Loan Officer (Home Loan)','Property Manager','Facility Manager','Leasing Manager','REIT Analyst','RERA Compliance Officer','Land Acquisition Manager','Township Planner','Vastu Consultant','Home Loan DSA','Property Lawyer / Conveyancing','Title Search Specialist','Property Valuer','Real Estate Photographer','Property Stager','Interior Stylist','Smart Home Installer'].forEach(r => {
  add('White Collar','Real Estate & Property','Specializations','Roles',r,'Private','Graduation/MBA','₹20,000 – ₹5,00,000','Interview / RERA Cert','High');
});

/* =============================================================
   27. NGO / SOCIAL SECTOR / DEVELOPMENT
   ============================================================= */
['Programme Manager (NGO)','Development Sector Consultant','Field Officer (NGO)','Community Mobilizer','Project Coordinator (CSR)','M&E (Monitoring & Evaluation) Specialist','Grants Manager','Fundraising Manager','CSR Manager (Corporate)','Social Worker (MSW)','Counsellor (NGO)','Researcher (Social Sciences)','Policy Advocate','Lobbyist','UN/UNICEF/WHO Programme Officer','World Bank Consultant','Disaster Management Officer','NDRF Personnel','Climate Change Specialist','Sustainability Consultant','ESG Analyst','Carbon Credit Consultant','Microfinance Field Officer','Self-Help Group (SHG) Coordinator','Livelihoods Specialist','Skill Development Trainer (NSDC/Skill India)','PMKVY Trainer / Assessor'].forEach(r => {
  let collar = /Field Officer|Mobilizer|Trainer|NDRF Personnel/.test(r) ? 'Gray Collar' : 'White Collar';
  add(collar,'NGO, Social Sector & Development','Specializations','Roles',r,'Govt/NGO/Private','MSW/MA/MBA','₹20,000 – ₹3,00,000','Interview','High');
});

/* =============================================================
   28. RELIGION, POLITICS, JUDICIARY (CULTURAL)
   ============================================================= */
['Pandit / Purohit (Hindu Priest)','Maulvi / Imam (Muslim Cleric)','Granthi (Sikh)','Pastor / Father (Christian Priest)','Bhikkhu (Buddhist Monk)','Acharya / Sadhu','Temple Manager','Wakf Board Officer','Astrologer (Jyotish)','Pundit Marriage Registrar','Choir Singer / Bhajan Singer','Religious Tour Guide','Pilgrimage Manager'].forEach(r => {
  add('Gray Collar','Religion & Spirituality','Clergy & Allied','Roles',r,'Self/Religious Body/Govt','Religious Training','₹5,000 – ₹2,00,000','Direct / Lineage','Medium');
});
['Member of Parliament (MP – Lok Sabha)','Member of Parliament (MP – Rajya Sabha)','Member of Legislative Assembly (MLA)','Member of Legislative Council (MLC)','Cabinet Minister','State Minister','Mayor / Deputy Mayor','Sarpanch / Panchayat President','Ward Councillor','Political Party Worker','Political Strategist / Consultant (I-PAC etc.)','Election Commissioner','Returning Officer (Election)','Polling Officer','Booth Level Officer (BLO)'].forEach(r => {
  add('White Collar','Politics & Public Office','Elected / Appointed','Roles',r,'Government / Self','Eligibility-based','Variable','Election / Appointment','Medium');
});

/* =============================================================
   29. ARMED FORCES SUPPORT, INTELLIGENCE & SECURITY
   ============================================================= */
['RAW Officer (Cabinet Secretariat)','IB Officer (Intelligence Bureau)','NTRO Officer','NIA Inspector / DSP','CBI Inspector / DSP','ED – Enforcement Directorate Officer','DRI – Directorate of Revenue Intelligence','SFIO – Serious Fraud Investigation Officer','Narcotics Control Bureau Officer','Customs Preventive Officer','Customs Inspector','Excise Inspector','Income Tax Investigator','Cyber Crime Investigator','Counter-Terrorism Specialist','Forensic Document Examiner','Forensic Ballistics Expert','Forensic DNA Analyst','Forensic Toxicologist','Cyber Forensics Analyst','Polygraph Examiner','Crime Scene Investigator (CSI)'].forEach(r => {
  add('White Collar','Intelligence, Investigation & Forensics','Specializations','Roles',r,'Government','Graduation/PG','₹50,000 – ₹2,50,000','UPSC/SSC/State PSC/Direct','Medium');
});

/* =============================================================
   30. ENERGY / OIL & GAS / RENEWABLES (deep)
   ============================================================= */
['Petroleum Engineer','Reservoir Engineer','Drilling Engineer','Production Engineer (O&G)','Mud Logger','Mud Engineer','Geophysicist','Geologist (Exploration)','Wellsite Geologist','Pipeline Engineer','Refinery Process Engineer','LNG Engineer','Offshore Platform Engineer','HSE Officer (Oil & Gas)','Wireline Operator','MWD Engineer','Cementing Engineer','Solar Project Manager','Wind Turbine Engineer','Offshore Wind Specialist','Hydropower Engineer','Geothermal Engineer','Biofuel/Biogas Engineer','Hydrogen Energy Engineer','Energy Storage Engineer (Battery)','Smart Grid Engineer','Energy Auditor (BEE)','EV Charging Infrastructure Engineer'].forEach(r => {
  add('White Collar','Energy, Oil, Gas & Renewables','Specializations','Roles',r,'Govt/Private','B.Tech/M.Tech','₹40,000 – ₹6,00,000','GATE / Interview','High');
});

/* =============================================================
   31. SUPPLY CHAIN / LOGISTICS / PROCUREMENT
   ============================================================= */
['Supply Chain Analyst','Supply Chain Manager','Demand Planner','Supply Planner','S&OP Manager','Procurement Specialist','Strategic Sourcing Manager','Category Buyer','Vendor Development Manager','Contract Manager','Logistics Manager','Freight Forwarder','Customs Broker','Import-Export Documentation Officer','Shipping Coordinator','Last-Mile Operations Manager','3PL Operations Manager','Warehouse Operations Manager','Cold Chain Specialist','Reverse Logistics Specialist'].forEach(r => {
  add('White Collar','Supply Chain & Logistics','Specializations','Roles',r,'Private','MBA SCM','₹30,000 – ₹4,00,000','Interview','Very High');
});

/* =============================================================
   32. EMERGING / NEW-AGE
   ============================================================= */
['Crypto Compliance Analyst','DAO Operations Lead','Token Economy Designer','Climate Risk Analyst','Carbon Accountant','Drone Service Provider (DGCA)','3D Printing Specialist','Bioinformatics Analyst','Genomics Researcher','CRISPR Researcher','Synthetic Biologist','Neuroscience Researcher','Brain-Computer Interface Engineer','Quantum Algorithm Researcher','Robotics Process Automation (RPA) Developer','Conversational AI / Chatbot Developer','Computer Vision Annotator','LLM Fine-tuning Specialist','AI Trainer (RLHF)','Synthetic Data Engineer','AI Ethicist','Responsible AI Auditor','MLOps / LLMOps Engineer'].forEach(r => {
  add('White Collar','Emerging & Future Careers','Specializations','Roles',r,'Private','B.Tech/M.Tech/PhD','₹50,000 – ₹6,00,000','Interview','Growing');
});

/* ============================================================= */
/* BUILD WORKBOOK                                                 */
/* ============================================================= */
const wb = XLSX.utils.book_new();

const styleHeader = (ws, color) => {
  for (let C = 0; C < headers.length; C++) {
    const cell = XLSX.utils.encode_cell({r:0, c:C});
    if (ws[cell]) ws[cell].s = {
      font:{bold:true, color:{rgb:"FFFFFF"}},
      fill:{fgColor:{rgb:color}},
      alignment:{wrapText:true, vertical:"center", horizontal:"center"}
    };
  }
  ws['!autofilter'] = {ref: ws['!ref']};
};
const cols = [{wch:6},{wch:14},{wch:38},{wch:30},{wch:30},{wch:55},{wch:14},{wch:30},{wch:28},{wch:32},{wch:12}];

// All Jobs
const wsAll = XLSX.utils.aoa_to_sheet([headers, ...rows]);
wsAll['!cols'] = cols;
styleHeader(wsAll, "1F4E79");
XLSX.utils.book_append_sheet(wb, wsAll, 'All Jobs (Master)');

// Per collar
[['White Collar','2E75B6','White Collar'],['Gray Collar','7F7F7F','Gray Collar'],['Blue Collar','4472C4','Blue Collar']].forEach(([c, color, sheet]) => {
  const filt = rows.filter(r => r[1] === c);
  const ws = XLSX.utils.aoa_to_sheet([headers, ...filt]);
  ws['!cols'] = cols;
  styleHeader(ws, color);
  XLSX.utils.book_append_sheet(wb, ws, sheet);
});

// Per category sheets for the BIG categories user asked about
const bigCats = ['Education & Academia','IT, Software & Digital','Healthcare','Engineering','Design & Creative'];
bigCats.forEach(cat => {
  const filt = rows.filter(r => r[2] === cat);
  if (!filt.length) return;
  const ws = XLSX.utils.aoa_to_sheet([headers, ...filt]);
  ws['!cols'] = cols;
  styleHeader(ws, "1F4E79");
  XLSX.utils.book_append_sheet(wb, ws, cat.length > 31 ? cat.substr(0,31) : cat);
});

// Hierarchy
const tree = {};
rows.forEach(r => {
  const [_,collar,cat,sub,ssub,title] = r;
  tree[collar] = tree[collar] || {};
  tree[collar][cat] = tree[collar][cat] || {};
  tree[collar][cat][sub] = tree[collar][cat][sub] || {};
  tree[collar][cat][sub][ssub] = tree[collar][cat][sub][ssub] || [];
  tree[collar][cat][sub][ssub].push(title);
});
const treeRows = [['Collar','Category','Subcategory','Sub-Subcategory','# Roles','Roles']];
for (const c of Object.keys(tree))
  for (const ct of Object.keys(tree[c]))
    for (const s of Object.keys(tree[c][ct]))
      for (const ss of Object.keys(tree[c][ct][s]))
        treeRows.push([c,ct,s,ss,tree[c][ct][s][ss].length,tree[c][ct][s][ss].join(' • ')]);
const wsT = XLSX.utils.aoa_to_sheet(treeRows);
wsT['!cols'] = [{wch:14},{wch:38},{wch:30},{wch:30},{wch:8},{wch:120}];
styleHeader(wsT, "1F4E79");
XLSX.utils.book_append_sheet(wb, wsT, 'Hierarchy Tree');

// Summary
const w = rows.filter(r => r[1] === 'White Collar').length;
const g = rows.filter(r => r[1] === 'Gray Collar').length;
const b = rows.filter(r => r[1] === 'Blue Collar').length;
const sum = [
  ['India Jobs – Exhaustive Specializations','','',''],
  ['','','',''],
  ['Collar','Definition','Examples','Total Roles'],
  ['White Collar','Office, professional, managerial, intellectual work','IAS, Software Engineer, Doctor, CA, Lawyer, Professor, Hindi Teacher (TGT/PGT), Python Developer, UX Designer, CX Designer', w],
  ['Gray Collar','Skilled / technical / service / public-service hybrid','Nurse, Police SI, Pharmacist, Loco Pilot, AME, Cabin Crew, ITI Electrician (Certified), Anganwadi Worker', g],
  ['Blue Collar','Manual labour, trade, factory, construction, transport','Mason, Welder, Tractor Driver, Tailor, Sanitation Worker, Trackman, Domestic Cook', b],
  ['','','',''],
  ['TOTAL','','', w+g+b]
];
const wsS = XLSX.utils.aoa_to_sheet(sum);
wsS['!cols'] = [{wch:24},{wch:55},{wch:80},{wch:14}];
for (let C=0;C<4;C++){const c=XLSX.utils.encode_cell({r:2,c:C}); if(wsS[c]) wsS[c].s={font:{bold:true,color:{rgb:"FFFFFF"}},fill:{fgColor:{rgb:"1F4E79"}}};}
['2E75B6','7F7F7F','4472C4'].forEach((col,i)=>{const c=XLSX.utils.encode_cell({r:3+i,c:0}); if(wsS[c]) wsS[c].s={font:{bold:true,color:{rgb:"FFFFFF"}},fill:{fgColor:{rgb:col}}};});
XLSX.utils.book_append_sheet(wb, wsS, 'Summary');

const out = '/home/runner/workspace/India_Jobs_Complete_Master_List.xlsx';
XLSX.writeFile(wb, out);
console.log('✅ Generated:', out);
console.log('White:', w, 'Gray:', g, 'Blue:', b, 'TOTAL:', rows.length);
