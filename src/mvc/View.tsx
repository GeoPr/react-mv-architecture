import { observer } from "mobx-react";
import { Model } from "./Model";

type TProps = {
  model: Model;
  onIncreaseClick(): void;
  onDecreaseClick(): void;
}

export const View = observer(({ model, onIncreaseClick, onDecreaseClick }: TProps) => (
  <div>
    <div>{model.count}</div>
    <button onClick={onIncreaseClick}>increase</button>
    <button onClick={onDecreaseClick}>decrease</button>
  </div>
));
