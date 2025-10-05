# Segunda Parte - Funcionalidades Pendentes

## O que foi implementado

### ✅ Funcionalidades Implementadas

- **escrever <texto>**: Adiciona uma nova linha ao editor ✅

### ✅ Estrutura Base Completa

- Projeto TypeScript configurado e funcionando
- Interface de console interativa
- Command Pattern implementado
- `WriteCommand` funcionando
- `CommandHistory` para gerenciar histórico
- Estrutura de comandos criada
- Arquivos de configuração (package.json, tsconfig.json, .gitignore)

## O que falta implementar (restante)

### 🔄 Funcionalidades Pendentes

- **desfazer**: Remove a última linha escrita
- **listar**: Mostra todo o conteúdo atual
- **sair**: Encerra a aplicação

### 🔄 Implementação Necessária

1. **Comando `desfazer`**:

   - Implementar `handleUndoCommand()` em `TextEditorApp.ts`
   - Usar `UndoCommand` já criado
   - Verificar se há operações para desfazer

2. **Comando `listar`**:

   - Implementar `handleListCommand()` em `TextEditorApp.ts`
   - Usar `ListCommand` já criado
   - Mostrar conteúdo formatado

3. **Comando `sair`**:
   - Implementar `handleExitCommand()` em `TextEditorApp.ts`
   - Encerrar o loop da aplicação
   - Fechar interface readline

## Como continuar

1. Clone o repositório
2. Execute `npm install`
3. Teste a aplicação: `npm run dev`
4. Implemente as 3 funcionalidades pendentes

## Estrutura para implementação

### Para `desfazer`:

```typescript
private handleUndoCommand(): void {
  if (!this.commandHistory.canUndo()) {
    console.log("Nothing to undo");
    return;
  }

  const undoCommand = new UndoCommand(this.textEditor);
  this.commandHistory.executeCommand(undoCommand);
  console.log("Undo completed");
}
```

### Para `listar`:

```typescript
private handleListCommand(): void {
  const listCommand = new ListCommand(this.textEditor);
  this.commandHistory.executeCommand(listCommand);
}
```

### Para `sair`:

```typescript
private handleExitCommand(): void {
  console.log("Goodbye!");
  this.isRunning = false;
  this.rl.close();
}
```

## Arquivos principais

- `src/TextEditorApp.ts` - Implementar os 3 métodos pendentes
- `src/commands/UndoCommand.ts` - Já criado, usar
- `src/commands/ListCommand.ts` - Já criado, usar
- `src/TextEditor.ts` - Já tem métodos necessários
