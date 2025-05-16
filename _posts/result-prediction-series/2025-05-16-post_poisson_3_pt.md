---

layout: post

title: "Prevendo Resultados no Futebol - Parte 3"

date: 2000-01-01 00:00:00

description:

tags: Football; Analysis

categories: Football; Analysis

thumbnail: assets/img/Posts_Images/2025-02-12-post_pitagorica_1/thumbprevisao.jpg

author: Ace Laboratory Football Team - Lucas Calmon, Pedro Carvalho

hidden: true
hidden_post: true
giscus_comments: true

---

<h2> <b> Introdução </b></h2>
  
<div  style="text-align: justify">

Neste último post da série de Previsão de Resultados, vamos apresentar a Distribuição de Poisson. Desta vez, vamos fazer algo diferente: explicaremos o que é a Distribuição de Poisson e o passo a passo de como prever qual será o placar de uma partida. <br/><br/>

<h3> <b> A distribuição de Poisson </b> </h3>


A distribuição de Poisson é uma distribuição de probabilidade discreta que expressa a probabilidade de ocorrência de um determinado número de eventos em um intervalo fixo de tempo ou espaço. Ele pressupõe que esses eventos ocorram com uma taxa média conhecida e independentemente do tempo decorrido desde o último evento. <br/><br/>

<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2025-05-16-post_poisson_3/image1.png" class="img-fluid rounded z-depth-1" %}


</div>

<center>A fórmula da distribuição de Poisson. <br/><br/></center>

O lado esquerdo da fórmula da distribuição de Poisson, P(X = k), representa a probabilidade de ocorrência de exatamente k eventos em um intervalo fixo. Aqui,  X é o número de eventos e k é o número específico no qual estamos interessados. <br/><br/>

O numerador do lado direito, e<sup>-λ</sup> λ<sup>k</sup>, tem duas partes. λ<sup>k</sup> mostra a probabilidade de ocorrência de k eventos com base na taxa média λ. O e<sup>-λ</sup> é responsável pela aleatoriedade dos eventos, garantindo que a probabilidade diminua à medida que o número de eventos se desvia da taxa esperada. <br/><br/>

O denominador do lado direito, k! ajusta a quantidade de maneiras pelas quais os eventos x podem ocorrer. A notação fatorial calcula o número de arranjos possíveis, garantindo que a probabilidade reflita o fato de que a ordem dos eventos não importa. <br/><br/>

<h3> <b> Como usar no futebol? </b> </h3>

Antes de tudo, é necessário esclarecer uma coisa: Existem diversos modelos de previsão de gols com distribuição de poisson, mas nós vamos utilizar o mais simples, que utiliza apenas o histórico de partidas das duas equipes. Modelos mais complexos podem levar em conta outras variáveis, como qualidade do gramado, histórico de disputas entre as equipes, entre outros. <br/><br/>

Para começar, precisamos decidir que jogos queremos prever: pra esse post vamos tentar prever o número de gols de um clássico Fla-Flu (com o Fluminense como Mandante) em 2023, utilizando os dados dos dois times da temporada 2022 do Brasileirão. <br/><br/>

<h3> <b> Preparando a tabela </b> </h3>

Utilizamos os resultados de todas as partidas do Brasileirão 2022, extraídos do site FBREF. Os dados no site vem com diversas informações, mas só vamos usar o resultado de cada partida. Para realizar os passos seguintes, foi necessário separar os dados em “Mandante”, “Visitante”, “Gols do Mandante” e “Gols do Visitante”. <br/><br/>

<h3> <b> Calcular a Capacidade Ofensiva e Defensiva do Campeonato </b> </h3>

Para prever o número de gols de um time, primeiro devemos calcular a Capacidade Ofensiva e a Capacidade Defensiva dos times do Brasileirão, baseando-se na última temporada.  <br/><br/>

A Capacidade Ofensiva é a média dos gols marcados por cada equipe, tanto em casa como fora. Ou seja, a conta é a seguinte: <br/><br/>

<ul>
<li>Total de gols marcados em casa/número de jogos</li>
<li>Total de gols marcados fora/número de jogos</li>
</ul>

<br/><br/>

Na temporada 2022 do Brasileirão, houve 534 gols em casa e 371 fora. Divididos pelo número de jogos (380), temos a Média de Gols Marcados em Casa como 1,405 e a Média de Gols Marcados Fora de Casa como 0,976.<br/><br/>

Já a Capacidade Defensiva é a média dos gols sofridos por cada equipe, ou seja, o inverso da Capacidade Ofensiva, já que o número de gols marcados pelo time da casa é igual ao número de gols sofridos pela equipe visitante. Então a Média de Gols Sofridos em Casa é 0,976, e a Média de Gols Sofridos Fora de Casa é 1,405. <br/><br/>

Agora nós podemos utilizar essas médias da liga para calcular as capacidades dos times que desejamos estudar. <br/><br/>

<h3> <b> Prever os gols do Fluminense </b> </h3>

Para calcular a Capacidade Ofensiva do Fluminense, precisamos pegar o número de gols marcados em Casa pelo Flu na temporada 2022 (39) e dividir pelo número de jogos em Casa (19) = 2,052. Então pegamos esse valor e dividimos pela Média de Gols Marcados em Casa na liga (1,405), obtendo uma Capacidade Ofensiva de 1,460.<br/><br/>

Agora precisamos calcular a Capacidade Defensiva do Flamengo, para assim prever o número de gols do Fluminense. Para isso, pegamos o número de gols sofridos Fora de Casa pelo Flamengo (24) e dividimos isso pelo número de jogos fora (19) = 1,263. Então dividimos esse valor pela Média de Gols Sofridos Fora de Casa na liga (1,405), obtendo uma Capacidade Defensiva de 0,898.<br/><br/>

Agora podemos fazer o seguinte cálculo para chegar no número provável de gols que o Fluminense marcará: Multiplicamos a Capacidade Ofensiva do Fluminense (1,460) pela Capacidade Defensiva do Flamengo (0,898) e a Média de Gols marcados em Casa (1,405).
<br/><br/>

<b>1.460 × 0.898 × 1.405 = 1.845 </b> <br/><br/>

<h3> <b> Prever os gols do Flamengo </b> </h3>

Para calcular o número de gols que o Flamengo pode marcar, é só utilizar as fórmulas acima, mas substituindo o número médio de gols marcados em casa pelo número médio de gols marcados fora de casa.<br/><br/>
<ul>
<li>Capacidade Ofensiva do Fla: (23/19) / 0.976 = 1.239</li>
<li>Capacidade Defensiva do Flu: (20/19) / 0.976 = 1.078</li>
</ul>
<br/><br/>
Então, multiplicamos esses valores com a Média de Gols marcados Fora de Casa: <br/><br/>
 <b>1.239 × 1.078 × 0.976 = 1.305 </b>

<h3> <b> Utilizar a Distribuição de Poisson </b> </h3>

 Como nenhum jogo termina de 1,845 a 1,305, agora nós podemos usar esses números junto com a Distribuição de Poisson para distribuir 100% da probabilidade em um intervalo de gols marcados para cada equipe. Nós queremos prever a chance de cada time marcar um certo número de gols na partida (no nosso caso, de 0 a 5) -o número de ocorrências do evento-, e pra isso utilizaremos a probabilidade de gols que calculamos (1,845 para o Flu e 1,305 para o Fla) -as ocorrências esperadas.  <br/><br/>

Podemos fazer isso facilmente com Python utilizando o comando:<br/><br/>
{% highlight python linenos %}
poisson.pmf(NumOcorrencias, OcorrenciasEsp)
{% endhighlight %}
<br/><br/>

Calculando isso 6 vezes para cada time, chegamos no seguinte vetor:

<table>
  <thead>
    <tr>
      <th style="color: white;">gols</th>
      <th style="color: white;">Fluminense</th>
      <th style="color: white;">Flamengo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="color: white;">0 gols</td>
      <td style="color: white;">15.80%</td>
      <td style="color: white;">27.11%</td>
    </tr>
    <tr>
      <td style="color: white;">1 gols</td>
      <td style="color: white;">29.15%</td>
      <td style="color: white;">35.39%</td>
    </tr>
    <tr>
      <td style="color: white;">2 gols</td>
      <td style="color: white;">26.90%</td>
      <td style="color: white;">23.09%</td>
    </tr>
    <tr>
      <td style="color: white;">3 gols</td>
      <td style="color: white;">16.54%</td>
      <td style="color: white;">10.05%</td>
    </tr>
    <tr>
      <td style="color: white;">4 gols</td>
      <td style="color: white;">7.63%</td>
      <td style="color: white;">3.28%</td>
    </tr>
    <tr>
      <td style="color: white;">5 gols</td>
      <td style="color: white;">2.82%</td>
      <td style="color: white;">0.86%</td>
    </tr>
  </tbody>
</table>


Uma vez que esses resultados são independentes, o resultado esperado da partida seria 1x1, já que a maior possibilidade para os dois times é marcar um gol. Multiplicando as probabilidades de cada time marcar um gol, conseguimos a probabilidade de um resultado 1x1 = 0,1031. <br/><br/>
 <b>0.2915 × 0.3539 = 0.1031</b><br/><br/>

Utilizando o comando np.outer com esses dois vetores, conseguimos a probabilidade de cada combinação de resultado para a partida.<br/><br/>
<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2025-05-16-post_poisson_3/image2.png" class="img-fluid rounded z-depth-1" %}


</div>

<center>Somando as probabilidades acima da linha diagonal (Fluminense ganha) chegamos na probabilidade do Fluminense vencer: 48,96% <br/>
Somando as probabilidades da diagonal chegamos a chance de um empate: 22,75% <br/>
Somando as probabilidades abaixo da linha diagonal (Flamengo ganha) chegamos na probabilidade do Flamengo vencer: 26,91%
 <br/><br/></center>

 <h2> <b> Conclusion </b> </h2>


<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2025-05-16-post_poisson_3/image3.png" class="img-fluid rounded z-depth-1" %}


</div>

<center>Tivemos 3 empates, 2 vitórias do Flamengo e 1 vitória do Fluminense.
Em jogos que o Fluminense foi mandante, tivemos dois empates e uma vitória do Fluminense.
 <br/><br/></center>

A partir desse resultado podemos comparar com o primeiro confronto dos times no ano de 2023, que foi realizado na última rodada da taça guanabara em que o placar foi 2x1 para o time do Fluminense. O resultado do jogo é o segundo mais provável segundo o nosso modelo, o que indica que o jogo foi dentro da tendência esperada pelo desempenho ofensivo e defensivo dos times na temporada anterior.  <br/><br/>
Além disso, não foram utilizados os dados dos jogos anteriores do Campeonato Carioca de 2023, que geram valores de capacidade ofensiva e defensiva mais atualizados e consequentemente uma nova distribuição de probabilidades.  <br/><br/>
Com essa análise encerramos nossa série de posts, na qual mostramos alguns modelos de previsão aplicados ao futebol e como podemos usá-los para entender melhor o esporte.




<div>
