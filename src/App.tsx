import { MVCExample } from "./mvc";
import { MVPExample } from "./mvp";
import { MVPVMExample } from "./mvpvm";
import { MVVMExample } from "./mvvm";

const examples = [MVCExample, MVPExample, MVVMExample, MVPVMExample];

export const App = () => {
  return (
    <>
      {examples.map((Example, index) => (
        <>
          <Example key={index} />
          <hr />
        </>
      ))}
    </>
  );
};

