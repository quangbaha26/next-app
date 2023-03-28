import React from "react";
import TestComponent from "../../src/component/TestComponent/TestComponent";
const NextComponent = ({data}:any) => {
  console.log("Dataaaaaaaaaa",data)
  return <TestComponent data={data} />;
};
export async function getStaticProps() {
  return {
    props: {
      data:'12313213'
    }, // will be passed to the page component as props
  }
}

export default NextComponent;
