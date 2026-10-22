// Conteúdo do painel. É o único arquivo que muda a cada avanço do trabalho.
// Fonte da verdade: as fichas em .claude/docs/fichas/ do repositório privado Selo_WWC.
// Nada de nomes de servidores, e-mails ou telefones aqui: o painel é público (publicar.ps1 verifica).
// Relatório de aderência, por critério (opcional): relatorio: { status: 'rascunho' | 'final', url, pendencias, atualizado: 'AAAA-MM-DD' }.
// Sem url, o botão aparece desativado. O documento em si nunca entra neste repositório: só o link.
// Resposta para a plataforma (começa quando a classificação chega a 'atende' ou 'juntando'):
//   resposta: { marcar: 'Sim' | 'Em andamento' | 'Não',
//     blocos: [{ sub: 'DM1.1', status: 'a_redigir' | 'rascunho' | 'redigido' | 'validado', texto, falta: [], ideias: [] }],
//     evidencias: [{ titulo, sub, status: 'a_obter' | 'a_criar' | 'em_revisao' | 'pronta', link }] }
//   No texto, marcar o que falta como [PENDENTE: descrição]; o painel destaca.

const LEIS = 'https://leis.org/prefeitura/sp/sao-bernardo-do-campo/lei/';
const NM2676 = 'https://www.saobernardo.sp.gov.br/documents/10181/2361282/NM+2676+de+07.08.2026+-+Conteu%CC%81do+Integral.pdf/11eeb475-0287-4c05-e8e2-aea4d61e05fc#page=16';

window.PAINEL = {
  atualizado: '2026-10-22',
  prazos: { envio: '2026-12-18', interno: '1ª semana de dezembro de 2026' },

  areas: [
    { id: 'DM', nome: 'Gestão de dados' },
    { id: 'OD', nome: 'Dados abertos' },
    { id: 'CI', nome: 'Impacto na comunidade' }
  ],

  contexto: [
    'A certificação tem três níveis, pela parte dos 43 critérios atendida: Prata, o nível mínimo, a partir de 51% (22 critérios); Ouro, a partir de 68% (30); Platina, a partir de 85% (37).',
    'Em qualquer nível, os três critérios essenciais são obrigatórios: DM1, LC1 e PA1. Na Platina, o DM8 também. Além disso, a cidade apresenta o Modelo de Resultados para Moradores: escolhe uma prioridade e mostra como os dados identificaram o problema e a solução e acompanham o progresso. A exigência cresce no Ouro e na Platina.',
    'Este painel cobre os 16 critérios de Gestão de dados (DM), Dados abertos (OD) e Impacto na comunidade (CI). Os outros 27 estão com outros membros da equipe.',
    'Nada é inserido na plataforma antes da validação da equipe. A inserção é feita pela equipe.'
  ],

  historico: [
    { data: '2026-10-22', texto: 'OD1: lidos o glossário da plataforma e o Fórum da WWC. O glossário define "codificar" como "sistematizar políticas": a WWC exige política escrita, não necessariamente lei ou decreto (corrigida a justificativa). Um texto da WWC de jan/2026 recomenda que o mesmo órgão de governança cuide do DM1 e do OD1: na minuta, a pauta de dados abertos do CGPD passa a ser trimestral.' },
    { data: '2026-10-22', texto: 'OD1: todas as leituras pendentes concluídas e aplicadas à minuta, que passa a 23 artigos. Citações legais conferidas no texto das leis; achada a Indicação nº 14.825/2025 da Câmara, que já pediu a política; a rede de representantes da Controladoria entra como opção para os coordenadores; entram uma cláusula de dados abertos nos contratos novos, download em lote e API, convite à sociedade civil nas reuniões e o cuidado com o cruzamento de bases. Modelos novos: Teresópolis e Osasco, que mostram precedentes brasileiros de escuta pública e relatório anual.' },
    { data: '2026-10-22', texto: 'DM1 e OD1: as recomendações sobre instrumento, colegiado e coordenação passam a ser indicações técnicas, porque a decisão cabe ao município (DTI e Procuradoria). Os cartões do DM1 e do OD1 ganharam um botão no topo para abrir a proposta de texto de cada um.' },
    { data: '2026-10-22', texto: 'OD1: publicada a minuta de decreto da Política Municipal de Dados Abertos, em rascunho, como indicação técnica (a decisão é do município). São 22 artigos e um anexo, cada um com por quê, intenção, de qual modelo veio e qual subcritério atende; os quatro subcritérios estão cobertos. Os pontos de escolha (colegiado, coordenação e data do relatório) estão marcados. Novo pedido à equipe: os temas dos documentos que o DTI vai encaminhar à Procuradoria, para cotejo.' },
    { data: '2026-10-22', texto: 'OD1: lidos por inteiro os decretos de dados abertos federal (8.777/2016), de Porto Alegre, Fortaleza, Caruaru e Aracruz. Aracruz (jul/2026) é o modelo brasileiro mais completo; Caruaru mostra que regulamentar a Lei 14.129 não basta; nenhum tem escuta pública regular, que virá do modelo de Baton Rouge. Faltam 3 escolhas (colegiado, coordenação e data do relatório anual) para redigir a minuta.' },
    { data: '2026-10-22', texto: 'OD1: a ficha ganhou a seção "Por que é preciso um ato normativo", com o que SBC já tem em cada subcritério e por que não basta. Incluída a opção D na decisão do instrumento (capítulo novo no decreto da LAI); a recomendação continua sendo um decreto próprio.' },
    { data: '2026-10-22', texto: 'OD3: ficha em rascunho. O portal tem bases abertas de verdade (contratos e obras em CSV, finanças em XLS, emendas em XLSX e 13 camadas de mapa no GeoPortal com dicionário de dados). Faltam dados por bairro e por grupo da população em formato aberto (o Perfil Socioeconômico por Bairro existe, mas só em PDF), contato, licença e links da página de Dados Abertos para os outros sites. O "Sim" pré-preenchido na plataforma precisa virar "Em andamento".' },
    { data: '2026-10-22', texto: 'OD1: ficha em rascunho. SBC não tem política de dados abertos; o decreto da Lei de Acesso à Informação (18.882/2014) ajuda só em parte. Recomendação: um decreto curto da Política Municipal de Dados Abertos, que também adote o capítulo de abertura de dados da Lei 14.129/2021. Decisão sobre o instrumento em aberto e 4 pedidos à equipe.' },
    { data: '2026-10-22', texto: 'Corrigido o link da publicação oficial da Portaria 10.510/2026 (Notícias do Município nº 2676), que estava quebrado.' },
    { data: '2026-10-21', texto: 'DM1: a proposta de ajustes ao decreto do SBC+i ganhou página própria no painel. Os trechos criados e alterados estão destacados, cada um com o porquê, a intenção e a relação com a WWC, e há filtros para ver só as mudanças ou só um subcritério. Links no item do Programa SBC+i e na decisão do DM1.' },
    { data: '2026-10-21', texto: 'DM1: redigida a proposta de ajustes à minuta do decreto do SBC+i. Ela inclui competências de governança de dados para o GT, reunião no mínimo trimestral com ata em processo próprio, objetivos e plano de governança de dados, princípios de uso ético (inclusive IA) e relatório anual público. Também lembra que o GT já existe e pode começar a se reunir com ata antes do decreto.' },
    { data: '2026-10-21', texto: 'DM1: o painel passa a mostrar o projeto de lei e a minuta de decreto do Programa SBC+i (processo SB 100144/2026). A reescrita do art. 5º do decreto, pedida pela Procuradoria, é a chance de incluir reunião trimestral com ata e princípios de uso ético de dados.' },
    { data: '2026-10-21', texto: 'DM1: lidos o termo de referência do PDTIC 2026–2029 (sem estratégia de dados), o processo do GT Cidade Inteligente (sem atas), a Lei 6.243/2012, o Decreto 21.620/2021 e os decretos de LGPD de São Paulo, Santo André, São José dos Campos, Porto Alegre e Campinas. Nenhum desses decretos fixa periodicidade de reunião: o DM1.2 terá de vir do ato de São Bernardo.' },
    { data: '2026-10-21', texto: 'Varredura das 206 edições do Notícias do Município de 2025 e 2026. DM1: localizada a Portaria 10.500/2026 (GT Cidade Inteligente, só com a composição) e o contrato do PDTIC 2026–2029.' },
    { data: '2026-10-21', texto: 'DM1: os 8 membros do CGPD foram nomeados pela Portaria 10.510/2026 (Notícias do Município nº 2676). O DM1.2 passa de "não tem" para "tem, mas incompleto": faltam as atas das reuniões.' },
    { data: '2026-10-21', texto: 'DM1: localizada a Portaria 10.364/2025, que designa a Encarregada de Proteção de Dados (Notícias do Município nº 2529). Falta a portaria dos representantes das secretarias no CGPD.' },
    { data: '2026-10-21', texto: 'Cada critério ganhou a seção "Resposta para a plataforma": resposta a marcar, texto por subcritério com pendências destacadas, o que falta fechar, ideias para discutir e evidências a anexar. A seção abre quando a ficha chega a "atende" ou "atende juntando documentos".' },
    { data: '2026-10-21', texto: 'Cada critério ganhou o atalho para o seu relatório de aderência. Fica desativado até o relatório existir.' },
    { data: '2026-10-21', texto: 'Documentos e etapas do plano só são marcados como concluídos depois de estudados, analisados e validados. Receber um documento passa a ser um estágio intermediário ("Recebido, em análise").' },
    { data: '2026-10-21', texto: 'Barras de andamento passam a encher da esquerda para a direita. Os três níveis de certificação foram explicados. Os documentos a obter ganharam barra de progresso. A legenda passou a explicar o que é uma ficha.' },
    { data: '2026-10-20', texto: 'Painel criado. Ficha do DM1 em rascunho: análise completa, decisão sobre o instrumento em aberto e 5 pedidos de documentos à equipe.' }
  ],

  criterios: [
    {
      codigo: 'DM1', area: 'DM', ordem: 1, essencial: true,
      titulo: 'Implementando a estratégia e a governança de dados',
      definicao: 'A prefeitura mantém uma lista documentada de responsabilidades de estratégia e governança de dados e se reúne no mínimo a cada trimestre para desenvolvê-las.',
      regra: { min: 2, total: 3 }, janela: 'Trimestral',
      plataforma: { resposta: 'Em andamento', nota: 'Pré-preenchido a partir do Raio-X de 31/08/2026. A própria resposta enviada admite que faltam registros de reuniões trimestrais do grupo de governança.' },
      ficha: 'rascunho', classificacao: 'criar',
      propostas: [{ t: 'Proposta de ajustes ao decreto do Programa SBC+i', u: 'proposta-sbc-mais-i.html', nota: 'Rascunho de indicação técnica, sobre a minuta da Procuradoria. A decisão é do município.' }],
      resumo: 'Nenhum ato de SBC cobre o DM1 hoje. O Decreto 22.963/2025 tem aprovação do prefeito e um comitê, mas trata só de proteção de dados (LGPD), não marca reuniões e não tem atas localizadas. Recomendação: um decreto de governança de dados que cubra os três subcritérios.',
      subcriterios: [
        { cod: 'DM1.1', texto: 'Aprovação executiva e uma estratégia de dados de toda a prefeitura, estatuto, declaração de objetivos ou conjunto documentado de metas e objetivos.', situacao: 'parcial', classificacao: 'criar',
          nota: 'O Decreto 22.963/2025 tem aprovação do prefeito e objetivos, mas só de proteção de dados. Falta o documento que oriente a governança de dados como um todo (uso, qualidade, abertura).' },
        { cod: 'DM1.2', texto: 'O grupo encarregado da estratégia e governança de dados se reúne no mínimo a cada trimestre para desenvolver responsabilidades definidas.', situacao: 'parcial', classificacao: 'criar_risco',
          nota: 'O CGPD tem atribuições definidas e membros nomeados desde ago/2026 (Portaria 10.510), mas o escopo é a LGPD e as atas das reuniões ainda não foram localizadas. Com atas de duas reuniões até 18/12, passa a "atende juntando documentos".' },
        { cod: 'DM1.3', texto: 'A estratégia e o processo de governança incluem uma estrutura que enfatiza transparência, prestação de contas e uso ético de dados a serviço de todos os residentes.', situacao: 'nao_tem', classificacao: 'criar',
          nota: 'Há peças dispersas (LGPD no Decreto 22.963, princípios da Lei 7.578), mas nenhuma estrutura que reúna os três temas.' }
      ],
      evidencias: [
        'Atas ou pautas das duas reuniões mais recentes do grupo de governança de dados.',
        'Documento com papéis e responsabilidades do grupo ou comitê.',
        'Estratégia, estatuto, declaração de propósito ou metas que orientam o trabalho.'
      ],
      sbc: {
        tem: [
          { titulo: 'Competência legal para a estratégia de dados', texto: 'A Lei 7.367/2025, art. 645, XIII, atribui ao Departamento de Tecnologia da Informação (SA-3) "definir a estratégia de dados do Município, estabelecendo princípios, padrões e políticas para a gestão de dados". É a base legal do ato a criar.',
            links: [{ t: 'Lei 7.367/2025, art. 645', u: LEIS + 'lei-ordinaria/2025/7367/lei-ordinaria-n-7367-2025-dispoe-sobre-a-estrutura-administrativa-do-municipio-de-sao-bernardo-do-campo-alteracao-das-leis-municipais-n-s-2240-de-13-de-agosto-de-1976-e-6745-de-7-de-fevereiro-de-2019-e-da-outras/#:~:text=Art.%20645.' }] },
          { titulo: 'Modelo de redação do próprio município', texto: 'O Decreto 23.236/2026 (GT de Desburocratização) já prevê composição por cargo, nomeação por portaria, reunião ordinária mensal e registro de todas as reuniões em processo administrativo. Serve de modelo para o comitê do DM1.2.',
            links: [{ t: 'Decreto 23.236/2026, art. 5º', u: LEIS + 'decreto/2026/23236/decreto-n-23236-2026-dispoe-sobre-a-criacao-do-grupo-de-trabalho-municipal-de-desburocratizacao-gtmd-do-ambiente-de-negocios-visando-o-cumprimento-dos-requisitos-do-programa-facilita-sp-municipios-e-a-evolucao-da-classificacao-municipal-na-jornada-de-simplificacao-e-da-outras/#:~:text=Art.%205%C2%BA' }] }
        ],
        incompleto: [
          { titulo: 'Decreto 22.963/2025: Programa de Proteção de Dados e CGPD', texto: 'Aprovado pelo prefeito, cria o Comitê Gestor de Proteção de Dados (CGPD) com atribuições definidas. A Encarregada foi designada pela Portaria 10.364/2025, e os 8 membros do comitê (Controladoria, Secretaria de Administração e Procuradoria) foram nomeados pela Portaria 10.510/2026.', falta: 'Escopo além da LGPD; periodicidade de reunião no ato; atas das reuniões.',
            links: [{ t: 'Decreto 22.963/2025, art. 3º', u: 'https://leis.org/2cax4#:~:text=Art.%203%C2%BA' }, { t: 'Publicação oficial: NM nº 2529, p. 8–10 (decreto e Portaria 10.364)', u: 'https://www.saobernardo.sp.gov.br/documents/10181/2045904/NM%2B2529%2Bde%2B06.06.2025%2B-%2B%2BConteu%CC%81do%2BIntegral.pdf/105bbfa3-9bc7-fe37-c79f-75e1150b4c10#page=8' }, { t: 'Portaria 10.510/2026: membros do CGPD (NM nº 2676, p. 16)', u: NM2676 }] },
          { titulo: 'Programa SBC+i: projeto de lei e minuta de decreto (processo SB 100144/2026, em trâmite)', texto: 'O projeto de lei tem entre os princípios "governança e utilização estratégica de dados e informações" e "transparência, participação social e proteção de dados pessoais"; entre os objetivos, "incentivar o uso estratégico de dados"; e um eixo de "governança, planejamento, dados e inteligência de gestão". A minuta de decreto dá à Secretaria de Administração a governança do programa, define 5 competências para o GT Cidade Inteligente e prevê o Portal SBC+i. Em 20/10/2026 a Procuradoria ajustou as minutas, pediu regime de urgência para o projeto de lei e recomendou reescrever o art. 5º do decreto: o texto ainda vai mudar.', falta: 'O decreto não marca reunião periódica nem exige ata, e dados são um eixo de um programa de cidade inteligente, não uma estratégia de dados. Oportunidade: propor, na reescrita, reunião no mínimo trimestral com ata, uma competência de governança de dados articulada com o CGPD, princípios de uso ético de dados e de IA e um relatório anual público. Só conta depois de a lei ser aprovada e o decreto publicado.',
            links: [{ t: 'Proposta de ajustes ao decreto, com explicação de cada mudança', u: 'proposta-sbc-mais-i.html' }] },
          { titulo: 'GT Cidade Inteligente do SBC+i (Portaria 10.500/2026)', texto: 'A Portaria 10.500, de 07/07/2026, designa 5 secretários (Administração, que coordena; Segurança; Transporte; Fazenda; Planejamento Urbano) para o grupo de trabalho do programa de cidade inteligente. O processo da portaria (SB 65650/2026) foi arquivado em 29/07/2026 sem atas.', falta: 'A portaria não define atribuições, periodicidade de reunião nem atas, e não cita dados. As atribuições viriam com o decreto do SBC+i (item acima).',
            links: [{ t: 'Portaria 10.500/2026 (NM nº 2661, p. 2)', u: 'https://www.saobernardo.sp.gov.br/documents/10181/2361282/NM+2661+de+08.07.2026+-+Conteu%CC%81do+Integral.pdf/505b66ea-e307-5c8c-5bf4-1ce932e5ede3#page=2' }, { t: 'Portal SBC+i', u: 'https://cidadeinteligente.saobernardo.sp.gov.br' }] },
          { titulo: 'Lei 7.578/2026: Política Municipal de Inovação', texto: 'Tem entre seus princípios "transparência e governança colaborativa" e "privacidade e proteção de dados".', falta: 'Não é política de dados. Pode ser citada como apoio ao DM1.3.',
            links: [{ t: 'Lei 7.578/2026, art. 2º', u: LEIS + 'lei-ordinaria/2026/7578/lei-ordinaria-n-7578-2026-institui-a-politica-municipal-de-inovacao-dispoe-sobre-instrumentos-de-fomento-a-pesquisa-cientifica-ao-desenvolvimento-tecnologico-e-a-inovacao-no-municipio-de-sao-bernardo-do-campo-e-da-outras/#:~:text=Art.%202%C2%BA' }] }
        ],
        naoTem: [
          { titulo: 'Estratégia ou política de governança de dados de toda a prefeitura', texto: 'Com objetivos, metas, responsáveis e prazos (DM1.1).' },
          { titulo: 'Comitê de governança de dados com reuniões regulares', texto: 'No mínimo trimestrais, com atribuições escritas e ata de cada reunião (DM1.2).' },
          { titulo: 'Princípios de transparência, prestação de contas e uso ético de dados', texto: 'Incluindo uso de IA e decisões automatizadas, privacidade e equidade (DM1.3).' },
          { titulo: 'Relatório público periódico de progresso', texto: 'Reforça a prestação de contas e prepara o OD1.3 (relatório anual da política de dados abertos).' }
        ],
        naoServe: [
          { titulo: 'PDTIC 2022–2025, PDTIC 2026–2029 e o grupo do Decreto 21.620/2021', texto: 'Plano de TI (Decreto 21.944/2022), vencido. O grupo do Decreto 21.620/2021 só acompanhou a elaboração do plano, sem periodicidade de reunião, e os 4 relatórios (dez/2022 a jun/2024) não registram reuniões. O PDTIC 2026–2029 (FUNDUNESP, contratado em jul/2026, 12 meses) foi conferido no termo de referência: o escopo é governança de TIC, e governança de dados aparece como diretriz, não como entrega. Não fica pronto antes de 18/12.', links: [{ t: 'Página do PDTIC', u: 'https://www.saobernardo.sp.gov.br/web/sbc/pd-tic' }, { t: 'Contrato do PDTIC 2026–2029 (NM nº 2674, p. 31)', u: 'https://www.saobernardo.sp.gov.br/documents/10181/2361282/NM+2674+de+31.07.2026+-+Conteu%CC%81do+Integral.pdf/e797dcab-b4a9-8f2f-a599-7ff7ae58bc45#page=31' }] },
          { titulo: 'Decreto 22.453/2023: Política de Segurança da Informação', texto: 'Serve ao DM6 (segurança), não ao DM1.', links: [{ t: 'Decreto 22.453/2023', u: 'https://leis.org/0wdhm' }] },
          { titulo: 'Gesgov', texto: 'Plataforma de acompanhamento de metas anunciada em ago/2026, sem ato, contrato nem página oficial localizados. Não é evidência de governança de dados.' }
        ]
      },
      decisao: {
        titulo: 'Qual instrumento usar para o DM1 (indicação técnica; a decisão é do município)',
        recomendada: 'A',
        opcoes: [
          { id: 'A', nome: 'Decreto novo de política de governança de dados', descricao: 'Objetivos, princípios e um comitê com reunião no mínimo trimestral, ancorado no DTI (competência do art. 645, XIII), com a Controladoria e o Encarregado como membros.',
            pros: 'Escopo certo para o DM1.1 e o DM1.3; competência legal clara; pode abrigar também a política de dados abertos (OD1).', contras: 'Trâmite completo de ato novo; precisa escrever a divisão de papéis com o CGPD para não haver sobreposição.' },
          { id: 'B', nome: 'Ampliar o Decreto 22.963/2025', descricao: 'Transformar o CGPD em comitê de proteção e governança de dados, acrescentando estratégia, princípios e periodicidade.',
            pros: 'Aproveita um colegiado que já existe, com membros nomeados (Portaria 10.510/2026) e o DTI representado.', contras: 'A coordenação é da Controladoria, enquanto a lei dá a estratégia de dados ao DTI; mistura conformidade com uso de dados.' },
          { id: 'C', nome: 'Usar o GT Cidade Inteligente (SBC+i)', descricao: 'O GT seria o grupo do DM1.2, com atribuições e reuniões definidas no decreto do SBC+i, que está em trâmite (processo SB 100144/2026).',
            pros: 'O projeto de lei e a minuta de decreto já existem e já tratam de dados; a reescrita do art. 5º pedida pela Procuradoria abre espaço para incluir reunião trimestral com ata e princípios de uso ético.', contras: 'A lei precisa passar pela Câmara antes do decreto, e não há como saber se tudo sai antes de 18/12; o escopo é cidade inteligente, não estratégia de dados.' }
        ],
        nota: 'A escolha cabe ao município (DTI e Procuradoria); a indicação técnica são as duas frentes descritas a seguir. Já existe a proposta de redação para a opção C (link abaixo): texto consolidado do decreto do SBC+i, com cada mudança justificada, a levar à Secretaria de Administração. Recomendação em duas frentes: para 18/12, o CGPD com atas (opção B), se já houver reuniões; em paralelo, propor os ajustes na minuta do decreto do SBC+i (opção C), que servem à revalidação e ao ato guarda-chuva.',
        links: [{ t: 'Proposta de ajustes ao decreto do SBC+i, com explicação de cada mudança', u: 'proposta-sbc-mais-i.html' }]
      },
      modelos: [
        { nome: 'Estratégia de dados (GovEx, em português)', cobre: ['DM1.1'], texto: 'Plano de 3 anos com 5 objetivos (governança, qualidade, capacidade, transparência, uso) e plano de ação com responsável e prazo.', u: 'https://drive.google.com/file/d/1ATeJfFuS02VdbwINvf-eFNnWtWK7_VEe/view' },
        { nome: 'Diretiva de governança de dados de San Antonio (em português)', cobre: ['DM1.1', 'DM1.3'], texto: 'O Anexo A traz 8 princípios: transparência, prestação de contas, uso ético e equidade, decisão automatizada, privacidade e soberania dos dados.', u: 'https://drive.google.com/file/d/1iFkC8eXjYwSDYYdUiV73v_Sq14eFG2E7/view' },
        { nome: 'Política de dados abertos de Baton Rouge (Resolução 53275)', cobre: ['DM1.1', 'DM1.2'], texto: 'A Parte 3 cria o Comitê de Governança de Dados, com um coordenador por órgão e reunião "no mínimo trimestral". A Parte 5 exige relatório anual.', u: 'https://www.brla.gov/DocumentCenter/View/6350/Resolution-53275-Open-Data-Policy#page=5' },
        { nome: 'Manual administrativo de Baton Rouge', cobre: ['DM1.2'], texto: 'Papéis do comitê e dos coordenadores, inventário semestral, priorização de dados e triagem de dados pessoais com o jurídico.', u: 'https://www.brla.gov/DocumentCenter/View/6346/Open-Data-Administrative-Handbook#page=7' },
        { nome: 'Política de governança de dados de Henderson (em inglês)', cobre: ['DM1.2'], texto: 'Comitê diretor trimestral com membros definidos por cargo e atribuições listadas; metadados obrigatórios.', u: 'https://drive.google.com/file/d/1BppROsieAcLjoRFl1-tbAQuVy-jq88Lp/view' }
      ],
      plano: [
        { texto: 'Levantar o que SBC já tem', feito: true },
        { texto: 'Ler os modelos de referência', feito: true },
        { texto: 'Validar a análise internamente', feito: false },
        { texto: 'Município decide o instrumento (indicação: CGPD com atas para 18/12 e ajustes no decreto do SBC+i em paralelo)', feito: false, ancora: 'decisao-DM1' },
        { texto: 'Receber da equipe os documentos pedidos', feito: false, ancora: 'pedidos-DM1' },
        { texto: 'Redigir a minuta: objetivos, princípios, comitê e relatório anual', feito: false },
        { texto: 'Trâmite: Procuradoria, assinatura e publicação', feito: false },
        { texto: 'Publicar a portaria de nomeação dos membros do comitê', feito: false },
        { texto: '1ª reunião do comitê, com ata', feito: false },
        { texto: '2ª reunião do comitê, com ata (antes de 18/12)', feito: false },
        { texto: 'Reunir as evidências e preparar a resposta', feito: false },
        { texto: 'Equipe insere resposta e arquivos na plataforma', feito: false }
      ],
      pedidos: [
        { texto: 'Atas ou pautas das reuniões do CGPD desde ago/2026 (as portarias da Encarregada e dos membros já foram localizadas: 10.364/2025 e 10.510/2026)', status: 'a_pedir' },
        { texto: 'Atas ou pautas do GT Cidade Inteligente (o processo da Portaria 10.500/2026 foi lido e não tem atas; falta saber se o grupo se reuniu e onde estão os registros)', status: 'a_pedir' },
        { texto: 'Documento do DTI produzido com base no art. 645, XIII (estratégia, padrões ou políticas de dados)', status: 'a_pedir' },
        { texto: 'Se o termo de referência do PDTIC 2026–2029 inclui estratégia de dados (lido: não inclui; o escopo é governança de TIC)', status: 'validado' },
        { texto: 'Registros de reuniões de coordenação do SBC+i ou do Gesgov que tratem de dados', status: 'a_pedir' }
      ]
    },

    {
      codigo: 'OD1', area: 'OD', ordem: 2,
      titulo: 'Política de dados abertos',
      definicao: 'A prefeitura possui uma política de dados abertos formalizada e disponível ao público, com compromisso de transparência e divulgação proativa de dados.',
      regra: { min: 3, total: 4 }, janela: 'Sem janela',
      plataforma: { resposta: 'Vazio', nota: 'Na revisão do Raio-X, Dados Abertos foi rebaixado para "Em andamento": o portal atende à obrigação legal de transparência, mas falta uma política formal de dados abertos voltada a reuso e às demandas da comunidade.' },
      ficha: 'rascunho', classificacao: 'criar',
      propostas: [{ t: 'Minuta de decreto da Política Municipal de Dados Abertos', u: 'proposta-od1-dados-abertos.html', nota: 'Rascunho de indicação técnica: 23 artigos e um anexo, cada um explicado. A decisão é do município.' }],
      resumo: 'SBC não tem política de dados abertos. O que existe é a regulamentação da Lei de Acesso à Informação (Decreto 18.882/2014), que ajuda só em parte o OD1.4. Indicação técnica: um decreto da Política Municipal de Dados Abertos, que também adote o capítulo de abertura de dados da Lei 14.129/2021. Já há uma minuta em rascunho, com cada artigo explicado (botão logo abaixo). Como o OD1 não tem janela nem exige reuniões, basta o decreto estar publicado antes de 18/12. A direção do DTI prepara documentos para a Procuradoria que não foram vistos: a minuta deve ser cotejada com eles.',
      subcriterios: [
        { cod: 'OD1.1', texto: 'A política cria uma estrutura de governança para a liberação proativa de informações públicas.', situacao: 'nao_tem', classificacao: 'criar',
          nota: 'Há competências (Seção de Transparência da Controladoria, para o portal e a capacitação em dados abertos; DTI, para a estratégia de dados) e uma rede de representantes por órgão prevista no decreto da LAI, mas nenhuma estrutura para a publicação proativa.' },
        { cod: 'OD1.2', texto: 'A política inclui planos para coletar feedback público regular sobre o programa de dados abertos.', situacao: 'nao_tem', classificacao: 'criar',
          nota: 'Não há escuta sobre dados abertos. A pesquisa de satisfação do Portal da Transparência (Decreto 23.215/2026, art. 6º, X) é usada para melhorar os serviços, não para saber que dados a população quer.' },
        { cod: 'OD1.3', texto: 'A política garante, com relatórios no mínimo anuais, a revisão periódica do texto e da implementação.', situacao: 'nao_tem', classificacao: 'criar_risco',
          nota: 'A prefeitura já publica todo ano o relatório da LAI (2012 a 2025), o que mostra que a rotina existe. Mas uma política nova não terá relatório publicado antes de 18/12, e não se sabe se o revisor aceita a política sem o primeiro relatório. O OD1 pede 3 de 4, então não depende deste.' },
        { cod: 'OD1.4', texto: 'A política se compromete a divulgar as decisões sobre coleta, priorização, armazenamento, uso e publicação de dados, explicando o que não pode ser liberado.', situacao: 'parcial', classificacao: 'criar',
          nota: 'O decreto da LAI já obriga a fundamentar negativas e a publicar todo ano o rol de documentos sigilosos (2023–2025: nenhum). Isso vale só para pedidos e sigilo. Falta o compromisso de explicar como se decide o que se abre e em que ordem.' }
      ],
      evidencias: ['Link para a política de dados abertos publicada.', 'Cópia do relatório anual mais recente, se a política o exigir.'],
      sbc: {
        tem: [
          { titulo: 'Competências legais sobre dados abertos', texto: 'A Lei 7.367/2025 dá à Seção de Transparência da Controladoria (art. 35) a coordenação do Portal da Transparência e da capacitação em "dados abertos", e ao DTI (art. 645, XIII) a estratégia de dados do Município. São a base para dizer, no decreto, quem coordena.',
            links: [{ t: 'Lei 7.367/2025, art. 35', u: LEIS + 'lei-ordinaria/2025/7367/lei-ordinaria-n-7367-2025-dispoe-sobre-a-estrutura-administrativa-do-municipio-de-sao-bernardo-do-campo-alteracao-das-leis-municipais-n-s-2240-de-13-de-agosto-de-1976-e-6745-de-7-de-fevereiro-de-2019-e-da-outras/#:~:text=Art.%2035.' }] },
          { titulo: 'Rede de representantes da Controladoria em cada secretaria', texto: 'O Decreto 22.975/2025 (art. 2º) manda cada secretaria indicar ao menos dois representantes para as demandas da Controladoria, designados pela Portaria CG 01/2025 e atualizados por portaria todo mês em 2026. Pode ser a rede de coordenadores de dados abertos da política (art. 7º da minuta).',
            links: [{ t: 'Normas da Controladoria', u: 'https://www.saobernardo.sp.gov.br/web/transparencia/normas' }] },
          { titulo: 'Relatórios anuais da Lei de Acesso à Informação', texto: 'Publicados todo ano desde 2012, com o rol anual de documentos classificados e desclassificados. Mostram que a prefeitura já mantém uma rotina de relatório anual, que pode ser estendida aos dados abertos (OD1.3). Em 2025 foram 340 pedidos, com tempo médio de resposta de 28,9 dias; o relatório separa os pedidos por secretaria, mas não por assunto.',
            links: [{ t: 'Relatórios da LAI', u: 'https://www.saobernardo.sp.gov.br/web/transparencia/relatorios-da-lei-de-acesso-a-informacao' }] }
        ],
        incompleto: [
          { titulo: 'Decreto 18.882/2014: regulamentação da Lei de Acesso à Informação', texto: 'Tem como diretrizes "a publicidade como preceito geral e o sigilo como exceção" e a "divulgação de informações de interesse público, independentemente de solicitações" (art. 3º). Prevê representantes por órgão para a gestão da informação (art. 7º), negativa sempre fundamentada (art. 17) e publicação anual do rol de informações sigilosas (art. 31).', falta: 'Não é política de dados abertos: trata de pedidos e de sigilo, não de publicação proativa de bases, escuta pública nem relatório de revisão. Serve de apoio ao OD1.4, e os representantes por órgão podem virar os coordenadores de dados abertos.',
            links: [{ t: 'Decreto 18.882/2014', u: LEIS + 'decreto/2014/18882/decreto-n-18882-2014-regulamenta-o-procedimento-de-acesso-a-informacoes-publicas-garantido-no-inciso-xxxiii-do-art-5-no-inciso-ii-do-art-37-e-no-2-do-art-216-da-constituicao-federal-regulamentados-pela-lei-federal-n-12527-de-18-de-novembro-de-2011-e-da-outras/' }] },
          { titulo: 'Lei Federal 14.129/2021 (Governo Digital): ainda não adotada por SBC', texto: 'O capítulo de abertura de dados (arts. 29 a 37) traz quase tudo o que o OD1.4 pede: bases não pessoais públicas como regra, pedido de abertura por qualquer pessoa, pedidos e respostas publicados como base aberta e direito ao inteiro teor da negativa.', falta: 'Para municípios, a lei só vale se for adotada por ato próprio (art. 2º, III). A página de Dados Abertos diz que a regulamentação local está "em estudo". O decreto do OD1 pode ser essa regulamentação.',
            links: [{ t: 'Lei 14.129/2021, art. 29', u: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14129.htm#art29' }, { t: 'Página de Dados Abertos', u: 'https://www.saobernardo.sp.gov.br/web/transparencia/dados-abertos' }] },
          { titulo: 'A Câmara já pediu esta política (Indicação nº 14.825/2025)', texto: 'Em outubro de 2025, a Câmara Municipal encaminhou ao Executivo indicação de estudos para a criação da Política Municipal de Dados Abertos e Interoperabilidade, com base na Lei 14.129 e no Decreto federal 8.777. O Executivo respondeu em janeiro de 2026 (Ofício nº 4027/2025-SG-011).', falta: 'O conteúdo da resposta não foi lido: no site da Câmara, o documento só abre depois de uma verificação manual. Pedido à equipe ou leitura manual.',
            links: [{ t: 'Indicação nº 14.825/2025 e resposta do Executivo', u: 'https://www.camarasbc.sp.gov.br/documento/indicacao-no-14825-2025-547418' }] },
          { titulo: 'Portal de dados abertos "em desenvolvimento" (PPA 2026–2029)', texto: 'Na resposta às sugestões do PPA (Anexo V), a prefeitura diz que já existe "iniciativa semelhante em desenvolvimento no âmbito da modernização digital".', falta: 'Não foi localizado ato, contrato nem prazo; o Plano de Contratações 2026 não tem item de portal de dados abertos. Pedir à equipe.' }
        ],
        naoTem: [
          { titulo: 'Política de dados abertos publicada em ato normativo', texto: 'Com princípios, definições e licença aberta.' },
          { titulo: 'Governança da publicação proativa', texto: 'Coordenação, um coordenador por secretaria, inventário, processo de publicação e cronograma público (OD1.1).' },
          { titulo: 'Escuta pública sobre dados abertos', texto: 'Canal permanente para pedir abertura de bases e consulta periódica sobre prioridades (OD1.2).' },
          { titulo: 'Relatório anual de dados abertos', texto: 'Com o progresso, as bases abertas no ano, os pedidos de abertura e a proposta de revisão da política (OD1.3).' }
        ],
        naoServe: [
          { titulo: 'A página de Dados Abertos do Portal da Transparência', texto: 'É um texto de apresentação, com base legal e termos de uso informais. Não tem governança, escuta, relatório nem regra de decisão. Conta para o OD3 (portal), não para o OD1.', links: [{ t: 'Página de Dados Abertos', u: 'https://www.saobernardo.sp.gov.br/web/transparencia/dados-abertos' }] },
          { titulo: 'A proposta de ajustes ao decreto do SBC+i (feita para o DM1)', texto: 'A proposta de ajustes ao decreto do SBC+i foi feita para o DM1 (governança interna de dados) e deixou os dados abertos de fora de propósito: o decreto só sai depois da lei, e o escopo é cidade inteligente. A minuta do OD1 é outro documento, um decreto próprio (link na decisão acima).', links: [{ t: 'Ver a proposta do DM1 (não trata de dados abertos)', u: 'proposta-sbc-mais-i.html' }] }
        ]
      },
      justificativa: {
        titulo: 'Por que é preciso um ato normativo',
        intro: [
          'O OD1 não avalia se a prefeitura pratica transparência, e sim se existe uma política escrita com quatro elementos. A definição pede política "formalizada e disponível ao público"; no original em inglês, "codified", que o glossário da própria WWC traduz como "sistematizar políticas". Ou seja, uma página ou uma prática não bastam, mas a WWC não exige que seja lei. Um decreto é o caminho recomendado porque obriga todas as secretarias e responde à crítica do Raio-X.',
          'Cada subcritério começa com "a política...": a política cria a governança (1.1), prevê a escuta pública (1.2), exige o relatório anual (1.3) e se compromete a explicar as decisões (1.4). Mesmo o que SBC já faz na prática precisa estar escrito no texto da política. Foi o que a revisão do Raio-X apontou: falta "uma política e uma estratégia formal de Dados Abertos".'
        ],
        linhas: [
          { sub: 'OD1.1', existe: 'Decreto 18.882/2014 (LAI): diretriz de divulgação "independentemente de solicitações" (art. 3º, II) e representantes por órgão (art. 7º). Lei 7.367/2025: competências da Controladoria (portal) e do DTI (estratégia de dados).', falta: 'A estrutura da LAI serve para responder pedidos, não para publicar bases de forma proativa. As competências dizem quem pode fazer, mas não criam o processo.' },
          { sub: 'OD1.2', existe: 'Pesquisa de satisfação do Portal da Transparência (Decreto 23.215/2026, art. 6º, X).', falta: 'É usada para melhorar o atendimento, não para saber que dados a população quer.' },
          { sub: 'OD1.3', existe: 'Relatório anual da LAI, publicado desde 2012 (Decreto 18.882, art. 31).', falta: 'É estatística de pedidos, e não revisão do texto da política nem da implementação.' },
          { sub: 'OD1.4', existe: 'LAI: negativa fundamentada (art. 17), termo de classificação com as razões do sigilo (art. 29) e rol anual de documentos sigilosos (art. 31).', falta: 'Cobre em parte: explica o que não se libera, mas só para pedidos e sigilo. Não trata de como se decide abrir e priorizar bases.' }
        ],
        conclusao: 'Resultado: o OD1.4 está meio coberto; o OD1.1, o OD1.2 e o OD1.3 não estão. Como o critério pede 3 de 4, é preciso um ato que, no mínimo, crie a governança, a escuta e o compromisso de explicar as decisões. A página de Dados Abertos não tem força normativa. A Lei 14.129/2021 cobriria boa parte do 1.4, mas só vale para o município se for adotada por ato próprio.'
      },
      decisao: {
        titulo: 'Onde pôr a política de dados abertos (indicação técnica; a decisão é do município)',
        recomendada: 'A',
        opcoes: [
          { id: 'A', nome: 'Decreto próprio da Política Municipal de Dados Abertos', descricao: 'Decreto curto, que também adota o capítulo de abertura de dados da Lei 14.129/2021 e prevê a ligação com o comitê de governança do DM1.',
            pros: 'Não depende da Câmara nem do ato guarda-chuva; é a regulamentação que a prefeitura já diz estudar; o OD1 só precisa do ato publicado.', contras: 'Mais um ato; precisa deixar escrita a ligação com o comitê do DM1, para não haver duas governanças.' },
          { id: 'B', nome: 'Dentro do ato de governança de dados do DM1', descricao: 'A política de dados abertos seria um capítulo do decreto de governança de dados ou do ato guarda-chuva.',
            pros: 'Um só instrumento para o DM1 e o OD1.', contras: 'Esse ato ainda não tem minuta nem prazo, e o OD1 ficaria preso a ele.' },
          { id: 'C', nome: 'Dentro do decreto do SBC+i', descricao: 'Acrescentar a política à minuta de decreto do Programa SBC+i, que está em trâmite.',
            pros: 'O texto já está em trâmite.', contras: 'O decreto só sai depois da lei, que vai à Câmara; o escopo é cidade inteligente.' },
          { id: 'D', nome: 'Capítulo novo no Decreto 18.882/2014 (LAI)', descricao: 'Acrescentar ao decreto da Lei de Acesso à Informação um capítulo "Da Política Municipal de Dados Abertos", atualizando também a competência, que em 2014 era de uma secretaria que já não existe com esse nome.',
            pros: 'Aproveita o que a LAI já tem: a diretriz de divulgação proativa, os representantes por órgão (viram os coordenadores do 1.1), a rotina anual (vira o relatório do 1.3) e as regras de sigilo (base do 1.4).', contras: 'Reforça o enquadramento que o revisor do Raio-X criticou (dados abertos como obrigação legal de transparência, e não como reuso e demanda da comunidade); reabrir um decreto de 2014 pode levar a revisar outros artigos e alongar o trâmite.' }
        ],
        links: [{ t: 'Minuta de decreto da Política Municipal de Dados Abertos (rascunho, com cada artigo explicado)', u: 'proposta-od1-dados-abertos.html' }],
        nota: 'A escolha cabe ao município (DTI e Procuradoria); a minuta segue a opção A como indicação. Recomendação mantida na opção A: um decreto próprio pode citar as estruturas da LAI ("os representantes de que trata o art. 7º do Decreto 18.882 acumulam a função de coordenador de dados abertos"), sem herdar o enquadramento de obrigação legal. A opção D fica como alternativa, se a Procuradoria preferir não criar ato novo. Se já houver minuta de regulamentação da Lei 14.129 (pedido 1), ela é o veículo natural da opção A.'
      },
      modelos: [
        { nome: 'Aracruz (ES): Decretos 51.612 e 51.613/2026', cobre: ['OD1.1', 'OD1.3', 'OD1.4'], texto: 'O modelo brasileiro mais completo, de julho de 2026 (Aracruz participa com SBC da Rede Cidades +I). Comissão com Controladoria, Encarregado e Transformação Digital; relatório anual publicado (art. 32); 5 categorias de publicabilidade das bases (art. 21); matriz de priorização com 8 critérios (Plano, item 5). Ponto fraco: não tem escuta pública direta (OD1.2).', u: 'https://aracruz.es.gov.br/storage/60809/51612---Institui-o-Plano-de-Dados-Abertos-ass.pdf' },
        { nome: 'Fortaleza (CE): Decreto 15.358/2022', cobre: ['OD1.1'], texto: 'Comitê executivo coordenado pela Controladoria em parceria com o órgão de tecnologia, como seria em SBC (Controladoria e DTI); reunião semestral; plano de abertura feito com participação.', u: 'https://transparencia-cdn.sefin.fortaleza.ce.gov.br/LEGISLACAO/BIBLIOTECA%20NORMATIVA/TRANSPAR%C3%8ANCIA%20E%20INTEGRIDADE/DECRETOS/07%20-%20Decreto%20Municipal%20n%C2%B0%2015.358%2C%20de%2008%20de%20julho%20de%202022%20-%20Pol%C3%ADtica%20de%20Dados%20Abertos.pdf' },
        { nome: 'Porto Alegre (RS): Decreto 20.315/2019', cobre: ['OD1.1', 'OD1.4'], texto: 'Política coordenada pela Controladoria, com plano por órgão. O Anexo I lista os dados que a lei proíbe abrir, com a base legal de cada um: é um jeito simples de explicar o que não é liberado (OD1.4). Não tem relatório anual.', u: 'https://dopaonlineupload.procempa.com.br/dopaonlineupload/2994_ce_263553_1.pdf' },
        { nome: 'Teresópolis (RJ): Decreto 5.921/2023 e Instrução Normativa 2/2023', cobre: ['OD1.2', 'OD1.3'], texto: 'Precedentes brasileiros: encontros abertos e periódicos e consultas sobre abertura de dados (art. 7º), relatório anual de acompanhamento pelo Controle Interno (IN 2/2023) e cláusula de dados abertos em todo contrato de serviço (art. 11). Portal em CKAN, software livre.', u: 'https://www.teresopolis.rj.gov.br/wp-content/uploads/2025/07/DECRETO-EXECUTIVO-No-5921_22-de-Fevereiro-de-2023-1.pdf' },
        { nome: 'Osasco (SP): Decreto 13.655/2023', cobre: ['OD1.2'], texto: 'Prevê processos de consulta pública para os cidadãos ajudarem a priorizar os dados a abrir (art. 9º, VII).', u: 'https://osasco.sp.gov.br/site/wp-content/uploads/2023/01/iomo-2376.pdf' },
        { nome: 'Decreto federal 8.777/2016', cobre: ['OD1.1', 'OD1.4'], texto: 'A matriz que quase todos os decretos municipais copiam: definições, princípios, plano de dados abertos por órgão, abertura automática das bases sem informação protegida e negativa por custo com análise.', u: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/decreto/d8777.htm' },
        { nome: 'Caruaru (PE): Decreto 059/2024 — lição, não modelo', cobre: [], texto: 'Regulamenta a Lei 14.129 no município, mas não tem nenhuma regra de dados abertos. Mostra que regulamentar a 14.129 sozinho não cria a política que o OD1 pede.', u: 'https://caruaru.pe.gov.br/wp-content/uploads/2024/05/DECRETO-059-GOVERNO-DIGITAL-TRANSPARENCIA.pdf' },
        { nome: 'Política de dados abertos de Baton Rouge (Resolução 53275)', cobre: ['OD1.1', 'OD1.2', 'OD1.3', 'OD1.4'], texto: 'Parte 3: governança, com coordenador por órgão, inventário, priorização pela demanda do público e triagem de dados sensíveis. Seção 4: participação do público. Parte 5: relatório anual até 31 de janeiro, com sugestões de melhoria.', u: 'https://www.brla.gov/DocumentCenter/View/6350/Resolution-53275-Open-Data-Policy' },
        { nome: 'Manual administrativo de Baton Rouge', cobre: ['OD1.1', 'OD1.4'], texto: 'Processo de publicação, metadados, revisão de qualidade e prevenção da liberação de dados protegidos.', u: 'https://www.brla.gov/DocumentCenter/View/6346/Open-Data-Administrative-Handbook' },
        { nome: 'Relatórios anuais de dados abertos de Baton Rouge (2018 a 2024)', cobre: ['OD1.3', 'OD1.4'], texto: 'O relatório que o OD1.3 pede, na prática: números do ano, revisão do processo, pontuação de cada base nos critérios de priorização e prioridades do ano seguinte. Desde 2023 é uma página web simples. Com essa política, a cidade foi certificada Prata pela WWC em 2021 e Ouro em 2024.', u: 'https://www.brla.gov/1343/Open-Data-Policy' }
      ],
      plano: [
        { texto: 'Levantar o que SBC já tem', feito: true },
        { texto: 'Ler os modelos de referência', feito: true },
        { texto: 'Validar a análise internamente', feito: false },
        { texto: 'Município decide forma, colegiado, coordenação e data do relatório (indicações na minuta)', feito: false, ancora: 'decisao-OD1' },
        { texto: 'Receber da equipe os documentos pedidos', feito: false, ancora: 'pedidos-OD1' },
        { texto: 'Ler decretos brasileiros de dados abertos (federal, Porto Alegre, Fortaleza, Caruaru e Aracruz)', feito: true },
        { texto: 'Redigir a minuta em rascunho, com os pontos de escolha marcados (colegiado, coordenação, data do relatório)', feito: true },
        { texto: 'Cotejar a minuta com os documentos que o DTI vai encaminhar à Procuradoria', feito: false, ancora: 'pedidos-OD1' },
        { texto: 'Trâmite: Procuradoria, assinatura e publicação (antes de 18/12)', feito: false },
        { texto: 'Reunir as evidências e preparar a resposta', feito: false },
        { texto: 'Equipe insere resposta e arquivos na plataforma', feito: false }
      ],
      pedidos: [
        { texto: 'Se existe minuta, estudo ou processo de regulamentação local da Lei 14.129/2021 (a página de Dados Abertos diz que "o município estuda")', status: 'a_pedir' },
        { texto: 'Se foram nomeados os representantes por órgão do art. 7º do Decreto 18.882/2014 e se a Comissão Mista de Reavaliação (art. 21) foi constituída', status: 'a_pedir' },
        { texto: 'Qual unidade mantém hoje a página de Dados Abertos (Controladoria ou DTI)', status: 'a_pedir' },
        { texto: 'O que é o portal de dados abertos "em desenvolvimento" citado no PPA 2026–2029: ferramenta, responsável e prazo', status: 'a_pedir' },
        { texto: 'Quais documentos o DTI vai encaminhar à Procuradoria (ao menos os temas), para cotejar com a minuta: algum trata de dados abertos, governo digital ou da Lei 14.129?', status: 'a_pedir' },
        { texto: 'Resposta do Executivo à Indicação nº 14.825/2025 da Câmara (Ofício nº 4027/2025-SG-011, jan/2026): o que a prefeitura disse sobre a política de dados abertos', status: 'a_pedir' }
      ]
    },
    {
      codigo: 'OD3', area: 'OD', ordem: 3,
      titulo: 'Portal de dados abertos',
      definicao: 'A prefeitura publica dados abertos em um local central e público on-line.',
      regra: { min: 3, total: 3 }, janela: 'Sem janela',
      plataforma: { resposta: 'Sim (pré-preenchido)', alerta: 'A resposta veio pré-preenchida com "Sim", mas a revisão do Raio-X rebaixou Dados Abertos para "Em andamento". Hoje o "Sim" não se sustenta: marcar "Em andamento" até as ações do plano estarem publicadas.' },
      ficha: 'rascunho', classificacao: 'criar',
      resumo: 'Há bases abertas de verdade (contratos e obras em CSV, finanças em XLS, emendas em XLSX e 13 camadas de mapa no GeoPortal, com dicionário de dados), gratuitas e sem cadastro. Faltam dados desagregados por bairro e por grupo da população em formato aberto, e a página de Dados Abertos não aponta para os outros sites nem traz contato e licença. Tudo isso é edição de página e publicação de planilhas que já existem.',
      subcriterios: [
        { cod: 'OD3.1', texto: 'Os dados abertos são legíveis por máquina, podem ser baixados e são gratuitos.', situacao: 'tem', classificacao: 'atende',
          nota: 'Contratos e obras em andamento em CSV (atualizados em 22/10/2026), relatórios fiscais de 2026 em XLS, emendas em XLSX e camadas do GeoPortal em shapefile, todos sem login. Para reduzir o risco na revisão: pôr uma licença aberta explícita e atualizar os relatórios mensais da página principal, que param em 2023.' },
        { cod: 'OD3.2', texto: 'Quando possível, preservando a privacidade, os dados são publicados desagregados por subgrupos geográficos e demográficos.', situacao: 'parcial', classificacao: 'criar',
          nota: 'As bases do portal não são desagregadas. O Perfil Socioeconômico por Bairro 2026 tem exatamente o que o critério pede (bairro × idade, sexo, cor ou raça, vulnerabilidade, renda), mas só em PDF. Publicar essas tabelas em planilha resolve.' },
        { cod: 'OD3.3', texto: 'Os dados são contextualizados com linguagem clara, contatos, políticas e documentos; outros sites de dados ficam vinculados ao portal principal.', situacao: 'parcial', classificacao: 'criar',
          nota: 'A página explica em linguagem clara o que são dados abertos e cita a base legal. Faltam contato da unidade responsável, licença, uma descrição por base e links para o GeoPortal, o Perfil por Bairro, o Painel Estatístico e o Portal da Saúde.' }
      ],
      evidencias: ['Link para o portal de dados abertos. Se houver vários sites, um deles deve apontar para os outros.'],
      sbc: {
        tem: [
          { titulo: 'Bases legíveis por máquina, gratuitas e sem cadastro', texto: 'Contratos (CSV, Excel e PDF) e obras em andamento (CSV, Excel e PDF), ambos atualizados em 22/10/2026; relatórios de receitas e despesas de 2026 em XLS no sistema de transparência fiscal; planilha de emendas parlamentares em XLSX.',
            links: [{ t: 'Contratos', u: 'https://transparencia.saobernardo.sp.gov.br/contratos' }, { t: 'Obras em andamento', u: 'https://obras.saobernardo.sp.gov.br/transparencia/obras-em-andamento' }, { t: 'Transparência fiscal', u: 'https://transparencia-fiscal.saobernardo.sp.gov.br/transparencia-fiscal/municipio-sbc/inicio' }] },
          { titulo: 'GeoPortal: 13 camadas de mapa para download, com dicionário de dados', texto: 'Limite municipal, perímetro urbano, bairros, zoneamento, lotes, arruamentos, logradouros, hierarquia viária, próprios municipais, equipamentos e serviços públicos, praças, represa e endereços, em shapefile. A planilha de descrição (abr/2026) traz, para cada camada, título, descrição, data, escala, projeção, fonte e atributos.',
            links: [{ t: 'GeoPortal (aba Downloads)', u: 'https://geo.saobernardo.sp.gov.br/' }] }
        ],
        incompleto: [
          { titulo: 'Página de Dados Abertos do Portal da Transparência', texto: 'Explica em linguagem clara o que são dados abertos, cita a Lei 14.129/2021 e o Decreto 21.086/2020 e aponta para receitas, despesas, contratos, obras e emendas.', falta: 'Contato da unidade responsável; licença aberta explícita (hoje há só termos informais e uma nota de isenção); descrição por base; links para o GeoPortal, o Perfil por Bairro, o Painel Estatístico e o Portal da Saúde. O link "Patrimônio Público" aponta para a página de receitas e despesas.',
            links: [{ t: 'Página de Dados Abertos', u: 'https://www.saobernardo.sp.gov.br/web/transparencia/dados-abertos' }] },
          { titulo: 'Perfil Socioeconômico por Bairro 2026 (Planejamento Urbano)', texto: 'Um capítulo por bairro, com população 2000–2025, faixa etária, sexo, cor ou raça, alfabetização, domicílios, serviços básicos, índice de vulnerabilidade (IPVS), renda, matrículas, equipamentos e atividades econômicas. Ano-base 2025, publicado em jun/2026.', falta: 'Só em PDF, que não é formato aberto. Publicar as tabelas em CSV ou XLSX resolve o OD3.2.',
            links: [{ t: 'Perfil Socioeconômico por Bairro', u: 'https://www.saobernardo.sp.gov.br/web/sbc/perfilsocioeconomicobairros' }] }
        ],
        naoTem: [
          { titulo: 'Dados desagregados por bairro e por grupo da população em formato aberto', texto: 'Hoje só em PDF (OD3.2).' },
          { titulo: 'Um ponto central que aponte para todos os sites de dados', texto: 'GeoPortal, estatísticas e saúde estão fora da página de Dados Abertos (OD3.3).' }
        ],
        naoServe: [
          { titulo: 'Patrimônio, Painel Estatístico e lista de espera da Saúde em PDF', texto: 'Úteis como contexto, mas PDF não é dado legível por máquina (OD3.1).', links: [{ t: 'Painel Estatístico', u: 'https://www.saobernardo.sp.gov.br/web/sbc/painel-estatistico' }] }
        ]
      },
      modelos: [
        { nome: 'Portal de dados abertos de Corrientes (Argentina)', cobre: ['OD3.2', 'OD3.3'], texto: 'Exemplo do pacote do Fórum: dados de saúde por faixa etária e sexo; cada base com conteúdo, área responsável, frequência de carga e última atualização; contato e links para outros sites.', u: 'https://datos.ciudaddecorrientes.gov.ar/' },
        { nome: 'Portal de dados abertos de Porto Alegre', cobre: ['OD3.1', 'OD3.3'], texto: 'Cidade brasileira citada como exemplo na página do critério.', u: 'https://dadosabertos.poa.br/' },
        { nome: 'Requisitos de portal de dados abertos (GovEx)', cobre: ['OD3.1', 'OD3.3'], texto: 'Lista de requisitos para avaliar ou montar um portal.', u: 'http://labs.centerforgov.org/open-data/portal-requirements/' }
      ],
      plano: [
        { texto: 'Levantar o que SBC já tem', feito: true },
        { texto: 'Validar a análise internamente', feito: false },
        { texto: 'Receber da equipe as respostas pedidas', feito: false, ancora: 'pedidos-OD3' },
        { texto: 'Página de Dados Abertos: links para GeoPortal, Perfil por Bairro, Painel Estatístico e Saúde; corrigir o link de patrimônio', feito: false },
        { texto: 'Página de Dados Abertos: contato, licença aberta e uma descrição por base', feito: false },
        { texto: 'Publicar as tabelas do Perfil por Bairro em CSV ou XLSX', feito: false },
        { texto: 'Atualizar ou retirar os relatórios mensais de 2021–2023 de receitas e despesas', feito: false },
        { texto: 'Reunir as evidências e preparar a resposta', feito: false },
        { texto: 'Equipe corrige o "Sim" pré-preenchido e insere a resposta', feito: false }
      ],
      pedidos: [
        { texto: 'Qual unidade mantém a página de Dados Abertos e quem pode editá-la', status: 'a_pedir' },
        { texto: 'O que é o portal de dados abertos "em desenvolvimento" citado no PPA 2026–2029 e quando fica pronto', status: 'a_pedir' },
        { texto: 'Se o Planejamento Urbano pode publicar as tabelas do Perfil por Bairro e do Painel Estatístico em CSV ou XLSX', status: 'a_pedir' },
        { texto: 'Se o GeoPortal pode ser apresentado como parte do portal de dados abertos, e quem responde pelas camadas', status: 'a_pedir' }
      ]
    },
    {
      codigo: 'DM2', area: 'DM', ordem: 4,
      titulo: 'Mantendo um inventário de dados abrangente',
      definicao: 'A prefeitura mantém um inventário de dados detalhado, que torna os dados mais localizáveis, acessíveis e bem cuidados.',
      regra: { min: 3, total: 4 }, janela: '24 meses', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'DM2.1', texto: 'Metodologia documentada para coletar e atualizar o inventário no mínimo a cada 24 meses, e cumprida.' },
        { cod: 'DM2.2', texto: 'Pelo menos 80% dos departamentos contribuem com conjuntos de dados para o inventário.' },
        { cod: 'DM2.3', texto: 'O inventário está disponível internamente.' },
        { cod: 'DM2.4', texto: 'Uma versão do inventário está publicada on-line.' }
      ],
      evidencias: ['Cópia do inventário de dados.', 'Processo documentado para coletar e atualizar o inventário.']
    },
    {
      codigo: 'DM3', area: 'DM', ordem: 5,
      titulo: 'Compartilhando dados',
      definicao: 'A prefeitura tem processos documentados e fáceis de usar para compartilhar dados, inclusive protegidos, internamente e com parceiros externos.',
      regra: { min: 3, total: 4 }, janela: 'Sem janela', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'DM3.1', texto: 'Processo documentado para compartilhar dados interna e externamente, com orientação sobre quando firmar acordos de compartilhamento.' },
        { cod: 'DM3.2', texto: 'Processo documentado para decidir quando e como abrir dados, avaliando oportunidades, danos e pedidos anteriores.' },
        { cod: 'DM3.3', texto: 'Método simples para receber pedidos internos e externos de dados, com prazo de resposta para os responsáveis.' },
        { cod: 'DM3.4', texto: 'Uso de sistemas de dados compartilhados ou integrados entre secretarias, níveis de governo ou parceiros.' }
      ],
      evidencias: ['Link de canal on-line para pedir ou compartilhar dados.', 'Políticas ou processos de compartilhamento e de abertura de dados.', 'Inventário ou cópia de um acordo de compartilhamento de dados vigente.']
    },
    {
      codigo: 'DM4', area: 'DM', ordem: 6,
      titulo: 'Melhorando a qualidade dos dados',
      definicao: 'A prefeitura tem e aplica políticas ou práticas documentadas para melhorar a qualidade dos dados.',
      regra: { min: 4, total: 5 }, janela: 'Sem janela', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'DM4.1', texto: 'Conjuntos de dados publicados conforme pelo menos um padrão de dados cívicos (ex.: GTFS para transporte).' },
        { cod: 'DM4.2', texto: 'Processos para documentar origem, método de coleta e problemas de qualidade, e para corrigi-los.' },
        { cod: 'DM4.3', texto: 'Padrões documentados de interoperabilidade interna (campos comuns, como endereço, consistentes em toda a prefeitura).' },
        { cod: 'DM4.4', texto: 'Metadados completos e de qualidade para dados protegidos e abertos.' },
        { cod: 'DM4.5', texto: 'Busca ativa de retorno da comunidade para corrigir dados imprecisos, incompletos ou enviesados.' }
      ],
      evidencias: ['Documentos sobre como a qualidade é avaliada e corrigida.', 'Link de um conjunto aberto que segue padrão cívico, com o nome do padrão.', 'Orientações internas de metadados e padrões.', 'Evidência de retorno contínuo da comunidade sobre a qualidade.']
    },
    {
      codigo: 'DM5', area: 'DM', ordem: 7,
      titulo: 'Protegendo a privacidade e a confidencialidade dos dados',
      definicao: 'A prefeitura documentou políticas ou práticas para proteger a privacidade e a confidencialidade dos dados que mantém.',
      regra: { min: 2, total: 3 }, janela: 'Anual', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'DM5.1', texto: 'Processo para envolver moradores e partes externas na gestão de riscos de privacidade.' },
        { cod: 'DM5.2', texto: 'Processo documentado para evitar liberar por engano dados privados, sensíveis ou confidenciais.' },
        { cod: 'DM5.3', texto: 'Informação e treinamento para a equipe, no mínimo anual, sobre riscos de privacidade.' }
      ],
      evidencias: ['Resumo das práticas de proteção de dados pessoais.', 'Memorandos ou materiais de treinamento sobre riscos de privacidade.', 'Evidência de treinamentos anuais.'],
      nota: 'O Decreto 22.963/2025 (Programa de Proteção de Dados) é o ponto de partida provável.'
    },
    {
      codigo: 'DM6', area: 'DM', ordem: 8,
      titulo: 'Gerenciando a segurança dos dados',
      definicao: 'A prefeitura documentou políticas ou práticas para gerenciar riscos de violação, perda ou manipulação não autorizada de dados.',
      regra: { min: 3, total: 3 }, janela: 'Anual', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'DM6.1', texto: 'Responsável por segurança da informação que aconselha o prefeito no mínimo uma vez por ano.' },
        { cod: 'DM6.2', texto: 'Plano de segurança com continuidade, recuperação e avaliação regular de riscos (pode ser por terceiros).' },
        { cod: 'DM6.3', texto: 'Treinamentos anuais da equipe sobre riscos de violação, perda ou manipulação de dados.' }
      ],
      evidencias: ['Cópia da política ou prática documentada.', 'Evidência de treinamentos anuais.'],
      nota: 'Ponto de partida provável: Decreto 22.453/2023 (Política de Segurança da Informação).'
    },
    {
      codigo: 'DM7', area: 'DM', ordem: 9,
      titulo: 'Práticas de dados qualitativos',
      definicao: 'A prefeitura tem estratégia ou processo documentado para coletar rotineiramente dados qualitativos e sugestões da comunidade para informar decisões.',
      regra: { min: 2, total: 2 }, janela: 'Sem janela', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'DM7.1', texto: 'Métodos qualitativos rigorosos (grupos, entrevistas, perguntas abertas), éticos, representativos e/ou participativos, usados para informar decisões.' },
        { cod: 'DM7.2', texto: 'Protocolo de pesquisa qualitativa revisado por especialista ou baseado em referência validada.' }
      ],
      evidencias: ['Estratégia ou processo documentado de coleta qualitativa.', 'Resumo de como se garante que os métodos são éticos e participativos.', 'Exemplo de protocolo revisado por especialista.', 'Exemplo de decisão informada por escuta da comunidade.']
    },
    {
      codigo: 'DM8', area: 'DM', ordem: 10,
      titulo: 'Dados desagregados para tomada de decisões',
      definicao: 'A prefeitura coleta e analisa dados desagregados por subgrupos geográficos e demográficos para decidir sobre suas prioridades.',
      regra: { min: 2, total: 2 }, janela: 'Sem janela', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'DM8.1', texto: 'Padrão de dados demográficos documentado e usado da mesma forma em toda a prefeitura.' },
        { cod: 'DM8.2', texto: 'Coleta e compartilhamento de dados desagregados por território e por raça, etnia, sexo, idade, deficiência, renda etc.' }
      ],
      evidencias: ['Exemplos de conjuntos desagregados.', 'Padrão demográfico seguido por vários órgãos.', 'Como a equipe acessa o padrão ou é treinada nele.']
    },
    {
      codigo: 'DM9', area: 'DM', ordem: 11,
      titulo: 'Padrão de serviço de dados',
      definicao: 'A prefeitura tem um padrão de qualidade documentado e público para desenvolver serviços de dados e análises.',
      regra: { min: 3, total: 4 }, janela: 'Sem janela', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'DM9.1', texto: 'O padrão se compromete com a melhoria contínua e trata dados e análises como serviços integrais.' },
        { cod: 'DM9.2', texto: 'Entrega acessível, confiável, segura e ética, guiada pelas necessidades do usuário e com metas de desempenho.' },
        { cod: 'DM9.3', texto: 'Boas práticas para desenvolver, implementar e garantir a qualidade dos serviços de dados.' },
        { cod: 'DM9.4', texto: 'Equipe que projeta e executa o padrão, governança e orientação para as equipes.' }
      ],
      evidencias: ['Padrão de serviço de dados documentado e público.', 'Resumo da equipe, da governança e da orientação de adoção.'],
      nota: 'Pré-requisito do CI2.1 e do OD4.1.'
    },
    {
      codigo: 'CI1', area: 'CI', ordem: 12,
      titulo: 'Treinamento e colaboração no uso de dados com a comunidade',
      definicao: 'A prefeitura apoia esforços para educar e capacitar membros da comunidade a entender e usar seus serviços de dados e análises.',
      regra: { min: 2, total: 2 }, janela: 'Anual', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'CI1.1', texto: 'No último ano, pelo menos três treinamentos para membros da comunidade sobre uso de dados abertos ou da prefeitura.' },
        { cod: 'CI1.2', texto: 'Processo ou estratégia documentada para que serviços de dados cheguem a comunidades de difícil acesso.' }
      ],
      evidencias: ['Processo documentado ou exemplos de engajamento de comunidades de difícil acesso.', 'Evidência de treinamentos para a comunidade nos últimos 12 meses.', 'Resumo dos esforços de capacitação de parceiros.', 'Resultados de colaboração com a comunidade usando dados abertos.'],
      pistas: [
        { sub: 'CI1.1', citado: 'Tutoriais (Prodigi, Atende Bem, GeoPortal, Cadastro Multifinalitário)', leitura: 'Tutorial escrito conta como guia (OD2), não como treinamento. O Prodigi é interno. Viável: oficinas abertas (GeoPortal, portal de dados, painel de emendas) até o envio.' },
        { sub: 'CI1.2', citado: 'Voz da Gente; ações com comunidades indígenas', leitura: 'Pede processo documentado de acesso a dados. Os exemplos são de engajamento e serviços urbanos; servem de base se houver documento que faça essa ligação.' }
      ]
    },
    {
      codigo: 'CI2', area: 'CI', ordem: 13,
      titulo: 'Prestação de serviços de análises de dados',
      definicao: 'A prefeitura desenvolve serviços de análises de dados para usuários internos e moradores, usando dados do seu inventário.',
      regra: { min: 2, total: 3 }, janela: 'Sem janela', ficha: 'nao_iniciada',
      plataforma: { resposta: 'Sim (pré-preenchido)', nota: 'Veio do Raio-X, em que a resposta de Impacto na comunidade foi aceita.' },
      subcriterios: [
        { cod: 'CI2.1', texto: 'Usa o processo do padrão de serviço de dados (DM9) para criar serviços de análises.' },
        { cod: 'CI2.2', texto: 'Pelo menos um serviço de análises para usuários internos e um para moradores e parceiros.' },
        { cod: 'CI2.3', texto: 'Melhoria contínua e iterativa de serviços de análises, com impacto comprovado.' }
      ],
      evidencias: ['Exemplos de uso do padrão de serviço de dados.', 'Exemplos de serviços de análises internos e externos.', 'Exemplo de melhoria contínua com impacto comprovado.'],
      pistas: [
        { sub: 'CI2.1', citado: 'Carta de Serviços (Atende Bem)', leitura: 'A Carta de Serviços não é padrão de serviço de dados. Sem DM9, o CI2.1 não fecha; mirar em CI2.2 + CI2.3.' },
        { sub: 'CI2.2', citado: 'Voz da Gente; vagas na educação; medicamentos; Cadastro Multifinalitário', leitura: 'Candidatos fortes: interno, Gesgov; externo, GeoPortal ou painel de emendas. Provável de atender.' },
        { sub: 'CI2.3', citado: 'Voz da Gente; Gesgov; MPGov', leitura: 'Pede impacto comprovado; o Gesgov é de ago/2026. "MPGov" não aparece nas fontes: a confirmar o que é.' }
      ]
    },
    {
      codigo: 'CI3', area: 'CI', ordem: 14,
      titulo: 'Promoção de dados e evidências',
      definicao: 'A prefeitura usa as evidências e os dados que produz para contribuir com uma base de conhecimento mais ampla e estimular parceiros externos a fazer o mesmo.',
      regra: { min: 1, total: 2 }, janela: 'Anual', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'CI3.1', texto: 'Pelo menos duas vezes no último ano, compartilhou proativamente evidências ou dados com parceiros externos.' },
        { cod: 'CI3.2', texto: 'No último ano, apoiou parceiros externos a adotar uma prática baseada em evidências.' }
      ],
      evidencias: ['Exemplos de compartilhamento (artigo, apresentação, aprendizagem entre pares, reconhecimento estadual ou federal). Site e redes sociais não contam.', 'Exemplos de parceiros que adotaram prática baseada em evidências.'],
      pistas: [
        { sub: 'CI3.1', citado: 'SDETJ com empresas; Rede Cidades + Inteligentes; selo da Ouvidoria; levantamento de selos', leitura: 'Candidatos: oficina da Rede Cidades + Inteligentes com o IPT (07/10/2026) e selos que exigiram envio de dados. Provável de atender.' },
        { sub: 'CI3.2', citado: 'SDETJ; Mercado Livre/Shopee; evento de eletromobilidade', leitura: 'Evento não basta. Fraco hoje, mas basta 1 de 2: o CI3.1 resolve.' }
      ]
    },
    {
      codigo: 'OD2', area: 'OD', ordem: 15,
      titulo: 'Orientações ao usuário para dados abertos e compartilhados',
      definicao: 'A prefeitura oferece orientações claras para que usuários internos e externos acessem, analisem e usem seus dados.',
      regra: { min: 3, total: 4 }, janela: 'Sem janela', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'OD2.1', texto: 'Explica o significado e os valores possíveis de cada campo.' },
        { cod: 'OD2.2', texto: 'Explica o contexto e o conteúdo dos conjuntos de dados.' },
        { cod: 'OD2.3', texto: 'Explica as limitações: qualidade, método de coleta, dados ausentes, privacidade e escopo.' },
        { cod: 'OD2.4', texto: 'Explica quem é o responsável, como os dados são produzidos e com que frequência são atualizados.' }
      ],
      evidencias: ['Links para as orientações aos usuários (no portal ou internas).']
    },
    {
      codigo: 'OD4', area: 'OD', ordem: 16,
      titulo: 'Informações sobre os usuários de dados',
      definicao: 'A prefeitura acompanha quem usa seus dados e incorpora as necessidades dos usuários aos serviços de dados e às práticas de transparência.',
      regra: { min: 2, total: 2 }, janela: '24 meses', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'OD4.1', texto: 'Pesquisa com usuários (entrevistas, oficinas, questionários) incorporada ao desenho dos serviços de dados.' },
        { cod: 'OD4.2', texto: 'Análise de downloads, acessos, pedidos de informação e outras métricas de demanda para priorizar dados e melhorias.' }
      ],
      evidencias: ['Link para dados de uso (ex.: estatísticas de download) e como são usados.', 'Resumo das pesquisas com usuários e de como influenciaram os serviços.']
    }
  ]
};
