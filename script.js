// 🔥 WORKING QUIZ LOGIC - 40 ENGLISH QUESTIONS 🔥
// 🔥 50 PREMIUM QUESTIONS - BASE/DEFi/NFT/BLOCKCHAIN 🔥
const questions = [
    // BASE CHAIN (1-20)
    { question: "What L2 solution is Base built on?", options: ["Arbitrum", "Optimism", "Polygon", "zkSync"], correct: 1 },
    { question: "Who created Base chain?", options: ["Vitalik Buterin", "Jesse Pollak", "Gavin Wood", "Brian Armstrong"], correct: 1 },
    { question: "Base mainnet launched in?", options: ["2022", "2023", "2024", "2025"], correct: 1 },
    { question: "Where is Base sequencer hosted?", options: ["AWS", "Google Cloud", "Decentralized", "Azure"], correct: 0 },
    { question: "Base average block time?", options: ["200ms", "420ms", "650ms", "1s"], correct: 1 },
    { question: "Base gas token?", options: ["BASE", "ETH", "USDC", "None"], correct: 1 },
    { question: "Base TVL (approx)?", options: ["$1B", "$2B", "$4B+", "$10B"], correct: 2 },
    { question: "Which company launched Base?", options: ["Binance", "Coinbase", "Polygon Labs", "Optimism"], correct: 1 },
    { question: "Base explorer URL?", options: ["basescan.io", "base.org", "basescan.org", "base explorer.com"], correct: 2 },
    { question: "Base first major dApp?", options: ["Uniswap", "Friend.tech", "Aave", "SushiSwap"], correct: 1 },
    { question: "Base bridge connects to?", options: ["Arbitrum", "Ethereum", "BSC", "Solana"], correct: 1 },
    { question: "Is Base EVM compatible?", options: ["Yes", "No", "Partial", "Future"], correct: 0 },
    { question: "Base uses OP Stack?", options: ["Yes", "No", "Modified", "Custom"], correct: 0 },
    { question: "Base sequencer decentralized?", options: ["Yes", "No", "Future", "Optional"], correct: 1 },
    { question: "Base testnet faucet?", options: ["faucet.base.org", "testnet.base.org", "basefaucet.com", "None"], correct: 0 },
    { question: "Base daily active users?", options: ["100K", "500K", "2M+", "10M"], correct: 2 },
    { question: "Base transaction cost vs ETH?", options: ["Same", "10x cheaper", "100x cheaper", "1000x cheaper"], correct: 2 },
    { question: "Base supports ERC-20?", options: ["Yes", "No", "Only ERC-721", "Future"], correct: 0 },
    { question: "Base Discord?", options: ["discord.base.org", "discord.gg/buildonbase", "base.discord.com", "None"], correct: 1 },
    { question: "Base Twitter handle?", options: ["@BaseChain", "@base", "@BuildOnBase", "@CoinbaseBase"], correct: 1 },

    // BLOCKCHAIN BASICS (21-30)
    { question: "First blockchain block called?", options: ["Origin", "Genesis", "Root", "Alpha"], correct: 1 },
    { question: "Blockchain key feature?", options: ["Speed", "Centralized", "Immutable", "Cheap"], correct: 2 },
    { question: "Bitcoin creator pseudonym?", options: ["Vitalik", "Satoshi", "Hal Finney", "Nick Szabo"], correct: 1 },
    { question: "Smart contracts invented by?", options: ["Satoshi", "Vitalik Buterin", "Charles Hoskinson", "Gavin Wood"], correct: 1 },
    { question: "Merkle tree purpose?", options: ["Mining", "Verification", "Storage", "Speed"], correct: 1 },
    { question: "Private key role?", options: ["View transactions", "Sign transactions", "Read blockchain", "Mine blocks"], correct: 1 },
    { question: "Gas used for?", options: ["Storage", "Computation", "Speed", "Security"], correct: 1 },
    { question: "Proof of Stake vs Work?", options: ["Faster", "Energy efficient", "Centralized", "Slow"], correct: 1 },
    { question: "dApp definition?", options: ["Desktop app", "Decentralized app", "Database app", "Dynamic app"], correct: 1 },
    { question: "51% attack targets?", options: ["Storage", "Consensus", "Speed", "Privacy"], correct: 1 },

    // DEFI (31-40)
    { question: "DeFi full form?", options: ["Decentralized Finance", "Digital Finance", "Direct Finance", "Dynamic Finance"], correct: 0 },
    { question: "DEX meaning?", options: ["Direct Exchange", "Decentralized Exchange", "Digital Exchange", "Dynamic Exchange"], correct: 1 },
    { question: "Liquidity Provider earns?", options: ["Trading fees", "Block rewards", "Gas refunds", "NFTs"], correct: 0 },
    { question: "Yield farming is?", options: ["NFT trading", "LP staking", "Bridging", "Mining"], correct: 1 },
    { question: "Uniswap V3 feature?", options: ["Concentrated liquidity", "Fixed pools", "Central orderbook", "CEX matching"], correct: 0 },
    { question: "Impermanent loss cause?", options: ["Gas fees", "Price divergence", "Slippage", "MEV"], correct: 1 },
    { question: "Flash loans unique feature?", options: ["Collateralized", "Uncollateralized", "Long-term", "Interest-bearing"], correct: 1 },
    { question: "AMM stands for?", options: ["Advanced Mining Machine", "Automated Market Maker", "Active Mining Module", "Auto Mining Maker"], correct: 1 },
    { question: "Stablecoin collateral type?", options: ["Fiat", "Overcollateralized crypto", "Algorithmic", "All"], correct: 3 },
    { question: "MEV meaning?", options: ["Max Extractable Value", "Miner Extractable Value", "Market Efficiency Value", "Maximum Earnings Value"], correct: 1 },

    // NFT & WEB3 (41-50)
    { question: "NFT full form?", options: ["New Finance Token", "Non-Fungible Token", "Network Function Token", "Native Finance Token"], correct: 1 },
    { question: "ERC-721 standard for?", options: ["Fungible tokens", "Non-fungible tokens", "Stablecoins", "Derivatives"], correct: 1 },
    { question: "OpenSea primary function?", options: ["DEX", "NFT marketplace", "Lending", "Bridge"], correct: 1 },
    { question: "CryptoPunks launched year?", options: ["2016", "2017", "2018", "2019"], correct: 1 },
    { question: "BAYC blockchain?", options: ["Solana", "Ethereum", "Base", "Tezos"], correct: 1 },
    { question: "NFT floor price?", options: ["Highest sale", "Lowest listing", "Average sale", "Total volume"], correct: 1 },
    { question: "Lazy minting benefit?", options: ["Free minting", "Gasless until sale", "Faster mint", "Cheaper gas"], correct: 1 },
    { question: "NFT royalty paid to?", options: ["Buyer", "Seller", "Creator", "Marketplace"], correct: 2 },
    { question: "Web3 core principle?", options: ["Centralization", "Ownership", "Intermediaries", "Permissioned"], correct: 1 },
    { question: "DAO stands for?", options: ["Digital Asset Organization", "Decentralized Autonomous Organization", "Direct Access Organization", "Dynamic Asset Organization"], correct: 1 }
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
