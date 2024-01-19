import { createSlice, current } from "@reduxjs/toolkit";
import { getAllThreads } from "./actions/getAllThreads";
import createNewQuestion from "./actions/conversation";

const initialState = {
  conversations: [],
  activeThread: null,
  loadingView: true,
};

const chatPanelSlice = createSlice({
  initialState: initialState,
  name: "chatPanel",

  reducers: {
    selectRole: (state, action) => {
      state.conversations.filter(
        (x) => x.conversation_id === state.activeThread
      ).mind = action.payload.mind;
    },
    createNewThread: (state) => {
      let findIndex = state.conversations.findIndex(
        (x) => x.conversation_id === "newThread"
      );
      if (findIndex !== -1) {
        return;
      }
      let newThread = {
        mind: "",
        conversation_id: "newThread",
        title: "New Question",
        thread: [],
        newThread: true,
      };
      state.conversations = [newThread, ...state.conversations];
    },
    switchActiveThread: (state, action) => {
      state.activeThread = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllThreads.fulfilled, (state, action) => {
      state.loadingView = false;
      state.conversations = action.payload.conversations;
    });

    builder.addCase(createNewQuestion.fulfilled, (state, action) => {
      console.log(action.payload, "chat");
      if (action.payload.success) {
        let initialiseThreads = current(state.conversations);
        let newThreads = [...initialiseThreads];
        let activeThreadId = state.activeThread;
        console.log(activeThreadId);
        let activeThread = newThreads.findIndex(
          (x) => x.conversation_id === activeThreadId
        );

        console.log(newThreads, activeThreadId, activeThread);
        let result = {
          query: action.payload.query,
          answer: action.payload.answers,
        };
        state.conversations[activeThread] = {
          ...state.conversations[activeThread],
          conversation_id: action.payload.conversationId,
          title: action.payload.query,
          newThread: false,
          mind: action.payload.role,
          thread: [result, ...state.conversations[activeThread].thread],
        };

        state.activeThread = action.payload.conversationId;
      }
    });
  },
});

export const { selectRole, createNewThread, switchActiveThread } =
  chatPanelSlice.actions;

export default chatPanelSlice.reducer;
