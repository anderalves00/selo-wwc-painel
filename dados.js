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

window.PAINEL = {
  atualizado: '2026-10-21',
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
      resumo: 'Nenhum ato de SBC cobre o DM1 hoje. O Decreto 22.963/2025 tem aprovação do prefeito e um comitê, mas trata só de proteção de dados (LGPD), não marca reuniões e não tem atas localizadas. Recomendação: um decreto de governança de dados que cubra os três subcritérios.',
      subcriterios: [
        { cod: 'DM1.1', texto: 'Aprovação executiva e uma estratégia de dados de toda a prefeitura, estatuto, declaração de objetivos ou conjunto documentado de metas e objetivos.', situacao: 'parcial', classificacao: 'criar',
          nota: 'O Decreto 22.963/2025 tem aprovação do prefeito e objetivos, mas só de proteção de dados. Falta o documento que oriente a governança de dados como um todo (uso, qualidade, abertura).' },
        { cod: 'DM1.2', texto: 'O grupo encarregado da estratégia e governança de dados se reúne no mínimo a cada trimestre para desenvolver responsabilidades definidas.', situacao: 'nao_tem', classificacao: 'criar_risco',
          nota: 'Não há grupo com reuniões e atas localizadas. Exige pelo menos duas reuniões com ata antes de 18/12. Pode mudar se a equipe tiver atas do CGPD ou do GT do SBC+i.' },
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
          { titulo: 'Decreto 22.963/2025: Programa de Proteção de Dados e CGPD', texto: 'Aprovado pelo prefeito, cria o Comitê Gestor de Proteção de Dados (Controladoria, Encarregado e representantes das secretarias) com atribuições definidas.', falta: 'Escopo além da LGPD; periodicidade de reunião; atas. As portarias de nomeação dos membros não foram localizadas.',
            links: [{ t: 'Decreto 22.963/2025, art. 3º', u: 'https://leis.org/2cax4#:~:text=Art.%203%C2%BA' }, { t: 'Publicação oficial (Notícias do Município nº 2529)', u: 'https://www.saobernardo.sp.gov.br/documents/10181/2045904/NM%2B2529%2Bde%2B06.06.2025%2B-%2B%2BConteu%CC%81do%2BIntegral.pdf/105bbfa3-9bc7-fe37-c79f-75e1150b4c10' }] },
          { titulo: 'GT Cidade Inteligente do SBC+i (Portaria 10.500/2026)', texto: 'O portal do SBC+i cita um GT de 2026 como instância do programa, que integra "dados e governança".', falta: 'A portaria não foi localizada publicada. Não se sabe quem assinou, se o GT trata de dados nem se se reúne.',
            links: [{ t: 'Portal SBC+i', u: 'https://cidadeinteligente.saobernardo.sp.gov.br' }] },
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
          { titulo: 'PDTIC 2022–2025 e relatórios de acompanhamento', texto: 'Plano de TI, vencido. As reuniões do grupo eram só sugeridas, e os 4 relatórios (dez/2022 a jun/2024) não registram reuniões.', links: [{ t: 'Página do PDTIC', u: 'https://www.saobernardo.sp.gov.br/web/sbc/pd-tic' }] },
          { titulo: 'Decreto 22.453/2023: Política de Segurança da Informação', texto: 'Serve ao DM6 (segurança), não ao DM1.', links: [{ t: 'Decreto 22.453/2023', u: 'https://leis.org/0wdhm' }] },
          { titulo: 'Gesgov', texto: 'Plataforma de acompanhamento de metas anunciada em ago/2026, sem ato, contrato nem página oficial localizados. Não é evidência de governança de dados.' }
        ]
      },
      decisao: {
        titulo: 'Qual instrumento propor para o DM1',
        recomendada: 'A',
        opcoes: [
          { id: 'A', nome: 'Decreto novo de política de governança de dados', descricao: 'Objetivos, princípios e um comitê com reunião no mínimo trimestral, ancorado no DTI (competência do art. 645, XIII), com a Controladoria e o Encarregado como membros.',
            pros: 'Escopo certo para o DM1.1 e o DM1.3; competência legal clara; pode abrigar também a política de dados abertos (OD1).', contras: 'Trâmite completo de ato novo; precisa escrever a divisão de papéis com o CGPD para não haver sobreposição.' },
          { id: 'B', nome: 'Ampliar o Decreto 22.963/2025', descricao: 'Transformar o CGPD em comitê de proteção e governança de dados, acrescentando estratégia, princípios e periodicidade.',
            pros: 'Aproveita um colegiado que já existe e pode já ter membros nomeados.', contras: 'A coordenação é da Controladoria, enquanto a lei dá a estratégia de dados ao DTI; mistura conformidade com uso de dados.' },
          { id: 'C', nome: 'Usar o GT Cidade Inteligente (SBC+i)', descricao: 'O GT seria o grupo do DM1.2, com a estratégia aprovada pelo prefeito em documento à parte.',
            pros: 'Aproveita o programa SBC+i.', contras: 'A portaria não foi localizada; não se sabe se trata de dados; GT costuma ser temporário.' }
        ],
        nota: 'Se a equipe tiver atas do CGPD ou do GT (pedidos abaixo), as opções B ou C ganham força para o DM1.2.'
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
        { texto: 'Decidir o instrumento (opções A, B ou C)', feito: false, ancora: 'decisao-DM1' },
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
        { texto: 'Portarias de nomeação do CGPD e atas ou pautas de reuniões desde jun/2025', status: 'a_pedir' },
        { texto: 'Portaria 10.500/2026, composição do GT Cidade Inteligente e atas ou pautas', status: 'a_pedir' },
        { texto: 'Documento do DTI produzido com base no art. 645, XIII (estratégia, padrões ou políticas de dados)', status: 'a_pedir' },
        { texto: 'Se o termo de referência do PDTIC 2026–2029 inclui estratégia de dados', status: 'a_pedir' },
        { texto: 'Registros de reuniões de coordenação do SBC+i ou do Gesgov que tratem de dados', status: 'a_pedir' }
      ]
    },

    {
      codigo: 'OD1', area: 'OD', ordem: 2,
      titulo: 'Política de dados abertos',
      definicao: 'A prefeitura possui uma política de dados abertos formalizada e disponível ao público, com compromisso de transparência e divulgação proativa de dados.',
      regra: { min: 3, total: 4 }, janela: 'Sem janela',
      plataforma: { resposta: 'Vazio', nota: 'Na revisão do Raio-X, Dados Abertos foi rebaixado para "Em andamento": o portal atende à obrigação legal de transparência, mas falta uma política formal de dados abertos voltada a reuso e às demandas da comunidade.' },
      ficha: 'nao_iniciada',
      subcriterios: [
        { cod: 'OD1.1', texto: 'A política cria uma estrutura de governança para a liberação proativa de informações públicas.' },
        { cod: 'OD1.2', texto: 'A política inclui planos para coletar feedback público regular sobre o programa de dados abertos.' },
        { cod: 'OD1.3', texto: 'A política garante, com relatórios no mínimo anuais, a revisão periódica do texto e da implementação.' },
        { cod: 'OD1.4', texto: 'A política se compromete a divulgar as decisões sobre coleta, priorização, armazenamento, uso e publicação de dados, explicando o que não pode ser liberado.' }
      ],
      evidencias: ['Link para a política de dados abertos publicada.', 'Cópia do relatório anual mais recente, se a política o exigir.'],
      nota: 'Pode entrar no mesmo decreto do DM1 (opção A). A decisão fica para esta ficha.'
    },
    {
      codigo: 'OD3', area: 'OD', ordem: 3,
      titulo: 'Portal de dados abertos',
      definicao: 'A prefeitura publica dados abertos em um local central e público on-line.',
      regra: { min: 3, total: 3 }, janela: 'Sem janela',
      plataforma: { resposta: 'Sim (pré-preenchido)', alerta: 'A resposta veio pré-preenchida com "Sim", mas a revisão do Raio-X rebaixou Dados Abertos para "Em andamento". Corrigir ao inserir.' },
      ficha: 'nao_iniciada',
      subcriterios: [
        { cod: 'OD3.1', texto: 'Os dados abertos são legíveis por máquina, podem ser baixados e são gratuitos.' },
        { cod: 'OD3.2', texto: 'Quando possível, preservando a privacidade, os dados são publicados desagregados por subgrupos geográficos e demográficos.' },
        { cod: 'OD3.3', texto: 'Os dados são contextualizados com linguagem clara, contatos, políticas e documentos; outros sites de dados ficam vinculados ao portal principal.' }
      ],
      evidencias: ['Link para o portal de dados abertos. Se houver vários sites, um deles deve apontar para os outros.']
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
