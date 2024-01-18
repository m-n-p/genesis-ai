import { createSlice } from "@reduxjs/toolkit";
import createNewQuestion from "../ChatPanel/actions/conversation";
import getGetCurrentThread from "../ChatPanel/actions/getCurrentThread";

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

    addQuestionToList: (state, action) => {
      let result = {
        query: action.payload.query,
        answer: "",
        loading: true,
      };
      let finalState = [...state.chats];
      console.log(finalState, result);
      finalState.push(result);
      console.log(finalState);
      state.chats = finalState;
    },
  },

  extraReducers(builder) {
    builder.addCase(createNewQuestion.fulfilled, (state, action) => {
      console.log(action.payload, "convo");
      if (action.payload.success) {
        let length = state.chats?.length;
        let index = length - 1;
        let finalChats = [...state.chats];
        finalChats[index].answer = action.payload?.answers;
        finalChats[index].loading = false;
        state.chats = finalChats;
        state.conversationId = action.payload.conversationId;
      } else {
        state.chats.pop();
        state.conversationId = "";
      }
    });

    builder.addCase(getGetCurrentThread.fulfilled, (state, action) => {
      let threads = [...action.payload.threads];
      if (threads?.length > 0) {
        threads = threads.reverse();
      }
      state.chats = threads;
      state.conversationId = action.payload.conversationId;
      state.mind = action.payload.mind;
    });
  },
});

export const { selectRole, addQuestionToList } = conversationPanelSlice.actions;

export default conversationPanelSlice.reducer;
