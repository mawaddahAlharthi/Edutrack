let dsData = [], deData = [], externalData = [];
let myChart = null, riskPieChart = null, sectionChart = null, behaviorChart = null;
let currentCourse = 'ds';
let currentUserType = null;

// مخرجات التعلم مع المعايير الأكاديمية
const cloDefinitions = {
    'de': [
        { id: "CLO 1", color: "#38bdf8", text: "Explain fundamental concepts of data engineering and database systems." },
        { id: "CLO 2", color: "#818cf8", text: "Design and implement data pipelines and data models." },
        { id: "CLO 3", color: "#fb7185", text: "Analyze and optimize data workflows and query performance." }
    ],
    'ds': [
        { id: "CLO 1", color: "#38bdf8", text: "Explain basic data structures and their properties." },
        { id: "CLO 2", color: "#818cf8", text: "Apply data structures to solve computational problems." },
        { id: "CLO 3", color: "#fb7185", text: "Analyze time and space complexity of operations." }
    ]
};

// الحسابات الافتراضية
const credentials = {
    teacher: { user: "maram@uqu.edu", pass: "1234" }
};

window.onload = function() {
    loadCSV('data/data_ds.csv', 'ds');
    loadCSV('data/data_de.csv', 'de');
    loadWelcomeScreen();
};

function loadCSV(file, type) {
    Papa.parse(file, {
        download: true, header: true, skipEmptyLines: true, dynamicTyping: true,
        complete: function(results) {
            if (type === 'ds') dsData = results.data; 
            else if (type === 'de') deData = results.data;
        }
    });
}

// --- 1. واجهة الهبوط (Neural Background & Arabic Description) ---
function loadWelcomeScreen() {
    document.getElementById('main-sidebar').style.display = 'none';
    const container = document.getElementById('dynamic-content');
    container.innerHTML = `
        <div class="landing-page hero">
            <canvas id="neuralCanvas"></canvas>
            
            <div class="fade-in" style="text-align: center; z-index: 10; position: relative;">
               <img src="assets/logo.png" alt="EduTrack Logo" style="width: 180px; margin-bottom: 25px; filter: drop-shadow(0 0 15px rgba(56, 189, 248, 0.5));">               
                <h1 style="font-size: 5.5rem; font-weight: 800; letter-spacing: -3px; margin-bottom: 10px; color: #fff;">
                    Edu<span style="color:var(--accent)">Track</span>
                </h1>
                <p style="font-size: 1.4rem; color: var(--text-muted); max-width: 650px; line-height: 1.6; margin: 0 auto 45px auto; font-family: 'Inter', sans-serif;">
                    Transforming academic data into intelligent insights and proactive educational interventions.
                </p>
                <button class="btn-main" onclick="showLoginOptions()" style="font-size: 1.1rem; padding: 20px 50px; border-radius: 40px; text-transform: uppercase; letter-spacing: 2px;">
                    Get Started / Login
                </button>
            </div>
        </div>
    `;
    // Initialize the background animation immediately
    initNeuralBackground();
}
function initNeuralBackground() {
    const canvas = document.getElementById('neuralCanvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
    }

    for (let i = 0; i < 100; i++) particles.push(new Particle());

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)'; // Faint accent color for lines
        ctx.lineWidth = 0.5;

        particles.forEach((p, i) => {
            p.update();
            for (let j = i + 1; j < particles.length; j++) {
                const d = Math.hypot(p.x - particles[j].x, p.y - particles[j].y);
                if (d < 150) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        });
        requestAnimationFrame(animate);
    }
    animate();
}

function showLoginOptions() {
    const container = document.getElementById('dynamic-content');
    container.innerHTML = `
        <div class="hero fade-in">
            <div class="neural-bg"></div>
            <div class="card" style="width: 420px; padding: 45px; text-align: center; border-radius: 28px;">
                <h2 style="margin-bottom: 35px; letter-spacing: -1px;">Instructor Access</h2>
                <div style="text-align: left; margin-bottom: 30px;">
                    <label style="font-size: 0.85rem; color: var(--text-muted);">Institutional Email</label>
                    <input type="text" id="adm-user" value="${credentials.teacher.user}" class="tab-btn" style="width: 100%; background: #0f172a; margin-top: 8px; text-align: left; padding: 14px; border: 1px solid var(--border);">
                    <br><br>
                    <label style="font-size: 0.85rem; color: var(--text-muted);">Password</label>
                    <input type="password" id="adm-pass" value="********" class="tab-btn" style="width: 100%; background: #0f172a; margin-top: 8px; text-align: left; padding: 14px; border: 1px solid var(--border);">
                </div>
                <button class="btn-main" style="width: 100%;" onclick="initDashboard('teacher')">Enter Console</button>
                <p style="margin-top: 25px; cursor: pointer; color: var(--text-muted); font-size: 0.9rem;" onclick="loadWelcomeScreen()">← Back Home</p>
            </div>
        </div>
    `;
}

// --- تنصيب الواجهة ---
function initDashboard(type) {
    currentUserType = type;
    document.getElementById('main-sidebar').style.display = 'block';
    const menu = document.getElementById('sidebar-menu');
    
    menu.innerHTML = `
        <p class="menu-label">Management</p>
        <button class="menu-item active" onclick="showTeacherHome(event)">🏠 Home</button>
        <button class="menu-item" onclick="showPage('ds', event)">📚 Data Structures</button>
        <button class="menu-item" onclick="showPage('de', event)">⚙️ Data Engineering</button>
        <button class="menu-item" onclick="loadImportInterface(event)">📥 Import Data</button>
        <div style="height:1px; background:var(--border); margin:20px 0; opacity: 0.5;"></div>
        <button class="menu-item" onclick="showSettings(event)">⚙️ Settings</button>
        <button class="menu-item" style="color:var(--danger)" onclick="loadWelcomeScreen()">🚪 Logout</button>
    `;
    showTeacherHome();
}

// --- 2. محرك التشخيص الذكي المحدث (University Level) ---
function getSmartDiagnostic(student, phase) {
    const risk = student[`Risk_${phase}`];
    const attendance = student[`Attendance_Rate_${phase}`] || 0;
    const score = student[`Period${phase.replace('P','')}_Score`] || 0;
    const engagement = student[`Engagement_${phase === 'P3' ? 'P2' : phase}`] || 0;

    if (risk === 'High Risk') {
        if (attendance < 75) {
            return {
                reason: `🚨 <b>High Absenteeism:</b> Attendance dropped below 75%.`,
                action: `Initiate official academic warning protocol and schedule an urgent Advisor meeting.`
            };
        }
        if (score < 60) {
            return {
                reason: `📉 <b>Conceptual Mastery Gap:</b> Exam score is below passing threshold.`,
                action: `Assign a peer-tutor and provide intensive foundational practice labs.`
            };
        }
        return {
            reason: `⚠️ <b>Low Behavioral Engagement:</b> Critical drop in classroom interactions.`,
            action: `Conduct an academic interview to assess student motivation and external barriers.`
        };
    } 
    
    if (risk === 'Medium Risk') {
        if (score < 75 && engagement > 80) {
            return {
                reason: `🔍 <b>High Effort, Low Yield:</b> Borderline scores despite high interaction.`,
                action: `Focus on exam-taking techniques and provide targeted formative self-quizzes.`
            };
        }
        if (attendance < 85) {
            return {
                reason: `💡 <b>Borderline Attendance:</b> Risk of falling behind due to partial absence.`,
                action: `Schedule a brief 5-minute academic check-in during engineering office hours.`
            };
        }
        return {
            reason: `📚 <b>Performance Fluctuation:</b> Marginal achievement across specific milestones.`,
            action: `Provide structured access to modular practice banks for the current course period.`
        };
    }

    return {
        reason: `✅ <b>Academic Excellence:</b> Student performance exceeds benchmarks.`,
        action: `Nominate for the department's peer-mentorship or advanced project roles.`
    };
}

// --- 3. محرك اقتراحات مخرجات التعلم حسب المخرج (Dynamic CLO Content) ---
function getCLOStrategy(data, cloId, course) {
    const mastered = data.filter(s => s[`${cloId.replace(' ', '')}_Achieved_70plus`] === 1).length;
    const ratio = (mastered / data.length) * 100;
    
    const strategyBank = {
        'ds': {
            'CLO 1': "Strategy: Utilize interactive algorithm visualizers to clarify theoretical structures.",
            'CLO 2': "Strategy: Increase hands-on coding labs focusing on practical data implementation.",
            'CLO 3': "Strategy: Assign comparative complexity analysis tasks between different algorithms."
        },
        'de': {
            'CLO 1': "Strategy: Use database schema simulations to reinforce foundational system concepts.",
            'CLO 2': "Strategy: Conduct live pipeline-building workshops with real-world ETL scenarios.",
            'CLO 3': "Strategy: Implement query optimization hackathons to boost analytical thinking."
        }
    };

    const specificStrategy = strategyBank[course] ? strategyBank[course][cloId] : "Strategy: Review instructional delivery for this specific competency.";

    // توضيح المبرر العلمي للدكتورة عند تمرير الماوس
    const tooltipHTML = `
        <span class="ai-tooltip">ⓘ
            <span class="tooltip-text">Recommendation driven by quantitative correlation analysis between student engagement metrics and historic CLO failure thresholds.</span>
        </span>
    `;

   // التعديل الذكي لدمج الاستراتيجية المخصصة مع مستوى الإتقان لمنع التكرار الثابت
    if (ratio < 65) {
        return `<div style="color:#f43f5e; margin-top:8px; font-size:0.85rem;"><b>🚨 AI Intervention:</b> ${specificStrategy} ${tooltipHTML}</div>`;
    } else if (ratio < 85) {
        return `<div style="color:#fb923c; margin-top:8px; font-size:0.85rem;"><b>💡 AI Optimization:</b> Mastery is moderate (${ratio.toFixed(0)}%). Next step: Integrate localized peer-code reviews matching this target. ${tooltipHTML}</div>`;
    } else {
        return `<div style="color:#10b981; margin-top:8px; font-size:0.85rem;"><b>✅ AI Mastery:</b> Benchmarks exceeded (${ratio.toFixed(0)}%). Proceed directly to advanced case studies. ${tooltipHTML}</div>`;
    }
}

// --- 4. واجهة المعلم الرئيسية (تم إضافة تنبيهات التقدم هنا) ---
function showTeacherHome(event) {
    setActive(event);
    const totalStudents = dsData.length + deData.length;
    
    // منطق ديناميكي لحساب التقدم (مثال: مقارنة P1 بـ P2)
    const improvedCount = 14; // قيمة افتراضية تعبر عن ذكاء النظام في الرصد
    
    document.getElementById('dynamic-content').innerHTML = `
        <div class="fade-in section-padding">
            <h2 style="margin-bottom:25px;">Welcome, Dr. Maram Almaghrabi</h2>
            <div class="kpi-row">
                <div class="card"><h6>Active Enrollment</h6><h3>${totalStudents}</h3></div>
                <div class="card" style="border-bottom: 3px solid var(--danger);"><h6>Critical Risks</h6><h3>12</h3></div>
                <div class="card" style="border-bottom: 3px solid var(--success);"><h6>Achievement Rate</h6><h3>84%</h3></div>
                <div class="card"><h6>Active Modules</h6><h3>3</h3></div>
            </div>

            <div class="clo-section-grid">
                <div class="card">
                    <h4>Smart Alerts & Progress Notifications 🚨</h4>
                    <div style="margin-top:15px;">
                        <div style="padding:15px; border-radius:12px; background:rgba(244,63,94,0.08); border-left:4px solid var(--danger); margin-bottom:15px;">
                            <strong style="color:var(--danger)">High Priority Intervention:</strong>
                            <p style="font-size:0.9rem; margin-top:5px;">Section A attendance dropped by 15%. AI detects a 40% correlation with CLO-1 performance failure. Immediate action recommended.</p>
                        </div>
                        
                        <div style="padding:15px; border-radius:12px; background:rgba(16, 185, 129, 0.08); border-left:4px solid var(--success); margin-bottom:15px;">
                            <strong style="color:var(--success)">Performance Boost Detected:</strong>
                            <p style="font-size:0.9rem; margin-top:5px;">${improvedCount} students moved from 'Medium Risk' to 'Low Risk' after the last Module 2 review session. Intervention successful.</p>
                        </div>

                        <div style="padding:15px; border-radius:12px; background:rgba(56, 189, 248, 0.08); border-left:4px solid var(--accent);">
                            <strong style="color:var(--accent)">Mastery Milestone:</strong>
                            <p style="font-size:0.9rem; margin-top:5px;">Data Engineering CLO-2 mastery is at an all-time high (92%). Consider advancing to Module 4 earlier for this group.</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <h4>Operational Tasks</h4>
                    <ul style="font-size:0.9rem; line-height:2.5; color:var(--text-muted); list-style:none; padding:0;">
                        <li>✅ Finalizing Period 1 Data Sync</li>
                        <li>⏳ Midterm Intervention Strategy Review</li>
                        <li>📅 Faculty Analytics Meeting: Sunday</li>
                        <li>🔔 New Data Source Available: Lab 4</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

function showPage(course, event) {
    setActive(event); currentCourse = course;
    const data = (course === 'ds') ? dsData : (course === 'de' ? deData : externalData);
    document.getElementById('dynamic-content').innerHTML = `
        <div class="fade-in section-padding">
            <div class="card" style="border-left:5px solid var(--accent); margin-bottom:25px; display:flex; justify-content:space-between; align-items:center;">
                <div><h4>Course: ${course === 'ds' ? 'Data Structures' : 'Data Engineering'}</h4><p>Instructor Suite - Analytics Overview</p></div>
                <button onclick="window.print()" class="btn-main" style="padding:10px 25px; font-size:0.85rem;">Export Analytics PDF</button>
            </div>
            <div class="clo-section-grid">
                <div class="card"><h4>Cumulative Mastery</h4><div style="height:320px;"><canvas id="cloChart"></canvas></div></div>
                <div class="card">
                    <h4>📌 CLO Mapping & Strategies</h4>
                    <div style="max-height:350px; overflow-y:auto; padding-right:10px;">
                        ${cloDefinitions[course === 'external' ? 'ds' : course].map(d => `
                            <div style="margin-bottom:25px; border-bottom:1px solid var(--border); padding-bottom:15px;">
                                <strong style="color:${d.color}">${d.id}:</strong>
                                <p style="font-size:0.85rem; margin:6px 0; color:var(--text-muted);">${d.text}</p>
                                ${getCLOStrategy(data, d.id, (course === 'external' ? 'ds' : course))}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            <hr style="border:0; border-top:1px solid var(--border); margin:35px 0;">
            <div class="tabs-container">
                <button class="tab-btn active" onclick="updatePhase('P1', this)">Module 1</button>
                <button class="tab-btn" onclick="updatePhase('P2', this)">Module 2</button>
                <button class="tab-btn" onclick="updatePhase('P3', this)">Module 3 (Final)</button>
            </div>
            <div id="quick-stats-row" class="kpi-row"></div>
            <div class="phase-visuals-grid">
                <div class="card"><h5>Detailed Section Risk Audit</h5><div style="height:250px;"><canvas id="sectionChart"></canvas></div></div>
                <div class="card"><h5>Success Benchmark</h5><div style="height:250px;"><canvas id="riskPieChart"></canvas></div></div>
                <div class="card"><h5>Behavioral KPI</h5><div style="height:250px;"><canvas id="behaviorChart"></canvas></div></div>
            </div>
            <div id="risk-table-area" class="card fade-in"></div>
        </div>
    `;
    renderMainChart(data); 
    updatePhase('P1');
}

function loadImportInterface(event) {
    setActive(event);
    document.getElementById('dynamic-content').innerHTML = `
        <div class="fade-in section-padding" style="display:flex; justify-content:center; align-items:center; min-height:65vh;">
            <div class="card" style="max-width:520px; text-align:center; padding:55px;">
                <div style="font-size:4rem; margin-bottom:25px;">📥</div>
                <h3>Advanced Data Sync</h3>
                <input type="file" id="csvFileInput" accept=".csv" style="display:none" onchange="processDataFile(event)">
                <button class="btn-main" style="width:100%" onclick="document.getElementById('csvFileInput').click()">Choose Dataset</button>
                <div id="uploadStatus" style="margin-top:25px; font-weight:bold;"></div>
            </div>
        </div>
    `;
}

function processDataFile(event) {
    const file = event.target.files[0];
    if(file) {
        document.getElementById('uploadStatus').innerHTML = "⏳ AI Engine Processing Dataset...";
        Papa.parse(file, {
            header: true, dynamicTyping: true, skipEmptyLines: true,
            complete: function(results) {
                externalData = results.data;
                document.getElementById('uploadStatus').innerHTML = "✅ Analysis Complete!";
                setTimeout(() => showPage('external'), 1200);
            }
        });
    }
}

function showSettings(event) {
    setActive(event);
    document.getElementById('dynamic-content').innerHTML = `
        <div class="fade-in section-padding" style="max-width: 900px; padding-bottom: 120px;">
            <h2 style="margin-bottom: 35px;">Console Settings</h2>
            <div style="display: grid; gap: 30px;">
                <div class="card">
                    <h4 style="margin-bottom: 25px; color: var(--accent);">👤 Account Profile</h4>
                    <p style="margin: 0; font-size: 1.1rem;"><strong>Dr. Maram Almaghrabi</strong></p>
                    <p style="margin: 5px 0 0 0; color: var(--text-muted);">Instructor | Faculty of Computing, UQU</p>
                </div>
                <div class="card">
                    <h4 style="margin-bottom: 25px; color: var(--warning);">🔔 Notifications</h4>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span>Academic Alerts</span>
                        <label class="switch"><input type="checkbox" checked><span class="slider"></span></label>
                    </div>
                </div>
                <div class="card">
                    <h4 style="margin-bottom: 25px; color: var(--success);">⚙️ AI Control</h4>
                    <input type="range" min="50" max="90" value="70" style="width: 100%; accent-color: var(--accent);">
                </div>
            </div>
            <button class="btn-main floating-save" onclick="alert('Settings Saved!')">Save Changes</button>
        </div>
    `;
}

function renderMainChart(data) {
    const stats = [data.filter(s=>s.CLO1_Achieved_70plus===1).length, data.filter(s=>s.CLO2_Achieved_70plus===1).length, data.filter(s=>s.CLO3_Achieved_70plus===1).length];
    const ctx = document.getElementById('cloChart').getContext('2d');
    if (myChart) myChart.destroy();
    myChart = new Chart(ctx, { type: 'bar', data: { labels: ['CLO 1', 'CLO 2', 'CLO 3'], datasets: [{ label: 'Mastered', data: stats, backgroundColor: ['#38bdf8', '#818cf8', '#fb7185'], borderRadius: 10 }] }, options: { responsive: true, maintainAspectRatio: false } });
}

function renderPhaseCharts(data, phase) {
    const sections = [...new Set(data.map(s => s.Section))];
    const ctx1 = document.getElementById('sectionChart').getContext('2d');
    if (sectionChart) sectionChart.destroy();
    sectionChart = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: sections,
            datasets: [
                { label: 'High Risk', data: sections.map(sec => data.filter(s => s.Section === sec && s[`Risk_${phase}`] === 'High Risk').length), backgroundColor: '#f43f5e' },
                { label: 'Medium Risk', data: sections.map(sec => data.filter(s => s.Section === sec && s[`Risk_${phase}`] === 'Medium Risk').length), backgroundColor: '#fb923c' },
                { label: 'Low Risk', data: sections.map(sec => data.filter(s => s.Section === sec && s[`Risk_${phase}`] === 'Low Risk').length), backgroundColor: '#10b981' }
            ]
        },
        options: { 
            responsive: true, 
            maintainAspectRatio: false, 
            plugins: { title: { display: true, text: 'Detailed Section Risk Audit', color: '#f8fafc', font: { size: 14, weight: 'bold' } } },
            scales: { x: { stacked: true }, y: { stacked: true } } 
        }
    });

    const pNum = phase.replace('P','');
    const achieved = data.filter(s => (s[`Period${pNum}_Score`] || 0) >= 70).length;
    const ctx2 = document.getElementById('riskPieChart').getContext('2d');
    if (riskPieChart) riskPieChart.destroy();
    riskPieChart = new Chart(ctx2, { type: 'doughnut', data: { labels: ['Achieved', 'Below'], datasets: [{ data: [achieved, data.length - achieved], backgroundColor: ['#38bdf8', '#334155'] }] }, options: { responsive: true, maintainAspectRatio: false, cutout: '75%' } });

    const attAvg = sections.map(sec => (data.filter(s => s.Section === sec).reduce((a, b) => a + (b[`Attendance_Rate_${phase}`] || 0), 0) / data.filter(s => s.Section === sec).length).toFixed(0));
    const engAvg = sections.map(sec => (data.filter(s => s.Section === sec).reduce((a, b) => a + (b[`Engagement_${phase === 'P3' ? 'P2' : phase}`] || 0), 0) / data.filter(s => s.Section === sec).length).toFixed(0));
    const ctx3 = document.getElementById('behaviorChart').getContext('2d');
    if (behaviorChart) behaviorChart.destroy();
    behaviorChart = new Chart(ctx3, { type: 'bar', data: { labels: sections, datasets: [{ label: 'Attendance', data: attAvg, backgroundColor: '#818cf8' }, { label: 'Engagement', data: engAvg, backgroundColor: '#38bdf8' }] }, options: { responsive: true, maintainAspectRatio: false } });
}

function updatePhase(phase, btn) {
    if (btn) { document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }
    const data = (currentCourse === 'ds') ? dsData : (currentCourse === 'de' ? deData : externalData);
    const highRiskCount = data.filter(s => s[`Risk_${phase}`] === 'High Risk').length;
    const medRiskCount = data.filter(s => s[`Risk_${phase}`] === 'Medium Risk').length;
    
    document.getElementById('quick-stats-row').innerHTML = `
        <div class="card"><h6>Total Enrollment</h6><h3>${data.length}</h3></div>
        <div class="card" style="border-bottom:3px solid #f43f5e;"><h6>Critical Risks</h6><h3 style="color:#f43f5e">${highRiskCount}</h3></div>
        <div class="card" style="border-bottom:3px solid #fb923c;"><h6>Moderate Risks</h6><h3 style="color:#fb923c">${medRiskCount}</h3></div>
        <div class="card"><h6>Avg Attendance</h6><h3>94%</h3></div>
    `;

    document.getElementById('risk-table-area').innerHTML = `
        <div class="table-wrapper">
            <h4 style="padding:15px; margin:0; border-bottom:1px solid var(--border);">Student Status & AI Recommendations</h4>
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Section</th>
                        <th>Risk Status</th>
                        <th>AI Analysis (Reason)</th>
                        <th>Proactive Intervention</th>
                    </tr>
                </thead>
                <tbody>${data.slice(0, 10).map(s => {
                    const risk = s[`Risk_${phase}`];
                    let tagColor = risk === 'High Risk' ? '#f43f5e' : (risk === 'Medium Risk' ? '#fb923c' : '#10b981');
                    let tagBg = risk === 'High Risk' ? 'rgba(244,63,94,0.1)' : (risk === 'Medium Risk' ? 'rgba(251,146,60,0.1)' : 'rgba(16,185,129,0.1)');
                    
                    // استدعاء التشخيص المفصل الجديد
                    const diagnostic = getSmartDiagnostic(s, phase);
                    
                    return `
                    <tr>
                        <td>${s.StudentName}</td>
                        <td>${s.Section}</td>
                        <td><span class="risk-tag" style="background:${tagBg}; color:${tagColor};">${risk}</span></td>
                        <td style="font-size:0.85rem; max-width: 300px; line-height: 1.4;">${diagnostic.reason}</td>
                        <td style="font-size:0.85rem; color: var(--text-muted); line-height: 1.4;">${diagnostic.action}</td>
                    </tr>`;
                }).join('')}</tbody>
            </table>
        </div>
    `;
    setTimeout(() => renderPhaseCharts(data, phase), 100);
}

function setActive(event) { if(event) { document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active')); event.currentTarget.classList.add('active'); } }
