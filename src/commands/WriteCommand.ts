import { Command } from "../interfaces/Command";
import { TextEditor } from "../TextEditor";

export class WriteCommand implements Command {
  constructor(private textEditor: TextEditor, private text: string) {}

  execute(): void {
    this.textEditor.addLine(this.text);
  }

  undo(): void {
    this.textEditor.removeLastLine();
  }
}
