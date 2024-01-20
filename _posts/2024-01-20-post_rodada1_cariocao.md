---
layout: post
title: "Carioca Championship - Round 1 - Analysis"
date: 2024-01-20 12:00:00
description: Analysing players and teams of the 2024 Campeonato Carioca first-round matches
tags: Football; Carioca; Python
categories: Football; Python
thumbnail: assets/img/Posts_Images/2024-01-20-post_rodada1_cariocao-Images/Logo_Carioca.jpg
author: Leticia Maia
---


<p align="justify">
The Campeonato Carioca is a prestigious football championship in Brazil, and the analysis of its first round in 2024 provides insights into the performance of participating teams. Let's delve into the key plots and observations from this tournament.
</p>

<p align="justify">
<strong>Data Overview</strong><br>
The analysis relies on data extracted from the <a href="https://www.sofascore.com/tournament/football/brazil/carioca/92" target="_blank">SofaScore</a> website, a comprehensive resource for football statistics.
</p>

<p align="justify">
As part of our comprehensive analysis of the 2024 Campeonato Carioca first-round matches, we utilized radar charts, a scatter plot focusing on duels and possession losses, and an in-depth analysis of players' shooting performances.
</p>

<strong>Radar Charts</strong>

<p align="justify">
Three radar charts were employed to visually represent key performance metrics of the players holding the best performances in the round. Each chart highlighted specific attributes of players, allowing us to compare and contrast players based on crucial aspects of their gameplay.
</p>

<p align="justify">
In dissecting the radar plot that encapsulates a performance in the 2024 Campeonato Carioca matches, we focus on several pivotal metrics, each providing a unique insight into your skills and contributions on the field.
</p>

{% include figure.html path="assets/img/Posts_Images/2024-01-20-post_rodada1_cariocao-Images/radarCebolinha.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
<ol>
    <li><strong>xAssist (Expected Assists):</strong> The representation of xAssists in the radar plot serves as an indicator of your ability to create goal-scoring opportunities. This metric evaluates the likelihood of an assist based on the quality of your passes.</li>
    <li><strong>xGoals (Expected Goals):</strong> xGoals offer a glimpse into your goal-scoring potential. This metric considers the quality and positions of your shots, providing a predictive measure of the likelihood of scoring.</li>
    <li><strong>Pass Accuracy:</strong> Your pass accuracy is a fundamental aspect of your playmaking ability. A high pass accuracy percentage suggests precision in distributing the ball, contributing to team possession and strategic build-up.</li>
    <li><strong>Key Passes:</strong> Key passes quantify your ability to make impactful passes that directly lead to goal-scoring opportunities. This metric highlights your creativity and vision on the field.</li>
    <li><strong>Cross Accuracy:</strong> Cross accuracy assesses your effectiveness in delivering accurate crosses into the box. A high cross accuracy percentage indicates proficiency in providing goal-scoring opportunities from wide positions.</li>
    <li><strong>Long Ball Accuracy:</strong> Long ball accuracy measures your success in executing long-range passes. This skill is valuable for quickly transitioning from defense to attack and unlocking opposing defenses.</li>
    <li><strong>Dribble Accuracy:</strong> Dribble accuracy reflects your success rate in one-on-one dribbling situations. A high dribble accuracy showcases your ability to navigate through opposition players, creating space and advancing play.</li>
    <li><strong>Won Ground Duels %:</strong> This metric evaluates your success rate in ground duels, showcasing your ability to secure possession in contested situations on the ground.</li>
    <li><strong>Won Aerial Duels %:</strong> The percentage of won aerial duels highlights your effectiveness in aerial challenges. This skill is crucial in both defensive and offensive situations, particularly during set-piece plays.</li>
</ol>
</p>

<p align="justify">
After this analysis, we focused on the second and third best player of the round.
</p>

{% include figure.html path="assets/img/Posts_Images/2024-01-20-post_rodada1_cariocao-Images/RadarJeffinho.png" class="img-fluid rounded z-depth-1" %}
{% include figure.html path="assets/img/Posts_Images/2024-01-20-post_rodada1_cariocao-Images/radarLeandro.png" class="img-fluid rounded z-depth-1" %}

<strong>Duels and Possession Losses</strong>

<p align="justify">
Turning our attention to the insightful scatter plot, this visualization provides a detailed examination of players' performance in the 2024 Campeonato Carioca, with a specific focus on duels won and possession losses. Let's explore the significance of this scatter plot and draw key insights from the depicted data.
</p>

### Scatter Plot: Duels Won vs. Possession Losses

<p align="justify">
The scatter plot illustrates a nuanced relationship between two critical aspects of your gameplay:
</p>

<p align="justify">
1. <strong>Duels Won:</strong> Duels won represent your effectiveness in one-on-one situations, both defensively and offensively. A higher number of duels won signifies your ability to outmaneuver opponents, secure possession, and contribute to defensive solidity or attacking opportunities.
2. <strong>Possession Losses:</strong> Possession losses indicate instances where you may have ceded control of the ball to the opposing team. This can occur due to factors such as interceptions by opponents or unsuccessful attempts at maintaining possession.
</p>

### Key Observations:

<p align="justify">
- <strong>Quadrant Analysis:</strong> Quadrant analysis allows us to categorize your performance into four distinct quadrants. Players in the top-right quadrant excel in both duels won and minimizing possession losses, showcasing a well-rounded and efficient playing style.
- <strong>Optimal Performance:</strong> Your position in the scatter plot provides insights into your optimal performance zone. Striving to consistently operate in the quadrant associated with high duels won and low possession losses is indicative of a strong and impactful presence on the field.
- <strong>Areas for Improvement:</strong> If the scatter plot indicates a concentration in the bottom-left quadrant (low duels won and high possession losses), it may signify a potential area for improvement in terms of assertiveness and ball retention.
</p>

### Strategic Implications:

<p align="justify">
- <strong>Defensive Contribution:</strong> A higher concentration in the top-left quadrant suggests a focus on defensive duels, contributing to a solid defensive foundation. Evaluating the types of possession losses in this context can inform tactical adjustments for enhanced defensive stability.
- <strong>Attacking Dynamism:</strong> Players situated in the top-right quadrant demonstrate a potent combination of duels won and minimal possession losses, showcasing an ability to transition from defense to attack effectively.
</p>

<p align="justify">
In conclusion, the scatter plot offers valuable insights into the dynamics of your duels and possession retention. Analyzing your position on the plot and understanding the strategic implications can guide targeted improvements in your playing style.
</p>

<p align="justify">
So, the analysis above was used to make a scatter plot about a chosen team. We chose to start with Flamengo and analyze its players' performance during the game against Audax. These are the results:
</p>

{% include figure.html path="assets/img/Posts_Images/2024-01-20-post_rodada1_cariocao-Images/possexduelospng.png" class="img-fluid rounded z-depth-1" %}

<strong>Players' Shooting Analysis</strong>

<p align="justify">
In our analysis of the goal-scoring prowess of the two standout performers in the recent round of the 2024 Campeonato Carioca, we've focused on key metrics such as goals scored (G), expected goals (xG), total shots taken, and the xG per shot ratio. Let's delve into the performance metrics of the top two performers and draw insights from their impressive displays.
</p>

<p align="justify">
1. <strong>Goals Scored (G):</strong> The G metric serves as a testament to the players' effectiveness in converting goal-scoring opportunities into tangible results. It reflects their ability to deliver in crucial moments and make significant contributions to their team's success.
2. <strong>Expected Goals (xG):</strong> The xG metric provides valuable insights into the quality of chances created and taken by each player. A high xG suggests that their goal-scoring prowess is not merely a result of chance but rather a product of consistently creating high-quality opportunities. This metric underlines their strategic positioning and finishing abilities.
3. <strong>Total Shots Taken:</strong> An analysis of the total shots taken by both players sheds light on their assertiveness in front of goal. A high shot count, when coupled with a high conversion rate, indicates a clinical and prolific goal-scoring performance. The players' offensive contributions are evident in their willingness to take on goal-scoring responsibilities.
4. <strong>xG per Shot:</strong> The xG per shot ratio is a crucial metric that gauges the efficiency of each player in converting goal-scoring opportunities. A high xG per shot indicates a player's ability to maximize the quality of chances, making each shot count. It reflects their precision and effectiveness in front of goal.
</p>

<p align="justify">
To base our analysis, we bring a shoot graph of the two best shooters of the first round:
</p>

{% include figure.html path="assets/img/Posts_Images/2024-01-20-post_rodada1_cariocao-Images/cebolinhashot.jpg" class="img-fluid rounded z-depth-1" %}
{% include figure.html path="assets/img/Posts_Images/2024-01-20-post_rodada1_cariocao-Images/jeffinhoshot.jpg" class="img-fluid rounded z-depth-1" %}

### Comparative Analysis:

<p align="justify">
- Both players showcased an impressive conversion of goal-scoring opportunities, as reflected in their high G and xG metrics. This consistency highlights their reliability as key contributors in the attacking phase.
- The xG per shot ratio provides insights into the effectiveness of their decision-making in front of goal. It showcases their ability to make strategic choices, maximizing the expected value of each attempt.
- The total shots taken by both players illustrate not only their offensive contributions but also their proactive approach to goal-scoring responsibilities. Their willingness to take on shots contributes significantly to the team's attacking prowess.
</p>

<p align="justify">
In summary, the goal-scoring performances of these two players stand out prominently in the recent round of the Campeonato Carioca. Their ability to convert chances, strategic decision-making, and offensive contributions underline their importance as key figures in the pursuit of success. As we bring forth this comparative analysis, it becomes evident that these two players have been at the forefront of goal-scoring excellence in the competition.
</p>

<p align="justify">
In conclusion, the recent Campeonato Carioca round is a testament to their offensive impact. The combination of clinical finishing, strategic shot selection, and consistent creation of high-quality chances solidifies their positions as key contributors in the pursuit of success.
</p>

<p align="justify">
- Data for some teams was not available when composing this analysis.
</p>

<p align="justify">
We hope you enjoyed this insightful analysis of the Campeonato Carioca, gaining valuable insights into the intricate dynamics of football networks. Feel free to share your thoughts and questions.
</p>
