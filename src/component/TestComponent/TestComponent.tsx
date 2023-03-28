import Image from "next/image";
import React, { useEffect, useState } from "react";
import useCustomHookTest from "./handle/CustomHook/UseCustomHookTest";
import { FixedSizeList as List } from "react-window";
interface Props {
  data: any;
}

const Row = ({ index, style }: any) => <div style={style}>Row {index}</div>;
const TestComponent = (props: Props) => {
  const { dataSelector, count, handleSetCount } = useCustomHookTest();
  const [dataa, setData] = useState("vvvvvvv");
  console.log({ dataSelector, count });

  return (
    <div onClick={handleSetCount(count + 1)}>
      helllo
      <List height={1000} itemCount={1000} itemSize={35} width={"1000"}>
        {Row}
      </List>
    </div>
  );
};

export default TestComponent;
