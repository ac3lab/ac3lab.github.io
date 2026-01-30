---

layout: post

title: "Flamengo's Dominant Group Stage Performance at the Club World Cup"

date: 2025-06-26 00:00:00

description: Flamengo's Dominant Group Stage Performance at the Club World Cup

tags: Football; Analysis; Club World Cup

categories: Football; Analysis

thumbnail: assets/img/Posts_Images/2025-06-26-post_world_cup/logo.jpg

author: Ace Laboratory Football Team - Murilo Jorge

---

---

<p align="justify">

Se quiser ler este texto em pt-br, <a href = "https://ac3lab.github.io/blog/2000/flamengo_grupos_pt/"> clique aqui.</a>

</p>

<h2> <b> Introduction </b></h2>

<div style="text-align: justify">

Flamengo concluded the group stage in first place in Group D, with 7 points, securing early qualification already in the second round. Despite facing different scenarios and opponent strategies, Filipe Luís's team remained faithful to their dominant and pressing game model, even against a high-level opponent like Chelsea. Occasionally, the team had some variations, such as a 3-1-6 / 3-3-4, with one of the defensive midfielders dropping back to the defensive line, freeing both full-backs for attack. <br/><br/>

Throughout the campaign, the red and black team not only remained unbeaten but was superior to all their opponents in crucial metrics: ball possession, completed passes, shots, tackles, and xG (Expected Goals). Even with player rotations, the offensive organization demonstrated a consistent pattern. To attack low blocks, the team transitioned from their 4-2-3-1 to a 3-2-5, with the left-back dropping back to form a line of three and the right-back advancing to provide width, supported by a double pivot in midfield. <br/><br/>

<div class="row">
    <div class="col-sm-6 offset-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2025-06-26-post_world_cup/fase_de_grupos/campinho.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Flamengo's tactical changes. <br/><br/>
</div>

<h3> <b> Game 1: Flamengo 2-0 Espérance </b></h3>

In their debut match at the Club World Cup, Flamengo defeated Espérance 2-0. The game was characterized by the tactical control and ball possession management of the Brazilian team, which knew how to impose their game model and neutralize the Tunisian opponent's strategy. <br/><br/>

From the initial minutes, Flamengo's pressure forced the Tunisian team to abandon short build-up, opting for long balls. Defensively, Espérance congested the central corridor in a 4-3-3, but conceded the flanks. It was precisely through there that Flamengo dismantled the opponent's defense, with both goals in the match originating from crosses. The dominance translated into 69% ball possession and was quantified by pass network metrics: Flamengo showed higher density (0.4750 vs 0.4542), average degree of connections (14.25 vs 13.62), and clustering coefficient (0.1090 vs 0.0969). These numbers indicate a more connected team with a greater tendency for triangulations, which allowed for safe result management with a controlled number of 11 shots. <br/><br/>

The analysis of this match's pass network established the importance of defenders and defensive midfielders as connectors. Léo Pereira (Defender) was the leader in pass volume (Weighted Degree: 206) and the main bridge between sectors, confirmed by the team's highest Betweenness Centrality (0.3857). Jorginho (Defensive Midfielder), second in volume (Weighted Degree: 179), was the key piece for triangulations, leading the team with the highest Clustering Coefficient (0.2200). Completing the axis, Erick Pulgar (Defensive Midfielder) acted as an efficient connector (Weighted Degree: 177; high Closeness Centrality: 0.7686), and Léo Ortiz (Defender) was a vital secondary link for defensive triangulations (Weighted Degree: 135; Clustering Coefficient: 0.1861). <br/><br/>

<div class="row">
    <div class="col-sm-7 offset-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2025-06-26-post_world_cup/fase_de_grupos/fla-esp.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Statistics of the Flamengo x Espérance match. <br/><br/>
</div>

<h3> <b> Game 2: Flamengo 3-1 Chelsea </b></h3>

In their second game, Flamengo, with some changes in the lineup, defeated the English team 3-1, with direct participation of substitutions in the comeback goals. <br/><br/>

The match had two distinct phases. In the first half, after conceding a goal in the 13th minute, Chelsea retreated. Flamengo dominated possession (63%) and passes (277 vs 162), but with difficulty creating clear chances, resulting in only 5 shots. The scenario changed in the second half. The red and black pressure became more effective, and with Bruno Henrique's entry, the team scored two goals in five minutes. After scoring the third goal in the 82nd minute, Flamengo inverted the strategy, conceded the ball to Chelsea, and began managing the score (61% possession and 244 passes for the English in the second half). The final statistics (possession 51% x 49%, passes 437 x 410) suggest a misleading balance that masks the distinct dominance phases. A clearer indicator of red and black superiority was the number of actions in the opponent's area: 27 vs 17. <br/><br/>

The network analysis reinforced the importance of the defensive axis. Jorginho (Defensive Midfielder) was the most participative player (Weighted Degree: 113) and the key piece for triangulations, with the highest Clustering Coefficient (0.2236). Léo Pereira (Defender), with similar volume (Weighted Degree: 112), was the main authority in the network (highest PageRank: 0.1384). Defender Danilo (Weighted Degree: 100) quickly connected the sectors (highest Closeness Centrality: 0.7686), while Erick Pulgar (Weighted Degree: 91) acted as a bridge between defense and midfield (second highest Betweenness Centrality: 0.1298). For Chelsea, defender Trevoh Chalobah was the pillar, leading his team in volume (Weighted Degree: 105), closeness (0.8750), and betweenness (0.3434). <br/><br/>

<div class="row">
    <div class="col-sm-7 offset-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2025-06-26-post_world_cup/fase_de_grupos/fla-chel.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Statistics of the Flamengo x Chelsea match. <br/><br/>
</div>

<h3> <b> Game 3: Flamengo 1-1 LAFC </b></h3>

In their third game, Flamengo, already qualified, drew 1-1 with LAFC in a more protocol match. Despite the heavily modified team, they demonstrated dominance against an LAFC parked in a 5-2-3. <br/><br/>

The superiority was constant, reflected in overwhelming statistics: 66% ball possession, 19 to 5 in shots, 659 to 344 in passes, and 27 to 5 in actions in the opponent's area. Despite the volume, Flamengo was not effective, while LAFC converted their only great chance. The result was also strongly influenced by bad luck: there were five balls hitting the woodwork in the game (four from Flamengo). Modeling the group stage data (48 matches), the probability of such an event is only 0.12% (approximately 1 in 835), a rare case that evidences the exceptionality of what occurred. <br/><br/>

The game model remained consistent even with an alternative team, with defenders and defensive midfielders being the team's hubs again. Jorginho (Defensive Midfielder) and Léo Pereira (Defender) repeated the previous game's performance, leading in pass volume with Weighted Degrees of 113 and 112, respectively, proving the system's strength. Danilo (Defender) also maintained high volume, with 100 passes. On LAFC's side, full-back Sergi Palencia was the main connector, leading his team in betweenness (0.5852), closeness (0.8750), and network authority (PageRank: 0.1427). <br/><br/>

<div class="row">
    <div class="col-sm-7 offset-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2025-06-26-post_world_cup/fase_de_grupos/fla-lafc.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Statistics of the Flamengo x Los Angeles FC match. <br/><br/>
</div>


<h2> <b> Conclusion </b></h2>

Flamengo demonstrated a dominant and consistent performance throughout the entire group stage, maintaining their characteristic game model even in the face of different opponent strategies. The red and black team not only remained unbeaten but was also superior in all important metrics, consolidating their position as one of the tournament's main forces. <br/><br/>

</div> 