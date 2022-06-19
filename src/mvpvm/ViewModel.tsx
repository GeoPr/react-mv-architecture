import * as mobx from 'mobx';
import React from 'react';

export class ViewModel {
  public count: number;
  private isLoading: boolean;

  public constructor(count: number) {
    this.count = count;
    this.isLoading = false;

    mobx.makeObservable<this, 'isLoading'>(this, {
      isLoading: mobx.observable,
      count: mobx.observable,

      showLoader: mobx.action,
      hideLoader: mobx.action,
      setCount: mobx.action,

      loader: mobx.computed,
      surprise: mobx.computed,
    });
  }


  public get loader(): React.ReactNode {
    return this.isLoading ? <div>loading...</div> : null;
  }

  public get surprise(): React.ReactNode {
    return this.shouldShowSurprise ? <h1>surprise</h1> : null;
  }

  public showLoader(): void {
    this.isLoading = true;
  }

  public hideLoader(): void {
    this.isLoading = false;
  }

  public setCount(count: number): void {
    this.count = count;
  }

  private get shouldShowSurprise(): boolean {
    return this.count > 10;
  }
}
