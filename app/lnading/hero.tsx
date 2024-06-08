import Link from "next/link";
import React from "react";

export default function Hero() {


  return (
    <div>
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8 lg:py-0">
        <div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl">
          <div className="text-center">
            <div className="max-w-xl mb-0 md:mx-auto sm:text-center lg:max-w-2xl md:mb-3">
              <div></div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                Stay Updated with the next week Weather
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Accurate Weather Forecasts
              </p>
              <div className="mt-4 flex gap-4"></div>
            </div>
            <a
              className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
              href="/get_started"
            >
              <span>
                Get Started{" "}
                <span aria-hidden="true" className="text-slate-400 sm:inline">
                  →
                </span>
              </span>
            </a>
            <p className="max-w-md mx-auto mb-4 mt-6 text-xs text-gray-600 sm:text-sm md:mb-2">
              Get the most precise and up-to-date weather information for your
              location. Stay prepared for any weather conditions with
              WeatherWave.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
