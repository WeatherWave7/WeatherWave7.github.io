import Link from 'next/link';
import React from 'react';
import { MdOutlineLocationOn, MdWbSunny } from "react-icons/md";

/**
 * Renders the Header component.
 * @returns The rendered Header component.
 * @remarks This component is used to display the header of our service.
 */

export default function Header() {
  return (
    <div>
      <header>
        <div className="mx-auto max-w-screen px-4 py-0 pt-8 sm:px-8 sm:py-4 lg:px-14">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
            <p className="flex items-center justify-center gap-2  ">
                <h1 className="text-gray-500 text-4xl">WeatherWave</h1>
                <MdWbSunny className="text-3xl mt-1 text-yellow-300" />
            </p>

            </div>

          </div>
        </div>
      </header>
    </div>
  );
}
