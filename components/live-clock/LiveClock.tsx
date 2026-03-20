import { useEffect, useState } from "react";

const LiveClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Set up an interval to update the time every 1000 milliseconds (1 second)
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div>
      {/* Display the formatted time */}
      <p>
        {currentTime.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "2-digit",
          hour12: false,
        })}{" "}
        WIB
      </p>
    </div>
  );
};

export default LiveClock;
