import { observer } from "mobx-react";
import React from "react";
import { Model } from "./Model";
import { Presenter } from "./Presenter";
import { View } from "./View";

export const Example = observer(() => {
  const [model] = React.useState(() => Model.createEmpty())
  const [presenter] = React.useState(() => new Presenter(model))

  return (
    <>
      <div>MVP</div>
      <View presenter={presenter} />
    </>
  );
});
