---
layout: post
title: "Analyzing Complex Network metrics from the 1958 World Cup final"
date: 2024-01-17 16:00:00
description: Investigating the 1958 World Cup final match between Brazil and Sweden using Complex Network metrics.
tags: Football; World_Cup; Python
categories: Football; Python
thumbnail: assets/img/Posts_Images/2024-01-17-post_58_worldcup_final-Images/pele1958.jpg
author: Balthazar Paixão
---

{% include figure.html path="assets/img/Posts_Images/2024-01-17-post_58_worldcup_final-Images/pele1958.jpg" class="img-fluid rounded z-depth-1" %}

<p align="justify">
The World Cup is the most important football competition in the world. It is held every four years and gathers the best national teams in the world. The first edition of the competition was held in 1930, in Uruguay, and since then, the competition has been held every four years, except in 1942 and 1946, due to World War II. The competition is organized by FIFA (Fédération Internationale de Football Association), the world's football governing body.
</p>

<p align="justify">
The 1958 World Cup was the sixth edition of the competition and was held in Sweden. The competition was attended by 16 teams, which were divided into four groups of four teams each. The first two teams in each group advanced to the quarterfinals. The competition was won by Brazil, which beat Sweden 5-2 in the final. The Brazilian team was led by the legendary Pelé, who was only 17 years old at the time.
</p>

<p align="justify">
This post aims to analyze the 1958 World Cup final passes networks between the Brazilian players. The data used in this post was obtained from the <a href="https://github.com/statsbomb/open-data" target="_blank">StatsBomb Open Data</a> repository. We will explore some Complex Network metrics to investigate the Brazilian team's passing network in the final match. Let's code!
</p>

Data extraction

<p align="justify">
The data extraction process can be considered the easiest one. It is because Statsbomb provides a Python package called <a href="https://github.com/statsbomb/statsbombpy" target="_blank">statsbombpy</a> that allows us to extract the data directly from the repository based on the match_id that they provide in the repository. The extraction would be as follows:
</p>

{% include figure.html path="assets/img/Posts_Images/2024-01-17-post_58_worldcup_final-Images/data-extration-statsbombpy.png" class="img-fluid rounded z-depth-1" %}

Data preparation (to the passes network)

<p align="justify">
With the DataFrame from avents loaded we can begin creating a class for the players and a funtion to get all the Starting XI players from the match (the ones that we will use in the passes network). The class for the players is as follows:
</p>

{% include figure.html path="assets/img/Posts_Images/2024-01-17-post_58_worldcup_final-Images/data-preparation-player-class.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
Using our DataFrame we want to filter the data following some criteria, so:
<ol>
  <li>The event must be a pass</li>
  <li>It cannot be a pass from set-pieces</li>
  <li>And it must have an outcome of success</li>
</ol>

</p>

<p align="justify">
After this filtering, we aggregate the data by the player that made the pass and the player that received the pass. And that's it, we have our passes network.  
</p>

Analysis

<p align="justify">
Now that we have our passes network, we can start the analysis. The first thing we can do is to plot the network. We can do this using the <a href="https://networkx.org/" target="_blank">NetworkX</a> package. The result will be like this:
</p>
{% include figure.html path="assets/img/Posts_Images/2024-01-17-post_58_worldcup_final-Images/data-analysis-pass-network-simple.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
Yeah... It's not very informative. We can see that Pelé is the player that receive the most passes, but we can't extract much information from this plot. So, let's try to improve it...
</p>

{% include figure.html path="assets/img/Posts_Images/2024-01-17-post_58_worldcup_final-Images/data-analysis-pass-network.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
Much better! Now we can see that Pelé and Vavá are occupying almost the same average position in the field. We can also see some differences comparing with modern football. For example, there is no player with average position in the center of the field.
</p>

Complex Network metrics

<p align="justify">
As could be noted, we explore the creation of a pass network where our graph is a DiGraph, i.e., a directed graph. This is because we are interested in the direction of the passes. Given that, we can explore some Complex Network metrics to investigate the Brazilian team's passing network in the final match and their behaviour.
</p>


Degrees
<p align="justify">
The degree of a node is the number of edges incident to the node, the passes between the players. The player that showed the lowest degree was, unexpectedly, Bellini; and the player that showed the highest degree was Waldir. This could indicate how Brazil was exploiting spaces in the right side of the field. The average degree was 14.2. One interesting thing is that Pelé is not the player that received the most passes, the player is Garrincha.
</p>

Clustering Coefficient
<p align="justify">
Clustering indicates how close a node and its neighbors are to being a clique. In our case, it indicates how close a player and his teammates are to being a clique (a group of players that pass the ball between them). And the player that showed the highest clustering coefficient was Pelé. This could indicate that Pelé was the player that was more involved in the passing game. The lowest clustering coefficient was shown by Gylmar, the goalkeeper, which is expected.
</p>

Closeness Centrality
<p align="justify">
Closeness centrality indicates how close a node is to all other nodes in the network. In our case, it indicates how close a player is to all other players in the network. The player that showed the highest closeness centrality was Garrincha, one of the most important players regarding dribbling and creating chances. The lowest closeness centrality was shown by Bellini, as the game was not being explored in his side of the field based on our theory.
</p>

Betweeness Centrality
<p align="justify">
Betweeness centrality indicates how often a node appears on a shortest path between two other nodes. In our case, it indicates how often a player appears on a shortest path between two other players. The player that showed the highest betweeness centrality was Waldir, which the lowest betweeness centrality was shown by Bellini, which indicates that our beliefs are correct.
</p>

Hubs and Authorities
<p align="justify">
Hubs and Authorities are two metrics that are used to identify how the degrees are distributed between the nodes in a network. The Hubs metric identifies the nodes that passed the ball the most, while the Authorities metric identifies the nodes that received the ball the most. The player that showed the highest Hubs metric was Waldir, which the player that showed the highest Authorities metric was Pelé. This indicates that Waldir was the player that passed the ball the most, while Pelé was the player that received the ball the most.
</p>

Pagerank
<p align="justify">
Pagerank is a metric that is used to identify the nodes that are more important in a network. The player that showed the highest Pagerank was Pelé, which the player that showed the lowest Pagerank was Bellini. This indicates that Pelé was the player that was more important in the network, while Bellini was the player that was less important in the network.
</p>


Conclusion
<p align="justify">
In this post, we analyzed the 1958 World Cup final passes network between the Brazilian players. We explored some Complex Network metrics to investigate the Brazilian team's passing network in the final match and their behaviour. We found that Pelé, Garrincha and Waldir showed a great importance in the network, while Bellini and Gylmar showed a low importance in the network. We also found that Brazil was exploiting spaces in the right side of the field.
</p>

<p align="justify">
I hope you enjoyed this post and could learn a little bit more of complex networks. If you have any questions or suggestions, please leave a comment below. The complete analysis code can be found on the <a href="https://github.com/balthapaixao/football-networks/blob/main/analysis/others/public/complex-network-analysis-1958-brazil.ipynb ">notebook</a>.
</p>
