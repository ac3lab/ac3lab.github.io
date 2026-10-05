---
layout: post
title: "What the Data Says About Relegated Teams"
date: 2026-10-04 00:00:00
description: "How do relegated clubs behave in the Brazilian Série A and the major European leagues between 2005 and 2015?"
tags: Football; Analysis; Relegation
categories: Sports; Analysis
thumbnail: assets/img/Posts_Images/2026-10-04-relegated-teams/en/image1.png
author: ACE Laboratory Team
---

---

<p align="justify">
Se quiser ler esse texto em pt-br, <a href="https://ac3lab.github.io/blog/2000/relegated-teams_pt/">clique aqui.</a>
</p>

<style>body {text-align: justify}</style>

<h2><b>Introduction</b></h2>

<p>In the context of football, most national leagues around the world work with the relegation/promotion system, that is: teams that at the end of the championship show the worst performances during the season are replaced by newly promoted teams in the following championship. For clubs that "fall," this change often represents not only failed sports planning, but also a need for readjustment, both financially and competitively, for the next season.</p>

<p>With this in mind, this post aims to better understand the performance of clubs that are relegated. The study consists of comparing these clubs in 3 different ways:</p>

<ul>
  <li>Clubs: Analyze the differences between relegated clubs by comparing them with others present in the same league, in the same year.</li>
  <li>League: Analyze the differences between relegated clubs from one league by comparing them with other relegated ones from different leagues.</li>
  <li>Time: Analyze the turnover of clubs that were relegated or promoted in different leagues.</li>
</ul>

<p>From this comparison, we seek to better understand the performance of these teams in different aspects.</p>

<h2><b>Data</b></h2>

<p>This study used simple match data from the 1st division of the Brazilian, English, Spanish, German, and French championships between the 2005 and 2015 seasons.</p>

<h2><b>Quintile Split</b></h2>

<p>To perform the comparisons, we separated championship clubs into 5 groups based on their performance. That is: Q1 represents the best teams, while Q5 represents the worst. Based on these groups, we performed the comparisons described below.</p>

<h2><b>Results</b></h2>

<h3><b>Points Percentage</b></h3>

<p>From the results below (Figures 1 and 2), it is noted that the average points percentage of "bottom of the table" teams is similar regardless of the league or season analyzed. On the other hand, when we look at the top, the difference in points percentage between Q1 and Q2 teams highlights the distance of "elite" teams in European leagues from the rest of the teams.</p>

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 600px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-10-04-relegated-teams/en/image1.png" title="Figure 1: Average points percentage by quintile in the Brazilian Série A (2005–2015)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Figure 1: Average points percentage by quintile in the Brazilian Série A (2005–2015).<br/><br/></center>

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 800px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-10-04-relegated-teams/en/image2.png" title="Figure 2: Average points percentage by quintile in the Premier League, La Liga, Bundesliga and Ligue 1 (2005–2015)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Figure 2: Average points percentage by quintile in the Premier League, La Liga, Bundesliga and Ligue 1 (2005–2015).<br/><br/></center>

<p>This analysis holds when we observe the head-to-head matrix between teams from different groups (Figures 3 and 4). No trend related to the league was found in direct matchups between pairs of groups.</p>

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 600px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-10-04-relegated-teams/en/image3.png" title="Figure 3: Points percentage by quintile matchup in the Brazilian Série A (2005–2015)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Figure 3: Points percentage (%) by quintile matchup in the Brazilian Série A (2005–2015). Each cell shows the points percentage of teams in the row quintile against opponents in the column quintile.<br/><br/></center>

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 800px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-10-04-relegated-teams/en/image4.png" title="Figure 4: Points percentage by quintile matchup in the European leagues (2005–2015)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Figure 4: Points percentage (%) by quintile matchup in the Premier League, La Liga, Bundesliga and Ligue 1 (2005–2015), read the same way as Figure 3.<br/><br/></center>

<h3><b>Home Advantage Analysis</b></h3>

<p>In relegated teams, home advantage shows reduced relevance compared to other competitors (Figure 5). The difficulty in being dominant at home is, therefore, one of the main characteristics of relegated teams. This pattern is particularly significant when contextualized in the Brazilian Championship, a league where this factor tends to be more relevant.</p>

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 600px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-10-04-relegated-teams/en/image5.png" title="Figure 5: Home advantage bonus by quintile and league (2005–2015)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Figure 5: Home advantage bonus by quintile and league (2005–2015), in percentage points of points percentage gained at home.<br/><br/></center>

<h3><b>Turnover Analysis</b></h3>

<p>Finally, the comparison between leagues reveals that the Brazilian Championship has greater turnover of relegated teams in relation to European championships (Figure 6), demonstrating that newly promoted Brazilian teams face significant obstacles to establish themselves.</p>

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 600px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-10-04-relegated-teams/en/image6.png" title="Figure 6: Divisional turnover (2005–2015)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Figure 6: Divisional turnover (2005–2015). Left: percentage of newly promoted teams that remain in the 1st division without interruption. Right: cumulative percentage of relegated teams that returned to the 1st division.<br/><br/></center>

<p>This phenomenon is mainly associated with unequal distribution of league revenues (sponsorships, television rights). Leagues that concentrate resources tend to maintain lasting budget disparities. The Premier League, despite its more equitable distribution of revenues, still exemplifies this: promoted teams have a high probability of being relegated in their first year due to the large budget difference between the first and second English divisions, but, if they manage to stay up in the first years, they tend to close the gap with the other teams.</p>

<p>In contrast, the Brazilian Championship presents a distinct dynamic, where notably unequal distribution of revenues among clubs hinders the rise of newly promoted teams and perpetuates their high probability of relegation even when they manage to remain in the first years.</p>

<h2><b>Conclusion</b></h2>

<p>At the end of this study, we can conclude that relegated teams really face different realities according to the league. While in Brazil rising to the first division is practically a death sentence, in the European context this reality is different: although newly promoted teams face greater risk in the first seasons, they are more likely to establish themselves in the top division over the years.</p>

<p>When we go deeper into the field, the main deficit found in relegated teams was the difficulty in establishing dominance on their home ground. This statistic, again, stands out in the context of the Brazilian Championship, where home advantage proves to be even more relevant when compared with other leagues.</p>

<p>For future research and analysis, one possible path is to analyze the players and coaches of these teams, seeking trends in the composition of their squads and coaching staffs.</p>
