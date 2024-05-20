"use client";

import Image from "next/image";
import { Tabs } from "../ui/TabsComponent";

export const DummyContent = () => {
  return (
    <Image
      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ebay.co.uk%2Fitm%2F385164131375&psig=AOvVaw05UUMbIkEkSNRlg3AMvB_E&ust=1716303152900000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLj86da9nIYDFQAAAAAdAAAAABAE"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
