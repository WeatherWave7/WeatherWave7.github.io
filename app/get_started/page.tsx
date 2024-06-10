/** @format */
"use client";

import Container from "@/components/Container";
import ForecastWeatherDetail from "@/components/ForecastWeatherDetail";
import Navbar from "@/components/Navbar";
import WeatherDetails from "@/components/WeatherDetails";
import SpecialIcon from "@/components/iconSpecial";
import WeatherIcon from "@/components/WeatherIcon";
import { convertKelvinToCelsius } from "@/utils/convertKelvinToCelsius";
import { convertWindSpeed } from "@/utils/convertWindSpeed";
import { getDayOrNightIcon } from "@/utils/getDayOrNightIcon";
import { metersToKilometers } from "@/utils/metersToKilometers";
import axios from "axios";
import { format, fromUnixTime, parseISO } from "date-fns";
import { useQuery } from "react-query";
import { loadingCityAtom, placeAtom } from "@/app/atom";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { WeatherDetail } from "@/utils/WeatherDetails";
import { WeatherData } from "@/utils/WeatherData";
import Loader from "@/components/Loader";

export default function Home() {
  const [place, setPlace] = useAtom(placeAtom); // Updated: Added placeAtom
  const [loadingCity] = useAtom(loadingCityAtom);

  const { isLoading, error, data, refetch } = useQuery<WeatherData>(
    "repoData",
    async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=56`
      );
      return data;
    },
    {
      enabled: !!place, // Updated: Only fetch data if place is set
    }
  );

  useEffect(() => {
    if (place) {
      refetch(); // Updated: Ensure refetching data when place changes
    }
  }, [place, refetch]); // Updated: Added place and refetch to dependency array

  const firstData = data?.list[0];

  const uniqueDates = [
    ...new Set(
      data?.list.map(
        (entry) => new Date(entry.dt * 1000).toISOString().split("T")[0]
      )
    ),
  ];

  const firstDataForEachDate = uniqueDates.map((date) => {
    return data?.list.find((entry) => {
      const entryDate = new Date(entry.dt * 1000).toISOString().split("T")[0];
      const entryTime = new Date(entry.dt * 1000).getHours();
      return entryDate === date && entryTime >= 6;
    });
  });

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
    <div className="flex flex-col gap-4 bg-gray-900 min-h-screen font-custom">
      <Navbar location={data?.city.name} />
      <main className="px-3 max-w-full mx-auto flex flex-col gap-9 w-full pb-10 pt-4">
        {loadingCity ? (
          <WeatherSkeleton />
        ) : (
          <>
            <section className="space-y-4 flex flex-row justify-around">
              <div className="space-y-2">
                <Container className="bg-gray-900 border-0">
                  <div className="flex flex-col px-4 bg-gray-500 w-[32rem] h-96 text-slate-50 items-center justify-center pt-2 rounded-2xl">
                  <h2 className="flex gap-1 text-2xl mb-6 items-end text-slate-200">
              <p>{format(parseISO(firstData?.dt_txt ?? ""), "EEEE")}</p>
              <p className="text-lg">
                ({format(parseISO(firstData?.dt_txt ?? ""), "dd.MM.yyyy")})
              </p>
            </h2>
                    <span className="text-9xl animate-bounce-slow">
                      {convertKelvinToCelsius(firstData?.main.temp ?? 296.37)}°
                    </span>
                    <p className="text-xl pr-3 pt-6">
                      <span> Feels like</span>
                      <span>
                        {convertKelvinToCelsius(
                          firstData?.main.feels_like ?? 0
                        )}
                        °
                      </span>
                    </p>
                    <p className="text-xs space-x-2">
                      <span>
                        {convertKelvinToCelsius(firstData?.main.temp_min ?? 0)}
                        °↓
                      </span>
                      <span>
                        {convertKelvinToCelsius(firstData?.main.temp_max ?? 0)}
                        °↑
                      </span>
                    </p>
                    <p className="capitalize text-center pr-4 pt-6">
                      {firstData?.weather[0].description}
                    </p>
                  </div>
                  {/*
                   */}
                </Container>
              </div>
              <div className="flex-row ">
                <Container className="w-[45rem] justify-between flex-col px-4 items-center bg-gray-500 h-[35rem] border-0 pb-7 pt-6">
                  <SpecialIcon
                    iconName={getDayOrNightIcon(
                      firstData?.weather[0].icon ?? "",
                      firstData?.dt_txt ?? ""
                    )}
                  />
                  <Container className="bg-gray-200 px-6 gap-4 justify-between overflow-x-auto border-0">
                    <WeatherDetails
                      visability={metersToKilometers(
                        firstData?.visibility ?? 10000
                      )}
                      airPressure={`${firstData?.main.pressure} hPa`}
                      humidity={`${firstData?.main.humidity}%`}
                      sunrise={format(
                        fromUnixTime(data?.city.sunrise ?? 1702949452),
                        "H:mm"
                      )}
                      sunset={format(
                        fromUnixTime(data?.city.sunset ?? 1702517657),
                        "H:mm"
                      )}
                      windSpeed={convertWindSpeed(
                        firstData?.wind.speed ?? 1.64
                      )}
                    />
                  </Container>
                </Container>
              </div>
            </section>

            <section className="w-4/5 m-auto mt-10 mb-10">
              <div className="flex gap-10 sm:gap-16 overflow-x-auto w-full justify-between pr-3 bg-gray-300 rounded-lg p-4">
                {data?.list.map((d, i) => (
                  <div
                    key={i}
                    className="flex flex-col justify-between gap-2 items-center text-xs font-semibold"
                  >
                    <p className="whitespace-nowrap">
                      {format(parseISO(d.dt_txt), "h:mm a")}
                    </p>
                    <WeatherIcon
                      iconName={getDayOrNightIcon(d.weather[0].icon, d.dt_txt)}
                    />
                    <p>{convertKelvinToCelsius(d?.main.temp ?? 0)}°</p>
                  </div>
                ))}
              </div>
            </section>

            <p className="text-2xl text-slate-50 ml-2">Forecast (7 days)</p>
            <section className="flex h-full gap-4 justify-around pl-2 pr-2">
              {firstDataForEachDate.map((d, i) => (
                <ForecastWeatherDetail
                  key={i}
                  description={d?.weather[0].description ?? ""}
                  weatehrIcon={d?.weather[0].icon ?? "01d"}
                  date={d ? format(parseISO(d.dt_txt), "dd.MM") : ""}
                  day={d ? format(parseISO(d.dt_txt), "EEEE") : ""}
                  feels_like={d?.main.feels_like ?? 0}
                  temp={d?.main.temp ?? 0}
                  temp_max={d?.main.temp_max ?? 0}
                  temp_min={d?.main.temp_min ?? 0}
                  airPressure={`${d?.main.pressure} hPa`}
                  humidity={`${d?.main.humidity}%`}
                  sunrise={format(
                    fromUnixTime(data?.city.sunrise ?? 1702517657),
                    "H:mm"
                  )}
                  sunset={format(
                    fromUnixTime(data?.city.sunset ?? 1702517657),
                    "H:mm"
                  )}
                  visability={`${metersToKilometers(d?.visibility ?? 10000)}`}
                  windSpeed={`${convertWindSpeed(d?.wind.speed ?? 1.64)}`}
                />
              ))}
            </section>
          </>
        )}
      </main>
    </div>
  );
}

function WeatherSkeleton() {
  return (
    <section className="space-y-8">
      <div className="space-y-2 animate-pulse">
        <div className="flex gap-1 text-2xl items-end">
          <div className="h-6 w-24 bg-gray-300 rounded"></div>
          <div className="h-6 w-24 bg-gray-300 rounded"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="h-6 w-16 bg-gray-300 rounded"></div>
              <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
              <div className="h-6 w-16 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 animate-pulse">
        <div className="w-1/2 h-40 bg-gray-300 rounded"></div>
        <div className="w-1/2 h-40 bg-gray-300 rounded"></div>
      </div>
      <div className="flex flex-col gap-4 animate-pulse">
        <div className="h-6 w-32 bg-gray-300 rounded"></div>
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="h-20 w-full bg-gray-300 rounded"></div>
        ))}
      </div>
    </section>
  );
}
