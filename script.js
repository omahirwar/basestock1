// 🔥 40 BASE + CRYPTO + DEFI + NFT QUESTIONS (ENGLISH) 🔥
const questions = [
    // BASE CHAIN (1-15)
    { question: "What L2 solution is Base chain built on?", options: ["Arbitrum", "Optimism", "Polygon", "zkSync"], correct: 1 },
    { question: "Who is the founder of Base?", options: ["Vitalik Buterin", "Jesse Pollak", "Gavin Wood", "Anatoly"], correct: 1 },
    { question: "When did Base mainnet launch?", options: ["2022", "2023", "2024", "2025"], correct: 2 },
    { question: "Where is Base sequencer hosted?", options: ["AWS", "Google Cloud", "Decentralized", "Azure"], correct: 0 },
    { question: "What is Base average block time?", options: ["200ms", "420ms", "1 second", "2 seconds"], correct: 1 },
    { question: "Is Base EVM compatible?", options: ["Yes", "No", "Partial", "Future"], correct: 0 },
    { question: "What is Base native token?", options: ["BASE", "ETH", "USDC", "None"], correct: 3 },
    { question: "What is Base TVL (approx)?", options: ["$1B", "$3B+", "$10B", "$50B"], correct: 1 },
    { question: "Which company launched Base?", options: ["Binance", "Coinbase", "Polygon", "Solana"], correct: 1 },
    { question: "What does Base bridge connect to?", options: ["Arbitrum", "Ethereum Mainnet", "BSC", "Solana"], correct: 1 },
    { question: "What is Base gas token?", options: ["BASE", "BNB", "ETH", "USDC"], correct: 2 },
    { question: "What is Base explorer URL?", options: ["basescan.org", "base.org", "basechain.com", "baseexplorer.io"], correct: 0 },
    { question: "Is Base built on OP Stack?", options: ["Yes", "No", "Future", "Partial"], correct: 0 },
    { question: "What was Base first major dApp?", options: ["Uniswap", "Friend.tech", "Aave", "OpenSea"], correct: 1 },
    { question: "Does Base use centralized sequencer?", options: ["Yes", "No", "Optional", "Future"], correct: 0 },

    // BLOCKCHAIN BASICS (16-25)
    { question: "What is first blockchain block called?", options: ["Origin", "Genesis", "Root", "Source"], correct: 1 },
    { question: "What is blockchain main feature?", options: ["Centralized", "Immutable", "Slow", "Expensive"], correct: 1 },
    { question: "Who created Bitcoin?", options: ["Vitalik", "Satoshi Nakamoto", "Jesse Pollak", "Changpeng Zhao"], correct: 1 },
    { question: "Smart contracts famous on which chain?", options: ["Bitcoin", "Ethereum", "Base", "Solana"], correct: 1 },
    { question: "What is Merkle tree used for?", options: ["Speed", "Data verification", "Mining", "Storage"], correct: 1 },
    { question: "What is private key?", options: ["Public address", "Wallet secret code", "Transaction ID", "Gas fee"], correct: 1 },
    { question: "What is nonce?", options: ["Gas price", "Transaction number", "Block size", "Reward"], correct: 1 },
    { question: "Proof of Work used in?", options: ["Ethereum", "Bitcoin", "Base", "All"], correct: 1 },
    { question: "Why gas fees exist?", options: ["Network congestion", "Transaction process", "Storage", "All"], correct: 3 },
    { question: "What is dApp?", options: ["Centralized app", "Decentralized app", "Mobile app", "Web app"], correct: 1 },

    // DEFI (26-32)
    { question: "What is DeFi full form?", options: ["Decentralized Finance", "Digital Finance", "Direct Finance", "Dynamic Finance"], correct: 0 },
    { question: "What does DEX mean?", options: ["Direct Exchange", "Decentralized Exchange", "Digital Exchange", "Dynamic Exchange"], correct: 1 },
    { question: "What is liquidity pool?", options: ["Trading pair funds", "Mining pool", "Gas pool", "NFT pool"], correct: 0 },
    { question: "What is yield farming?", options: ["NFT minting", "Staking LP tokens", "Trading", "Bridging"], correct: 1 },
    { question: "Uniswap runs on?", options: ["Solana", "Ethereum/Base", "Bitcoin", "Cardano"], correct: 1 },
    { question: "What is impermanent loss?", options: ["Permanent profit loss", "LP price change loss", "Gas fee", "Slippage"], correct: 1 },
    { question: "What is flash loan?", options: ["Long term loan", "Instant borrow-return", "NFT loan", "Stablecoin loan"], correct: 1 },

    // NFT (33-40)
    { question: "What is NFT full form?", options: ["New Finance Token", "Non-Fungible Token", "Network Function Token", "Native Finance Token"], correct: 1 },
    { question: "NFTs minted on?", options: ["Bitcoin", "Ethereum/Base", "BNB", "All"], correct: 1 },
    { question: "What is OpenSea?", options: ["DEX", "NFT marketplace", "Lending platform", "Bridge"], correct: 1 },
    { question: "When CryptoPunks launched?", options: ["2017", "2018", "2020", "2021"], correct: 0 },
    { question: "Bored Ape on which chain?", options: ["Solana", "Ethereum", "Base", "Tezos"], correct: 1 },
    { question: "What is NFT royalty?", options: ["Creator fee", "Gas fee", "Trading fee", "Mint fee"], correct: 0 },
    { question: "What is lazy minting?", options: ["Free minting", "Gasless mint", "Instant mint", "Batch mint"], correct: 1 },
    { question: "What is NFT floor price?", options: ["Highest price", "Lowest listing price", "Average price", "Volume"], correct: 1 }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timer;
let selectedAnswer = null;

// Start quiz
function startQuiz() {
    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

// Show current question
function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('questionNum').textContent = `BATTLE ${currentQuestion + 1}/${questions.length}`;
    document.getElementById('question').textContent = q.question;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'w-full p-8 rounded-3xl bg-white/20 hover:bg-white/40 backdrop-blur-xl border-2 border-white/40 text-left text-xl font-bold transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl shadow-lg text-white hover:text-black';
        btn.textContent = option;
        btn.onclick = () => selectAnswer(index);
        optionsDiv.appendChild(btn);
    });
    
    document.getElementById('nextBtn').style.display = 'none';
    timeLeft = 30;
    document.getElementById('timer').textContent = '30s';
    startTimer();
}

// Timer
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft + 's';
        
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
    
    const buttons = document.querySelectorAll('#options button');
    buttons.forEach((btn, i) => {
        if (i === questions[currentQuestion].correct) {
            btn.style.background = 'linear-gradient(45deg, #00FF88, #4CAF50)';
            btn.style.borderColor = '#00FF88';
            btn.style.color = 'black';
            btn.style.transform = 'scale(1.05)';
        } else if (i === index && index !== questions[currentQuestion].correct) {
            btn.style.background = 'linear-gradient(45deg, #FF4444, #D32F2F)';
            btn.style.borderColor = '#FF4444';
            btn.style.color = 'white';
        } else {
            btn.style.opacity = '0.5';
        }
    });
    
    if (index === questions[currentQuestion].correct) {
        score += 10;
        confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.5 },
            colors: ['#FF1744', '#00E5FF', '#FFEB3B', '#4CAF50']
        });
    }
    
    document.getElementById('score').textContent = `KILLS: ${score}`;
    document.getElementById('nextBtn').style.display = 'block';
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
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'block';
    const percentage = Math.round((score / (questions.length * 10)) * 100);
    document.getElementById('finalScore').textContent = percentage + '%';
    document.getElementById('finalPoints').textContent = score;
}

function showLeaderboard() {
    alert('LEADERBOARD COMING SOON! 🔥\nTop scorers get Base NFTs!');
}
