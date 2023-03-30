import React from "react";
import TestComponent from "../../src/component/TestComponent/TestComponent";
const NextComponent = ({ data }: any) => {
  console.log("Dataaaaaaaaaa", data);
  return <TestComponent data={data} />;
};
export async function getStaticProps() {
  const mydata = () =>
    new Promise((resolve, _) => {
      setTimeout(() => {
        resolve(1);
      }, 3000);
    });

  const res = await mydata();

  return {
    props: {
      data: res,
    }, // will be passed to the page component as props
  };
}

export default NextComponent;
