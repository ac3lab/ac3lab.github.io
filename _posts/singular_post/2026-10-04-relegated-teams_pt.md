---
layout: post
title: "O que os dados dizem sobre os times rebaixados"
date: 2000-10-04 00:00:00
description: "Como se comportam os clubes rebaixados no Brasileirão e nas principais ligas europeias entre 2005 e 2015?"
tags: Football; Analysis; Relegation
categories: Sports; Analysis
thumbnail: assets/img/Posts_Images/2026-10-04-relegated-teams/pt/image1.png
author: ACE Laboratory Team

hidden: true
hidden_post: true
---

---

<p align="justify">
If you want to read this text in en-us, <a href="https://ac3lab.github.io/blog/2026/relegated-teams_en/">click here.</a>
</p>

<style>body {text-align: justify}</style>

<h2><b>Introdução</b></h2>

<p>No contexto do futebol, boa parte das ligas nacionais ao redor do mundo trabalha com o esquema de rebaixamento/subida de divisão, isto é: as equipes que ao fim do campeonato apresentam os piores desempenhos durante a temporada são substituídas por times recém-promovidos no campeonato seguinte. Para os clubes que "caem", essa mudança muitas vezes representa não somente um planejamento esportivo fracassado, mas também uma necessidade de readequação, tanto financeira quanto esportiva, para a próxima temporada.</p>

<p>Neste post, o objetivo é entender um pouco mais o desempenho dos clubes que são rebaixados. Esse estudo consiste em comparar esses clubes de 3 formas diferentes:</p>

<ul>
  <li>Clubes: Analisar as diferenças entre os clubes rebaixados comparando-os com outros presentes na mesma liga, no mesmo ano.</li>
  <li>Liga: Analisar as diferenças entre os clubes rebaixados de uma liga comparando-os com outros rebaixados de ligas diferentes.</li>
  <li>Tempo: Analisar a rotatividade dos clubes que foram rebaixados ou subiram de divisão em diferentes ligas.</li>
</ul>

<p>A partir desse comparativo, buscamos entender um pouco melhor o desempenho dessas equipes em diferentes aspectos.</p>

<h2><b>Dados</b></h2>

<p>Foram utilizados neste estudo dados simples de partidas da 1ª divisão dos campeonatos brasileiro, inglês, espanhol, alemão e francês entre as temporadas de 2005 e 2015.</p>

<h2><b>Divisão em quintis</b></h2>

<p>Para realizarmos as comparações, foi feita a separação dos clubes de cada temporada em 5 grupos (quintis) com base na sua classificação final. Isto é: o Q1 representa os melhores times, enquanto o Q5 representa os piores. Com base nesses grupos, realizamos os comparativos descritos abaixo.</p>

<p>Antes dos resultados, duas observações sobre o alcance da análise. No Brasileirão, que rebaixa quatro clubes por temporada, o Q5 corresponde praticamente à zona de rebaixamento. Nas ligas europeias, que rebaixam menos clubes, o Q5 também inclui equipes que escaparam da queda por pouco. Ao longo do texto, tratamos o Q5 como o grupo dos rebaixados, e essa aproximação deve ser levada em conta na leitura. Além disso, a análise usa apenas resultados de partidas e tem caráter exploratório: o objetivo é descrever padrões entre ligas e grupos de times, e as explicações discutidas para esses padrões, como a distribuição de receitas, são interpretações que não foram testadas diretamente nos dados.</p>

<h2><b>Resultados</b></h2>

<p>As duas primeiras análises, de aproveitamento e de mando de campo, comparam os quintis dentro de cada liga e entre ligas, cobrindo os eixos Clubes e Liga. A análise de rotatividade cobre o eixo Tempo.</p>

<h3><b>Aproveitamento</b></h3>

<p>O aproveitamento é o percentual dos pontos disputados que um time conquistou. A partir dos resultados abaixo (Figuras 1 e 2), nota-se que o aproveitamento médio dos times "da parte de baixo da tabela" é próximo independentemente da liga ou temporada analisada: em média, o Q5 fica entre <b>28% e 33%</b> em todas as ligas. Por outro lado, quando olhamos para a parte de cima, a diferença de aproveitamento entre os times de Q1 e Q2 evidencia o distanciamento, nas ligas europeias, dos times de "elite" em relação ao resto das equipes. Essa diferença fica em cerca de <b>9 pontos percentuais</b> no Brasileirão, contra algo entre <b>12 e 18</b> nas ligas europeias.</p>

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 600px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-10-04-relegated-teams/pt/image1.png" title="Figura 1: Evolução do aproveitamento médio por quintil no Brasileirão (2005–2015)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Figura 1: Evolução do aproveitamento médio por quintil no Brasileirão (2005–2015).<br/><br/></center>

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 800px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-10-04-relegated-teams/pt/image2.png" title="Figura 2: Evolução do aproveitamento médio por quintil na Premier League, La Liga, Bundesliga e Ligue 1 (2005–2015)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Figura 2: Evolução do aproveitamento médio por quintil na Premier League, La Liga, Bundesliga e Ligue 1 (2005–2015).<br/><br/></center>

<p>Essa análise se mantém quando observamos a matriz de confronto entre times de agrupamentos distintos (Figuras 3 e 4). A estrutura é a mesma em todas as ligas: o aproveitamento de um time cai à medida que o adversário pertence a um quintil melhor. A intensidade, porém, varia. Contra o Q1, os times do Q5 conquistaram <b>21%</b> dos pontos no Brasileirão, contra <b>11% a 17%</b> nas ligas europeias; no sentido oposto, o Q1 fez <b>71%</b> dos pontos contra o Q5 no Brasil e entre <b>75% e 84%</b> na Europa. Os confrontos entre o topo e a base da tabela são, portanto, mais equilibrados no Brasil.</p>

<p>Na diagonal das matrizes, em que times do mesmo quintil se enfrentam, o aproveitamento fica perto de 45% em todas as ligas, um pouco abaixo dos 50% que se poderia esperar. A diferença vem dos empates: em confrontos equilibrados, vitórias e derrotas se compensam, mas cada empate distribui apenas 2 dos 3 pontos em disputa.</p>

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 600px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-10-04-relegated-teams/pt/image3.png" title="Figura 3: Aproveitamento por confronto entre quintis no Brasileirão (2005–2015)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Figura 3: Aproveitamento (%) por confronto entre quintis no Brasileirão (2005–2015). Cada célula mostra o aproveitamento dos times do quintil da linha contra adversários do quintil da coluna.<br/><br/></center>

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 800px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-10-04-relegated-teams/pt/image4.png" title="Figura 4: Aproveitamento por confronto entre quintis nas ligas europeias (2005–2015)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Figura 4: Aproveitamento (%) por confronto entre quintis na Premier League, La Liga, Bundesliga e Ligue 1 (2005–2015), com a mesma leitura da Figura 3.<br/><br/></center>

<h3><b>Mando de campo</b></h3>

<p>Nos times da parte de baixo da tabela (Q4 e Q5), o mando de campo apresenta relevância reduzida em comparação com os demais competidores (Figura 5). No Brasileirão, na Bundesliga e na Premier League, o menor bônus é o do Q5; na La Liga e na Ligue 1, o Q4 fica ligeiramente abaixo dele. A dificuldade em ser dominante dentro de casa é, portanto, uma característica das equipes que brigam contra o rebaixamento. Esse padrão é particularmente significativo quando contextualizado no Campeonato Brasileiro, liga em que esse fator tende a ser mais relevante: o bônus do Q5 brasileiro, de cerca de <b>23 pontos percentuais</b>, é praticamente igual ao maior bônus observado nas ligas europeias.</p>

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 600px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-10-04-relegated-teams/pt/image5.png" title="Figura 5: Bônus de mando de campo por quintil e liga (2005–2015)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Figura 5: Bônus de mando de campo por quintil e liga (2005–2015), em pontos percentuais de aproveitamento a mais em casa.<br/><br/></center>

<h3><b>Rotatividade entre promovidos e rebaixados</b></h3>

<p>Por fim, a comparação entre ligas revela que o Campeonato Brasileiro possui maior rotatividade entre divisões em relação aos campeonatos europeus (Figura 6), demonstrando que os recém-promovidos brasileiros enfrentam obstáculos significativos para se consolidar. A dificuldade aparece depois do primeiro ano: <b>71%</b> dos promovidos no Brasil continuam na elite após uma temporada, contra <b>cerca de 60%</b> na Premier League, na Bundesliga e na Ligue 1. A queda vem nos anos seguintes, e no terceiro ano o Brasileirão já tem a menor taxa de permanência entre as cinco ligas (<b>22%</b>).</p>

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 600px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-10-04-relegated-teams/pt/image6.png" title="Figura 6: Rotatividade entre divisões (2005–2015)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Figura 6: Rotatividade entre divisões (2005–2015). À esquerda, percentual de recém-promovidos que permanecem na 1ª divisão sem interrupção; à direita, percentual acumulado de rebaixados que retornaram à 1ª divisão.<br/><br/></center>

<p>Esse fenômeno provavelmente está associado à distribuição desigual de receitas (patrocínios, cotas televisivas). Ligas que concentram recursos tendem a manter disparidades orçamentárias duradouras. A Premier League, apesar de sua distribuição mais justa, ainda exemplifica isso: equipes promovidas enfrentam elevado risco de rebaixamento inicial pela disparidade entre divisões, mas, se conseguem se manter nos primeiros anos, gradualmente se equiparam aos concorrentes. Em contrapartida, o Campeonato Brasileiro apresenta dinâmica distinta, em que a distribuição notoriamente desigual de receitas entre clubes dificulta a ascensão de equipes recém-promovidas e perpetua sua alta probabilidade de rebaixamento mesmo quando conseguem se manter nos primeiros anos.</p>

<p>No caminho inverso, o painel da direita da Figura 6 mostra que, em todas as ligas, entre <b>44% e 56%</b> dos rebaixados retornam à 1ª divisão em até cinco anos. Nenhum deles volta no primeiro ano, já que a temporada seguinte ao rebaixamento é obrigatoriamente disputada na divisão inferior.</p>

<h2><b>Conclusão</b></h2>

<p>Ao fim deste estudo, podemos concluir que os times rebaixados realmente enfrentam realidades diferentes de acordo com a liga. No Brasil, os recém-promovidos costumam passar pela primeira temporada, mas poucos conseguem se manter na elite nos anos seguintes. No contexto europeu, apesar de as equipes recém-promovidas correrem maior risco nas primeiras temporadas, é mais provável que elas consigam se estabilizar na divisão de cima no decorrer dos anos.</p>

<p>Quando entramos mais a fundo no campo, um traço característico dos times rebaixados foi a dificuldade em estabelecer dominância em seu território. Essa estatística, novamente, se destaca no contexto do Campeonato Brasileiro, em que o mando de campo se mostra ainda mais relevante quando comparado com as outras ligas.</p>

<p>Para pesquisas e análises futuras, um caminho possível é analisar os jogadores e técnicos dessas equipes, buscando tendências na composição desses elencos e comissões técnicas.</p>
