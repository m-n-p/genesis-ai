import React, { useEffect, useState } from "react";
import { Thoughts } from "../../../static/thoughts";

const Loading = ({ loading = true }) => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [isDelayed, setIsDelayed] = useState(true); // State to handle the initial delay

  useEffect(() => {
    // Set a timeout to remove the delay after 3 seconds
    const delayTimeout = setTimeout(() => setIsDelayed(false), 3000);

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(delayTimeout);
  }, []);

  useEffect(() => {
    if (!loading || isDelayed) {
      // Don't run the effect if loading is false or during the delay
      return;
    }

    const updateRandomNumber = async () => {
      try {
        let number = Math.floor(Math.random() * 20);
        await setRandomNumber(number);
      } catch (error) {
        console.error("Error updating random number:", error);
      }
    };

    updateRandomNumber();
    const intervalId = setInterval(updateRandomNumber, 8000);

    // Cleanup the interval when the component unmounts or when loading/isDelayed changes
    return () => clearInterval(intervalId);
  }, [loading, isDelayed]); // Add isDelayed as a dependency

  // Conditionally render the content based on the isDelayed state
  return isDelayed ? (
    <div className="flex items-start justify-center text-center">
      Loading...
    </div> // Display a simple loading message during the delay
  ) : (
    <div className={"w-full flex items-center bg-[#D9D9D9] bg-opacity-10 "}>
      <div className="flex space-x-3 py-4 w-4/5 mx-auto flex-col items-center space-y-2">
        <p>Our knowledge is working at your service...</p>
        <h2 className="font-semibold text-lg">
          {Thoughts[randomNumber]?.title}
        </h2>
        <p className="text-sm font-light italic text-center">
          {`"${Thoughts[randomNumber]?.description}"`}
        </p>
        <a
          className="text-sm"
          href={Thoughts[randomNumber]?.link}
          target="_blank"
          rel="noreferrer"
        >
          View in detail
        </a>
      </div>
    </div>
  );
};

export default Loading;
