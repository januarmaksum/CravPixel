"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Providers = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="2px"
        color="#08D9D6"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;
