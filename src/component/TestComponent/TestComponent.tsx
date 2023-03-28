import React, { useEffect, useState } from "react";
import useCustomHookTest from "./handle/CustomHook/UseCustomHookTest";
interface Props {
  data: any;
}

const TestComponent = (props: Props) => {
  const { dataSelector, count, handleSetCount } = useCustomHookTest();
  const [dataa, setData] = useState("vvvvvvv");
  console.log({ dataSelector, count });

  useEffect(() => {
    setTimeout(() => {
      setData("settimeoutttttttttttttttt");
    }, 3000);
  }, []);

  return (
    <div onClick={handleSetCount(count + 1)}>
      TestComponent {props.data}
      {dataa}
    </div>
  );
};

export default TestComponent;
