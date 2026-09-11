---
layout: post
title: "Does the Playing Style of Brazilian Teams Leave a Signature in Their Match Data?"
date: 2026-09-10 00:00:00
description: "Can you tell which club it is just from the numbers of a match, with no scoreline, no crest and no players on the pitch?"
tags: Football; Analysis; Tactical Identity
categories: Sports; Analysis
thumbnail: assets/img/Posts_Images/2026-09-10-playing-style-signature/en/image2.jpg
author: ACE Laboratory Team
---

---

<p align="justify">
Se quiser ler esse texto em pt-br, <a href="https://ac3lab.github.io/blog/2000/playing-style-signature_pt/">clique aqui.</a>
</p>

<style>body {text-align: justify}</style>

<p>Every fan can "feel" that teams play differently: one team relies on possession and short circulation, another leans on long balls and aerial play, and a third focuses on transition speed. But is that feeling real — recoverable from match data — or just a narrative built after the fact?</p>

<p>That was the question behind the first slice of our research on tactical identity in the 2026 Brazilian Série A: can you tell which team it is just by looking at the numbers from a match — no scoreline, no crest, no players on the pitch — purely from how it played?</p>

<h2><b>The Data</b></h2>

<p>We used event data from 260 matches across matchdays 1 to 26 of the 2026 Brazilian Série A — almost 70% of the season. Each match generates two observations, one per team, for a total of 520 "team-match" observations across the league's 20 clubs. Each event (pass, shot, duel, foul, etc.) carries the action type, the outcome, the team, the player, the match minute, and, when available, the start and end coordinates on the pitch.</p>

<h2><b>The Variables: How to Summarize "Style" in Numbers</b></h2>

<p>We selected 18 variables that describe <b>how</b> a team executes its actions, not <b>how much</b> it does — prioritizing ratios and spatial measures over raw counts, so as not to confuse style with volume of play. Examples: pass accuracy, forward-pass rate, strong progression rate, average pass length, cross rate, entries into the final third and the box, central circulation, lateral pass dispersion, and share of aerial duels.</p>

<p>Each team's performance in each match thus becomes a vector of 18 numbers — a fingerprint of that game.</p>

<h2><b>The Method: Recognizing a Team Purely by Its Style</b></h2>

<p>We standardized the 18 variables (so they would be on the same scale) and defined each club's identity as the centroid — the average — of all its match signatures. The distance between two styles is the Euclidean distance between these centroids.</p>

<p>The core test is straightforward: for each performance, we remove it from the set, recalculate the centroids without it, and ask "which centroid is this anonymous performance closest to?". A hit is when the closest centroid belongs to the team itself. We repeat this for all 520 observations (leave-one-match-out) and also check whether the correct team appears among the three closest centroids (Top-3).</p>

<p>To confirm that accuracy above chance is not a coincidence, we shuffled team labels 2,000 times and repeated the process, generating a reference distribution of what would happen with no identity at all to recognize.</p>

<p>One note before the results: this is a straightforward idea of how to recognize teams by the way they play, not a proposal for a definitive method. A distance to centroids, a slice of 26 of the 38 matchdays and a lean set of variables are choices that favor clarity of explanation over technical sophistication. The goal here is exploratory and educational: to show that the question can be investigated with data and to open the way for more elaborate versions of the analysis in the future — not to settle the matter.</p>

<h2><b>The Result: Yes, There Is a Signature</b></h2>

<p>The method correctly identifies the team in <b>21.15%</b> of the 520 performances — against a random baseline of 5% (1 in 20 teams), about 4.2 times what chance would predict. Considering the three most likely teams (Top-3), accuracy rises to <b>43.46%</b>.</p>

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 600px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-09-10-playing-style-signature/en/image2.jpg" title="Figure 1: Two-dimensional projection (PCA) of the 520 style signatures" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Figure 1: Two-dimensional projection (PCA) of the 520 style signatures; the larger markers are each team's centroid (the two components add up to 51% of the variance; validation uses the original 18 variables).<br/><br/></center>

<p>The permutation test reinforces the result: across the 2,000 simulations with shuffled labels, average accuracy was 5.21%, and none came anywhere close to the observed 21.15% (the highest was 8.85%). In a scenario with no identity at all to recognize, a result like the one we observed would be extremely rare (p = 0.0005, the lowest value attainable with 2,000 permutations).</p>

<p>That answers the question in the title: yes, playing style leaves a recoverable signature in the data. A team's identity is not just a subjective impression held by fans or analysts — it is a statistically detectable pattern.</p>

<p>But the aggregate accuracy hides a huge difference between clubs. Some teams have a far more "signed" style than others — the five most and the five least recognizable teams in the league for this slice of the season are shown in Table 1:</p>

<div style="display: flex; justify-content: center;">
<table>
  <thead>
    <tr style="background-color: #1f5c4a;">
      <th style="color: white; padding: 4px 12px;">Team</th>
      <th style="color: white; padding: 4px 12px; text-align: center;">Top-1</th>
      <th style="color: white; padding: 4px 12px; text-align: center;">Top-3</th>
      <th style="color: white; padding: 4px 12px; text-align: center;">Average rank</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 4px 12px;">Fluminense</td>
      <td style="padding: 4px 12px; text-align: center;">64.29%</td>
      <td style="padding: 4px 12px; text-align: center;">82.14%</td>
      <td style="padding: 4px 12px; text-align: center;">3.04</td>
    </tr>
    <tr>
      <td style="padding: 4px 12px;">Vasco da Gama</td>
      <td style="padding: 4px 12px; text-align: center;">48.00%</td>
      <td style="padding: 4px 12px; text-align: center;">60.00%</td>
      <td style="padding: 4px 12px; text-align: center;">4.48</td>
    </tr>
    <tr>
      <td style="padding: 4px 12px;">Grêmio</td>
      <td style="padding: 4px 12px; text-align: center;">42.31%</td>
      <td style="padding: 4px 12px; text-align: center;">57.69%</td>
      <td style="padding: 4px 12px; text-align: center;">4.54</td>
    </tr>
    <tr>
      <td style="padding: 4px 12px;">Flamengo</td>
      <td style="padding: 4px 12px; text-align: center;">38.46%</td>
      <td style="padding: 4px 12px; text-align: center;">76.92%</td>
      <td style="padding: 4px 12px; text-align: center;">3.27</td>
    </tr>
    <tr>
      <td style="padding: 4px 12px;">São Paulo</td>
      <td style="padding: 4px 12px; text-align: center;">34.62%</td>
      <td style="padding: 4px 12px; text-align: center;">53.85%</td>
      <td style="padding: 4px 12px; text-align: center;">6.46</td>
    </tr>
    <tr>
      <td style="padding: 4px 12px; text-align: center;" colspan="4">⋯</td>
    </tr>
    <tr>
      <td style="padding: 4px 12px;">Botafogo RJ</td>
      <td style="padding: 4px 12px; text-align: center;">8.00%</td>
      <td style="padding: 4px 12px; text-align: center;">36.00%</td>
      <td style="padding: 4px 12px; text-align: center;">6.80</td>
    </tr>
    <tr>
      <td style="padding: 4px 12px;">Cruzeiro</td>
      <td style="padding: 4px 12px; text-align: center;">7.69%</td>
      <td style="padding: 4px 12px; text-align: center;">19.23%</td>
      <td style="padding: 4px 12px; text-align: center;">6.50</td>
    </tr>
    <tr>
      <td style="padding: 4px 12px;">Vitória</td>
      <td style="padding: 4px 12px; text-align: center;">7.41%</td>
      <td style="padding: 4px 12px; text-align: center;">37.04%</td>
      <td style="padding: 4px 12px; text-align: center;">6.59</td>
    </tr>
    <tr>
      <td style="padding: 4px 12px;">Palmeiras</td>
      <td style="padding: 4px 12px; text-align: center;">3.70%</td>
      <td style="padding: 4px 12px; text-align: center;">22.22%</td>
      <td style="padding: 4px 12px; text-align: center;">7.59</td>
    </tr>
    <tr>
      <td style="padding: 4px 12px;">Corinthians</td>
      <td style="padding: 4px 12px; text-align: center;">0.00%</td>
      <td style="padding: 4px 12px; text-align: center;">19.23%</td>
      <td style="padding: 4px 12px; text-align: center;">6.54</td>
    </tr>
  </tbody>
</table>
</div>

<center><br/>Table 1: Teams with the highest and lowest recognizability.<br/><br/></center>

<p>Fluminense stands out as the league's most recognizable team: nearly two-thirds of its performances are correctly identified from the match numbers alone. At the other extreme, Corinthians was not correctly identified in any of the 26 performances analyzed — not because it plays badly, but because its pattern overlaps with other clubs' in the league's "style space".</p>

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 600px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-09-10-playing-style-signature/en/image1.png" title="Figure 2: Top-1 recognizability versus points earned" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Figure 2: Top-1 recognizability versus points earned (Spearman ρ = 0.089; p = 0.710) — no apparent pattern: Vasco da Gama and Fluminense both rank among the most recognizable teams, despite very different campaigns.<br/><br/></center>

<h2><b>Conclusion: Recognizable Does Not Mean Better</b></h2>

<p>One point deserves attention before any interpretation: style recognizability showed no relationship with league position in our data. Palmeiras, runner-up in this slice of the season, ranks second-lowest in recognizability — ahead of only Corinthians. Vasco da Gama, meanwhile, with a more modest campaign, is among the most recognizable. Having a clear identity is not the same as playing well technically or racking up points: these are distinct properties.</p>

<p>We investigated what explains this variation across clubs and found three associated factors: (i) <b>style distinctiveness</b> — how far the team's centroid sits from the league's average style (ρ = 0.674); (ii) <b>isolation</b> — the distance to the closest rival style (ρ = 0.635); and, to a somewhat lesser degree, (iii) <b>internal stability</b> — how much the team repeats its own pattern from match to match (ρ = 0.506).</p>

<p>In other words: a team is recognizable mainly because it plays differently from everyone else — and, secondarily, because it always plays the same way. Fluminense illustrates this well: its centroid sits at the extreme edge of the league's style space, forming the most distant pair in the whole championship (Fluminense–Red Bull Bragantino), which helps explain why it is so easily recognized.</p>
