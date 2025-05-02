---

layout: post

title: Análise das Melhores Ligas de Futebol

date: 2000-01-01 00:00:00

description:

tags: Football; Analysis

categories: Football; Analysis

thumbnail: assets/img/Posts_Images/2024-09-22-post_analise_ligas/ligas.png

author: Ace Laboratory Football Team - Lucas Calmon, Pedro Carvalho

published: false

---

---

  

<div  style="text-align: justify">
<h2>Introdução</h2>

No post de hoje decidimos tocar em um assunto que é discutido todo ano: Qual é a melhor liga do mundo? O Brasileirão faz parte dessas ligas? 
Vamos analisar desde o Valor de Mercado total até o desempenho de cada liga nas competições internacionais. Os campeonatos estudados foram: Premier League (Inglaterra), La Liga (Espanha), Ligue 1 (França), Bundesliga (Alemanha), Serie A (Itália) e Brasileirão (Brasil). Os torneios internacionais estudados foram a Copa Libertadores (Conmebol), Copa Sulamericana (Conmebol), Champions League (UEFA) e Europa League (UEFA).
 <br/><br/>

<h2> <b>Pesquisa</b> </h2>


Os dados utilizados nesta pesquisa foram coletados do Transfermarkt, que possui valores de mercado de cada equipe participante de cada uma das ligas estudadas por temporada; Sofascore, com as tabelas finais de classificação de cada temporada; UEFA, com os resultados da Champions League e da Europa League; CONMEBOL, com os resultados da Copa Libertadores e Copa Sul-Americana. Os últimos cinco anos foram levados em consideração: para times europeus, temporadas de 2019-2020 até 2023-2024, e para times brasileiros, temporadas de 2019 até 2023. Scripts foram utilizados para extrair os dados do Transfermarkt e do Sofascore.
<br/><br/>

 
<h2> <b>Valor de Mercado</b> </h2>

O gráfico de barras a seguir mostra o Valor de Mercado somado dos times por liga e por temporada. No caso do Brasileirão, 19-20 é a temporada de 2019, 20-21 é a temporada de 2020, e assim por diante. 
<br/><br/>
<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2024-09-22-post_analise_ligas/marketvalue.png" class="img-fluid rounded z-depth-1" %}

</div>

<center>Imagem 1. Valor de Mercado das Ligas nas últimas 5 temporadas<br/><br/></center>

A diferença da Premier League para as outras ligas é absurda, e o crescimento do valor de mercado por temporada é exponencial. O modelo financeiro de compra de times na Inglaterra pode influenciar nisso, já que muitos dos maiores times ingleses possuem donos bilionários que injetam dinheiro para contratações. O modelo de distribuição das vendas dos direitos de transmissão também ajudam nesse valor tão alto, já que as centenas de milhões de libras são divididas quase igualmente entre os clubes.
<br/><br/>
Entre as outras ligas europeias não é possível perceber uma alta variação entre as temporadas nem entre elas. Já ao comparar as ligas europeias com o Brasileirão a diferença colossal pode ser explicada por diversos motivos, desde a fraqueza da moeda brasileira em comparação com o euro até a venda precoce de promessas brasileiras para times europeus, muitas vezes motivada pela má gestão de clubes brasileiros que obriga os times a vender jogadores promissores para pagar as enormes dívidas.
<br/><br/>



<h2> <b>Aproveitamento em Confrontos Desiguais</b> </h2>

O Aproveitamento em Confrontos Desiguais (ACD) mede o desempenho de um time em jogos contra adversários cujo valor de mercado é inferior. A fórmula para calcular o ACD é simples: divide-se o número de pontos conquistados nesses confrontos pelo total de pontos disputados. <br/><br/>

Agora que entendemos o que é o ACD, vamos explicar por que ele é útil. Nosso objetivo é avaliar se times economicamente dominantes também apresentam superioridade esportiva, já que possuem elencos e infraestrutura melhores em comparação aos seus adversários nas ligas.
<br/><br/>

<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2024-09-22-post_analise_ligas/graficoACD.png" class="img-fluid rounded z-depth-1" %}

</div>

<center>Imagem 2. Gráfico de ACD médio das ligas nas últimas 5 temporadas<br/><br/></center>

Com base no gráfico que mostra a média do ACD por temporada em cada campeonato analisado, percebemos que, no Brasileirão, o aproveitamento em confrontos desiguais é o mais baixo entre as seis ligas, o que indica que os times de menor valor de mercado conseguem competir de forma mais equilibrada contra os grandes clubes nacionais. Já na Premier League e na Bundesliga, a tendência é oposta, com os times de maior valor de mercado apresentando um aproveitamento médio significativamente mais alto em comparação com as outras ligas.
<br/><br/>


<h2> <b>Competições Internacionais</b> </h2>

As tabelas a seguir mostram o número de derrotas dos clubes brasileiros por fase nas Copas Libertadores e Sulamericana nas últimas 5 temporadas. <br/><br/>

<h3> <b>Copa Libertadores</b></h3>
A dominância do Brasil na maior competição de clubes da América do Sul é incontestável. Das últimas cinco finais, todas tiveram times brasileiros, três foram completamente brasileiras e cinco títulos foram para o Brasil. A diferença de nível técnico entre os clubes brasileiros de alto escalão contra a dos outros times da América do Sul pode se dar por vários motivos. Além de outros países serem menores e mais pobres que o Brasil, alguns também passam por grandes crises econômicas, como é a Argentina, país com o maior número de títulos da Glória Eterna. Mas o Brasil dominou os últimos anos, e a tendência é continuar assim. Outra possível análise é o grande número de talentos exportados dos países “menores” da América Latina para o futebol brasileiro de alto nível, o que faz com que as ligas percam nível técnico e compitam cada vez menos com os gigantes brasileiros. <br/><br/>
<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2024-09-22-post_analise_ligas/tabelaliba.png" class="img-fluid rounded z-depth-1" %}

</div>

<center>Imagem 3. Número de times brasileiros por fase da Libertadores por ano<br/><br/></center>

<h3> <b>Copa Sulamericana</b></h3>
Já na Copa Sulamericana o cenário é outro: nas últimas cinco finais, o Brasil “só” tem um título e três participações (com uma final brasileira). Por que essa diferença em relação à Libertadores? Será que o grande número de vagas distribuídas para times do Brasileirão faz com que times mais fracos e menos experientes joguem e percam precocemente? Mas esse esquema pode estar prestes a mudar. De 2019 pra cá, o número de clubes brasileiros caindo na fase de grupos vem diminuindo bastante, em troca do aumento de quedas nas fases mais tardias do campeonato. Também, desde a final brasileira de 2021, o Brasil participou de todas as finais do campeonato, apesar de não ter conseguido mais títulos. <br/><br/>
<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2024-09-22-post_analise_ligas/tabelasula.png" class="img-fluid rounded z-depth-1" %}

</div>

<center>Imagem 4. Número de times brasileiros por fase da Sulamericana por ano<br/><br/></center>

O fato é: nas últimas cinco temporadas o Brasil conquistou seis títulos dos principais campeonatos internacionais da América. Mas qual é a situação no Velho Continente?
<br/><br/>
As tabelas a seguir mostram o número de derrotas dos clubes europeus das ligas citadas por fase nas Ligas dos Campeões e Europa nas últimas 5 temporadas.
<h3> <b>Liga dos Campeões</b></h3>
Na Liga dos Campeões, a França e a Itália não ganharam títulos, mas tiveram dois vices. O que elas têm de diferente em relação às ligas campeãs? A França teve o menor número de participantes alcançando as oitavas de finais e menos participações no total, com apenas dois times chegando nas semis: Lyon e PSG (2 vezes). A Itália foi o país com mais número de quedas nas oitavas de final, com pouco aproveitamento.
Outra coisa interessante que podemos notar: A Espanha teve 100% de aproveitamento em finais, vencendo as duas que participou. Agora a Inglaterra teve uma performance extraordinária: conseguiu dois títulos e dois vices, com uma final completamente inglesa. Ou seja, teve o melhor desempenho, participando em 3 das 5 finais.
 <br/><br/>
<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2024-09-22-post_analise_ligas/tabelachamp.png" class="img-fluid rounded z-depth-1" %}

</div>

<center>Imagem 5. Número de times de cada país por fase da UCL nos últimos 5 anos<br/><br/></center>

<h3> <b>Liga Europa</b></h3>
Na Liga Europa o cenário se altera: A Espanha dominou o período com 100% de aproveitamento em decisões, com três finais alcançadas e três títulos conquistados. Novamente, a França é o país com o menor número de participações na competição. Apenas três times franceses conseguiram passar da fase de grupos. A Itália conseguiu alcançar três finais, mas conseguiu superar seu adversário em apenas uma. Os números da Alemanha são semelhantes nas duas competições, com nada se sobressaindo.
A maior diferença entre os resultados das competições se encontra no desempenho da Inglaterra: na Liga Europa, os ingleses só conseguiram alcançar uma final, e foram vice-campeões.
 <br/><br/>
<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2024-09-22-post_analise_ligas/tabelaeuro.png" class="img-fluid rounded z-depth-1" %}

</div>

<center>Imagem 6. Número de times de cada país por fase da UEL nos últimos 5 anos<br/><br/></center>


<br/><br/>

<h2> <b>Discussão</b> </h2>
A partir das análises acima iremos unir todas essas informações para tentar encontrar a resposta para a pergunta da introdução ‘Qual é a melhor liga do mundo?’ Essa pergunta carrega um grau de subjetividade, haja vista que depende do que quer se observar em um campeonato.
 <br/><br/>
Olhando pelo âmbito da liga mais valiosa do mundo, a escolha seria a Premier League, com um valor maior que 12 bilhões de euros na última temporada e que vem crescendo exponencialmente ano após ano.
 <br/><br/>

Em termos de Aproveitamento em Confrontos Desiguais, a liga brasileira apresenta um ACD médio baixo, o que indica que os times de menor valor de mercado conseguem competir mais de igual para igual e conquistar mais pontos contra os clubes mais ricos. O que acarreta em campeonatos com uma maior imprevisibilidade em seus resultados e por consequência mais competitividade.
 <br/><br/>
Observando a performance dos países em competições internacionais, passa a ficar mais subjetivo. Na América do Sul, o Brasil é dominante, com 6 títulos conquistados nos últimos cinco anos, sendo 5 deles na competição mais difícil das Américas. Já na Europa, há uma variedade maior de campeões: apenas a França não conseguiu um título. A Espanha conseguiu o maior número de títulos (5), e a Inglaterra empata com a Espanha em mais finais disputadas (5 de 10).
 <br/><br/>

<h2> <b>Conclusão</b> </h2>


Qual é a melhor liga do mundo?
Depende do ponto de vista. As ligas europeias possuem maior valor de mercado, o que significa ter os melhores jogadores e os melhores técnicos e, portanto, o jogo possui uma qualidade alta. Entretanto, a imprevisibilidade dos confrontos é menor e, de certa forma, menos empolgante. Já na liga brasileira, podemos notar que o menor ACD médio confere à liga uma maior imprevisibilidade e, esse fator, traz uma sensação de empolgação para o campeonato. Provavelmente, essa imprevisibilidade está relacionada com a qualidade dos jogadores e que influenciam na qualidade dos jogos. Portanto, responder a pergunta sobre qual liga é melhor vai depender do ponto de vista do torcedor. 
<br/><br/>
Agradecemos a leitura e fiquem ligados nos próximos posts!
<br/><br/>


<div>

