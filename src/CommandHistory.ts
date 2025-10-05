import { Command } from "./interfaces/Command";

export class CommandHistory {
  private history: Command[] = [];
  private currentIndex: number = -1;

  executeCommand(command: Command): void {
    command.execute();

    // Remove any commands after current index (for redo functionality)
    this.history = this.history.slice(0, this.currentIndex + 1);

    // Add new command to history
    this.history.push(command);
    this.currentIndex++;
  }

  undo(): void {
    if (this.currentIndex >= 0) {
      const command = this.history[this.currentIndex];
      command.undo();
      this.currentIndex--;
    } else {
      console.log("Nothing to undo");
    }
  }

  canUndo(): boolean {
    return this.currentIndex >= 0;
  }

  getHistorySize(): number {
    return this.history.length;
  }
}
