/* eslint-disable @next/next/no-img-element */
import React from "react";
import InputField from "./InputField";
import Chats from "./Chats";
import Typewriter from "typewriter-effect";

const ChatScreen = ({ activeThread }) => {
  function getTimeGreeting() {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      return "Good Morning";
    } else if (currentHour < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }

  console.log(activeThread, "active");
  return (
    <div className="flex text-white py-6   flex-col h-full max-h-screen overflow-y-hidden space-y-4">
      <h2 className="adventfont text-2xl px-12">
        <Typewriter
          options={{
            cursor: "_",
          }}
          onInit={(typewriter) => {
            typewriter
              .changeDelay(40)
              .typeString("Hey there")
              .pauseFor(500)
              .deleteAll()
              .typeString(getTimeGreeting())
              .start()
              .pauseFor(1000)
              .callFunction((state) => {
                state.elements.cursor.remove();
              });
          }}
        />
      </h2>
      <div className="flex items-center justify-center space-x-2">
        <img
          alt=""
          className="h-6"
          src={
            activeThread?.mind === "Strategist"
              ? "/roles/cxo.png"
              : activeThread?.mind === "Researcher"
              ? "/roles/researcher.png"
              : activeThread?.mind === "Investor" && "/roles/investor.png"
          }
        />
        <h3 className="underline underline-offset-2 font-semibold text-xl">
          {activeThread?.mind}
        </h3>
      </div>
      <div className="grow flex flex-col overflow-y-hidden max-h-full h-full">
        <Chats
          conversations={activeThread?.chats}
          activeThread={activeThread}
        />
      </div>

      {(activeThread?.mind === "Investor" ||
        (activeThread?.chats.length !== 0 &&
          (activeThread?.mind === "Researcher" ||
            activeThread?.mind === "Strategist"))) && (
        <InputField activeThread={activeThread} />
      )}
    </div>
  );
};

export default ChatScreen;
