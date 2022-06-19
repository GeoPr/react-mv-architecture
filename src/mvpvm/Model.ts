import * as mobx from 'mobx';

export class Model {
  public count: number;

  private constructor(count: number) {
    this.count = count;

    mobx.makeObservable(this, {
      count: mobx.observable,
      setCount: mobx.action,
    })
  }

  public static createEmpty(): Model {
    return new Model(0);
  }
  
  public async setCount(count: number): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => {
        mobx.runInAction(() => {
          this.count = count;
        });
        resolve(count);
      }, 1000);
    })
  }
}
