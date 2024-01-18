import React, { useEffect, useState } from "react";
import { Thoughts } from "../../../static/thoughts";
const Loading = ({ loading = true }) => {
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    const updateRandomNumber = async () => {
      try {
        let number = Math.floor(Math.random() * 20);
        await setRandomNumber(number);
      } catch (error) {
        console.error("Error updating random number:", error);
      }
    };

    if (loading) {
      updateRandomNumber();
    }

    const intervalId = setInterval(updateRandomNumber, 8000);

    return () => clearInterval(intervalId);
  }, []);

  Thoughts, randomNumber;

  return (
    <div className={"w-full flex items-center bg-[#D9D9D9] bg-opacity-10 "}>
      <div className="flex space-x-3 py-4 w-4/5 mx-auto flex-col items-center space-y-2">
        <p>Our knowledge is working at your service...</p>
        <h2 className="font-semibold text-lg">
          {Thoughts[randomNumber].title}
        </h2>
        <p className="text-sm font-light italic">
          {`"${Thoughts[randomNumber].description}"`}
        </p>
        <a
          className="text-sm"
          href={Thoughts[randomNumber].link}
          target="_blank"
          rel="noreferrer"
        >
          View in detail
        </a>
        {/* <p className="max-w-full text-wrap	 flex items-center ">{text}</p> */}
      </div>
    </div>
  );
};

export default Loading;
