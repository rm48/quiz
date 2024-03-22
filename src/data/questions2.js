const data = [
    {
        question: "Portug -> Há erro no emprego de pronome em:",
        options: [
            "a) Isto é para eu levar",
            "b) b) Nada restou entre você e eu.",
            "c) Para mim, fazer o exercício é um prazer.",
            "d) Para eu fazer o exercício, é necessário silêncio.",
        ],
        answer: "b",
    },
    {
        question: "Portug -> Assinale o erro no emprego de pronomes.",
        options: [
            "a) Vossa Excelência, o senador, estará presente no congresso.",
            "b) Tentaram falar com nós próprios.",
            "c) Cada um sabe de si.",
            "d) Carlos e Maria estavam na reunião. Aquele ficou calado o tempo todo; esta não parava de falar.",
        ],
        answer: "a",
    },
    {
        question: "Portug -> Marque o erro na substituição do termo destacado por pronome oblíquo.",
        options: [
            "a) Quis os resultados. ->Qui-los.",
            "b) Tens a casa. -> Tem-la.",
            "c) Comprei os doces. -> Comprei-los.",
            "d) Estudaram a situação. ->Estudaram-na.",
        ],
        answer: "c",
    },
    {
        question: "Portug -> Marque o erro no emprego do pronome.",
        options: [
            "a) Sempre estaremos com vós todos.",
            "b) Este livro em sua mão é bom?",
            "c) Aqui está o vizinho cujo filho foi para a Itália.",
            "d) Após mim, ninguém poderá entrar.",
        ],
        answer: "b",
    },
    {
        question: "Portug -> Houve troca no emprego de o e lhe na seguinte sentença:",
        options: [
            "a) Àquele tio, sempre lhe deu atenção especial.",
            "b) Esse escritor, sempre o vi nos congressos.",
            "c) Nunca o faria qualquer mal.",
            "d) Nunca o esconderia, mesmo se pudesse.",
        ],
        answer: "c",
    },
    {
        question: "Portug -> Há erro de conjugação verbal em:",
        options: [
            "a) Medeia a reunião",
            "b) A polícia interveio na briga.",
            "c) Se você supuser que o seu plano dará certo, nós executá-lo-emos.",
            "d) Quando eu te ver, vou te dar um abraço apertado!",
        ],
        answer: "d",
    },
    {
        question: "Portug -> Há erro de conjugação verbal em:",
        options: [
            "a) Foi impresso",
            "b) Tinha imprimido",
            "c) Tinha impresso",
            "d) Tinha chegado",
        ],
        answer: "c",
    },
    {
        question: "Portug -> A conjugação verbal está correta em:",
        options: [
            "a) Se eu fosse você eu comprava aquela gravata.",
            "b) O móvel não se adequa à sala.",
            "c) Quando você pôr os pingos nos is.",
            "d) Elas previram que ele viria.",
        ],
        answer: "d",
    },
    {
        question: "Portug -> A colocação pronominal está correta em:",
        options: [
            "a) Deixa eu escrever.",
            "b) Nada mais há entre mim e você.",
            "c) Não era minha intenção te machucar.",
            "d) Agora negam-se a depor",
        ],
        answer: "b",
    },
    {
        question: "Portug -> Está correta:",
        options: [
            "a) Irei ao evento afim de praticar o networking",
            "b) A sua ideia vem de encontro ao que a empresa precisa neste momento.",
            "c) Ao invés de comprar carros, compraremos caminhões para aumentar a frota.",
            "d) A prosperidade é iminente.",
        ],
        answer: "d",
    },
    {
        question: "Mat -> Numa ilha há apenas dois tipos de pessoas: as que sempre falam a verdade e as que sempre mentem. Um explorador contrata um ilhéu chamado X para servir-lhe de intérprete. Ambos encontram outro ilhéu, chamado Y, e o explorador lhe pergunta se ele fala a verdade. Ele responde na sua língua e o intérprete diz - Ele disse que sim, mas ele pertence ao grupo dos mentirosos. Dessa situação é correto concluir que",
        options: [
            "a) Y fala a verdade.",
            "b) ambos falam a verdade.",
            "c) ambos mentem.",
            "d) X fala a verdade.",
        ],
        answer: "d",
    },
    {
        question: "Mat -> Sabe-se que existe pelo menos um A que é B. Sabe-se, também, que todo B é C. Segue-se, portanto, necessariamente que",
        options: [
            "a) todo C é B",
            "b) todo C é A",
            "c) algum A é C",
            "d) nada que não seja C é A",
        ],
        answer: "c",
    },
    {
        question: "Mat -> Considere as seguintes premissas (onde X, Y, Z e P são conjuntos não vazios): Premissa 1: “X está contido em Y e em Z, ou X está contido em P”;  Premissa 2: “X não está contido em P”;  Pode-se, então, concluir que, necessariamente",
        options: [
            "a) Y está contido em Z",
            "b) X está contido em Z",
            "c) Y está contido em Z ou em P",
            "d) X não está contido nem em P nem em Y",
        ],
        answer: "b",
    },
    {
        question: "Mat -> Chama-se tautologia a toda proposição que é sempre verdadeira, independentemente da verdade dos termos que a compõem. Um exemplo de tautologia é:",
        options: [
            "a) se João é alto, então João é alto ou Guilherme é gordo",
            "b) se João é alto, então João é alto e Guilherme é gordo",
            "c) se João é alto ou Guilherme é gordo, então Guilherme é gordo",
            "d) se João é alto ou Guilherme é gordo, então João é alto e Guilherme é gordo",
        ],
        answer: "a",
    },
    {
        question: "Mat -> Sabe-se que a ocorrência de B é condição necessária para a ocorrência de C e condição suficiente para a ocorrência de D. Sabe-se, também, que a ocorrência de D é condição necessária e suficiente para a ocorrência de A. Assim, quando C ocorre, ",
        options: [
            "a) D ocorre e B não ocorre",
            "b) D não ocorre ou A não ocorre",
            "c) B e A ocorrem",
            "d) nem B nem D ocorrem",
        ],
        answer: "c",
    },
    {
        question: "Mat -> Se Frederico é francês, então Alberto não é alemão. Ou Alberto é alemão, ou Egídio é  espanhol. Se Pedro não é português, então Frederico é francês. Ora, nem Egídio é espanhol nem Isaura é italiana. Logo:",
        options: [
            "a) Pedro é português e Frederico é francês",
            "b) Pedro é português e Alberto é alemão",
            "c) Pedro não é português e Alberto é alemão",
            "d) Egídio é espanhol ou Frederico é francês",
        ],
        answer: "b",
    },
    {
        question: "Mat -> Se Luís estuda História, então Pedro estuda Matemática. Se Helena estuda Filosofia, então Jorge estuda Medicina. Ora, Luís estuda História ou Helena estuda Filosofia. Logo, segue-se necessariamente que:",
        options: [
            "a) Pedro estuda Matemática ou Jorge estuda Medicina",
            "b) Pedro estuda Matemática e Jorge estuda Medicina",
            "c) Se Luís não estuda História, então Jorge não estuda Medicina",
            "d) Helena estuda Filosofia e Pedro estuda Matemática",
        ],
        answer: "a",
    },
    {
        question: "Gerais -> Quais os países que mais têm recebido refugiados ucranianos?",
        options: [
            "a) Polônia e República Tcheca",
            "b) Bulgária e Eslováquia",
            "c) Polônia e Eslováquia",
            "d) República Tcheca e Bulgária",
        ],
        answer: "a",
    },
    {
        question: "Gerais -> Xi Jinping, Emmanuel Macron e Volodymyr Zelensky são, respectivamente, os governantes de quais países?",
        options: [
            "a) Japão, França e Rússia",
            "b) Coreia do Norte, Alemanha e Ucrânia",
            "c) China, França e Ucrânia",
            "d) Taiwan, Bélgica e Rússia",
        ],
        answer: "c",
    },
    {
        question: "Gerais -> Qual o nome do líder da Coreia do Norte?",
        options: [
            "a) Pak Pong-ju",
            "b) Kim Jong-un",
            "c) Kim Jong-Il",
            "d) Moon Jae-in",
        ],
        answer: "b",
    },
    {
        question: "Saúde -> Lei nº 8.142 de 1990 - __________________reunir-se-á a cada quatro anos com a representação dos vários segmentos sociais, para avaliar a situação de saúde e propor as diretrizes para a formulação da política de saúde nos níveis correspondentes, convocada pelo Poder Executivo ou, extraordinariamente, por esta ou pelo Conselho de Saúde.",
        options: [
            "a) A Conferência de Saúde",
            "b) O Conselho de Saúde",
            "c) O Conselho Nacional de Secretários de Saúde (Conass)",
            "d) O Ministério da Saúde",
        ],
        answer: "a",
    },
    {
        question: "Saúde -> Das responsabilidades na Política Nacional de Atenção Básica, compete às secretarias municipais de saúde e ao distrito federal, EXCETO",
        options: [
            "a) Ser corresponsável, junto ao Ministério da Saúde e Secretaria Estadual de Saúde, pelo monitoramento da utilização dos recursos da atenção básica transferidos aos municípios;",
            "b) Inserir a Estratégia Saúde da Família em sua rede de serviços como tática prioritária de organização da atenção básica;",
            "c) Definir, de forma tripartite, estratégias de articulação com as gestões estaduais e municipais do SUS, com vistas à institucionalização da avaliação e qualificação da atenção básica;",
            "d) Organizar, executar e gerenciar os serviços e ações de atenção básica, de forma universal, dentro do seu território, incluindo as unidades próprias e as cedidas pelo Estado e pela União;",
        ],
        answer: "c",
    },
    {
        question: "Saúde -> Assinale a alternativa que completa corretamente a lacuna do seguinte texto: A Atenção Básica caracteriza-se por um conjunto de ações de saúde,_____________________,que abrangem a promoção e a proteção da saúde, a prevenção de agravos, o diagnóstico, o tratamento, a reabilitação e a manutenção da saúde.",
        options: [
            "a) coordenadas pelo Ministério da Saúde",
            "b) em cada estado",
            "c) no âmbito individual e coletivo",
            "d) de responsabilidade dos municípios",
        ],
        answer: "c",
    },
    {
        question: "Saúde -> A Lei nº 8.080, de 19 de setembro de 1990, Capítulo II versa sobre princípios do SUS – Sistema Único de Saúde, que garantem o acesso e a qualidade do atendimento prestado. Quando em um atendimento se deixa de realizar as ações e serviços preventivos e curativos, individuais e coletivos, exigidos para cada caso em todos os níveis de complexidade do sistema, qual princípio do SUS está sendo desrespeitado?",
        options: [
            "a) Integralidade",
            "b) Universalidade",
            "c) Participação Popular",
            "d) Regionalização",
        ],
        answer: "a",
    },
    {
        question: "Saúde -> A Secretaria Municipal de Saúde do Município de Cachoeira Paulista, em concordância à Lei nº 8142, de 28 de dezembro de 1990, que, dentre outras providências, dispõe sobre a participação da comunidade na gestão do Sistema Único de Saúde (SUS) e sobre as transferências intergovernamentais de recursos financeiros na área da saúde, organizará no próximo ano uma Conferência de Saúde, e antecipadamente solicita que as Equipes de Saúde das Unidades Básicas organizem uma reunião com os moradores da área de abrangência dessa unidade para discussão de propostas para a saúde. Assinale a alternativa CORRETA, que se refere à definição de Conferência de Saúde de acordo com a Lei nº 8142/90:",
        options: [
            "a) Instância que delibera como os recursos públicos da saúde serão alocados, considerando as despesas de custeio e de capital, do Ministério da Saúde, de seus órgãos e entidades, e da administração direta e indireta.",
            "b) Grupo variável que reunir-se-á a cada quatro anos com a representação dos vários segmentos sociais, para avaliar a situação de saúde e propor as diretrizes para a formulação da política de saúde nos níveis correspondentes, convocada pelo Poder Executivo ou, extraordinariamente, por esta ou pelo Conselho de Saúde.",
            "c) Consórcio para execução de ações e serviços de saúde estabelecidos pelos municípios remanejando, entre si, parcelas de recursos previstos no inciso IV do art. 2° da lei nº 8.142/90.",
            "d) Órgão colegiado composto por representantes do governo, prestadores de serviço, profissionais de saúde e usuários, atua na formulação de estratégias e no controle da execução da política de saúde na instância correspondente, inclusive nos aspectos econômicos e financeiros, cujas decisões serão homologadas pelo chefe do poder legalmente constituído em cada esfera do governo.",
        ],
        answer: "b",
    },
    {
        question: "Espec -> São finalidades da auditoria do SUS, exceto:",
        options: [
            "a) Aferir a observância dos padrões estabelecidos de qualidade, quantidade, custos e gastos da atenção à saúde;",
            "b) Avaliar familiaridade com as normas e a legislação aplicáveis, entendimento das operações da entidade auditada e habilidade e experiência para exercer julgamento profissional;",
            "c) Avaliar a qualidade, a propriedade e a efetividade dos serviços de saúde prestados à população;",
            "d) Produzir informações para subsidiar o planejamento das ações que contribuam para o aperfeiçoamento do SUS;",
        ],
        answer: "b",
    },
    {
        question: "Espec -> Questões de auditoria podem ser de quatro tipos. Qual a definição de Questões avaliativas (ou de impacto)?",
        options: [
            "a) São formuladas de maneira a descrever condições de implementação ou de operação de um programa ou atividade, mudanças ocorridas, problemas e áreas com potencial de aperfeiçoamento",
            "b) tratam de comparações entre a situação existente e aquela estabelecida em norma, padrão ou meta, tanto de caráter qualitativo quanto quantitativo.",
            "c) referem-se à efetividade do objeto de auditoria e buscam saber que diferença fez a intervenção governamental para a solução do problema identificado.",
            "d) voltadas a revelar as razões de ocorrência de um determinado resultado.",
        ],
        answer: "c",
    },
    {
        question: "Espec -> Questões de auditoria podem ser de quatro tipos. Qual a definição de Questões normativas?",
        options: [
            "a) São formuladas de maneira a descrever condições de implementação ou de operação de um programa ou atividade, mudanças ocorridas, problemas e áreas com potencial de aperfeiçoamento",
            "b) tratam de comparações entre a situação existente e aquela estabelecida em norma, padrão ou meta, tanto de caráter qualitativo quanto quantitativo.",
            "c) referem-se à efetividade do objeto de auditoria e buscam saber que diferença fez a intervenção governamental para a solução do problema identificado.",
            "d) voltadas a revelar as razões de ocorrência de um determinado resultado.",
        ],
        answer: "b",
    },
    {
        question: "Espec -> PORTARIA Nº 2.979 - > Quantitativo potencial de pessoas cadastradas por equipe - de acordo com a classificação geográfica do município (IBGE)",
        options: [
            "a) Urbano -> 5.000, modalidade I -20h: 2.000, modalidade II - 30 h: 3.000",
            "b) Adjacente -> 2.750, modalidade I -20h: 1.375, modalidade II - 30 h: 2.063",
            "c) Intermediário -> 2.000, modalidade I -20h: 1.000, modalidade II - 30 h: 1.500",
            "d) Rural -> 2.000, modalidade I -20h: 1.000, modalidade II - 30 h: 1.500",
        ],
        answer: "b",
    },
    {
        question: "Espec -> PORTARIA Nº 2.979 - > A nova forma de financiamento, pelo Ministério da Saúde, das ações da Atenção Primária em Saúde desenvolvidas nos municípios é denominada de Programa:",
        options: [
            "a) Nacional de Atenção Básica.",
            "b) Previne Brasil.",
            "c) Saúde da Família",
            "d) Avança Brasil",
        ],
        answer: "a",
    },
    {
        question: "Espec -> PORTARIA Nº 2.979 - > Assinale a alternativa incorreta.",
        options: [
            "a) Os recursos do financiamento federal serão transferidos na modalidade fundo a fundo, de forma regular e automática aos entes e repassados pelo Bloco de Custeio das Ações e Serviços Públicos de Saúde.",
            "b) O cálculo da Capitação Ponderada deve considerar a população adscrita para equipe de Saúde da Família, o índice de vulnerabilidade e o perfil demográfico da área.",
            "c) O peso do valor de repasse por pessoa será: 1,3 (um inteiro e três décimos) para as pessoas que atendam aos critérios de vulnerabilidade socioeconômica ou perfil demográfico; de 1 (um inteiro) para as pessoas que não se enquadrem o inciso I do caput; e de 1 (um inteiro), 1,45 (um inteiro e quarenta e cinco décimos) ou 2 (dois inteiros), de acordo com a classificação geográfica do município ou Distrito Federal, observada a tipologia rural- urbana definida pelo IBGE.",
            "d) O Pagamento por Desempenho será efetuado considerando os resultados de indicadores alcançados pelas equipes credenciadas e cadastradas no SCNES.",
        ],
        answer: "b",
    },
    {
        question: "Espec -> PORTARIA Nº 2.979 - > Assinale a alternativa incorreta.",
        options: [
            "a) O financiamento federal de custeio da Atenção Primária à Saúde (APS) será constituído por: capitação ponderada, pagamento por desempenho e incentivo para ações estratégicas e incentivo financeiro com base em critério populacional.",
            "b) O critério de perfil demográfico por faixa etária contempla pessoas cadastradas com idade até 5 (cinco) anos e com 65 (sessenta e cinco) anos ou mais.",
            "c) O cálculo do incentivo financeiro do pagamento por desempenho será efetuado considerando os resultados de indicadores alcançados pelas equipes credenciadas e cadastradas no Sistema de Cadastro Nacional de Estabelecimentos de Saúde.",
            "d) Para fins de Suspensão da Transferência dos Incentivos Financeiros será considerada a ausência de envio de informação da produção de indicadores por cada equipe credenciada e cadastrada no SCNES, pelo Sistema de Informação Nacional do SUS.",
        ],
        answer: "d",
    },
    {
        question: "Espec -> LEI Nº 8.142: Art. 2° Os recursos do Fundo Nacional de Saúde (FNS) serão alocados como: (EXCETO)",
        options: [
            "a) I - despesas de custeio e de capital do Ministério da Saúde, seus órgãos e entidades, da administração direta e indireta;",
            "b) II - investimentos previstos em lei orçamentária, de iniciativa do Congresso Nacional e aprovados pelo Poder Legislativo;",
            "c) III - investimentos previstos no Plano Qüinqüenal do Ministério da Saúde;",
            "d) IV - cobertura das ações e serviços de saúde a serem implementados pelos Municípios, Estados e Distrito Federal.",
        ],
        answer: "b",
    },
    {
        question: "Espec -> LEI Nº 8.142: Art. 2° Os recursos do Fundo Nacional de Saúde (FNS) serão alocados como: (EXCETO)",
        options: [
            "a) I - despesas de custeio e de capital do Ministério da Saúde, seus órgãos e entidades, da administração direta e indireta;",
            "b) II - investimentos previstos em lei orçamentária, de iniciativa do Poder Legislativo e aprovados pelo Congresso Nacional;",
            "c) III - investimentos previstos no Plano Qüinqüenal do Ministério da Saúde;",
            "d) IV - cobertura das ações e serviços de saúde a serem implementados pelos Municípios.",
        ],
        answer: "d",
    },
    {
        question: "Saúde -> Visa ao conhecimento e à detecção ou prevenção de qualquer mudança nos fatores determinantes e condicionantes do ambiente que interfiram na saúde humana.",
        options: [
            "a) Vigilância em saúde do trabalhador",
            "b) Vigilância epidemiológica",
            "c) Vigilância sanitária",
            "d) Vigilância em saúde ambiental",
        ],
        answer: "d",
    },
    {
        question: "Saúde -> É um conjunto de ações que proporciona o conhecimento, a detecção ou prevenção de qualquer mudança nos fatores determinantes e condicionantes da saúde individual ou coletiva, com a finalidade de se recomendar e adotar as medidas de prevenção e controle das doenças ou agravos.  ",
        options: [
            "a) Vigilância sanitária",
            "b) Vigilância epidemiológica",
            "c) Vigilância em saúde ambiental",
            "d) Vigilância em saúde do trabalhador",
        ],
        answer: "b",
    },
    {
        question: "Saúde -> Constitui o primeiro contato de indivíduos, famílias e comunidades com o sistema de atenção à saúde, trazendo os serviços de saúde para mais próximo dos lugares de vida e trabalho das pessoas, e constitui-se como o primeiro elemento de um processo contínuo de atenção. O conceito acima refere-se à definição de",
        options: [
            "a) Rede de Gestão da Saúde.",
            "b) Sistema Integrado de Saúde",
            "c) Coordenação Especial de Saúde",
            "d) Atenção Primária à Saúde",
        ],
        answer: "d",
    },
    {
        question: "Saúde -> A Atenção Básica é tida como ___________ preferencial do Sistema Único de Saúde. Neste contexto, é necessário que a Atenção Básica tenha alta ___________, tendo capacidade clínica, de cuidado e de ___________ com outros pontos da Rede de Atenção em Saúde (RAS).",
        options: [
            "a) Prioridade - velocidade - transferência",
            "b) Porta de entrada - velocidade - articulação",
            "c) Porta de entrada - resolutividade - articulação",
            "d) Alternativa - resolutividade - articulação",
        ],
        answer: "c",
    },
    {
        question: "Saúde -> As ações e serviços públicos de saúde e os serviços privados contratados ou conveniados que integram o Sistema Único de Saúde (SUS), são desenvolvidos de acordo com as diretrizes previstas no Art.198 da Constituição Federal, obedecendo ainda a alguns princípios. Dentre eles, aquele que visa oportunizar o acesso dos cidadãos aos serviços de saúde em todos os níveis de assistência é o princípio da",
        options: [
            "a) Autonomia",
            "b) Universalidade",
            "c) Igualdade",
            "d) Integralidade",
        ],
        answer: "b",
    },
    {
        question: "Espec -> Entende-se por Vigilância Epidemiológica:",
        options: [
            "a) O conjunto de ações que proporcionam a fácil identificação de doenças transmissíveis e que podem se tornar endemias.",
            "b) O conjunto de ações que proporcionam a fácil identificação de doenças transmissíveis e que podem se tornar epidemias.",
            "c) O conjunto de ações que proporcionam o conhecimento, a detecção ou prevenção de qualquer mudança nos fatores determinantes condicionantes da saúde individual e coletiva, com a finalidade de adotar ou recomendar medidas de prevenção e controle das doenças.",
            "d) O conjunto de ações que proporcionam a fácil identificação de doenças a fim de preparar um programa de vacinação em massa da população.",
        ],
        answer: "c",
    },
];

export default data;
