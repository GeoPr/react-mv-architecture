import React from "react";
import { Model } from "./Model";
import { View } from "./View";
import { ViewModel } from "./ViewModel";

export const Example = () => {
  const [vm] = React.useState(() => new ViewModel(Model.createEmpty()));

  return (
    <>
      <div>MVVM</div>
      <View vm={vm} />
    </>
  );
};
