// Questions array
const questions = [
    {
        question: "Base chain kis L2 solution pe based hai?",
        options: ["Arbitrum", "Optimism", "Polygon", "zkSync"],
        correct: 1
    },
    {
        question: "Base ka founder kaun hai?",
        options: ["Vitalik Buterin", "Jesse Pollak", "Gavin Wood", "Anatoly Yakovenko"],
        correct: 1
    },
    {
        question: "Base mainnet kab launch hua?",
        options: ["2022", "2023", "2024", "2025"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timer;
let selectedAnswer = null;

// Start quiz
function startQuiz() {
    document.getElementById('homeScreen').classList.add('hidden');
    document.getElementById('quizScreen').classList.remove('hidden');
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

// Show current question
function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('questionNum').textContent = `Q${currentQuestion + 1}`;
    document.getElementById('question').textContent = q.question;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'w-full p-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-left transition-all duration-300 hover:scale-[1.02]';
        btn.textContent = option;
        btn.onclick = () => selectAnswer(index);
        optionsDiv.appendChild(btn);
    });
    
    document.getElementById('nextBtn').classList.add('hidden');
    timeLeft = 30;
    startTimer();
}

// Timer
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

// Answer select
function selectAnswer(index) {
    clearInterval(timer);
    selectedAnswer = index;
    
    // Show correct answer
    const buttons = document.querySelectorAll('#options button');
    buttons.forEach((btn, i) => {
        if (i === questions[currentQuestion].correct) {
            btn.classList.add('bg-green-500/20', 'border-green-400');
        } else if (i === index && index !== questions[currentQuestion].correct) {
            btn.classList.add('bg-red-500/20', 'border-red-400');
        }
    });
    
    if (index === questions[currentQuestion].correct) {
        score += 10;
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
    
    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('nextBtn').classList.remove('hidden');
}

// Next question
function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Show result
function showResult() {
    document.getElementById('quizScreen').classList.add('hidden');
    document.getElementById('resultScreen').classList.remove('hidden');
    const percentage = Math.round((score / (questions.length * 10)) * 100);
    document.getElementById('finalScore').textContent = `${percentage}%`;
}

function showLeaderboard() {
    alert('Leaderboard coming soon! 🔥');
}
