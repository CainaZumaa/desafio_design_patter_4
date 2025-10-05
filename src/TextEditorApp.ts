import * as readline from "readline";
import { TextEditor } from "./TextEditor";
import { CommandHistory } from "./CommandHistory";
import { WriteCommand } from "./commands/WriteCommand";
import { UndoCommand } from "./commands/UndoCommand";
import { ListCommand } from "./commands/ListCommand";

export class TextEditorApp {
  private rl: readline.Interface;
  private textEditor: TextEditor;
  private commandHistory: CommandHistory;
  private isRunning: boolean = true;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    this.textEditor = new TextEditor();
    this.commandHistory = new CommandHistory();
  }

  start(): void {
    console.log("Welcome to Text Editor Console App!");
    console.log("Commands:");
    console.log("  escrever <texto> - Add a new line (IMPLEMENTADO)");
    console.log("  desfazer - Undo last operation (PENDENTE)");
    console.log("  listar - Show all content (PENDENTE)");
    console.log("  sair - Exit the application (PENDENTE)");
    console.log("");

    this.promptUser();
  }

  private promptUser(): void {
    if (!this.isRunning) return;

    this.rl.question("> ", (input) => {
      this.processInput(input.trim());
    });
  }

  private processInput(input: string): void {
    const parts = input.split(" ");
    const command = parts[0].toLowerCase();

    switch (command) {
      case "escrever":
        this.handleWriteCommand(parts.slice(1).join(" "));
        break;
      case "desfazer":
        console.log("Funcionalidade 'desfazer' ainda será implementada");
        break;
      case "listar":
        console.log("Funcionalidade 'listar' ainda será implementada");
        break;
      case "sair":
        console.log("Funcionalidade 'sair' ainda será implementada");
        break;
      default:
        console.log("Comando inválido. Tente: escrever");
    }

    this.promptUser();
  }

  private handleWriteCommand(text: string): void {
    if (!text) {
      console.log("Please provide text to write");
      return;
    }

    const writeCommand = new WriteCommand(this.textEditor, text);
    this.commandHistory.executeCommand(writeCommand);
    console.log(`Added: "${text}"`);
  }

  // Métodos para serem implementados:
  // - handleUndoCommand()
  // - handleListCommand()
  // - handleExitCommand()
}
