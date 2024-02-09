import React, { useEffect, useRef, useState } from "react";
import { Thoughts } from "../../../static/thoughts";
import Typewriter from "typewriter-effect";

const Loading = ({ loading = true }) => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [isDelayed, setIsDelayed] = useState(true); // State to handle the initial delay
  const hats = ["Thinking...", "Learning...", "Typing..."];
  const scrollableContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollableContainerRef.current;

    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [isDelayed]);
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
        let number = Math.floor(Math.random() * Thoughts.length);
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
  return (
    <div ref={scrollableContainerRef} className="w-full">
      {/* {isDelayed ? (
        <div className="flex items-start justify-center text-center">
          Loading...
        </div> // Display a simple loading message during the delay
      ) : ( */}
      <div className={"w-full flex items-center bg-[#D9D9D9] bg-opacity-10 "}>
        <div className="flex space-x-3 py-4 w-4/5 mx-auto flex-col items-center space-y-2">
          <p>
            {" "}
            <Typewriter
              options={{
                strings: hats,
                autoStart: true,
                loop: true,
              }}
            />
          </p>
          <div
            className={
              "flex-col items-center flex space-y-2 " +
              (!isDelayed ? "visible" : "invisible")
            }
          >
            <h2 className={"font-semibold text-lg "}>
              {Thoughts[randomNumber]?.title}
            </h2>
            <p className="text-base font-light  text-center">
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
      </div>
      {/* )} */}
    </div>
  );
};

export default Loading;
