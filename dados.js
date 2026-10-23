// Conteúdo do painel. É o único arquivo que muda a cada avanço do trabalho.
// Fonte da verdade: as fichas em .claude/docs/fichas/ do repositório privado Selo_WWC.
// Nada de nomes de servidores, e-mails ou telefones aqui: o painel é público (publicar.ps1 verifica).
// definicao e subcriterios[].texto: tradução clara feita a partir do original em inglês (decisão do usuário, 2026-10-23); tabela em fontes/wwc/traducao-clara.json.
// Relatório de aderência, por critério (opcional): relatorio: { status: 'rascunho' | 'final', url, pendencias, atualizado: 'AAAA-MM-DD' }.
// Sem url, o botão aparece desativado. O documento em si nunca entra neste repositório: só o link.
// Resposta para a plataforma (começa quando a classificação chega a 'atende' ou 'juntando'):
//   resposta: { marcar: 'Sim' | 'Em andamento' | 'Não',
//     blocos: [{ sub: 'DM1.1', status: 'a_redigir' | 'rascunho' | 'redigido' | 'validado', texto, falta: [], ideias: [] }],
//     evidencias: [{ titulo, sub, status: 'a_obter' | 'a_criar' | 'em_revisao' | 'pronta', link }] }
//   No texto, marcar o que falta como [PENDENTE: descrição]; o painel destaca.

const LEIS = 'https://leis.org/prefeitura/sp/sao-bernardo-do-campo/lei/';
const NM2676 = 'https://www.saobernardo.sp.gov.br/documents/10181/2361282/NM+2676+de+07.08.2026+-+Conteu%CC%81do+Integral.pdf/11eeb475-0287-4c05-e8e2-aea4d61e05fc#page=16';
const L7367 = LEIS + 'lei-ordinaria/2025/7367/lei-ordinaria-n-7367-2025-dispoe-sobre-a-estrutura-administrativa-do-municipio-de-sao-bernardo-do-campo-alteracao-das-leis-municipais-n-s-2240-de-13-de-agosto-de-1976-e-6745-de-7-de-fevereiro-de-2019-e-da-outras/';

// Cadastro de normas e documentos citados. Itens do critério apontam para cá com refs: ['chave'].
// t = nome completo; d = do que trata, em uma frase; u = link (sem u: documento interno, sem link público).
window.REFS = {
  lei7367_645: { t: 'Lei nº 7.367/2025, art. 645, inciso XIII', d: 'Estrutura administrativa da Prefeitura. O inciso XIII dá ao Departamento de Tecnologia da Informação (DTI) a tarefa de "definir a estratégia de dados do Município, estabelecendo princípios, padrões e políticas para a gestão de dados".', u: L7367 + '#:~:text=Art.%20645.' },
  lei7367_35: { t: 'Lei nº 7.367/2025, art. 35', d: 'Seção de Transparência da Controladoria (CG-001): coordena o Portal da Transparência e a capacitação em dados abertos.', u: L7367 + '#:~:text=Art.%2035.' },
  dec22963: { t: 'Decreto nº 22.963/2025', d: 'Cria o Programa de Proteção de Dados (LGPD) e o Comitê Gestor de Proteção de Dados (CGPD), coordenado pela Controladoria. Atribuições do comitê no art. 4º.', u: 'https://leis.org/2cax4#:~:text=Art.%203%C2%BA' },
  cgpd: { t: 'CGPD: Comitê Gestor de Proteção de Dados', d: 'Colegiado criado pelo Decreto nº 22.963/2025 (art. 3º), com membros nomeados pela Portaria nº 10.510/2026. Escopo atual: LGPD. A 1ª reunião foi proposta para setembro de 2026.', u: 'https://leis.org/2cax4#:~:text=Art.%203%C2%BA' },
  nm2529: { t: 'Notícias do Município nº 2529, de 06/06/2025, p. 8 a 10', d: 'Publicação oficial do Decreto nº 22.963/2025 e da Portaria nº 10.364/2025 (designa a Encarregada de Proteção de Dados).', u: 'https://www.saobernardo.sp.gov.br/documents/10181/2045904/NM%2B2529%2Bde%2B06.06.2025%2B-%2B%2BConteu%CC%81do%2BIntegral.pdf/105bbfa3-9bc7-fe37-c79f-75e1150b4c10#page=8' },
  port10510: { t: 'Portaria nº 10.510/2026 (Notícias do Município nº 2676, p. 16)', d: 'Nomeia os 8 membros do CGPD: 3 da Controladoria, 4 da Secretaria de Administração e 1 da Procuradoria.', u: NM2676 },
  port10500: { t: 'Portaria nº 10.500/2026 (Notícias do Município nº 2661, p. 2)', d: 'Designa os 5 secretários do Grupo de Trabalho Cidade Inteligente (programa SBC+i). Não define atribuições nem reuniões.', u: 'https://www.saobernardo.sp.gov.br/documents/10181/2361282/NM+2661+de+08.07.2026+-+Conteu%CC%81do+Integral.pdf/505b66ea-e307-5c8c-5bf4-1ce932e5ede3#page=2' },
  proc65650: { t: 'Processo SB nº 65650/2026 (interno, sem link público)', d: 'Processo da Portaria nº 10.500/2026 (GT Cidade Inteligente). Lido: tem só a minuta e a publicação, sem atas; arquivado em 29/07/2026.' },
  proc100144: { t: 'Processo SB nº 100144/2026 (interno, sem link público)', d: 'Projeto de lei e minuta de decreto do Programa SBC+i. A Procuradoria pediu para reescrever o art. 5º do decreto.' },
  proc101842: { t: 'Processo SB nº 101842/2026 (interno, sem link público)', d: 'Proposta do DTI e minuta de decreto da Política e do Programa Municipal de Governança Digital e de Dados (40 artigos), com o Comitê de Governança Digital e de Dados (CGD). Enviada à Procuradoria em 23/10/2026.' },
  prop_sbci: { t: 'Proposta de ajustes ao decreto do SBC+i (painel)', d: 'Texto do decreto com as mudanças sugeridas para o DM1 (reunião trimestral com ata, princípios de uso ético de dados), cada uma explicada. Substituída em 23/10/2026: o SB 101842/2026 já cobre o que ela acrescentava. Fica como registro.', u: 'proposta-sbc-mais-i.html' },
  dec23236: { t: 'Decreto nº 23.236/2026, art. 5º', d: 'Grupo de Trabalho de Desburocratização. Modelo de redação do próprio município: reunião mensal e registro de todas as reuniões em processo administrativo.', u: LEIS + 'decreto/2026/23236/decreto-n-23236-2026-dispoe-sobre-a-criacao-do-grupo-de-trabalho-municipal-de-desburocratizacao-gtmd-do-ambiente-de-negocios-visando-o-cumprimento-dos-requisitos-do-programa-facilita-sp-municipios-e-a-evolucao-da-classificacao-municipal-na-jornada-de-simplificacao-e-da-outras/#:~:text=Art.%205%C2%BA' },
  lei7578: { t: 'Lei nº 7.578/2026, art. 2º', d: 'Política Municipal de Inovação. Entre os princípios, "transparência e governança colaborativa" e "privacidade e proteção de dados".', u: LEIS + 'lei-ordinaria/2026/7578/lei-ordinaria-n-7578-2026-institui-a-politica-municipal-de-inovacao-dispoe-sobre-instrumentos-de-fomento-a-pesquisa-cientifica-ao-desenvolvimento-tecnologico-e-a-inovacao-no-municipio-de-sao-bernardo-do-campo-e-da-outras/#:~:text=Art.%202%C2%BA' },
  pdtic: { t: 'PDTIC: Plano Diretor de Tecnologia da Informação', d: 'Plano de TI. O de 2022–2025 venceu; o de 2026–2029 foi contratado em jul/2026 e trata de governança de TI, não de estratégia de dados.', u: 'https://www.saobernardo.sp.gov.br/web/sbc/pd-tic' },
  dec18882: { t: 'Decreto nº 18.882/2014', d: 'Regulamenta a Lei de Acesso à Informação na Prefeitura: representantes por órgão (art. 7º), negativas fundamentadas e publicação anual de documentos sigilosos.', u: LEIS + 'decreto/2014/18882/decreto-n-18882-2014-regulamenta-o-procedimento-de-acesso-a-informacoes-publicas-garantido-no-inciso-xxxiii-do-art-5-no-inciso-ii-do-art-37-e-no-2-do-art-216-da-constituicao-federal-regulamentados-pela-lei-federal-n-12527-de-18-de-novembro-de-2011-e-da-outras/' },
  lei14129: { t: 'Lei Federal nº 14.129/2021 (Governo Digital), arts. 29 a 37', d: 'Regras federais de abertura de dados. Só valem para o município se ele as adotar por ato próprio.', u: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14129.htm#art29' },
  ind14825: { t: 'Indicação nº 14.825/2025 da Câmara Municipal', d: 'A Câmara pediu ao Executivo estudos para a Política Municipal de Dados Abertos; o Executivo respondeu só que encaminhou à secretaria.', u: 'https://www.camarasbc.sp.gov.br/documento/indicacao-no-14825-2025-547418' },
  ppa720: { t: 'PPA 2026–2029, Anexo V, item 720', d: 'Resposta oficial a uma sugestão de "Portal de Dados Abertos Municipal": não incluída por existir "iniciativa semelhante em desenvolvimento".', u: 'https://www.saobernardo.sp.gov.br/web/transparencia/ppa' },
  pag_dados_abertos: { t: 'Página "Dados abertos" do Portal da Transparência', d: 'Página atual de dados abertos da Prefeitura: só texto, sem lista de bases nem links.', u: 'https://www.saobernardo.sp.gov.br/web/transparencia/dados-abertos' },
  perfil_bairros: { t: 'Perfil Socioeconômico por Bairro 2026 (Secretaria de Planejamento Urbano)', d: '26 capítulos, um por bairro ou região, com idade, sexo, cor ou raça, vulnerabilidade e renda (esta do Censo 2010). Só em PDF.', u: 'https://www.saobernardo.sp.gov.br/web/sbc/perfilsocioeconomicobairros' },
  ibge_microdados: { t: 'IBGE: microdados da amostra do Censo 2022 (31/08/2026)', d: 'Trazem a renda do Censo 2022. Acesso público só por estado; acesso controlado (gov.br e termo) por Áreas de Ponderação.', u: 'https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/47888-ibge-disponibiliza-microdados-da-amostra-do-censo-demografico-2022-com-novo-modelo-de-acesso-e-reforco-a-confidencialidade' },
  gcp: { t: 'Sistema de Gastos com Pessoal', d: 'Relação de servidores, estagiários e remuneração. Em 22/10/2026 a pesquisa de servidores devolveu erro 404.', u: 'https://gcp.saobernardo.sp.gov.br/gastos-com-pessoal/' },
  contratos: { t: 'Sistema de Contratos', d: 'Contratos e aditamentos, com exportação em CSV, Excel e PDF por ano.', u: 'https://transparencia.saobernardo.sp.gov.br/contratos' },
  geoportal: { t: 'GeoPortal (aba Downloads)', d: '13 camadas de mapa em shapefile e o dicionário de dados, sem cadastro.', u: 'https://geo.saobernardo.sp.gov.br/' },
  painel_estatistico: { t: 'Painel Estatístico (Secretaria de Planejamento Urbano)', d: 'Estatísticas do município de 2019 a 2025, só em PDF.', u: 'https://www.saobernardo.sp.gov.br/web/sbc/painel-estatistico' }
};

window.PAINEL = {
  atualizado: '2026-10-23',
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

  // Histórico (regra do usuário, 2026-10-23): só o avanço de cada critério, começando pelo código ("DM1: ..."),
  // com breve contexto e o que mudou no entendimento. Ajuste de layout ou correção de link do painel não entra.
  historico: [
    { data: '2026-10-23', texto: 'DM1 e OD1: as recomendações passam a ter versões. Como se trata de texto normativo, que cada membro da equipe pode ler de um jeito, nenhuma versão é apagada: cada uma fica com a data, a base documental e o motivo da troca. DM1: v01 (ajustes ao decreto do SBC+i, substituída), v02 (o decreto do DTI como foi redigido, com a relação de cada artigo com a WWC, vigente) e v03 (o mesmo decreto com ajustes para a WWC, em preparo). OD1: v01 (minuta atual) e v02 (alinhada ao novo decreto, em preparo).' },
    { data: '2026-10-23', texto: 'DM1: o DTI enviou à Procuradoria a minuta do decreto da Política e do Programa Municipal de Governança Digital e de Dados (SB 101842/2026). Publicado antes de 18/12, ele atende o DM1.1 e o DM1.3, ou seja, 2 de 3, e passa a ser o veículo principal do critério. O comitê que ele cria (CGD) atende o DM1.2 no desenho, mas o decreto só vigora 90 dias depois da publicação: até 18/12, o DM1.2 continua dependendo das atas do CGPD. A proposta de ajustes ao decreto do SBC+i foi substituída e fica como registro; ao decreto do SBC+i fica só a sugestão de um artigo que remeta à governança da nova Política.' },
    { data: '2026-10-23', texto: 'OD1: o SB 101842/2026 não cobre nenhum subcritério do OD1, e a minuta de dados abertos continua necessária, como ato específico do eixo de dados do novo Programa. Ela precisa de ajustes: o novo decreto reserva o CGPD à LGPD e cria o CGD, que passaria a aprovar o plano e o relatório de dados abertos; e o catálogo de bases deve ser um só.' },
    { data: '2026-10-23', texto: 'OD3: consultado o IBGE. A renda do Perfil por Bairro é do Censo 2010 porque a do Censo 2022 não tinha saído; ela saiu em 31/08/2026, nos microdados da amostra. O acesso público vai só até o estado; para chegar perto do bairro, a Prefeitura precisa do acesso controlado (gov.br e termo de confidencialidade), por Áreas de Ponderação. Novo pedido à equipe. O exemplo do catálogo passou a mostrar o texto oficial de cada subcritério e um quadro com os termos técnicos.' },
    { data: '2026-10-23', texto: 'OD3: planilhas do portal conferidas no navegador (renúncia de receita, multas de trânsito, doações e obras de anos anteriores). Elas baixam sem login, mas várias são relatórios formatados para impressão, e não tabelas limpas, o que pesa no OD3.1. O exemplo do catálogo ganhou a coluna "Ano de referência dos dados", separada da data de publicação: o Perfil por Bairro é a edição 2026, mas a renda vem do Censo 2010, e o catálogo precisa deixar isso claro para atender o OD3.3.' },
    { data: '2026-10-22', texto: 'OD3: novo exemplo visual de como a página de Dados Abertos ficaria como portal central (catálogo com links reais, contato, licença e política), com botão no cartão do OD3. Decidido manter o "Sim" na plataforma, a confirmar com a equipe; para ele se sustentar, o catálogo e as planilhas do Perfil por Bairro precisam estar publicados antes do envio.' },
    { data: '2026-10-22', texto: 'OD3: ficha aprofundada. O inventário do menu do Portal da Transparência achou dados em formato aberto em pelo menos 13 lugares (entre eles renúncia de receita, multas de trânsito, doações, obras de anos anteriores e recursos recebidos), e a página de Dados Abertos não aponta para nenhum deles. O plano passa a ter um catálogo com uma linha e um link por base. Os 26 capítulos do Perfil por Bairro seguem o mesmo modelo de 17 tabelas; a renda está num gráfico, com dados de 2010. O texto pré-preenchido na plataforma diz que o patrimônio é legível por máquina, mas ele só está em PDF. Dois pedidos novos à equipe.' },
    { data: '2026-10-22', texto: 'OD1: lida a resposta do Executivo à Indicação nº 14.825/2025 da Câmara (Ofício nº 4027/2025-SG-011): as sugestões foram só encaminhadas à secretaria competente, sem compromisso. Com isso, não há mais leitura pendente no OD1.' },
    { data: '2026-10-22', texto: 'OD1: lidos o glossário da plataforma e o Fórum da WWC. O glossário define "codificar" como "sistematizar políticas": a WWC exige política escrita, não necessariamente lei ou decreto (corrigida a justificativa). Um texto da WWC de jan/2026 recomenda que o mesmo órgão de governança cuide do DM1 e do OD1: na minuta, a pauta de dados abertos do CGPD passa a ser trimestral.' },
    { data: '2026-10-22', texto: 'OD1: todas as leituras pendentes concluídas e aplicadas à minuta, que passa a 23 artigos. Citações legais conferidas no texto das leis; achada a Indicação nº 14.825/2025 da Câmara, que já pediu a política; a rede de representantes da Controladoria entra como opção para os coordenadores; entram uma cláusula de dados abertos nos contratos novos, download em lote e API, convite à sociedade civil nas reuniões e o cuidado com o cruzamento de bases. Modelos novos: Teresópolis e Osasco, que mostram precedentes brasileiros de escuta pública e relatório anual.' },
    { data: '2026-10-22', texto: 'DM1 e OD1: as recomendações sobre instrumento, colegiado e coordenação passam a ser indicações técnicas, porque a decisão cabe ao município (DTI e Procuradoria). Os cartões do DM1 e do OD1 ganharam um botão no topo para abrir a proposta de texto de cada um.' },
    { data: '2026-10-22', texto: 'OD1: publicada a minuta de decreto da Política Municipal de Dados Abertos, em rascunho, como indicação técnica (a decisão é do município). São 22 artigos e um anexo, cada um com por quê, intenção, de qual modelo veio e qual subcritério atende; os quatro subcritérios estão cobertos. Os pontos de escolha (colegiado, coordenação e data do relatório) estão marcados. Novo pedido à equipe: os temas dos documentos que o DTI vai encaminhar à Procuradoria, para cotejo.' },
    { data: '2026-10-22', texto: 'OD1: lidos por inteiro os decretos de dados abertos federal (8.777/2016), de Porto Alegre, Fortaleza, Caruaru e Aracruz. Aracruz (jul/2026) é o modelo brasileiro mais completo; Caruaru mostra que regulamentar a Lei 14.129 não basta; nenhum tem escuta pública regular, que virá do modelo de Baton Rouge. Faltam 3 escolhas (colegiado, coordenação e data do relatório anual) para redigir a minuta.' },
    { data: '2026-10-22', texto: 'OD1: a ficha ganhou a seção "Por que é preciso um ato normativo", com o que SBC já tem em cada subcritério e por que não basta. Incluída a opção D na decisão do instrumento (capítulo novo no decreto da LAI); a recomendação continua sendo um decreto próprio.' },
    { data: '2026-10-22', texto: 'OD3: ficha em rascunho. O portal tem bases abertas de verdade (contratos e obras em CSV, finanças em XLS, emendas em XLSX e 13 camadas de mapa no GeoPortal com dicionário de dados). Faltam dados por bairro e por grupo da população em formato aberto (o Perfil Socioeconômico por Bairro existe, mas só em PDF), contato, licença e links da página de Dados Abertos para os outros sites. O "Sim" pré-preenchido na plataforma precisa virar "Em andamento".' },
    { data: '2026-10-22', texto: 'OD1: ficha em rascunho. SBC não tem política de dados abertos; o decreto da Lei de Acesso à Informação (18.882/2014) ajuda só em parte. Recomendação: um decreto curto da Política Municipal de Dados Abertos, que também adote o capítulo de abertura de dados da Lei 14.129/2021. Decisão sobre o instrumento em aberto e 4 pedidos à equipe.' },
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
    { data: '2026-10-20', texto: 'Painel criado. Ficha do DM1 em rascunho: análise completa, decisão sobre o instrumento em aberto e 5 pedidos de documentos à equipe.' }
  ],

  criterios: [
    {
      codigo: 'DM1', area: 'DM', ordem: 1, essencial: true,
      titulo: 'Implementando a estratégia e a governança de dados',
      definicao: 'A prefeitura mantém uma lista documentada de responsabilidades de estratégia e governança de dados e se reúne pelo menos a cada trimestre para cumprir essas responsabilidades.',
      regra: { min: 2, total: 3 }, janela: 'Trimestral',
      plataforma: { resposta: 'Em andamento', nota: 'Pré-preenchido a partir do Raio-X de 31/08/2026. A própria resposta enviada admite que faltam registros de reuniões trimestrais do grupo de governança.' },
      ficha: 'rascunho', classificacao: 'criar',
      versoes: [
        { v: 'v01', data: '21/10/2026', situacao: 'substituida', t: 'Ajustes ao decreto do SBC+i', u: 'proposta-sbc-mais-i.html',
          d: 'Acrescentava ao GT do SBC+i competências de dados, reunião trimestral com ata, objetivos, princípios e relatório anual. Substituída em 23/10/2026: o decreto de governança digital e de dados do DTI cobre tudo isso, e manter as duas criaria dois colegiados de dados.' },
        { v: 'v02', data: '23/10/2026', situacao: 'vigente', t: 'Decreto de Governança Digital e de Dados, como o DTI redigiu', u: 'dm1-v02-governanca-digital.html',
          d: 'Texto integral da minuta do SB 101842/2026, com a relação de cada artigo com a WWC. Publicado antes de 18/12, atende o DM1.1 e o DM1.3. Ao SBC+i fica só uma remissão à nova Política.' },
        { v: 'v03', data: '—', situacao: 'em_preparo', t: 'Decreto de Governança Digital e de Dados com ajustes para a WWC',
          d: 'O mesmo decreto com ajustes propostos e explicados (vigência, "uso ético", objetivos de dados, dados abertos entre os atos específicos), depois de um estudo detalhado da v02 contra o que a WWC pede.' }
      ],
      propostas: [{ t: 'Proposta de ajustes ao decreto do Programa SBC+i', u: 'proposta-sbc-mais-i.html', nota: 'Substituída em 23/10/2026, fica como registro: o decreto de governança digital e de dados do DTI (SB 101842/2026) já cobre o que esta proposta acrescentava ao DM1.' }],
      resumo: 'Nenhum ato em vigor cobre o DM1. Em 23/10/2026 o DTI enviou à Procuradoria a minuta do decreto da Política e do Programa Municipal de Governança Digital e de Dados (SB 101842/2026). Publicado antes de 18/12, ele atende o DM1.1 e o DM1.3 (2 de 3). O comitê que criaria (CGD) se reúne todo mês e depois a cada dois meses, com ata, mas o decreto só vigora 90 dias depois de publicado: até 18/12, o DM1.2 continua dependendo das atas do CGPD.',
      subcriterios: [
        { cod: 'DM1.1', texto: 'O processo de estratégia e governança de dados da prefeitura tem a aprovação da alta gestão e é orientado por uma estratégia de dados que abrange toda a prefeitura, um estatuto, uma declaração de propósito ou um conjunto documentado de metas e objetivos.', situacao: 'parcial', classificacao: 'criar',
          nota: 'O Decreto 22.963/2025 tem aprovação do prefeito e objetivos, mas só de proteção de dados. O documento que orienta a governança de dados como um todo está na minuta do SB 101842/2026 (objetivos no art. 3º, eixo de dados e interoperabilidade): atende quando publicado.', refs: ['dec22963', 'lei7367_645', 'proc101842'] },
        { cod: 'DM1.2', texto: 'O grupo com autoridade sobre a estratégia e a governança de dados se reúne pelo menos a cada trimestre para cumprir responsabilidades definidas.', situacao: 'parcial', classificacao: 'criar_risco',
          nota: 'O CGPD (Comitê Gestor de Proteção de Dados, criado pelo Decreto 22.963/2025) tem atribuições definidas e membros nomeados desde ago/2026 (Portaria 10.510), mas o escopo é a LGPD e as atas das reuniões ainda não foram localizadas. Com atas de duas reuniões até 18/12, passa a "atende juntando documentos". O CGD do SB 101842/2026 atende no desenho, mas só seria instalado depois de 18/12.', refs: ['cgpd', 'port10510', 'proc101842'] },
        { cod: 'DM1.3', texto: 'O processo de estratégia e governança de dados da prefeitura inclui uma estrutura que dá ênfase à transparência, à prestação de contas e ao uso ético dos dados, a serviço de melhores resultados para todos os moradores.', situacao: 'nao_tem', classificacao: 'criar',
          nota: 'Em vigor, só peças dispersas (LGPD no Decreto 22.963, princípios da Lei 7.578). A minuta do SB 101842/2026 reúne os três temas: princípios de transparência e inclusão, relatório semestral público e regras de IA e de minimização de dados. Atende quando publicada; sugerir que diga "uso ético", termo da WWC.', refs: ['dec22963', 'lei7578', 'proc101842'] }
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
          { titulo: 'Política e Programa Municipal de Governança Digital e de Dados (processo SB 101842/2026, em trâmite)', texto: 'Minuta de decreto do DTI, enviada à Procuradoria em 23/10/2026. Institui a Política (objetivos e princípios) e um Programa com seis eixos, um deles de dados e interoperabilidade, coordenado pela Secretaria de Administração. Cria o Comitê de Governança Digital e de Dados (CGD), com um representante de cada secretaria, sete competências escritas, reunião mensal nos primeiros 120 dias e depois a cada dois meses, e ata com presença e fundamentação. Prevê relatório semestral público, regras de uso de IA (aviso ao cidadão, supervisão humana) e minimização no uso de dados pessoais.', falta: 'Só conta depois de publicado, e a data depende da Procuradoria e do prefeito. O decreto entra em vigor 90 dias depois da publicação, e o CGD é instalado até 20 dias depois disso: não haverá reuniões do CGD antes de 18/12. Sugestões de ajuste: vigência na publicação (ao menos dos objetivos e princípios) e a expressão "uso ético" dos dados.', refs: ['proc101842'] },
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
          { id: 'A', nome: 'Decreto novo de política de governança de dados', descricao: 'Um decreto novo com objetivos, princípios e um comitê que se reúna no mínimo a cada trimestre. O comitê ficaria com o Departamento de Tecnologia da Informação (DTI), que tem a competência legal para definir a estratégia de dados (Lei nº 7.367/2025, art. 645, XIII), e teria a Controladoria e a Encarregada de Proteção de Dados como membros.', refs: ['lei7367_645', 'dec23236'],
            pros: 'Escopo certo para o DM1.1 e o DM1.3; competência legal clara; pode abrigar também a política de dados abertos (OD1).', contras: 'Trâmite completo de ato novo; precisa escrever a divisão de papéis com o CGPD para não haver sobreposição.' },
          { id: 'B', nome: 'Ampliar o Decreto 22.963/2025', descricao: 'Alterar o Decreto nº 22.963/2025 para transformar o CGPD (Comitê Gestor de Proteção de Dados, hoje só de LGPD) em comitê de proteção e governança de dados, acrescentando estratégia, princípios e reunião periódica com ata.', refs: ['dec22963', 'cgpd', 'port10510'],
            pros: 'Aproveita um colegiado que já existe, com membros nomeados (Portaria 10.510/2026) e o DTI representado.', contras: 'A coordenação é da Controladoria, enquanto a lei dá a estratégia de dados ao DTI; mistura conformidade com uso de dados.' },
          { id: 'C', nome: 'Usar o GT Cidade Inteligente (SBC+i)', descricao: 'O Grupo de Trabalho Cidade Inteligente (Portaria nº 10.500/2026) seria o grupo do DM1.2, com atribuições e reuniões definidas no decreto do SBC+i, que está em trâmite (processo SB 100144/2026).', refs: ['port10500', 'proc100144', 'prop_sbci'],
            pros: 'O projeto de lei e a minuta de decreto já existem e já tratam de dados; a reescrita do art. 5º pedida pela Procuradoria abre espaço para incluir reunião trimestral com ata e princípios de uso ético.', contras: 'A lei precisa passar pela Câmara antes do decreto, e não há como saber se tudo sai antes de 18/12; o escopo é cidade inteligente, não estratégia de dados.' }
        ],
        nota: 'Atualização de 23/10/2026: o DTI seguiu a opção A. A minuta do decreto da Política e do Programa Municipal de Governança Digital e de Dados (SB 101842/2026) foi enviada à Procuradoria. Indicação técnica: esse decreto como veículo principal (DM1.1 e DM1.3) e, para 18/12, as atas do CGPD (opção B) para o DM1.2. A proposta de ajustes ao decreto do SBC+i (opção C) foi substituída: o novo decreto já cobre o que ela acrescentava, e manter as duas criaria dois colegiados de governança de dados. Ao decreto do SBC+i fica só a sugestão de um artigo que remeta à governança da nova Política.',
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
        { texto: 'Município decide o instrumento (o DTI propôs o decreto do SB 101842/2026, em análise na Procuradoria)', feito: false, ancora: 'decisao-DM1' },
        { texto: 'Receber da equipe os documentos pedidos', feito: false, ancora: 'pedidos-DM1' },
        { texto: 'Minuta com objetivos, princípios, comitê e relatório (redigida pelo DTI no SB 101842/2026; cotejada com a WWC)', feito: false },
        { texto: 'Trâmite: Procuradoria, assinatura e publicação (antes de 18/12, para contar o DM1.1 e o DM1.3)', feito: false },
        { texto: '1ª reunião do CGPD, com ata (o CGD do novo decreto só se instala depois de 18/12)', feito: false },
        { texto: '2ª reunião do CGPD, com ata (antes de 18/12)', feito: false },
        { texto: 'Reunir as evidências e preparar a resposta', feito: false },
        { texto: 'Equipe insere resposta e arquivos na plataforma', feito: false }
      ],
      pedidos: [
        { texto: 'Atas ou pautas das reuniões do CGPD desde ago/2026 (as portarias da Encarregada e dos membros já foram localizadas: 10.364/2025 e 10.510/2026)', refs: ['cgpd', 'port10510'], status: 'a_pedir' },
        { texto: 'Atas ou pautas do GT Cidade Inteligente (o processo da Portaria 10.500/2026 foi lido e não tem atas; falta saber se o grupo se reuniu e onde estão os registros)', refs: ['port10500', 'proc65650'], status: 'a_pedir' },
        { texto: 'Algum documento em que o DTI tenha definido a estratégia, os padrões ou as políticas de dados do município, como manda a Lei nº 7.367/2025, art. 645, XIII. Não encontramos nenhum; se não existir, é isso que o ato do DM1 vai criar', refs: ['lei7367_645'], status: 'a_pedir' },
        { texto: 'Se o termo de referência do PDTIC 2026–2029 inclui estratégia de dados (lido: não inclui; o escopo é governança de TIC)', refs: ['pdtic'], status: 'validado' },
        { texto: 'Registros de reuniões de coordenação do SBC+i ou do Gesgov (plataforma de acompanhamento das metas do Plano de Governo, sem ato oficial localizado) que tratem de dados', refs: ['proc100144'], status: 'a_pedir' },
        { texto: 'Previsão de análise da Procuradoria e de publicação do decreto do SB 101842/2026, e se a Secretaria de Administração aceita ajustes no texto enquanto ele está na Procuradoria (vigência na publicação, "uso ético", dados abertos entre os atos específicos)', refs: ['proc101842'], status: 'a_pedir' }
      ]
    },

    {
      codigo: 'OD1', area: 'OD', ordem: 2,
      titulo: 'Política de dados abertos',
      definicao: 'A prefeitura tem uma política de dados abertos formalizada e disponível ao público, que estabelece o compromisso com a transparência de dados e com a divulgação proativa dos dados da prefeitura e de suas práticas de gestão de dados.',
      regra: { min: 3, total: 4 }, janela: 'Sem janela',
      plataforma: { resposta: 'Vazio', nota: 'Na revisão do Raio-X, Dados Abertos foi rebaixado para "Em andamento": o portal atende à obrigação legal de transparência, mas falta uma política formal de dados abertos voltada a reuso e às demandas da comunidade.' },
      ficha: 'rascunho', classificacao: 'criar',
      versoes: [
        { v: 'v01', data: '22/10/2026', situacao: 'vigente', t: 'Minuta de decreto da Política Municipal de Dados Abertos', u: 'proposta-od1-dados-abertos.html',
          d: 'Rascunho de indicação técnica: 23 artigos e um anexo, cada um explicado. Cobre os quatro subcritérios. O CGPD aprova o plano e o relatório.' },
        { v: 'v02', data: '—', situacao: 'em_preparo', t: 'Minuta alinhada ao decreto de Governança Digital e de Dados (SB 101842/2026)',
          d: 'A política vira o ato específico do eixo de dados do novo Programa. O plano e o relatório passam ao novo comitê (CGD), com o CGPD na transição, e o catálogo de bases passa a ser um só.' }
      ],
      propostas: [{ t: 'Minuta de decreto da Política Municipal de Dados Abertos', u: 'proposta-od1-dados-abertos.html', nota: 'Rascunho de indicação técnica: 23 artigos e um anexo, cada um explicado. A decisão é do município.' }],
      resumo: 'SBC não tem política de dados abertos. O que existe é a regulamentação da Lei de Acesso à Informação (Decreto 18.882/2014), que ajuda só em parte o OD1.4. Indicação técnica: um decreto da Política Municipal de Dados Abertos, que também adote o capítulo de abertura de dados da Lei 14.129/2021. Já há uma minuta em rascunho, com cada artigo explicado (botão logo abaixo). Como o OD1 não tem janela nem exige reuniões, basta o decreto estar publicado antes de 18/12. O decreto de governança digital e de dados que o DTI enviou à Procuradoria (SB 101842/2026) não cobre o OD1: a minuta continua necessária, como ato específico do eixo de dados desse Programa, e precisa de ajustes para se alinhar a ele, sobretudo no colegiado.',
      subcriterios: [
        { cod: 'OD1.1', texto: 'A política cria uma estrutura de governança para a divulgação proativa de informações públicas.', situacao: 'nao_tem', classificacao: 'criar',
          nota: 'Há competências (Seção de Transparência da Controladoria, para o portal e a capacitação em dados abertos; DTI, para a estratégia de dados) e uma rede de representantes por órgão prevista no decreto da LAI, mas nenhuma estrutura para a publicação proativa.' },
        { cod: 'OD1.2', texto: 'A política inclui planos para coletar, de forma regular, contribuições do público sobre o programa de dados abertos.', situacao: 'nao_tem', classificacao: 'criar',
          nota: 'Não há escuta sobre dados abertos. A pesquisa de satisfação do Portal da Transparência (Decreto 23.215/2026, art. 6º, X) é usada para melhorar os serviços, não para saber que dados a população quer.' },
        { cod: 'OD1.3', texto: 'A política garante a revisão periódica do seu texto e da forma como está sendo aplicada, por meio de relatórios pelo menos anuais.', situacao: 'nao_tem', classificacao: 'criar_risco',
          nota: 'A prefeitura já publica todo ano o relatório da LAI (2012 a 2025), o que mostra que a rotina existe. Mas uma política nova não terá relatório publicado antes de 18/12, e não se sabe se o revisor aceita a política sem o primeiro relatório. O OD1 pede 3 de 4, então não depende deste.' },
        { cod: 'OD1.4', texto: 'A política se compromete a tornar públicas as decisões sobre coleta, priorização, armazenamento, uso, análise e publicação de dados e informações públicas, explicando também por que certas informações não podem ser divulgadas (por serem sensíveis, protegidas ou por outro motivo).', situacao: 'parcial', classificacao: 'criar',
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
          { titulo: 'A Câmara já pediu esta política (Indicação nº 14.825/2025)', texto: 'Em outubro de 2025, a Câmara Municipal encaminhou ao Executivo indicação de estudos para a criação da Política Municipal de Dados Abertos e Interoperabilidade, com base na Lei 14.129 e no Decreto federal 8.777. O Executivo respondeu em 30/12/2025 (Ofício nº 4027/2025-SG-011, da Secretaria de Governo).', falta: 'A resposta só informa que as sugestões foram encaminhadas à secretaria competente, sem compromisso nem prazo. A política ainda não existe; a minuta pode ser a resposta concreta ao pedido da Câmara.',
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
          { id: 'B', nome: 'Dentro do ato de governança de dados do DM1', descricao: 'A política de dados abertos seria um capítulo do decreto da Política e do Programa de Governança Digital e de Dados (SB 101842/2026).',
            pros: 'Um só instrumento para o DM1 e o OD1.', contras: 'A minuta enviada à Procuradoria não trata de dados abertos: seria preciso acrescentar um capítulo inteiro a um texto já em análise. O decreto só vigora 90 dias depois de publicado, e o OD1 ficaria preso a esse trâmite.' },
          { id: 'C', nome: 'Dentro do decreto do SBC+i', descricao: 'Acrescentar a política à minuta de decreto do Programa SBC+i, que está em trâmite.',
            pros: 'O texto já está em trâmite.', contras: 'O decreto só sai depois da lei, que vai à Câmara; o escopo é cidade inteligente.' },
          { id: 'D', nome: 'Capítulo novo no Decreto 18.882/2014 (LAI)', descricao: 'Acrescentar ao decreto da Lei de Acesso à Informação um capítulo "Da Política Municipal de Dados Abertos", atualizando também a competência, que em 2014 era de uma secretaria que já não existe com esse nome.',
            pros: 'Aproveita o que a LAI já tem: a diretriz de divulgação proativa, os representantes por órgão (viram os coordenadores do 1.1), a rotina anual (vira o relatório do 1.3) e as regras de sigilo (base do 1.4).', contras: 'Reforça o enquadramento que o revisor do Raio-X criticou (dados abertos como obrigação legal de transparência, e não como reuso e demanda da comunidade); reabrir um decreto de 2014 pode levar a revisar outros artigos e alongar o trâmite.' }
        ],
        links: [{ t: 'Minuta de decreto da Política Municipal de Dados Abertos (rascunho, com cada artigo explicado)', u: 'proposta-od1-dados-abertos.html' }],
        nota: 'A escolha cabe ao município (DTI e Procuradoria); a minuta segue a opção A como indicação. Recomendação mantida na opção A: um decreto próprio pode citar as estruturas da LAI ("os representantes de que trata o art. 7º do Decreto 18.882 acumulam a função de coordenador de dados abertos"), sem herdar o enquadramento de obrigação legal. A opção D fica como alternativa, se a Procuradoria preferir não criar ato novo. Se já houver minuta de regulamentação da Lei 14.129 (pedido 1), ela é o veículo natural da opção A. Atualização de 23/10/2026: o decreto de governança digital e de dados do DTI (SB 101842/2026) prevê atos específicos por eixo; o da opção A seria o de dados abertos. Para se alinhar a ele, a minuta precisa passar a aprovação do plano e do relatório do CGPD para o novo Comitê de Governança Digital e de Dados (CGD), com o CGPD na transição. O novo decreto reserva o CGPD à LGPD, e a WWC recomenda o mesmo órgão para o DM1 e o OD1. Também precisa usar um só catálogo de bases.'
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
        { texto: 'Cotejar a minuta com os documentos que o DTI encaminhou à Procuradoria (SB 101842/2026)', feito: true },
        { texto: 'Ajustar a minuta ao SB 101842/2026: colegiado (CGD, com o CGPD na transição), catálogo único e relatório', feito: false },
        { texto: 'Trâmite: Procuradoria, assinatura e publicação (antes de 18/12)', feito: false },
        { texto: 'Reunir as evidências e preparar a resposta', feito: false },
        { texto: 'Equipe insere resposta e arquivos na plataforma', feito: false }
      ],
      pedidos: [
        { texto: 'Se existe minuta, estudo ou processo de regulamentação local da Lei 14.129/2021 (a página de Dados Abertos diz que "o município estuda")', refs: ['lei14129', 'pag_dados_abertos'], status: 'a_pedir' },
        { texto: 'Se foram nomeados os representantes por órgão do art. 7º do Decreto 18.882/2014 e se a Comissão Mista de Reavaliação (art. 21) foi constituída', refs: ['dec18882'], status: 'a_pedir' },
        { texto: 'Qual unidade mantém hoje a página de Dados Abertos (Controladoria ou DTI)', refs: ['pag_dados_abertos', 'lei7367_35', 'lei7367_645'], status: 'a_pedir' },
        { texto: 'O que é o portal de dados abertos "em desenvolvimento" citado no PPA 2026–2029: ferramenta, responsável e prazo', refs: ['ppa720'], status: 'a_pedir' },
        { texto: 'Quais documentos o DTI vai encaminhar à Procuradoria: é o SB 101842/2026 (governança digital e de dados), lido e cotejado; não trata de dados abertos e adota da Lei 14.129 só seis diretrizes', refs: ['proc101842', 'lei14129'], status: 'validado' },
        { texto: 'O Diagnóstico Preliminar de Exposição de Dados Pessoais citado no SB 101842/2026 (achou dados pessoais em relatórios, atos de pessoal, listas e convocações publicados): base para a triagem antes da abertura (OD1.4)', refs: ['proc101842'], status: 'a_pedir' },
        { texto: 'Resposta do Executivo à Indicação nº 14.825/2025 da Câmara (Ofício nº 4027/2025-SG-011): lida; diz só que as sugestões foram encaminhadas à secretaria competente', refs: ['ind14825'], status: 'validado' }
      ]
    },
    {
      codigo: 'OD3', area: 'OD', ordem: 3,
      titulo: 'Portal de dados abertos',
      definicao: 'A prefeitura publica dados abertos num local central e público na internet.',
      regra: { min: 3, total: 3 }, janela: 'Sem janela',
      plataforma: { resposta: 'Sim (pré-preenchido)', alerta: 'A resposta veio pré-preenchida com "Sim", mas a revisão do Raio-X rebaixou Dados Abertos para "Em andamento". Decisão de 22/10/2026: manter o "Sim", a confirmar com a equipe. Para ele se sustentar na revisão, o catálogo da página de Dados Abertos e as planilhas do Perfil por Bairro precisam estar publicados antes do envio (18/12). O texto pré-preenchido também precisa ser reescrito: diz que o patrimônio público está em formato legível por máquina, mas ele só está em PDF, e cita um painel Power BI, que não é dado aberto.' },
      ficha: 'rascunho', classificacao: 'criar',
      propostas: [{ t: 'Exemplo: a página de Dados Abertos como portal central', u: 'proposta-od3-catalogo.html', nota: 'As três perguntas do critério, a página de hoje e um exemplo do catálogo com links reais, contato e licença. Rascunho de indicação técnica.' }],
      resumo: 'Há bases abertas de verdade em pelo menos 13 lugares (contratos e obras em CSV, finanças em XLS, emendas, renúncia de receita, multas e doações em XLSX e 13 camadas de mapa no GeoPortal, com dicionário de dados), gratuitas e sem cadastro. Mas estão espalhadas: a página de Dados Abertos anuncia um catálogo que não existe e não aponta para nenhuma delas, nem traz contato e licença. Faltam também dados desagregados por bairro e por grupo da população em formato aberto. Tudo isso é edição de página e publicação de planilhas que já existem.',
      subcriterios: [
        { cod: 'OD3.1', texto: 'Os dados abertos são legíveis por máquina, podem ser baixados e estão disponíveis gratuitamente.', situacao: 'tem', classificacao: 'atende',
          nota: 'Contratos e obras em andamento em CSV (atualizados em 22/10/2026), relatórios fiscais de 2026 em XLS, emendas, renúncia de receita, multas de trânsito, doações e obras de anos anteriores em XLSX, e camadas do GeoPortal em shapefile, todos sem login. Para reduzir o risco na revisão: pôr uma licença aberta explícita, atualizar os relatórios mensais da página principal, que param em 2023, e corrigir o texto pré-preenchido sobre o patrimônio.' },
        { cod: 'OD3.2', texto: 'Quando possível, e preservando a privacidade e o sigilo, os dados abertos são publicados separados por território e por grupos da população.', situacao: 'parcial', classificacao: 'criar',
          nota: 'As bases do portal não são desagregadas. O Perfil Socioeconômico por Bairro 2026 tem o que o critério pede nos 26 capítulos (bairro × idade, sexo, cor ou raça, vulnerabilidade), mas só em PDF. Publicar essas tabelas em planilha, com o nome do bairro igual ao da camada de bairros do GeoPortal, resolve. A renda está num gráfico, com dados do Censo 2010.' },
        { cod: 'OD3.3', texto: 'Os dados abertos vêm com o contexto adequado: linguagem clara, informações de contato, políticas e/ou relatórios relacionados e outros documentos. Se algum tipo de dado estiver em outros sites, o portal principal de dados abertos aponta claramente para eles.', situacao: 'parcial', classificacao: 'criar',
          nota: 'A página explica em linguagem clara o que são dados abertos e cita a base legal. É a maior lacuna do critério: os dados estão em 17 páginas e sistemas que a página não cita, e ela diz ter um catálogo que não existe. Faltam também contato da unidade responsável, licença e uma descrição por base.' }
      ],
      evidencias: ['Link para o portal de dados abertos. Se houver vários sites, um deles deve apontar para os outros.'],
      sbc: {
        tem: [
          { titulo: 'Bases legíveis por máquina, gratuitas e sem cadastro', texto: 'Contratos (CSV, Excel e PDF) e obras em andamento (CSV, Excel e PDF), ambos atualizados em 22/10/2026; relatórios de receitas e despesas de 2026 em XLS no sistema de transparência fiscal; planilha de emendas parlamentares em XLSX.',
            links: [{ t: 'Contratos', u: 'https://transparencia.saobernardo.sp.gov.br/contratos' }, { t: 'Obras em andamento', u: 'https://obras.saobernardo.sp.gov.br/transparencia/obras-em-andamento' }, { t: 'Transparência fiscal', u: 'https://transparencia-fiscal.saobernardo.sp.gov.br/transparencia-fiscal/municipio-sbc/inicio' }] },
          { titulo: 'GeoPortal: 13 camadas de mapa para download, com dicionário de dados', texto: 'Limite municipal, perímetro urbano, bairros, zoneamento, lotes, arruamentos, logradouros, hierarquia viária, próprios municipais, equipamentos e serviços públicos, praças, represa e endereços, em shapefile. A planilha de descrição (abr/2026) traz, para cada camada, título, descrição, data, escala, projeção, fonte e atributos.',
            links: [{ t: 'GeoPortal (aba Downloads)', u: 'https://geo.saobernardo.sp.gov.br/' }] },
          { titulo: 'Planilhas abertas espalhadas pelo Portal da Transparência', texto: 'Renúncia de receita (XLSX e TXT, 2021 a 2025), multas de trânsito (XLSX, 2019 a 2024), doações (XLSX), obras de anos anteriores (XLSX e TXT, até mar/2026), recursos estaduais e federais recebidos (XLSX, página da Controladoria) e o relatório do Prodigi 2023 (XLSX). Nenhuma é citada na página de Dados Abertos.',
            links: [{ t: 'Renúncia de receita', u: 'https://www.saobernardo.sp.gov.br/web/transparencia/renuncia-de-receita1' }, { t: 'Obras de anos anteriores', u: 'https://www.saobernardo.sp.gov.br/web/transparencia/planilha-de-obras-de-exercicios-anteriores' }, { t: 'Multas de trânsito', u: 'https://www.saobernardo.sp.gov.br/web/transparencia/receitas-e-destinacao-de-multas-de-transito' }] }
        ],
        incompleto: [
          { titulo: 'Página de Dados Abertos do Portal da Transparência', texto: 'Explica em linguagem clara o que são dados abertos, cita a Lei 14.129/2021 e o Decreto 21.086/2020 e anuncia dados de receitas, despesas, patrimônio, contratos, obras e emendas.', falta: 'Um catálogo de verdade, com uma linha e um link por base (a página diz que os dados estão "catalogados", mas não há lista); contato da unidade responsável; licença aberta explícita (hoje há só termos informais e uma nota de isenção); descrição por base. O link "Patrimônio Público" aponta para a página de receitas e despesas.',
            links: [{ t: 'Página de Dados Abertos', u: 'https://www.saobernardo.sp.gov.br/web/transparencia/dados-abertos' }] },
          { titulo: 'Perfil Socioeconômico por Bairro 2026 (Planejamento Urbano)', texto: '26 capítulos, um por bairro ou região, todos com o mesmo modelo de 17 tabelas: população 2000–2025, faixa etária, sexo, cor ou raça, alfabetização, domicílios, serviços básicos, índice de vulnerabilidade (IPVS), matrículas, equipamentos e atividades econômicas. A renda vem num gráfico, com dados de 2010. Ano-base 2025, publicado em jun/2026.', falta: 'Só em PDF, que não é formato aberto. Publicar as tabelas em CSV ou XLSX resolve o OD3.2.',
            links: [{ t: 'Perfil Socioeconômico por Bairro', u: 'https://www.saobernardo.sp.gov.br/web/sbc/perfilsocioeconomicobairros' }] }
        ],
        naoTem: [
          { titulo: 'Dados desagregados por bairro e por grupo da população em formato aberto', texto: 'Hoje só em PDF (OD3.2).' },
          { titulo: 'Um ponto central que aponte para todos os sites de dados', texto: 'GeoPortal, Perfil por Bairro, planilhas do Portal, licitações, servidores, saúde e educação estão fora da página de Dados Abertos (OD3.3).' }
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
        { texto: 'Página de Dados Abertos: catálogo com link para cada base (inventário da ficha como ponto de partida); corrigir o link de patrimônio', feito: false },
        { texto: 'Página de Dados Abertos: contato, licença aberta e uma descrição por base', feito: false },
        { texto: 'Publicar as tabelas do Perfil por Bairro em CSV ou XLSX', feito: false },
        { texto: 'Atualizar ou retirar os relatórios mensais de 2021–2023 de receitas e despesas', feito: false },
        { texto: 'Reunir as evidências e preparar a resposta', feito: false },
        { texto: 'Equipe confirma o "Sim", reescreve o texto pré-preenchido e insere a resposta com o link do catálogo', feito: false }
      ],
      pedidos: [
        { texto: 'Qual unidade mantém a página de Dados Abertos e quem pode editá-la', refs: ['pag_dados_abertos'], status: 'a_pedir' },
        { texto: 'O que é o portal de dados abertos "em desenvolvimento" citado no PPA 2026–2029 e quando fica pronto', refs: ['ppa720'], status: 'a_pedir' },
        { texto: 'Se o Planejamento Urbano pode publicar as tabelas do Perfil por Bairro e do Painel Estatístico em CSV ou XLSX', refs: ['perfil_bairros', 'painel_estatistico'], status: 'a_pedir' },
        { texto: 'Se o GeoPortal pode ser apresentado como parte do portal de dados abertos, e quem responde pelas camadas', refs: ['geoportal'], status: 'a_pedir' },
        { texto: 'Revisar, com quem publicou, as planilhas da consulta pública do PPA 2026–2029 antes de incluí-las no catálogo', refs: ['ppa720'], status: 'a_pedir' },
        { texto: 'Se o sistema de gastos com pessoal está funcionando e em que formato exporta; e se todos os contratos de 2025 estão no sistema de contratos', refs: ['gcp', 'contratos'], status: 'a_pedir' },
        { texto: 'Se o Planejamento Urbano vai pedir ao IBGE o acesso controlado aos microdados do Censo 2022 para atualizar a renda do Perfil por Bairro, hoje do Censo 2010', refs: ['ibge_microdados', 'perfil_bairros'], status: 'a_pedir' }
      ]
    },
    {
      codigo: 'DM2', area: 'DM', ordem: 4,
      titulo: 'Mantendo um inventário de dados abrangente',
      definicao: 'A prefeitura mantém um inventário de dados detalhado, que torna seus dados, e os dados relevantes de terceiros, mais fáceis de encontrar, mais acessíveis e mais bem cuidados.',
      regra: { min: 3, total: 4 }, janela: '24 meses', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'DM2.1', texto: 'A prefeitura segue uma metodologia documentada para levantar e atualizar o inventário de dados com regularidade, no mínimo a cada 24 meses, e cumpre essa metodologia.' },
        { cod: 'DM2.2', texto: 'Pelo menos 80% das secretarias e órgãos da prefeitura contribuem com conjuntos de dados para o inventário.' },
        { cod: 'DM2.3', texto: 'O inventário de dados está disponível internamente para os servidores da prefeitura.' },
        { cod: 'DM2.4', texto: 'Uma versão do inventário de dados está disponível para o público e publicada na internet.' }
      ],
      evidencias: ['Cópia do inventário de dados.', 'Processo documentado para coletar e atualizar o inventário.']
    },
    {
      codigo: 'DM3', area: 'DM', ordem: 5,
      titulo: 'Compartilhando dados',
      definicao: 'A prefeitura tem processos documentados e fáceis de usar para agilizar o compartilhamento de dados, inclusive de dados protegidos, tanto entre secretarias quanto com parceiros externos.',
      regra: { min: 3, total: 4 }, janela: 'Sem janela', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'DM3.1', texto: 'A prefeitura tem um processo documentado para compartilhar dados internamente e com parceiros externos, com orientações sobre quando firmar acordos de compartilhamento de dados.' },
        { cod: 'DM3.2', texto: 'A prefeitura tem um processo documentado para decidir quando e como abrir dados, que inclui avaliar as possíveis oportunidades e danos e considerar os pedidos de dados já recebidos para priorizar quais bases publicar.' },
        { cod: 'DM3.3', texto: 'A prefeitura tem uma forma fácil de receber pedidos internos e externos de compartilhamento de dados e exige que as áreas responsáveis pelos dados respondam em prazo adequado.' },
        { cod: 'DM3.4', texto: 'A prefeitura contribui com sistemas de dados compartilhados ou integrados, e os utiliza, entre secretarias, com outras esferas de governo ou com parceiros externos, para apoiar decisões e melhorar serviços e resultados.' }
      ],
      evidencias: ['Link de canal on-line para pedir ou compartilhar dados.', 'Políticas ou processos de compartilhamento e de abertura de dados.', 'Inventário ou cópia de um acordo de compartilhamento de dados vigente.']
    },
    {
      codigo: 'DM4', area: 'DM', ordem: 6,
      titulo: 'Melhorando a qualidade dos dados',
      definicao: 'A prefeitura tem e aplica políticas ou práticas documentadas para melhorar a qualidade dos dados.',
      regra: { min: 4, total: 5 }, janela: 'Sem janela', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'DM4.1', texto: 'A prefeitura adotou e publicou conjuntos de dados que seguem pelo menos um padrão de dados cívicos (por exemplo, o GTFS, de transporte público), para facilitar a integração com sistemas externos.' },
        { cod: 'DM4.2', texto: 'A prefeitura aplica processos para documentar a origem, o método de coleta e os problemas de qualidade conhecidos de cada conjunto de dados, e para corrigir os problemas de qualidade identificados (por exemplo, com auditorias regulares de qualidade ou canais de retorno para quem usa os dados).' },
        { cod: 'DM4.3', texto: 'A prefeitura documenta padrões para os dados internos, para facilitar a integração entre os sistemas da própria prefeitura, de modo que campos comuns (como o endereço) sejam registrados da mesma forma em todos os órgãos.' },
        { cod: 'DM4.4', texto: 'A prefeitura produz metadados de alta qualidade e completos tanto para os conjuntos de dados protegidos quanto para os publicados como dados abertos.' },
        { cod: 'DM4.5', texto: 'A prefeitura busca ativamente a opinião da comunidade para identificar problemas de qualidade e melhorar os conjuntos de dados considerados imprecisos, incompletos ou com limitações ou vieses importantes.' }
      ],
      evidencias: ['Documentos sobre como a qualidade é avaliada e corrigida.', 'Link de um conjunto aberto que segue padrão cívico, com o nome do padrão.', 'Orientações internas de metadados e padrões.', 'Evidência de retorno contínuo da comunidade sobre a qualidade.']
    },
    {
      codigo: 'DM5', area: 'DM', ordem: 7,
      titulo: 'Protegendo a privacidade e a confidencialidade dos dados',
      definicao: 'A prefeitura tem políticas ou práticas documentadas para proteger a privacidade e o sigilo dos dados que mantém.',
      regra: { min: 2, total: 3 }, janela: 'Anual', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'DM5.1', texto: 'A prefeitura tem um processo para envolver os moradores e outros interessados externos nas práticas de gestão de riscos à privacidade.' },
        { cod: 'DM5.2', texto: 'A prefeitura tem um processo documentado para reduzir a chance de divulgar por engano dados privados, sensíveis ou sigilosos (como dados que identificam pessoas), tanto nos conjuntos de dados compartilhados internamente quanto nos compartilhados com o público.' },
        { cod: 'DM5.3', texto: 'A prefeitura oferece aos servidores, pelo menos uma vez por ano, informação e treinamento sobre como avaliar e reduzir os riscos à privacidade e outros riscos ligados aos seus dados.' }
      ],
      evidencias: ['Resumo das práticas de proteção de dados pessoais.', 'Memorandos ou materiais de treinamento sobre riscos de privacidade.', 'Evidência de treinamentos anuais.'],
      nota: 'O Decreto 22.963/2025 (Programa de Proteção de Dados) é o ponto de partida provável.'
    },
    {
      codigo: 'DM6', area: 'DM', ordem: 8,
      titulo: 'Gerenciando a segurança dos dados',
      definicao: 'A prefeitura tem políticas ou práticas documentadas para gerenciar o risco de vazamento, perda ou alteração não autorizada de dados.',
      regra: { min: 3, total: 3 }, janela: 'Anual', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'DM6.1', texto: 'A prefeitura tem um responsável pela segurança da informação, ou função equivalente, que orienta a alta gestão pelo menos uma vez por ano.' },
        { cod: 'DM6.2', texto: 'A prefeitura tem um plano ou protocolos de segurança cibernética documentados, que incluem planos de continuidade das operações e de recuperação e uma avaliação regular dos riscos de segurança, que pode ser feita por terceiros ou por outro órgão independente.' },
        { cod: 'DM6.3', texto: 'A prefeitura oferece treinamentos anuais para atualizar os servidores sobre as políticas e os procedimentos para gerenciar o risco de vazamento, perda ou alteração não autorizada de dados.' }
      ],
      evidencias: ['Cópia da política ou prática documentada.', 'Evidência de treinamentos anuais.'],
      nota: 'Ponto de partida provável: Decreto 22.453/2023 (Política de Segurança da Informação).'
    },
    {
      codigo: 'DM7', area: 'DM', ordem: 9,
      titulo: 'Práticas de dados qualitativos',
      definicao: 'A prefeitura tem uma estratégia ou um processo documentado para coletar com regularidade a opinião da comunidade e dados qualitativos de moradores e de outros interessados externos, para apoiar as decisões.',
      regra: { min: 2, total: 2 }, janela: 'Sem janela', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'DM7.1', texto: 'A prefeitura usa métodos rigorosos de coleta de dados qualitativos (como grupos focais, entrevistas e perguntas abertas em pesquisas), que sejam éticos, representativos e/ou participativos, para apoiar as decisões.' },
        { cod: 'DM7.2', texto: 'A prefeitura exige um protocolo de avaliação para orientar a pesquisa qualitativa, revisado por um especialista em métodos de coleta de dados, e/ou usa um modelo validado de boas práticas elaborado por especialistas.' }
      ],
      evidencias: ['Estratégia ou processo documentado de coleta qualitativa.', 'Resumo de como se garante que os métodos são éticos e participativos.', 'Exemplo de protocolo revisado por especialista.', 'Exemplo de decisão informada por escuta da comunidade.']
    },
    {
      codigo: 'DM8', area: 'DM', ordem: 10,
      titulo: 'Dados desagregados para tomada de decisões',
      definicao: 'A prefeitura coleta e analisa dados separados por território e por grupos da população para apoiar as decisões sobre as principais prioridades do município.',
      regra: { min: 2, total: 2 }, janela: 'Sem janela', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'DM8.1', texto: 'A prefeitura tem um padrão documentado de dados demográficos, usado para publicar e compartilhar esses dados no mesmo formato em toda a prefeitura.' },
        { cod: 'DM8.2', texto: 'A prefeitura coleta e compartilha, interna e externamente, dados separados por território e por grupos da população (como raça, etnia, gênero, idade, deficiência, renda e condição de veterano).' }
      ],
      evidencias: ['Exemplos de conjuntos desagregados.', 'Padrão demográfico seguido por vários órgãos.', 'Como a equipe acessa o padrão ou é treinada nele.']
    },
    {
      codigo: 'DM9', area: 'DM', ordem: 11,
      titulo: 'Padrão de serviço de dados',
      definicao: 'A prefeitura tem um padrão documentado e público para desenvolver e implantar serviços de dados e de análise de dados de alta qualidade em toda a prefeitura.',
      regra: { min: 3, total: 4 }, janela: 'Sem janela', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'DM9.1', texto: 'O padrão se compromete a manter e melhorar continuamente os serviços de dados e de análise ao longo do tempo e os trata como serviços completos.' },
        { cod: 'DM9.2', texto: 'O padrão garante serviços de dados e de análise acessíveis, confiáveis, seguros e éticos, orientados pelas necessidades dos usuários, com critérios de sucesso definidos e dados de desempenho associados.' },
        { cod: 'DM9.3', texto: 'O padrão inclui boas práticas para o desenho, a entrega e a qualidade dos dados e das análises oferecidos como serviço.' },
        { cod: 'DM9.4', texto: 'Para apoiar a aplicação do padrão de serviços de dados, a prefeitura tem uma equipe que o elabora e o gerencia, uma governança que ajuda na adoção e orientações para apoiar as equipes que o usam.' }
      ],
      evidencias: ['Padrão de serviço de dados documentado e público.', 'Resumo da equipe, da governança e da orientação de adoção.'],
      nota: 'Pré-requisito do CI2.1 e do OD4.1.'
    },
    {
      codigo: 'CI1', area: 'CI', ordem: 12,
      titulo: 'Treinamento e colaboração no uso de dados com a comunidade',
      definicao: 'A prefeitura apoia ações para capacitar e mobilizar a comunidade (pessoas e organizações locais, como grupos cívicos, parceiros nos territórios, fornecedores e prestadores de serviço) para entender e usar melhor os dados e os serviços de análise da prefeitura, ampliando o impacto na comunidade.',
      regra: { min: 2, total: 2 }, janela: 'Anual', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'CI1.1', texto: 'No último ano, a prefeitura ofereceu ou participou de pelo menos três treinamentos para ensinar à comunidade habilidades básicas para entender e usar dados abertos e/ou compartilhados, ou para capacitar e mobilizar a comunidade a usar os dados e os serviços de análise da prefeitura e ampliar o impacto na comunidade.' },
        { cod: 'CI1.2', texto: 'A prefeitura tem um processo ou uma estratégia documentada para identificar e envolver ativamente diferentes comunidades, garantindo que os dados e os serviços de análise da prefeitura sejam acessíveis também às comunidades mais difíceis de alcançar.' }
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
      definicao: 'A prefeitura desenvolve serviços de análise de dados para uso interno e para os moradores, que usam dados do inventário de dados da prefeitura para melhorar a vida e o trabalho da comunidade e do governo.',
      regra: { min: 2, total: 3 }, janela: 'Sem janela', ficha: 'nao_iniciada',
      plataforma: { resposta: 'Sim (pré-preenchido)', nota: 'Veio do Raio-X, em que a resposta de Impacto na comunidade foi aceita.' },
      subcriterios: [
        { cod: 'CI2.1', texto: 'A prefeitura usa o processo definido no padrão de serviços de dados do município para criar e entregar serviços de análise, internos ou voltados aos moradores.' },
        { cod: 'CI2.2', texto: 'A prefeitura tem pelo menos um serviço de análise de dados disponível para usuários internos e pelo menos um disponível para moradores e parceiros externos.' },
        { cod: 'CI2.3', texto: 'A prefeitura desenvolve, de forma contínua e sistemática, serviços de análise de alta qualidade e os aprimora a cada ciclo, com impacto comprovado para os moradores ou para os usuários internos.' }
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
      definicao: 'A prefeitura usa as evidências e/ou as informações dos dados que produz para contribuir com uma base de conhecimento mais ampla, colaborar com parceiros externos e interessados e estimulá-los a fazer o mesmo.',
      regra: { min: 1, total: 2 }, janela: 'Anual', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'CI3.1', texto: 'Pelo menos duas vezes no último ano, a prefeitura compartilhou por iniciativa própria evidências, resultados de avaliações ou informações dos seus dados com parceiros externos relevantes (por exemplo, organizações sem fins lucrativos, organizações comunitárias, órgãos estaduais ou de outros municípios).' },
        { cod: 'CI3.2', texto: 'No último ano, a prefeitura apoiou com sucesso parceiros externos ou interessados a adotar uma prática baseada em evidências.' }
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
      definicao: 'A prefeitura oferece orientações práticas e claras para ajudar todos os usuários, internos e externos (servidores, moradores, empresas etc.), a acessar, analisar, explorar e usar os dados abertos e compartilhados da prefeitura.',
      regra: { min: 3, total: 4 }, janela: 'Sem janela', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'OD2.1', texto: 'As orientações ao usuário, ou os metadados correspondentes, explicam o que significa cada campo das bases de dados e quais valores cada campo pode ter.' },
        { cod: 'OD2.2', texto: 'As orientações ao usuário explicam o contexto e o conteúdo de uma ou mais bases de dados.' },
        { cod: 'OD2.3', texto: 'As orientações ao usuário explicam as limitações dos dados, como qualidade, métodos de coleta, dados faltantes, proteção da privacidade e limites de abrangência. Isso deve ajudar o usuário a entender como os dados podem e não podem ser usados e interpretados.' },
        { cod: 'OD2.4', texto: 'As orientações ao usuário informam qual secretaria ou órgão é responsável pelos dados, qual é o processo usado para criá-los e atualizá-los e com que frequência são atualizados ou ampliados.' }
      ],
      evidencias: ['Links para as orientações aos usuários (no portal ou internas).']
    },
    {
      codigo: 'OD4', area: 'OD', ordem: 16,
      titulo: 'Informações sobre os usuários de dados',
      definicao: 'A prefeitura acompanha e registra informações sobre quem usa seus dados, dentro e fora da prefeitura, e leva em conta as necessidades desses usuários no desenho e na execução de seus serviços de dados e de análise e de suas práticas de transparência.',
      regra: { min: 2, total: 2 }, janela: '24 meses', ficha: 'nao_iniciada', plataforma: { resposta: 'Vazio' },
      subcriterios: [
        { cod: 'OD4.1', texto: 'A prefeitura usa métodos rigorosos de coleta de dados qualitativos ou de pesquisa com usuários (como perfis de usuário, oficinas colaborativas, entrevistas e pesquisas) para entender quem usa seus dados e incorporar as necessidades desses usuários no desenho e na execução dos serviços de dados e de análise.' },
        { cod: 'OD4.2', texto: 'A prefeitura analisa estatísticas de download de dados, de acesso ao site, o número de pedidos de acesso à informação, os pedidos de compartilhamento de dados ou outras medidas de demanda por informação para priorizar novas publicações de dados e melhorias nos serviços.' }
      ],
      evidencias: ['Link para dados de uso (ex.: estatísticas de download) e como são usados.', 'Resumo das pesquisas com usuários e de como influenciaram os serviços.']
    }
  ]
};
