import React, { useEffect, useState } from "react";
import useCustomHookTest from "./handle/CustomHook/UseCustomHookTest";
interface Props {
  data: any;
}

const TestComponent = (props: Props) => {
  const { dataSelector, count, handleSetCount } = useCustomHookTest();
  const [dataa, setData] = useState("vvvvvvv");
  console.log({ dataSelector, count });

  return <div onClick={handleSetCount(count + 1)}>helllo </div>;
};

export default TestComponent;
