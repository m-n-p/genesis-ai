import React from "react";
import ResponseCard from "./ResponseCard";
import OptionInput from "./OptionInput";

const Chats = ({ conversations, activeThread }) => {
  console.log(conversations, "convo", activeThread);

  return (
    <div className="flex flex-col py-6 w-full grow max-h-full noscrollbarstyle overflow-y-scroll">
      {Object.keys(conversations).length === 0 &&
        (activeThread?.mind === "Researcher" ||
          activeThread?.mind === "Strategist") && (
          <OptionInput role={activeThread?.mind} />
        )}
      {Object.entries(conversations)?.map(([key, convo]) => {
        return (
          <>
            <ResponseCard initial={"RS"} isGenesis={false} text={convo.query} />
            <ResponseCard
              initial={" MU"}
              isGenesis={true}
              text={`${convo?.answer}`}
            />
          </>
        );
      })}
    </div>
  );
};

export default Chats;
