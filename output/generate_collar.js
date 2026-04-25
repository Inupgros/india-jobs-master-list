const XLSX = require('xlsx');

const headers = [
  'S.No',
  'Collar Type',
  'Category',
  'Subcategory',
  'Sub-Subcategory',
  'Job Title',
  'Sector (Govt/Private)',
  'Min Qualification',
  'Typical Salary Range (INR/month)',
  'Hiring Route / Exam',
  'Demand Level'
];

// COLLAR TYPE DEFINITIONS:
// White Collar  = Office/desk/professional/managerial/intellectual work (suits, laptops)
// Blue Collar   = Manual labour, physical, trade, factory, field, construction work
// Gray Collar   = Hybrid – semi-skilled / technical / service / care work that mixes physical and knowledge work (technicians, healthcare aides, teachers, firefighters, technologists)

const rows = [];
let n = 0;
const add = (collar, cat, sub, ssub, title, sector, edu, salary, exam, demand) => {
  n++;
  rows.push([n, collar, cat, sub, ssub, title, sector, edu, salary, exam, demand]);
};

/* ========================================================================== */
/* WHITE COLLAR JOBS                                                           */
/* ========================================================================== */

// 1. Civil Services & Public Administration
add('White Collar','Civil Services & Public Administration','All India Services','Indian Administrative Service','IAS Officer (District Collector)','Government','Graduation','₹56,100 – ₹2,50,000','UPSC CSE','High');
add('White Collar','Civil Services & Public Administration','All India Services','Indian Police Service','IPS Officer (SP/DGP)','Government','Graduation','₹56,100 – ₹2,25,000','UPSC CSE','High');
add('White Collar','Civil Services & Public Administration','All India Services','Indian Foreign Service','IFS Officer (Diplomat/Ambassador)','Government','Graduation','₹56,100 – ₹2,25,000','UPSC CSE','Medium');
add('White Collar','Civil Services & Public Administration','Central Civil Services','Indian Revenue Service','IRS Officer (Income Tax / Customs)','Government','Graduation','₹56,100 – ₹2,00,000','UPSC CSE','High');
add('White Collar','Civil Services & Public Administration','Central Civil Services','Indian Audit & Accounts Service','IA&AS Officer','Government','Graduation','₹56,100 – ₹2,00,000','UPSC CSE','Medium');
add('White Collar','Civil Services & Public Administration','Central Civil Services','Indian Railway Management Service','IRMS Officer','Government','Graduation','₹56,100 – ₹2,00,000','UPSC CSE','High');
add('White Collar','Civil Services & Public Administration','State Civil Services','State PCS','SDM / Deputy Collector','Government','Graduation','₹50,000 – ₹1,20,000','State PCS Exam','High');
add('White Collar','Civil Services & Public Administration','State Civil Services','State PCS','Tehsildar','Government','Graduation','₹40,000 – ₹90,000','State PCS Exam','High');
add('White Collar','Civil Services & Public Administration','State Civil Services','State PCS','Block Development Officer (BDO)','Government','Graduation','₹40,000 – ₹85,000','State PCS Exam','High');
add('White Collar','Civil Services & Public Administration','Local Self Government','Municipal Administration','Municipal Commissioner','Government','Graduation (IAS/PCS)','₹56,100 – ₹2,00,000','UPSC / State PCS','Medium');
add('White Collar','Civil Services & Public Administration','Local Self Government','Town Planning','Town Planning Officer','Government','B.Planning','₹35,000 – ₹1,20,000','Govt Recruitment','Medium');

// 2. Banking, Finance & Insurance
add('White Collar','Banking, Finance & Insurance','Public Sector Banking','Probationary Officer','Bank PO (SBI / IBPS)','Government','Graduation','₹36,000 – ₹85,000','SBI PO / IBPS PO','Very High');
add('White Collar','Banking, Finance & Insurance','Public Sector Banking','Specialist Officer','IT Officer / Law Officer / HR SO','Government','Graduation + Specialization','₹40,000 – ₹85,000','IBPS SO','High');
add('White Collar','Banking, Finance & Insurance','Central Banking','RBI Grade-B','RBI Officer','Government','Graduation','₹55,000 – ₹1,50,000','RBI Grade-B Exam','High');
add('White Collar','Banking, Finance & Insurance','Public Sector Insurance','LIC AAO','LIC Assistant Administrative Officer','Government','Graduation','₹35,000 – ₹85,000','LIC AAO Exam','High');
add('White Collar','Banking, Finance & Insurance','Private Banking','Retail Banking','Relationship Manager','Private','Graduation/MBA','₹35,000 – ₹1,50,000','Interview','Very High');
add('White Collar','Banking, Finance & Insurance','Private Banking','Wealth Management','Wealth Manager / Private Banker','Private','MBA/CFA','₹60,000 – ₹4,00,000','Interview','High');
add('White Collar','Banking, Finance & Insurance','Investment Banking','Equity Research','Equity Research Analyst','Private','MBA/CFA','₹70,000 – ₹3,00,000','Interview','Medium');
add('White Collar','Banking, Finance & Insurance','Investment Banking','M&A','Investment Banker','Private','MBA/CA','₹70,000 – ₹5,00,000+','Case Interview','Medium');
add('White Collar','Banking, Finance & Insurance','Accounting','Audit & Tax','Chartered Accountant (CA)','Private/Self','CA','₹50,000 – ₹3,00,000','ICAI CA Exams','Very High');
add('White Collar','Banking, Finance & Insurance','Accounting','Cost Accounting','Cost & Management Accountant (CMA)','Private','CMA','₹45,000 – ₹2,00,000','ICAI CMA Exams','Medium');
add('White Collar','Banking, Finance & Insurance','Accounting','Company Secretarial','Company Secretary (CS)','Private','CS','₹40,000 – ₹2,00,000','ICSI CS Exams','High');
add('White Collar','Banking, Finance & Insurance','Insurance','Actuarial','Actuary','Private','Actuarial Exams','₹50,000 – ₹3,50,000','Institute of Actuaries Exams','High');
add('White Collar','Banking, Finance & Insurance','Insurance','Claims & Underwriting','Underwriter','Private','Graduation','₹30,000 – ₹1,00,000','Interview','Medium');

// 3. IT, Software & Digital
add('White Collar','IT, Software & Digital','Software Development','Frontend','Frontend Developer','Private','B.Tech/BCA','₹35,000 – ₹2,50,000','Coding Interview','Very High');
add('White Collar','IT, Software & Digital','Software Development','Backend','Backend Developer','Private','B.Tech/BCA','₹40,000 – ₹3,00,000','Coding Interview','Very High');
add('White Collar','IT, Software & Digital','Software Development','Full Stack','Full Stack Developer (MERN/MEAN)','Private','B.Tech/BCA','₹40,000 – ₹3,00,000','Coding Interview','Very High');
add('White Collar','IT, Software & Digital','Software Development','Mobile Apps','Android Developer','Private','B.Tech/BCA','₹35,000 – ₹2,50,000','Coding Interview','High');
add('White Collar','IT, Software & Digital','Software Development','Mobile Apps','iOS Developer (Swift)','Private','B.Tech/BCA','₹40,000 – ₹2,50,000','Coding Interview','High');
add('White Collar','IT, Software & Digital','Software Development','Game Development','Game Developer (Unity/Unreal)','Private','B.Tech','₹30,000 – ₹1,80,000','Portfolio + Interview','Medium');
add('White Collar','IT, Software & Digital','Cloud & DevOps','Cloud','Cloud Engineer (AWS/Azure/GCP)','Private','B.Tech','₹50,000 – ₹3,00,000','Technical Interview','Very High');
add('White Collar','IT, Software & Digital','Cloud & DevOps','DevOps','DevOps Engineer','Private','B.Tech','₹50,000 – ₹3,50,000','Technical Interview','Very High');
add('White Collar','IT, Software & Digital','Cloud & DevOps','Site Reliability','SRE Engineer','Private','B.Tech','₹70,000 – ₹4,50,000','Technical Interview','High');
add('White Collar','IT, Software & Digital','Data','Data Analytics','Data Analyst','Private','Graduation','₹30,000 – ₹1,80,000','Technical Interview','Very High');
add('White Collar','IT, Software & Digital','Data','Data Engineering','Data Engineer','Private','B.Tech','₹50,000 – ₹3,50,000','Technical Interview','Very High');
add('White Collar','IT, Software & Digital','Data','Data Science','Data Scientist','Private','M.Tech/M.Sc','₹60,000 – ₹4,50,000','Case + Technical','Very High');
add('White Collar','IT, Software & Digital','Data','BI & Reporting','Business Intelligence Developer','Private','Graduation','₹35,000 – ₹2,00,000','Technical Interview','High');
add('White Collar','IT, Software & Digital','AI / ML','Machine Learning','ML Engineer','Private','M.Tech','₹70,000 – ₹5,00,000','ML Coding Round','Very High');
add('White Collar','IT, Software & Digital','AI / ML','Deep Learning / NLP','NLP Engineer','Private','M.Tech/PhD','₹80,000 – ₹6,00,000','Research Interview','Very High');
add('White Collar','IT, Software & Digital','AI / ML','AI Research','AI Research Scientist','Private','PhD','₹1,00,000 – ₹10,00,000','Research Interview','High');
add('White Collar','IT, Software & Digital','Cybersecurity','SOC','SOC Analyst','Private','B.Tech/BCA','₹35,000 – ₹2,00,000','Technical Interview','Very High');
add('White Collar','IT, Software & Digital','Cybersecurity','Penetration Testing','Ethical Hacker / Pen Tester','Private','B.Tech + CEH','₹40,000 – ₹3,00,000','Practical Test','Very High');
add('White Collar','IT, Software & Digital','Cybersecurity','GRC','Security GRC Analyst','Private','B.Tech/MBA','₹50,000 – ₹3,00,000','Interview','High');
add('White Collar','IT, Software & Digital','Product & Design','Product Management','Product Manager','Private','MBA/B.Tech','₹70,000 – ₹5,00,000','Case Interview','Very High');
add('White Collar','IT, Software & Digital','Product & Design','Design','UI/UX Designer','Private','B.Des/B.Tech','₹35,000 – ₹2,50,000','Portfolio Review','Very High');
add('White Collar','IT, Software & Digital','Product & Design','Research','UX Researcher','Private','M.Des/Psych','₹50,000 – ₹2,50,000','Portfolio Review','High');
add('White Collar','IT, Software & Digital','Quality Assurance','Manual / Automation','QA Engineer / SDET','Private','B.Tech/BCA','₹30,000 – ₹2,00,000','Technical Interview','High');
add('White Collar','IT, Software & Digital','IT Services','Business Analysis','IT Business Analyst','Private','MBA/B.Tech','₹40,000 – ₹2,50,000','Case Interview','High');
add('White Collar','IT, Software & Digital','IT Services','Project Management','IT Project Manager','Private','MBA/PMP','₹70,000 – ₹3,50,000','Behavioural Interview','High');
add('White Collar','IT, Software & Digital','IT Services','Tech Consulting','Solutions Architect','Private','B.Tech','₹1,00,000 – ₹6,00,000','Architecture Interview','High');
add('White Collar','IT, Software & Digital','Government IT','NIC / E-Governance','NIC Scientist','Government','B.Tech','₹50,000 – ₹1,50,000','NIC Recruitment','Medium');
add('White Collar','IT, Software & Digital','Government IT','UIDAI / GSTN / CERT-In','Cyber Officer (Govt)','Government','B.Tech','₹50,000 – ₹1,50,000','Govt Recruitment','High');

// 4. Engineering (Office / Design)
add('White Collar','Engineering (Design & R&D)','Mechanical','Design','Design Engineer (CAD)','Private','B.Tech Mech','₹30,000 – ₹1,50,000','Interview','High');
add('White Collar','Engineering (Design & R&D)','Civil','Structural Design','Structural Engineer','Private','B.Tech Civil','₹30,000 – ₹1,80,000','Technical Interview','High');
add('White Collar','Engineering (Design & R&D)','Civil','Quantity Surveying','Quantity Surveyor','Private','B.Tech Civil','₹30,000 – ₹1,50,000','Interview','High');
add('White Collar','Engineering (Design & R&D)','Electrical','Power Systems','Power Systems Engineer','Private','B.Tech Electrical','₹30,000 – ₹1,80,000','Technical Interview','High');
add('White Collar','Engineering (Design & R&D)','Electronics','VLSI/Embedded','VLSI Design Engineer','Private','B.Tech ECE','₹40,000 – ₹2,50,000','Technical Interview','High');
add('White Collar','Engineering (Design & R&D)','Aerospace','Aircraft Design','Aerospace Engineer','Private','B.Tech Aero','₹40,000 – ₹2,50,000','Technical Interview','Medium');
add('White Collar','Engineering (Design & R&D)','Defence R&D','DRDO','DRDO Scientist','Government','B.Tech/M.Tech','₹56,100 – ₹2,00,000','GATE / DRDO SET','High');
add('White Collar','Engineering (Design & R&D)','Space R&D','ISRO','ISRO Scientist','Government','B.Tech/M.Tech','₹56,100 – ₹2,00,000','GATE / ICRB','High');
add('White Collar','Engineering (Design & R&D)','Atomic Energy','BARC','BARC Scientist','Government','B.Tech/M.Sc','₹56,100 – ₹2,00,000','GATE / BARC OCES','Medium');

// 5. Management & Corporate
add('White Collar','Management & Corporate','General Management','Operations','Operations Manager','Private','MBA','₹60,000 – ₹3,00,000','Interview','High');
add('White Collar','Management & Corporate','General Management','Strategy','Strategy Manager','Private','MBA','₹80,000 – ₹4,00,000','Case Interview','High');
add('White Collar','Management & Corporate','Human Resources','Talent Acquisition','HR Recruiter','Private','MBA HR','₹25,000 – ₹1,50,000','Interview','High');
add('White Collar','Management & Corporate','Human Resources','HR Business Partner','HRBP','Private','MBA HR','₹50,000 – ₹3,00,000','Interview','High');
add('White Collar','Management & Corporate','Human Resources','Compensation','C&B Manager','Private','MBA HR','₹70,000 – ₹3,50,000','Interview','Medium');
add('White Collar','Management & Corporate','Sales','B2B','Enterprise Sales Manager','Private','MBA','₹50,000 – ₹3,00,000','Interview','High');
add('White Collar','Management & Corporate','Sales','B2C / FMCG','Area Sales Manager','Private','MBA','₹40,000 – ₹1,80,000','Interview','Very High');
add('White Collar','Management & Corporate','Sales','Key Accounts','Key Account Manager','Private','MBA','₹60,000 – ₹2,50,000','Interview','High');
add('White Collar','Management & Corporate','Marketing','Brand Management','Brand Manager','Private','MBA','₹70,000 – ₹3,50,000','Case Interview','High');
add('White Collar','Management & Corporate','Marketing','Digital Marketing','Digital Marketing Manager','Private','Graduation/MBA','₹35,000 – ₹2,50,000','Portfolio + Interview','Very High');
add('White Collar','Management & Corporate','Marketing','SEO/SEM','SEO/SEM Specialist','Private','Graduation','₹25,000 – ₹1,50,000','Portfolio + Interview','High');
add('White Collar','Management & Corporate','Marketing','Performance Marketing','Performance Marketer','Private','Graduation','₹30,000 – ₹2,00,000','Portfolio + Interview','Very High');
add('White Collar','Management & Corporate','Consulting','Strategy','Management Consultant','Private','MBA','₹70,000 – ₹5,00,000','Case Interview','High');
add('White Collar','Management & Corporate','Consulting','HR','HR Consultant','Private','MBA HR','₹45,000 – ₹2,50,000','Interview','Medium');
add('White Collar','Management & Corporate','Consulting','IT/Digital','IT/Digital Consultant','Private','MBA/B.Tech','₹50,000 – ₹3,50,000','Interview','High');

// 6. Legal & Judiciary
add('White Collar','Legal & Judiciary','Judiciary','Lower Judiciary','Civil Judge / Judicial Magistrate','Government','LLB','₹40,000 – ₹1,30,000','State Judicial Service Exam','Medium');
add('White Collar','Legal & Judiciary','Judiciary','Higher Judiciary','High Court / SC Judge','Government','Years of Practice/PCS-J','₹2,25,000 – ₹2,80,000','Promotion / Bar Selection','Low');
add('White Collar','Legal & Judiciary','Practice','Litigation','Advocate (Civil/Criminal)','Private/Self','LLB','₹15,000 – ₹5,00,000+','Bar Council Enrollment','High');
add('White Collar','Legal & Judiciary','Practice','Corporate Law','Corporate Lawyer','Private','LLB/LLM','₹50,000 – ₹4,00,000','Interview','High');
add('White Collar','Legal & Judiciary','Practice','Intellectual Property','IP Lawyer / Patent Attorney','Private','LLB + Patent Agent','₹50,000 – ₹3,00,000','Patent Agent Exam','Medium');
add('White Collar','Legal & Judiciary','Government Legal','Public Prosecutor','APP / Public Prosecutor','Government','LLB + Practice','₹40,000 – ₹1,00,000','State Judicial / DOPT','Medium');
add('White Collar','Legal & Judiciary','Compliance','Regulatory','Compliance Officer','Private','LLB/CS','₹40,000 – ₹2,50,000','Interview','High');

// 7. Education & Academia
add('White Collar','Education & Academia','Higher Education','Govt Colleges','Assistant Professor (Govt)','Government','PG + NET/PhD','₹57,700 – ₹1,77,500','UGC-NET / Recruitment','High');
add('White Collar','Education & Academia','Higher Education','IIT/IIM/IISc','Faculty (IIT/IIM)','Government','PhD','₹1,00,000 – ₹2,50,000','Institute Recruitment','Medium');
add('White Collar','Education & Academia','School Education','Govt Schools','PGT / TGT (KVS, NVS)','Government','PG + B.Ed','₹47,600 – ₹1,51,100','CTET + KVS/NVS','High');
add('White Collar','Education & Academia','School Education','Private Schools','Subject Teacher','Private','B.Ed + Graduation','₹20,000 – ₹80,000','Demo + Interview','Very High');
add('White Collar','Education & Academia','EdTech','Online Teaching','EdTech Educator','Private','PG','₹40,000 – ₹3,00,000','Audition + Interview','High');
add('White Collar','Education & Academia','EdTech','Curriculum Design','Curriculum Designer','Private','M.Ed/PG','₹40,000 – ₹1,50,000','Portfolio + Interview','Medium');
add('White Collar','Education & Academia','Counselling','Career Counselling','Career Counsellor','Private','PG Psychology / Counselling','₹25,000 – ₹1,00,000','Interview','High');

// 8. Research, Science & Policy
add('White Collar','Research, Science & Policy','Pure Sciences','CSIR Labs','CSIR Scientist','Government','PhD/M.Sc','₹56,100 – ₹2,00,000','CSIR-NET + Interview','Medium');
add('White Collar','Research, Science & Policy','Agricultural Sciences','ICAR','ICAR Scientist','Government','M.Sc/PhD Agri','₹56,100 – ₹2,00,000','ASRB NET + ARS','Medium');
add('White Collar','Research, Science & Policy','Medical Research','ICMR/AIIMS','Medical Research Scientist','Government','MBBS/MD/PhD','₹56,100 – ₹2,00,000','ICMR Recruitment','Medium');
add('White Collar','Research, Science & Policy','Statistics','ISS','Indian Statistical Service','Government','M.Sc Statistics','₹56,100 – ₹1,80,000','UPSC ISS','Medium');
add('White Collar','Research, Science & Policy','Economics','IES','Indian Economic Service','Government','M.A. Economics','₹56,100 – ₹1,80,000','UPSC IES','Medium');
add('White Collar','Research, Science & Policy','Policy / Think Tank','NITI Aayog / Niti','Policy Analyst','Government/Private','MA/MPP/PhD','₹50,000 – ₹2,50,000','Interview','Medium');
add('White Collar','Research, Science & Policy','Environment','Environment Ministry','Environmental Scientist','Government','M.Sc Env','₹40,000 – ₹1,50,000','Govt Recruitment','High');

// 9. Media, Communication & Creative (office)
add('White Collar','Media, Communication & Creative','Print/Web Journalism','Reporter / Editor','Journalist / News Editor','Private','BJMC','₹20,000 – ₹2,00,000','Interview + Test','Medium');
add('White Collar','Media, Communication & Creative','Public Relations','Corporate PR','PR Manager','Private','MBA / BJMC','₹40,000 – ₹2,50,000','Interview','High');
add('White Collar','Media, Communication & Creative','Content','Copywriting','Copywriter','Private','Graduation','₹25,000 – ₹2,00,000','Portfolio + Interview','Very High');
add('White Collar','Media, Communication & Creative','Content','Content Strategy','Content Strategist','Private','Graduation','₹40,000 – ₹2,50,000','Portfolio + Interview','High');
add('White Collar','Media, Communication & Creative','Government Media','PIB / Doordarshan / AIR','Information Officer (PIB)','Government','Graduation','₹50,000 – ₹1,50,000','UPSC IIS Exam','Medium');
add('White Collar','Media, Communication & Creative','Advertising','Creative','Creative Director','Private','Graduation/PG','₹80,000 – ₹5,00,000','Portfolio + Interview','Medium');

// 10. Healthcare (Doctors / Specialists – knowledge work)
add('White Collar','Healthcare (Professional)','Allopathy','General Practice','MBBS Doctor','Govt/Private','MBBS','₹50,000 – ₹3,00,000','NEET-UG','Very High');
add('White Collar','Healthcare (Professional)','Allopathy','Specialist','MD/MS Specialist','Govt/Private','MD/MS','₹80,000 – ₹10,00,000+','NEET-PG','Very High');
add('White Collar','Healthcare (Professional)','Allopathy','Surgical Super-Specialist','DM / MCh Super-Specialist','Govt/Private','DM/MCh','₹1,50,000 – ₹15,00,000+','NEET-SS','High');
add('White Collar','Healthcare (Professional)','Dental','Dentistry','Dentist (BDS/MDS)','Private/Govt','BDS','₹25,000 – ₹2,00,000','NEET-UG','High');
add('White Collar','Healthcare (Professional)','AYUSH','Ayurveda / Homeopathy / Unani','AYUSH Doctor','Govt/Private','BAMS/BHMS/BUMS','₹20,000 – ₹80,000','NEET-UG','Medium');
add('White Collar','Healthcare (Professional)','Veterinary','Vet Practice','Veterinary Doctor','Govt/Private','BVSc & AH','₹30,000 – ₹90,000','State Vet Exam','High');
add('White Collar','Healthcare (Professional)','Public Health','Hospital Admin','Hospital Administrator','Private','MHA / MBA','₹50,000 – ₹2,50,000','Interview','High');

// 11. Defence (Officer Cadre)
add('White Collar','Defence (Officer Cadre)','Indian Army','Officer','Army Officer (Lt → General)','Government','Graduation','₹56,100 – ₹2,50,000','NDA / CDS / TGC','High');
add('White Collar','Defence (Officer Cadre)','Indian Navy','Officer','Naval Officer','Government','Graduation','₹56,100 – ₹2,50,000','NDA / CDS / INET','Medium');
add('White Collar','Defence (Officer Cadre)','Indian Air Force','Officer','Air Force Officer / Pilot','Government','12th PCM / Grad','₹56,100 – ₹2,50,000','NDA / CDS / AFCAT','High');
add('White Collar','Defence (Officer Cadre)','Coast Guard','Assistant Commandant','Coast Guard Officer','Government','Graduation','₹56,100 – ₹1,80,000','ICG AC Exam','Medium');

/* ========================================================================== */
/* GRAY COLLAR JOBS                                                            */
/* (semi-skilled / technical / service / care – mix of knowledge + physical)   */
/* ========================================================================== */

// 1. Healthcare (Allied & Nursing)
add('Gray Collar','Healthcare (Allied & Nursing)','Nursing','GNM / B.Sc Nursing','Staff Nurse','Govt/Private','GNM/B.Sc Nursing','₹18,000 – ₹65,000','NORCET / State Recruitment','Very High');
add('Gray Collar','Healthcare (Allied & Nursing)','Nursing','ANM','ANM (Auxiliary Nurse Midwife)','Govt/Private','ANM Diploma','₹12,000 – ₹35,000','State Recruitment','Very High');
add('Gray Collar','Healthcare (Allied & Nursing)','Pharmacy','D.Pharm/B.Pharm','Pharmacist','Govt/Private','D.Pharm/B.Pharm','₹15,000 – ₹50,000','State Pharmacy Exam','High');
add('Gray Collar','Healthcare (Allied & Nursing)','Lab Diagnostics','DMLT','Medical Lab Technician','Govt/Private','DMLT','₹12,000 – ₹40,000','Direct Recruitment','High');
add('Gray Collar','Healthcare (Allied & Nursing)','Radiology','X-ray / CT','Radiology Technician','Govt/Private','BSc / Diploma Radiology','₹15,000 – ₹50,000','Direct Recruitment','High');
add('Gray Collar','Healthcare (Allied & Nursing)','Operation Theatre','OT Tech','OT Technician','Govt/Private','BSc OT','₹15,000 – ₹45,000','Direct Recruitment','High');
add('Gray Collar','Healthcare (Allied & Nursing)','Rehabilitation','Physiotherapy','Physiotherapist','Govt/Private','BPT','₹20,000 – ₹70,000','Direct Recruitment','High');
add('Gray Collar','Healthcare (Allied & Nursing)','Rehabilitation','Occupational Therapy','Occupational Therapist','Govt/Private','BOT','₹20,000 – ₹60,000','Direct Recruitment','Medium');
add('Gray Collar','Healthcare (Allied & Nursing)','Mental Health','Counselling','Clinical Psychologist','Govt/Private','M.Phil Clinical Psy','₹25,000 – ₹1,00,000','RCI Registration','High');
add('Gray Collar','Healthcare (Allied & Nursing)','Nutrition','Dietetics','Dietitian / Nutritionist','Private','BSc/MSc Nutrition','₹20,000 – ₹80,000','Direct Recruitment','High');
add('Gray Collar','Healthcare (Allied & Nursing)','Community Health','ASHA/ANM','ASHA Worker','Government','10th Pass','₹4,000 – ₹15,000 (incentive)','State Recruitment','Very High');
add('Gray Collar','Healthcare (Allied & Nursing)','Emergency','Paramedic','Ambulance Paramedic','Govt/Private','EMT Course','₹15,000 – ₹40,000','Direct Recruitment','High');

// 2. Police, Paramilitary & Security
add('Gray Collar','Police, Paramilitary & Security','State Police','Sub-Inspector','Sub-Inspector (SI)','Government','Graduation','₹28,000 – ₹70,000','State Police Exam','High');
add('Gray Collar','Police, Paramilitary & Security','State Police','Constable','Police Constable','Government','12th Pass','₹20,000 – ₹50,000','State Police Recruitment','Very High');
add('Gray Collar','Police, Paramilitary & Security','Central Armed Police','CRPF/BSF/CISF/ITBP/SSB','GD Constable (CAPF)','Government','10th/12th','₹21,700 – ₹50,000','SSC GD','Very High');
add('Gray Collar','Police, Paramilitary & Security','Central Armed Police','CAPF AC','Assistant Commandant','Government','Graduation','₹56,100 – ₹1,50,000','UPSC CAPF AC','High');
add('Gray Collar','Police, Paramilitary & Security','Investigation','CBI / NIA','CBI Sub-Inspector','Government','Graduation','₹35,000 – ₹85,000','SSC CGL','High');
add('Gray Collar','Police, Paramilitary & Security','Fire Services','State Fire Dept','Fireman','Government','10th + Physical','₹20,000 – ₹50,000','State Fire Recruitment','High');
add('Gray Collar','Police, Paramilitary & Security','Fire Services','Officer','Fire Station Officer','Government','B.E. Fire / Diploma','₹35,000 – ₹85,000','State Recruitment','Medium');
add('Gray Collar','Police, Paramilitary & Security','Private Security','Guard','Security Guard','Private','10th Pass','₹12,000 – ₹25,000','Direct Hiring','Very High');
add('Gray Collar','Police, Paramilitary & Security','Private Security','Officer','Security Officer / Manager','Private','Graduation','₹25,000 – ₹80,000','Interview','High');
add('Gray Collar','Police, Paramilitary & Security','Defence (PBOR)','Sepoy/Soldier','Army Soldier (Agniveer/GD)','Government','10th/12th','₹21,000 – ₹40,000','Agniveer Exam','Very High');
add('Gray Collar','Police, Paramilitary & Security','Defence (PBOR)','Sailor','Naval Sailor (Agniveer)','Government','10th/12th','₹21,000 – ₹40,000','Agniveer Exam','High');
add('Gray Collar','Police, Paramilitary & Security','Defence (PBOR)','Airman','IAF Airman (Agniveer)','Government','10th/12th','₹21,000 – ₹40,000','Agniveer Exam','High');

// 3. Railways (Technical & Service)
add('Gray Collar','Railways (Technical & Service)','Operations','Station','Station Master','Government','Graduation','₹35,000 – ₹70,000','RRB NTPC','High');
add('Gray Collar','Railways (Technical & Service)','Operations','Loco Pilot','Assistant Loco Pilot','Government','ITI/Diploma','₹25,000 – ₹60,000','RRB ALP','High');
add('Gray Collar','Railways (Technical & Service)','Operations','Guard','Train Guard','Government','Graduation','₹28,000 – ₹60,000','RRB NTPC','Medium');
add('Gray Collar','Railways (Technical & Service)','Engineering','Junior Engineer','Junior Engineer (Civil/Mech/Elec/S&T)','Government','Diploma/B.Tech','₹35,000 – ₹85,000','RRB JE','High');
add('Gray Collar','Railways (Technical & Service)','Engineering','Section Engineer','Senior Section Engineer','Government','B.Tech/Diploma','₹45,000 – ₹1,00,000','RRB JE Promotion','Medium');
add('Gray Collar','Railways (Technical & Service)','Commercial','Ticket Examiner','TTE / Ticket Collector','Government','12th Pass','₹25,000 – ₹55,000','RRB NTPC','High');
add('Gray Collar','Railways (Technical & Service)','RPF','Constable / SI','RPF Constable / SI','Government','10th/Graduation','₹21,700 – ₹70,000','RPF Recruitment','High');

// 4. Skilled Trades / Technicians (Gray)
add('Gray Collar','Skilled Trades / Technicians','Electrical','Building Wiring','Wireman / Electrician (Certified)','Private/Self','ITI Electrician','₹15,000 – ₹40,000','ITI + Apprenticeship','Very High');
add('Gray Collar','Skilled Trades / Technicians','Electrical','Industrial','Industrial Electrician','Private','ITI Electrician','₹18,000 – ₹50,000','ITI + Apprenticeship','High');
add('Gray Collar','Skilled Trades / Technicians','HVAC','Refrigeration & AC','HVAC Technician','Private/Self','ITI R&AC','₹15,000 – ₹45,000','ITI + Apprenticeship','Very High');
add('Gray Collar','Skilled Trades / Technicians','Automotive','Car / 2W Mechanic','Auto Mechanic (Certified)','Private/Self','ITI Auto','₹12,000 – ₹40,000','ITI + Apprenticeship','Very High');
add('Gray Collar','Skilled Trades / Technicians','Automotive','EV Tech','EV Technician','Private','ITI/Diploma EV','₹20,000 – ₹50,000','EV Skill Course','Growing');
add('Gray Collar','Skilled Trades / Technicians','Telecom','Field','Telecom Tower Technician','Private','ITI / 12th','₹15,000 – ₹35,000','Direct Hiring','High');
add('Gray Collar','Skilled Trades / Technicians','Telecom','Field','Optical Fiber Technician','Private','ITI / 12th','₹15,000 – ₹35,000','Direct Hiring','High');
add('Gray Collar','Skilled Trades / Technicians','Solar / Renewables','Solar PV','Solar Panel Installer','Private','SCGJ / ITI','₹15,000 – ₹40,000','Skill Council Cert','Growing');
add('Gray Collar','Skilled Trades / Technicians','CCTV / Networking','Security Systems','CCTV / Network Installer','Private','ITI/Diploma','₹15,000 – ₹40,000','Direct Hiring','High');
add('Gray Collar','Skilled Trades / Technicians','CNC / Machining','CNC Operator','CNC Machine Operator','Private','ITI/Diploma','₹14,000 – ₹45,000','Trade Test','High');

// 5. Agriculture, Animal Husbandry & Allied
add('Gray Collar','Agriculture & Allied (Skilled)','Crop Sciences','Extension','Agricultural Officer','Government','B.Sc Agri','₹28,000 – ₹75,000','State Agri Exam','High');
add('Gray Collar','Agriculture & Allied (Skilled)','Horticulture','Field','Horticulture Officer','Government','B.Sc Horti','₹25,000 – ₹70,000','State Recruitment','Medium');
add('Gray Collar','Agriculture & Allied (Skilled)','Soil Science','Lab','Soil Conservation Officer','Government','M.Sc Soil','₹35,000 – ₹85,000','State Recruitment','Medium');
add('Gray Collar','Agriculture & Allied (Skilled)','Veterinary','Field','Veterinary Assistant Surgeon','Government','BVSc & AH','₹30,000 – ₹90,000','State Vet Exam','High');
add('Gray Collar','Agriculture & Allied (Skilled)','Dairy','Cooperative','Dairy Technologist','Govt/Private','B.Tech Dairy','₹25,000 – ₹70,000','NDDB / State','High');
add('Gray Collar','Agriculture & Allied (Skilled)','Fisheries','Aqua','Fisheries Officer','Government','B.F.Sc','₹25,000 – ₹70,000','State Recruitment','Medium');
add('Gray Collar','Agriculture & Allied (Skilled)','Sericulture','Silk','Sericulture Inspector','Government','B.Sc Seri','₹20,000 – ₹50,000','State Recruitment','Low');
add('Gray Collar','Agriculture & Allied (Skilled)','Forest','IFS Subordinate','Forest Range Officer','Government','B.Sc/Forestry','₹35,000 – ₹85,000','State Forest Exam','Medium');

// 6. Hospitality, Travel & Service
add('Gray Collar','Hospitality, Travel & Service','Hotel','Front Office','Front Office Executive','Private','BHM/Diploma','₹15,000 – ₹40,000','Interview','High');
add('Gray Collar','Hospitality, Travel & Service','Hotel','Housekeeping','Housekeeping Supervisor','Private','BHM/Diploma','₹15,000 – ₹40,000','Interview','High');
add('Gray Collar','Hospitality, Travel & Service','F&B','Cooking','Chef / Cook','Private','Culinary Diploma','₹15,000 – ₹2,00,000','Interview','High');
add('Gray Collar','Hospitality, Travel & Service','F&B','Service','Steward / Captain / Bartender','Private','12th + Course','₹12,000 – ₹40,000','Interview','High');
add('Gray Collar','Hospitality, Travel & Service','Aviation','Cabin Crew','Air Hostess / Flight Steward','Private','12th + Course','₹35,000 – ₹1,80,000','Interview + Medical','High');
add('Gray Collar','Hospitality, Travel & Service','Aviation','Ground Staff','Airport Ground Staff','Private','12th/Graduation','₹15,000 – ₹45,000','Interview','High');
add('Gray Collar','Hospitality, Travel & Service','Travel','Tours','Travel Agent / Tour Operator','Private','Graduation','₹15,000 – ₹60,000','Interview','Medium');
add('Gray Collar','Hospitality, Travel & Service','Travel','Tour Guide','Licensed Tour Guide','Private/Self','Govt Course','₹500 – ₹5,000/day','Min of Tourism Cert','Medium');
add('Gray Collar','Hospitality, Travel & Service','Wellness','Spa/Salon','Beautician / Cosmetologist','Private','Beauty Course','₹12,000 – ₹50,000','Skill Course','High');
add('Gray Collar','Hospitality, Travel & Service','Wellness','Yoga/Fitness','Yoga Instructor / Fitness Trainer','Private/Self','Yoga/ACE Cert','₹15,000 – ₹1,00,000','Certification','High');

// 7. Retail & E-commerce (Frontline + Tech-touch)
add('Gray Collar','Retail & E-commerce','Store Operations','Front-line','Sales Associate','Private','12th','₹12,000 – ₹25,000','Walk-in','Very High');
add('Gray Collar','Retail & E-commerce','Store Operations','Cashier','Cashier','Private','12th','₹12,000 – ₹22,000','Walk-in','High');
add('Gray Collar','Retail & E-commerce','Store Operations','Visual Merchandising','Visual Merchandiser','Private','B.Des/Diploma','₹18,000 – ₹60,000','Portfolio + Interview','Medium');
add('Gray Collar','Retail & E-commerce','Store Operations','Floor Manager','Store Manager','Private','Graduation','₹25,000 – ₹80,000','Interview','High');
add('Gray Collar','Retail & E-commerce','E-commerce','Catalog','Catalog Executive','Private','Graduation','₹15,000 – ₹40,000','Interview','High');
add('Gray Collar','Retail & E-commerce','E-commerce','Last-mile','Delivery Executive (Swiggy/Zomato/Amazon)','Private/Self','10th + Vehicle','₹15,000 – ₹35,000','App Onboarding','Very High');
add('Gray Collar','Retail & E-commerce','E-commerce','Warehouse','Warehouse Picker / Packer','Private','10th','₹12,000 – ₹22,000','Walk-in','Very High');

// 8. Govt Clerical & Office (Gray)
add('Gray Collar','Government Clerical & Office','Central Govt','SSC Posts','LDC / UDC (Lower/Upper Division Clerk)','Government','12th/Graduation','₹19,900 – ₹63,200','SSC CHSL','High');
add('Gray Collar','Government Clerical & Office','Central Govt','SSC Posts','Stenographer (Grade C/D)','Government','12th + Skill Test','₹25,500 – ₹81,100','SSC Steno','Medium');
add('Gray Collar','Government Clerical & Office','Central Govt','MTS','Multi-Tasking Staff (MTS)','Government','10th Pass','₹18,000 – ₹56,900','SSC MTS','Very High');
add('Gray Collar','Government Clerical & Office','Banking','PSU Banks','Bank Clerk (Junior Associate)','Government','Graduation','₹19,900 – ₹47,920','IBPS Clerk / SBI Clerk','Very High');
add('Gray Collar','Government Clerical & Office','India Post','Postal Asst','Postal Assistant / Sorting Asst','Government','12th Pass','₹25,500 – ₹81,100','SSC CHSL','High');
add('Gray Collar','Government Clerical & Office','India Post','GDS','Gramin Dak Sevak (GDS)','Government','10th Pass','₹10,000 – ₹29,380','Merit (10th marks)','Very High');
add('Gray Collar','Government Clerical & Office','Revenue','Patwari','Patwari / Lekhpal','Government','12th + CCC','₹20,000 – ₹50,000','State Revenue Exam','High');

// 9. Logistics, Transport & Aviation (Service)
add('Gray Collar','Logistics, Transport & Aviation','Roads','Driving','Commercial Truck Driver (HMV)','Private/Self','HMV License','₹15,000 – ₹45,000','Driving Test','Very High');
add('Gray Collar','Logistics, Transport & Aviation','Roads','Driving','Cab Driver (Ola/Uber)','Self','LMV License','₹15,000 – ₹40,000','App Onboarding','Very High');
add('Gray Collar','Logistics, Transport & Aviation','Roads','Driving','Bus Driver / Conductor (RTC)','Government','HMV License','₹18,000 – ₹40,000','State RTC Exam','High');
add('Gray Collar','Logistics, Transport & Aviation','Aviation','ATC','Air Traffic Controller','Government','B.Tech/B.Sc','₹50,000 – ₹1,40,000','AAI JE','Medium');
add('Gray Collar','Logistics, Transport & Aviation','Aviation','AME','Aircraft Maintenance Engineer','Private','AME License (DGCA)','₹40,000 – ₹2,50,000','DGCA AME','Medium');
add('Gray Collar','Logistics, Transport & Aviation','Aviation','Pilot','Commercial Pilot (CPL)','Private','12th PCM + CPL','₹1,50,000 – ₹6,00,000','DGCA CPL','High');
add('Gray Collar','Logistics, Transport & Aviation','Shipping','Marine Officer','Merchant Navy Officer','Private','B.Sc Nautical / Marine','₹50,000 – ₹6,00,000','IMU CET','Medium');
add('Gray Collar','Logistics, Transport & Aviation','Logistics','Field','Logistics Coordinator','Private','Graduation','₹20,000 – ₹60,000','Interview','High');

// 10. BPO / KPO / ITES (Voice & Process)
add('Gray Collar','BPO / KPO / ITES','Voice Process','Inbound/Outbound','Customer Support Executive','Private','12th/Grad','₹15,000 – ₹35,000','Interview','Very High');
add('Gray Collar','BPO / KPO / ITES','Voice Process','International','International Voice Process','Private','Graduation','₹25,000 – ₹60,000','Interview','High');
add('Gray Collar','BPO / KPO / ITES','Backend','Data Entry','Data Entry Operator','Private','12th','₹12,000 – ₹25,000','Typing Test','Very High');
add('Gray Collar','BPO / KPO / ITES','KPO','Research','Market Research Analyst','Private','MBA/Graduation','₹25,000 – ₹80,000','Interview','High');
add('Gray Collar','BPO / KPO / ITES','KPO','Medical Billing','Medical Coder (CPC)','Private','Life Sciences','₹20,000 – ₹70,000','CPC Cert','High');

// 11. Govt Healthcare Front-line
add('Gray Collar','Government Healthcare Front-line','PHC/CHC','Outreach','ANM / Multi-Purpose Health Worker','Government','ANM','₹15,000 – ₹35,000','State Health Mission','Very High');
add('Gray Collar','Government Healthcare Front-line','PHC/CHC','Outreach','ASHA Worker','Government','10th','₹4,000 – ₹15,000 (incentive)','State Recruitment','Very High');
add('Gray Collar','Government Healthcare Front-line','ICDS','Anganwadi','Anganwadi Worker','Government','10th/12th','₹5,000 – ₹12,000','State ICDS','Very High');
add('Gray Collar','Government Healthcare Front-line','ICDS','Anganwadi','Anganwadi Helper','Government','8th/10th','₹3,000 – ₹8,000','State ICDS','Very High');

/* ========================================================================== */
/* BLUE COLLAR JOBS                                                            */
/* (manual, physical, trade, factory, field, construction)                     */
/* ========================================================================== */

// 1. Construction
add('Blue Collar','Construction','Building','Mason','Mason / Raj Mistri','Private/Self','On-the-job','₹600 – ₹1,000/day','Direct Hire','Very High');
add('Blue Collar','Construction','Building','Helper','Construction Helper / Beldar','Private','On-the-job','₹400 – ₹700/day','Direct Hire','Very High');
add('Blue Collar','Construction','Building','Carpenter','Carpenter','Private/Self','ITI / On-the-job','₹500 – ₹1,200/day','Direct Hire / ITI','Very High');
add('Blue Collar','Construction','Building','Painter','Painter','Private/Self','On-the-job','₹500 – ₹1,000/day','Direct Hire','Very High');
add('Blue Collar','Construction','Building','Plumber','Plumber','Private/Self','ITI Plumber','₹500 – ₹1,200/day','Direct Hire / ITI','Very High');
add('Blue Collar','Construction','Building','Electrician (Wiring)','Helper Electrician','Private','On-the-job','₹400 – ₹800/day','Direct Hire','Very High');
add('Blue Collar','Construction','Heavy','Steel Fixer','Bar Bender / Steel Fixer','Private','On-the-job','₹600 – ₹1,200/day','Direct Hire','High');
add('Blue Collar','Construction','Heavy','Welder','Welder (Arc/MIG/TIG)','Private','ITI Welder','₹500 – ₹1,500/day','ITI / Trade Test','Very High');
add('Blue Collar','Construction','Heavy','Equipment Operator','Crane / JCB / Excavator Operator','Private','Heavy Vehicle Lic','₹20,000 – ₹60,000/month','License + Trade Test','High');
add('Blue Collar','Construction','Heavy','Foreman','Site Foreman / Supervisor','Private','12th + Experience','₹18,000 – ₹50,000/month','Direct Hire','High');
add('Blue Collar','Construction','Roads','Road Worker','Road Roller Operator','Govt/Private','On-the-job','₹15,000 – ₹35,000/month','Direct Hire','High');

// 2. Manufacturing & Factory
add('Blue Collar','Manufacturing & Factory','Production Line','Assembly','Production Helper','Private','10th','₹12,000 – ₹22,000','Walk-in','Very High');
add('Blue Collar','Manufacturing & Factory','Production Line','Machine Operator','Machine Operator','Private','10th + Training','₹14,000 – ₹35,000','Trade Test','Very High');
add('Blue Collar','Manufacturing & Factory','Production Line','Quality Inspector','QC Inspector (Shop floor)','Private','ITI/Diploma','₹15,000 – ₹40,000','Trade Test','High');
add('Blue Collar','Manufacturing & Factory','Heavy Industry','Steel/Cement','Furnace Operator','Private','ITI','₹18,000 – ₹50,000','Trade Test','High');
add('Blue Collar','Manufacturing & Factory','Heavy Industry','Press / Forging','Press Operator','Private','ITI','₹15,000 – ₹35,000','Trade Test','High');
add('Blue Collar','Manufacturing & Factory','Textiles','Weaving','Loom Operator / Weaver','Private','On-the-job','₹10,000 – ₹25,000','Direct Hire','High');
add('Blue Collar','Manufacturing & Factory','Textiles','Tailoring','Industrial Tailor','Private','ITI Sewing','₹12,000 – ₹30,000','Direct Hire','Very High');
add('Blue Collar','Manufacturing & Factory','Garments','Cutting/Stitching','Garment Worker','Private','On-the-job','₹10,000 – ₹25,000','Direct Hire','Very High');
add('Blue Collar','Manufacturing & Factory','Food Processing','Packaging','Food Packaging Worker','Private','10th','₹10,000 – ₹22,000','Direct Hire','Very High');
add('Blue Collar','Manufacturing & Factory','Pharma','Plant','Pharma Plant Operator','Private','ITI/Diploma','₹15,000 – ₹40,000','Trade Test','High');
add('Blue Collar','Manufacturing & Factory','Auto','Assembly Line','Auto Plant Worker','Private','ITI','₹15,000 – ₹35,000','Trade Test','Very High');
add('Blue Collar','Manufacturing & Factory','Storage','Forklift','Forklift Operator','Private','License','₹15,000 – ₹35,000','License + Test','High');

// 3. Mining & Quarrying
add('Blue Collar','Mining & Quarrying','Coal','Underground','Coal Miner','Govt (Coal India)','10th + Training','₹25,000 – ₹70,000','CIL Recruitment','High');
add('Blue Collar','Mining & Quarrying','Coal','Surface','Mining Sirdar','Government','Diploma Mining','₹35,000 – ₹85,000','CIL/State','Medium');
add('Blue Collar','Mining & Quarrying','Iron Ore / Ores','Open-cast','Drill Operator (Mine)','Private/Govt','ITI','₹18,000 – ₹50,000','Trade Test','Medium');
add('Blue Collar','Mining & Quarrying','Stone','Quarry','Quarry Worker','Private','On-the-job','₹10,000 – ₹25,000','Direct Hire','High');

// 4. Oil, Gas & Power (Blue)
add('Blue Collar','Oil, Gas & Power','Refinery','Operator','Refinery Plant Operator','Govt/Private','ITI/Diploma','₹20,000 – ₹70,000','Trade Test','High');
add('Blue Collar','Oil, Gas & Power','Drilling','Rig','Oil Rig Worker (Roughneck)','Private','ITI','₹25,000 – ₹1,00,000','Direct Hire','Medium');
add('Blue Collar','Oil, Gas & Power','Power Plant','Maintenance','Plant Maintenance Technician','Govt/Private','ITI','₹20,000 – ₹55,000','Trade Test','High');
add('Blue Collar','Oil, Gas & Power','Power Plant','Lineman','Lineman / Pole Lineman','Govt/Private','ITI','₹18,000 – ₹50,000','Trade Test','Very High');

// 5. Agriculture & Allied (Manual)
add('Blue Collar','Agriculture & Allied (Manual)','Farming','Cultivation','Farmer / Cultivator','Self','None','Variable','Self','Very High');
add('Blue Collar','Agriculture & Allied (Manual)','Farming','Field Labour','Agricultural Labourer','Self/Private','None','₹300 – ₹600/day','Direct Hire','Very High');
add('Blue Collar','Agriculture & Allied (Manual)','Farming','Tractor','Tractor Driver / Operator','Private','LMV/Tractor Lic','₹12,000 – ₹25,000','Direct Hire','Very High');
add('Blue Collar','Agriculture & Allied (Manual)','Animal Husbandry','Dairy','Dairy Farm Worker','Self/Private','On-the-job','₹10,000 – ₹22,000','Direct Hire','Very High');
add('Blue Collar','Agriculture & Allied (Manual)','Fisheries','Marine','Fisherman / Boat Crew','Self','On-the-job','Variable','Self','High');
add('Blue Collar','Agriculture & Allied (Manual)','Sericulture','Cocoon','Sericulture Farm Worker','Self/Private','On-the-job','₹8,000 – ₹18,000','Direct Hire','Medium');
add('Blue Collar','Agriculture & Allied (Manual)','Plantation','Tea/Coffee','Plantation Labourer','Private','None','₹250 – ₹500/day','Direct Hire','High');

// 6. Domestic & Sanitation
add('Blue Collar','Domestic & Sanitation Services','Domestic','Cooking','Domestic Cook','Self/Private','On-the-job','₹8,000 – ₹25,000','Direct Hire','Very High');
add('Blue Collar','Domestic & Sanitation Services','Domestic','Cleaning','House Maid / Cleaner','Self/Private','None','₹5,000 – ₹20,000','Direct Hire','Very High');
add('Blue Collar','Domestic & Sanitation Services','Domestic','Driving','Personal Chauffeur','Private','LMV License','₹12,000 – ₹30,000','Direct Hire','Very High');
add('Blue Collar','Domestic & Sanitation Services','Domestic','Care','Caretaker / Babysitter','Private','On-the-job','₹10,000 – ₹25,000','Direct Hire','Very High');
add('Blue Collar','Domestic & Sanitation Services','Sanitation','Municipal','Sanitation Worker / Safai Karamchari','Government','None','₹15,000 – ₹35,000','Municipal Recruitment','Very High');
add('Blue Collar','Domestic & Sanitation Services','Sanitation','Sewer','Sewer Cleaner','Government','None','₹15,000 – ₹30,000','Municipal Recruitment','Very High');
add('Blue Collar','Domestic & Sanitation Services','Sanitation','Garbage Collection','Garbage Collector','Government','None','₹12,000 – ₹25,000','Municipal Recruitment','Very High');
add('Blue Collar','Domestic & Sanitation Services','Pest Control','Field','Pest Control Technician','Private','Training','₹12,000 – ₹30,000','Direct Hire','High');

// 7. Skilled Trades (Manual heavy)
add('Blue Collar','Traditional Skilled Trades','Metal Work','Blacksmith','Blacksmith / Lohar','Self','Family/Apprentice','Variable','Self','Low');
add('Blue Collar','Traditional Skilled Trades','Metal Work','Goldsmith','Goldsmith / Sunar','Self','Family/Apprentice','Variable','Self','Medium');
add('Blue Collar','Traditional Skilled Trades','Wood','Carving','Wood Carver','Self','Family/Apprentice','Variable','Self','Low');
add('Blue Collar','Traditional Skilled Trades','Pottery','Clay Work','Potter / Kumhar','Self','Family/Apprentice','Variable','Self','Low');
add('Blue Collar','Traditional Skilled Trades','Leather','Footwear','Cobbler / Mochi','Self','On-the-job','Variable','Self','High');
add('Blue Collar','Traditional Skilled Trades','Tailoring','Custom','Tailor / Darzi','Self/Private','Course/Apprentice','₹10,000 – ₹35,000','Direct Hire','Very High');
add('Blue Collar','Traditional Skilled Trades','Barbering','Salon','Barber / Hair Stylist','Self/Private','Course','₹10,000 – ₹40,000','Direct Hire','Very High');
add('Blue Collar','Traditional Skilled Trades','Glass','Cutting','Glass Cutter / Fitter','Private','On-the-job','₹12,000 – ₹30,000','Direct Hire','High');
add('Blue Collar','Traditional Skilled Trades','Stone','Sculptor','Stone Carver / Sculptor','Self','Apprentice','Variable','Self','Low');

// 8. Transport & Loading (Manual)
add('Blue Collar','Transport & Loading','Loading','Cargo','Loader / Hamal','Private','None','₹10,000 – ₹25,000','Direct Hire','Very High');
add('Blue Collar','Transport & Loading','Loading','Port','Dock Worker / Stevedore','Private/Govt','None','₹15,000 – ₹40,000','Direct Hire','Medium');
add('Blue Collar','Transport & Loading','Driving','Auto','Auto Rickshaw Driver','Self','LMV/Auto License','₹10,000 – ₹35,000','License','Very High');
add('Blue Collar','Transport & Loading','Driving','Cycle Rickshaw','Cycle Rickshaw Puller','Self','None','Variable','Self','High');
add('Blue Collar','Transport & Loading','Courier','Field','Courier Boy / Field Executive','Private','10th + Vehicle','₹12,000 – ₹25,000','Direct Hire','Very High');

// 9. Hospitality (Manual)
add('Blue Collar','Hospitality (Manual)','Kitchen','Helper','Kitchen Helper / Dishwasher','Private','None','₹10,000 – ₹20,000','Direct Hire','Very High');
add('Blue Collar','Hospitality (Manual)','Cleaning','Hotel/Office','Housekeeping Staff','Private','None','₹10,000 – ₹22,000','Direct Hire','Very High');
add('Blue Collar','Hospitality (Manual)','Laundry','Wash & Iron','Dhobi / Laundry Worker','Self/Private','On-the-job','₹10,000 – ₹25,000','Direct Hire','Very High');

// 10. Govt Group D (Manual)
add('Blue Collar','Government Group-D','Railways','Trackman / Khalasi','Trackman','Government','10th','₹18,000 – ₹56,900','RRC Group D','Very High');
add('Blue Collar','Government Group-D','Railways','Helper','Railway Helper / Pointsman','Government','10th','₹18,000 – ₹56,900','RRC Group D','Very High');
add('Blue Collar','Government Group-D','State Govt','Peon / Chowkidar','Peon / Chowkidar (Govt)','Government','8th/10th','₹16,000 – ₹40,000','State Recruitment','Very High');
add('Blue Collar','Government Group-D','Defence Civilian','Tradesman','Tradesman Mate (MoD)','Government','10th + ITI','₹18,000 – ₹56,900','SSC MTS','High');

const wb = XLSX.utils.book_new();

// ========== SHEET 1: All Jobs by Collar ==========
const ws1 = XLSX.utils.aoa_to_sheet([headers, ...rows]);
ws1['!cols'] = [
  {wch:6},{wch:14},{wch:36},{wch:30},{wch:30},{wch:42},{wch:18},
  {wch:24},{wch:32},{wch:32},{wch:14}
];

// Color-code header
for (let C = 0; C < headers.length; C++) {
  const cell = XLSX.utils.encode_cell({r:0, c:C});
  if (ws1[cell]) ws1[cell].s = {
    font: {bold: true, color: {rgb: "FFFFFF"}},
    fill: {fgColor: {rgb: "1F4E79"}},
    alignment: {wrapText: true, vertical: "center", horizontal: "center"}
  };
}
ws1['!autofilter'] = {ref: ws1['!ref']};
ws1['!freeze'] = {xSplit: 0, ySplit: 1};
XLSX.utils.book_append_sheet(wb, ws1, 'All Jobs (White-Gray-Blue)');

// ========== SHEET 2: White Collar Only ==========
const whiteRows = rows.filter(r => r[1] === 'White Collar');
const ws2 = XLSX.utils.aoa_to_sheet([headers, ...whiteRows]);
ws2['!cols'] = ws1['!cols'];
for (let C = 0; C < headers.length; C++) {
  const cell = XLSX.utils.encode_cell({r:0, c:C});
  if (ws2[cell]) ws2[cell].s = {font:{bold:true, color:{rgb:"FFFFFF"}}, fill:{fgColor:{rgb:"2E75B6"}}};
}
XLSX.utils.book_append_sheet(wb, ws2, 'White Collar');

// ========== SHEET 3: Gray Collar Only ==========
const grayRows = rows.filter(r => r[1] === 'Gray Collar');
const ws3 = XLSX.utils.aoa_to_sheet([headers, ...grayRows]);
ws3['!cols'] = ws1['!cols'];
for (let C = 0; C < headers.length; C++) {
  const cell = XLSX.utils.encode_cell({r:0, c:C});
  if (ws3[cell]) ws3[cell].s = {font:{bold:true, color:{rgb:"FFFFFF"}}, fill:{fgColor:{rgb:"7F7F7F"}}};
}
XLSX.utils.book_append_sheet(wb, ws3, 'Gray Collar');

// ========== SHEET 4: Blue Collar Only ==========
const blueRows = rows.filter(r => r[1] === 'Blue Collar');
const ws4 = XLSX.utils.aoa_to_sheet([headers, ...blueRows]);
ws4['!cols'] = ws1['!cols'];
for (let C = 0; C < headers.length; C++) {
  const cell = XLSX.utils.encode_cell({r:0, c:C});
  if (ws4[cell]) ws4[cell].s = {font:{bold:true, color:{rgb:"FFFFFF"}}, fill:{fgColor:{rgb:"4472C4"}}};
}
XLSX.utils.book_append_sheet(wb, ws4, 'Blue Collar');

// ========== SHEET 5: Definitions & Summary ==========
const summary = [
  ['Collar Classification – Quick Reference (India)', '', '', ''],
  ['', '', '', ''],
  ['Collar Type', 'Definition', 'Typical Examples', 'Total Jobs Listed'],
  ['White Collar','Office-based, professional, managerial, intellectual or administrative work. Usually requires a degree, paid by salary, low physical exertion.','IAS Officer, Software Engineer, CA, Doctor (MBBS), Lawyer, Teacher, Banker, Manager, Scientist, Architect.', whiteRows.length],
  ['Gray Collar','Hybrid – semi-skilled, technical, healthcare, public-service, or service work that mixes physical work with knowledge/skill. Usually requires a diploma/ITI/specific certification.','Nurse, Police SI, Pharmacist, Loco Pilot, Air Hostess, Electrician (certified), AME, Anganwadi Worker, Lab Technician, Bank Clerk.', grayRows.length],
  ['Blue Collar','Manual labour, trade, factory, construction, transport or field work. Often paid daily/hourly, requires physical strength and on-the-job training, usually 8th–12th pass or ITI.','Mason, Welder, Tractor Driver, Loader, Sanitation Worker, Tailor, Mechanic Helper, Trackman, Garment Worker.', blueRows.length],
  ['', '', '', ''],
  ['TOTAL JOBS IN DOCUMENT', '', '', whiteRows.length + grayRows.length + blueRows.length],
  ['', '', '', ''],
  ['Notes:', '', '', ''],
  ['1. Many roles have a Govt and a Private version. Both are listed under the same collar (e.g. Doctor – Govt and Private; Driver – RTC vs Private cab).', '', '', ''],
  ['2. The boundary between Gray and Blue collar is fluid: a certified, salaried Electrician is gray; a daily-wage helper electrician is blue.', '', '', ''],
  ['3. Salary ranges are India-specific approximate ranges (per month unless stated). Govt salaries follow 7th CPC Pay Matrix.', '', '', ''],
  ['4. Categories follow standard Indian classifications (NCO, NSDC sectors).', '', '', ''],
  ['5. "Sector" column shows whether the job exists primarily in Government, Private, Self-employed, or Both.', '', '', ''],
];

const ws5 = XLSX.utils.aoa_to_sheet(summary);
ws5['!cols'] = [{wch:24},{wch:70},{wch:65},{wch:18}];
ws5[XLSX.utils.encode_cell({r:0,c:0})].s = {font:{bold:true, sz:14, color:{rgb:"1F4E79"}}};
for (let C = 0; C < 4; C++) {
  const cell = XLSX.utils.encode_cell({r:2, c:C});
  if (ws5[cell]) ws5[cell].s = {font:{bold:true, color:{rgb:"FFFFFF"}}, fill:{fgColor:{rgb:"1F4E79"}}};
}
// color rows
const rowColors = ['2E75B6','7F7F7F','4472C4'];
for (let r = 3; r <= 5; r++) {
  const cell = XLSX.utils.encode_cell({r, c:0});
  if (ws5[cell]) ws5[cell].s = {font:{bold:true, color:{rgb:"FFFFFF"}}, fill:{fgColor:{rgb: rowColors[r-3]}}};
}
XLSX.utils.book_append_sheet(wb, ws5, 'Summary & Definitions');

// ========== SHEET 6: Hierarchy Tree (Category > Sub > Sub-Sub) ==========
const tree = {};
rows.forEach(r => {
  const collar = r[1], cat = r[2], sub = r[3], ssub = r[4], title = r[5];
  tree[collar] = tree[collar] || {};
  tree[collar][cat] = tree[collar][cat] || {};
  tree[collar][cat][sub] = tree[collar][cat][sub] || {};
  tree[collar][cat][sub][ssub] = tree[collar][cat][sub][ssub] || [];
  tree[collar][cat][sub][ssub].push(title);
});
const treeRows = [['Collar', 'Category', 'Subcategory', 'Sub-Subcategory', 'Job Roles']];
for (const collar of Object.keys(tree)) {
  for (const cat of Object.keys(tree[collar])) {
    for (const sub of Object.keys(tree[collar][cat])) {
      for (const ssub of Object.keys(tree[collar][cat][sub])) {
        treeRows.push([collar, cat, sub, ssub, tree[collar][cat][sub][ssub].join('  •  ')]);
      }
    }
  }
}
const ws6 = XLSX.utils.aoa_to_sheet(treeRows);
ws6['!cols'] = [{wch:14},{wch:36},{wch:30},{wch:30},{wch:90}];
for (let C = 0; C < 5; C++) {
  const cell = XLSX.utils.encode_cell({r:0, c:C});
  if (ws6[cell]) ws6[cell].s = {font:{bold:true, color:{rgb:"FFFFFF"}}, fill:{fgColor:{rgb:"1F4E79"}}};
}
ws6['!autofilter'] = {ref: ws6['!ref']};
XLSX.utils.book_append_sheet(wb, ws6, 'Hierarchy Tree');

const out = '/home/runner/workspace/India_Jobs_White_Gray_Blue_Collar.xlsx';
XLSX.writeFile(wb, out);
console.log('✅ Generated:', out);
console.log('White Collar jobs:', whiteRows.length);
console.log('Gray  Collar jobs:', grayRows.length);
console.log('Blue  Collar jobs:', blueRows.length);
console.log('TOTAL jobs       :', rows.length);
