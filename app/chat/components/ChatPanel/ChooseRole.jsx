/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useDispatch } from "react-redux";
import { selectRole } from "../ConversationPanel/reducers";
import { useAppSelector } from "../../../store";
import { createNewThread, switchActiveThread } from "./reducers";
import Typewriter from "typewriter-effect";

const Role = ({ image, heading, handleClick, value }) => {
  return (
    <div
      onClick={() => handleClick(value)}
      className="flex hover:shadow-xl shadow-white cursor-pointer flex-col space-y-4 items-center justify-center"
    >
      <img src={image} alt="image" className="h-36" />
      <h3 className="text-3xl">{heading}</h3>
    </div>
  );
};

const ChooseRole = ({ activeThread }) => {
  const dispatch = useDispatch();
  const { activeThread: activeThreadId } = useAppSelector(
    (state) => state.chatPanel
  );

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

  function handleClick(value) {
    if (!activeThreadId) {
      dispatch(createNewThread());
      dispatch(switchActiveThread("newThread"));
    }
    dispatch(selectRole(value));
  }

  return (
    <div className="w-full h-full flex flex-col items-center adventfont justify-center space-y-20 text-white">
      <div className="flex flex-col items-center space-y-6">
        <h2 className="text-2xl">
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
        <p className="text-3xl font-semibold">What Role are we playing now?</p>
      </div>
      <div className="flex justify-between px-12  space-x-36">
        <Role
          handleClick={handleClick}
          image={"/roles/investor.png"}
          heading={"Investor"}
          value={"Investor"}
        />
        <Role
          handleClick={handleClick}
          image={"/roles/cxo.png"}
          heading={"CXO"}
          value={"Strategist"}
        />
        <Role
          handleClick={handleClick}
          image={"/roles/researcher.png"}
          heading={"Market Researcher"}
          value="Researcher"
        />
      </div>
    </div>
  );
};

export default ChooseRole;
