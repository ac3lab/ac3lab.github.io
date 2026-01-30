---
layout: post
title: "An Optimization Model for Personalized Itineraries: Insights from our Olympics Planner 2024"
date: 2024-07-15 10:00:00
description: Discover how we developed the Olympics Planner 2024, an optimization model designed to create personalized itineraries for the Paris Olympic Games.
tags: Olympics; Paris
categories: Olympics; Paris
thumbnail: assets/img/Posts_Images/2024-07-15-olympics-planner/paris.jpg
author: Amanda Azevedo, Almir Júnior, Pedro Siqueira
---

## Introduction

<p align="justify">
As the Paris 2024 Olympic Games draw near, we are pleased to introduce the Olympics Planner 2024. This tool is engineered to provide personalized itineraries that cater to individual preferences, using advanced algorithms to help attendees fully engage with the events, attractions, and venues. In this post, we will explore the methodologies and technologies behind the development of the Olympics Planner 2024.<br/><br/>
</p>


## Data Collection

<p align="justify">

We sourced our dataset from the official publications of<a href = "https://tickets.paris2024.org/en/"> the Paris Olympic Committee</a>, which provided details about event schedules, ticket pricing, and venue information. We gathered data on event timings, costs of tickets, and the exact locations of venues, documented with both addresses and geographic coordinates.<br/><br/>

Scripts were crafted to extract this information from the official Olympic website, a process that presented challenges due to the complex presentation of the site's data and issues with data accessibility. These obstacles underscore the complexities of employing this methodology with historical Olympic data, which may be even harder to access.<br/><br/>


Additionally, we incorporated financial considerations into our model by including both the average travel costs between events and the ticket prices. To ensure total expenses remained within the allocated budget, we introduced a budget constraint. Travel costs were estimated by calculating the travel time between venues and multiplying it by the average cost per minute, providing a more realistic assessment of the financial implications of attending multiple events.

</p>

## The Model

<p align="justify">

We approached the task of crafting optimal viewing schedules for the Olympic Games by formulating it as a network flow optimization model. Our goal was to develop personalized schedules that prioritized spectator preferences while ensuring the feasibility of travel and maintaining a coherent schedule. <br/><br/>

Consider a directed graph \( G = (V, A) \), where \( V \) represents the set of vertices denoting Olympic events, and \( A \) represents the arcs denoting transitions between events.<br/><br/>

Each event \( i \in V \) is defined by its start time \( t^{\text{start}}_i \) and duration \( \text{duration}_i \), where \( t^{\text{end}}_i = t^{\text{start}}_i + \text{duration}_i \). The start time \( t^{\text{start}}_i \) denotes the minute within the total Olympic timeline when event \( i \) begins.<br/><br/>

Each event \( i \in V \) has an associated ticket price \( c_i \). Additionally, there is an average travel cost per minute \( c_{ij} \) for each arc \( (i, j) \in A \). The total travel cost between events \( i \) and \( j \) is given by \( c_{ij} \times t_{ij} \), where \( t_{ij} \) represents the travel time in minutes between the two events. Spectators have a maximum budget \( B \), which serves as an upper limit on total costs, covering both ticket prices and travel expenses.<br/><br/>

In addition to costs, each event \( i \in V \) is assigned a preference score \( p_i \), reflecting spectator interest in attending that event.<br/><br/>

Let \( x_{ij} \) be a binary decision variable for arc \( (i, j) \in A \), where \( x_{ij} = 1 \) indicates a spectator travels from event \( i \) to event \( j \), and \( x_{ij} = 0 \) otherwise. Similarly, let \( w_i \) be a binary decision variable for vertex \( i \in V \), where \( w_i = 1 \) indicates attendance at event \( i \), and \( w_i = 0 \) otherwise.<br/><br/>

The optimization problem is formulated as follows:


$$
\begin{align}
    \text{Maximize} \quad & Z = \sum_{i \in V} p_i w_i \label{eq:objective}\\
    \text{subject to} \\
    & \sum_{j \in V \setminus \{i\}} x_{ij} = w_i, \quad \forall i \in V \setminus \{n+1\} \label{eq:sequence_1}\\
    & \sum_{i \in V \setminus \{j\}} x_{ij} = w_j, \quad \forall j \in V \setminus \{0\} \label{eq:sequence_2}\\
    & \sum_{i \in V} x_{0i} = 1 \label{eq:start}\\
    & \sum_{i \in V} x_{i(n+1)} = 1 \label{eq:end}\\
    & t^{\text{end}}i + t{ij} - M_{ij}(1 - x_{ij}) \leq t^{\text{start}}_j, \quad \forall i, j \in V, i \neq j \label{eq:travel_time}\\
    & \sum_{i \in V} c_i w_i + \sum_{j \in V} x_{ij}c_{ij}t_{ij} \leq B \label{eq:budget}\\
    & x_{ij} \in \{0, 1\}, \quad \forall (i, j) \in A \label{eq:binary_x}\\
    & w_i \in \{0, 1\}, \quad \forall i \in V \label{eq:binary_y}
\end{align}
$$



<p align="justify">
where, <br/><br/>
</p>



$$
\begin{align}
    M_{ij} = \max\{0, t^{\text{end}}i + t{ij} - t^{\text{start}}_j\}
\end{align}
$$


The objective function \( Z \) aims to maximize the total preference score, thereby prioritizing events that spectators are highly interested in attending. Constraints ensure logical sequencing of events (\( \ref{eq:sequence_1} \) and \( \ref{eq:sequence_2} \)), define the start (\( \ref{eq:start} \)) and end (\( \ref{eq:end} \)) of the viewing schedule, enforce feasible travel times (\( \ref{eq:travel_time} \)), and maintain budget constraints (\( \ref{eq:budget} \)). Variables \( x_{ij} \) and \( w_i \) are binary, ensuring the model's feasibility and practical application.


</p>


<p align="justify">

The model's implementation consisted of three key steps: constructing a directed graph, calculating travel times, and assigning preference scores and costs to each event.<br/><br/>

Preference scores were allocated to each event based on spectator interest, categorized into five levels ranging from "Very Uninterested" to "Very Interested," each assigned a specific weight. Additionally, the cost of attending each event was incorporated into the model by including ticket prices. Travel times between venues for spectators attending in person were determined using Geographic Information System (GIS) tools. These tools accounted for actual travel routes and car travel durations to ensure feasible transitions between events within the planned schedule.<br/><br/>

</p>

{% include figure.liquid path="assets/img/Posts_Images/2024-07-15-olympics-planner/routejpg.jpg" class="img-fluid rounded z-depth-1" %}


## Conclusion

<p align="justify">
This research introduces a novel approach to optimizing Olympic Game-Watching Schedules using network flow optimization. Set within a directed graph, the model seamlessly integrates spectator preferences, travel logistics, and budget considerations to craft personalized viewing schedules that enhance the overall experience. This innovative use of operations research in large-scale event management sets a new benchmark for complex scheduling solutions.<br/><br/>

To make this tool available to the public, we developed a website where users can create their own itinerary for the 2024 Paris Olympic Games.<br/><br/>

Explore your custom Olympic schedule here:  <a href = "https://olympicsplanner.ace.cos.ufrj.br/"> Olympics Planner 2024</a>

</p>

