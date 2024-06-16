import { Skeleton } from "@mantine/core";
import React from "react";

const PageLoader = () => {
  return (
    <>
      <Skeleton animate={false} height={200} mt={6} mb={40} />
      <Skeleton height={60} />
      <Skeleton height={30} mt={6} width="50%" mb={40} />
      <Skeleton height={400} animate={false} mt={6} mb={10} />
      <Skeleton height={60} />
    </>
  );
};

export default PageLoader;
