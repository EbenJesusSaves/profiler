import { MouseEventHandler, ReactNode } from "react";
import { cn } from "../util/cn";

export const ModalTrigger = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden",
        className
      )}
    >
      {children}
    </button>
  );
};
