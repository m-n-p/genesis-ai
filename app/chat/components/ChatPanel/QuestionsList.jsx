import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import getGetCurrentThread from "./actions/getCurrentThread";

const QuestionsList = () => {
  const threads = useAppSelector((state) => state.chatPanel);

  const dispatch = useAppDispatch();

  function handleThreadClick(conversationId) {
    dispatch(getGetCurrentThread({ conversationId }));
  }

  console.log(threads, "new threasd");

  function determineColor(mind) {
    let checkMindColor = mind.toLowerCase();
    console.log(checkMindColor);
    switch (checkMindColor) {
      case "investor":
        return "#E90E0E";
      case "strategist":
        return "#DCB21B";
      case "researcher":
        return "#1B68DC";
      case "":
        return "#0A7008";
    }
  }

  return (
    <div className="flex flex-col space-y-2 grow h-full noscrollbarstyle overflow-y-scroll py-5">
      {threads?.threads?.conversations &&
        Object.entries(threads?.threads?.conversations)?.map(([key, convo]) => {
          return (
            <div
              key={key}
              onClick={() => handleThreadClick(key)}
              className="w-full flex py-1 cursor-pointer hover:bg-gray-800 text-white items-center space-x-2"
            >
              <div
                className="py-0.5 px-3 w-16 text-center rounded-full"
                style={{ background: determineColor(convo.mind) }}
              >
                {convo.mind ? convo.mind.slice(0, 3).toUpperCase() : "NEW"}
              </div>
              <p className="grow max-w-full truncate">
                {console.log(convo)}
                {convo?.title}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default QuestionsList;
