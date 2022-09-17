import React from "react";
import UseCustomHookTest from "./handle/CustomHook/UseCustomHookTest";
interface Props {}

const TestComponent = (props: Props) => {
  const { dataSelector, count, handleSetCount } = UseCustomHookTest();
  console.log({ dataSelector, count });

  return <div onClick={handleSetCount(count + 1)}>TestComponent</div>;
};

export default TestComponent;
