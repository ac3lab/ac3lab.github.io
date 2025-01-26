---
layout: post
title: "São Garrafa Niterói 2024 – Analisando 10 diferentes corredores"
date: 2000-01-01 00:00:00
description: Analisando desempenho de 10 diferentes corredores da São Garrafa 2024
tags: Running; São Garrafa; Python; Analytics; Statistics
categories: Running; São Garrafa; Python; Analytics; Statistics
thumbnail: assets/img/Posts_Images/2025-01-28-post_sao_garrafa/imagem_0.png

---

{% include figure.html path="assets/img/Posts_Images/2025-01-28-post_sao_garrafa/imagem_0.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
No dia 15 de dezembro de 2024 aconteceu a última edição da São Garrafa, corrida bem tradicional da cidade de Niterói (RJ). O evento, que contou com os trajetos de 5km e 15km, é conhecido por ter grandes desafios no percurso de maior distância: são quase 4km de subida, e em determinados pontos fica bastante íngreme.
</p>

<p align="justify">
No total, 1.973 corredores completaram a prova, sendo 1.010 no percurso de 5km e 963 no percurso de 15km. Aqui vale destacar uma curiosidade: no percurso de menor distância, a maioria do público foi feminina (cerca de 63%); já no de maior distância, o público foi majoritariamente masculino, com participação 38% feminina.
</p>

<p align="justify">
Como sabe-se que as condições climáticas podem impactar diretamente no desempenho dos atletas, outro ponto que vale destacar aqui é que a prova começou às 6:30am, e que durante o período da prova o céu estava bastante nublado, garoando em determinados momentos. Segundo alguns participantes, o fato de a prova começar bem cedo, somado às condições climáticas, favoreceram o desempenho no percurso, já que em dezembro faz bastante calor em Niterói.
</p>

Vamos para a análise!

<p align="justify">
O objetivo desse post é analisar o desempenho de alguns participantes para trazer luz e comprovar algumas hipóteses que já conhecemos através de outros estudos e trabalhos relacionados.
</p>

<p align="justify">
10 atletas que participaram da prova e utilizaram o aplicativo <a href="https://www.strava.com/">Strava</a> forneceram consentimento para participar da análise, além de ceder a base de dados da prova que foi captada pelo app. Nela, é possível analisar informações como velocidade, distância, cadência, entre outras. Além disso, os corredores voluntários responderam um breve questionário, que continha informações relacionadas a treinamento, preparação para a prova, e experiência.
</p>

De modo geral, sobre os participantes:

<ul>
    <li>Todos eles tinham o hábito de correr e praticar outros exercícios;</li>
    <li>Apenas 4 fizeram o percurso da prova anteriormente;</li>
    <li>9 dentre os 10 se prepararam para a prova de maneira mais abrangente.</li>
</ul>

Exploratória

<p align="justify">
Os dados extraídos pelo Strava e cedidos pelos participantes foram levados para o Python para uma análise exploratória um pouco mais detalhada. Importante destacar que retiramos 2 corredores da análise, por conta de dados inconsistentes - muito possivelmente por conta de falha de captação dos dados de GPS durante a prova.
</p>

<p align="justify">
No gráfico abaixo, é possível visualizar o desempenho de cada participante (média do pace) por distância percorrida:
</p>

{% include figure.html path="assets/img/Posts_Images/2025-01-28-post_sao_garrafa/imagem_2.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
De cara, os corredores 1, 5, 6 e 10 chamam atenção por manterem um baixo pace durante todo o trajeto - em média 4'30’'. Acaso? Provavelmente não, porque esses foram justamente os 4 corredores que treinaram o percurso da prova antes dela acontecer, e para simplificar o entendimento daqui pra frente, chamaremos esse grupo de “corredores conhecedores do percurso”. Esse ponto escancara o quão importante é a preparação e conhecimento do trajeto antes de uma prova desafiadora.
</p>

<p align="justify">
Notem, que entre os quilômetros 5 e 8, todos os atletas apresentaram uma diminuição em suas velocidades (aumento do pace). Essa é exatamente uma parte do percurso com uma subida bastante íngreme, na qual é bem difícil preservar o ritmo. Aqui, foi realizado um teste estatístico que compara o ritmo dos corredores conhecedores do percurso com os não conhecedores, e é possível afirmar que nesse trecho do percurso existe uma diferença estatisticamente significativa (p-valor < 0.05) nas velocidades desses dois grupos.
</p>

<p align="justify">
Neste outro gráfico, é possível visualizar também o desempenho de cada participante, mas agora por tempo de prova. Mais uma vez, destaque para os corredores conhecedores do percurso por, obviamente, serem os corredores a finalizarem a prova mais rápido.
</p>

{% include figure.html path="assets/img/Posts_Images/2025-01-28-post_sao_garrafa/imagem_1.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
No geral, os corredores conhecedores do percurso estiveram a uma velocidade de caminhada (aqui foi estabelecido convenção de 5km/h) menos vezes quando comparados aos não conhecedores. Outro ponto que reforça a ideia de que atletas “mais treinados” naturalmente têm melhor desempenho, está no tempo de experiência. Os corredores conhecedores do percurso totalizam, em média, 5 anos de experiência na corrida cada, enquanto que os não conhecedores totalizam em média 1 ano.
</p>

<p align="justify">
Também foi possível comparar o desempenho por faixa de elevação (em metros), como mostra o gráfico abaixo. Os corredores 1 e 5 chamam a atenção por suas pequenas oscilações de ritmo, na medida que o patamar de elevação vai ficando mais alto, evidenciando capacidade de manter o ritmo quase que constante, como mostrado acima. Um estudo realizado anteriormente aborda esse ponto com um pouco mais de profundidade, sugerindo que corredores mais experientes apresentam menos pontos de mudança em suas séries de velocidade, ou seja, menos mudanças bruscas. O artigo completo encontra-se <a href="https://sol.sbc.org.br/index.php/sbbd/article/view/30754">aqui</a>!
</p>

{% include figure.html path="assets/img/Posts_Images/2025-01-28-post_sao_garrafa/imagem_3.png" class="img-fluid rounded z-depth-1" %}

Discussão

<p align="justify">
Ao analisar o desempenho dos corredores monitorados pelo Strava, juntamente com as informações de preparo e experiência no esporte, foi possível validar algumas ideias já levantadas por outros estudos em um caso real de prova: preparo e treino estão fortemente correlacionados com um bom desempenho. 
</p>

<p align="justify">
De acordo com a análise, os corredores conhecedores do percurso tiveram um melhor resultado, com uma manutenção mais consistente do ritmo durante a corrida, quando comparado aos outros. Possivelmente, o conhecimento prévio do trajeto possibilitou a esses corredores uma melhor adaptação às dificuldades. É importante mencionar que existem outras variáveis que não foram consideradas nesta análise, como alimentação, histórico de lesão, idade, anatomia do corpo, entre outras que, de acordo com a literatura, também exercem influência nos resultados. 
</p>

<p align="justify">
Nosso objetivo foi ilustrar em um caso real como algumas dessas variáveis estão ligadas, e levantar a provocação para trabalhos futuros considerando outros fatores de influência para avaliação - e até mesmo previsão - do desempenho.
</p>

Qualquer sugestão é bem vinda!

Referências

https://neorace.com.br/resultados/g-live.html?f=2024%2Fdez%2Fsgf%2Fsgf.clax

TITO, Nathália; PAIXÃO, Balthazar; TAVARES, Lucas G.; OGASAWARA, Eduardo; AMORIM, Glauco F.. Diferenciando Perfis de Corredores por Meio de Pontos de Mudança nos Treinos. In: SIMPÓSIO BRASILEIRO DE BANCO DE DADOS (SBBD), 2024, Florianópolis/SC. Porto Alegre: Sociedade Brasileira de Computação. p. 834-840.