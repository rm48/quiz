const data = [
    {
        question: "Portug -> Assinale a que apresenta o coletivo incorreto",
        options: [
            "a) Abelhas – concílio",
            "b) Lobos – alcateia",
            "c) Chaves – molho",
            "d) Roupas – enxoval",
        ],
        answer: "a",
    },
    {
        question: "Portug -> A alternativa que contém a separação silábica correta da palavra “Papagaio” é:",
        options: [
            "a) Pa-pa-gaio",
            "b) Pa-pa-ga-i",
            "c) Pa-pa-gai-o",
            "d) Pa-pa-ga-i-o",
        ],
        answer: "c",
    },
    {
        question: "Portug -> Apenas uma palavra possui um encontro consonantal, esta palavra é:",
        options: [
            "a) Albatroz",
            "b) Voa",
            "c) Como",
            "d) Avião",
        ],
        answer: "a",
    },
    {
        question: "Portug -> Apresenta um substantivo uniforme, ou seja, aquele que possui apenas uma forma para os dois gêneros, a seguinte alternativa:",
        options: [
            "a) Amigo",
            "b) Cônjuge",
            "c) Doutor",
            "d) Patrão",
        ],
        answer: "b",
    },
    {
        question: "Portug -> As palavras a seguir estão corretas gramaticalmente, exceto:",
        options: [
            "a) Exercer",
            "b) Sucesso",
            "c) Queixar",
            "d) Xinfrim",
        ],
        answer: "d",
    },
    {
        question: "Portug -> Quantas vogais e quantas consoantes apresenta a palavra “Antropocentrismo”?",
        options: [
            "a) 2 vogais e 14 consoantes",
            "b) 4 vogais e 12 consoantes",
            "c) 6 vogais e 10 consoantes",
            "d) 8 vogais e 8 consoantes",
        ],
        answer: "c",
    },
    {
        question: "Portug -> Assinale a palavra grafada incorretamente",
        options: [
            "a) Brilhar",
            "b) Maravilhoso",
            "c) Planeta",
            "d) Calorozos",
        ],
        answer: "d",
    },
    {
        question: "Portug -> Entre as palavras abaixo apenas uma não é um adjetivo, assinale:",
        options: [
            "a) Amoroso",
            "b) Pequeno",
            "c) Aceitar",
            "d) Feliz",
        ],
        answer: "c",
    },
    {
        question: "Portug -> O pronome de tratamento correto para se dirigir a príncipes, princesas e duques é:",
        options: [
            "a) Vossa Excelência",
            "b) Vossa Alteza",
            "c) Vossa Santidade",
            "d) Vossa Magnificência",
        ],
        answer: "b",
    },
    {
        question: "Portug -> Analise as alternativas abaixo, e assinale a única que contém um sinônimo incorreto:",
        options: [
            "a) Antecipado – tardio",
            "b) Trabalho – ofício",
            "c) Diferente – distinto",
            "d) Importância – relevância",
        ],
        answer: "a",
    },
    {
        question: "Mat -> Quando Igor nasceu, seu irmão, Jorge, tinha 12 anos e seu pai 33. Quais serão as idades de Igor e Jorge, respectivamente, quando o pai deles estiver com 62 anos?",
        options: [
            "a) 20 e 32 anos",
            "b) 25 e 37 anos",
            "c) 27 e 39 anos",
            "d) 29 e 41 anos",
        ],
        answer: "d",
    },
    {
        question: "Mat -> Foram contratados 5 professores para realizar a tradução de livros, este processo demorou 12 dias. Considerando a mesma proporção, quanto tempo levaria para traduzir os livros se fossem contratados 30 professores?",
        options: [
            "a) 1 dia",
            "b) 2 dias",
            "c) 4 dias",
            "d) 5 dias",
        ],
        answer: "b",
    },
    {
        question: "Mat -> Em uma ida à feira, Karina comprou meia dúzia de bananas, o triplo de goiabas e 2 dezenas de caquis. A quantidade de frutas compradas por Karina foi:",
        options: [
            "a) 3 bananas, 9 goiabas e 12 caquis",
            "b) 6 bananas, 18 goiabas e 20 caquis",
            "c) 3 bananas, 6 goiabas e 12 caquis",
            "d) 6 bananas, 12 goiabas e 20 caquis",
        ],
        answer: "b",
    },
    {
        question: "Mat -> Todos os dias, Marcos corre 6km durante uma hora e meia. Se Marcos correr durante 2 horas, mantendo o mesmo ritmo, ele correrá:",
        options: [
            "a) 7km",
            "b) 8km",
            "c) 9km",
            "d) 10km",
        ],
        answer: "b",
    },
    {
        question: "Mat -> Carlinhos ganha, todos os meses, R$50,00 de mesada e pretende comprar um par de patins que custa R$150,00. Se ele guardar a metade da mesada por mês, comprará o par de patins em",
        options: [
            "a) 3 meses",
            "b) 4 meses",
            "c) 5 meses",
            "d) 6 meses",
        ],
        answer: "d",
    },
    {
        question: "Gerais -> Quanto à invasão ao Congresso Nacional em janeiro de 2023 é correto afirmar que",
        options: [
            "a) uma das reações após a invasão foi a aprovação da Lei Antiterrorismo",
            "b) aconteceu antes da tomada de posse do presidente Lula",
            "c) estava a decorrer uma sessão solene pela passagem do centenário de falecimento de Rui Barbosa",
            "d) participantes manifestaram-se contra a posse do presidente Lula",
        ],
        answer: "d",
    },
    {
        question: "Gerais -> Qual das alternativas contém os números aproximados de casos e de óbitos de Covid-19, acumulados no Brasil, em 11 de novembro de 2022, de acordo com Nota Técnica do Ministério da Saúde?",
        options: [
            "a) 35 milhões de casos e 106 mil óbitos",
            "b) 35 milhões de casos e 689 mil óbitos",
            "c) 200 milhões de casos e 689 mil óbitos",
            "d) 35 milhões de casos e 410 mil óbitos",
        ],
        answer: "b",
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
        question: "Espec -> Dentre inúmeras doenças provocadas por animais, qual delas é provocada por roedores?",
        options: [
            "a) Dengue",
            "b) Rubéola",
            "c) Hanseníase",
            "d) Leptospirose",
        ],
        answer: "d",
    },
    {
        question: "Espec -> A hanseníase é uma doença infecciosa crônica causada pelo Mycobacterium leprae e acomete pele e nervos periféricos, tornando o seu diagnóstico simples na maioria dos casos. Os principais sintomas estão localizados principalmente nas extremidades das mãos e dos pés, na face, nas orelhas, nas costas, nas nádegas e nas pernas. Qual destes sintomas não está relacionado com a doença?",
        options: [
            "a) Vômito, diarreia e visão turva",
            "b) Manchas esbranquiçadas, avermelhadas ou amarronzadas em qualquer parte do corpo",
            "c) Área da pele com queda de pelos, mais especialmente nas sobrancelhas",
            "d) Área da pele com perda ou ausência de sensibilidade (dormências, diminuição da sensibilidade ao toque, calor ou dor",
        ],
        answer: "a",
    },
    {
        question: "Espec -> Sabemos que a febre amarela é uma doença causada por um vírus chamado flavivírus, encontrado em primatas não humanos que habitam regiões de florestas. Em áreas urbanas, o vetor dessa doença é chamado de:",
        options: [
            "a) Mycobacterium leprae",
            "b) Aedes Aegypti",
            "c) Trypanossoma cruzi",
            "d) Leptospira",
        ],
        answer: "b",
    },
    {
        question: "Espec -> Sobre as arboviroses pode-se afirmar que",
        options: [
            "a) Chikungunya é uma doença causada por vírus RNA pertencente ao gênero Flavivirus",
            "b)  A infecção pela dengue é responsável por graves complicações neurológicas em fetos, recém-nascidos e adultos",
            "c) Seu considerável potencial de cronificação torna o chikungunya um dos vírus reemergentes de maior impacto em termos de saúde pública, sobretudo para regiões de clima subtropical e tropical, como o Brasil",
            "d) A zika é um vírus RNA pertencente ao gênero Alphavirus e à família Togaviridae",
        ],
        answer: "c",
    },
    {
        question: "Espec -> Os grandes problemas de saúde do início do século XXI são essencialmente públicos, como é o caso das moléstias infecciosas transmitidas por vetores. Assinale a alternativa que contém a relação correta doença-vetor",
        options: [
            "a) Malária – mosquito Anopheles",
            "b) Esquistossomose – carrapato",
            "c) Leishmaniose – caramujo Biomphalaria",
            "d) Febre Amarela Silvestre – mosquito Anopheles",
        ],
        answer: "a",
    },
    {
        question: "Espec -> . O mosquito Aedes aegypti é a principal espécie responsável pela transmissão da Dengue. Pode-se afirmar que se trata de um mosquito",
        options: [
            "a) que só é encontrado em baixas altitudes, tem alta resistência à água poluída, mas os ovos possuem capacidade de resistir à dessecação por até 60 dias",
            "b) antropofílico, que também pode ser responsável pela transmissão de outras doenças, tais como: malária, febre amarela silvestre e criptococose",
            "c) que, até se tornar adulto passa por várias etapas de desenvolvimento: ovo, pupa e adulto. E a melhor fase para investir no seu controle é na fase alada",
            "d) antropofílico, com atividade hematofágica diurna e utiliza-se preferencialmente de depósitos artificiais de água limpa para colocar os ovos, que podem se manter viáveis na ausência de água por até 450 dias",
        ],
        answer: "d",
    },
    {
        question: "Espec -> O controle químico da Dengue apresenta-se dividido estrategicamente em três modalidades de controle:",
        options: [
            "a) tratamento focal, perifocal e nebulização",
            "b) desinsetização, desinfecção e esterilizaçã",
            "c) nebulização, fumacê e desinsetização",
            "d) tratamento perifocal, desinsetização e desinfecção",
        ],
        answer: "a",
    },
    {
        question: "Espec -> Não é atribuição específicas do ACS:",
        options: [
            "a) Utilizar instrumentos para a coleta de informações que apoiem no diagnóstico demográfico e sociocultural da comunidade;",
            "b) Registrar, para fins de planejamento e acompanhamento das ações de saúde, os dados de nascimentos, óbitos, doenças e outros agravos à saúde, garantido o sigilo ético;",
            "c) Desenvolver ações que busquem a integração entre a equipe de saúde e a população adscrita à UBS, considerando as características e as finalidades do trabalho de acompanhamento de indivíduos e grupos sociais ou coletividades;",
            "d) Informar os usuários sobre as datas e horários de consultas e exames agendados; administrar medicações endovenosas em domicílio com prescrições médicas;",
        ],
        answer: "d",
    },
    {
        question: "Espec -> Em sua Visita Domiciliar, o Agente Comunitário de Saúde verifica a carteira de vacinação de um recém nascido, esta carteira deve conter as seguintes vacinas:",
        options: [
            "a) Pólio e Pneumocócica 10",
            "b) Pólio e BCG",
            "c) Febre Amarela e SCR",
            "d) BCG e Hepatite B",
        ],
        answer: "d",
    },
    {
        question: "Espec -> As doenças de notificação compulsória são de grande relevância para a saúde pública. Seu controle deve ser feito de forma integrada com os serviços de vigilância em saúde, pois representam riscos epidemiológicos. Dentre as seguintes doenças de notificação compulsória, assinale a que NÃO apresenta controle vacinal:",
        options: [
            "a) Sarampo",
            "b) Meningite",
            "c) Dengue",
            "d) Tuberculose",
        ],
        answer: "c",
    },
    {
        question: "Espec -> Indique a alternativa CORRETA para atribuição específica dos Agentes Comunitários de Saúde:",
        options: [
            "a) Responsabilizar-se pela população adscrita, mantendo a coordenação do cuidado mesmo quando esta necessita de atenção em outros serviços do sistema de saúde.",
            "b) Cadastrar todas as pessoas de sua micro área e manter os cadastros atualizados.",
            "c) Realizar busca ativa e notificação de doenças e agravos de notificação compulsória e de outros agravos e situações de importância local.",
            "d) Promover a mobilização e a participação da comunidade, buscando efetivar o controle social.",
        ],
        answer: "b",
    },
    {
        question: "Espec -> Indique CORRETAMENTE as vacinas que devem ser dadas aos 2 meses de idade:",
        options: [
            "a) BCG-ID dose única e vacina contra hepatite B.",
            "b) Vacina contra febre amarela dose inicial e SRC (tríplice Sarampo, rubéola e caxumba) dose inicial.",
            "c) DPT (difteria, tétano e coqueluche); SRC (sarampo, rubéola e caxumba) e vacina contra febre amarela.",
            "d) Vacina oral de rotavírus humano 1ª dose; vacina oral contra pólio 1ª dose e vacina Tetravalente (difteria, tétano, coqueluche, meningite e outras infecções causadas por Haemophilus influenza tipo b) 1ªdose.",
        ],
        answer: "d",
    },
    {
        question: "Espec -> Uma das atividades típicas do Agente Comunitário de Saúde é em relação à criança e ao adolescente, sendo que para o ECA (Estatuto da criança e do adolescente Lei nº 8.069, de 13 de julho de 1990) criança e adolescente compreendem, respectivamente:",
        options: [
            "a) a pessoa até onze anos de idade incompletos, e adolescente aquela entre onze e dezoito anos de idade.",
            "b) a pessoa até doze anos de idade completos, e adolescente aquela entre doze e dezoito anos de idade incompletos.",
            "c) a pessoa até doze anos de idade incompletos, e adolescente aquela entre doze e dezoito anos de idade.",
            "d) a pessoa até onze anos de idade incompletos, e adolescente aquela entre onze e dezoito anos de idade incompletos.",
        ],
        answer: "c",
    },
    {
        question: "Espec -> Conforme o ECA (Estatuto da criança e do adolescente Lei nº 8.069, de 13 de julho de 1990), relativo aos casos de suspeita ou confirmação de castigo físico, de tratamento cruel ou degradante e de maus-tratos contra criança ou adolescente é CORRETO afirmar:",
        options: [
            "a) Serão obrigatoriamente comunicados à polícia civil do local para tomadas das providências.",
            "b) Serão obrigatoriamente comunicados ao Conselho Tutelar da respectiva localidade, sem prejuízo de outras providências legais.",
            "c) Serão obrigatoriamente comunicados aos familiares da vítima.",
            "d) Serão obrigatoriamente notificados aos sistemas de informação do SUS.",
        ],
        answer: "b",
    },
    {
        question: "Espec -> O direito assegurado pelo ECA de opinião e expressão; crença e culto religioso; brincar, praticar esportes e divertir-se; participar da vida familiar e comunitária, sem discriminação; diz CORRETAMENTE ao direito da:",
        options: [
            "a) Saúde.",
            "b) Educação.",
            "c) Cidadania.",
            "d) Liberdade.",
        ],
        answer: "d",
    },
];

export default data;
