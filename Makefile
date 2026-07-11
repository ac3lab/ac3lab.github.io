# =============================================================================
# ACE Laboratory — Jekyll Site Makefile
# =============================================================================
# Quick start (first time):
#   make ruby-setup   → install rbenv + Ruby 3.3 (macOS/Linux auto-detected)
#   make setup        → install gems + configure git hooks (run once)
#   make              → serve locally with live reload
#
# Daily use:
#   make              → serve (default)
#   make serve-drafts → serve including draft posts
#   make build        → production build
#   make clean        → remove build artefacts
#   make lint         → run pre-commit checks
#   make help         → list all targets
#
# Windows users: run inside WSL (Windows Subsystem for Linux) or Git Bash.
# =============================================================================

SHELL    := /bin/bash
RUBY_VER := 3.3.5
PORT     := 4000
HOST     := 127.0.0.1

# ── OS detection ──────────────────────────────────────────────────────────────
UNAME := $(shell uname -s 2>/dev/null || echo Windows)

ifeq ($(UNAME),Darwin)
  OS_NAME  := macos
  OPEN_CMD := open
else ifeq ($(UNAME),Linux)
  OS_NAME  := linux
  OPEN_CMD := xdg-open
else
  OS_NAME  := windows
  OPEN_CMD := start
endif

# ── Python user bin path (pip --user installs here per OS) ───────────────────
PY3_VER := $(shell python3 -c 'import sys; print(f"{sys.version_info.major}.{sys.version_info.minor}")' 2>/dev/null)

ifeq ($(OS_NAME),macos)
  PY_USER_BIN := $(HOME)/Library/Python/$(PY3_VER)/bin
else
  # Linux, WSL, Git Bash
  PY_USER_BIN := $(HOME)/.local/bin
endif

# ── Use rbenv shims directly (works before shell restart) ────────────────────
RBENV_SHIMS := $(HOME)/.rbenv/shims
ifneq ($(wildcard $(RBENV_SHIMS)/ruby),)
  RUBY   := $(RBENV_SHIMS)/ruby
  BUNDLE := $(RBENV_SHIMS)/bundle
else
  RUBY   := ruby
  BUNDLE := bundle
endif

# Put Python user bin and rbenv shims on PATH for all recipe shells
export PATH := $(PY_USER_BIN):$(HOME)/.rbenv/shims:$(PATH)

.DEFAULT_GOAL := serve

# ── Guards ────────────────────────────────────────────────────────────────────

.PHONY: _check-ruby
_check-ruby:
	@RUBY_MAJOR=$$($(RUBY) --version 2>/dev/null | grep -oE '[0-9]+\.[0-9]+' | head -1 | cut -d. -f1); \
	if [ -z "$$RUBY_MAJOR" ] || [ "$$RUBY_MAJOR" -lt 3 ]; then \
		echo ""; \
		echo "❌  Ruby 3+ is required but the active Ruby is: $$($(RUBY) --version 2>/dev/null || echo 'not found')"; \
		echo ""; \
		echo "   Run the following to set up a modern Ruby:"; \
		echo "     make ruby-setup"; \
		echo ""; \
		exit 1; \
	fi

# ── One-time machine setup ────────────────────────────────────────────────────

.PHONY: ruby-setup
ruby-setup: ## Install rbenv + Ruby $(RUBY_VER) — auto-detects macOS/Linux
ifeq ($(OS_NAME),macos)
	@echo "🍺 [macOS] Installing rbenv via Homebrew..."
	brew install rbenv ruby-build
else ifeq ($(OS_NAME),linux)
	@echo "🐧 [Linux] Installing rbenv via official install script..."
	@if ! command -v rbenv >/dev/null 2>&1; then \
		curl -fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-installer | bash; \
	else \
		echo "   rbenv already installed — skipping"; \
	fi
	@if ! command -v ruby-build >/dev/null 2>&1; then \
		git clone https://github.com/rbenv/ruby-build.git \
		    "$$(rbenv root)/plugins/ruby-build" 2>/dev/null || true; \
	fi
else
	@echo "⚠️  Windows detected. Please use WSL (Windows Subsystem for Linux)."
	@echo "   Inside WSL, run: make ruby-setup"
	@exit 1
endif
	@echo ""
	@echo "🔧 Installing Ruby $(RUBY_VER) via rbenv (this may take a few minutes)..."
	rbenv install --skip-existing $(RUBY_VER)
	rbenv local $(RUBY_VER)
	@echo ""
	@echo "💎 Installing bundler into rbenv Ruby $(RUBY_VER)..."
	rbenv exec gem install bundler
	rbenv rehash
	@echo ""
	@echo "✅ Ruby $(RUBY_VER) + bundler are ready."
	@echo ""
ifeq ($(OS_NAME),macos)
	@echo "💡 To activate rbenv in new terminal tabs:"
	@echo '   echo '"'"'eval "$$(rbenv init - zsh)"'"'"' >> ~/.zshrc && source ~/.zshrc'
else
	@echo "💡 To activate rbenv in new terminal tabs:"
	@echo '   echo '"'"'eval "$$(rbenv init -)"'"'"' >> ~/.bashrc && source ~/.bashrc'
endif
	@echo ""
	@echo "   Then run: make setup"

.PHONY: install
install: _check-ruby ## Install Ruby gems, Node packages and Python tools
	@echo "💎 Installing Ruby gems..."
	$(BUNDLE) install
	@if command -v npm >/dev/null 2>&1; then \
		echo "📦 Installing Node packages..."; \
		npm install; \
	else \
		echo "⚠️  npm not found — skipping Node package install"; \
	fi
	@if command -v pip3 >/dev/null 2>&1; then \
		echo "🐍 Installing Python packages (nbconvert + jupyter)..."; \
		pip3 install --quiet --upgrade nbconvert jupyter; \
	else \
		echo "⚠️  pip3 not found — skipping nbconvert/jupyter install (notebooks will not convert)"; \
	fi

.PHONY: setup
setup: install ## Install deps + configure git hooks (run once after cloning)
	@chmod +x .githooks/pre-commit
	@git config core.hooksPath .githooks
	@if command -v pre-commit >/dev/null 2>&1; then \
		pre-commit install; \
		echo "✅ pre-commit hooks installed"; \
	else \
		echo "⚠️  pre-commit not found — skipping framework hook install"; \
		echo "   Install via: pip install pre-commit"; \
	fi
	@echo "✅ Git hooks configured (hooksPath = .githooks)"

# ── Local development ─────────────────────────────────────────────────────────

.PHONY: serve
serve: _check-ruby ## Serve the site locally with live reload (default)
	@echo "🚀 Starting Jekyll dev server at http://$(HOST):$(PORT)/ ..."
	$(BUNDLE) exec jekyll serve \
		--host $(HOST) \
		--port $(PORT) \
		--livereload \
		--trace

.PHONY: serve-open
serve-open: _check-ruby ## Serve and open browser automatically
	@echo "🚀 Starting Jekyll dev server at http://$(HOST):$(PORT)/ ..."
	$(BUNDLE) exec jekyll serve \
		--host $(HOST) \
		--port $(PORT) \
		--livereload \
		--open-url \
		--trace

.PHONY: serve-drafts
serve-drafts: _check-ruby ## Serve including draft posts
	@echo "🚀 Starting Jekyll dev server (with drafts) at http://$(HOST):$(PORT)/ ..."
	$(BUNDLE) exec jekyll serve \
		--host $(HOST) \
		--port $(PORT) \
		--livereload \
		--drafts \
		--trace

.PHONY: serve-incremental
serve-incremental: _check-ruby ## Serve with incremental regeneration (faster rebuilds)
	@echo "🚀 Starting Jekyll dev server (incremental) at http://$(HOST):$(PORT)/ ..."
	$(BUNDLE) exec jekyll serve \
		--host $(HOST) \
		--port $(PORT) \
		--livereload \
		--incremental

# ── Build ─────────────────────────────────────────────────────────────────────

.PHONY: build
build: _check-ruby ## Build the site for production (into _site/)
	@echo "🔧 Building site (production)..."
	JEKYLL_ENV=production $(BUNDLE) exec jekyll build --trace

.PHONY: build-dev
build-dev: _check-ruby ## Build the site in development mode
	@echo "🔧 Building site (development)..."
	$(BUNDLE) exec jekyll build --trace

# ── Quality checks ────────────────────────────────────────────────────────────

.PHONY: lint
lint: ## Run pre-commit hooks on all staged + tracked files
	@if command -v pre-commit >/dev/null 2>&1; then \
		pre-commit run --all-files; \
	else \
		echo "❌ pre-commit not installed. Run: pip install pre-commit"; \
		exit 1; \
	fi

.PHONY: links
links: ## Check for broken links using lychee (requires: brew/apt install lychee)
	@if command -v lychee >/dev/null 2>&1; then \
		lychee --exclude-file .lycheeignore \
		       --no-progress \
		       ./**/*.md ./**/*.html; \
	else \
		echo "❌ lychee not installed."; \
		echo "   macOS:  brew install lychee"; \
		echo "   Linux:  cargo install lychee  OR  see https://github.com/lycheeverse/lychee/releases"; \
		exit 1; \
	fi

# ── Cleanup ───────────────────────────────────────────────────────────────────

.PHONY: clean
clean: ## Remove generated build artefacts
	@echo "🧹 Cleaning build artefacts..."
	@if command -v bundle >/dev/null 2>&1; then \
		$(BUNDLE) exec jekyll clean; \
	fi
	@rm -rf .jekyll-cache .sass-cache .tweet-cache _site
	@echo "✅ Clean complete"

# ── Help ──────────────────────────────────────────────────────────────────────

.PHONY: help
help: ## Show this help message
	@echo ""
	@echo "ACE Laboratory — Jekyll Site  [OS: $(OS_NAME)]"
	@echo "────────────────────────────────────────────────"
	@echo "First time? Run:  make ruby-setup  →  make setup  →  make"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-22s\033[0m %s\n", $$1, $$2}'
	@echo ""
