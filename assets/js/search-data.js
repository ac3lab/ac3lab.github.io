// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research-team",
          title: "Research Team",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/profile/";
          },
        },{id: "dropdown-sobre-o-evento",
              title: "Sobre o Evento",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/safe2025/sobre/";
              },
            },{id: "dropdown-planos-de-patrocínio",
              title: "Planos de Patrocínio",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/safe2025/patrocinio-safe2025/";
              },
            },{id: "post-real-madrid-vs-borussia-dortmund-a-champions-league-rematch-on-the-world-stage",
        
          title: "Real Madrid vs Borussia Dortmund: A Champions League Rematch on the World Stage...",
        
        description: "A tactical analysis of the FIFA Club World Cup quarterfinal clash between Real Madrid and Borussia Dortmund, featuring a dramatic Champions League rematch",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/real_borussia_en/";
          
        },
      },{id: "post-heartbreak-and-heroics-palmeiras-faces-chelsea-in-a-quarterfinal-thriller",
        
          title: "Heartbreak and Heroics: Palmeiras Faces Chelsea in a Quarterfinal Thriller",
        
        description: "A tactical analysis of the FIFA Club World Cup quarterfinal clash between Palmeiras and Chelsea, featuring strategic battles and individual performances",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/chelsea_palmeiras_en/";
          
        },
      },{id: "post-fluminense-vs-al-hilal-brazilian-resilience-meets-saudi-power-in-quarterfinal-showdown",
        
          title: "Fluminense vs Al Hilal: Brazilian Resilience Meets Saudi Power in Quarterfinal Showdown",
        
        description: "A tactical analysis of the FIFA Club World Cup quarterfinal clash between Fluminense and Al Hilal, featuring defensive masterclass and strategic battles",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/alhilal_flu_en/";
          
        },
      },{id: "post-fluminense-vs-inter-a-victory-that-surprised-everyone",
        
          title: "Fluminense vs Inter: A Victory that Surprised Everyone",
        
        description: "How Renato Gaúcho surprised Inter with tactical change and Fluminense secured qualification in the Round of 16",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/fluminense_inter_en/";
          
        },
      },{id: "post-flamengo-vs-bayern-an-analysis-of-errors-and-tactical-differences",
        
          title: "Flamengo vs Bayern: An Analysis of Errors and Tactical Differences",
        
        description: "How Flamengo&#39;s errors and Bayern&#39;s pressure defined the result in the Club World Cup Round of 16",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/flamengo_bayern_en/";
          
        },
      },{id: "post-palmeiras-vs-botafogo-a-tactical-battle-in-the-club-world-cup-round-of-16",
        
          title: "Palmeiras vs Botafogo: A Tactical Battle in the Club World Cup Round of...",
        
        description: "A thrilling tactical showdown between Brazilian giants Palmeiras and Botafogo in the Club World Cup Round of 16, featuring intense extra-time drama and strategic masterclass",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/botafogo_palmeiras_en/";
          
        },
      },{id: "post-palmeiras-39-group-stage-performance-at-the-club-world-cup",
        
          title: "Palmeiras&#39; Group Stage Performance at the Club World Cup",
        
        description: "Palmeiras&#39; Group Stage Performance at the Club World Cup",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/palmeiras_grupos_en/";
          
        },
      },{id: "post-fluminense-39-s-solid-group-stage-performance-at-the-club-world-cup",
        
          title: "Fluminense&#39;s Solid Group Stage Performance at the Club World Cup",
        
        description: "Fluminense&#39;s Solid Group Stage Performance at the Club World Cup",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/fluminense_grupos_en/";
          
        },
      },{id: "post-flamengo-39-s-dominant-group-stage-performance-at-the-club-world-cup",
        
          title: "Flamengo&#39;s Dominant Group Stage Performance at the Club World Cup",
        
        description: "Flamengo&#39;s Dominant Group Stage Performance at the Club World Cup",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/flamengo_grupos_en/";
          
        },
      },{id: "post-botafogo-39-s-surprising-club-world-cup-group-stage-performance",
        
          title: "Botafogo&#39;s Surprising Club World Cup Group Stage Performance",
        
        description: "Botafogo&#39;s Surprising Club World Cup Group Stage Performance",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/botafogo_grupos_en/";
          
        },
      },{id: "post-nba-playoffs-the-mvps-duel",
        
          title: "NBA Playoffs : The MVPs Duel",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/nba-playoffs_en/";
          
        },
      },{id: "post-predicting-match-results-in-football-part-3",
        
          title: "Predicting Match Results in Football - Part 3",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/post_poisson_3_en/";
          
        },
      },{id: "post-prevendo-resultados-no-futebol-parte-2",
        
          title: "Prevendo Resultados no Futebol - Parte 2",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/post-value_market_2_pt/";
          
        },
      },{id: "post-predicting-match-results-in-football-part-2",
        
          title: "Predicting Match Results in Football - Part 2",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/post-value-market_2_ing/";
          
        },
      },{id: "post-predicting-match-results-in-football-part-1",
        
          title: "Predicting Match Results in Football - Part 1",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/post_pitagorica_1_en/";
          
        },
      },{id: "post-são-garrafa-niterói-2024-analyzing-10-different-runners",
        
          title: "São Garrafa Niterói 2024 – Analyzing 10 different runners",
        
        description: "Analyzing the performance of 10 different runners from São Garrafa 2024",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/post_sao_garrafa_en/";
          
        },
      },{id: "post-analyzing-brazilian-football-signings-in-2024-offensive-sector-part-2",
        
          title: "Analyzing Brazilian Football Signings in 2024 - Offensive Sector: Part 2",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_contratacoes_2_en/";
          
        },
      },{id: "post-analyzing-brazilian-football-signings-in-2024-offensive-sector",
        
          title: "Analyzing Brazilian Football Signings in 2024 - Offensive Sector",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_contratacoes_1_en/";
          
        },
      },{id: "post-analysis-of-the-best-football-leagues",
        
          title: "Analysis of the Best Football Leagues",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_analise_ligas_en/";
          
        },
      },{id: "post-2023-women-39-s-world-cup-analyzing-the-progress-of-the-brazilian-national-team",
        
          title: "2023 Women&#39;s World Cup - Analyzing the progress of the Brazilian national team...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_women_world_cup_4_en/";
          
        },
      },{id: "post-2023-women-39-s-world-cup-analyzing-the-evolution-of-the-main-teams",
        
          title: "2023 Women&#39;s World Cup - Analyzing the evolution of the main teams",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_women_world_cup_3_en/";
          
        },
      },{id: "post-2023-women-s-world-cup-promising-players",
        
          title: "2023 Women’s World Cup - Promising players",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_women_world_cup_2_en/";
          
        },
      },{id: "post-2023-women-s-world-cup-analyzing-the-finalists",
        
          title: "2023 Women’s World Cup - Analyzing the finalists",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_women_world_cup_1_en/";
          
        },
      },{id: "post-an-optimization-model-for-personalized-itineraries-insights-from-our-olympics-planner-2024",
        
          title: "An Optimization Model for Personalized Itineraries: Insights from our Olympics Planner 2024",
        
        description: "Discover how we developed the Olympics Planner 2024, an optimization model designed to create personalized itineraries for the Paris Olympic Games.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_olympics_planner_2024/";
          
        },
      },{id: "post-in-depth-analysis-of-bayer-leverkusen-key-players",
        
          title: "In-Depth Analysis of Bayer Leverkusen - Key Players",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_leverkusen_3_en/";
          
        },
      },{id: "post-in-depth-analysis-of-bayer-leverkusen-past-seasons-and-current-campaign",
        
          title: "In-Depth Analysis of Bayer Leverkusen - Past Seasons and Current Campaign",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_leverkusen_2_en/";
          
        },
      },{id: "post-in-depth-analysis-of-bayer-leverkusen-xabi-alonso-39-s-playing-style",
        
          title: "In-Depth Analysis of Bayer Leverkusen - Xabi Alonso&#39;s Playing Style",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_leverkusen_1_en/";
          
        },
      },{id: "post-brasileirão-2024-5rd-round",
        
          title: "Brasileirão 2024 - 5rd Round",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_brasileirao_5-en/";
          
        },
      },{id: "post-rio-marathon-2023-exploratory-with-a-bit-of-statistics-and-predictive-estimation",
        
          title: "Rio Marathon 2023 – Exploratory with a bit of statistics and predictive estimation...",
        
        description: "Analyzing data from the 2023 Rio Marathon results and developing a simple performance prediction model",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_marathon_en/";
          
        },
      },{id: "post-brasileirão-2024-4rd-round",
        
          title: "Brasileirão 2024 - 4rd Round",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_brasileirao_4-en/";
          
        },
      },{id: "post-brasileirão-2024-3rd-round",
        
          title: "Brasileirão 2024 - 3rd Round",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_brasileirao_3-en/";
          
        },
      },{id: "post-brasileirão-2024-2nd-round",
        
          title: "Brasileirão 2024 - 2nd Round",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_brasileirao_2-en/";
          
        },
      },{id: "post-brasileirão-2024-first-round",
        
          title: "Brasileirão 2024 - First Round",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_brasileirao_1-en/";
          
        },
      },{id: "post-carioca-championship-2024-final-second-leg",
        
          title: "Carioca Championship 2024 - Final - Second Leg",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_carioca_final2-en/";
          
        },
      },{id: "post-carioca-championship-2024-final-first-leg",
        
          title: "Carioca Championship 2024 - Final - First Leg",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_carioca_final1-en/";
          
        },
      },{id: "post-even-under-pressure-brazil-changes-the-game-with-substitutions-and-draw",
        
          title: "Even under pressure, Brazil changes the game with substitutions and draw",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_brasil_espanha-en/";
          
        },
      },{id: "post-endrick-39-s-star-shines-and-brazil-beat-england",
        
          title: "Endrick&#39;s star shines and Brazil beat England",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_brasil_inglaterra-en/";
          
        },
      },{id: "post-carioca-championship-2024-semifinal-second-leg",
        
          title: "Carioca Championship 2024 - Semifinal - Second Leg",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_carioca_semifinal_2-en/";
          
        },
      },{id: "post-carioca-championship-2024-semifinal-first-leg",
        
          title: "Carioca Championship 2024 - Semifinal - First Leg",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_carioca_semifinal_1/";
          
        },
      },{id: "post-the-odyssey-of-women-in-the-olympic-games-a-data-driven-tale",
        
          title: "The Odyssey of Women in the Olympic Games: A Data-Driven Tale",
        
        description: "A data-infused tribute on International Women&#39;s Day to female Olympians&#39; journey, showcased in our dashboard, from 1900 Paris to the 2024 Olympics, underlining ongoing strides towards sports gender equality.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_olympic_women/";
          
        },
      },{id: "post-carioca-championship-2024-a-compiled-analysis",
        
          title: "Carioca Championship 2024 - A compiled analysis",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_carioca_compilado/";
          
        },
      },{id: "post-running-part-2-how-a-machine-learning-model-allows-me-through-an-api-to-level-my-runs",
        
          title: "Running — Part 2: How a Machine Learning model allows me, through an...",
        
        description: "Deployed! Construction of an API for querying and evaluating the level of new races based on a previously trained clustering model",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_running_model/";
          
        },
      },{id: "post-complex-networks-on-football",
        
          title: "Complex Networks on football",
        
        description: "Using Complex Networks to analyze and understand football matches.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_complex_network_football/";
          
        },
      },{id: "post-analyzing-complex-network-metrics-from-the-1958-world-cup-final",
        
          title: "Analyzing Complex Network metrics from the 1958 World Cup final",
        
        description: "Investigating the 1958 World Cup final match between Brazil and Sweden using Complex Network metrics.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_58_worldcup_final/";
          
        },
      },{id: "post-running-part-1-extracting-my-nike-run-club-data-and-exploring-in-python-to-evaluate-my-performance",
        
          title: "Running — Part 1: Extracting my Nike Run Club data and exploring in...",
        
        description: "How I used data science methods to evaluate my running performance",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post_running/";
          
        },
      },{id: "post-analisando-contratações-do-futebol-brasileiro-em-2024-setor-ofensivo",
        
          title: "Analisando Contratações do Futebol Brasileiro em 2024 - Setor Ofensivo",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_contratacoes_1_pt/";
          
        },
      },{id: "post-real-madrid-vs-borussia-dortmund-uma-revanche-da-champions-league-no-palco-mundial",
        
          title: "Real Madrid vs Borussia Dortmund: Uma Revanche da Champions League no Palco Mundial...",
        
        description: "Uma análise tática do confronto entre Real Madrid e Borussia Dortmund nas quartas de final do Mundial de Clubes da FIFA, com uma dramática revanche da Champions League",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/real_borussia_pt/";
          
        },
      },{id: "post-drama-e-heroísmo-palmeiras-enfrenta-chelsea-em-thriller-das-quartas-de-final",
        
          title: "Drama e Heroísmo: Palmeiras Enfrenta Chelsea em Thriller das Quartas de Final",
        
        description: "Uma análise tática do confronto entre Palmeiras e Chelsea nas quartas de final do Mundial de Clubes da FIFA, com batalhas estratégicas e performances individuais",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/chelsea_palmeiras_pt/";
          
        },
      },{id: "post-fluminense-vs-al-hilal-resiliência-brasileira-encontra-poder-saudita-em-confronto-das-quartas",
        
          title: "Fluminense vs Al Hilal: Resiliência Brasileira Encontra Poder Saudita em Confronto das Quartas...",
        
        description: "Uma análise tática do confronto entre Fluminense e Al Hilal nas quartas de final do Mundial de Clubes da FIFA, com aula de defesa e batalhas estratégicas",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/alhilal_flu_pt/";
          
        },
      },{id: "post-fluminense-vs-inter-uma-vitória-que-surpreendeu-a-todos",
        
          title: "Fluminense vs Inter: Uma Vitória que Surpreendeu a Todos",
        
        description: "Como Renato Gaúcho surpreendeu a Inter com uma mudança tática e Fluminense garantiu classificação nas Oitavas de Final",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/fluminense_inter_pt/";
          
        },
      },{id: "post-palmeiras-vs-botafogo-uma-batalha-tática-nas-oitavas-de-final-do-mundial-de-clubes",
        
          title: "Palmeiras vs Botafogo: Uma Batalha Tática nas Oitavas de Final do Mundial de...",
        
        description: "Batalha tática entre gigantes brasileiros nas Oitavas de Final do Mundial de Clubes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/botafogo_palmeiras_pt/";
          
        },
      },{id: "post-flamengo-vs-bayern-uma-análise-dos-erros-e-da-diferença-tática",
        
          title: "Flamengo vs Bayern: Uma Análise dos Erros e da Diferença Tática",
        
        description: "Como os erros do Flamengo e a pressão do Bayern definiram o resultado nas Oitavas de Final do Mundial de Clubes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/flamengo_bayern_pt/";
          
        },
      },{id: "post-a-performance-do-palmeiras-na-fase-de-grupos-do-mundial-de-clubes",
        
          title: "A Performance do Palmeiras na Fase de Grupos do Mundial de Clubes",
        
        description: "A Performance do Palmeiras na Fase de Grupos do Mundial de Clubes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/palmeiras_grupos_pt/";
          
        },
      },{id: "post-a-sólida-performance-do-fluminense-na-fase-de-grupos-do-mundial-de-clubes",
        
          title: "A Sólida Performance do Fluminense na Fase de Grupos do Mundial de Clubes...",
        
        description: "A Sólida Performance do Fluminense na Fase de Grupos do Mundial de Clubes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/fluminense_grupos_pt/";
          
        },
      },{id: "post-a-dominante-performance-do-flamengo-na-fase-de-grupos-do-mundial-de-clubes",
        
          title: "A Dominante Performance do Flamengo na Fase de Grupos do Mundial de Clubes...",
        
        description: "A Dominante Performance do Flamengo na Fase de Grupos do Mundial de Clubes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/flamengo_grupos_pt/";
          
        },
      },{id: "post-a-surpreendente-performance-do-botafogo-na-fase-de-grupos-do-mundial-de-clubes",
        
          title: "A Surpreendente Performance do Botafogo na Fase de Grupos do Mundial de Clubes...",
        
        description: "A Surpreendente Performance do Botafogo na Fase de Grupos do Mundial de Clubes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/botafogo_grupos_pt/";
          
        },
      },{id: "post-nba-playoffs-o-duelo-dos-mvps",
        
          title: "NBA Playoffs : O Duelo dos MVPs",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/nba-playoffs_pt/";
          
        },
      },{id: "post-são-garrafa-niterói-2024-analisando-10-diferentes-corredores",
        
          title: "São Garrafa Niterói 2024 – Analisando 10 diferentes corredores",
        
        description: "Analisando desempenho de 10 diferentes corredores da São Garrafa 2024",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_sao_garrafa_pt/";
          
        },
      },{id: "post-maratona-do-rio-2023-exploratória-com-um-toque-de-estatística-e-modelagem-preditiva",
        
          title: "Maratona do Rio 2023 – Exploratória com um toque de estatística e modelagem...",
        
        description: "Analisando os dados dos resultados da Maratona do Rio 2023 e esboçando um simples modelo de predição de performance",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_marathon_pt/";
          
        },
      },{id: "post-prevendo-resultados-no-futebol-parte-3",
        
          title: "Prevendo Resultados no Futebol - Parte 3",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_poisson_3_pt/";
          
        },
      },{id: "post-prevendo-resultados-no-futebol-parte-1",
        
          title: "Prevendo Resultados no Futebol - Parte 1",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_pitagorica_1_pt/";
          
        },
      },{id: "post-análise-detalhada-do-bayer-leverkusen-jogadores-destaque",
        
          title: "Análise detalhada do Bayer Leverkusen - Jogadores Destaque",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_leverkusen_3_pt/";
          
        },
      },{id: "post-análise-detalhada-do-bayer-leverkusen-temporadas-anteriores-e-campanha-atual",
        
          title: "Análise detalhada do Bayer Leverkusen - Temporadas anteriores e campanha atual",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_leverkusen_2_pt/";
          
        },
      },{id: "post-análise-detalhada-do-bayer-leverkusen-estilo-de-jogo-de-xabi-alonso",
        
          title: "Análise detalhada do Bayer Leverkusen - Estilo de jogo de Xabi Alonso",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_leverkusen_1_pt/";
          
        },
      },{id: "post-copa-do-mundo-feminina-de-2023-análise-da-evolução-da-seleção-brasileira",
        
          title: "Copa do Mundo Feminina de 2023 - Análise da Evolução da Seleção Brasileira...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_women_world_cup_4_pt/";
          
        },
      },{id: "post-copa-do-mundo-feminina-de-2023-analisando-a-evolução-das-principais-equipes",
        
          title: "Copa do Mundo Feminina de 2023 - Analisando a evolução das principais equipes...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_women_world_cup_3_pt/";
          
        },
      },{id: "post-copa-do-mundo-feminina-de-2023-jogadoras-promissoras",
        
          title: "Copa do Mundo Feminina de 2023 - Jogadoras Promissoras",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_women_world_cup_2_pt/";
          
        },
      },{id: "post-copa-do-mundo-feminina-de-2023-analisando-as-finalistas",
        
          title: "Copa do Mundo Feminina de 2023 - Analisando as finalistas",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_women_world_cup_1_pt/";
          
        },
      },{id: "post-analisando-contratações-do-futebol-brasileiro-em-2024-setor-ofensivo-parte-2",
        
          title: "Analisando Contratações do Futebol Brasileiro em 2024 - Setor Ofensivo: Parte 2",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_contratacoes_2_pt/";
          
        },
      },{id: "post-campeonato-carioca-2024-final-segundo-jogo",
        
          title: "Campeonato Carioca 2024 - Final - Segundo Jogo",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_carioca_final2-pt/";
          
        },
      },{id: "post-campeonato-carioca-2024-final-primeiro-jogo",
        
          title: "Campeonato Carioca 2024 - Final - Primeiro Jogo",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_carioca_final1-pt/";
          
        },
      },{id: "post-campeonato-carioca-2024-semifinal-segundo-jogo",
        
          title: "Campeonato Carioca 2024 - Semifinal - Segundo Jogo",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_carioca_semifinal_2-pt/";
          
        },
      },{id: "post-campeonato-carioca-2024-semifinal-primeiro-jogo",
        
          title: "Campeonato Carioca 2024 - Semifinal - Primeiro Jogo",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_carioca_semifinal_1-pt-copy/";
          
        },
      },{id: "post-campeonato-carioca-2024-uma-análise-compilada",
        
          title: "Campeonato Carioca 2024 - Uma análise compilada",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_carioca_compilado-pt/";
          
        },
      },{id: "post-brasileirão-2024-5a-rodada",
        
          title: "Brasileirão 2024 - 5a Rodada",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_brasileirao_5-pt/";
          
        },
      },{id: "post-brasileirão-2024-4a-rodada",
        
          title: "Brasileirão 2024 - 4a Rodada",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_brasileirao_4-pt/";
          
        },
      },{id: "post-brasileirão-2024-3a-rodada",
        
          title: "Brasileirão 2024 - 3a Rodada",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_brasileirao_3-pt/";
          
        },
      },{id: "post-brasileirão-2024-2a-rodada",
        
          title: "Brasileirão 2024 - 2a Rodada",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_brasileirao_2-pt/";
          
        },
      },{id: "post-brasileirão-2024-primeira-rodada",
        
          title: "Brasileirão 2024 - Primeira Rodada",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_brasileirao_1-pt/";
          
        },
      },{id: "post-sob-pressão-brasil-muda-o-jogo-com-substituições-e-garante-empate",
        
          title: "Sob pressão, Brasil muda o jogo com substituições e garante empate",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_brasil_espanha-pt/";
          
        },
      },{id: "post-estrela-do-menino-endrick-brilha-e-brasil-supera-a-inglaterra",
        
          title: "Estrela do menino Endrick brilha e Brasil supera a Inglaterra",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_brasil_inglaterra-pt/";
          
        },
      },{id: "post-análise-das-melhores-ligas-de-futebol",
        
          title: "Análise das Melhores Ligas de Futebol",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2000/post_analise_ligas_pt/";
          
        },
      },{id: "projects-almir-monteiro",
          title: 'Almir Monteiro',
          description: "Systems Engineering  UFRJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/almir/";
            },},{id: "projects-amanda-azevedo",
          title: 'Amanda Azevedo',
          description: "Systems Engineering  UFRJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/amanda/";
            },},{id: "projects-antonio-magalhães",
          title: 'Antonio Magalhães',
          description: "Computer Engineering  UFRJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/antonio/";
            },},{id: "projects-balthazar-paixão",
          title: 'Balthazar Paixão',
          description: "Computer Science  Cefet/RJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/balthazar/";
            },},{id: "projects-brenno-santos",
          title: 'Brenno Santos',
          description: "Computer Engineering  UFRJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/brenno_santos/";
            },},{id: "projects-daniel-barros",
          title: 'Daniel Barros',
          description: "Computer Engineering  UFRJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/daniel_barros/";
            },},{id: "projects-eduardo-bezerra",
          title: 'Eduardo Bezerra',
          description: "Full Professor  Cefet/RJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/eduardo_bezerra/";
            },},{id: "projects-felipe-casalecchi",
          title: 'Felipe Casalecchi',
          description: "Computer Engineering  UFRJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/felipe_vilela/";
            },},{id: "projects-gabriel-madruga",
          title: 'Gabriel Madruga',
          description: "Systems Engineering  UFRJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gabriel_madruga/";
            },},{id: "projects-glauco-amorim",
          title: 'Glauco Amorim',
          description: "Full Professor  Cefet/RJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/glauco/";
            },},{id: "projects-hugo-antunes",
          title: 'Hugo Antunes',
          description: "Computer Engineering  UFRJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hugo/";
            },},{id: "projects-jorge-soares",
          title: 'Jorge Soares',
          description: "Full Professor  Cefet/RJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/jorge_soares/";
            },},{id: "projects-letícia-maia",
          title: 'Letícia Maia',
          description: "Computer Science  Cefet/RJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/leticia/";
            },},{id: "projects-lucas-calmon",
          title: 'Lucas Calmon',
          description: "Computer Science  Cefet/RJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lucas_calmon/";
            },},{id: "projects-lucas-tavares",
          title: 'Lucas Tavares',
          description: "Production Engineering  Cefet/RJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lucas_tavares/";
            },},{id: "projects-matheus-melo",
          title: 'Matheus Melo',
          description: "Computer Science  Cefet/RJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/matheus_melo/";
            },},{id: "projects-claudio-miceli",
          title: 'Claudio Miceli',
          description: "Associate Professor  PESC/COPPE/UFRJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/miceli/";
            },},{id: "projects-miguel-angelo",
          title: 'Miguel Angelo',
          description: "Computer Science  Cefet/RJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/miguel_angelo/";
            },},{id: "projects-murilo-jorge",
          title: 'Murilo Jorge',
          description: "Computer Engineering  UFRJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/murilo/";
            },},{id: "projects-nathália-tito",
          title: 'Nathália Tito',
          description: "Computer Science  Cefet/RJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nathalia/";
            },},{id: "projects-pedro-carvalho",
          title: 'Pedro Carvalho',
          description: "Eletronic Engineering  UFRJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pedro_carvalho/";
            },},{id: "projects-pedro-gonzález",
          title: 'Pedro González',
          description: "Assistant Professor  PESC/COPPE/UFRJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pedro_gonzalez/";
            },},{id: "projects-pedro-lopes",
          title: 'Pedro Lopes',
          description: "Computer Science  Cefet/RJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pedro_lopes/";
            },},{id: "projects-pedro-siqueira",
          title: 'Pedro Siqueira',
          description: "Computer Engineering  UFRJ",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pedro_siqueira/";
            },},{id: "safe_people-gabriel-reis",
          title: 'Gabriel Reis',
          description: "Pesquisador  SALab",
          section: "Safe_people",handler: () => {
              window.location.href = "/safe_people/gabrielReis/";
            },},{id: "safe_people-glauco-amorim",
          title: 'Glauco Amorim',
          description: "Professor  Cefet/RJ",
          section: "Safe_people",handler: () => {
              window.location.href = "/safe_people/glauco/";
            },},{id: "safe_people-letícia-maia",
          title: 'Letícia Maia',
          description: "Computer Science  Cefet/RJ",
          section: "Safe_people",handler: () => {
              window.location.href = "/safe_people/leticia_maia/";
            },},{id: "safe_people-lucas-carlos",
          title: 'Lucas Carlos',
          description: "Sports Rights Strategy Manager  Globo",
          section: "Safe_people",handler: () => {
              window.location.href = "/safe_people/lucas_carlos/";
            },},{id: "safe_people-lucas-tavares",
          title: 'Lucas Tavares',
          description: "Production Engineering  Cefet/RJ",
          section: "Safe_people",handler: () => {
              window.location.href = "/safe_people/lucas_giusti/";
            },},{id: "safe_people-martin-paré",
          title: 'Martin Paré',
          description: "Analista de Dados  Red Bull Bragantino",
          section: "Safe_people",handler: () => {
              window.location.href = "/safe_people/martin/";
            },},{id: "safe_people-matheus-caminha",
          title: 'Matheus Caminha',
          description: "Gerente de Ciência de Dados  Globo",
          section: "Safe_people",handler: () => {
              window.location.href = "/safe_people/matheus_caminha/";
            },},{id: "safe_people-matheus-melo",
          title: 'Matheus Melo',
          description: "Computer Science  Cefet/RJ",
          section: "Safe_people",handler: () => {
              window.location.href = "/safe_people/matheus_mello/";
            },},{id: "safe_people-pedro-gonzález",
          title: 'Pedro González',
          description: "Professor  PESC/COPPE/UFRJ",
          section: "Safe_people",handler: () => {
              window.location.href = "/safe_people/pedro_gonzalez/";
            },},{id: "safe_people-téo-benjamin",
          title: 'Téo Benjamin',
          description: "Gerente de Dados  Clube de Regatas do Flamengo",
          section: "Safe_people",handler: () => {
              window.location.href = "/safe_people/teo_benjamin/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%63%65@%63%6F%73.%75%66%72%6A.%62%72", "_blank");
        },
      },{
        id: 'social-company_linkedin',
        title: 'Company_linkedin',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/company/ac3lab", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
