import { observer } from "mobx-react";
import { Presenter } from "./Presenter";

type TProps = {
  presenter: Presenter;
}

export const View = observer(({ presenter }: TProps) => (
  <div>
    {presenter.vm.loader}
    <div>{presenter.vm.count}</div>
    <div>{presenter.vm.surprise}</div>
    <button onClick={presenter.handleClick}>click</button>
  </div>
));
