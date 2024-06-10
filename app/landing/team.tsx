import Link from "next/link";
import React from "react";
export default function Team() {
  return (
    <div className="flex justify-center items-center min-h-0 bg-gray-100 py-0">
      <div className="px-4 py-4 mx-auto sm:max-w-screen md:max-w-screen lg:max-w-screen md:px-24 lg:px-8 lg:py-0">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <h2 className="max-w-lg mb-6 font-sans text-3xl text-center font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">Meet Our Team</span>
            </span>
          </h2>
        </div>
        <div className="grid gap-10 mx-auto lg:max-w-screen sm:grid-cols-2 lg:grid-cols-2 items-center justify-center">
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-40 h-40 mb-4 rounded-full shadow"
              src="https://up6.cc/2024/06/171772448777531.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Mohamed Ali</p>
              <p className="text-sm text-gray-800">Full-stack Developer</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-40 h-40 mb-4 rounded-full shadow"
              src="https://up6.cc/2024/06/171772528380021.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Mohamed Suliman</p>
              <p className="text-sm text-gray-800">Full-stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
