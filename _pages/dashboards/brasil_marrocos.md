---
layout: post
title: "Dashboard: Brasil x Marrocos"
date: 2026-06-15 00:00:00
description: "Visualização interativa dos dados da Partida"
permalink: /dashboards/brasil_marrocos/
tags: Dashboard; Analytics
categories: Football
thumbnail: assets/img/ACE_Logo.jpg
author: Ace Laboratory Team
---

<style>
    /* 1. Remove elementos do post que ocupam espaço (título duplicado, data, rodapé do post, etc.) */
    .post-header, .post-meta, .post-tags, .post-footer, footer, .site-footer {
        display: none !important;
    }

    /* 2. Remove as margens e limites de largura do container onde o post fica preso */
    /* Nota: Se o seu tema usar outra classe (ex: .wrapper, .main-content), adicione-a aqui separada por vírgula */
    .container, .post-content, .post, main, #main {
        max-width: 100% !important;
        width: 100% !important;
        padding: 0 !important;
        margin: 0 !important;
    }

    /* 3. Ajusta o container do iframe para colar nas bordas e ocupar a altura restante da tela */
    .dashboard-container {
        width: 100%;
        /* Calcula a altura da tela menos o espaço estimado do header. 
           Se o seu header for muito alto, aumente o valor de 80px (ex: 100px) */
        height: calc(100vh - 80px); 
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    .dashboard-frame {
        width: 100%;
        height: 100%;
        border: none;
        display: block;
    }
</style>

<div class="dashboard-container">
    <iframe src="{{ '/assets/dashboards/dashboard_brasil_marrocos.html' | relative_url }}" 
            scrolling="yes"
            class="dashboard-frame">
    </iframe>
</div>