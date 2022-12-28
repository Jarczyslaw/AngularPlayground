export class BaseComponent {
  protected log(message: any): void {
    console.log(`[${this.constructor.name}] - ${message}`);
  }
}