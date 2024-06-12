/** @format */

import { cn } from "@/utils/cn";
import React from "react";
import { IoSearch } from "react-icons/io5";

type Props = {
  className?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};
/**
 * Renders a search box component.
 *
 * @param {Props} props - Object containing className, value, onChange, and onSubmit.
 * @return {JSX.Element} A form element with an input for search and a search button.
 */
export default function SearchBox(props: Props) {
  return (
    <form
      onSubmit={props.onSubmit}
      className={cn(
        "flex relative items-center justify-center h-10",
        props.className
      )}
    >
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Place"
        className="px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:outline-none  focus:border-blue-500 h-full"
      />
      <button className="px-4 py-[9px] bg-yellow-300 text-black  rounded-r-md focus:outline-none hover:bg-yellow-500  h-full">
        <IoSearch />
      </button>
    </form>
  );
}
