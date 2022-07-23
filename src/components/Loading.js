import React from "react";
import { BarLoader } from "react-spinners";

export const FallbackLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center text-3xl text-primary h-screen">
      <img className="h-10 mb-2" src="/images/logo.png" alt="logo" />
      <BarLoader height={4} width={100} color="#FF2800" />
    </div>
  );
};
