export class TextEditor {
  private lines: string[] = [];

  addLine(text: string): void {
    this.lines.push(text);
  }

  removeLastLine(): void {
    if (this.lines.length > 0) {
      this.lines.pop();
    }
  }

  listContent(): void {
    if (this.lines.length === 0) {
      console.log("No content to display");
      return;
    }

    console.log("\n--- Text Content ---");
    this.lines.forEach((line, index) => {
      console.log(`${index + 1}. ${line}`);
    });
    console.log("--- End Content ---\n");
  }

  getLines(): string[] {
    return [...this.lines];
  }

  getLineCount(): number {
    return this.lines.length;
  }

  clearAll(): void {
    this.lines = [];
  }
}
