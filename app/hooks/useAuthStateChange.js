"use client";
import { setAuthentication } from "../(landing-pages)/reducer";
import { auth } from "../lib/firebase";
import { useAppDispatch } from "../store";

export function useAuthStateChange() {
  const dispatch = useAppDispatch();

  auth.onAuthStateChanged((user) => {
    user, "user journey";
    dispatch(
      setAuthentication({
        uuid: user ? user.uid : "",
        emailAddress: user ? user.email : "",
        displayName: user ? user.displayName : "",
      })
    );
  });

  "current user", auth.currentUser;
}
