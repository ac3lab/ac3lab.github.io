---
layout: post
title: Running — Parte 1: Extraindo meus dados do Nike Run Club e explorando em Python para avaliar minha performance
date: 2024-01-06 11:12:00-0400
description: Como utilizei métodos de data science para avaliar meu desempenho na corrida
tags: Running
categories: sample-posts
---

{% include figure.html path="assets/img/Posts_Images/2021-01-07-post_running-images/1.jpg" class="img-fluid rounded z-depth-1" %}

Quem me conhece sabe que eu amo esporte. Desde pequena, sempre fui influenciada a praticar algum e nunca fiquei muito tempo sem. Já passei por alguns deles: natação, futsal, handebol (ainda jogo) e agora corrida, meu mais recente amor.

De uns meses pra cá, a corrida tem se tornado parte da minha rotina. Toda semana eu tenho tentado correr de 2 a 3 vezes, e sempre ao ar livre (detesto esteira com todas as minhas forças). Pra mensurar meu desempenho, nos últimos meses tenho corrido com o aplicativo Nike Run Club (NRC), e gravado minhas corridas nele. Olhando esses dados no app, senti a necessidade de fazer uma análise mais, digamos que, elaborada, sobre a minha performance. Foi aí que outra paixão entrou na jogada: data science.

Quem também me conhece sabe que sou cientista de dados e que dificilmente acredito em algo ou tomo alguma decisão sem evidência. É meio clichê, mas analisar tudo também é parte da minha rotina, e sendo assim, por que não trazer os dados ao meu favor, para que, quem sabe, eles possam me ajudar a tomar decisões que melhorem minhas corridas? É isso que quero começar a testar. Let’s code!

Extração dos dados

Primeiramente eu precisava dos dados das minhas corridas. Fazendo uma pesquisa rápida, percebi que a Nike não fornecia a exportação dos dados de maneira oficial, e que pra isso era necessário tomar caminhos alternativos.

Utilizei um programinha chamado nrc-exporter (criado por algum programador curioso), que exporta os dados para um diretório local de maneira fácil e rápida. Como primeiro passo, devemos executar no terminal a instalação com pip install nrc-exporter. A parte chatinha é que precisamos fornecer ao programa tokens de autenticação que a Nike gera quando você faz login, o que é simples, porém manual:

1) Entrar no site da Nike e realizar login normalmente;
2) Abrir as ferramentas do desenvolvedor > Application. Daí basta copiar o token conforme essa imagem aqui:

{% include figure.html path="assets/img/Posts_Images/2021-01-07-post_running-images/2.jpg" class="img-fluid rounded z-depth-1" %}

Agora de novo no terminal, basta executar o nrc-exporter com o token, bem assim:

nrc-exporter -t token

Você verá essa execução:

{% include figure.html path="assets/img/Posts_Images/2021-01-07-post_running-images/3.jpg" class="img-fluid rounded z-depth-1" %}

E pronto! Todos os dados serão baixados para uma pasta chamada activities que ficará dentro da pasta onde você executa o script. Os dados de cada corrida estarão em arquivos no formato .json.

Caso esse processo não funcione, existem outros meios. Vou deixar o link aqui caso queiram saber mais sobre o nrc-exporter.

Exploratória

Carreguei os arquivos em um jupyter notebook para fazer as análises. Como todos eles estão em formato .json, utilizar a função json_normalize() do pandas ajuda bastante.

Depois do tratamento, criação, seleção e tranformação das variáveis — como pace médio, por exemplo, que vem em total minuto e não em minutos'segundos'' como estamos habituados a olhar — , que queria analisar, meu dataframe final ficou assim:

{% include figure.html path="assets/img/Posts_Images/2021-01-07-post_running-images/4.jpg" class="img-fluid rounded z-depth-1" %}

Pra contextualizar, algumas estatísticas descritivas:

{% include figure.html path="assets/img/Posts_Images/2021-01-07-post_running-images/5.jpg" class="img-fluid rounded z-depth-1" %}

Analisei um período de 137 dias (pouco mais de 4 meses), que foi o período em que comecei a registrar minhas corridas no NRC. Nesse período, realizei 31 corridas que totalizaram 180km! Calculei também a média do intervalo em dias entre uma corrida e outra. Tirando o período que fiquei impossibilitada de correr (20 dias), que entendi como um outlier que não deveria ser levado em consideração, vi que esse intervalo é de 4 dias.

Considerando essas 31 corridas, a distância média foi de 5,81km e meu pace médio foi de 6'24'' por km. Também com essas corridas totalizei uma perda de 9981 calorias!

Vamos para as análises gráficas:

{% include figure.html path="assets/img/Posts_Images/2021-01-07-post_running-images/6.jpg" class="img-fluid rounded z-depth-1" %}

O gráfico acima ilustra a evolução do meu pace médio no decorrer das corridas e a média de todos eles. Vemos que nas minhas últimas corridas meu pace tem ficado acima dessa média.

Como mencionado acima, criei uma variável chamada “dias sem correr” que nada mais é que o intervalo em dias entre uma corrida e outra, na tentativa de entender se meu pace subia conforme ficava muitos dias sem a corrida. Veja que os picos na linha cinza meio que acompanham a os picos da linha roxa no gráfico abaixo, confirmando o que eu já suspeitava: muito tempo sem o esporte pode ser uma das variáveis que impactam meu tempo.

{% include figure.html path="assets/img/Posts_Images/2021-01-07-post_running-images/7.jpg" class="img-fluid rounded z-depth-1" %}

Uma coisa meio óbvia, mas que também fica legal de visualizar: a trajetória oposta do pace médio e da velocidade média.

{% include figure.html path="assets/img/Posts_Images/2021-01-07-post_running-images/8.jpg" class="img-fluid rounded z-depth-1" %}

Gostaria muito de ter conseguido analisar o tempo por km dentro das corridas, na tentativa de entender se existe um momento específico em que eu fique mais lenta ou mais rápida. Aparentemente existe essa informação dentro do .json em formato timestamp, mas após a conversão, achei essa informação um tanto quanto duvidosa — não batia com a realidade — então preferi não usar. Pois é! o ds também deve fazer um trabalho de data quality!

Sigamos:

{% include figure.html path="assets/img/Posts_Images/2021-01-07-post_running-images/9.jpg" class="img-fluid rounded z-depth-1" %}

O gráfico acima mostra a evolução das distâncias percorridas nas minhas corridas. Veja que a maioria das minhas corridas ficam ali na faixa dos 5km e que quando corro mais do que isso, corro logo o dobro. Isso que puxou a média um pouquinho mais pra cima.

Quando cruzados os dados de pace médio com a distância, temos o seguinte:

{% include figure.html path="assets/img/Posts_Images/2021-01-07-post_running-images/0.jpg" class="img-fluid rounded z-depth-1" %}

A distribuição do meu pace nos 5km é bem variada, o que não me surpreende, já que comecei nessa faixa e até hoje corro por ali. Outra coisa que confirmei olhando a imagem acima foi o aumento do meu pace na medida que aumento a distância. Tá aí outra coisa que preciso melhorar.

Pra olhar para as calorias, plotei dois gráficos:

{% include figure.html path="assets/img/Posts_Images/2021-01-07-post_running-images/11.jpg" class="img-fluid rounded z-depth-1" %}
{% include figure.html path="assets/img/Posts_Images/2021-01-07-post_running-images//12.jpg" class="img-fluid rounded z-depth-1" %}

O primeiro deixa clara a correlação positiva entre calorias e distância percorrida, ou seja, quer perder mais, corre mais (lembrando que correlação não significa causalidade, mas nesse caso eu sei que sim haha)! Já o segundo não evidencia uma correlação entre calorias e velocidade. Vejam que muitas vezes perdi quase que a mesma quantidade de calorias, correndo em velocidades médias diferentes (provavelmente foram os vários 5km).

Outro feeling que eu tinha era que em dias nublados meu desempenho era um pouco melhor. Sem sol, sem calor, ventinho, sabe como é né… Mas não foi o que os dados me mostraram. O boxplot abaixo sugere que em “dias limpos” a distribuição da minha velocidade é a “melhor”:

{% include figure.html path="assets/img/Posts_Images/2021-01-07-post_running-images/13.jpg" class="img-fluid rounded z-depth-1" %}

Por fim, a distribuição de elevação e descensão nos meu percursos:

{% include figure.html path="assets/img/Posts_Images/2021-01-07-post_running-images/14.jpg" class="img-fluid rounded z-depth-1" %}

Tentei correlacionar essas variáveis com outras, para tentar checar se tinham relação com velocidade e calorias, por exemplo, mas não encontrei nada muito significativo para abordar aqui.

Principais insights

1) Correr sempre para tentar de manter/abaixar meu pace para distâncias que já estou habituada a correr e consequentemente conseguir melhorar para distâncias maiores;
2) Preciso correr distâncias maiores, mesmo que com um tempo não tão “bom”, caso queira perder mais calorias;
3) O clima, aparentemente, não tem grandes impactos no meu desempenho;
4) Aparentemente ganho de elevação não tem grandes correlações com tempo de corrida e calorias. Sendo assim, posso manter sem problemas meus percursos habituais caso queria alterar algumas dessas variáveis.

Algumas observações que valem pontuar pra quem quer replicar a análise:

1) Não encontrei no .json a data das corridas. Como é uma informação indispensável para a análise, nomeei todas elas com suas respectivas datas, já que existe o campo “nome” no .json. Caso achem esse campo, adoraria saber.
2) É possível encontrar no dado a latitude e longitude dos percursos, tornando possível georreferenciar as corridas. No meu caso não achei relevante usar, já que quase sempre corro no mesmo lugar.
3) Como dito lá em cima, o dado de pace médio vem em total minutos, então se assim como eu, você deseja olhar esse tempo de forma mais amigável e como é o habitual — minutos'segundos'' — é necessário um tratamento nessa variável.
4) Também como dito lá em cima, não achei confiável a informação de tempo por trecho dentro das corridas, daí preferi não usar. Caso dê certo pra você, também adoraria saber!

Vou continuar correndo, aumentando cada vez mais a minha base, para que os insights fiquem cada vez mais sólidos. Qualquer evolução e/ou atualização da análise eu volto a postar aqui!

Hoje, existem muitas pessoas entrando/querendo entrar na área de data analytics/data science e que precisam de dados para treinar programação ou até mesmo para construir seus portfólios. A mensagem que também gostaria de passar com esse post, é que nada mais legal que utilizar nossos próprios dados pra isso. Além usá-los para benefício próprio gerando insights que nos ajudem a tomar melhores decisões (que no meu caso, foi com a corrida), abordamos tópicos como tratamento e transformação de variáveis, outliers, data quality e outros, clareando como tudo isso funciona na vida real!

Qualquer sugestão é bem vinda! O código completo da análise se encontra no meu GitHub.
