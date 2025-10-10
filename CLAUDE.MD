# Estrutura de Posts Jekyll - Ace Laboratory

## **Estrutura de um Post Jekyll**

### **1. Front Matter (Metadados)**
```yaml
---
layout: post
title: "Título do Post"
date: 2000-MM-DD 00:00:00
description: "Descrição opcional do post"
tags: Tag1; Tag2; Tag3
categories: Categoria1; Categoria2
thumbnail: assets/img/Posts_Images/pasta-do-post/imagem-principal.extensão
author: Nome do Autor ou Equipe
---
```

**IMPORTANTE**: A data deve SEMPRE ser definida como `2000-MM-DD 00:00:00` para posts em português. Isso garante que apenas os posts em inglês apareçam na página principal do site, mantendo o português oculto mas acessível via URL direta.

### **2. Separador de Conteúdo**
Após o front matter, sempre incluir:
```markdown
---
```

### **3. Estrutura de Títulos HTML**
- **Títulos principais**: `<h2> <b> Título </b></h2>`
- **Subtítulos**: `<h3><b>Subtítulo</b></h3>`
- **Títulos de seções**: `<h2><b>Seção</b></h2>`

### **4. Estilização CSS Inline**
```html
<style>body {text-align: justify}</style>
```

### **5. Estrutura de Imagens**
Para cada imagem, usar o template Jekyll:
```html
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/pasta-do-post/imagem.extensão" title="TítuloDaImagem" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
```

### **6. Organização de Conteúdo**
- **Seções numeradas**: Para posts com múltiplas partes (ex: Jogo 1, Jogo 2, etc.)
- **Parágrafos**: Texto justificado com espaçamento adequado

### **7. Convenções de Nomenclatura**
- **Arquivo**: `YYYY-MM-DD-titulo-do-post.md`
- **Pasta de imagens**: `assets/img/Posts_Images/YYYY-MM-DD-post-titulo/`
- **Imagens**: Nome descritivo com extensão apropriada (.jpg, .png, .jpeg)

### **8. Formatação de Texto**
- **Negrito**: `<b>texto</b>` para títulos
- **Quebras de linha**: Duas linhas em branco entre seções
- **Citações**: Usar aspas duplas para citações diretas
- **Estatísticas**: Destacar números e percentuais


### **9. Elementos Obrigatórios**
- Front matter completo
- Separador `---` após front matter
- Título principal com `<h2><b>`
- Pelo menos uma imagem com template correto
- Estilo de texto justificado

### **10. Regra de Data para Posts em Português**
- **Data obrigatória**: `2000-MM-DD 00:00:00` para TODOS os posts em português
- **Objetivo**: Manter posts em português ocultos da página principal do site
- **Resultado**: Apenas posts em inglês aparecem na timeline principal
- **Acesso**: Posts em português permanecem acessíveis via URL direta
- **Exemplo**: `date: 2000-10-09 00:00:00` para um post de 9 de outubro

## **Exemplo Prático**

### **Front Matter Completo:**
```yaml
---
layout: post
title: "NBA Playoffs : O Duelo dos MVPs"
date: 2000-06-09 00:00:00
description:
tags: Basketball; Analysis
categories: Basketball; Analysis
thumbnail: assets/img/Posts_Images/2025-06-09-post-nba-playoffs/nba.jpeg
author: Ace Laboratory Team - Brenno Santos, Antonio Magalhães
---
```

**Nota**: Observe que a data está definida como `2000-06-09` para manter o post em português oculto da página principal.

### **Estrutura de Conteúdo:**
```markdown
---


<style>body {text-align: justify}</style>
[Conteúdo da introdução...]

<h3><b>Seção 1</b></h3>
[Conteúdo da seção...]

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Posts_Images/pasta/imagem.jpg" title="Título" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

```

Esta estrutura garante consistência visual e funcionalidade adequada no site Jekyll do Ace Laboratory.
