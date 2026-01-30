---
layout: post
title: "Predicting Match Results in Football - Part 2"
date: 2025-04-15 00:00:00
description:
tags: Football; Analysis
categories: Football; Analysis
thumbnail: assets/img/Posts_Images/2025-02-12-post_pitagorica_1/thumbprevisao.jpg
author: Ace Laboratory Football Team - Lucas Calmon, Pedro Carvalho
---

<p  align="justify">

Se quiser ler este texto em pt-br, <a  href = "https://ac3lab.github.io/blog/2025/post-value_market_2_pt/"> clique aqui.</a>


<h2> <b> Introduction </b> </h2>
<div style="text-align: justify">
In this post, we will present another method for predicting victory. This time, we will use the market value of the teams as the main variable, which corresponds to the sum of the individual market values of all players on the team. We will explore how this metric can influence the performance of clubs and their chances of winning a match.
</div>

<h3> <b> Context </b> </h3>
<div style="text-align: justify">
Money plays a significant role in modern football. With the transfer market becoming increasingly inflated, it is necessary to spend more money in the transfer windows to maintain competitiveness in the top leagues. The professionalization of the sport has also had a great influence on increasing the cost of maintaining a team, as more expenses are now needed for infrastructure and creating a quality environment to stay ahead of the competition.


In fact, studies in the Premier League and Championship (2011-2020) have shown a correlation between a team's payroll and the position the team achieves in the table (Soccernomics, Simon Kuper and Stefan Szymanski). Money drives football. Therefore, we will use the market value of the clubs in the Brazilian league to try to predict the final result of the matches.

<div  style="width: 100%; margin: 0 auto; text-align: center;">
{% include figure.liquid path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img1.jpeg" class="img-fluid rounded z-depth-1" %}
</div>
</div>

<h3> <b> Method </b> </h3>

<h4><b>Data</b></h4>
<div style="text-align: justify">
We will use data from the 2023 season.
<b></b>
The dataset has two main parts:
<ul>
    <br>
  <li>The match data: information such as the home team, away team, result, match date, and odds for victory (home, draw, away), extracted from the <a  href="https://football-data.co.uk/">Football-data</a> website and the Pinnacle betting house.</li>
  <li>The market value of the teams in the Brazilian league 2023, sourced from <a href="https://www.transfermarkt.com.br">Transfermarkt</a>.</li>
</ul>

Let’s take a look at our match dataset. It has about 19 fields, but only the following are relevant to us:

<div  style="width: 80%; margin: 0 auto; text-align: center;">
{% include figure.liquid path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img2.png" class="img-fluid rounded z-depth-1" %}
</div>

<b>Legend:</b> home: Home team; away: Away team; res: Match result; oddHome: Home team's chance of victory; oddDraw: Chance of a draw; oddAway: Away team's chance of victory.
<br><br>
We will transform the odds into probabilities. To do this, we don't simply use the formula (1/odds), because the sum of the probabilities would exceed 1. This excess represents the bookmaker's margin, so we normalize the probabilities to correct it.

<div  style="width: 80%; margin: 0 auto; text-align: center;">
{% include figure.liquid path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img3.png" class="img-fluid rounded z-depth-1" %}
</div>
</div>

Now let's take a look at the market value data:

<div  style="width: 50%; margin: 0 auto; text-align: center;">
{% include figure.liquid path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img4.png" class="img-fluid rounded z-depth-1" %}
</div>

<div style="text-align: justify">
The column <code>TFM_Value</code> contains the market value in millions of euros. For example, Palmeiras' market value is 138.4 million euros. These values represent the market values of the clubs as of July 20, 2024.

<b></b>

We have merged the two datasets, adding the market value columns for the home team (<code>tmH</code>) and the away team (<code>tmA</code>).

<div  style="width: 100%; margin: 0 auto; text-align: center;">
{% include figure.liquid path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img5.png" class="img-fluid rounded z-depth-1" %}
</div>


The variable we will use to predict the results is the ratio between <code>tmH</code> (home team's market value) and <code>tmA</code> (away team's market value). More specifically, the <b>logarithm</b> of this ratio.

The reason we use the log is that the distribution of the ratio between <code>tmH</code> and <code>tmA</code> is skewed to the right. Applying the log function makes the distribution symmetrical, which improves performance. The image below helps to visualize this.

<div  style="width: 80%; margin: 0 auto; text-align: center;">
{% include figure.liquid path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img6.png" class="img-fluid rounded z-depth-1" %}
</div>

</div>

<div  style="width: 80%; margin: 0 auto; text-align: center;">
{% include figure.liquid path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img7.png" class="img-fluid rounded z-depth-1" %}
</div>

So, the <code>logTmRatio</code> will be the variable we will use to predict the results. In other words, our independent variable.

<div style="text-align: justify">
We encoded the <code>res</code> column as:
<ul>
  <li>0: Home team victory</li>
  <li>1: Draw</li>
  <li>2: Away team victory</li>
</ul>
This new column will be called <code>winValue</code>.

<div  style="width: 80%; margin: 0 auto; text-align: center;">
{% include figure.liquid path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img8.png" class="img-fluid rounded z-depth-1" %}
</div>

</div>

<h3><b>Model</b></h3>
<div style="text-align: justify">

We will use an <b>Ordinal Logistic Regression</b> model, which is a technique used to model the relationship between an ordinal response variable (i.e., categories with order) and one or more predictor variables. In our case, the ordinal response variable is <code>winValue</code> and the predictor variable will be <code>logTmRatio</code>.

The model involves determining the \( \alpha_1 \), which is the point that separates the home team victory from the draw or away team victory. In other words, if a point falls before \( \alpha_1 \), the model will predict a home team victory, and if it falls after \( \alpha_1 \), it will predict a draw or away team victory. The \( \alpha_2 \) is the point that separates the draw from the away team victory. The \( \beta \) indicates how the predictor variable, in our case the market value ratio, influences the result.

For better visualization of this explanation, observe the graph below, where \( \alpha_1 \) is represented by \( \theta_1 \):

<div  style="width: 80%; margin: 0 auto; text-align: center;">
{% include figure.liquid path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img9.png" class="img-fluid rounded z-depth-1" %}
</div>


We used an Ordinal Logistic Regression model, which relates an ordinal response variable (<code>winValue</code>) to a continuous predictor (<code>logTmRatio</code>).

The model finds two cutoff points:
<ul>
  <li><b>\( \alpha_1 \)</b>: separates home team victory from draw or away team victory</li>
  <li><b>\( \alpha_2 \)</b>: separates draw from away team victory</li>
   <li><b>\( \beta \)</b>: tells us how this ratio influences the result of The coefficient of <code>logTmRatio</code></li>
</ul>

Now that we understand the model, let's prepare its training. The training dataset consists of the first 200 games of the season, and the remaining 180 games will be used as the test dataset.

<div  style="width: 80%; margin: 0 auto; text-align: center;">
{% include figure.liquid path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img10.png" class="img-fluid rounded z-depth-1" %}
</div>

<b>Model coefficients:</b><br>
\(\beta \): -0.6309<br>
\( \alpha_1 \): -0.1519<br>
\( \alpha_2 \): 0.0533


</div>

<h4><b>Probability Calculation</b></h4>
<div style="text-align: justify">
From these coefficients, we calculate:
<ul>
  <li><b>Ph (home team victory)</b>: \( \frac{1}{1 + e^{-( \alpha_1 - βx)}} \)</li>
  <li><b>Pd (draw)</b>: \( \frac{1}{1 + e^{-( \alpha_2  - βx)}} - Ph \)</li>
  <li><b>Pv (away team victory)</b>: \( 1 - Ph - Pd \)</li>
</ul>

<div  style="width: 100%; margin: 0 auto; text-align: center;">
{% include figure.liquid path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img11.png" class="img-fluid rounded z-depth-1" %}
</div>

Let's add columns to compare the prediction results from Pinnacle and what we found.

<div  style="width: 100%; margin: 0 auto; text-align: center;">
{% include figure.liquid path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img12.png" class="img-fluid rounded z-depth-1" %}
</div>

</div>

<h3> <b> Evaluation </b> </h3>
<div style="text-align: justify">
Remember that we used the first 200 games to train our model, so we will compare the prediction results from our test set.

<div  style="width: 100%; margin: 0 auto; text-align: center;">
{% include figure.liquid path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img13.png" class="img-fluid rounded z-depth-1" %}
</div>

The most important value for us is highlighted: the average accuracy of results from both the bookmaker and our model. Notice that they are close, and even the bookmaker had less than 50% accuracy.

One important thing to consider when analyzing these data is the size of the training set, which only had 200 matches, and we achieved a result of a 0.03 difference from the bookmaker.

Let’s create two cross tables to better understand in which types of games our model is most likely to make errors and succeed.

<div  style="width: 40%; margin: 0 auto; text-align: center;">
{% include figure.liquid path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img14.png" class="img-fluid rounded z-depth-1" %}
</div>

Notice that in the draw column, our model did not predict draws, which is due to the fact that the market value ratio between two teams has a very low probability of resulting in a draw, since it is expected that the market values of the teams would need to be close to each other.

<div  style="width: 40%; margin: 0 auto; text-align: center;">
{% include figure.liquid path="assets/img/Posts_Images/2025-04-15-post-value-market-2/img15.png" class="img-fluid rounded z-depth-1" %}
</div>

The numbers are quite scattered, but we can see that our model performs better than Pinnacle in predicting away team victories, while Pinnacle has most of its correct predictions in home team victories.

</div>

<h2> <b> Conclusion </b> </h2>
<div style="text-align: justify">
In the next post, we will discuss the prediction of results based on the Poisson distribution, a well-known distribution used to predict rare events. Stay tuned to our social media to not miss any updates from the blog!
</div>
