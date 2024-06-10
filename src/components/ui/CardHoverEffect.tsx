"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cn } from "../util/cn";
import { CardProps } from "../articles/card";
import Image from "next/image";

interface Props {
  items: CardProps[];
  className?: string;
}

export const HoverEffect = ({ items, className }: Props) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  function formatDate(dateString: string) {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date(dateString);
    const day = new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(
      date
    );
    const monthYear = new Intl.DateTimeFormat("en-US", options).format(date);

    let suffix = "th";
    if (day === "01" || day === "21" || day === "31") {
      suffix = "st";
    } else if (day === "02" || day === "22") {
      suffix = "nd";
    } else if (day === "03" || day === "23") {
      suffix = "rd";
    }

    return ` ${monthYear}`;
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-5",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={""}
          key={item?.date}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle className="mb-5">{item.title}</CardTitle>
            <Image src={item.imageURl} alt="" width={400} height={400} />
            <CardDescription>
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-custom-blue rounded-sm mr-2 text-[0.6rem] px-2 py-2 text-white"
                >
                  $100
                </span>
              ))}
            </CardDescription>

            <div className="text-blue-100 text-sm mt-4">
              {formatDate(item.date)}
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-zinc-100 font-bold text-xl tracking-wide mt-0",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
