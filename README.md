# Text Editor Console App

Um editor de texto simples em console que implementa o padrão Command para gerenciar operações e histórico.

## Funcionalidades

- **escrever <texto>**: Adiciona uma nova linha ao editor ✅ (IMPLEMENTADO)
- **desfazer**: Remove a última linha escrita (PENDENTE)
- **listar**: Mostra todo o conteúdo atual (PENDENTE)
- **sair**: Encerra a aplicação (PENDENTE)

## Como executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

```bash
npm install
```

### Execução

```bash
# Modo desenvolvimento
npm run dev

# Modo produção
npm run build
npm start
```

## Arquitetura

O projeto implementa o **Command Pattern**:

- Encapsula operações como objetos
- Permite desfazer operações
- Facilita extensão com novos comandos
- Mantém histórico completo de operações

## Estrutura do Projeto

```
src/
├── commands/           # Implementações dos comandos
├── interfaces/         # Interfaces do sistema
├── TextEditor.ts      # Classe principal do editor
├── TextEditorApp.ts   # Aplicação principal
├── CommandHistory.ts  # Gerenciamento de histórico
└── index.ts          # Ponto de entrada
```

## Comandos Disponíveis

- `escrever <texto>`: Adiciona uma linha
- `desfazer`: Desfaz a última operação
- `listar`: Lista todo o conteúdo
- `sair`: Encerra o programa
