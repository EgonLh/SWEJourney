import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import React from "react";
import Hello from "@/app/components/Hello";
import CounterWithReducer from "@/app/components/CounterWithReducer";
import CustomContainer from "@/app/components/CustomContainer";

export default function IndexPage() {
  return <Counter />;
  // return <div>
  //   <Hello message={": Count"}/>
  //  <CustomContainer>
  //    <CounterWithReducer/>
  //  </CustomContainer>
  // </div>
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
