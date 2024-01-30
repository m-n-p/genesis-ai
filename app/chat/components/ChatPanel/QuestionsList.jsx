import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import getGetCurrentThread from "./actions/getCurrentThread";
import { switchActiveThread } from "./reducers";
import Fuse from "fuse.js";

const QuestionsList = () => {
  const { conversations } = useAppSelector((state) => state.chatPanel);
  const activeThread = useAppSelector((state) => state.chatPanel.activeThread);
  const dispatch = useAppDispatch();
  const [filterQuery, setFilterQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

  const fuse = new Fuse(conversations, {
    keys: ["title", "thread.answer", "thread.query"],
    includeScore: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (filterQuery.trim() === "") {
      setSearchResults(conversations);
    } else {
      const results = fuse.search(filterQuery);
      setSearchResults(results.map((result) => result.item));
    }
  }, [filterQuery, conversations]);

  console.log(activeThread);

  return (
    <div className="flex flex-col space-y-2 grow h-full noscrollbarstyle overflow-x-hidden  overflow-y-scroll py-5">
      {conversations?.length > 0 && (
        <input
          placeholder="Query conversations"
          className="border-b bg-transparent mb-2 w-11/12 mx-auto outline-none focus:border-purple-400 py-1 text-lg px-1"
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
        />
      )}
      {searchResults &&
        searchResults?.map((convo, index) => {
          return (
            <div
              key={index}
              onClick={() => handleThreadClick(convo.conversation_id)}
              className={
                "w-full flex py-2 px-1 rounded-md cursor-pointer  hover:bg-gray-800 text-white items-center space-x-2 " +
                (activeThread === convo.conversation_id && "bg-gray-700")
              }
            >
              <div className="w-[50px]">
                <button
                  type="button"
                  className="py-0.5  !w-[50px] text-center rounded-full"
                  style={{
                    background: determineColor(convo?.mind),
                  }}
                >
                  {" "}
                  {convo.mind ? convo.mind.slice(0, 3).toUpperCase() : "NEW"}
                </button>
              </div>

              <div className="grow">
                {" "}
                <span className="  ">{convo?.title}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default QuestionsList;
