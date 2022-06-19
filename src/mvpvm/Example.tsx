import React from 'react';
import { Model } from './Model';
import { Presenter } from './Presenter';
import { View } from './View';
import { ViewModel } from './ViewModel';

export const Example = () => {
  const [model] = React.useState(() => Model.createEmpty());
  const [presenter] = React.useState(() => new Presenter(model, new ViewModel(model.count)));

  return (
    <>
      <div>MVPMV</div>
      <View presenter={presenter} />
    </>
  )
};
