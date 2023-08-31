import React from 'react';
import weatherData from '../weatherData.json';
import WeekItem from './WeekItem';

interface WeekProps {
  week: [
    {
      day: string;
      temperature: number;
      weatherType: string;
    },
  ];
}

const Week: React.FC<WeekProps> = ({ week }) => {
  return (
    <div className=" sm:shadow-md w-full  sm:bg-white   flex flex-col rounded-xl sm:p-5">
      <h1 className="text-3xl text-white sm:text-blue-900 font-semibold flex ">Next 7 days...</h1>
      <div className="flex-wrap w-full flex-col flex sm:flex-row gap-4  justify-between mt-6">
        {week.map((day) => (
          <WeekItem
            key={day.day}
            nameOfDay={day.day}
            type={day.weatherType}
            temperature={day.temperature}
          />
        ))}
      </div>
    </div>
  );
};
export default Week;
