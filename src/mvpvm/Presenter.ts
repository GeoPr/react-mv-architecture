import * as mobx from 'mobx';
import { Model } from "./Model";
import { ViewModel } from './ViewModel';

export class Presenter {
  private readonly model: Model;
  public readonly vm: ViewModel;

  public constructor(model: Model, vm: ViewModel) {
    this.model = model;
    this.vm = vm;
  }

  public handleClick = async (): Promise<void> => {
    this.vm.showLoader();
    const newCount = await this.model.setCount(21);
    mobx.runInAction(() => {
      this.vm.setCount(newCount);
      this.vm.hideLoader();
    });
  }
}
