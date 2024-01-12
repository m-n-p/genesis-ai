import { createSlice } from "@reduxjs/toolkit";
import { getAllThreads } from "./actions/getAllThreads";

const initialState = {
  threads: {},
};

const chatPanelSlice = createSlice({
  initialState: initialState,
  name: "chatPanel",

  reducers: {
    selectRole: (state, action) => {
      state.threads.conversations[action.payload.conversationId].mind =
        action.payload.mind;
    },
    createNewThread: (state) => {
      console.log(state, "state thresasd");
      let newThread = {
        mind: "",
        conversationId: "",
        title: "New Question",
        threads: {},
      };
      state.threads.conversations = {
        newThread,
        ...state.threads.conversations,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllThreads.fulfilled, (state, action) => {
      console.log(action.payload, "actions");
      state.threads = action.payload.threads;
    });
  },
});

export const { selectRole, createNewThread } = chatPanelSlice.actions;

export default chatPanelSlice.reducer;
