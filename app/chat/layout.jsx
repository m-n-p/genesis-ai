"use client";
import React, { useEffect } from "react";
import LeftPanel from "./components/LeftPanel";
import "./Main.css";
import ChooseRole from "./components/ChatPanel/ChooseRole";
import ChatScreen from "./components/ChatPanel/ChatScreen";
import { useAuthStateChange } from "../hooks/useAuthStateChange";
import { useAppSelector } from "../store";
import Loader from "./components/Loader";
import { useRouter } from "next/navigation";

const ChatLayout = () => {
  useAuthStateChange();
  const activeThread = useAppSelector((state) => state.converSationPanel);
  const { loadingView } = useAppSelector((state) => state.chatPanel);
  const uuid = useAppSelector((state) => state.authentication.uuid);
  const loading = useAppSelector((state) => state.authentication.loading);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !uuid) {
      router.push("/login");
    }
  }, [loading]);

  return (
    <div className="w-screen h-screen max-h-screen overflow-hidden flex main-container">
      <div className="w-[20%] h-screen overflow-hidden  bg-[#222121]">
        <LeftPanel />
      </div>
      <div className="max-w-[80%] grow h-full overflow-y-hidden max-h-full ">
        {activeThread.mind === "" ? (
          !loadingView ? (
            <ChooseRole activeThread={activeThread} />
          ) : (
            <div className="flex flex-col grow max-h-full text-white h-full items-center justify-center p-2">
              Engines are loading. Please be patient <Loader />
            </div>
          )
        ) : (
          <ChatScreen activeThread={activeThread} />
        )}
        {/* <ChooseRole /> */}
      </div>
    </div>
  );
};

export default ChatLayout;
