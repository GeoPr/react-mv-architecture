import * as mobx from 'mobx';

export class Model {
  public count: number;

  private constructor(count: number) {
    this.count = count;

    mobx.makeObservable(this, {
      count: mobx.observable,
      increase: mobx.action,
      decrease: mobx.action,
    })
  }

  public static createEmpty(): Model {
    return new Model(0);
  }

  public increase(): void {
    this.count++;
  }

  public decrease(): void {
    this.count--;
  }
}
