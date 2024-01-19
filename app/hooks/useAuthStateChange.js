"use client";
import { setAuthentication } from "../(landing-pages)/reducer";
import { auth } from "../lib/firebase";
import { useAppDispatch } from "../store";

export function useAuthStateChange() {
  const dispatch = useAppDispatch();

  auth.onAuthStateChanged((user) => {
    console.log(user, ";user");
    if (user !== null) {
      dispatch(
        setAuthentication({
          uuid: user ? user.uid : "",
          emailAddress: user ? user.email : "",
          displayName: user ? user.displayName : "",
          loading: false,
        })
      );
    } else {
      dispatch(
        setAuthentication({
          uuid: "",
          emailAddress: "",
          displayName: "",
          loading: false,
        })
      );
    }
  });
}
