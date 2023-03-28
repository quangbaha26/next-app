import Image from "next/image";
import React, { useEffect, useState } from "react";
import useCustomHookTest from "./handle/CustomHook/UseCustomHookTest";
import { FixedSizeList as List } from "react-window";
interface Props {
  data: any;
}

const Row = ({ index, style }: any) => (
  <div style={style}>
    <Image
      height={100}
      width="100"
      src={
        "https://images.unsplash.com/photo-1679957907556-f79705b23c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      }
    />{" "}
    {index}
  </div>
);
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
