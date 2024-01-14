import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import createNewQuestion from "../ChatPanel/actions/conversation";
import getGetCurrentThread from "../ChatPanel/actions/getCurrentThread";
import { updateNewThread } from "../ChatPanel/reducers";

const initialState = {
  chats: [],
  mind: "",
  conversationId: "",
};

const conversationPanelSlice = createSlice({
  name: "conversationPanel",
  initialState: initialState,

  reducers: {
    selectRole: (state, action) => {
      state.mind = action.payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(createNewQuestion.fulfilled, (state, action) => {
      console.log(action.payload);
      let result = {
        query: action.payload.query,
        answer: action.payload.answers,
      };
      console.log(result, "result");
      state.chats = { ...state.chats, result };
      state.conversationId = action.payload.conversationId;
      // updateNewThread({
      //   conversationId: action.payload.conversationId,
      //   mind: action.payload.role,
      //   title: action.payload.query,
      // });
    });

    builder.addCase(getGetCurrentThread.fulfilled, (state, action) => {
      state.chats = action.payload.threads ? action.payload.threads : {};
      state.conversationId = action.payload.conversationId;
      state.mind = action.payload.mind;

      console.log(action.payload, "returned payload");
    });
  },
});

export const { selectRole } = conversationPanelSlice.actions;

export default conversationPanelSlice.reducer;
