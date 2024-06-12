/** @format */

import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

type Props = {};

/**
 * SpecialIcon component
 * @param props
 * @returns
 */

export default function SpecialIcon(
  props: React.HTMLProps<HTMLDivElement> & { iconName: string }
) {
  return (
    <div
      title={props.iconName}
      {...props}
      className={cn("relative h-60 w-60 animate-bounce-slow")}
    >
      <Image
        width={100}
        height={100}
        alt="weather-icon"
        className="absolute h-full w-full"
        src={`https://openweathermap.org/img/wn/${props.iconName}@4x.png`}
      />
    </div>
  );
}
