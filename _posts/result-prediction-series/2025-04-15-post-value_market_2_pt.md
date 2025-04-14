---
layout: post
title: "Prevendo Resultados no Futebol - Parte 2"
date: 2025-04-15 00:00:00
description:
tags: Football; Analysis
categories: Football; Analysis
thumbnail: assets/img/Posts_Images/2025-02-12-post_pitagorica_1/thumbprevisao.jpg
author: Ace Laboratory Football Team - Lucas Calmon, Pedro Carvalho
---

<h2> <b> Introdução </b> </h2>
<div style="text-align: justify">
Neste post, vamos apresentar mais um método para previsão de vitória. Desta vez, utilizaremos como variável principal o valor de mercado dos times, que corresponde à soma dos valores de mercado individuais de todos os jogadores da equipe. Vamos explorar como essa métrica pode influenciar o desempenho dos clubes e sua chance de vencer uma partida.
</div>

<h3> <b> Contextualização </b> </h3>
<div style="text-align: justify">
O dinheiro tem um grande papel no futebol moderno. Com o mercado de transferências cada vez mais inflacionado, mostra-se necessário gastar cada vez mais dinheiro nas janelas de transferências para manter a competitividade nas maiores ligas. A exponente profissionalização do esporte também possui grande influência no encarecimento do custo de manter um time, visto que atualmente são necessários mais gastos em estrutura e um ambiente de qualidade para se manter na frente dos demais.
<br></br>
Inclusive, estudos na Premier League e Championship (2011-2020) mostraram que existe uma correlação entre a folha salarial de um time e a posição que esse time alcança na tabela (Soccernomics, Simon Kuper e Stefan Szymansk). O dinheiro move o futebol. Por isso, vamos utilizar o valor de mercado dos clubes do Brasileirão para tentar prever o resultado final das partidas.

{% include figure.html path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img1.png" class="img-fluid rounded z-depth-1" %}
</div>

<h3> <b> Método </b> </h3>

<h4><b>Dados</b></h4>
<div style="text-align: justify">
Nós iremos usar os dados da temporada 2023.
<br></br>
O dataset tem duas partes principais:
<ul>
    <br>
  <li>Os dados das partidas: informações como time da casa, time visitante, resultado, data da partida e odds de vitória (casa, empate, visitante), extraídas do site <a  href = (https://football-data.co.uk/)">Footbal-data</a> e da casa de apostas Pinnacle.</li>
  <li>O valor de mercado dos times do Brasileirão 2023, retirados do site <a  href = "(https://www.transfermarkt.com.br)">Transfermarkt</a>.</li>
</ul>

Vamos agora dar uma olhada no nosso dataset das partidas. Ele possui cerca de 19 campos, mas só os seguintes nos interessam:

{% include figure.html path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img2.png" class="img-fluid rounded z-depth-1" %}
<br><br>
<b>Legenda:</b> home: Time mandante; away: Time visitante; res: Resultado da partida; oddHome: Chance da vitória do time mandante; oddDraw: Chance do empate; oddAway: Chance da vitória do time visitante.
<br><br>
Iremos transformar odds em probabilidades. Para isso, não utilizamos apenas a fórmula (1/odds), pois a soma das probabilidades seria maior que 1. Esse excesso representa a margem de lucro das casas de apostas, então normalizamos as probabilidades para corrigi-la.

{% include figure.html path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img3.png" class="img-fluid rounded z-depth-1" %}
</div>

<h4>Vamos observar os dados de valor de mercado agora:</h4>

{% include figure.html path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img4.png" class="img-fluid rounded z-depth-1" %}
<div style="text-align: justify">
A coluna <code>TFM_Value</code> contém o valor de mercado em milhões de euros. Por exemplo, o valor de mercado do Palmeiras é de 138,4 milhões de euros. Esses dados representam os valores de mercado dos clubes no dia 20 de Julho de 2024.
<br></br>
Unimos os dois datasets, adicionando as colunas de valor de mercado do time da casa (<code>tmH</code>) e do visitante (<code>tmA</code>).

{% include figure.html path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img5.png" class="img-fluid rounded z-depth-1" %}


A variável que vamos utilizar para realizar a previsão de resultados é a razão entre o <code>tmH</code> (valor de mercado do time da casa) e <code>tmA</code> (valor de mercado do time da visitante). Mais especificamente o <b>logaritmo</b> dessa razão.

O motivo de utilizarmos o log é pelo fato de que a distribuição da razão entre <code>tmH</code> e <code>tmA</code> estar inclinada para a direita. A aplicação da função log leva a uma distribuição simétrica, o que melhora a performance. A imagem abaixo ajudam a visualizar isso.

{% include figure.html path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img6.png" class="img-fluid rounded z-depth-1" %}

</div>

{% include figure.html path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img7.pngg" class="img-fluid rounded z-depth-1" %}

Então o <code>logTmRatio</code> será a variável que iremos utilizar para a previsão de resultados. Em outras palavras, a nossa variável independente.

<div style="text-align: justify">
Codificamos a coluna <code>res</code> com:
<ul>
  <li>0: vitória do time da casa</li>
  <li>1: empate</li>
  <li>2: vitória do time visitante</li>
</ul>
Essa nova coluna será chamada de <code>winValue</code>.

{% include figure.html path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img8.png" class="img-fluid rounded z-depth-1" %}

</div>

<h3><b>Modelo</b></h3>
<div style="text-align: justify">

Nós iremos usar um modelo de <b>Regressão Logística Ordinal</b> que consiste em uma técnica utilizada para modelar a relação entre uma variável de resposta ordinal, ou seja categorias que possuem ordem, e uma ou mais variáveis preditoras. No nosso caso, a variável de resposta ordinal é o <code>winValue</code> e a variável preditora será o <code>logTmRatio</code>.

O modelo consiste em descobrirmos o \( \alpha_1 \) que é o ponto que divide a vitória do mandante e empate ou vitória do visitante, ou seja, se um ponto cair antes de \( \alpha_1 \), o modelo preverá a vitória do mandante e se cair após \( \alpha_1 \), preverá o empate ou vitória do visitante. Já o \( \alpha_2 \) é o ponto que divide o empate e a vitória do visitante. O \( \beta \) indica como a variável preditiva, no nosso caso a razão do valor de mercado, influencia no resultado.

Para uma melhor visualização dessa explicação, basta observar o gráfico abaixo, no qual o \( \alpha_1 \) é representado por \( \theta_1 \):

{% include figure.html path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img9.png" class="img-fluid rounded z-depth-1" %}



Usamos um modelo de Regressão Logística Ordinal, que relaciona uma variável resposta ordinal (<code>winValue</code>) a uma preditora contínua (<code>logTmRatio</code>).

O modelo encontra dois pontos de corte:
<ul>
  <li><b>\( \alpha_1 \)</b>: separa vitória do mandante de empate ou vitória do visitante</li>
  <li><b>\( \alpha_2 \)</b>: separa empate de vitória do visitante</li>
</ul>
O coeficiente do <code>logTmRatio</code> nos diz como essa razão influencia o resultado.
<br></br>
Agora que entendemos sobre o modelo, vamos preparar o seu treinamento. O dataset de treino consiste nos primeiros 200 jogos da temporada e os 180 jogos restantes serão usados como dataset de teste.

{% include figure.html path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img10.png" class="img-fluid rounded z-depth-1" %}

<br><br>
<b>Coeficientes do modelo:</b><br>
\(\beta \): -0.6309<br>
\( \alpha_1 \): -0.1519<br>
\( \alpha_2 \): 0.0533


</div>

<h4><b>Cálculo das probabilidades</b></h4>
<div style="text-align: justify">
A partir desses coeficientes, calculamos:
<ul>
  <li><b>Ph (vitória do mandante)</b>: \( \frac{1}{1 + e^{-(( \alpha_1 - βx)}} \)</li>
  <li><b>Pd (empate)</b>: \( \frac{1}{1 + e^{-(( \alpha_2 \) - βx)}} - Ph \)</li>
  <li><b>Pv (vitória do visitante)</b>: \( 1 - Ph - Pd \)</li>
</ul>

{% include figure.html path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img11.png" class="img-fluid rounded z-depth-1" %}

Vamos adicionar colunas que compare os resultados de previsão da Pinnacle e o que encontramos.

{% include figure.html path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img12.png" class="img-fluid rounded z-depth-1" %}
</div>

<h3> <b> Avaliação </b> </h3>
<div style="text-align: justify">
Lembrando que utilizamos os primeiros 200 jogos para treinar o nosso modelo, por isso vamos comparar os resultados de previsão do nosso conjunto de teste.

{% include figure.html path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img13.png" class="img-fluid rounded z-depth-1" %}

O valor que mais nos interessa está destacado que é a média de acertos de resultados da casa de apostas e do nosso modelo. Repare que são valores próximos e até mesmo a casa de apostas teve menos de 50% de acerto.

Uma coisa importante para se considerar ao analisar esses dados é o tamanho do conjunto de treino que só teve 200 partidas e obtivemos um resultado de 0.03 de diferença para a casa de aposta.

Vamos fazer duas tabelas cruzadas para entendermos melhor em quais tipos de jogos nosso modelo mais erra e acerta.

{% include figure.html path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img14.png" class="img-fluid rounded z-depth-1" %}

Note que na coluna de empates o nosso modelo não previu empates, isso é causado pelo fato de que a razão entre o valor de mercado de dois times têm uma probabilidade muito baixa de se relacionar com empate, já que se imagina que os valores de mercados do times teriam que ser próximos entre si.

{% include figure.html path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img15.png" class="img-fluid rounded z-depth-1" %}

Os números estão bem dispersos, mas percebesse que o nosso modelo acerta mais do que o Pinnacle no quesito vitória do visitante, enquanto a Pinnacle tem a maioria dos seus acertos nas vitórias dos times da casa.

</div>

<h2> <b> Conclusão </b> </h2>
<div style="text-align: justify">
No próximo post, abordaremos a previsão de resultados com base na distribuição de Poisson, uma famosa distribuição usada para prever eventos raros. Fique atento às nossas redes sociais para não perder nenhuma novidade do blog!
</div>
