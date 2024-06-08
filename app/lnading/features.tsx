import Link from "next/link";
import React from "react";
import { LuEye, LuSunrise, LuSunset } from "react-icons/lu";
import { FiDroplet } from "react-icons/fi";
import { MdAir } from "react-icons/md";
import { ImMeter } from "react-icons/im";

export default function Features() {
  return (
    <div>
      <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-4 lg:px-4 lg:py-0">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-5">
          <h2 className="max-w-lg mb-6 font-sans text-3xl text-center font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">Our Features</span>
            </span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg text-center">
            WeatherWave provides detailed weather information to keep you
            prepared for any condition. Here are the key features of our
            service:
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-6 mb-4 sm:grid-cols-3 lg:grid-cols-3">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4  rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="3em"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Visability</h6>
            <p className="text-gray-700">
              Get real-time visibility levels in your area to ensure safe travel
              and outdoor activities. Know the clarity of your surroundings at
              any given time.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="3em"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Humidity</h6>
            <p className="text-gray-700">
              Monitor the humidity levels to stay comfortable and prepared for
              different weather conditions. This is especially useful for those
              with health sensitivities or for planning outdoor activities.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="3em"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M14.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3zM19 6.5C19 4.57 17.43 3 15.5 3S12 4.57 12 6.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 8 15.5 8H2v2h13.5c1.93 0 3.5-1.57 3.5-3.5zm-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5v2c1.93 0 3.5-1.57 3.5-3.5S20.43 11 18.5 11z"></path>
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Wind speed</h6>
            <p className="text-gray-700">
              Receive accurate and up-to-date wind speed information. This
              feature is essential for planning activities such as sailing,
              flying, or outdoor events.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                version="1.1"
                viewBox="0 0 16 16"
                height="3em"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 1c4.418 0 8 3.582 8 8 0 3.012-1.665 5.635-4.125 7h-7.75c-2.46-1.365-4.125-3.988-4.125-7 0-4.418 3.582-8 8-8zM12.53 13.53c1.21-1.21 1.876-2.819 1.876-4.53h-1.406v-1h1.329c-0.11-0.703-0.334-1.377-0.665-2h-1.664v-1h1.004c-0.147-0.184-0.306-0.361-0.475-0.53-0.722-0.722-1.587-1.251-2.53-1.559v1.089h-1v-1.329c-0.328-0.051-0.662-0.078-1-0.078s-0.672 0.026-1 0.078v1.329h-1v-1.089c-0.943 0.309-1.808 0.837-2.53 1.559-0.169 0.169-0.327 0.346-0.475 0.53h1.004v1h-1.664c-0.331 0.623-0.555 1.297-0.665 2h1.329v1h-1.406c0 1.711 0.666 3.32 1.876 4.53 0.167 0.167 0.343 0.324 0.524 0.47h3.006l0.571-8h0.857l0.571 8h3.006c0.182-0.146 0.357-0.303 0.524-0.47z"></path>
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Air Pressure</h6>
            <p className="text-gray-700">
              Track changes in air pressure to anticipate weather shifts.
              Understanding air pressure can help predict storms and other
              weather patterns.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="3em"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2v8"></path>
                <path d="m4.93 10.93 1.41 1.41"></path>
                <path d="M2 18h2"></path>
                <path d="M20 18h2"></path>
                <path d="m19.07 10.93-1.41 1.41"></path>
                <path d="M22 22H2"></path>
                <path d="m8 6 4-4 4 4"></path>
                <path d="M16 18a4 4 0 0 0-8 0"></path>
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Sunrise</h6>
            <p className="text-gray-700">
              Plan your morning activities with precise sunrise times. Enjoy the
              beauty of the morning by knowing exactly when the sun will rise in
              your location.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="3em"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 10V2"></path>
                <path d="m4.93 10.93 1.41 1.41"></path>
                <path d="M2 18h2"></path>
                <path d="M20 18h2"></path>
                <path d="m19.07 10.93-1.41 1.41"></path>
                <path d="M22 22H2"></path>
                <path d="m16 6-4 4-4-4"></path>
                <path d="M16 18a4 4 0 0 0-8 0"></path>
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Sunset</h6>
            <p className="text-gray-700">
              Make the most of your evenings with accurate sunset times. Know
              when the day ends so you can catch the beautiful evening sky and
              plan your nighttime activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
