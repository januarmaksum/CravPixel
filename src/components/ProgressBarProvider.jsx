"use client";
import { useLenis } from "@/hooks/useLenis";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Providers = ({ children }) => {
  useLenis();

  return (
    <>
      {children}
      <ProgressBar
        key={Date.now()}
        height="2px"
        color="#08D9D6"
        options={{ showSpinner: false }}
        disableSameURL
      />
    </>
  );
};

export default Providers;
