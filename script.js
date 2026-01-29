// 🔥 WORKING QUIZ LOGIC - 40 ENGLISH QUESTIONS 🔥
const questions = [
    { question: "What L2 solution is Base chain built on?", options: ["Arbitrum", "Optimism", "Polygon", "zkSync"], correct: 1 },
    { question: "Who created Base?", options: ["Vitalik Buterin", "Jesse Pollak", "Gavin Wood", "Anatoly"], correct: 1 },
    // ... (same 40 questions jo pehle diye the)
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timer;
let gameActive = false;

// DOM Elements
const playQuizBtn = document.getElementById('playQuizBtn');
const quizScreen = document.getElementById('quizScreen');
const homeScreen = document.querySelector('#home');
const quizContent = document.getElementById('quizContent');

// START QUIZ BUTTON EVENT
playQuizBtn.addEventListener('click', function() {
    console.log('Quiz button clicked!'); // Debug
    startQuiz();
});

// MAIN QUIZ FUNCTIONS
function startQuiz() {
    console.log('Starting quiz...');
    gameActive = true;
    homeScreen.style.display = 'none';
    quizScreen.style.display = 'flex';
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    quizContent.innerHTML = `
        <div class="text-center mb-16">
            <h3 class="text-4xl font-bold text-white mb-4">Question ${currentQuestion + 1}/40</h3>
            <div class="text-6xl font-black text-emerald-400 mb-8" id="scoreDisplay">Score: ${score}</div>
            <div id="timerDisplay" class="timer-circle">30s</div>
        </div>
        <h2 class="text-3xl md:text-4xl font-black text-white mb-16 text-center" id="questionText">${q.question}</h2>
        <div id="options" class="grid md:grid-cols-2 gap-6"></div>
        <button id="nextBtn" class="mt-12 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-16 py-8 rounded-3xl text-2xl font-bold shadow-2xl hover:scale-105 transition-all duration-500 hidden">
            Next Question →
        </button>
    `;
    
    // Add options
    const optionsDiv = document.getElementById('options');
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'p-8 rounded-3xl bg-white/20 hover:bg-white/40 backdrop-blur-xl border-2 border-white/40 text-left text-xl font-bold transition-all duration-500 hover:scale-[1.02] text-white hover:text-black shadow-xl';
        btn.textContent = option;
        btn.onclick = () => selectAnswer(index);
        optionsDiv.appendChild(btn);
    });
    
    // Next button event
    document.getElementById('nextBtn').onclick = nextQuestion;
    timeLeft = 30;
    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timerDisplay').textContent = timeLeft + 's';
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function selectAnswer(index) {
    clearInterval(timer);
    
    const buttons = document.querySelectorAll('#options button');
    const correctIndex = questions[currentQuestion].correct;
    
    buttons.forEach((btn, i) => {
        if (i === correctIndex) {
            btn.style.background = 'linear-gradient(45deg, #10b981, #34d399)';
            btn.style.borderColor = '#10b981';
            btn.style.color = 'black';
        } else if (i === index && index !== correctIndex) {
            btn.style.background = 'linear-gradient(45deg, #ef4444, #f87171)';
            btn.style.borderColor = '#ef4444';
        }
        btn.style.cursor = 'not-allowed';
        btn.onclick = null;
    });
    
    if (index === correctIndex) {
        score += 10;
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        document.getElementById('scoreDisplay').textContent = `Score: ${score}`;
    }
    
    document.getElementById('nextBtn').style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const percentage = Math.round((score / 400) * 100);
    quizContent.innerHTML = `
        <div class="text-center">
            <div class="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl mx-auto mb-12 flex items-center justify-center shadow-2xl">
                <i class="fas fa-crown text-5xl text-white"></i>
            </div>
            <h2 class="text-7xl font-black text-white mb-8">${percentage}%</h2>
            <p class="text-4xl text-emerald-400 mb-16 font-bold">🏆 Base Master!</p>
            <div class="grid md:grid-cols-2 gap-12 mb-16 max-w-2xl mx-auto">
                <div class="glass-card p-8 rounded-2xl text-center">
                    <div class="text-5xl font-black text-white">${score}</div>
                    <div class="text-xl text-gray-400">Points</div>
                </div>
                <div class="glass-card p-8 rounded-2xl text-center">
                    <div class="text-5xl font-black text-purple-400">#${Math.floor(score/10)}</div>
                    <div class="text-xl text-gray-400">Rank</div>
                </div>
            </div>
            <button onclick="closeQuiz()" class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-20 py-8 rounded-3xl text-2xl font-bold shadow-2xl hover:scale-105 transition-all duration-500">
                Play Again 🚀
            </button>
        </div>
    `;
}

function closeQuiz() {
    quizScreen.style.display = 'none';
    homeScreen.style.display = 'flex';
}

// PAGE LOAD - SCROLL TO QUIZ BUTTON
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded - Quiz ready!');
    
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
