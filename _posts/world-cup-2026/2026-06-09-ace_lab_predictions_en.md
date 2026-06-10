---
layout: post
title: "ACE Laboratory's Predictions for the 2026 World Cup"
date: 2026-06-09 00:00:00
description: "Discover ACE Laboratory's mathematical model and official projections for the big favorites, surprises, and Brazil's path in the World Cup."
tags: Football; Predictions;
categories: Sports; Analysis
thumbnail: assets/img/Posts_Images/2026-06-09-world-cup-2026/thumbnail.png
author: ACE Laboratory Team
---

---

<p align="justify">
If you want to read this text in pt-br, <a href="https://ac3lab.github.io/blog/2000/ace_lab_predictions_pt/">click here.</a>
</p>

<style>body {text-align: justify}</style>

As the World Cup approaches, various prediction models for the results of the world's biggest football competition are released by technology companies, universities, and research centers. Given this scenario, we at the ACE Laboratory have developed our own prediction model for the 2026 World Cup edition, which will take place in the United States, Canada, and Mexico, being the largest edition in terms of the number of national teams, with 48 participants in total.

In this post, we present our official projections for the World Cup, revealing what our mathematical modeling has to say about the big favorites, potential surprises, and, of course, the path of the Brazilian national team in the competition.


<h2><b>The model</b></h2>

The architecture underpinning our predictions departs from single-algorithm approaches. We opted to develop a combined model (also called an ensemble model), which distributes equal weights (33.3%) across three distinct machine learning methodologies. The goal of this architecture is to mitigate the individual biases of each specific model and ensure a more robust and conservative inference.

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 250px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-06-09-world-cup-2026/predictions/model_en.png" title="Figure 1: Diagram of the model used" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Figure 1: Diagram of the model used<br/><br/></center>


Our model's workflow operates in three fundamental stages:

<ul>
  <li>
    <b>Expected Goals (xG):</b> The model is fed by a database containing approximately 9,600 international matches played since January 2005. Based on recent performance variables and historical strength, the three algorithms jointly calculate the expected number of goals for each team ($\lambda_h$ and $\lambda_a$) in a neutral context, without the influence of home-field advantage.
  </li>
    <br>
  <li>
    <b>Match Result Probabilities:</b> To translate expected goals into the chances of each team winning, drawing, or losing a match, we adopted the bivariate Poisson distribution with the Dixon-Coles adjustment. In the context of football result modeling, this adjustment is crucial for calibrating the dependency between both teams' goals, correcting the under-representation of low-scoring matches (e.g., 0-0, 1-0, and 1-1).
  </li>
    <br>
  <li>
    <b>Tournament Simulation (Monte Carlo):</b> For a World Cup, knowing whether a team is strong or weak is not enough. Success in this competition is highly influenced by the bracket in the knockout stages. To calculate the probability of a team becoming the world champion, it is necessary to project its path. To do this, we input the probabilities of each match into a Monte Carlo simulation engine, which runs through the official bracket for this World Cup edition 20,000 times. The probabilities we present reflect the aggregation of these tens of thousands of simulations.
  </li>
</ul>


<h2><b>Results</b></h2>

In the chart below (Figure 2), we have a visualization displaying the 16 teams with the highest chances of winning the title. Additionally, we also show the probabilities of each of these teams advancing through each stage of the tournament. The model's results point to a clear dominance of elite European teams, with some South American standouts and a single African team.

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager"  path="assets/img/Posts_Images/2026-06-09-world-cup-2026/predictions/advancement_prob_en.png" title="Figure 2: Title and Advancement Probabilities" class="img-fluid rounded z-depth-1" style="max-width: 600px;" %}
    </div>
</div>

<center>Figure 2: Title and Advancement Probabilities. <br/><br/></center>

Analyzing the probability of winning the title, the model places Spain as the big favorite, with a 14.3% chance of lifting the trophy for the second time in its history. Right behind, we observe a "technical tie" between France (11.9%) and the current champions, Argentina (11.8%). England closes the block of the most likely semifinalists, occupying the fourth global position, with a 10.4% probability of winning the title. Running as an outsider, after one of the worst World Cup cycles in its history, we have the Brazilian national team with a 7.3% chance of becoming the champion, having the fifth highest probability of winning the title and, finally, achieving its sixth world title (the desired hexacampeonato).

These numbers illustrate a scenario marked by the consistency of recent historical metrics, where we have, among the top 4 title favorites, the teams that were finalists in the last edition of the World Cup (France and Argentina) and those that were finalists in the Euro (Spain and England). This, combined with good performance in recent matchups, rewards the most stable teams in our algorithms' combination.

Observing the qualification probabilities in the group stage (Figure 2), it is notable that the powerhouses of world football have a very secure path to the next stage. Teams like Spain, Germany, England, and Brazil itself emerge as undisputed leaders in their respective groups, boasting advancement probabilities that exceed 90%, which reinforces the robustness of these teams against lower-tier opponents right from the initial stage.

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-06-09-world-cup-2026/predictions/group_stage_en.jpeg" title="Figure 3: Group Stage Qualification Probabilities" class="img-fluid rounded z-depth-1" style="max-width: 600px;" %}
    </div>
</div>

<center>Figure 3: Group Stage Qualification Probabilities.<br/><br/></center>

Another analysis we can perform is regarding the probable matchups in the early knockout stages. By combining the probabilities of advancing past their respective groups from Figure 2 with the probabilities of reaching each stage (Figure 1), we can simulate the most likely bracket of the competition. And it is precisely here that we see why the World Cup is considered by many to be the greatest competition in all sports. According to our prediction, in the first two knockout stages alone, we should have several highly interesting matchups between strong teams:

<ul>
  <li>
    Argentina vs. Uruguay, Croatia vs. Colombia, and Netherlands vs. Morocco in the Round of 32.
  </li>
    <br>
  <li>
    Germany vs. France, Brazil vs. Norway, and Spain vs. Croatia in the Round of 16.
  </li>
</ul>


<h2><b>Conclusion</b></h2>

On the eve of the start of the World Cup, we present only one of the models developed in the laboratory for predicting the World Cup results. Before choosing this one as the final result, we evaluated several other methodologies, and we plan to make a future post analyzing the differences between the created models and the predictions obtained.

Following our model, we have the Spanish national team as the top favorite for the title of this edition. Besides them, there are other teams that also enter as strong contenders, such as France, Argentina, and England.

However, because it is a short, dynamic tournament that highly values the current momentum of each team, the World Cup is inherently an extremely unpredictable event, and it is exactly this aspect that makes it one of the most anticipated events in the world of sports.

With the simulations established, we will turn our attention to the pitch, publishing detailed analyses of the Brazilian national team's matches and, subsequently, the knockout stage matchups in a series of exclusive posts for the 2026 World Cup.