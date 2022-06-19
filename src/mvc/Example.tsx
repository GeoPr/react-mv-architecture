import React from 'react'
import { Controller } from './Controller';
import { Model } from './Model';
import { View } from './View';

export const Example = () => {
  const [model] = React.useState(() => Model.createEmpty());
  const [controller] = React.useState(() => new Controller(model));

  return (
    <>
      <div>MVC</div>
      <View 
        model={model}
        onIncreaseClick={controller.handleIncreaseClick} 
        onDecreaseClick={controller.handleDecreaseClick}
      />
    </>
  )
};
