---
layout: post
title: "Complex Networks on football"
date: 2024-02-21 08:00:00
description: Using Complex Networks to analyze and understand football matches.
tags: Football; Complex_Networks; 
categories: Football; Complex_Networks
thumbnail: assets/img/Posts_Images/2024-02-21-post_complex_network_football-Images/data-analysis-pass-network.png
author: Balthazar Paixão
---

{% include figure.html path="assets/img/Posts_Images/2024-02-21-post_complex_network_football-Images/data-analysis-pass-network.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
Complex networks, or science networks, is a concept in computer science that study objects and their interactions. The objects are usually called nodes, and the interactions are edges. The area has been used to investigate various subjects, such as social networks, biological networks, and transportation networks. This post will show how to use this area to analyze football matches.
</p>

<p align="justify">
The first thing we need to do is to define what we want to analyze in the football match. The most common analysis is to study the pass network. The passes network is a network where the nodes are the players, and the edges are the passes between the players. This network can be used to analyze the team's strategy, the players' performance, and the team's performance. The network can be studied using several metrics, such as degree, clustering coefficient, centrality, and betweenness. Besides the passes network, we can also analyze the distance network between the players. Here, we will focus on the passes network.
</p>

<p align="justify">
This post will focus on the theoretical aspects of Complex Networks and how to use it to analyze football matches. We will not show the code to analyze the matches. In a future post, we will demonstrate step-by-step how to analyze a football match using Complex Networks.
</p>

## The Data
<p align="justify">
To model your network, you must have an event dataset from the match. The event dataset is a dataset that contains all the events that occurred during the match, such as passes, shots, and fouls. Some sources for this type of dataset are StatsBomb, Wyscout, and Opta. Statsbomb provides these datasets for free in their <a href="https://github.com/statsbomb/open-data" target="_blank">github repository</a>.
</p>


## Modeling the network
<p align="justify">
To model a pass network, you must follow some steps:
<ol>
  <li>Select the team that you want to analyze</li>
  <li>Filter to get only the passes</li>
  <li>They must have an outcome of success</li>
  <li>You can remove connections with less than a certain number of passes (optional)</li>
  <li>You can remove passes from set-pieces (optional)</li>
</ol>

The two last steps are optional because you may want to analyze the set pieces separately, and you may wish to filter meaningless passes. After this filtering, you must aggregate the data by the player that made the pass and the player that received the pass. This will give you the information necessary to prepare your network.
</p>

<p align="justify">
One observation is that your network must be directional. This means that the edges must have a direction, indicating the direction of the pass. This is important because the direction of the pass can give you information about the team's strategy.
</p>

<p align="justify">
After you have the data for your network, you can use a package like NetworkX to model your network. NetworkX is a Python package for the creation, manipulation, and study of the structure, dynamics, and functions of complex networks. The package provides tools to create and analyze the network.
</p>

## Analyzing the network
<p align="justify">
With these steps done, you can start the analysis of your network. After that, one thing you can do is plot the network to observe how the objects (players) are connected. After that, you can use some metrics to understand some concepts of the match and team you are analyzing. The metrics we will describe here are:
<ol>
  <li>Degree</li>
  <li>Clustering Coefficient</li>
  <li>Centrality</li>
  <ul>
    <li>Closeness</li>
    <li>Betweenness</li>
  </ul>
  <li>Hubs</li>
  <li>Authorities</li>
  <li>Pagerank</li>
</ol>
</p>

<p align="justify">
So, let's go!
</p>

## Metrics
<p align="justify">
Before everything, it is essential to realize that when analyzing a game, you must bring some subjectives of the team to have a complete understanding of the match. The metrics can give you some insights, but the final analysis must consider how the team plays, the players' characteristics, and the match context.
</p>
<p align="justify">
Having a high or low value in a metric can mean different things depending on the team's strategy and the players' behaviour. You should explore the differences between the players, compare with the players' positions, and compare with the team's performance. Remember, it is a network, everything is connected.


<h4>Degree</h4>
<p align="justify">
The degree of a node is the number of edges connected to it (the number of passes). The degree can inform you how much that player was involved in the match. A player with a high degree can be considered a key player in the match. A player with a low degree can be viewed as a player who was not involved in the team's plays (can also be a strategy). Nowadays, we can consider the player who pivots the game as a key player with this metric, usually the midfielder. Kevin De Bruyne, for example, is a player with a high degree in the matches.
</p>
<p align="justify">
Degrees can be in and out. The in-degree is the number of passes received by the player, and the out-degree is the number of passes made by the player.

<p align="justify">
In summary, the degree can inform you about the players' involvement in the match.
</p>

<h4>Clustering Coefficient</h4>
<p align="justify">
The Clustering Coefficient is an interesting one. When playing football, you learn the importance of creating triangles between the players, appearing in the game, receiving the ball, and having options to pass.
</p>

<p align="justify">
It will give this information to you. It measures the degree to which nodes in a graph tend to cluster together. In the context of football, it can provide you with information about how the team is creating triangles and options to pass.
</p>
<p align="justify">
Briefly, the Clustering Coefficient can give you an understanding of how the team creates options to pass and triangulates the plays.
</p>

<h4>Closeness Centrality</h4>
<p align="justify">
The Closeness Centrality measures the average shortest distance path between every player on the network. Regarding a pass network it can give you information about how the player is close to the other players in terms of passes. In other words, a player with a higher closeness centrality is a player that is more connected to the other players in the network.
</p>
<p align="justify">
An example can be a midfielder who constructs the plays and tends to have a higher closeness centrality. Another one is a center-forward can have a lower closeness centrality because he tends to be more isolated from the other players. We can say that Jorginho in Italy's national team has a high closeness centrality, he is always very near of every play.
</p>
<p align="justify">
In a nutshell, the Closeness Centrality can give you information about how the player is connected to the other players in the network.
</p>

<h4>Betweenness Centrality</h4>
<p align="justify">
The Betweenness Centrality is a metric that measures the number of times a node acts as a bridge along the shortest path between two other nodes. Bringing it to our context can give you information about how the player connects to the other players in the network.
</p>
<p align="justify">
It is like the role that Busquets had in the Barcelona team. He was the player that connected the defense to the attack. He was the bridge between the two sectors of the team.
</p>
<p align="justify">
Short, Betweeness shows how the player is in the middle of the plays, connecting the other players.
</p>

<h4>Hubs and Authorities</h4>
<p align="justify">
Hubs and Authorities are much exciting metrics for understanding the role of the players in the network. The Hubs are the players that make a lot of passes, and the Authorities are the players that receive a lot of passes. The concepts are simple, but the insights you can get from them can be unique.
</p>
<p align="justify">
Hubs are the players that are the source of the plays. In other words, they are the ones who create the plays and make passes.
</p>
<p align="justify">
Authorities are the players that are the target of the plays. They are the ones receiving the passes and probably finishing the plays.
</p>
<p align="justify">
You can combine those two metrics and compare them with the team's performance. What does it mean if you have a defender as a hub? What does it mean if you have a forward as an authority? The insights can be amazing.
</p>

<p align="justify">
An intuitive example is: back in the golden days of Barcelona, Messi was absolutely an authority in the Barcelona team meanwhile Xavi was a hub. Messi receives a lot of passes and finishes the plays, and Xavi is the source of the plays.
</p>

<h4>Pagerank</h4>
<p align="justify">
Pagerank is an impressive algorithm created by Larry Page and Sergey Brin, the founders of Google. The algorithm was developed to rank web pages in the search engine. The algorithm is based on the idea that the importance of a web page can be measured by the number of pages that link to it. The more important the pages that link to a page, the more important the page is.
</p>
<p align="justify">
Bringing it to the football context, you can use the algorithm to rank the players in the network. Intuitively, the players showing a higher Pagerank are the most important players in the network. It can give you information that could be clearer just by looking at the passes network. 
</p>
<p align="justify">
To sum things up, the Pagerank can give you information about the importance of the players in the network.
</p>

## Conclusion
<p align="justify">
In this post, we showed how to use Complex Networks to analyze football matches. We showed the steps to model the network and the metrics you can use to analyze the network. The metrics can give you information about the players' involvement in the match, the team's strategy, and the players' importance in the network. The analysis can give you insights that could be clearer just by looking at the match. In a future post, we will show how to analyze a football match using Complex Networks.
</p>

<p align="justify">
We hope you enjoyed the post. If you have any questions or comments, please leave them below. We will be happy to answer them. Keep following us to learn more about football and Complex Networks.
</p>