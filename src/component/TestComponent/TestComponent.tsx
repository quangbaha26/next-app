import Image from "next/image";
import React, { useEffect, useState } from "react";
import useCustomHookTest from "./handle/CustomHook/UseCustomHookTest";
interface Props {
  data: any;
}

const TestComponent = (props: Props) => {
  const { dataSelector, count, handleSetCount } = useCustomHookTest();
  const [dataa, setData] = useState("vvvvvvv");
  console.log({ dataSelector, count });

  return (
    <div onClick={handleSetCount(count + 1)}>
      helllo
      {[...new Array(100)].map((el, key) => (
        <Image
          key={key}
          width={500}
          height="500"
          src={
            "https://images.unsplash.com/photo-1647891938023-2f884aab24ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          }
        />
      ))}
    </div>
  );
};

export default TestComponent;
