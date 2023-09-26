import { useState, useEffect } from 'react';

export const Calendar = () => {
  const [date, setDate] = useState(() => {
    let currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 30);
    return currentDate.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  });

  useEffect(() => {
    const intervalID = setInterval(() => updateDate(), 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const updateDate = () => {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 30);
    setDate(currentDate.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
  };

  return <span>{date}</span>;
}