import { Model } from "./Model";
import { View } from "./View";

export class Presenter {
  private readonly model: Model;
  private view: View | null;

  public constructor(model: Model) {
    this.model = model;
    this.view = null;
  }

  public setView(view: View): void {
    this.view = view;
  }

  public handleClick = async (): Promise<void> => {
    if (!this.view) return;

    this.view.showLoader();
    const updatedCount = await this.model.setCount(21);
    this.view.setCount(updatedCount);
    this.view.hideLoader();
  };
}
