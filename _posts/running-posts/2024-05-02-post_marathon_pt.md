---
layout: post
title: "Maratona do Rio 2023 – Exploratória com um toque de estatística e modelagem preditiva"
date: 2000-01-01 00:00:00
description: Analisando os dados dos resultados da Maratona do Rio 2023 e esboçando um simples modelo de predição de performance
tags: Running; Rio Marathon; Python; MachineLearning
categories: Running; Rio Marathon; Python; MachineLearning
thumbnail: assets/img/Posts_Images/2024-05-02-post_marathon/0.jpeg
author: Ace Laboratory Running Team

---

{% include figure.liquid path="assets/img/Posts_Images/2024-05-02-post_marathon/0.jpeg" class="img-fluid rounded z-depth-1" %}

<p align="justify">
Conveniência, praticidade e benefícios para saúde são alguns dos motivos que tornam a corrida um esporte atrativo, democrático e popular. É por isso que a corrida de rua vem ganhando expressão no mundo inteiro e que eventos como maratona já atrai milhares de atletas, seja elite ou amador. No Rio de Janeiro, por exemplo, a 21ª edição da Maratona ocorreu no feriadão de Corpus Christ de 2023, e contou com mais de 40 mil inscrições (considerando todos os percursos), movimentando a cidade inclusive economicamente.
</p>

<p align="justify">
O percurso de 42k, que passa pelos principais cartões postais da cidade, consagrou o queniano Josphat Kiprotich e a etíope Zinash Debebe como os vencedores da prova, ambos do pelotão de elite masculino e feminino. Kiprotich terminou a prova em 2h13min29s – dois segundos mais rápido que a marca anterior, enquanto Debebe finalizou em 2h36min00s.
</p>

<p align="justify">
Em pouco mais de um mês a cidade contará com mais uma edição do evento, e como estímulo para preparação, realizamos uma breve análise exploratória - com um toque preditivo - nos dados dos resultados do pelotão geral de 2023, de maneira que consigamos revelar alguns insights sobre a prova. Bora ver!
</p>

Exploratória

<p align="justify">
Ao todo, foram analisadas informações de 5799 atletas do grupo geral, sendo 30% do gênero feminino. Dentre os inscritos, quando olhamos os grupos etários, a faixa com maior concentração, tanto de homens quanto de mulheres, é a de 40-44 anos. No gráfico abaixo conseguimos ver como se dá essa frequência nos diferentes grupos:
</p>

{% include figure.liquid path="assets/img/Posts_Images/2024-05-02-post_marathon/1.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
Quando olhamos a frequência de atletas pela ótica da performance, vemos que há uma maior concentração de homens com tempo final de 3,5-4 horas. Já para o gênero feminino a maior concentração está em 4-4,5 horas. 5 mulheres finalizaram a prova com menos de 3 horas.
</p>

{% include figure.liquid path="assets/img/Posts_Images/2024-05-02-post_marathon/2.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
O menor tempo feminino foi de 2h55min04s enquanto que o masculino foi de 2h28min33s. Já os maiores tempos foram 6h39min23s e 6h42min59s respectivamente, lembrando que estamos olhando para o tempo líquido (tempo entre o cruzamento das linhas de largada e chegada). No gráfico abaixo conseguimos ver as distribuições de tempo por gênero:
</p>

{% include figure.liquid path="assets/img/Posts_Images/2024-05-02-post_marathon/3.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
Também é possível visualizar a distribuição do tempo final por faixa etária e para cada gênero declarado:
</p>

{% include figure.liquid path="assets/img/Posts_Images/2024-05-02-post_marathon/4.png" class="img-fluid rounded z-depth-1" %}

{% include figure.liquid path="assets/img/Posts_Images/2024-05-02-post_marathon/5.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
Para os dois gêneros, a faixa que chama atenção por ter os atletas mais rápidos é a de 30-34 anos. Além disso, o grupo masculino teve 2 atletas inscritos com mais de 80 anos, o que deixa cada vez mais claro que para o esporte realmente não existe idade.
</p>

Predição de performance

<p align="justify">
Usando como referência o artigo Prediction Marathon Using Artificial Intelligence [Lerebourg et al. 2023] e o artigo Pacing strategy of the finishers of the world marathon majors series [Kais et al. 2018], que avaliam o efeito de variáveis como gênero e idade na predição de performance usando modelos de regressão, utilizamos essas mesmas informações para treinar também um modelo de regressão multivariado que busca prever o tempo de conclusão da prova.
</p>

<p align="justify">
Para isso, usamos a biblioteca em python <a href="https://www.statsmodels.org/stable/index.html">statsmodels</a>, depois de realizar todo pré-processamento necessário nos dados e separá-los em treino e teste. Abaixo o gráfico que confronta o tempo real vs. o que foi predito pelo modelo:
</p>

{% include figure.liquid path="assets/img/Posts_Images/2024-05-02-post_marathon/6.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
Pelo gráfico, uma conclusão que podemos tirar é que os valores previstos pelo modelo não acompanham os valores reais, na medida que eles vão crescendo. Além disso, avaliando as estatísticas da modelagem, a variável gênero aparentemente não exerce significância estatística na predição (p-value = 0.721). Sendo assim, nota-se a necessidade de contemplar outras variáveis na modelagem. Alguns trabalhos na literatura sugerem o uso das mais diversas informações na predição, como dados antropométricos, fisiológicos, biomecânicos, além de informações de treinamento como experiência, ritmo de passada e concentração de lactato sanguíneo.
</p>

Resultados resumidos:

{% include figure.liquid path="assets/img/Posts_Images/2024-05-02-post_marathon/7.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
Por fim,  o gráfico de distribuição dos resíduos, já que uma das premissas para um bom ajuste de um modelo de regressão linear é que os resíduos sejam normalmente distribuídos:
</p>

{% include figure.liquid path="assets/img/Posts_Images/2024-05-02-post_marathon/8.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
A distribuição se assemelha a normal, porém com uma tímida assimetria positiva (concentração à esquerda). Existem vários testes que podemos realizar pra fazer essa verificação, e alguns deles já constam no quadro de resumo dos resultados, exposto acima. A <a href="https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.skew.html">Skewness</a>, por exemplo, já aponta a não normalidade e a assimetria da distribuição do erro (quanto mais próximo de 0 mais “normal” é a distribuição) e a <a href="https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.kurtosis.html">Kurtosis</a> também, já que está associada ao achatamento da distribuição (para valores > 3 a distribuição é mais “alta” que a distribuição normal).
</p>

<p align="justify">
Nesse caso, importante ficarmos alertas na avaliação dos intervalos de confiança, que podem estar equivocados. Além dessa, existem outras premissas para um bom fit de uma regressão, como expectativa nula e independência dos resíduos e homoscedasticidade (variação constante dos resíduos), mas como não é o foco do post, fica para um próximo debate.
</p>

Discussão

<p align="justify">
Nesse post vimos algumas estatísticas descritivas dos resultados da Maratona do Rio 2023 do grupo geral, visualizando como a performance se dá para os diferentes grupos etários e por gênero. Nesses dados, esboçamos um simples modelo de predição de performance, mas já gerando a provocação do quão desafiador pode ser a construção desse tipo de modelo com poucas informações. 
</p>

<p align="justify">
A corrida de rua é um esporte que vem crescendo muito e o debate sobre contribuintes para melhora na performance está longe de se esgotar. Esperamos absorver e contribuir cada vez mais desse processo.
</p>

<p align="justify">
Esperamos que tenha aproveitado a leitura e qualquer sugestão é bem vinda.
</p>

Referências

https://maratonadorio.com.br/<br>
https://www.folhavitoria.com.br/esportes/blogs/corridaderua/2023/08/17/estudo-realizado-na-maratona-do-rio-2023-comprova-o-sucesso-do-evento-deste-ano/<br>
Ülari K., et al. Pacing strategy of the finishers of the world marathon majors series. Institute of Sport Sciences and Physiotherapy, University of Tartu, Tartu, Estonia. 2018.<br>
Lerebourg, L. et al. Prediction Marathon Using Artificial Intelligence. Int J Sports Med, 2023, 44: 352–360.