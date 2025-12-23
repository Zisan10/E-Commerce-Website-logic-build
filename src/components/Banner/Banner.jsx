import React, { useEffect, useState } from "react";
import banner from "../../assets/banner.jpg";

const Banner = () => {
  const initialTime = 5 * 60 * 60;
  const [timeLeft, setTimeLeft] = useState(() => {
    const storeTime = localStorage.getItem("remainingTime");
    return storeTime && parseInt(storeTime, 10) > 0
      ? parseInt(storeTime, 10)
      : initialTime;
  });

  const formatTime = (time) => {
    useEffect(() => {
      if (timeLeft <= 1) return;
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            localStorage.setItem("remainingTime", 0);
            return 0;
          }

          const remainingTime = prev - 1;
          localStorage.setItem("remainingTime", JSON.stringify(remainingTime));
          return remainingTime;
        });
      }, 1000);
      return () => clearInterval(timer);
    }, [timeLeft]);

    const hours = Math.floor(time / 3600);
    const minuts = Math.floor((time % 3600) / 60);
    const second = Math.floor(time % 60);

    return {
      hours: String(hours).padStart(2, 0),
      minuts: String(minuts).padStart(2, 0),
      second: String(second).padStart(2, 0),
    };
  };
  const { hours, minuts, second } = formatTime(timeLeft);

  return (
    <section
      className="h-[60vh] mt-[14vh] bg-cover bg-top"
      style={{ backgroundImage: `url(${banner})` }}>
      <div className="max-w-300 mx-auto px-10 h-full flex flex-col justify-center gap-y-3">
        <h1 className="text-red-600 text-8xl uppercase font-bold tracking-tight">
          Big Sale!
        </h1>
        <h2 className="text-zinc-800 text-3xl capitalize w-fit">
          up to 50% off - limited time only
        </h2>
        <div className="md:text-5xl  font-bold text-zinc-800 flex gap-x-3 mt-5">
          <span className="text-white bg-zinc-800 p-3">{hours}</span>:
          <span className="text-white bg-zinc-800 p-3">{minuts}</span>:
          <span className="text-white bg-zinc-800 p-3">{second}</span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
