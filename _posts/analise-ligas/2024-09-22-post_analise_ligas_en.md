---

layout: post

title: Analysis of the Best Football Leagues

date: 2024-09-22 00:00:00

description:

tags: Football; Analysis

categories: Football; Analysis

thumbnail: assets/img/Posts_Images/2024-09-22-post_analise_ligas/ligas.png

author: Ace Laboratory Football Team - Lucas Calmon, Pedro Carvalho
---

---

<p  align="justify">

Se quiser ler este texto em pt-br, <a  href = "https://ac3lab.github.io/blog/2000/post_analise_ligas_pt/"> clique aqui. </a>

</p>


<div  style="text-align: justify">
<h2>Introduction</h2>

In today’s post, we decided to touch on a topic that is discussed every year: What is the best league in the world? Does the Brasileirão belong among these leagues?
We will analyze everything from the total Market Value to each league's performance in international competitions. The leagues studied were: Premier League (England), La Liga (Spain), Ligue 1 (France), Bundesliga (Germany), Serie A (Italy), and Brasileirão (Brazil). The international tournaments studied were the Copa Libertadores (CONMEBOL), Copa Sulamericana (CONMEBOL), Champions League (UEFA) and Europa League (UEFA).
 <br/><br/>

<h2> <b>Research</b> </h2>


The data used in this research were collected from Transfermarkt, which provides market values for each team in the leagues studied per season; Sofascore, with the final standings of each season; UEFA, with the results from the Champions League and Europa League; and CONMEBOL, with the results from the Copa Libertadores and Copa Sulamericana. The last five years were taken into consideration: for European teams, the seasons from 2019-2020 to 2023-2024, and for Brazilian teams, from 2019 to 2023. Scripts were used to extract data from Transfermarkt and Sofascore.
<br/><br/>

 
<h2> <b>Market Value</b> </h2>

The following bar chart shows the total Market Value of the teams by league and by season. In the case of the Brasileirão, 19-20 refers to the 2019 season, 20-21 refers to the 2020 season, and so on.
<br/><br/>
<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.html path="assets/img/Posts_Images/2024-09-22-post_analise_ligas/marketvalue.png" class="img-fluid rounded z-depth-1" %}

</div>

<center>Image 1. Market Value of Leagues in the last 5 seasons<br/><br/></center>

The difference between the Premier League and the other leagues is enormous, and the growth in market value per season is exponential. The financial model of team ownership in England may influence this, as many of the top English teams are owned by billionaires who inject money for signings. The model for distributing broadcast rights revenues also contributes to this high value, with hundreds of millions of pounds being distributed almost equally among the clubs.
<br/><br/>
Among the other European leagues, there isn’t much variation between seasons or among them. When comparing the European leagues to the Brasileirão, the colossal difference can be explained by various factors, from the weakness of the Brazilian Real compared to the Euro to the early sale of promising Brazilian players to European teams, often motivated by poor management of Brazilian clubs, forcing teams to sell promising players to pay off large debts.
<br/><br/>



<h2> <b>Performance in Unequal Matches</b> </h2>

Performance in Unequal Matches (PUM) measures a team's performance in games against opponents whose market value is lower. The formula to calculate PUM is simple: divide the number of points won in these matches by the total points disputed. <br/><br/>

Now that we understand what PUM is, let’s explain why it is useful. Our goal is to evaluate whether economically dominant teams also show sporting superiority, as they have better squads and infrastructure compared to their opponents in the leagues.
<br/><br/>

<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.html path="assets/img/Posts_Images/2024-09-22-post_analise_ligas/graficoACD.png" class="img-fluid rounded z-depth-1" %}

</div>

<center>Image 2. Average PUM chart for leagues in the last 5 seasons<br/><br/></center>

Based on the chart showing the average PUM per season in each analyzed championship, we notice that, in the Brasileirão, performance in unequal matches is the lowest among the six leagues. This indicates that teams with lower market value can compete more evenly against the top national clubs. In the Premier League and Bundesliga, the trend is the opposite, with higher market value teams having a significantly higher average performance compared to the other leagues.
<br/><br/>


<h2> <b>International Competitions</b> </h2>

The following tables show the number of defeats of Brazilian clubs by stage in the Copa Libertadores and Copa Sulamericana over the last 5 seasons. <br/><br/>

<h3> <b>Copa Libertadores</b></h3>
Brazil's dominance in the biggest club competition in South America is undeniable. In the last five finals, all featured Brazilian teams, three were entirely Brazilian, and five titles went to Brazil. The technical level difference between Brazil's top clubs and other South American teams can be attributed to several factors. Besides other countries being smaller and poorer than Brazil, some are going through major economic crises, such as Argentina, the country with the most titles in the "Glória Eterna" tournament. But Brazil has dominated in recent years, and the trend is likely to continue. Another possible analysis is the large number of talents exported from "smaller" Latin American countries to high-level Brazilian football, weakening their leagues' competitiveness against Brazilian giants. <br/><br/>
<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.html path="assets/img/Posts_Images/2024-09-22-post_analise_ligas/tabelaliba.png" class="img-fluid rounded z-depth-1" %}

</div>

<center>Image 3. Number of Brazilian teams per stage of Libertadores by year<br/><br/></center>

<h3> <b>Copa Sulamericana</b></h3>
In the Copa Sulamericana, the scenario is different: in the last five finals, Brazil has "only" one title and three participations (with one all-Brazilian final). Why is this different from Libertadores? Could the large number of spots given to Brasileirão teams mean that weaker and less experienced teams are playing and losing early? However, this scheme may be about to change. Since 2019, the number of Brazilian clubs dropping out in the group stage has significantly decreased, replaced by later-stage eliminations. Additionally, since the all-Brazilian final in 2021, Brazil has participated in every final, although without further titles. <br/><br/>
<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.html path="assets/img/Posts_Images/2024-09-22-post_analise_ligas/tabelasula.png" class="img-fluid rounded z-depth-1" %}

</div>

<center>Image 4. Number of Brazilian teams per stage of Sulamericana by year<br/><br/></center>

The fact is: in the last five seasons, Brazil has won six titles in South America’s main international competitions. But what is the situation in Europe?
<br/><br/>
The following tables show the number of defeats of European clubs from the mentioned leagues by stage in the Champions League and Europa League over the last 5 seasons.
<h3> <b>Champions League</b></h3>
In the Champions League, France and Italy did not win titles, but had two runner-up finishes. What differentiates them from the winning leagues? France had the fewest teams reaching the round of 16 and fewer total participations, with only two teams making the semifinals: Lyon and PSG (twice). Italy had the most eliminations in the round of 16, with poor performance overall.
Another interesting observation: Spain had a 100% success rate in finals, winning both in which they participated. England, however, had an extraordinary performance: two titles and two runner-up finishes, with one all-English final. In other words, they had the best performance, appearing in 3 out of 5 finals.
 <br/><br/>
<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.html path="assets/img/Posts_Images/2024-09-22-post_analise_ligas/tabelachamp.png" class="img-fluid rounded z-depth-1" %}

</div>

<center>Image 5. Number of teams from each country by stage in the UCL in the last 5 years<br/><br/></center>

<h3> <b>Europa League</b></h3>
In the Europa League, the scenario changes: Spain dominated the period with a 100% success rate in finals, reaching three finals and winning all three. Once again, France had the fewest participations in the competition. Only three French teams made it past the group stage. Italy reached three finals but managed to win only one. Germany’s numbers are similar in both competitions, with nothing standing out.
The biggest difference between the competitions is in England’s performance: in the Europa League, the English only reached one final and were runners-up.
 <br/><br/>
<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.html path="assets/img/Posts_Images/2024-09-22-post_analise_ligas/tabelaeuro.png" class="img-fluid rounded z-depth-1" %}

</div>

<center>Image 6. Number of teams from each country by stage in the UEL in the last 5 years<br/><br/></center>


<br/><br/>

<h2> <b>Discussion</b> </h2>
From the above analysis, we will combine all this information to try to answer the question from the introduction: "What is the best league in the world?" This question carries a degree of subjectivity, as it depends on what you want to observe in a league.
 <br/><br/>
Looking at the most valuable league in the world, the choice would be the Premier League, with a value greater than 12 billion euros in the last season, which has been growing exponentially year after year.
 <br/><br/>

In terms of Performance in Unequal Matches, the Brazilian league shows a low average PUM, indicating that lower market value teams can compete more equally and win more points against richer clubs. This results in more unpredictable championships and, consequently, more competitiveness.
 <br/><br/>
When observing the performance of countries in international competitions, it becomes more subjective. In South America, Brazil is dominant, with 6 titles won in the last five years, 5 of them in the toughest competition in the Americas. In Europe, there is a greater variety of champions: only France failed to win a title. Spain won the most titles (5), and England ties with Spain in finals appearances (5 out of 10).
 <br/><br/>

<h2> <b>Conclusion</b> </h2>


Which is the best league in the world?
It depends on the point of view. European leagues have a higher market value, meaning they have the best players and coaches, resulting in higher-quality matches. However, the unpredictability of the matches is lower and, in a way, less exciting. In the Brazilian league, we can see that the lower average PUM provides greater unpredictability, which brings excitement to the championship. This unpredictability is likely related to player quality, which affects the quality of the games. Therefore, answering the question about which league is the best depends on the fan’s perspective.
<br/><br/>
Thank you for reading and stay tuned for future posts!
<br/><br/>


<div>

