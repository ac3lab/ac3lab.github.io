---
layout: post
title: "O estilo de jogo dos times brasileiros deixa uma assinatura nos seus dados de jogo?"
date: 2000-09-10 00:00:00
description: "Dá para dizer de qual clube se trata olhando só para os números de uma partida, sem placar, escudos ou jogadores em campo?"
tags: Football; Analysis; Tactical Identity
categories: Sports; Analysis
thumbnail: assets/img/Posts_Images/2026-09-10-playing-style-signature/pt/image2.jpg
author: ACE Laboratory Team

hidden: true
hidden_post: true
---

---

<p align="justify">
If you want to read this text in en-us, <a href="https://ac3lab.github.io/blog/2026/playing-style-signature_en/">click here.</a>
</p>

<style>body {text-align: justify}</style>

<p>Todo torcedor "sente" que os times jogam de formas diferentes: uma equipe aposta na posse e na circulação curta, enquanto outra se apoia na bola longa e no jogo aéreo, e uma terceira foca na velocidade das transições. Mas essa sensação é real — recuperável a partir dos dados de uma partida — ou é só uma narrativa construída depois do fato?</p>

<p>Essa foi a pergunta que guiou o primeiro recorte da nossa pesquisa sobre identidade tática no Brasileirão 2026: dá para dizer de qual time se trata olhando só para os números de uma partida — sem placar, escudos ou jogadores em campo — unicamente pela forma como ele jogou?</p>

<h2><b>Os dados</b></h2>

<p>Usamos dados de eventos de 260 partidas das rodadas 1 a 26 do Brasileirão 2026 — quase 70% da temporada. Cada partida gera duas observações, uma por equipe, totalizando 520 observações "equipe-partida" para os 20 clubes da Série A. Cada evento (passe, finalização, duelo, falta etc.) traz o tipo da ação, o resultado, a equipe, o jogador, o instante da partida e, quando disponíveis, as coordenadas de início e fim em campo.</p>

<h2><b>As variáveis: como resumir "estilo" em números</b></h2>

<p>Selecionamos 18 variáveis que descrevem <b>como</b> uma equipe executa suas ações, não <b>quanto</b> ela executa — priorizando proporções e medidas espaciais em vez de contagens brutas, para não confundir estilo com volume de jogo. Exemplos: acurácia de passe, taxa de passes para frente, progressão forte, comprimento médio do passe, taxa de cruzamentos, entradas no terço final e na área, circulação central, dispersão lateral dos passes e participação em duelos aéreos.</p>

<p>Cada atuação de cada time em cada partida vira, assim, um vetor de 18 números — uma impressão digital daquele jogo.</p>

<h2><b>O método: reconhecendo um time só pelo seu estilo</b></h2>

<p>Padronizamos as 18 variáveis (para ficarem na mesma escala) e definimos a identidade de cada clube como o centroide — a média — de todas as suas assinaturas de partida. A distância entre dois estilos é a distância euclidiana entre esses centroides.</p>

<p>O teste central é direto: para cada atuação, nós a retiramos do conjunto, recalculamos os centroides sem ela e perguntamos "de qual centroide essa atuação anônima está mais próxima?". Acerto é quando o centroide mais próximo é o do próprio time. Repetimos isso para as 520 observações (leave-one-match-out) e checamos também se o time certo aparece entre os três centroides mais próximos (Top-3).</p>

<p>Para confirmar que o acerto acima do acaso não é coincidência, embaralhamos os rótulos dos times 2.000 vezes e repetimos o processo, gerando uma distribuição de referência do que aconteceria sem identidade nenhuma a reconhecer.</p>

<p>Vale um registro antes dos resultados: esta é uma ideia direta de como reconhecer times pelo jeito de jogar, e não a proposta de um método definitivo. Uma distância a centroides, um recorte de 26 das 38 rodadas e um conjunto enxuto de variáveis são escolhas que privilegiam a clareza da explicação sobre a sofisticação técnica. O objetivo aqui é exploratório e didático: mostrar que a pergunta pode ser investigada com dados e abrir caminho para versões mais elaboradas da análise futuramente — não encerrar o assunto.</p>

<h2><b>O resultado: existe, sim, uma assinatura</b></h2>

<p>O método acerta o time correto em <b>21,15%</b> das 520 atuações — contra uma referência aleatória de 5% (1 em 20 times), cerca de 4,2 vezes o esperado pelo acaso. Considerando os três times mais prováveis (Top-3), o acerto sobe para <b>43,46%</b>.</p>

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 600px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-09-10-playing-style-signature/pt/image2.jpg" title="Figura 1: Projeção em duas dimensões (PCA) das 520 assinaturas de estilo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Figura 1: Projeção em duas dimensões (PCA) das 520 assinaturas de estilo; os marcadores maiores são os centroides de cada equipe (as duas componentes somam 51% da variância; a validação usa as 18 variáveis originais).<br/><br/></center>

<p>O teste de permutação reforça o resultado: nas 2.000 simulações com rótulos embaralhados, a acurácia média foi de 5,21%, e nenhuma sequer chegou perto dos 21,15% observados (máximo de 8,85%). Em um cenário sem identidade nenhuma a reconhecer, um resultado como o observado seria raríssimo (p = 0,0005, o menor valor possível com 2.000 permutações).</p>

<p>Isso responde à pergunta do título: sim, o estilo de jogo deixa uma assinatura recuperável nos dados. A identidade de uma equipe não é só impressão subjetiva do torcedor ou do analista — é um padrão estatisticamente detectável.</p>

<p>Mas a acurácia agregada esconde uma diferença enorme entre clubes. Alguns times têm um estilo muito mais "assinado" que outros — os cinco mais e os cinco menos reconhecíveis da liga neste recorte estão na Tabela 1:</p>

<div style="display: flex; justify-content: center;">
<table>
  <thead>
    <tr style="background-color: #1f5c4a;">
      <th style="color: white; padding: 4px 12px;">Equipe</th>
      <th style="color: white; padding: 4px 12px; text-align: center;">Top-1</th>
      <th style="color: white; padding: 4px 12px; text-align: center;">Top-3</th>
      <th style="color: white; padding: 4px 12px; text-align: center;">Rank médio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 4px 12px;">Fluminense</td>
      <td style="padding: 4px 12px; text-align: center;">64,29%</td>
      <td style="padding: 4px 12px; text-align: center;">82,14%</td>
      <td style="padding: 4px 12px; text-align: center;">3,04</td>
    </tr>
    <tr>
      <td style="padding: 4px 12px;">Vasco da Gama</td>
      <td style="padding: 4px 12px; text-align: center;">48,00%</td>
      <td style="padding: 4px 12px; text-align: center;">60,00%</td>
      <td style="padding: 4px 12px; text-align: center;">4,48</td>
    </tr>
    <tr>
      <td style="padding: 4px 12px;">Grêmio</td>
      <td style="padding: 4px 12px; text-align: center;">42,31%</td>
      <td style="padding: 4px 12px; text-align: center;">57,69%</td>
      <td style="padding: 4px 12px; text-align: center;">4,54</td>
    </tr>
    <tr>
      <td style="padding: 4px 12px;">Flamengo</td>
      <td style="padding: 4px 12px; text-align: center;">38,46%</td>
      <td style="padding: 4px 12px; text-align: center;">76,92%</td>
      <td style="padding: 4px 12px; text-align: center;">3,27</td>
    </tr>
    <tr>
      <td style="padding: 4px 12px;">São Paulo</td>
      <td style="padding: 4px 12px; text-align: center;">34,62%</td>
      <td style="padding: 4px 12px; text-align: center;">53,85%</td>
      <td style="padding: 4px 12px; text-align: center;">6,46</td>
    </tr>
    <tr>
      <td style="padding: 4px 12px; text-align: center;" colspan="4">⋯</td>
    </tr>
    <tr>
      <td style="padding: 4px 12px;">Botafogo RJ</td>
      <td style="padding: 4px 12px; text-align: center;">8,00%</td>
      <td style="padding: 4px 12px; text-align: center;">36,00%</td>
      <td style="padding: 4px 12px; text-align: center;">6,80</td>
    </tr>
    <tr>
      <td style="padding: 4px 12px;">Cruzeiro</td>
      <td style="padding: 4px 12px; text-align: center;">7,69%</td>
      <td style="padding: 4px 12px; text-align: center;">19,23%</td>
      <td style="padding: 4px 12px; text-align: center;">6,50</td>
    </tr>
    <tr>
      <td style="padding: 4px 12px;">Vitória</td>
      <td style="padding: 4px 12px; text-align: center;">7,41%</td>
      <td style="padding: 4px 12px; text-align: center;">37,04%</td>
      <td style="padding: 4px 12px; text-align: center;">6,59</td>
    </tr>
    <tr>
      <td style="padding: 4px 12px;">Palmeiras</td>
      <td style="padding: 4px 12px; text-align: center;">3,70%</td>
      <td style="padding: 4px 12px; text-align: center;">22,22%</td>
      <td style="padding: 4px 12px; text-align: center;">7,59</td>
    </tr>
    <tr>
      <td style="padding: 4px 12px;">Corinthians</td>
      <td style="padding: 4px 12px; text-align: center;">0,00%</td>
      <td style="padding: 4px 12px; text-align: center;">19,23%</td>
      <td style="padding: 4px 12px; text-align: center;">6,54</td>
    </tr>
  </tbody>
</table>
</div>

<center><br/>Tabela 1: Equipes com maior e menor reconhecibilidade.<br/><br/></center>

<p>O Fluminense se destaca como o time mais reconhecível da liga: quase dois terços de suas atuações são identificadas corretamente apenas pelos números do jogo. No outro extremo, o Corinthians não foi identificado corretamente em nenhuma das 26 atuações analisadas — não por jogar mal, mas porque seu padrão se sobrepõe ao de outros clubes no "espaço de estilos" da liga.</p>

<div style="display: flex; justify-content: center;">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 600px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/2026-09-10-playing-style-signature/pt/image1.png" title="Figura 2: Reconhecibilidade Top-1 versus pontos conquistados" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<center>Figura 2: Reconhecibilidade Top-1 versus pontos conquistados (Spearman ρ = 0,089; p = 0,710) — sem padrão aparente: Vasco da Gama e Fluminense aparecem os dois entre os mais reconhecíveis, apesar de campanhas bem diferentes.<br/><br/></center>

<h2><b>Conclusão: reconhecível não é sinônimo de melhor</b></h2>

<p>Um ponto merece destaque antes de qualquer interpretação: reconhecibilidade de estilo não mostrou relação com a posição na tabela. O Palmeiras, vice-líder no recorte, é o segundo pior colocado em reconhecibilidade — à frente apenas do Corinthians. Já o Vasco da Gama, com campanha mais modesta, está entre os mais reconhecíveis. Ter identidade clara não é o mesmo que jogar bem tecnicamente ou somar pontos: são propriedades distintas.</p>

<p>Investigamos o que explica essa variação entre clubes e encontramos três fatores associados: (i) a <b>distintividade</b> do estilo — o quanto o centroide do time se afasta do estilo médio da liga (ρ = 0,674); (ii) o <b>isolamento</b> — a distância até o estilo do concorrente mais parecido (ρ = 0,635); e, em grau um pouco menor, (iii) a <b>estabilidade interna</b> — o quanto o time repete seu padrão de partida para partida (ρ = 0,506).</p>

<p>Em outras palavras: um time é reconhecível principalmente porque joga diferente dos demais — e, secundariamente, porque joga sempre do mesmo jeito. O Fluminense ilustra isso bem: seu centroide está no extremo do espaço de estilos da liga, formando o par mais distante do campeonato (Fluminense–Red Bull Bragantino), o que ajuda a explicar por que é tão facilmente reconhecido.</p>
