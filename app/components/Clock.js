import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString("en-US"));

  useEffect(() => {
    const intervalID = setInterval(() => updateTime(), 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const updateTime = () => {
    setTime(new Date().toLocaleTimeString("en-US"));
  };

  return <span>{time}</span>;
}
export default Clock;