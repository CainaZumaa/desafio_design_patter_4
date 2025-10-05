import { Command } from "../interfaces/Command";
import { TextEditor } from "../TextEditor";

export class UndoCommand implements Command {
  constructor(private textEditor: TextEditor) {}

  execute(): void {
    this.textEditor.removeLastLine();
  }

  undo(): void {
    // Undo of undo is not supported in this implementation
    console.log("Cannot undo an undo operation");
  }
}
