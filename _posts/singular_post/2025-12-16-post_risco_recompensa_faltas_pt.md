---
layout: post
title: "Risco x Recompensa: Análise Estratégica de Cobranças de Falta"
date: 2000-12-16 00:00:00
description: "Análise quantitativa do risco-recompensa em cobranças de falta utilizando dados da StatsBomb"
tags: Football; Analysis; Strategy;
categories: Football; Analytics;
thumbnail: assets/img/Posts_Images/2025-12-16-post_risco_recompensa_faltas/thumbnail.jpg
author: Ace Laboratory Team - Murilo Jorge e Pedro Lopes
---

---

<p align="justify">
If you want to read this text in en-us, <a href = "https://ac3lab.github.io/blog/2025/post_risco_recompensa_faltas_en/"> click here.</a>
</p>

<style>body {text-align: justify}</style>

<h2><b>Bater direto ou cruzar?</b></h2>

FALTA! O camisa 10 do seu time é derrubado próximo à área, e aí você se pergunta: será que é lance pra bater direto? Cruzar na área? É exatamente isso que o ACE Lab se propôs a analisar.

Utilizando dados abertos da StatsBomb, decidimos fazer uma análise sobre as cobranças de falta para descobrir o verdadeiro custo-benefício de cada estratégia, avaliando o risco (chance de sofrer um contra-ataque perigoso) e a recompensa (chance de marcar um gol) associados tanto a faltas diretas, quanto cruzamentos.


<h3><b>Metodologia: Como calcular o risco x recompensa?</b></h3>

Mas então como realmente podemos calcular o risco x recompensa de uma cobrança?

<b>Em caso de falta direta:</b>

Como recompensa, usamos o xG e o resultado gerado da finalização (gol ou não). Como risco, verificamos se há contra-ataque na posse de bola subsequente e, se sim, avaliamos o xG e o resultado dessa finalização.

<b>Em caso de cruzamento:</b>

Como recompensa, medimos pela primeira finalização do time na mesma posse de bola, dentro de 30 segundos após a cobrança. Se uma finalização é encontrada dentro desta janela e na mesma posse, seu xG e resultado (gol ou não) são atribuídos como a recompensa da jogada. Se nenhuma finalização ocorre, a recompensa é considerada zero.

Já para o cálculo do risco no cruzamento, olhamos para a posse de bola imediatamente seguinte. Se ela for do adversário e configurar um contra-ataque, calculamos o xG gerado por essa jogada contra e o resultado final (gol sofrido ou não).


<h3><b>Visualização dos Resultados</b></h3>

Para visualizarmos estes resultados, geramos alguns tipos de mapas de calor. Vamos passar por eles:

<h3><b>Heatmaps de Saldo de Gols e Risco-Recompensa (faltas diretas)</b></h3>

Evidenciam quais áreas do campo oferecem maior ou menor perigo na estratégia de finalização direta, em comparação às zonas onde a cobrança resulta com maior frequência em contra-ataques. Observa-se que os padrões encontrados são bastante próximos do que se espera intuitivamente: faltas mais perigosas concentram-se, em geral, nas regiões imediatamente próximas à entrada da área, especialmente quando posicionadas de forma centralizada em relação ao eixo horizontal do campo.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2025-12-16-post_risco_recompensa_faltas/direct_fk_net_goal_heatmap.png" title="Heatmap Saldo de Gols - Faltas Diretas" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2025-12-16-post_risco_recompensa_faltas/direct_fk_net_xg_heatmap.png" title="Heatmap Risco-Recompensa - Faltas Diretas" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


<h3><b>Heatmaps de Saldo de Gols e Risco-Recompensa (cruzamentos)</b></h3>

Evidenciam os níveis de perigo de faltas cruzadas, em comparação às zonas onde a tentativa resulta com maior frequência em contra-ataques. Aqui, observa-se que os resultados obtidos também seguem à intuição. Os cruzamentos realizados, especialmente nas faixas laterais adjacentes à área concentram maior potencial ofensivo, enquanto ações originárias de zonas mais recuadas tendem a apresentar menor retorno e maior risco defensivo.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2025-12-16-post_risco_recompensa_faltas/cross_fk_net_goal_heatmap.png" title="Heatmap Saldo de Gols - Cruzamentos" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2025-12-16-post_risco_recompensa_faltas/cross_fk_net_xg_heatmap.png" title="Heatmap Risco-Recompensa - Cruzamentos" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


<h3><b>Heatmaps Comparativos de Estratégias</b></h3>

Identificam, em cada posição do campo, qual tipo de cobrança tende a ser mais vantajosa. A codificação de cores indica a estratégia dominante em cada região, com finalizações diretas em vermelho e cruzamentos em azul, enquanto o brilho do pixel é proporcional à qualidade da oportunidade, medida pelo maior xG/gols observado naquele local. Dessa forma, regiões mais claras representam zonas de maior relevância ofensiva, enquanto áreas mais escuras indicam posições em que ambas as estratégias apresentam desempenho semelhante ou baixo retorno. Os mapas mostram que as finalizações diretas predominam nas zonas centrais próximas à área, ao passo que os cruzamentos se destacam nas faixas laterais do terço final do campo, refletindo padrões consistentes com as visualizações anteriores.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2025-12-16-post_risco_recompensa_faltas/comparison_bivariate_goals.png" title="Heatmap Comparativo - Saldo de Gols" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2025-12-16-post_risco_recompensa_faltas/comparison_bivariate_xg.png" title="Heatmap Comparativo - xG" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


<h3><b>Heatmap Comparativo por Eficiência</b></h3>

Em complemento aos mapas comparativos bivariados, o heatmap de eficiência por tentativa refina a análise ao considerar a qualidade média das ações realizadas em cada região do campo. Os padrões observados reforçam os resultados anteriores: as finalizações diretas mostram maior eficiência nas zonas centrais próximas à área, enquanto os cruzamentos apresentam vantagem relativa nas faixas laterais e em regiões mais afastadas do gol.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2025-12-16-post_risco_recompensa_faltas/comparison_rate_xg.png" title="Heatmap Comparativo - Eficiência por Tentativa" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


<h2><b>Conclusões</b></h2>

A análise das cobranças de falta, utilizando dados da StatsBomb, permitiu quantificar o risco-recompensa associado às estratégias de falta direta e cruzamento, confirmando a intuição comum.

<b>Faltas Diretas:</b> O risco-recompensa é mais favorável em zonas centrais e adjacentes à grande área. Este padrão sugere que a finalização direta é a estratégia dominante e de maior eficiência nessas regiões.

<b>Cruzamentos:</b> Cruzamentos apresentam melhor recompensa e menor risco nas faixas laterais do terço final do campo. Cruzamentos originados de áreas mais recuadas tendem a apresentar menor retorno ofensivo e maior risco defensivo.

Portanto, com base nesse estudo, podemos confirmar que as evidências apontam para finalizações diretas como sendo a melhor opção nas regiões centrais próximas à área, enquanto os cruzamentos são mais eficazes nas faixas laterais do campo ofensivo.