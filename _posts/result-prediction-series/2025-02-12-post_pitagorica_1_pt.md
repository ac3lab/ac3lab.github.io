---

layout: post

title: "Prevendo Resultados no Futebol - Parte 1"

date: 2000-01-01 00:00:00

description:

tags: Football; Analysis

categories: Football; Analysis

thumbnail: assets/img/Posts_Images/2025-02-12-post_pitagorica_1/thumbprevisao.jpg

author: Ace Laboratory Football Team - Lucas Calmon, Pedro Carvalho

---

---

<h2> <b> Introdução </b></h2>
  
<div  style="text-align: justify">

Nessa série de posts nós vamos estudar alguns métodos para tentar prever a porcentagem de vitória dos clubes de futebol. Neste primeiro post iremos falar sobre duas estatísticas: a porcentagem de vitória e uma variação dela chamada de expectativa pitagórica. Serão utilizados dados das últimas temporadas de algumas das grandes ligas europeias (23-24) e do Brasileirão (24), extraídos no site FBREF.  <br/><br/>

<h3> <b> O que é a Expectativa Pitagórica </b> </h3>

A expectativa pitagórica é uma fórmula analítica utilizada inicialmente no beisebol. Ela foi criada pelo Bill James, um famoso estatístico pioneiro na área de dados esportivos que criou dúzias de livros com o objetivo de estudar o beisebol por meio de dados estatísticos, tentando determinar o porquê times ganham e perdem. Enfim, essa expectativa pitagórica tem o objetivo de estimar a porcentagem de jogos que um time deveria ter vencido baseado no número de corridas que eles completaram e concederam. No cenário do futebol, o utilizado seria gols feitos e gols concedidos. <br/><br/>


<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.html path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image1.png" class="img-fluid rounded z-depth-1" %}


</div>

<center>O nome da estatística se dá a semelhança da fórmula ao teorema de pitágoras. <br/><br/></center>


Comparar a porcentagem de vitória de um time com a expectativa pitagórica pode ser usado para avaliar quais times estão performando acima do esperado e quais estão piores do que se espera deles. <br/><br/>



<h3> <b> A Pesquisa</b> </h3>

Os dados utilizados consistem em uma tabela com todos os resultados de partidas da temporada de cada liga, coletados no <a  href = "https://fbref.com/pt/comps/24/cronograma/Serie-A-Resultados-e-Calendarios">FBREF</a>. <br/><br/>

<h3> <b> Preparação dos dados e definição das porcentagens </b> </h3>

Após extração dos dados e uma limpeza básica da tabela, o resultado é um DataFrame no formato abaixo. Uma temporada tem 380 jogos, e para o cálculo da porcentagem de vitória e da expectativa pitagórica, precisaremos das seguintes informações: o resultado da partida definirá a porcentagem de vitória do time e os gols marcados e concedidos irão definir a expectativa pitagórica. <br/><br/>

<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.html path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image2.png" class="img-fluid rounded z-depth-1" %}

</div>

<center>Esse é o formato dos dados extraídos do FBREF. <br/><br/></center>


Separamos os gols de cada equipe e definimos qual time foi o vencedor de cada partida do campeonato. Assim, podemos calcular a porcentagem de vitória -vitória vale 1, empate vale 0.5 e derrota vale nada-, e a soma desses valores é dividida pelo número de partidas jogadas. (<a  href = "https://en.wikipedia.org/wiki/Winning_percentage">Wikipedia</a>). <br/><br/>

Depois de ajustar a tabela e calcular a porcentagem de vitória das equipes, separamos os dados entre Primeiro Turno e Segundo Turno, ou seja, antes e depois da rodada 20. A tabela do Primeiro Turno do campeonato fica mais ou menos assim: <br/><br/>

<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.html path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image3.png" class="img-fluid rounded z-depth-1" %}

</div>

<center> G: número de partidas jogadas; W: valor de cada partida, estimado para o cálculo da porcentagem de vitórias; GF: gols feitos; GA: gols concedidos; wpc: porcentagem de vitória <br/><br/></center>

Para finalizar nossa tabela, calculamos a expectativa pitagórica e juntamos as tabelas do Primeiro e do Segundo Turno de acordo com o time. <br/><br/>

<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.html path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image4.png" class="img-fluid rounded z-depth-1" %}

</div>

<center> Valores com <b>x</b> são relacionados ao primeiro turno, e os valores com <b>y</b> são do segundo turno</center>

Código do cálculo de wpc e pyth: <br/> <br/>

{% highlight python linenos %}
PrimeiroTurno['win_percentage'] = PrimeiroTurno['W'] / PrimeiroTurno['G']  # percentual de vitórias - (Vitórias) / (Jogos Jogados)  
PrimeiroTurno['pythagorean'] = PrimeiroTurno['GF']**2 / (PrimeiroTurno['GF']**2 + PrimeiroTurno['GA']**2)  # expectativa pitagórica - (Gols Pró)^2 / ((Gols Pró)^2 + (Gols Contra)^2)  
{% endhighlight %}
<br/><br/>



<h3> <b> Falando dos gráficos de regressão e da correlação </b></h3>

Como podemos ver na imagem abaixo, a expectativa pitagórica no primeiro turno da Premier League é bastante relacionada com a porcentagem de vitória, como esperado. <br/><br/>

<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.html path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image5.png" class="img-fluid rounded z-depth-1" %}

</div>

<center> Relação entre a <b>pythagorean_x</b> e a <b>win_percentage_x</b> no Primeiro Turno. A linha no gráfico é uma regressão linear ajustada aos dados, que representa a relação entre as duas variáveis. <br/><br/></center>


Mas o que nós queremos saber é: qual das duas estatísticas têm uma relação maior com a porcentagem de vitória da equipe ao final do campeonato? Para analisar isso, podemos gerar uma tabela de correlação entre essas estatísticas no Primeiro Turno do campeonato e no Segundo Turno.  <br/><br/>

<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.html path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image6.png" class="img-fluid rounded z-depth-1" %}

</div>

<center> Tabela de Correlação da Premier League. <br/><br/></center>

Como podemos ver pelos valores marcados na imagem, existe uma correlação maior entre <b>pythagorean_x</b> e <b>win_percentage_y</b> (0.80) do que entre <b>win_percentage_x</b> e <b>win_percentage_y</b> (0.75). Apesar de ser uma diferença pequena, isso mostra que a expectativa pitagórica tem um poder preditivo melhor que a porcentagem de vitória. 
Esse é o resultado da Premier League. Qual seria o resultado em outras ligas? <br/><br/>

<h4> <b> Bundesliga </b></h4>
<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.html path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image7.png" class="img-fluid rounded z-depth-1" %}

</div>

<center> Tabela de Correlação da Bundesliga. <br/><br/></center>

<h4> <b> La Liga </b></h4>
<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.html path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image8.png" class="img-fluid rounded z-depth-1" %}

</div>

<center> Tabela de Correlação da La Liga. <br/><br/></center>

<h4> <b> Serie A </b></h4>
<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.html path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image9.png" class="img-fluid rounded z-depth-1" %}

</div>

<center> Tabela de Correlação da Serie A. <br/><br/></center>

<h4> <b> Ligue One </b></h4>
<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.html path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image10.png" class="img-fluid rounded z-depth-1" %}

</div>

<center> Tabela de Correlação da Ligue One. <br/><br/></center>

Como podemos ver, na liga alemã, espanhola e italiana os valores são um pouco menores, mas a expectativa pitagórica continua tendo um poder preditivo maior que a porcentagem de vitória. Já na liga francesa, apesar do valor abaixo de 50% da correlação entre os resultados do Primeiro Turno com os resultados do Segundo Turno, a expectativa pitagórica continua tendo um valor maior do que a porcentagem de vitória.
Por enquanto, está tudo dentro do esperado. O interessante é quando começamos a analisar a liga brasileira. <br/><br/>

<h4> <b> Brasileirão </b></h4>
<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.html path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image11.png" class="img-fluid rounded z-depth-1" %}

</div>

<center> Tabela de Correlação do Brasileirão. <br/><br/></center>

Na liga brasileira, além dos valores do Primeiro Turno terem menos de 30% de correlação com os resultados da segunda metade do campeonato, a porcentagem de vitória tem uma correlação maior que a expectativa pitagórica! É a única das 6 ligas estudadas onde esse fato é observado. <br/><br/>

<h2> <b> Conclusion </b></h2>

A partir do resultado do experimento, decidimos analisar quanto o rendimento difere de um turno para o outro de acordo com a liga para entendermos melhor as ligas mais ‘imprevisíveis’. Para isso, calculamos a média e a mediana dessa variação em todas as ligas estudadas. O Brasileirão se destacou como a competição com a maior oscilação entre turnos, superando as ligas europeias. A surpresa ficou por conta da La Liga, que apresentou uma variação relativamente alta para os padrões europeus. <br/><br/>


<table>
  <thead>
    <tr>
      <th style="color: white;">Ligas</th>
      <th style="color: white;">Mediana da Diferença de Aproveitamento</th>
      <th style="color: white;">Média da Diferença de Aproveitamento</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="color: white;">Premier League</td>
      <td style="color: white;">20.78%</td>
      <td style="color: white;">27.13%</td>
    </tr>
    <tr>
      <td style="color: white;">La Liga</td>
      <td style="color: white;">21.64%</td>
      <td style="color: white;">36.83%</td>
    </tr>
    <tr>
      <td style="color: white;">Ligue 1</td>
      <td style="color: white;">23.25%</td>
      <td style="color: white;">32.35%</td>
    </tr>
    <tr>
      <td style="color: white;">Série A</td>
      <td style="color: white;">18.61%</td>
      <td style="color: white;">27.39%</td>
    </tr>
    <tr>
      <td style="color: white;">Bundesliga</td>
      <td style="color: white;">21.30%</td>
      <td style="color: white;">26.35%</td>
    </tr>
    <tr>
      <td style="color: white;">Brasileirão</td>
      <td style="color: white;">32.14%</td>
      <td style="color: white;">38.76%</td>
    </tr>
  </tbody>
</table>


<br/><br/>
<h4>Cálculo da diferença de aproveitamento:</h4>  

\[
\left( \frac{\text{Aproveitamento 2° Turno}}{\text{Aproveitamento 1° Turno}} - 1 \right) \times 100\%
\]



<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.html path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image12.png" class="img-fluid rounded z-depth-1" %}

</div>

<center> Variação entre os aproveitamentos dos clubes brasileiros no Primeiro Turno e no Segundo Turno do Brasileirão. <br/><br/></center>

O gráfico acima mostra a alta variação entre os aproveitamentos dos clubes brasileiros no Primeiro Turno e no Segundo Turno do Brasileirão. Clubes como Vitória, Grêmio, Fluminense e Corinthians tiveram péssimos resultados na primeira metade do campeonato, mas tiveram valores acima da média na segunda metade, enquanto clubes como Atlético Mineiro, Cruzeiro e Bahia foram bem no Primeiro Turno e pioraram no Segundo. Por que será que isso acontece? <br/><br/>

Podemos supor alguns motivos, como aumento do investimento com o passar do tempo, a constante troca de técnicos ou a pressão da torcida após resultados ruins, forçando diretorias a investir mais em reforços; mas o motivo real necessitaria de uma pesquisa mais aprofundada sobre o tema. <br/><br/>

No próximo post, abordaremos a previsão de resultados com base no valor de mercado dos clubes, que será nossa variável principal. Fique atento às nossas redes sociais para não perder nenhuma novidade do blog! <br/><br/>


<div>
