import React, { useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import createNewQuestion from "./actions/conversation";
import { addQuestionToList } from "../ConversationPanel/reducers";
import toast from "react-hot-toast";

const OptionInput = ({ role }) => {
  const [chosenEngine, setChosenEngine] = useState(null);
  const inputRef = useRef(null);

  const researchOptions = [
    { name: "SWOT", value: "swot" },
    {
      name: "Supply Chain",
      value: "supply_chain",
    },
    {
      name: "Porters",
      value: "porters",
    },
    {
      name: "Developments",
      value: "developments",
    },
    {
      name: "Mucas",
      value: "mucas",
    },
  ];

  const strategistOptions = [
    { name: "SWOT", value: "swot" },
    { name: "4P", value: "goldenp" },
    { name: "Porters", value: "porters" },
    { name: "Sales", value: "salestp" },
    { name: "Orange", value: "orange" },
  ];

  const showArray = useMemo(
    () => (role === "Strategist" ? strategistOptions : researchOptions),
    [role]
  );
  const dispatch = useDispatch();

  async function askQuestion(e) {
    try {
      if (chosenEngine === null) {
        toast.error("Select a engine first");
        return;
      }
      if (!inputRef.current.value) {
        inputRef.current.focus();
        toast.error("Provide the market you want to research on");
        return;
      }
      dispatch(addQuestionToList({ query: inputRef.current.value }));
      dispatch(
        createNewQuestion({
          query: inputRef.current.value,
          mind: role,
          engine: chosenEngine,
          api: role === "Strategist" ? "query_kb" : "query_kc",
        })
      );
    } catch (error) {
      error, "error";
    }
  }

  return (
    <div className={"w-full flex  bg-transparent h-full "}>
      <div className="flex flex-col py-4 w-4/5 mx-auto h-full justify-between">
        <div className="flex flex-col space-y-12 ">
          <div className="flex space-x-3 w-full">
            {/* <div
            className={"rounded-full text-white p-2 uppercase h-fit bg-black "}
          >
            {"RS"}
          </div> */}
            <div className="flex items-center space-x-2 max-w-full font-semibold text-lg justify-center w-full py-2">
              <p className=" text-wrap	 flex items-center ">Let Us work on</p>
              <input
                ref={inputRef}
                className={
                  "outline-none border-b px-1  focus:border-blue-200 bg-transparent " +
                  (inputRef?.current?.value ? "border-white" : "border-red-400")
                }
              />
              <p className=" text-wrap	 flex items-center ">Market</p>
            </div>
          </div>
          <div className="flex w-full items-center justify-evenly">
            {showArray.map((option, key) => {
              return (
                <button
                  onClick={() =>
                    chosenEngine === option?.value
                      ? setChosenEngine(null)
                      : setChosenEngine(option.value)
                  }
                  className={
                    "px-12 py-6 rounded-md text-white  " +
                    (chosenEngine === option?.value
                      ? " border-4 bg-[#FF9800] font-semibold underline underline-offset-2"
                      : " bg-[#0A7008]")
                  }
                  key={key}
                >
                  {option.name}
                </button>
              );
            })}
          </div>
        </div>
        <button
          onClick={askQuestion}
          className="w-max px-32 mb-12 py-3 rounded-full bg-[#4135bb] mx-auto font-semibold"
        >
          Ask Me!
        </button>
      </div>
    </div>
  );
};

export default OptionInput;
