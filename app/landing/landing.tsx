"use client";

import Header from "./header";
import Hero from "./hero";
import Features from "./features";
import About from "./about";
import Team from "./team";
import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { WeatherDetail } from "@/utils/WeatherDetails";
import { placeAtom } from "@/app/atom";
import { useAtom } from "jotai";
import Loader from "@/components/Loader";

interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherDetail[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export default function LandingPage() {
  const [place] = useAtom(placeAtom);
  const { isLoading, error, data } = useQuery<WeatherData>(
    "repoData",
    async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=56`
      );
      return data;
    }
  );

  // console.log("error", error);

  console.log("data", data);

  if (isLoading)
    return (
      <div className="flex items-center min-h-screen justify-center">
        <Loader size={100} />
      </div>
    );
  if (error)
    return (
      <div className="flex items-center min-h-screen justify-center">
        {/* @ts-ignore */}
        <p className="text-red-400">{error.message}</p>
      </div>
    );
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Team />
      <About />
    </div>
  );
}
