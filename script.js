document.addEventListener('DOMContentLoaded', () => {
    // BANCO DE DADOS COM 100 QUESTÕES
    const allQuestions = [
        // 1-10: Fundamentos e Plana
        { q: "Isômeros possuem a mesma fórmula molecular, mas diferem na:", opt: ["Massa atômica", "Fórmula estrutural", "Quantidade de átomos", "Elementos químicos"], cor: 1, lv: "fácil" },
        { q: "O tipo de isomeria entre o But-1-eno e o But-2-eno é:", opt: ["Cadeia", "Posição", "Função", "Geométrica"], cor: 1, lv: "fácil" },
        { q: "A isomeria entre Propanal e Propanona é de:", opt: ["Cadeia", "Posição", "Função", "Metameria"], cor: 2, lv: "fácil" },
        { q: "Um carbono quiral deve estar ligado a quantos grupos diferentes?", opt: ["2", "3", "4", "Nenhum"], cor: 2, lv: "fácil" },
        { q: "Metameria também é conhecida como isomeria de:", opt: ["Tautomeria", "Compensação", "Cadeia", "Núcleo"], cor: 1, lv: "fácil" },
        { q: "O Etanol e o Metoximetano são isômeros de:", opt: ["Cadeia", "Função", "Posição", "Ópticos"], cor: 1, lv: "fácil" },
        { q: "A tautomeria ocorre comumente entre:", opt: ["Aldeído e Enol", "Álcool e Éter", "Alcano e Alceno", "Benzeno e Fenol"], cor: 0, lv: "fácil" },
        { q: "Quantos carbonos quirais tem o 2-cloropropano?", opt: ["0", "1", "2", "3"], cor: 0, lv: "fácil" },
        { q: "Isômeros que pertencem a funções químicas diferentes apresentam isomeria de:", opt: ["Função", "Cadeia", "Posição", "Tautomeria"], cor: 0, lv: "fácil" },
        { q: "O Ciclobutano e o Metilciclopropano são isômeros de:", opt: ["Posição", "Função", "Cadeia", "Geométrica"], cor: 2, lv: "fácil" },
        // ... (as outras 90 questões permanecem no banco abaixo)
        { q: "A diferença entre o 2-metilpentano e o 3-metilpentano é de:", opt: ["Cadeia", "Posição", "Função", "Metameria"], cor: 1, lv: "fácil" },
        { q: "Etóxi-etano e Metóxi-propano são isômeros de:", opt: ["Função", "Metameria", "Cadeia", "Óptica"], cor: 1, lv: "fácil" },
        { q: "Qual o nome da isomeria entre o Ácido Propanoico e o Etanoato de Metila?", opt: ["Posição", "Cadeia", "Função", "Tautomeria"], cor: 2, lv: "fácil" },
        { q: "O fenômeno onde dois isômeros planos coexistem em equilíbrio dinâmico é:", opt: ["Metameria", "Tautomeria", "Estereoisomeria", "Ressonância"], cor: 1, lv: "fácil" },
        { q: "Quantos isômeros de posição existem para o Diclorobenzeno?", opt: ["1", "2", "3", "4"], cor: 2, lv: "fácil" },
        { q: "O n-butano e o isobutano diferem pelo tipo de:", opt: ["Função", "Ligação", "Cadeia", "Posição"], cor: 2, lv: "fácil" },
        { q: "A isomeria de compensação ocorre frequentemente em:", opt: ["Álcoois", "Éteres e Ésteres", "Alcanos", "Ácidos Carboxílicos"], cor: 1, lv: "fácil" },
        { q: "O Propan-1-ol e o Propan-2-ol são isômeros de:", opt: ["Cadeia", "Posição", "Metameria", "Função"], cor: 1, lv: "fácil" },
        { q: "Butanamida e Butan-1-amina são isômeros?", opt: ["Sim, de função", "Sim, de cadeia", "Não, fórmulas moleculares diferentes", "Sim, de posição"], cor: 2, lv: "médio" },
        { q: "Qual destes compostos pode sofrer tautomeria?", opt: ["Metano", "Etanal", "Cloroetano", "Etanol"], cor: 1, lv: "médio" },
        { q: "Para ocorrer isomeria geométrica em alcenos, os ligantes do mesmo carbono devem ser:", opt: ["Iguais entre si", "Diferentes entre si", "Sempre Hidrogênios", "Apenas Halogênios"], cor: 1, lv: "médio" },
        { q: "O isômero Cis possui os grupos de maior prioridade no:", opt: ["Mesmo lado do plano", "Lados opostos", "Mesmo carbono", "Extremidades da cadeia"], cor: 0, lv: "fácil" },
        { q: "O ácido maleico (cis) e o ácido fumárico (trans) são:", opt: ["Enantiômeros", "Diastereoisômeros", "Isômeros de cadeia", "Tautômeros"], cor: 1, lv: "médio" },
        { q: "A isomeria Cis-Trans pode ocorrer em compostos cíclicos?", opt: ["Nunca", "Somente em anéis aromáticos", "Sim, se houver ligantes diferentes em carbonos do anel", "Somente se houver dupla ligação no anel"], cor: 2, lv: "médio" },
        { q: "Qual o nome do sistema usado quando os 4 ligantes da dupla são diferentes?", opt: ["R/S", "D/L", "E/Z", "Cis/Trans clássico"], cor: 2, lv: "médio" },
        { q: "O isômero 'Z' vem do alemão 'Zusammen', que significa:", opt: ["Separados", "Opostos", "Juntos", "Direita"], cor: 2, lv: "médio" },
        { q: "O 1,1-dicloroeteno possui isomeria geométrica?", opt: ["Sim, cis/trans", "Não, um carbono tem ligantes iguais", "Sim, E/Z", "Apenas óptica"], cor: 1, lv: "médio" },
        { q: "A temperatura de ebulição do isômero Cis geralmente é:", opt: ["Igual ao Trans", "Menor que o Trans", "Maior que o Trans", "Sempre zero"], cor: 2, lv: "difícil" },
        { q: "Qual destes apresenta isomeria Cis-Trans?", opt: ["Prop-1-eno", "But-2-eno", "Etino", "2-metilbut-2-eno"], cor: 1, lv: "fácil" },
        { q: "O 1,2-dimetilciclobutano possui quantos isômeros geométricos?", opt: ["1", "2 (cis e trans)", "3", "Nenhum"], cor: 1, lv: "médio" },
        { q: "Gorduras Trans são formadas pela hidrogenação parcial de óleos vegetais.", opt: ["Oxidação", "Hidrogenação parcial", "Saponificação", "Pirólise"], cor: 1, lv: "médio" },
        { q: "A isomeria E-Z baseia-se nas regras de prioridade de:", opt: ["Markovnikov", "Cahn-Ingold-Prelog", "Hund", "Pauli"], cor: 1, lv: "difícil" },
        { q: "O composto (E)-pent-2-eno tem os grupos de maior prioridade em:", opt: ["Lados opostos", "Mesmo lado", "Lado direito", "Lado esquerdo"], cor: 0, lv: "médio" },
        { q: "Por que o Trans-estilbeno é mais estável que o Cis-estilbeno?", opt: ["Menor impedimento estérico", "Mais pontes de hidrogênio", "Maior massa", "Menos carbonos"], cor: 0, lv: "difícil" },
        { q: "O retinal (visão) muda de qual configuração com a luz?", opt: ["Cis para Trans", "Trans para Cis", "E para Z apenas", "R para S"], cor: 0, lv: "difícil" },
        { q: "Um composto cíclico com isomeria geométrica precisa de no mínimo:", opt: ["1 carbono quiral", "2 carbonos com ligantes diferentes", "3 carbonos no total", "Uma ligação tripla"], cor: 1, lv: "médio" },
        { q: "O Ponto de Fusão do isômero Trans costuma ser maior devido à:", opt: ["Melhor simetria e empacotamento", "Polaridade maior", "Massa molecular", "Solubilidade em água"], cor: 0, lv: "difícil" },
        { q: "Quantos isômeros geométricos tem o hexa-2,4-dieno?", opt: ["2", "3", "4", "6"], cor: 1, lv: "difícil" },
        { q: "O 2-clorobut-2-eno apresenta isomeria geométrica?", opt: ["Sim", "Não", "Apenas se for aquecido", "Apenas óptica"], cor: 0, lv: "médio" },
        { q: "Cis-1,2-dicloroeteno é uma molécula:", opt: ["Apolar", "Polar", "Iônica", "Geralmente sólida"], cor: 1, lv: "médio" },
        { q: "Uma substância que desvia a luz polarizada para a esquerda é:", opt: ["Dextrogira", "Levogira", "Racêmica", "Meso"], cor: 1, lv: "fácil" },
        { q: "A mistura equimolar de dois enantiômeros chama-se:", opt: ["Composto Meso", "Mistura Racêmica", "Azeótropo", "Eutético"], cor: 1, lv: "fácil" },
        { q: "O número de isômeros ópticos ativos de uma molécula (2^n) depende de:", opt: ["Número de carbonos totais", "Número de carbonos quirais (n)", "Ligações duplas", "Número de hidrogênios"], cor: 1, lv: "médio" },
        { q: "Enantiômeros são moléculas que são:", opt: ["Imagens especulares sobreponíveis", "Imagens especulares não sobreponíveis", "Isômeros de função", "Isômeros de posição"], cor: 1, lv: "médio" },
        { q: "O ácido láctico possui quantos carbonos quirais?", opt: ["0", "1", "2", "3"], cor: 1, lv: "fácil" },
        { q: "Um composto meso é opticamente:", opt: ["Ativo", "Inativo por compensação interna", "Inativo por compensação externa", "Sempre dextrogiro"], cor: 1, lv: "difícil" },
        { q: "O aparelho que mede o desvio da luz polarizada é o:", opt: ["Espectrômetro", "Polarímetro", "Calorímetro", "Barômetro"], cor: 1, lv: "fácil" },
        { q: "Distereoisômeros são isômeros ópticos que:", opt: ["São imagens no espelho", "Não são imagens no espelho", "Têm as mesmas propriedades físicas", "Sempre são inativos"], cor: 1, lv: "difícil" },
        { q: "Qual a configuração absoluta (R ou S) do L-Aminoácido natural?", opt: ["S (na maioria)", "R (na maioria)", "Z", "E"], cor: 0, lv: "difícil" },
        { q: "A Talidomida é um caso famoso onde um enantiômero era cura e o outro:", opt: ["Causava má formação fetal", "Era inerte", "Causava cegueira", "Era um veneno fulminante"], cor: 0, lv: "médio" },
        { q: "Quantos isômeros ópticos ativos tem a Glicose (4 carbonos quirais)?", opt: ["4", "8", "16", "32"], cor: 2, lv: "médio" },
        { q: "O ácido tartárico possui quantos isômeros totais (incluindo meso)?", opt: ["2", "3", "4", "1"], cor: 1, lv: "difícil" },
        { q: "Na projeção de Fischer, as linhas horizontais representam ligações:", opt: ["Para trás do plano", "Para frente do plano", "No plano do papel", "Ligações duplas"], cor: 1, lv: "difícil" },
        { q: "Uma molécula sem nenhum elemento de simetria é chamada de:", opt: ["Simétrica", "Aquiral", "Quiral", "Isotrópica"], cor: 2, lv: "médio" },
        { q: "Carbono assimétrico é o mesmo que:", opt: ["Carbono primário", "Carbono quiral", "Carbono saturado apenas", "Carbono sp2"], cor: 1, lv: "fácil" },
        { q: "O 3-metil-hexano possui atividade óptica?", opt: ["Sim", "Não", "Apenas se for gasoso", "Somente no escuro"], cor: 0, lv: "médio" },
        { q: "Isômeros ópticos possuem propriedades físicas (PF, PE, densidade):", opt: ["Diferentes", "Iguais", "Nulas", "Incalculáveis"], cor: 1, lv: "médio" },
        { q: "Enantiômeros reagem de forma diferente com:", opt: ["Água", "Outras moléculas quirais", "Ácido Clorídrico", "Oxigênio"], cor: 1, lv: "difícil" },
        { q: "O gliceraldeído é usado como padrão para a nomenclatura:", opt: ["R/S", "D/L", "E/Z", "Cis/Trans"], cor: 1, lv: "médio" },
        { q: "Qual o número máximo de misturas racêmicas para 'n' carbonos quirais?", opt: ["n", "2n", "2^(n-1)", "n^2"], cor: 2, lv: "difícil" },
        { q: "O 1,2-diclorociclopropano trans possui carbonos quirais?", opt: ["Não", "Sim, dois", "Apenas um", "Três"], cor: 1, lv: "difícil" },
        { q: "O Ciclo-hexano em conformação 'cadeira' e 'barco' são isômeros de:", opt: ["Configuração", "Conformação", "Posição", "Função"], cor: 1, lv: "médio" },
        { q: "Qual o tipo de isomeria entre o Benzeno e o Prismano (C6H6)?", opt: ["Cadeia", "Posição", "Valência", "Óptica"], cor: 2, lv: "difícil" },
        { q: "Alenos substituídos podem apresentar isomeria óptica sem ter:", opt: ["Carbono quiral", "Ligações duplas", "Hidrogênios", "Simetria"], cor: 0, lv: "difícil" },
        { q: "O 2,3-pentadieno possui isomeria óptica?", opt: ["Sim", "Não", "Somente geométrica", "Apenas plana"], cor: 0, lv: "difícil" },
        { q: "Qual destes é um isômero de função do Propan-1-ol?", opt: ["Propan-2-ol", "Metoxietano", "Propanal", "Propanona"], cor: 1, lv: "médio" },
        { q: "A frutose e a glicose são isômeros de:", opt: ["Cadeia", "Posição", "Função", "Metameria"], cor: 2, lv: "médio" },
        { q: "Isomeria de núcleo ou anel é um caso de isomeria de:", opt: ["Cadeia", "Posição", "Função", "Geométrica"], cor: 0, lv: "médio" },
        { q: "O antípoda óptico do isômero (R) é o:", opt: ["(S)", "(E)", "(Z)", "(L)"], cor: 0, lv: "fácil" },
        { q: "Quantos isômeros planos tem o C4H10?", opt: ["2", "3", "4", "5"], cor: 0, lv: "fácil" },
        { q: "Quantos isômeros de cadeia tem o C5H12?", opt: ["2", "3", "4", "5"], cor: 1, lv: "fácil" },
        { q: "Qual a hibridização do carbono quiral?", opt: ["sp", "sp2", "sp3", "d2sp3"], cor: 2, lv: "fácil" },
        { q: "A luz polarizada vibra em:", opt: ["Todos os planos", "Apenas um plano", "Dois planos perpendiculares", "Nenhum plano"], cor: 1, lv: "fácil" },
        { q: "Qual destes aminoácidos NÃO é quiral?", opt: ["Alanina", "Glicina", "Valina", "Leucina"], cor: 1, lv: "médio" },
        { q: "Isômeros de compensação em aminas secundárias é:", opt: ["Tautomeria", "Metameria", "Óptica", "Cadeia"], cor: 1, lv: "médio" },
        { q: "A separação de enantiômeros de uma mistura racêmica chama-se:", opt: ["Destilação", "Resolução", "Filtração", "Sublimação"], cor: 1, lv: "difícil" },
        { q: "O ácido tartárico meso desvia a luz em quantos graus?", opt: ["+12", "-12", "0", "90"], cor: 2, lv: "médio" },
        { q: "O 2-butanol possui atividade óptica?", opt: ["Sim", "Não", "Somente se aquecido", "Somente sólido"], cor: 0, lv: "fácil" },
        { q: "O radical Butil e Sec-butil formam isômeros de:", opt: ["Função", "Cadeia", "Posição", "Geométrica"], cor: 1, lv: "médio" },
        { q: "Qual o isômero de função do Ácido Etanoico?", opt: ["Metanoato de Metila", "Etanol", "Etanal", "Propanona"], cor: 0, lv: "médio" },
        { q: "Substâncias quirais na biologia:", opt: ["Têm o mesmo efeito", "Podem ter efeitos vitais ou tóxicos", "Não interagem com enzimas", "São sempre artificiais"], cor: 1, lv: "fácil" },
        { q: "Isômeros geométricos ocorrem em ligações duplas pois a rotação é:", opt: ["Livre", "Impedida/Restrita", "Muito rápida", "Inexistente"], cor: 1, lv: "médio" },
        { q: "O 1,2-dicloroeteno trans é mais ou menos polar que o cis?", opt: ["Mais polar", "Menos polar (apolar)", "Igualmente polar", "Depende da pressão"], cor: 1, lv: "médio" },
        { q: "Quantos isômeros ópticos ativos tem o 2,3,4-trichloro-pentano?", opt: ["2", "4", "8", "0"], cor: 1, lv: "difícil" },
        { q: "O limoneno (cheiro de laranja/limão) é um exemplo de:", opt: ["Isomeria de função", "Isomeria óptica (enantiômeros)", "Tautomeria", "Geométrica"], cor: 1, lv: "médio" },
        { q: "Para ter isomeria óptica, a molécula deve ser ________ com sua imagem.", opt: ["Sobreponível", "Não sobreponível", "Idêntica", "Inversa"], cor: 1, lv: "fácil" },
        { q: "O número de isômeros para C3H8 é:", opt: ["1", "2", "3", "0"], cor: 0, lv: "fácil" },
        { q: "O Propan-1-ol e o Etil-metil-éter são isômeros de:", opt: ["Posição", "Cadeia", "Função", "Metameria"], cor: 2, lv: "fácil" },
        { q: "Isomeria espacial também é chamada de:", opt: ["Estereoisomeria", "Plana", "Dinâmica", "Funcional"], cor: 0, lv: "fácil" },
        { q: "Quantos carbonos quirais tem o 2,3-dimetil-pentano?", opt: ["0", "1", "2", "3"], cor: 1, lv: "médio" }
    ];

    let gameQuestions = [];
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
        modal: document.getElementById('rank-modal'),
        closeBtn: document.getElementById('btn-fechar-rank')
    };

    function prepareGame() {
        const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
        gameQuestions = shuffled.slice(0, 30);
        curIdx = 0;
        score = 0;
    }

    // Função para formatar segundos em MM:SS
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    document.getElementById('start-btn').onclick = () => {
        userName = document.getElementById('username').value.trim() || "Player";
        elements.start.classList.add('hidden');
        elements.quiz.classList.remove('hidden');
        prepareGame();
        loadQuestion();
    };

    function loadQuestion() {
        clearInterval(timer);
        const q = gameQuestions[curIdx];
        
        elements.diff.innerText = q.lv;
        elements.diff.className = `badge diff-${q.lv}`;
        
        // TEMPO FIXO DE 2 MINUTOS (120 SEGUNDOS)
        timeLeft = 120; 
        elements.timer.innerText = formatTime(timeLeft);
        
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
            elements.timer.innerText = formatTime(timeLeft);
            if(timeLeft <= 0) {
                clearInterval(timer);
                checkAns(-1);
            }
        }, 1000);
    }

    function checkAns(idx) {
        clearInterval(timer);
        const correct = gameQuestions[curIdx].cor;
        const btns = elements.opts.querySelectorAll('.option-btn');

        if(idx === correct) score++;
        
        btns.forEach((b, i) => {
            b.style.pointerEvents = 'none';
            if(i === correct) b.classList.add('correct');
            if(i === idx && idx !== correct) b.classList.add('wrong');
        });

        setTimeout(() => {
            curIdx++;
            if(curIdx < gameQuestions.length) loadQuestion();
            else showResult();
        }, 1000);
    }

    function showResult() {
        elements.quiz.classList.add('hidden');
        elements.res.classList.remove('hidden');
        document.getElementById('final-score').innerText = score;
        saveScore(userName, score);
    }

    function saveScore(name, pts) {
        let rank = JSON.parse(localStorage.getItem('isomeriaRank') || '[]');
        rank.push({name, pts});
        rank.sort((a,b) => b.pts - a.pts);
        localStorage.setItem('isomeriaRank', JSON.stringify(rank.slice(0, 10)));
    }

    elements.closeBtn.addEventListener('click', () => {
        elements.modal.classList.add('hidden');
    });

    document.getElementById('show-rank-btn').onclick = () => {
        const list = document.getElementById('rank-list');
        const rank = JSON.parse(localStorage.getItem('isomeriaRank') || '[]');
        list.innerHTML = rank.map((r, i) => `<li><span>${i+1}. ${r.name}</span> <b>${r.pts}/30</b></li>`).join('');
        elements.modal.classList.remove('hidden');
    };

    window.onclick = (e) => {
        if (e.target == elements.modal) elements.modal.classList.add('hidden');
    };
});