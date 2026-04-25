# India Jobs – Complete Master List

A comprehensive, classified taxonomy of jobs across **every major category and subcategory** in India — covering both **Government and Private** sectors.

## What's Inside

Three Excel workbooks built from a single Node.js generator using the `xlsx` library.

| File | Jobs | Description |
|---|---:|---|
| `output/Global_Job_Career_Taxonomy.xlsx` | 142 | First-pass general taxonomy (5 sheets: All Jobs, Categories, Insights, Exams, Salaries) |
| `output/India_Jobs_White_Gray_Blue_Collar.xlsx` | 271 | Classified by **White / Gray / Blue collar** with category → subcategory → sub-subcategory hierarchy |
| `output/India_Jobs_Complete_Master_List.xlsx` | **1,642** | Exhaustive specializations: every subject teacher (Hindi/English/Maths/etc), every programming language (Python/Java/PHP/Go/...), every design role (UI/UX/CX/...), every medical specialty, every engineering branch, every C-suite role (CEO/CFO/CMO/CTO/...), every chartered profession (CA/CS/CMA/CFA/CPA/...), and more |

## Categories Covered

- Civil Services & Public Administration (UPSC, SSC, State PCS)
- Defence (Officer Cadre + Agniveer/PBOR)
- Banking, Finance & Insurance (PSU + Private + RBI/SEBI/NABARD)
- IT, Software & Digital (every language/framework/cloud/data/AI/security role)
- Engineering (every branch + PSU recruitment via GATE)
- Healthcare (Doctors – every MD/MS/DM/MCh specialty + AYUSH + Nursing + Allied)
- Education & Academia (every subject TGT/PGT + Assistant Professor)
- Legal & Judiciary
- Research, Science & Policy (CSIR / ICAR / ICMR / DRDO / ISRO / BARC)
- Media, Entertainment & Journalism
- Architecture & Planning
- Aviation, Merchant Navy, Space
- Agriculture, Forestry & Rural Development
- Skilled Trades (all ITI/NCVT trades)
- Construction (mason/welder/operator etc.)
- Hospitality, Tourism & Wellness
- Retail & E-commerce (incl. gig delivery)
- Domestic, Sanitation & Gig Services
- Sports & Fitness
- C-Suite & Executive Leadership
- Professional Certifications (CA, CS, CMA, CFA, CPA, ACCA, FRM, CISA, PMP, etc.)
- Accounting, Tax & Finance Operations
- Real Estate & Property
- NGO, Social Sector & Development
- Religion, Politics & Public Office
- Intelligence, Investigation & Forensics
- Energy, Oil, Gas & Renewables
- Supply Chain & Logistics
- Emerging & Future Careers (Web3, AI, Quantum, etc.)

## Collar Classification

| Collar | Definition | Count (Master List) |
|---|---|---:|
| **White Collar** | Office, professional, managerial, intellectual work | 1,340 |
| **Gray Collar** | Skilled / technical / service / public-service hybrid | 189 |
| **Blue Collar** | Manual labour, trade, factory, construction, transport | 113 |

## Spreadsheet Structure (Master List)

Each row contains:
- S.No
- Collar Type
- Category
- Subcategory
- Sub-Subcategory
- Specialization / Job Title
- Sector (Govt / Private / Self)
- Min Qualification
- Salary Range (INR/month)
- Hiring Route / Exam
- Demand Level

Plus dedicated sheets for each collar type, big categories (Education, IT, Healthcare, Engineering, Design), a Hierarchy Tree, and a Summary.

## Run Locally

```bash
cd output
npm install
node generate.js               # builds Global_Job_Career_Taxonomy.xlsx
node generate_collar.js        # builds India_Jobs_White_Gray_Blue_Collar.xlsx
node generate_exhaustive.js    # builds India_Jobs_Complete_Master_List.xlsx
```

Output files are written to the workspace root.

## License

MIT
