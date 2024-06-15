import { Skeleton } from "@mantine/core";
import React from "react";

const Loader = () => {
  return (
    <>
      <Skeleton height={25} />
      <Skeleton animate={false} height={100} mt={6} />
      <Skeleton height={10} mt={6} width="50%" />
      <Skeleton height={15} mt={6} width="70%" />
    </>
  );
};

export default Loader;
