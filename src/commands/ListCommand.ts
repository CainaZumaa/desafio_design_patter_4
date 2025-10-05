import { Command } from "../interfaces/Command";
import { TextEditor } from "../TextEditor";

export class ListCommand implements Command {
  constructor(private textEditor: TextEditor) {}

  execute(): void {
    this.textEditor.listContent();
  }

  undo(): void {
    // List operation cannot be undone
    console.log("List operation cannot be undone");
  }
}
