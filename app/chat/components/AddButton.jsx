import React from "react";
import { useAppDispatch } from "../../store";
import { createNewThread, switchActiveThread } from "./ChatPanel/reducers";
import getGetCurrentThread from "./ChatPanel/actions/getCurrentThread";

const AddButton = () => {
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(createNewThread());
    dispatch(switchActiveThread("newThread"));
    dispatch(getGetCurrentThread({ conversationId: "newThread" }));
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center space-x-5 px-8 bg-[#2F2F2F] w-10/12 rounded-lg font-semibold text-xl py-3"
    >
      <span> + </span>
      <span>New Tab</span>
    </button>
  );
};

export default AddButton;
