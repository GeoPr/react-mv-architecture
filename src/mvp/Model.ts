export class Model {
  public count: number;

  private constructor(count: number) {
    this.count = count;
  }

  public static createEmpty(): Model {
    return new Model(0);
  }
  
  public async setCount(count: number): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.count = count;
        resolve(count);
      }, 1000);
    })
  }
}
