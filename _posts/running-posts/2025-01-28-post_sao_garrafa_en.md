---
layout: post
title: "São Garrafa Niterói 2024 – Analyzing 10 different runners"
date: 2025-01-26 11:00:00
description: Analyzing the performance of 10 different runners from São Garrafa 2024
tags: Running; São Garrafa; Python; Analytics; Statistics
categories: Running; São Garrafa; Python; Analytics; Statistics
thumbnail: assets/img/Posts_Images/2025-01-28-post_sao_garrafa/imagem_0.png
---

<p align="justify">
Se quiser ler este texto em pt-br, <a href = "https://ac3lab.github.io/blog/2000/post_sao_garrafa_pt/"> clique aqui.</a>
</p>


{% include figure.html path="assets/img/Posts_Images/2025-01-28-post_sao_garrafa/imagem_0.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
On December 15 2024, the last edition of São Garrafa, a very traditional race in the city of Niterói (RJ). The event featured 5km and 15km routes and is renowned for the significant challenges in the longer-distance course: nearly 4km of uphill segments, with certain points becoming quite steep.
</p>

<p align="justify">
A total of 1.973 runners completed the race, with 1.010 in the 5km course and 963 in the 15km course. Here's an interesting detail: in the shorter distance, the majority of participants were women (around 63%), while in the longer distance, the majority were men, with women accounting for 38% of the participants.
</p>

<p align="justify">
As it is well known that weather conditions can directly impact athletes performance, it's worth noting that the race started at 6:30am and that during the event, the sky was heavily overcast, with occasional drizzle. According to some participants, the early start time combined with the weather conditions contributed positively to their performance on the course, as December tends to be very hot in Niterói.
</p>

Let's dive into the analysis!

<p align="justify">
The goal of this post is to analyze the performance of some participants to shed light on and validate certain hypotheses that we already know from other studies and related work.
</p>

<p align="justify">
Ten athletes who participated in the race and used the <a href="https://www.strava.com/">Strava</a> app provided consent to participate in the analysis and shared the race data collected by the app. This dataset includes information such as speed, distance, compass, and more. Additionally, the volunteer runners completed a brief questionnaire containing details about their training, race preparation, and experience.
</p>

In general, regarding the participants:

<ul>
    <li>All of them had a habit of running and practicing other exercises;</li>
    <li>Only 4 had previously run the race course;</li>
    <li>9 out of the 10 participants prepared for the race in a more comprehensive manner.</li>
</ul>

Exploratory

<p align="justify">
The data extracted from Strava and provided by the participants were imported into Python for a more detailed exploratory analysis. It is important to note that we removed 2 runners from the analysis due to inconsistent data — most likely caused by GPS data capture failures during the race.
</p>

<p align="justify">
In the chart below, you can visualize the performance of each participant (average pace) by distance covered:
</p>

{% include figure.html path="assets/img/Posts_Images/2025-01-28-post_sao_garrafa/imagem_2.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
Right from the start, runners 1, 5, 6, and 10 stand out for maintaining a low pace throughout the entire course — around 4'30" on average. Coincidence? Probably not, as these were the 4 runners who had trained on the race course before the event. To simplify the understanding from here on, we will refer to this group as the "course-savvy runners". This point highlights just how crucial preparation and knowledge of the course are before taking on a challenging race.
</p>

<p align="justify">
Notice that between kilometers 5 and 8, all athletes showed a decrease in their speeds (increase in pace). This is exactly the part of the course with a very steep uphill, where it is quite difficult to maintain the pace. Here, a statistical test was conducted to compare the pace of the course-savvy runners with those who were not familiar with the course, and it can be stated that there is a statistically significant difference (p-value < 0.05) in the speeds of these two groups at this segment of the course.
</p>

<p align="justify">
In this other chart, it's also possible to visualize the performance of each participant, but now by race time. Once again, the course-savvy runners stand out for, unsurprisingly, being the ones to finish the race the fastest.
</p>

{% include figure.html path="assets/img/Posts_Images/2025-01-28-post_sao_garrafa/imagem_1.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
In general, the course-savvy runners were at a walking speed (established here as 5 km/h) less frequently compared to the non-savvy runners. Another point that reinforces the idea that "more trained" athletes naturally perform better is their experience time. The course-savvy runners have an average of 5 years of running experience each, while the non-savvy runners have an average of 1 year.
</p>

<p align="justify">
It was also possible to compare performance by elevation range (in meters), as shown in the chart below. Runners 1 and 5 stand out for their minimal pace fluctuations as the elevation level increases, demonstrating their ability to maintain a nearly constant pace, as shown above. A previous study delves deeper into this point, suggesting that more experienced runners show fewer fluctuations in their speed series, meaning fewer abrupt changes. The full article can be found <a href="https://sol.sbc.org.br/index.php/sbbd/article/view/30754">here</a>!
</p>

{% include figure.html path="assets/img/Posts_Images/2025-01-28-post_sao_garrafa/imagem_3.png" class="img-fluid rounded z-depth-1" %}

Discussion

<p align="justify">
By analyzing the performance of the runners monitored by Strava, along with the information on preparation and experience in the sport, it was possible to validate some ideas already raised by other studies in a real race scenario: preparation and training are strongly correlated with good performance. 
</p>

<p align="justify">
According to the analysis, the course-savvy runners had better results, maintaining a more consistent pace throughout the race compared to the others. It is likely that their prior knowledge of the course allowed these runners to better adapt to the challenges. It is important to mention that there are other variables not considered in this analysis, such as nutrition, injury history, age, body anatomy, among others, which, according to the literature, also influence the results.
</p>

<p align="justify">
Our goal was to illustrate in a real case how some of these variables are connected and to raise the challenge for future work considering other influencing factors for performance evaluation—and even prediction.
</p>

Any suggestions are welcome!

References

https://neorace.com.br/resultados/g-live.html?f=2024%2Fdez%2Fsgf%2Fsgf.clax

TITO, Nathália; PAIXÃO, Balthazar; TAVARES, Lucas G.; OGASAWARA, Eduardo; AMORIM, Glauco F.. Diferenciando Perfis de Corredores por Meio de Pontos de Mudança nos Treinos. In: SIMPÓSIO BRASILEIRO DE BANCO DE DADOS (SBBD), 2024, Florianópolis/SC. Porto Alegre: Sociedade Brasileira de Computação. p. 834-840.