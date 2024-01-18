import React, { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import getGetCurrentThread from "./actions/getCurrentThread";
import { switchActiveThread } from "./reducers";

const QuestionsList = () => {
  const { conversations } = useAppSelector((state) => state.chatPanel);
  const activeThread = useAppSelector((state) => state.chatPanel.activeThread);
  const dispatch = useAppDispatch();

  function handleThreadClick(conversationId) {
    dispatch(switchActiveThread(conversationId));
    dispatch(getGetCurrentThread({ conversationId }));
  }

  function determineColor(mind) {
    if (!mind) return "#0A7008";
    let checkMindColor = mind.toLowerCase();
    checkMindColor;
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

  console.log(activeThread);

  return (
    <div className="flex flex-col space-y-2 grow h-full noscrollbarstyle overflow-y-scroll py-5">
      {conversations &&
        conversations?.map((convo, index) => {
          return (
            <div
              key={index}
              onClick={() => handleThreadClick(convo.conversation_id)}
              className={
                "w-full flex py-2 px-1 rounded-md cursor-pointer hover:bg-gray-800 text-white items-center space-x-2 " +
                (activeThread === convo.conversation_id && "bg-gray-700")
              }
            >
              <div
                className="py-0.5 px-3 w-16 text-center rounded-full"
                style={{ background: determineColor(convo?.mind) }}
              >
                {convo.mind ? convo.mind.slice(0, 3).toUpperCase() : "NEW"}
              </div>
              <p className="grow max-w-full  truncate">{convo?.title}</p>
            </div>
          );
        })}
    </div>
  );
};

export default QuestionsList;
