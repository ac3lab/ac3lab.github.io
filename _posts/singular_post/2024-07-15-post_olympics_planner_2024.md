---
layout: post
title: "An Optimization Model for Personalized Itineraries: Insights from our Olympics Planner 2024"
date: 2020-07-15 09:00:00
description: Discover how we developed the Olympics Planner 2024, an optimization model designed to create personalized itineraries for the Paris Olympic Games.
tags: Olympics; Paris
categories: Olympics; Paris
thumbnail: assets/img/Posts_Images/2024-07-15-olympics-planner/paris.jpg
author: Amanda Azevedo, Almir Júnior, Pedro Siqueira
---

## Introduction

<p align="justify">
As the Paris 2024 Olympic Games approach, we present the Olympics Planner 2024, an optimization model designed to craft personalized itineraries based on individual preferences. This tool leverages advanced algorithms to ensure that attendees can maximize their Olympic experience by  navigating events, attractions, and venues. In this post, we delve into the methodologies and technologies employed in the development of the Olympics Planner 2024.
</p>


## Data Collection

<p align="justify">
The primary data for this study was obtained from the <a href = "https://tickets.paris2024.org/en/"> official releases of the Paris Olympic Committee</a>, which provided extensive details on event schedules, ticket prices, and venue locations. We gathered the start and end times for all Olympic events, the associated costs of attending each event, and the geographic coordinates and addresses of all event venues.

To collect this data, we developed scripts that extracted information directly from the official Olympics website. This process posed significant challenges due to the difficulty in accessing and organizing the information, which was not easily available or straightforward to manipulate. These complexities highlight the difficulties of applying this methodology to previous Olympics, where data availability is even more limited. Comprehensive data cleaning and organization were necessary to ensure the dataset's accuracy and usability.
</p>

$$
\text{Average cost per minute} = \frac{0.063 + 0.53 + 0.30}{3} \approx 0.298
$$

<p align="justify">
Using the average travel cost, we incorporated a budget constraint into the optimization model to ensure that the total expenditure—comprising event costs and travel costs did not exceed the allocated budget. The travel cost was calculated by multiplying the travel time between events by the average cost per minute.
</p>

## The Model

<p align="justify">

This section addresses the logistical challenge of optimizing Olympic Game-Watching Schedules. Given the diverse array of events spread across various venues and times, crafting an optimal viewing schedule is inherently complex. This study formulates the problem as a network flow optimization task, aiming to develop personalized schedules that maximize spectator preference scores while ensuring both travel feasibility and schedule coherence.

Consider a directed graph \( G = (V, A) \), where \( V \) represents the set of vertices denoting Olympic events, and \( A \) represents the arcs denoting transitions between events.

Each event \( i \in V \) is defined by its start time \( t^{\text{start}}_i \) and duration \( \text{duration}_i \), where \( t^{\text{end}}_i = t^{\text{start}}_i + \text{duration}_i \). The start time \( t^{\text{start}}_i \) denotes the minute within the total Olympic timeline when event \( i \) begins.

Each event \( i \in V \) has an associated ticket price \( c_i \). Additionally, there is an average travel cost per minute \( c_{ij} \) for each arc \( (i, j) \in A \). The total travel cost between events \( i \) and \( j \) is given by \( c_{ij} \times t_{ij} \), where \( t_{ij} \) represents the travel time in minutes between the two events. Spectators have a maximum budget \( B \), which serves as an upper limit on total costs, covering both ticket prices and travel expenses.

In addition to costs, each event \( i \in V \) is assigned a preference score \( p_i \), reflecting spectator interest in attending that event.

Let \( x_{ij} \) be a binary decision variable for arc \( (i, j) \in A \), where \( x_{ij} = 1 \) indicates a spectator travels from event \( i \) to event \( j \), and \( x_{ij} = 0 \) otherwise. Similarly, let \( w_i \) be a binary decision variable for vertex \( i \in V \), where \( w_i = 1 \) indicates attendance at event \( i \), and \( w_i = 0 \) otherwise.

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


where,


$$
\begin{align}
    M_{ij} = \max\{0, t^{\text{end}}i + t{ij} - t^{\text{start}}_j\}
\end{align}
$$


The objective function \( Z \) aims to maximize the total preference score, thereby prioritizing events that spectators are highly interested in attending. Constraints ensure logical sequencing of events (\( \ref{eq:sequence_1} \) and \( \ref{eq:sequence_2} \)), define the start (\( \ref{eq:start} \)) and end (\( \ref{eq:end} \)) of the viewing schedule, enforce feasible travel times (\( \ref{eq:travel_time} \)), and maintain budget constraints (\( \ref{eq:budget} \)). Variables \( x_{ij} \) and \( w_i \) are binary, ensuring the model's feasibility and practical application.


</p>

## Model Implementation


<p align="justify">

The implementation of the model involved three steps: creating a directed graph, calculating travel times, and assigning both preference scores and costs to each event.

We assigned a preference score to each event based on spectator interest, which was classified into five levels: Very Uninterested, Slightly Interested, Neutral, Interested, and Very Interested, with each level having an associated weight. Ticket prices were also factored in to reflect the cost of attending each event.

For on-site spectators, travel times between venues were computed using Geographic Information System (GIS) tools. These tools took into account real-world travel routes and car travel times to ensure that transitions between events were feasible within the given schedule.

</p>

{% include figure.html path="assets/img/Posts_Images/2024-07-15-olympics-planner/routejpg.jpg" class="img-fluid rounded z-depth-1" %}


<p align="justify">
Travel costs were integrated into the model by estimating the average cost per minute for various transportation modes in Paris, each with unique pricing structures. According to the Régie Autonome des Transports Parisiens (RATP), a single metro or bus ticket costs approximately €1.90, with an average trip duration of 30 minutes, resulting in a cost of €0.063 per minute. Taxi fares in Paris vary: during the day, the rate is €0.53 per minute, and at night, it increases to €0.60 per minute. Uber services charge €0.30 per minute.

To consolidate these diverse transportation costs into a unified average cost per minute, we employed a weighted average method. The calculation was structured as follows:

</p>

## Conclusion

<p align="justify">
This study has tackled the  challenge of optimizing Olympic Game-Watching Schedules through a sophisticated network flow optimization approach. By formulating the problem within a directed graph framework and integrating factors such as event preferences, travel costs, and budget constraints, our model aims to tailor personalized viewing schedules that enhance spectator experience. The formulation not only prioritizes events based on spectator interest but also ensures practicality by considering feasible travel routes and cost-effective planning. This approach not only showcases the potential of operations research in large-scale event management but also sets a precedent for future applications in optimizing complex scheduling scenarios.
</p>

