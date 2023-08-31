import Image from 'next/image';
import React from 'react';

interface WeekItemProps {
  nameOfDay: string;
  type: string;
  temperature: number;
}

const WeekItem: React.FC<WeekItemProps> = ({ nameOfDay, type, temperature }) => {
  return (
    <div
      className="
        shadow
        flex 
        text-blue-800 
        w-full
        justify-between
        sm:flex-col 
        sm:w-auto
        items-center 
        bg-white
        rounded-xl
        px-2
        ">
      <h2 className="flex-1 text-center font-semibold text-3xl sm:text-xl">{nameOfDay}</h2>
      <div className=" flex items-end justify-center flex-1 sm:w-14  sm:h-14 ">
        <img className="w-full h-24 sm:h-auto " src={`./weather-icons/${type}.svg`} alt="Weather" />
      </div>
      <h2 className="flex-1 text-center font-semibold text-3xl sm:text-xl">{`${temperature}°`}</h2>
    </div>
  );
};
export default WeekItem;
