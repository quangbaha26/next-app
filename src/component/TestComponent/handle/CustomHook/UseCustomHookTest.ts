import React, { useState, useEffect, useCallback } from "react";
import { useAppSelector, useAppDispatch } from "../../../../../store";
import { selector } from "../redux/seletor";
import { decrement, increment } from "./../redux/test";
const UseCustomHookTest = () => {
  const dataSelector = useAppSelector(selector);
  const dispatch = useAppDispatch();
  const [count, setCount] = useState<number>(0);
  const handleSetCount = useCallback((data: number) => {
    const result = (e: React.MouseEvent<HTMLDivElement>) => {
      console.log(e.target as HTMLDivElement);
      setCount(data);
      dispatch(decrement());
    };
    return result;
  }, []);

  console.log(dataSelector);

  return {
    dataSelector,
    count,
    handleSetCount,
  };
};

export default UseCustomHookTest;
