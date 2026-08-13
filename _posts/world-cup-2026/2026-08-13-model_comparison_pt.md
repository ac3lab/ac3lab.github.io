---
layout: post
title: "Comparação do desempenho de modelos preditivos - Copa do Mundo 2026"
date: 2000-08-13 00:00:00
description: "Avaliamos o desempenho dos modelos preditivos do ACE Laboratory na Copa do Mundo de 2026, comparando-os entre si e com outras referências públicas do mercado."
tags: Football; Predictions; Analysis
categories: Sports; Analysis
thumbnail: assets/img/Posts_Images/2026-06-09-world-cup-2026/thumbnail.png
author: ACE Laboratory Team

hidden: true
hidden_post: true
---

---

<p align="justify">
If you want to read this text in en-us, <a href="https://ac3lab.github.io/blog/2026/model_comparison_en/">click here.</a>
</p>

<style>body {text-align: justify}</style>

<h2><b>Introdução</b></h2>

Antes do início de uma Copa do Mundo, diversos grupos de pesquisa, veículos de imprensa e empresas de tecnologia publicam previsões sobre o desempenho das seleções na competição. É só depois que o torneio termina, porém, que se torna possível confrontar essas previsões com o que de fato aconteceu em campo. É isso que fazemos neste post: avaliamos o desempenho dos modelos preditivos desenvolvidos pelo ACE Laboratory para a Copa de 2026, comparando-os entre si e também com outras referências públicas.

Essa comparação ganha ainda mais relevância num torneio como o desta edição, a primeira disputada por 48 seleções e marcada por surpresas em ambas as direções: seleções de menor tradição, como Cabo Verde e Egito, impuseram dificuldades relevantes antes de serem eliminadas, enquanto favoritas tradicionais como Alemanha e Holanda caíram ainda nos dezesseis avos de final, e o Brasil não passou das oitavas. Ao longo deste post, mostramos como comparar o desempenho de diferentes modelos preditivos nesse cenário de imprevisibilidade — e o que esses resultados revelam sobre os modelos do laboratório.

<h2><b>Os modelos do Laboratório</b></h2>

Além do modelo Ensemble que foi utilizado como base para as <a href="https://ac3lab.github.io/blog/2000/ace_lab_predictions_pt/">predições da Copa</a>, o ACE Laboratory desenvolveu outros dois modelos. Todos eles utilizam a estrutura do Modelo Dixon-Coles, mas cada um estima os parâmetros da distribuição de forma diferente. Em todos eles, os dados de entrada eram baseados em resultados recentes e força histórica das seleções. O modelo Ensemble, como explicado no primeiro post, distribui pesos iguais para três metodologias diferentes; o modelo Bayesiano utiliza os dados para definir uma distribuição a priori, e o modelo Clássico estima os parâmetros diretamente. Nas imagens a seguir, mostraremos as probabilidades de avanço geradas pelos modelos Bayesiano e Clássico para cada fase.

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 600px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-08-13-model-comparison/bayesian_pt.png" title="Imagem 1: Probabilidades de avanço geradas pelo modelo Bayesiano" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Imagem 1: Probabilidades de avanço para cada fase geradas pelo modelo Bayesiano.<br/><br/></center>

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 600px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-08-13-model-comparison/classic_pt.png" title="Imagem 2: Probabilidades de avanço geradas pelo modelo Clássico" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Imagem 2: Probabilidades de avanço para cada cada fase geradas pelo modelo Clássico.<br/><br/></center>

<h2><b>Comparando com outros modelos</b></h2>

Agora que a Copa do Mundo acabou e temos todos os resultados, podemos finalmente medir o desempenho dos modelos criados pelo laboratório. Para tornar essa análise ainda mais completa, iremos comparar as previsões dos nossos modelos com outras três previsões geradas por diferentes modelos relevantes no meio da análise de dados do futebol: Gato Mestre (Globo), Opta — que divulgou probabilidades apenas a partir das quartas de final — e UFMG.

De modo geral, os modelos analisados apresentaram bom desempenho ao apontar a Espanha como campeã, com exceção do modelo da UFMG, que atribuiu apenas 3,0% de probabilidade à seleção espanhola, contra 5,9% para a Argentina. Esse resultado, isoladamente, não é suficiente para avaliar a qualidade de um modelo: é possível acertar o campeão e, ainda assim, errar de forma significativa no restante das previsões. Há também o risco de modelos que distribuem as probabilidades próximas à média não serem penalizados por isso, tornando-se pouco úteis para a tomada de decisão. É necessário, portanto, um critério de avaliação capaz de recompensar acertos feitos com confiança e penalizar erros cometidos com a mesma confiança, sem deixar passar despercebidos os modelos pouco informativos. Esse tipo de critério é conhecido como regra de pontuação própria (<i>proper scoring rule</i>), e é justamente o que as métricas a seguir buscam medir.

<h3><b>Brier Score</b></h3>

$$\frac{1}{N}\sum (p - y)^2$$

O Brier Score é o erro quadrático médio da probabilidade. Para o evento "a seleção chegou pelo menos à fase k", toma-se a probabilidade p atribuída pelo modelo e o resultado real y (1 caso a seleção tenha chegado à fase, 0 caso contrário), calcula-se (p − y)² e tira-se a média aritmética sobre todas as células, isto é, cada combinação de seleção e fase. Quanto menor o valor, melhor o desempenho do modelo.

<h3><b>Ranked Probability Score (RPS)</b></h3>

Esta é a nossa métrica principal. Enquanto o Brier Score trata cada fase como um evento independente, o RPS considera que as fases seguem uma ordem natural — fase de grupos, R32 (dezesseis avos), oitavas, quartas, semifinal, final e título. A métrica compara a curva de probabilidade acumulada prevista com a curva observada e mede a distância quadrática entre as duas, penalizando de forma mais severa os erros mais distantes na ordem: prever uma seleção como campeã e vê-la cair já na primeira fase pesa mais do que errar por apenas um estágio. A média é calculada sobre as seleções e, novamente, quanto menor, melhor.

As duas métricas estão diretamente relacionadas: para cada seleção, o RPS corresponde exatamente à média do Brier Score daquela seleção ao longo das fases. Assim, o RPS de um modelo é, na prática, a média do seu Brier Score considerando todas as fases.

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 600px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-08-13-model-comparison/brier_by_stage_pt.png" title="Imagem 3: Brier Score por fase para cada modelo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Imagem 3: Brier Score por fase para cada modelo, com o RPS acumulado ao longo de todo o torneio (RPS torneio) e o RPS recalculado a partir das quartas de final (RPS QF→).<br/><br/></center>

A imagem 3 deixa o padrão claro. Nas fases iniciais (R32 e oitavas), quem erra menos são o Clássico, o Ensemble e a UFMG, que anteciparam melhor as seleções que superariam a fase de grupos, enquanto o Bayesiano, mais confiante nos favoritos, pagou caro pelos tropeços de Alemanha e Holanda. Nas quartas de final, o Ensemble ainda lidera, mas a partir das semifinais o cenário se inverte: Bayesiano e Opta assumem a dianteira e não a soltam mais, com o Ensemble logo atrás em todas as fases seguintes, enquanto a UFMG, que vinha bem, despenca. É nas fases decisivas que a confiança bem colocada nos favoritos se paga, já que não tivemos muitas surpresas na competição — vale lembrar que a Opta só divulgou probabilidades a partir das quartas de final. No geral, os três modelos do laboratório se saíram muito bem: Clássico e Ensemble lideram o RPS acumulado do torneio, o Bayesiano lidera o RPS a partir das quartas, e todos ficam à frente do Gato Mestre e no mesmo patamar da Opta, a mais forte das referências externas.

O RPS e o Brier Score, isoladamente, indicam apenas qual modelo errou menos — não explicam por quê. Um único número não é suficiente para distinguir um modelo genuinamente informativo daquele que apenas se mantém seguro na média. Para compreender essa diferença, e identificar quem foi confiante e acertou, quem foi confiante e errou, e quem simplesmente evitou se posicionar, é necessário recorrer a métricas complementares.

<h3><b>Log-Loss</b></h3>

$$-\frac{1}{N}\sum \left[ y \ln p + (1-y) \ln(1-p) \right]$$

O Log-Loss parte da mesma lógica do Brier Score, mas penaliza com muito mais severidade os erros cometidos com alta confiança. Aqui, p é a probabilidade atribuída pelo modelo e y o resultado real (1 caso o evento tenha ocorrido, 0 caso contrário). Atribuir 99% de probabilidade a um evento que não se concretiza eleva o escore de forma acentuada; já um erro em torno de 55% é penalizado de maneira bem mais branda. É a métrica que mais recompensa modelos nítidos e bem calibrados, e a que mais penaliza o excesso de confiança.

<h3><b>Skill Score</b></h3>

$$1 - \frac{S_{\text{modelo}}}{S_{\text{base}}}$$

Não se trata de uma métrica nova, mas de uma forma de interpretar as demais: aqui, S representa o escore (RPS, Brier ou Log-Loss) do modelo e o de uma base de comparação — neste post, utilizamos o RPS. A base corresponde a um palpite ingênuo, isto é, a taxa-base: a frequência com que, em média, uma seleção chega a cada fase. O Skill Score resulta em 0 quando o modelo apenas empata com esse palpite ingênuo, e em valores positivos quando o supera. A métrica responde, portanto, a uma pergunta direta: "quão melhor que o óbvio esse modelo é?". Um Skill Score de 37%, por exemplo, indica uma redução de 37% no erro em relação a quem apenas segue a taxa-base.

<h3><b>Calibração, Resolução e Nitidez</b></h3>

Além do Log-Loss e do Skill Score, o próprio Brier Score pode ser decomposto em duas componentes complementares: Calibração e Resolução. A Calibração mede se as probabilidades atribuídas pelo modelo são honestas — nas ocasiões em que o modelo atribuiu 70% de probabilidade a um evento, esse evento de fato ocorreu em cerca de 70% das vezes? (quanto menor, melhor). Já a Resolução mede a capacidade do modelo de diferenciar os casos, afastando as probabilidades da média de forma consistente com os resultados observados, em vez de manter previsões próximas ao ponto médio para todos os casos (quanto maior, melhor). É possível, porém, que um modelo seja calibrado e, ainda assim, pouco útil: acerta a média das ocorrências, mas não diferencia os casos entre si. A Resolução é o que recompensa a confiança que efetivamente ajudou a discriminar os resultados.

Os modelos diferem também em quanto se arriscam ao emitir suas probabilidades — o que a Nitidez mede diretamente, olhando apenas para as previsões em si, sem considerar os resultados: quanto mais o modelo concentra probabilidade em vez de espalhá-la entre as alternativas, menor a Nitidez, e mais decidido é o modelo. Isoladamente, porém, ela não diz se um modelo é bom — o mérito está em ser nítido sem comprometer a calibração.

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 600px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-08-13-model-comparison/all_stage_models_pt.png" title="Imagem 4: Desempenho acumulado dos modelos ao longo de todas as fases" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Imagem 4: Desempenho acumulado dos modelos ao longo de todas as fases da Copa (R32 → campeão) — RPS, Log-Loss, Skill Score, Calibração, Resolução, Nitidez e variação do RPS em relação ao Clássico (ΔRPS), com intervalo de confiança de 95%.<br/><br/></center>

Com essas métricas complementares em mãos, é possível revisitar o desempenho dos modelos ao longo de todo o torneio, do R32 ao título. O Clássico lidera o RPS acumulado (0,0732), seguido de perto pelo Ensemble (0,0744) e, a uma distância maior, pelo Bayesiano (0,0807). A coluna ΔRPS, no entanto, exige cautela na leitura desses números: os intervalos de confiança do Ensemble, do Bayesiano e até da UFMG cruzam o zero, o que indica que, em um único torneio, não é possível separá-los do Clássico com segurança estatística. O único modelo que fica claramente atrás é o Gato Mestre, cujo intervalo de confiança não toca o zero.

Vale destacar que Clássico e Ensemble apresentam também a maior Resolução (0,1100 e 0,1079, respectivamente), tendo sido os que melhor separaram as seleções que avançaram das que foram eliminadas — resultado que o Log-Loss corrobora, com os dois modelos à frente dos demais. Já o Gato Mestre é o modelo mais calibrado (0,0047), mas essa vantagem isolada não se traduziu em utilidade prática: como discutido anteriormente, acertar a probabilidade média não equivale a discriminar bem os resultados.

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 600px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-08-13-model-comparison/common_base_qf_pt.png" title="Imagem 5: Desempenho dos modelos a partir das quartas de final" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Imagem 5: Desempenho dos modelos a partir das quartas de final (base comum de comparação, já que a Opta só divulgou probabilidades a partir dessa fase) — RPS, Log-Loss, Skill Score, Calibração, Resolução, Nitidez e variação do RPS em relação ao Bayesiano (ΔRPS), com intervalo de confiança de 95%.<br/><br/></center>

Das quartas de final em diante, o Bayesiano assume a ponta (RPS 0,043, melhor log-loss e melhor skill, com 37,3%). O topo, ainda assim, é um empate: Ensemble (+0,8) e Opta (+1,3) têm intervalos que cruzam o zero, então os três são estatisticamente indistinguíveis. O modelo Bayesiano fica no mesmo patamar da Opta justamente nas fases mais decisivas. O Clássico recua um pouco, já que sua força estava nas fases iniciais, agora fora da conta. Gato Mestre e UFMG aparecem em seguida, agora com intervalos que não cruzam o zero. O resultado do modelo da UFMG ilustra bem a diferença entre calibração e utilidade: é a mais calibrada (0,0046), mas a de menor resolução (0,019), honesta na média e pouco decisiva.

<h2><b>Conclusão</b></h2>

No fim, a leitura mais honesta é que não houve um vencedor único. A liderança troca de mãos conforme a fase: Clássico e Ensemble erram menos nas rodadas iniciais, o Bayesiano assume nas decisivas, e nas fases que definem o título os três modelos do laboratório ficam no mesmo patamar da Opta, a referência externa mais relevante. Como se trata de uma única Copa, boa parte dessas diferenças cabe dentro da margem de incerteza, e por isso preferimos falar em perfis distintos a cravar um campeão entre os modelos: cada um arrisca de um jeito, e cada aposta se paga em um momento diferente do torneio. Para o laboratório, fica a confirmação de que os três modelos competem de igual para igual com as melhores referências públicas, e também um caminho de evolução: acumular mais edições para reduzir essa incerteza.

<br><br>

<h2><b>⚠️ Atenção</b></h2>
Este estudo foi desenvolvido exclusivamente para fins acadêmicos e de pesquisa, com o objetivo de testar e aperfeiçoar modelos de ciência de dados. O futebol é imprevisível, e os resultados apresentados representam estimativas probabilísticas, não previsões definitivas. As análises não constituem recomendação, incentivo ou orientação para apostas de qualquer natureza.
