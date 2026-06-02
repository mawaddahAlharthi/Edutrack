# EduTrack: An Intelligent QA Dashboard & Student Performance Digital Twin 

**Project ID:** UQU-DS-2025-F13  
**Institution:** Umm Al-Qura University | College of Computing | Data Science Department  
**Supervisor:** Dr. Maram Al-Maghrabi  

---

## 🌐 Live Production Link
Access the deployed, live interactive platform here:  
👉 **[(https://edutrack-3nx.pages.dev/https://9869fd83.edutrack-3nx.pages.dev/))]**
---

## 📝 Project Overview
**EduTrack** is an intelligent, automated administrative and pedagogical decision-support system designed for Quality Assurance (QA) committees and faculty members. By applying the **Digital Twin** concept to academic data, the platform bridges the "interpretability gap" in educational analytics. It shifts institutional evaluation from static KPI tracking to proactive, AI-driven root-cause analysis and individualized student risk interventions.

---

## 📊 Testing with Sample Data

To make it easy for examiners, evaluators, and faculty members to test the live platform's core functionalities, an anonymized operational test dataset is provided directly in this repository.

* **Test File Name:** `new data to test.csv`
* **How to Test:**
  1. Download the `new data to test.csv` file from this repository to your local machine.
  2. Open the **[Live Dashboard Production Link](https://9869fd83.edutrack-3nx.pages.dev/)** in your browser.
  3. Click on the **"Get Started"** or **"Login"** button to enter the main administration panel.
  4. Use the **"Import Data"** panel on the interface to upload the downloaded `new data to test.csv` file.
  5. The dashboard will instantly process the file client-side, displaying live AI diagnostics, student-at-risk predictions, predictive KPI charts, and real-time Course Learning Outcomes (CLO) mastery distributions.

---

## ⚙️ Step-by-Step Setup & Run Instructions

To review the analytical model pipelines or run the interactive dashboard interface locally, follow these precise steps:

### 1. Running the Interactive Dashboard Interface (Frontend)
The user interface is engineered using serverless web technologies and does not require heavy runtime backend environments. You can run it instantly:

1. **Clone the Repository:**
```bash
git clone [https://github.com/mawaddahAlharthi/Edutrack.git](https://github.com/mawaddahAlharthi/Edutrack.git)
cd Edutrack

```

2. **Launch the Dashboard:**
Simply locate the `index.html` file in the main root directory and double-click it to launch the platform inside any modern web browser (e.g., Google Chrome, Microsoft Edge, Safari).

* **Alternative for Developers:** If you are using VS Code, right-click `index.html` and select **"Open with Live Server"** to spin up a local development environment.

3. **Validating with Sample Data:**
Once the dashboard loads, click **"Get Started"** to bypass the interactive landing interface. Upload the provided anonymized institutional datasets (`data_ds.csv`, `data_de.csv`, or the new `new data to test.csv`) directly into the data import panel to view live AI recommendations, dynamic KPI charts, and CLO mastery ratios.

### 2. Setting Up the Machine Learning Experimental Environment (Python Backend)

To execute, verify, or audit the core predictive training models described in Chapter 3 & 4 of the project report:

1. **Install Dependencies:** Ensure you have Python 3.8+ installed on your machine, then run the following command in your terminal to load all institutional data science prerequisites:

```bash
pip install -r requirements.txt

```

2. **Dataset Deployment:** The operational machine learning data frameworks utilize the clean structured properties embedded inside `data_ds.csv` (Data Structures cohort) and `data_de.csv` (Data Engineering cohort) to execute forecasting profiles.

---

## ✨ System Architecture & Operational Features (Term 2 Advancements)

### 1. Proactive AI Diagnostic Engine (`getSmartDiagnostic`)

Evaluates individual student data attributes (attendance rates, assignment marks, exam grades) to isolate root causes and trigger targeted responses:

* 🚨 **High Absenteeism:** Fails below a strict 75% attendance threshold, routing the student automatically to the official **Academic Advisor warning protocol**.
* 💡 **Borderline Attendance:** Identifies early-stage structural engagement drops, prompting a 5-minute **Engineering Office Hours check-in** to prevent escalation.
* ✅ **Academic Excellence:** Targets high-performing, low-risk students for nomination as institutional **Peer Mentors** to tutor struggling classmates.

### 2. Live CLO Mastery Mapping & Technical Strategy Bank

* **Real-Time Computation:** Dynamically extracts and maps student performance indicators against specific Course Learning Outcomes (CLO1, CLO2, CLO3) using a >= 70% institutional mastery threshold.
* **Subject-Aware Pedagogical Bank:** Automatically adapts teaching interventions based on course context:
* *Data Structures:* Suggests deployment of *Interactive Algorithm Visualizers* for spatial logic gaps.
* *Data Engineering:* Suggests hands-on *Live Pipeline-Building Workshops* for applied ETL infrastructure gaps.


* **AI Tooltips (Explainable AI - XAI):** Interactive `ⓘ` components that surface the statistical reasoning and quantitative justification behind each recommendation to enhance user trust.

---

## 🛠️ Technical Stack

* **Frontend Analytics Engine:** Vanilla JavaScript (ES6+), HTML5, CSS3 (Zero heavy framework overhead for maximum portability).
* **Data Ingestion:** `PapaParse Library` — Executing **Client-Side Parsing** for uploaded documents.
* **Dynamic Visualization:** `Chart.js Library` — For responsive visual cohort auditing.
* **Core Predictive Backend:** Python-based machine learning (Random Forest, Logistic Regression, MLP) calibrated via Cost-Sensitive Learning.

> **🔒 Data Privacy & Governance Notice:** All student performance records are processed entirely within the instructor's local browser session using client-side architectures. No student data is ever transmitted to external servers, ensuring strict compliance with Umm Al-Qura University's data governance policies.

---

## 📂 Repository Layout

```plaintext
├── index.html                  # Main application entryway & Landing interface
├── style.css                   # Custom dark theme & responsive media query layout
├── logic.js                    # Core expert engine, Chart.js mapping, & rule calculations
├── data_ds.csv                 # Anonymized Data Structures course cohort dataset
├── data_de.csv                 # Anonymized Data Engineering course cohort dataset
├── new data to test.csv        # Synthetic test dataset for instant system evaluation
├── requirements.txt            # Operational dependencies for predictive validation
└── README.md                   # System configuration & setup documentation

```

---

## 🚀 Future Institutional Roadmap

1. **Automated Enterprise Ingestion:** Establishing direct API pipelines with institutional systems (e.g., Banner and Blackboard) to replace manual CSV workflows.
2. **Role-Based Access Control (RBAC):** Deploying precise data access tiers scoped distinctly for Instructors, Academic Advisors, and Deans.
3. **Continuous Machine Learning Retraining Cycle:** Integrating a backend pipeline where finalized end-of-semester cohort outcomes automatically recalibrate ML model weights to dynamically scale predictive accuracy over time.

```
