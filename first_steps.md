# Primeiros Passos — ACE Laboratory Website

Guia para configurar o ambiente de desenvolvimento e rodar o site localmente em **macOS**, **Linux** e **Windows (via WSL)**.

---

## Pré-requisitos gerais

- **Git** configurado
- **Python 3** com `pip3` disponível
- **Node.js / npm** (opcional, para pacotes JS)
- **Ruby 3.3+** — veja a seção do seu sistema operacional abaixo

> **⚠️ Atenção:** O Ruby pré-instalado no macOS (2.6) e em muitas distribuições Linux é desatualizado e **incompatível** com este projeto. Use sempre o `rbenv` para gerenciar a versão correta.

---

## 1. Clone o repositório

```bash
git clone https://github.com/ac3lab/ac3lab.github.io.git
cd ac3lab.github.io
```

---

## 2. Configure o Ruby (apenas na primeira vez por máquina)

Escolha a seção correspondente ao seu sistema operacional.

---

### 🍎 macOS

**Requisito:** [Homebrew](https://brew.sh) instalado.

```bash
make ruby-setup
```

Esse comando instala `rbenv` e `ruby-build` via Homebrew, compila o Ruby 3.3.5 e instala o `bundler`.

Ao final, adicione o `rbenv` ao seu shell:

```bash
echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc && source ~/.zshrc
```

> Se usar `bash` em vez de `zsh`, substitua `~/.zshrc` por `~/.bash_profile`.

---

### 🐧 Linux (Ubuntu, Debian, Fedora, etc.)

```bash
make ruby-setup
```

Esse comando instala o `rbenv` via script oficial (`rbenv-installer`) e compila o Ruby 3.3.5.

> **Requisitos:** `curl`, `git` e as bibliotecas de build (`build-essential`, `libssl-dev`, `libreadline-dev`, `zlib1g-dev`). Instale via:
>
> ```bash
> # Ubuntu / Debian
> sudo apt-get update && sudo apt-get install -y \
>   curl git build-essential libssl-dev libreadline-dev zlib1g-dev \
>   libyaml-dev libffi-dev
>
> # Fedora / RHEL
> sudo dnf install -y curl git gcc make openssl-devel readline-devel \
>   zlib-devel libyaml-devel libffi-devel
> ```

Ao final, adicione o `rbenv` ao seu shell:

```bash
echo 'eval "$(rbenv init -)"' >> ~/.bashrc && source ~/.bashrc
```

---

### 🪟 Windows (WSL — Windows Subsystem for Linux)

O Jekyll **não tem suporte oficial para Windows nativo**. A abordagem recomendada é usar o **WSL 2** com Ubuntu.

**1. Instale o WSL 2:**

```powershell
# No PowerShell como administrador
wsl --install
```

Reinicie o computador e abra o terminal Ubuntu.

**2. Dentro do WSL, instale as dependências:**

```bash
sudo apt-get update && sudo apt-get install -y \
  curl git build-essential libssl-dev libreadline-dev zlib1g-dev \
  libyaml-dev libffi-dev python3 python3-pip nodejs npm
```

**3. Clone o repositório dentro do WSL** (use o sistema de arquivos do Linux, não `/mnt/c/`):

```bash
cd ~
git clone https://github.com/ac3lab/ac3lab.github.io.git
cd ac3lab.github.io
make ruby-setup
```

**4. Adicione o `rbenv` ao shell:**

```bash
echo 'eval "$(rbenv init -)"' >> ~/.bashrc && source ~/.bashrc
```

> **Dica:** Use o **Windows Terminal** com o perfil Ubuntu para melhor experiência. O VS Code com a extensão [Remote - WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) permite editar os arquivos diretamente do Windows.

---

## 3. Instale as dependências do projeto

```bash
make setup
```

Esse comando irá:
- Instalar as gems Ruby (`bundle install`)
- Instalar pacotes Node (`npm install`)
- Instalar `nbconvert` e `jupyter` via pip3 (necessários para renderizar notebooks)
- Configurar os git hooks (impede commits diretos na `main`/`master`)

---

## 4. Rode o site localmente

```bash
make
```

O servidor inicia em [http://127.0.0.1:4000](http://127.0.0.1:4000) com live reload — a página atualiza automaticamente ao salvar arquivos.

> **WSL:** Acesse `http://localhost:4000` no navegador do Windows normalmente.

---

## Todos os comandos disponíveis

```bash
make help   # lista todos os targets com descrição
```

| Comando | Descrição |
|---|---|
| `make` | Serve o site com live reload (padrão) |
| `make serve-open` | Serve e abre o navegador automaticamente |
| `make serve-drafts` | Serve incluindo posts em rascunho |
| `make serve-incremental` | Serve com rebuild incremental (mais rápido) |
| `make build` | Build de produção (gera `_site/`) |
| `make build-dev` | Build de desenvolvimento |
| `make clean` | Remove artefatos gerados (`_site/`, caches) |
| `make lint` | Roda verificações do pre-commit |
| `make links` | Verifica links quebrados com `lychee` |
| `make ruby-setup` | Instala rbenv + Ruby 3.3.5 (detecta o SO) |
| `make install` | Instala gems + npm + pip |
| `make setup` | Instala tudo + configura git hooks |

---

## Solução de problemas

### ❌ `Ruby 3+ is required`

O `rbenv` foi instalado mas ainda não está ativo na sessão atual. Execute:

```bash
# macOS (zsh)
source ~/.zshrc

# Linux / WSL (bash)
source ~/.bashrc
```

Ou abra uma nova aba do terminal.

---

### ❌ `Could not find 'bundler'`

Verifique se o Ruby correto está ativo:

```bash
ruby --version   # deve mostrar 3.3.5
```

Se ainda mostrar a versão antiga:

```bash
rbenv local 3.3.5
source ~/.zshrc   # ou ~/.bashrc no Linux/WSL
```

---

### ❌ `No such file or directory - jupyter` durante o build

O `jupyter` não está no PATH. Reinstale:

```bash
pip3 install --upgrade nbconvert jupyter
```

No Linux/WSL, pode ser necessário adicionar o diretório ao PATH:

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc && source ~/.bashrc
```

---

### ❌ Erro ao fazer commit na `main` ou `master`

Os git hooks bloqueiam commits diretos por segurança. Crie uma branch de feature:

```bash
git checkout -b feat/nome-da-sua-feature
```

---

### ❌ `make: command not found` no Windows (fora do WSL)

O `make` nativo não está disponível no Windows fora do WSL. Opções:

- **Recomendado:** Use WSL (veja seção Windows acima)
- **Alternativa:** Instale via [Chocolatey](https://chocolatey.org/): `choco install make`
- **Alternativa:** Use [Git Bash](https://gitforwindows.org/) com `mingw32-make`

---

## Estrutura do projeto (resumo)

```
ac3lab.github.io/
├── _bibliography/       # Publicações em formato BibTeX
├── _config.yml          # Configuração principal do Jekyll
├── _data/               # Dados estruturados (socials, venues, cv)
├── _pages/              # Páginas do site
│   ├── dashboards/      # Páginas de dashboards interativos
│   └── safe2025/        # Páginas do evento SAFE 2025
├── _posts/              # Posts do blog, organizados por série
├── _projects/           # Perfis dos membros do laboratório
├── _safe_people/        # Perfis dos participantes do SAFE 2025
├── assets/              # Imagens, CSS, JS, dashboards HTML
├── Makefile             # Comandos de desenvolvimento (cross-platform)
└── CLAUDE.txt           # Convenções para criação de posts
```

---

## Convenções importantes

- **Posts em inglês** usam a data real (ex.: `2025-10-09`).
- **Posts em português** usam `2000-MM-DD` como data para ficarem ocultos da página principal mas acessíveis por URL direta.
- Tags e categorias são separadas por `;` e **nunca** devem terminar com `;`.
- Veja [`CLAUDE.txt`](../CLAUDE.txt) para o template completo de posts.
- Veja [`CONTRIBUTING.md`](../CONTRIBUTING.md) para o fluxo de contribuição via Pull Request.
