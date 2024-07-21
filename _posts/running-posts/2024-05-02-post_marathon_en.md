---
layout: post
title: "Rio Marathon 2023 – Exploratory with a bit of statistics and predictive estimation"
date: 2024-05-02 08:30:00
description: Analyzing data from the 2023 Rio Marathon results and developing a simple performance prediction model
tags: Running; Rio Marathon; Python; MachineLearning
categories: Running; Rio Marathon; Python; MachineLearning
thumbnail: assets/img/Posts_Images/2024-05-02-post_marathon/0.jpeg
author: Ace Laboratory Running Team
---

<p align="justify">
Se quiser ler este texto em pt-br, <a href = "https://ac3lab.github.io/blog/2000/post_marathon_pt/"> clique aqui.</a>
</p>

{% include figure.html path="assets/img/Posts_Images/2024-05-02-post_marathon/0.jpeg" class="img-fluid rounded z-depth-1" %}

<p align="justify">
Convenience, practicality, and health benefits are some of the reasons that make running an attractive, democratic, and popular sport. That's why street running has been gaining prominence worldwide, and events like marathons already attract thousands of athletes, whether elite or amateur. In Rio de Janeiro, for example, the 21st edition of the Marathon took place over the Corpus Christi holiday in 2023, and had over 40 thousands registrations (considering all the routes), which also economically boosted the city.
</p>

<p align="justify">
The 42k route, which passes through the city's main landmarks, crowned kenyan Josphat Kiprotich and ethiopian Zinash Debebe as the winners of the race, both from the elite male and female pelotons. Kiprotich finished the race in 2h13min29s – two seconds faster than the previous record, while Debebe completed it in 2h36min00s.
</p>

<p align="justify">
In just over a month, the city will host another edition of the event, and as a stimulus for preparation, we conducted a brief exploratory analysis - with a predictive touch - on the data from the 2023 general peloton results, so that we can reveal some insights about the race. Let's check it out!
</p>

Exploratory

<p align="justify">
In total, informations from 5799 athletes from the general group was analyzed, with 30% being female. Among the registrants, when we look at the age groups, the age group with the highest concentration, both for men and women, is 40-44 years old. In the graph below, we can see how this frequency occurs in the different groups:
</p>

{% include figure.html path="assets/img/Posts_Images/2024-05-02-post_marathon/1.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
When we look at athlete frequency from the perspective of performance, we see a higher concentration of men with a finishing time of 3,5-4 hours. For the female gender, the highest concentration is in the 4-4,5 hours range. Five women completed the race in less than 3 hours.
</p>

{% include figure.html path="assets/img/Posts_Images/2024-05-02-post_marathon/2.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
The shortest female time was 2h55min04s, while the shortest male time was 2h28min33s. The longest times were 6h39min23s and 6h42min59s, respectively, noting that we are looking at net time (time between crossing the start and finish lines). In the graph below, we can see the time distributions by gender:
</p>

{% include figure.html path="assets/img/Posts_Images/2024-05-02-post_marathon/3.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
It is also possible to view the distribution of the final time by age group and for each declared gender:
</p>

{% include figure.html path="assets/img/Posts_Images/2024-05-02-post_marathon/4.png" class="img-fluid rounded z-depth-1" %}

{% include figure.html path="assets/img/Posts_Images/2024-05-02-post_marathon/5.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
For both genders, the age group that stands out for having the fastest athletes is the 30-34 age group. Additionally, the male group had 2 registered athletes over 80 years old, which increasingly shows that there is truly no age limit for sports.
</p>

Performance prediction

<p align="justify">
Using as reference the article Prediction Marathon Using Artificial Intelligence [Lerebourg et al. 2023] and the article Pacing strategy of the finishers of the world marathon majors series [Kais et al. 2018], which assess the effect of variables such as gender and age on performance prediction using regression models, we also employed this information to train a multivariate regression model aiming to predict the finishing time of the race.
</p>

<p align="justify">
For this purpose, we used the python library <a href="https://www.statsmodels.org/stable/index.html">statsmodels</a>, after performing all the necessary data preprocessing and splitting it into training and testing sets. Below is the graph that compares the actual time versus what was predicted by the model:
</p>

{% include figure.html path="assets/img/Posts_Images/2024-05-02-post_marathon/6.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
From the graph, one conclusion we can take is that the values predicted by the model don't follow the actual values as they increase. Additionally, evaluating the modeling statistics, the gender variable apparently doesn't have statistical significance in the prediction (p-value = 0.721). Therefore, there is a need to include other variables in the modeling. Some studies in the literature suggest the use of various information in prediction, such as anthropometric, physiological, biomechanical data, as well as training information like experience, step rhythm, and blood lactate concentration.
</p>

Summary results:

{% include figure.html path="assets/img/Posts_Images/2024-05-02-post_marathon/7.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
Finally, the residual distribution graph, since one of the premises for a good adjustment of a linear regression model is that the residuals are normally distributed:
</p>

{% include figure.html path="assets/img/Posts_Images/2024-05-02-post_marathon/8.png" class="img-fluid rounded z-depth-1" %}

<p align="justify">
The distribution resembles a normal distribution, but with a slight positive skewness (left-skewed concentration). There are several tests we can perform to verify this, and some of them are already included in the summary table of results provided above. The <a href="https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.skew.html">Skewness</a>, for example, already indicates the non-normality and skewness of the error distribution (the closer to 0, the more "normal" the distribution is), and the <a href="https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.kurtosis.html">Kurtosis</a> as well, as it is associated with the flattening of the distribution (for values > 3, the distribution is "higher" than the normal distribution).
</p>

<p align="justify">
In this case, it's important to stay vigilant in evaluating the confidence intervals, which could be incorrect. Furthermore, there are other assumptions for a good regression fit, such as a null expectation and independence of residuals, and homoscedasticity (constant variation of residuals), but as it's not the focus of this post, we'll save it for a future discussion.
</p>

Discussion

<p align="justify">
In this post, we saw some descriptive statistics of the results from the 2023 Rio Marathon for the general group, visualizing how performance varies across different age groups and genders. With these data, we developed a simple performance prediction model, already raising the question of how challenging it can be to construct such a model with limited information. 
</p>

<p align="justify">
Street running is a sport that has been growing rapidly, and the debate about which factors contributing to performance improvement is far from over. We hope to absorb and contribute more to this process over time.
</p>

<p align="justify">
We hope you enjoyed reading and any suggestions are welcome.
</p>

References

https://maratonadorio.com.br/<br>
https://www.folhavitoria.com.br/esportes/blogs/corridaderua/2023/08/17/estudo-realizado-na-maratona-do-rio-2023-comprova-o-sucesso-do-evento-deste-ano/<br>
Ülari K., et al. Pacing strategy of the finishers of the world marathon majors series. Institute of Sport Sciences and Physiotherapy, University of Tartu, Tartu, Estonia. 2018.<br>
Lerebourg, L. et al. Prediction Marathon Using Artificial Intelligence. Int J Sports Med, 2023, 44: 352–360.