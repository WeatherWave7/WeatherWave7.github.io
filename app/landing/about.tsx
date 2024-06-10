import link from "next/link";
import React from "react";

export default function About() {
  return (
    <div>
      <div className="px-4 pt-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full md:px-10 lg:px-10">
        <div className="grid gap-4 row-gap-6 mb-2 sm:grid-cols-1 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <svg
                className="w-8 text-deep-purple-accent-400"
                viewBox="0 0 24 24"
                stroke-linejoin="round"
                stroke-width="2"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12"></rect>
                <rect x="3" y="17" width="7" height="6"></rect>
                <rect x="14" y="1" width="7" height="6"></rect>
                <rect x="14" y="11" width="7" height="12"></rect>
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                About WeatherWave
              </span>
            </a>
            <div className="mt-2 lg:max-w-sm">
              <p className="text-sm text-gray-800">
                WeatherWave is committed to delivering the most reliable weather
                information to help you stay prepared for any conditions. Our
                mission is to provide comprehensive and precise weather data to
                keep you informed and safe. We leverage cutting-edge technology
                and expert analysis to ensure our forecasts are accurate and
                timely. Whether you’re planning your day, your week, or a
                specific event, WeatherWave has you covered.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-800">Phone:</p>
              <a
                href="tel:97439900342"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                +97439900342 - +249124250586
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Email:</p>
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                info@moealsir.tech
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Qatar, Duha
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Social
            </span>
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,12c0-5.5-4.5-10-10-10S2,6.5,2,12c0,5,3.7,9.1,8.5,9.9v-7H7.5v-3H10v-2c0-2.5,1.5-3.9,3.7-3.9 c1.1,0,2.3,0.2,2.3,0.2v2.6h-1.3c-1.3,0-1.7,0.8-1.7,1.6v1.9h3l-0.5,3H13v7C17.8,21.1,22,17,22,12z"></path>
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,12c0-5.5-4.5-10-10-10S2,6.5,2,12c0,5,3.7,9.1,8.5,9.9v-7H7.5v-3H10v-2c0-2.5,1.5-3.9,3.7-3.9 c1.1,0,2.3,0.2,2.3,0.2v2.6h-1.3c-1.3,0-1.7,0.8-1.7,1.6v1.9h3l-0.5,3H13v7C17.8,21.1,22,17,22,12z"></path>
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Follow us on social media to stay updated with the latest weather news and updates from WeatherWave.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
