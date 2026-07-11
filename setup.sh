#!/bin/sh
# setup.sh — configura os git hooks do projeto

git config core.hooksPath .githooks
chmod +x .githooks/pre-commit

echo "✅  Git hooks configurados com sucesso!"
echo "    Os hooks em '.githooks/' estão agora ativos."
