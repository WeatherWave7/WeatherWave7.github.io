/** @format */

import React from "react";
import Container from "./Container";
import WeatherIcon from "./WeatherIcon";
import WeatherDetails, { WeatherDetailProps } from "./WeatherDetails";
import { convertKelvinToCelsius } from "@/utils/convertKelvinToCelsius";

export interface ForecastWeatherDetailProps extends WeatherDetailProps {
  weatehrIcon: string;
  date: string;
  day: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  description: string;
}

/**
 * Renders the ForecastWeatherDetail component.
 * @param props
 * @returns The rendered ForecastWeatherDetail component.
 */

export default function ForecastWeatherDetail(
  props: ForecastWeatherDetailProps
) {
  const {
    weatehrIcon = "02d",
    date = "19.09",
    day = "Tuesday",
    temp,
    feels_like,
    temp_min,
    temp_max,
    description,
  } = props;
  return (
    <Container className="gap-4 flex flex-col pr-2 pl-2">
      {/* left */}
      <section className=" md:flex md:flex-col gap-4 items-center px-4  ">
        <div className=" flex md:flex-col gap-1 items-center">
          <WeatherIcon iconName={weatehrIcon} />
          <p>{date}</p>
          <p className="text-sm">{day} </p>
        </div>

        {/*  */}
        <div className="flex flex-col px-4">
          <span className="text-5xl">{convertKelvinToCelsius(temp ?? 0)}°</span>
          <p className="text-xs space-x-1 whitespace-nowrap">
            <span> Feels like</span>
            <span>{convertKelvinToCelsius(feels_like ?? 0)}°</span>
          </p>
          <p className="capitalize"> {description}</p>
        </div>
      </section>
      {/* right */}
      <section className=" overflow-x-auto flex md:flex-col justify-between gap-10 px-4 w-full p-4 bg-slate-200 rounded-lg shadow-inner shadow-slate-300 md:shadow-none md:bg-transparent">
        <WeatherDetails {...props} />
      </section>
    </Container>
  );
}
