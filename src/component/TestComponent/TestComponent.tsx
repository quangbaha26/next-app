/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useCustomHookTest from "./handle/CustomHook/UseCustomHookTest";
import { FixedSizeList as List } from "react-window";
interface Props {
  data: any;
}

const TestComponent = (props: Props) => {
  const { dataSelector, count, handleSetCount } = useCustomHookTest();
  const [dataa, setData] = useState("vvvvvvv");
  console.log({ dataSelector, count });

  const Row = ({ index, style }: any) => {
    if (index % 2 === 0) {
      return (
        <div>
          <img
            height={100}
            width="100"
            src={
              "https://images.unsplash.com/photo-1679936167452-18a6119f4006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
          {index}
        </div>
      );
    } else {
      return (
        <div>
          <Image
            src={
              "https://images.unsplash.com/photo-1679952418656-d10950ac49e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            }
            width="100"
            height={100}
          />
        </div>
      );
    }
  };

  return (
    <div onClick={handleSetCount(count + 1)}>
      helllo {dataa}
      <List height={1000} itemCount={100} itemSize={35} width={"1000"}>
        {Row}
      </List>
    </div>
  );
};

export default TestComponent;
