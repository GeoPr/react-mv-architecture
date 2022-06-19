import * as mobx from 'mobx';
import React from 'react';
import { Model } from './Model';

export class ViewModel {
  private readonly model: Model;
  public isLoading: boolean;

  public constructor(model: Model) {
    this.model = model;
    this.isLoading = false;

    mobx.makeObservable<this, 'showLoader' | 'hideLoader'>(this, {
      count: mobx.computed,
      isLoading: mobx.observable,
      loader: mobx.computed,
      showLoader: mobx.action,
      hideLoader: mobx.action,
    });
  }

  public get count(): number {
    return this.model.count;
  }

  public get loader(): React.ReactNode {
    return this.isLoading ? <div>loading...</div> : null;
  }

  public handleClick = async (): Promise<void> => {
    this.showLoader();
    await this.model.setCount(21);
    this.hideLoader();
  };

  private showLoader(): void {
    this.isLoading = true;
  }

  private hideLoader(): void {
    this.isLoading = false;
  }
}
