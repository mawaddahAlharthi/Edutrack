# EduTrack: An Intelligent QA Dashboard & Student Performance Digital Twin 🎓🤖

**Project ID:** UQU-DS-2025-F13  
**Institution:** Umm Al-Qura University | College of Computing | Data Science Department  
**Supervisor:** Dr. Maram Al-Maghrabi  

---

## 🌐 Live Production Link
Access the deployed, live interactive platform here:  
👉 **[https://9869fd83.edutrack-3nx.pages.dev/](https://9869fd83.edutrack-3nx.pages.dev/)**

---

## 📝 Project Overview
**EduTrack** is an intelligent, automated administrative and pedagogical decision-support system designed for Quality Assurance (QA) committees and faculty members. By applying the **Digital Twin** concept to academic data, the platform bridges the "interpretability gap" in educational analytics. It shifts institutional evaluation from static KPI tracking to proactive, AI-driven root-cause analysis and individualized student risk interventions.

---

## ✨ Key Features Developed (Term 2 Advancement)

### 1. Proactive AI Diagnostic Engine (`getSmartDiagnostic`)
* **Root-Cause Analysis:** Automatically evaluates individual student records (attendance, quiz/assignment benchmarks, and CLO mastery) to isolate the true cause of academic risk.
* **Tiered Actionable Interventions:** Generates context-appropriate institutional actions:
  * 🚨 *High Absenteeism:* Triggers formal academic warning protocols and immediate routing to the **Academic Advisor**.
  * 💡 *Borderline Attendance:* Recommends a brief 5-minute proactive catch-up session during **Engineering Office Hours**.
  * ✅ *Academic Excellence:* Flags high-performing students for nomination as **Peer Mentors** to support struggling classmates.

### 2. Live CLO Mastery Mapping & Strategy Bank
* **Real-Time Computation:** Computes cohort mastery ratios (using a $\ge 70\%$ institutional threshold) directly inside the browser session upon data upload.
* **Subject-Aware Pedagogical Strategy Bank:** Automatically adapts recommendations based on course context:
  * *Data Structures:* Suggests deployment of *Interactive Algorithm Visualizers* for spatial logic gaps.
  * *Data Engineering:* Suggests hands-on *Live Pipeline-Building Workshops* for applied ETL infrastructure gaps.
* **AI Tooltips (Explainable AI - XAI):** Interactive `ⓘ` components that surface the statistical reasoning and educational research justifying each recommendation.

### 3. Professional Grade UI/UX & Responsive Engineering
* **Modern Tech Aesthetic:** Built using a custom, high-contrast Dark Theme tailored for extended analytical administrative sessions.
* **Neural Canvas Background:** An animated HTML5 Canvas loop rendering dynamic node-link interactions, serving as a visual metaphor for ongoing intelligent analysis.
* **Full Device Responsiveness:** Engineered via precise CSS Media Queries to transition fluidly between desktop workstations, tablets, and mobile breakpoints without layout corruption.

---

## 🛠️ Technical Stack & Architecture
* **Frontend Core:** Vanilla JavaScript (ES6+), HTML5, CSS3 (No heavy framework overhead for maximum portability).
* **Data Parsing:** `PapaParse Library` — Executing **Client-Side Parsing** for uploaded CSV documents. 
  > **🔒 Data Privacy Note:** All student records are processed entirely within the instructor's local browser session; no data is ever transmitted to external servers, strictly compliance with institutional data governance policies.
* **Data Visualization:** `Chart.js Library` — For responsive, dynamic visual cohort auditing.
* **Deployment & CI/CD:** Managed via `Git/GitHub` and continuously deployed to the global CDN of `Cloudflare Pages`.

---

## 📂 Repository Structure
```text
├── index.html          # Main application entryway & Landing page
├── style.css           # Custom dark theme and responsive media queries
├── logic.js           # Core analytical pipeline, PapaParse configs, & getSmartDiagnostic()
├── assets/             # Anonymized sample CSV templates & branding images
└── README.md           # Repository documentation
