import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import createNewQuestion from "../ChatPanel/actions/conversation";
import getGetCurrentThread from "../ChatPanel/actions/getCurrentThread";

const initialState = {
  chats: {},
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
      state.chats =
        Object.keys(state.chats)?.length > 0
          ? { ...state.chats, result }
          : { result };
    },
  },

  extraReducers(builder) {
    builder.addCase(createNewQuestion.fulfilled, (state, action) => {
      if (action.payload.success) {
        let keys = Object.keys(state.chats);
        let lastKey = keys[keys.length - 1];
        let lastObject = state.chats[lastKey];
        console.log(action.payload, lastObject, "action.payload");
        lastObject.answer = action.payload?.answers;
        lastObject.loading = false;
        console.log(action.payload);
        state.chats[lastKey] = lastObject;
        state.conversationId = action.payload.conversationId;
      } else {
        let keys = Object.keys(state.chats);
        let lastKey = keys[keys.length - 1];
        delete state.chats[lastKey];
        state.conversationId = "";
      }
    });

    builder.addCase(getGetCurrentThread.fulfilled, (state, action) => {
      state.chats = action.payload.threads ? action.payload.threads : {};
      state.conversationId = action.payload.conversationId;
      state.mind = action.payload.mind;

      console.log(action.payload, "returned payload");
    });
  },
});

export const { selectRole, addQuestionToList } = conversationPanelSlice.actions;

export default conversationPanelSlice.reducer;
