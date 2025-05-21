---

layout: post

title: "Predicting Match Results in Football - Part 3"

date: 2025-05-16 00:00:00

description:

tags: Football; Analysis

categories: Football; Analysis

thumbnail: assets/img/Posts_Images/2025-02-12-post_pitagorica_1/thumbprevisao.jpg

author: Ace Laboratory Football Team - Lucas Calmon, Pedro Carvalho

---

---

<p  align="justify">

Se quiser ler este texto em pt-br, <a  href = "https://ac3lab.github.io/blog/2000/post_poisson_3_pt/"> clique aqui.</a>

</p>

<h2> <b> Introduction </b></h2>
  
<div  style="text-align: justify">

In this final post of the Results Prediction series, we’ll introduce the Poisson Distribution. This time, we’ll do something a bit different: we’ll explain what the Poisson Distribution is and walk through the step-by-step process of predicting the final score of a match. <br/><br/>

<h3> <b> The Poisson Distribution </b> </h3>


The Poisson distribution is a discrete probability distribution that expresses the probability of a given number of events occurring in a fixed interval of time or space. It assumes these events occur with a known average rate and independently of the time since the last event. <br/><br/>

<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2025-05-16-post_poisson_3/image1.png" class="img-fluid rounded z-depth-1" %}


</div>

<center>The Poisson distribution formula. <br/><br/></center>

The left side of the Poisson distribution formula, P(X = k), represents the probability of exactly k events occurring in a fixed interval. Here, X is the number of events, and k is the specific number we’re interested in. <br/><br/>

The numerator on the right-hand side, e<sup>-λ</sup> λ<sup>k</sup>, has two components. λ<sup>k</sup> reflects the likelihood of k events happening based on the average rate λ. The e<sup>-λ</sup> accounts for the randomness of the events, ensuring that the probability decreases as the number of events deviates from the expected rate. <br/><br/>

The denominator on the right-hand side, k!, adjusts for the number of ways the k events can occur. The factorial notation calculates the number of possible arrangements, ensuring that the probability accounts for the fact that the order of events doesn’t matter. <br/><br/>

<h3> <b> How to Use It in Football </b> </h3>

First of all, we need to clarify something: there are several goal prediction models using the Poisson distribution, but we’re going to use the simplest one, which considers only the historical match data of the two teams. More complex models can account for other variables such as pitch quality, head-to-head records, and more. <br/><br/>

To begin, we need to decide which matches we want to predict. For this post, we’ll try to predict the number of goals in a Fla-Flu derby (with Fluminense as the home team) in 2023, using data from both teams from the 2022 Brasileirão season. <br/><br/>

<h3> <b> Preparing the Table </b> </h3>

We used the results of all matches from the 2022 Brasileirão, sourced from the FBREF website. The data includes various pieces of information, but we only used the match results. For the next steps, we had to split the data into “Home Team,” “Away Team,” “Home Goals,” and “Away Goals.” <br/><br/>

<h3> <b> Calculating Offensive and Defensive Strength </b> </h3>

To predict the number of goals for a team, we first need to calculate the Offensive Strength and Defensive Strength of the teams in the Brasileirão, based on last season. <br/><br/>

The Offensive Strength is the average number of goals scored by each team, both at home and away. The formula is: <br/><br/>

<ul>
<li>Total goals scored at home / number of games</li>
<li>Total goals scored away / number of games</li>
</ul>

<br/><br/>

In the 2022 Brasileirão season, there were 534 home goals and 371 away goals. Divided by the number of games (380), we get the average goals scored at home as 1.405, and the average goals scored away as 0.976.<br/><br/>

The Defensive Strength is the average number of goals conceded by each team — which is essentially the inverse of Offensive Strength, since the number of goals scored by the home team equals the number of goals conceded by the away team. Thus, the average goals conceded at home is 0.976, and the average goals conceded away is 1.405. <br/><br/>

Now we can use these league averages to calculate the strengths of the specific teams we want to analyze. <br/><br/>

<h3> <b> Predicting Fluminense’s Goals </b> </h3>

To calculate Fluminense’s Offensive Strength, we take the number of home goals scored by Fluminense in the 2022 season (39) and divide it by the number of home games (19) = 2.052. Then we divide this value by the league’s average home goals (1.405), giving us an Offensive Strength of 1.460.<br/><br/>

Next, we calculate Flamengo’s Defensive Strength to predict how many goals Fluminense might score. We take the number of away goals conceded by Flamengo (24) and divide it by their number of away games (19) = 1.263. Then divide this by the average away goals conceded in the league (1.405), yielding a Defensive Strength of 0.898.<br/><br/>

Now we can compute the expected number of goals for Fluminense by multiplying: Fluminense’s Offensive Strength (1.460) × Flamengo’s Defensive Strength (0.898) × Average Home Goals (1.405)<br/><br/>

<b>1.460 × 0.898 × 1.405 = 1.845 </b> <br/><br/>

<h3> <b> Predicting Flamengo’s Goals </b> </h3>

To calculate the number of goals Flamengo might score, we use the same formulas, but replace the average home goals with average away goals.<br/><br/>
<ul>
<li>Flamengo’s Offensive Strength: (23/19) / 0.976 = 1.239</li>
<li>Fluminense’s Defensive Strength: (20/19) / 0.976 = 1.078</li>
</ul>
<br/><br/>
Now, multiply these values with the average away goals: <br/><br/>
 <b>1.239 × 1.078 × 0.976 = 1.305 </b>

<h3> <b> Using the Poisson Distribution </b> </h3>

 Since no match ends in a score of 1.845 to 1.305, we use these values with the Poisson Distribution to spread 100% of the probability across possible goal outcomes for each team. We want to estimate the chance of each team scoring a specific number of goals (in our case, 0 to 5) — the number of occurrences of the event — using the expected goals (1.845 for Flu, 1.305 for Fla) - the expected occurencies.  <br/><br/>

We can do this easily in Python using the command:<br/><br/>
{% highlight python linenos %}
poisson.pmf(NumberOfOccurrences, ExpectedOccurrences)
{% endhighlight %}
<br/><br/>

Calculating this 6 times for each team, we get the following vectors:

<table>
  <thead>
    <tr>
      <th style="color: white;">Goals</th>
      <th style="color: white;">Fluminense</th>
      <th style="color: white;">Flamengo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="color: white;">0 goals</td>
      <td style="color: white;">15.80%</td>
      <td style="color: white;">27.11%</td>
    </tr>
    <tr>
      <td style="color: white;">1 goal</td>
      <td style="color: white;">29.15%</td>
      <td style="color: white;">35.39%</td>
    </tr>
    <tr>
      <td style="color: white;">2 goals</td>
      <td style="color: white;">26.90%</td>
      <td style="color: white;">23.09%</td>
    </tr>
    <tr>
      <td style="color: white;">3 goals</td>
      <td style="color: white;">16.54%</td>
      <td style="color: white;">10.05%</td>
    </tr>
    <tr>
      <td style="color: white;">4 goals</td>
      <td style="color: white;">7.63%</td>
      <td style="color: white;">3.28%</td>
    </tr>
    <tr>
      <td style="color: white;">5 goals</td>
      <td style="color: white;">2.82%</td>
      <td style="color: white;">0.86%</td>
    </tr>
  </tbody>
</table>


Since these results are independent, the most likely result of the match is 1-1, as both teams are most likely to score 1 goal. Multiplying the probabilities of each team scoring 1 goal gives the probability of a 1-1 draw: <br/><br/>
 <b>0.2915 × 0.3539 = 0.1031</b><br/><br/>

Using the np.outer command with these two vectors, we can generate the full probability matrix of all possible score combinations.<br/><br/>
<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2025-05-16-post_poisson_3/image2.png" class="img-fluid rounded z-depth-1" %}


</div>

<center>By summing the probabilities: Above the diagonal (Fluminense wins): 48.96% <br/>
On the diagonal (Draw): 22.75% <br/>
Below the diagonal (Flamengo wins): 26.91%
 <br/><br/></center>

 <h2> <b> Conclusion </b> </h2>


<div  style="width: 100%; margin: 0 auto; text-align: center;">

{% include figure.liquid path="assets/img/Posts_Images/2025-05-16-post_poisson_3/image3.png" class="img-fluid rounded z-depth-1" %}


</div>

<center>In total, we had 3 draws, 2 wins for Flamengo, and 1 win for Fluminense.
 When Fluminense played at home, there were two draws and one win for Fluminense.
 <br/><br/></center>

From this result, we can compare it with the first encounter between the teams in 2023, which took place in the final round of the Taça Guanabara and ended in a 2-1 win for Fluminense. That result was the second most likely according to our model, indicating that the match followed the expected trend based on the teams’ offensive and defensive performance from the previous season.  <br/><br/>
Moreover, we didn’t use data from earlier 2023 Campeonato Carioca matches, which could provide more up-to-date offensive and defensive strength values — and thus a different probability distribution.  <br/><br/>
With this analysis, we wrap up our series of posts, where we’ve explored some predictive models applied to football and how we can use them to better understand the sport.




<div>
