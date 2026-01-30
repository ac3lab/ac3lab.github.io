---

layout: post

title: "Predicting Match Results in Football - Part 1"

date: 2025-02-12 00:00:00

description:

tags: Football; Analysis

categories: Football; Analysis

thumbnail: assets/img/Posts_Images/2025-02-12-post_pitagorica_1/thumbprevisao.jpg

author: Ace Laboratory Football Team - Lucas Calmon, Pedro Carvalho

---

---

<p  align="justify">

Se quiser ler este texto em pt-br, <a  href = "https://ac3lab.github.io/blog/2000/post_pitagorica_1_pt/"> clique aqui.</a>

</p>

<h2> <b> Introduction </b></h2>
  
<div  style="text-align: justify">

In this series of posts, we will explore some methods to predict football clubs' winning percentage. In this first post, we will discuss two statistics: the winning percentage and a variation of it called the Pythagorean expectation. The data used will be from the latest seasons of major European leagues (23-24) and the Brazilian league (24), extracted from the FBREF website.  <br/><br/>

<h3> <b> What is the Pythagorean Expectation? </b> </h3>

The Pythagorean expectation is an analytical formula initially used in baseball. It was created by Bill James, a renowned statistician and pioneer in sports data analysis, who wrote dozens of books studying baseball through statistics to determine why teams win or lose. This formula aims to estimate the percentage of games a team should have won based on the number of runs they scored and allowed. In football, the equivalent would be goals scored and goals conceded. <br/><br/>


<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image1.png" class="img-fluid rounded z-depth-1" %}


</div>

<center>The name of the statistic comes from the similarity of its formula to the Pythagorean theorem. <br/><br/></center>


Comparing a team's winning percentage with its Pythagorean expectation can help evaluate which teams are performing above expectations and which are underperforming. <br/><br/>



<h3> <b> The Research </b> </h3>

The data used consists of a table with all match results from each league's season, collected from <a  href = "https://fbref.com/pt/comps/24/cronograma/Serie-A-Resultados-e-Calendarios">FBREF</a>. <br/><br/>

<h3> <b> Data Preparation and Defining Percentages </b> </h3>

After extracting the data and performing basic table cleaning, the result is a DataFrame in the following format. A season consists of 380 matches, and to calculate the winning percentage and the Pythagorean expectation, we need the following information: the match result determines the team's winning percentage, while goals scored and conceded define the Pythagorean expectation. <br/><br/>

<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image2.png" class="img-fluid rounded z-depth-1" %}

</div>

<center>This is the way the data is extracted from FBREF. <br/><br/></center>


We separated each team's goals and determined the winner of each match. This allows us to calculate the winning percentage—where a win is worth 1, a draw is worth 0.5, and a loss is worth 0. The sum of these values is then divided by the number of games played (<a  href = "https://en.wikipedia.org/wiki/Winning_percentage">Wikipedia</a>). <br/><br/>

After adjusting the table and calculating the teams' winning percentages, we split the data into the First Half and Second Half of the season, meaning before and after matchday 20. The table for the First Half of the season looks like this: <br/><br/>

<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image3.png" class="img-fluid rounded z-depth-1" %}

</div>

<center> G: Number of matches played; W: Win value, used for calculating the winning percentage; GF: Goals scored; GA: Goals conceded; wpc: Winning percentage <br/><br/></center>

To finalize our table, we calculate the Pythagorean expectation and merge the First and Second Half tables according to each team. <br/><br/>

<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image4.png" class="img-fluid rounded z-depth-1" %}

</div>

<center> Values with <b>x</b> refer to the First Half, and values with <b>y</b> refer to the Second Half. <br/><br/></center>

Code for Calculating wpc and pyth: <br/> <br/>

{% highlight python linenos %}
PrimeiroTurno['win_percentage'] = PrimeiroTurno['W'] / PrimeiroTurno['G']  # win percentage - (Win Value) / (Games Played)
PrimeiroTurno['pythagorean'] = PrimeiroTurno['GF']**2 / (PrimeiroTurno['GF']**2 + PrimeiroTurno['GA']**2)  # pythagorean expectation - (Goals For)^2 / ((Goals For)^2 + (Goals Against)^2)
{% endhighlight %}
<br/><br/>



<h3> <b> Discussing Regression Graphs and Correlation </b></h3>

As seen in the image below, the Pythagorean expectation in the first half of the Premier League is strongly related to the winning percentage, as expected. <br/><br/>

<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image5.png" class="img-fluid rounded z-depth-1" %}

</div>

<center> The relationship between <b>pythagorean_x</b> and <b>win_percentage_x</b> in the First Half is represented in the graph. The line represents a linear regression fitted to the data, showing the relationship between the two variables. <br/><br/></center>


But what we really want to know is: which of these statistics has a stronger relationship with a team’s winning percentage at the end of the season? To analyze this, we can generate a correlation table comparing these statistics between the First Half and Second Half of the season. <br/><br/>

<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image6.png" class="img-fluid rounded z-depth-1" %}

</div>

<center> Premier League correlation table. <br/><br/></center>

As seen in the highlighted values, <b>pythagorean_x</b> has a stronger correlation with <b>win_percentage_y</b> (0.80) than <b>win_percentage_x</b> with <b>win_percentage_y</b> (0.75). While this difference is small, it suggests that the Pythagorean expectation has slightly better predictive power than the winning percentage. This is the result for the Premier League. What about other leagues? <br/><br/>

<h4> <b> Bundesliga </b></h4>
<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image7.png" class="img-fluid rounded z-depth-1" %}

</div>

<center> Bundesliga correlation table. <br/><br/></center>

<h4> <b> La Liga </b></h4>
<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image8.png" class="img-fluid rounded z-depth-1" %}

</div>

<center> La Liga correlation table. <br/><br/></center>

<h4> <b> Serie A </b></h4>
<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image9.png" class="img-fluid rounded z-depth-1" %}

</div>

<center> Serie A correlation table. <br/><br/></center>

<h4> <b> Ligue One </b></h4>
<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image10.png" class="img-fluid rounded z-depth-1" %}

</div>

<center> Ligue One correlation table. <br/><br/></center>

As observed, in the German, Spanish, and Italian leagues, the values are slightly lower, but the Pythagorean expectation still has better predictive power than the winning percentage. In the French league, despite the correlation between First Half and Second Half results being below 50%, the Pythagorean expectation still outperforms the winning percentage.
So far, everything aligns with expectations. However, things get interesting when we analyze the Brazilian league. <br/><br/>

<h4> <b> Brasileirão </b></h4>
<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image11.png" class="img-fluid rounded z-depth-1" %}

</div>

<center> Brasileirão correlation table. <br/><br/></center>

In the Brazilian league, not only do First Half values have less than 30% correlation with Second Half results, but the winning percentage also has a <b>higher correlation</b> than the Pythagorean expectation! This is the only one of the six leagues studied where this phenomenon occurs. <br/><br/>

<h2> <b> Conclusion </b></h2>

Based on the experiment’s results, we decided to analyze how much team performance fluctuates between the two halves of the season, depending on the league, to better understand the most ‘unpredictable’ leagues. To do this, we calculated the mean and median of this variation across all studied leagues. The <b>Brasileirão stood out as the competition with the highest fluctuation between halves</b>, surpassing European leagues. Surprisingly, La Liga showed a relatively high variation for European standards. <br/><br/>

<table>
  <thead>
    <tr>
      <th style="color: white;">Leagues</th>
      <th style="color: white;">Median Performance Difference</th>
      <th style="color: white;">Mean Performance Difference</th>
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

<h4>Performance Difference Calculation:</h4>

\[
\left( \frac{\text{Second Half Performance}}{\text{First Half Performance}} - 1 \right) \times 100\%
\]


<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2025-02-12-post_pitagorica_1/image12.png" class="img-fluid rounded z-depth-1" %}

</div>

<center> variation in Brazilian clubs’ performances between the First and Second Halves of the Brasileirão. <br/><br/></center>

The graph above illustrates the high variation in Brazilian clubs’ performances between the First and Second Halves of the Brasileirão. Teams like Vitória, Grêmio, Fluminense, and Corinthians had poor results in the first half but above-average performances in the second half. Meanwhile, Atlético Mineiro, Cruzeiro, and Bahia performed well in the first half but declined in the second. Why does this happen? <br/><br/>

We can speculate on some possible reasons, such as increased investment over time, frequent coaching changes, or fan pressure after poor results, which forces club management to invest more in reinforcements. However, determining the real cause would require a more in-depth study on the subject. <br/><br/>

In the next post, we will discuss predicting outcomes based on the clubs' market value, which will be our primary variable. Stay tuned to our social media channels so you don't miss any updates from the blog! <br/> <br/>

<div>
