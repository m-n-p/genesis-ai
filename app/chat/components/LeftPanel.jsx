/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AddButton from "./AddButton";
import { useAppDispatch, useAppSelector } from "../../store";
import { getAllThreads } from "./ChatPanel/actions/getAllThreads";
import QuestionsList from "./ChatPanel/QuestionsList";
import Loader from "./Loader";
import { auth } from "../../lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
const LeftPanel = () => {
  const dispatch = useAppDispatch();

  const uuid = useAppSelector((state) => state.authentication.uuid);
  const useremail = useAppSelector(
    (state) => state.authentication.emailAddress
  );
  const { loadingView } = useAppSelector((state) => state.chatPanel);
  const router = useRouter();
  const loading = useAppSelector((state) => state.authentication.loading);

  useEffect(() => {
    if (uuid) {
      dispatch(getAllThreads());
    }
  }, [dispatch, uuid]);

  async function handleLogout() {
    signOut(auth)
      .then(() => {
        router.push("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <div className="w-full h-full bg-[#222121] text-white  flex flex-col overflow-hidden max-h-full">
      <div className="grow px-2 py-3 flex flex-col max-h-full overflow-hidden">
        <div>{!loadingView && <AddButton />}</div>
        {!loadingView ? (
          <div className="flex flex-col grow max-h-full overflow-hidden">
            <QuestionsList />
          </div>
        ) : (
          <div className="flex flex-col grow max-h-full items-center justify-center p-2">
            <Loader />{" "}
          </div>
        )}
      </div>
      <button className="flex h-max items-center bg-[#D9D9D9] ">
        <Image
          src="/MontaLogo.png"
          alt="Avatar"
          className="avatar bg-black"
          width={68}
          height={66}
        />
        <div className="text-black px-2 flex items-center justify-between grow">
          <p>{useremail && useremail}</p>
          {!loading && uuid && (
            <button onClick={handleLogout}>
              <img
                alt=""
                src="/shutdown.png"
                className="!h-8 !w-8 !aspect-square"
              />
            </button>
          )}
        </div>
      </button>
    </div>
  );
};

export default LeftPanel;
