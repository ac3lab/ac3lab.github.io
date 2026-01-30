# Site do ACE Laboratory

Bem-vindo ao repositório oficial do **Analytics for Competitive Excellence (ACE) Laboratory**, hospedado via [GitHub Pages](https://ac3lab.github.io/). Este repositório contém o código-fonte e o conteúdo que alimentam nosso site institucional.

## 🌟 Sobre o ACE Laboratory

O **Analytics for Competitive Excellence (ACE) Laboratory** é uma iniciativa colaborativa entre o **PESC/COPPE/UFRJ** e o **Cefet/RJ**, dedicada ao avanço da área de **analytics esportivo** por meio da **pesquisa** e da **educação**.

Nossa missão é utilizar análise de dados e métodos computacionais para aprimorar o desempenho e a estratégia no esporte. Atendemos atletas, equipes e a comunidade acadêmica com **insights**, **ferramentas** e **oportunidades de aprendizado**.

Somos um time interdisciplinar que une **rigor acadêmico** e **aplicações práticas**, estabelecendo novos padrões em ciência de dados no esporte.

## 📚 Conteúdo do Site

No site, você encontra:

- 📝 **Posts** — Artigos técnicos e outros projetos  
- 📄 **Publicações** — Artigos científicos produzidos pelo nosso time  
- 👥 **Equipe** — Integrantes e colaboradores do laboratório  
- 📅 **Eventos** — Eventos organizados 

Acesse em: [https://ac3lab.github.io/](https://ac3lab.github.io/)

## 🚀 Executando Localmente (com Docker)

A forma mais simples de rodar o site localmente é utilizando Docker. Isso garante que todas as dependências do Jekyll e do Ruby estejam configuradas corretamente.

### Pré-requisitos

- [Docker](https://www.docker.com/)  
- [Docker Compose](https://docs.docker.com/compose/)

### Passos

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
  
2. Execute os comandos abaixo para baixar a imagem Docker e rodar o site:
   ```bash
   docker compose pull
   docker compose up

3. Acesse o site local em: http://localhost:8080.

## 📝 Como Criar um Novo Post

Siga estes passos para adicionar um novo post ao site:

### 1. Preparar o Conteúdo
- Tenha o texto do post pronto e revisado
- Prepare todas as imagens que serão utilizadas no post

### 2. Organizar as Imagens
- Crie uma pasta no formato `ano-mes-dia-post` (ex: `2025-10-09-faltas`)
- Adicione todas as imagens do post nesta pasta
- A pasta deve ficar em `assets/img/Posts_Images/`

### 3. Criar o Arquivo do Post
- Crie um arquivo no formato `ano-mes-dia-post_pt.md` (ex: `2025-10-09-faltas_pt.md`)
- Coloque o texto bruto dentro do arquivo
- O arquivo deve ficar em alguma pasta do diretório `_posts/`

### 4. Formatar o Post
- Utilize uma LLM (como Claude) para reformular o texto bruto
- Siga as instruções do arquivo `CLAUDE.MD` para formatação correta
- Preencha as informações de metadados (título, data, tags, etc.)

### 5. Testar Localmente
- Execute `docker compose up` para ver como o post ficou no site
- Acesse http://localhost:8080 para visualizar
- Faça as modificações necessárias

### 6. Criar Versão em Inglês
- Quando o texto em português estiver 100% finalizado
- Peça para a LLM criar a versão em inglês do post
- Salve como `ano-mes-dia-post_en.md`

### 7. Estrutura Final
```
_posts/singular_post/
├── 2025-10-09-faltas_pt.md
└── 2025-10-09-faltas_en.md

assets/img/Posts_Images/
└── 2025-10-09-faltas/
    ├── imagem1.png
    ├── imagem2.jpg
    └── ...
```

**Dica**: Consulte sempre o arquivo `CLAUDE.MD` para garantir que o post siga os padrões de formatação do site.

