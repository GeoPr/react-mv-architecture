import { observer } from "mobx-react";
import { ViewModel } from "./ViewModel";

type TProps = {
  vm: ViewModel;
}

export const View = observer(({ vm }: TProps) => (
  <div>
    {vm.loader}
    <div>{vm.count}</div>
    <button onClick={vm.handleClick}>click</button>
  </div>
));
