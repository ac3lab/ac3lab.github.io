---
layout: post
title: "Revisiting our predictions and projecting the path from the Round of 16 onwards"
date: 2026-07-04 09:00:00
description: "Check out the review of our initial projections for the 2026 World Cup and see the updated mathematical predictions from the Round of 16 onwards."
tags: Football; Predictions;
categories: Sports; Analysis
thumbnail: assets/img/Posts_Images/2026-06-09-world-cup-2026/thumbnail.png
author: ACE Laboratory Team

---

---

<p align="justify">
Se quiser ler esse texto em pt-br, <a href="https://ac3lab.github.io/blog/2026/updated_predictions_pt/">click here.</a>
</p>

<style>body {text-align: justify}</style>

With the Round of 16 of the 2026 World Cup defined, we present our updated predictions for the remainder of the competition. However, before projecting the future, we evaluate the performance of our original model in the previous stages, comparing the initial Monte Carlo simulations of the ACE Laboratory with the reality on the pitch so far (our initial predictions are <a href="https://ac3lab.github.io/blog/2000/ace_lab_predictions_en/">here</a>).

<h3><b>What we predicted (and what happened)</b></h3>

In general, the major powerhouses confirmed their initial favoritism. National teams such as Spain (99.1% chance of reaching the Round of 32), France (95.9%), and Brazil (95.6%) easily secured their spots in the Round of 16. Other traditional teams, such as Mexico, England, and Croatia, also followed the statistical qualification script. The model even predicted the advancement of teams that, in practice, had an even better performance, such as the United States, which defied their odds of advancing in second place and progressed as the winner of their group.

<h3><b>Upsets and disappointments</b></h3>

The unpredictability of football, however, produced memorable upsets. Cape Verde (34% chance to advance) and South Africa (33%) overcame mathematical adversities and reached the Round of 32, although they were eliminated at the beginning of the knockout stage. 

On the other hand, teams with high projections disappointed. Ecuador (90% chance in the group, showing a certain favoritism even in a complicated group) fell early to Mexico, while Portugal (94%) advanced, but without the expected leadership. Even bigger surprises involved Uruguay (87% chance of advancing to the Round of 32) and Turkey (quoted to be the leader of Group D), who did not even make it past the group stage, shattering their significant probabilities.

Another shock to our simulations was the early elimination of two European giants: Germany (65.2% chance of reaching the Round of 16) was surprised by Paraguay on penalties, and the Netherlands (53.3%) said goodbye in a penalty shootout against Morocco.

<h2><b>Updated predictions: from the Round of 16 onwards</b></h2>

With the official bracket defined, we recalibrated our Monte Carlo simulation engine. This recalculation eliminates multiple uncertainties from the previous stages, adjusting the projections based exclusively on the upcoming direct matchups. The visualization below details the statistical chances of each surviving team reaching the next stages and ultimately winning the cup.

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 600px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-07-04-updated_predictions/matriz_en.jpeg" title="Probability matrix of reaching each stage" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Figure 1: Probability matrix of reaching each stage.<br/><br/></center>

We can also see, based on the probabilities of winning each matchup, the most likely bracket for the upcoming World Cup matches.

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 600px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-07-04-updated_predictions/chaveamento_en.jpeg" title="World Cup bracket up to the final, considering the most likely results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Figure 2: World Cup bracket up to the final, considering the most likely results.<br/><br/></center>

Analyzing the updated bracket, the most notable shift from our initial probability matrix is the change in the overall title favorite. Before the tournament began, Spain stood out as the primary candidate to lift the trophy. Now, following the definition of the knockout paths, France takes over as the predicted champion, holding a slight 53% edge in a hypothetical final against England (47%). This shift in leadership occurs largely due to the bracket layout: the model projects an early and highly balanced semifinal clash, where the French would edge past the Spaniards by the narrowest of margins (51% to 49%).  

On the other side of the bracket, the race promises to be just as fierce. England emerges as the favorite to reach the final, but they will face a grueling path. According to the projections, the English squad is expected to eliminate Brazil in the quarterfinals in an extremely tight duel (52% to 48%), and subsequently overcome the defending champions, Argentina, in the semifinals by an identical margin (51% to 49%). The numbers from the new matrix clearly show that, at this crucial stage of the World Cup, the statistical and technical gap between the surviving powerhouses has become minimal, promising matches decided by the smallest of details.

<h3><b>Final Thoughts</b></h3>

The initial stages of the World Cup reinforce that predictive modeling is an essential tool for mapping scenarios and evaluating trends. However, football remains a complex system where the unpredictable will always have its place. As the tournament heads towards its grand finale, the ACE Laboratory will continue to monitor the probabilities. Stay tuned for our upcoming publications to follow the data-driven analyses of the final stretch of the biggest sporting spectacle on the planet.

<br><br>

<h2><b>⚠️ Disclaimer</b></h2>
This study was developed exclusively for academic and research purposes, aiming to test and improve data science models. Football is unpredictable, and the results presented represent probabilistic estimates, not definitive predictions. These analyses do not constitute a recommendation, incentive, or guidance for betting of any kind.