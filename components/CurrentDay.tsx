import React from 'react';
import Image from 'next/image';

interface CurrentDayProps {
  current: {
    temperature: number;
    day: string;
  };
}

const CurrentDay: React.FC<CurrentDayProps> = ({ current }) => {
  return (
    <div className="w-full justify-between flex flex-row items-center text-white h-32 sm:h-auto ">
      <div className="flex flex-col items-start">
        <h1 className="text-2xl sm:text-3xl">{current.day}</h1>
        <h2 className="text-md sm:text-xl opacity-70">Today in Vancouver, BC</h2>
      </div>
      <div
        className="
            flex 
            flex-col 
            items-center
            h-full
            sm:h-auto
            sm:w-full
            ">
        <img
          className="h-full sm:h-auto"
          src="./weather-icons/partly-cloudy-day.svg"
          alt="Weather"
        />
      </div>
      <div
        className="
            border-dotted
            border-l-2
            border-zinc-200
            border-opacity-40
            flex
            flex-col
            p-2
            sm:p-4
        ">
        <h1 className="text-5xl sm:text-7xl sm:mb-6">{current.temperature}°</h1>
        <h4 className="text-sm sm:text-lg pl-px mb-2 opacity-70">Feels like 28°</h4>
      </div>
    </div>
  );
};
export default CurrentDay;
