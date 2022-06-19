import { Model } from "./Model";

export class Controller {
  private readonly model: Model;

  public constructor(model: Model) {
    this.model = model;
  }

  public handleIncreaseClick = (): void => this.model.increase();

  public handleDecreaseClick = (): void => this.model.decrease();
}
