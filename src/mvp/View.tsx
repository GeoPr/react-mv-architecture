import React from 'react';
import { Presenter } from './Presenter';

type TProps = {
  presenter: Presenter;
}

type TState = {
  count: number;
  isLoading: boolean;
}

export class View extends React.Component<TProps, TState> {
  public constructor(props: TProps) {
    super(props);

    this.props.presenter.setView(this);

    this.state = {
      count: 0,
      isLoading: false,
    }
  }
  
  public setCount(count: number): void {
    this.setState({ count });
  }

  public showLoader(): void {
    this.setState({ isLoading: true });
  }

  public hideLoader(): void {
    this.setState({ isLoading: false });
  }

  public handleClick = () => this.props.presenter.handleClick();

  public render() {
    return (
      <div>
        {this.state.isLoading && <div>loading...</div>}
        <div>{this.state.count}</div>
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}
