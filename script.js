const questions = [
    // FÁCEIS
    { q: "Isômeros possuem a mesma fórmula molecular, mas diferem na:", opt: ["Massa atômica", "Fórmula estrutural", "Quantidade de átomos", "Elementos químicos"], cor: 1, lv: "fácil" },
    { q: "O tipo de isomeria entre o But-1-eno e o But-2-eno é:", opt: ["Cadeia", "Posição", "Função", "Geométrica"], cor: 1, lv: "fácil" },
    { q: "A isomeria entre Propanal e Propanona é de:", opt: ["Cadeia", "Posição", "Função", "Metameria"], cor: 2, lv: "fácil" },
    { q: "Um carbono quiral deve estar ligado a quantos grupos diferentes?", opt: ["2", "3", "4", "Nenhum"], cor: 2, lv: "fácil" },
    { q: "Isômeros Cis-Trans são um tipo de isomeria:", opt: ["Plana", "Geométrica", "De Função", "Tautomeria"], cor: 1, lv: "fácil" },
    { q: "O prefixo 'Trans' indica que grupos iguais estão em:", opt: ["Lados opostos", "Mesmo lado", "Carbonos diferentes", "Mesmo carbono"], cor: 0, lv: "fácil" },
    { q: "Metameria também é conhecida como isomeria de:", opt: ["Tautomeria", "Compensação", "Cadeia", "Núcleo"], cor: 1, lv: "fácil" },
    { q: "O Etanol e o Metoximetano são isômeros de:", opt: ["Cadeia", "Função", "Posição", "Ópticos"], cor: 1, lv: "fácil" },
    { q: "A tautomeria ocorre comumente entre:", opt: ["Aldeído e Enol", "Álcool e Éter", "Alcano e Alceno", "Benzeno e Fenol"], cor: 0, lv: "fácil" },
    { q: "Quantos carbonos quirais tem o 2-cloropropano?", opt: ["0", "1", "2", "3"], cor: 0, lv: "fácil" },

    // MÉDIAS
    { q: "O ácido maleico (cis) e fumárico (trans) possuem propriedades físicas:", opt: ["Iguais", "Diferentes", "Nulas", "Apenas PF igual"], cor: 1, lv: "médio" },
    { q: "Uma mistura racêmica é opticamente:", opt: ["Ativa (Dextrogira)", "Ativa (Levogira)", "Inativa por compensação externa", "Sempre sólida"], cor: 2, lv: "médio" },
    { q: "O número de isômeros ópticos ativos de uma molécula com 3 carbonos quirais diferentes é:", opt: ["4", "6", "8", "16"], cor: 2, lv: "médio" },
    { q: "Qual o tipo de isomeria entre Pentano e Metilbutano?", opt: ["Posição", "Cadeia", "Metameria", "Função"], cor: 1, lv: "médio" },
    { q: "O sistema E/Z é necessário quando:", opt: ["Há ligação simples", "A molécula é um anel", "Os 4 ligantes da dupla são diferentes", "Não há ligantes"], cor: 2, lv: "médio" },
    { q: "Isômeros ópticos que são imagens um do outro no espelho são:", opt: ["Diastereoisômeros", "Enantiômeros", "Tautômeros", "Mesos"], cor: 1, lv: "médio" },
    { q: "O composto Meso possui carbonos quirais mas é:", opt: ["Ativo", "Inativo por simetria interna", "Sempre trans", "Líquido"], cor: 1, lv: "médio" },
    { q: "Etil-propil-éter e Metil-butil-éter apresentam:", opt: ["Tautomeria", "Metameria", "Isomeria de Cadeia", "Não são isômeros"], cor: 1, lv: "médio" },
    { q: "Ciclobutano e But-2-eno são isômeros de:", opt: ["Cadeia", "Posição", "Função", "Geométricos"], cor: 0, lv: "médio" },
    { q: "A isomeria óptica é detectada através de um:", opt: ["Bico de Bunsen", "Polarímetro", "Microscópio", "Destilador"], cor: 1, lv: "médio" },

    // DIFÍCEIS
    { q: "Qual o total de isômeros planos (estruturais) para C3H6Cl2?", opt: ["2", "3", "4", "5"], cor: 2, lv: "difícil" },
    { q: "Distereoisômeros diferem de Enantiômeros pois:", opt: ["São imagens especulares", "Não são imagens especulares", "São sempre inativos", "Têm o mesmo ponto de fusão"], cor: 1, lv: "difícil" },
    { q: "Quantos isômeros totais (planos + espaciais) tem o 2,3-diclorobutano?", opt: ["3", "4", "5", "2"], cor: 0, lv: "difícil" },
    { q: "O aleno (propadieno) substituído possui isomeria óptica devido a:", opt: ["Carbono Quiral", "Eixo de assimetria", "Plano de simetria", "Ligações sigma"], cor: 1, lv: "difícil" },
    { q: "Na nomenclatura R/S, a prioridade é determinada pelo:", opt: ["Tamanho da cadeia", "Número atômico (Z)", "Quantidade de hidrogênios", "Eletronegatividade"], cor: 1, lv: "difícil" },
    { q: "O ácido lático (2-hidroxipropanoico) possui quantos isômeros ópticos totais?", opt: ["2 ativos e 1 racêmico", "4 ativos", "1 meso", "3 ativos"], cor: 0, lv: "difícil" },
    { q: "Um isômero que desvia a luz polarizada para a direita é:", opt: ["Levogiro", "Dextrogiro", "Racêmico", "Meso"], cor: 1, lv: "difícil" },
    { q: "A tautomeria amida-imida é um exemplo de equilíbrio:", opt: ["Ácido-Base", "Dinâmico", "Estático", "Irreversível"], cor: 1, lv: "difícil" },
    { q: "O 1,2-dimetilciclohexano apresenta isomeria:", opt: ["Apenas plana", "Apenas óptica", "Geométrica e Óptica", "Nenhuma"], cor: 2, lv: "difícil" },
    { q: "Qual destas moléculas não possui isômeros geométricos?", opt: ["But-2-eno", "1,2-dicloroeteno", "2-metilprop-1-eno", "Pent-2-eno"], cor: 2, lv: "difícil" }
];

let curIdx = 0, score = 0, timer, timeLeft, userName = "";

const elements = {
    start: document.getElementById('start-screen'),
    quiz: document.getElementById('quiz-screen'),
    res: document.getElementById('result-screen'),
    qText: document.getElementById('question-text'),
    opts: document.getElementById('options-container'),
    timer: document.getElementById('timer-sec'),
    progress: document.getElementById('progress-bar'),
    diff: document.getElementById('difficulty-badge'),
    modal: document.getElementById('rank-modal')
};

document.getElementById('start-btn').onclick = () => {
    userName = document.getElementById('username').value.trim() || "Player";
    elements.start.classList.add('hidden');
    elements.quiz.classList.remove('hidden');
    loadQuestion();
};

function loadQuestion() {
    clearInterval(timer);
    const q = questions[curIdx];
    
    elements.diff.innerText = q.lv;
    elements.diff.className = `badge diff-${q.lv}`;
    
    timeLeft = q.lv === "fácil" ? 15 : q.lv === "médio" ? 20 : 25;
    elements.timer.innerText = timeLeft;
    
    elements.qText.innerText = q.q;
    elements.opts.innerHTML = '';
    document.getElementById('progress-text').innerText = `Questão ${curIdx + 1}/30`;
    elements.progress.style.width = `${((curIdx + 1) / 30) * 100}%`;

    q.opt.forEach((o, i) => {
        const b = document.createElement('button');
        b.className = 'option-btn';
        b.innerText = o;
        b.onclick = () => checkAns(i);
        elements.opts.appendChild(b);
    });

    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        elements.timer.innerText = timeLeft;
        if(timeLeft <= 0) {
            clearInterval(timer);
            checkAns(-1);
        }
    }, 1000);
}

function checkAns(idx) {
    clearInterval(timer);
    const correct = questions[curIdx].cor;
    const btns = elements.opts.querySelectorAll('.option-btn');

    if(idx === correct) score++;
    
    btns.forEach((b, i) => {
        b.style.pointerEvents = 'none';
        if(i === correct) b.classList.add('correct');
        if(i === idx && idx !== correct) b.classList.add('wrong');
    });

    setTimeout(() => {
        curIdx++;
        if(curIdx < questions.length) loadQuestion();
        else showResult();
    }, 1000);
}

function showResult() {
    elements.quiz.classList.add('hidden');
    elements.res.classList.remove('hidden');
    document.getElementById('final-score').innerText = score;
    
    let msg = score > 25 ? "Excepcional! Você domina a química!" : score > 15 ? "Muito bom! Quase um especialista." : "Continue estudando, a química é fascinante!";
    document.getElementById('feedback-msg').innerText = msg;
    
    saveScore(userName, score);
}

function saveScore(name, pts) {
    let rank = JSON.parse(localStorage.getItem('isomeriaRank') || '[]');
    rank.push({name, pts});
    rank.sort((a,b) => b.pts - a.pts);
    localStorage.setItem('isomeriaRank', JSON.stringify(rank.slice(0, 10)));
}

// Lógica do Modal
document.getElementById('show-rank-btn').onclick = () => {
    const list = document.getElementById('rank-list');
    const rank = JSON.parse(localStorage.getItem('isomeriaRank') || '[]');
    list.innerHTML = rank.length > 0 
        ? rank.map((r, i) => `<li><span>${i+1}. ${r.name}</span> <b>${r.pts}/30</b></li>`).join('')
        : "<li>Ainda não há recordes.</li>";
    elements.modal.classList.remove('hidden');
};

document.querySelector('.close-modal').onclick = () => {
    elements.modal.classList.add('hidden');
};

window.onclick = (e) => {
    if (e.target == elements.modal) elements.modal.classList.add('hidden');
};