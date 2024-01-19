import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  uuid: "",
  emailAddress: "",
  displayName: "",
  loading: true,
};

const authenticationReducer = createSlice({
  name: "authentication",
  initialState: defaultState,
  reducers: {
    setAuthentication: (state, action) => {
      state.uuid = action.payload.uuid;
      state.emailAddress = action.payload.emailAddress;
      state.displayName =
        action.payload.displayName || action.payload.emailAddress.slice(0, 2);
      state.loading = action.payload.loading;
    },
  },
});

export const { setAuthentication } = authenticationReducer.actions;

export default authenticationReducer.reducer;
