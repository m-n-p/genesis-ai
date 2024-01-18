import { createAsyncThunk } from "@reduxjs/toolkit";

const getGetCurrentThread = createAsyncThunk(
  "chatPanel/getCurrentThread",
  async (payload, thunkAPI) => {
    const {
      chatPanel: { conversations },
    } = thunkAPI.getState();
    let convoId =
      payload?.conversationId !== "newThread" ? payload?.conversationId : "";

    let returnThreads = [];
    if (conversations?.length > 0) {
      returnThreads = await conversations.filter(
        (x) => x.conversation_id === convoId
      );
    }

    return {
      threads: returnThreads?.length > 0 ? returnThreads[0]?.thread : [],
      mind: returnThreads?.length > 0 ? returnThreads[0]?.mind : "",
      conversationId:
        payload?.conversationId !== "newThread" ? payload?.conversationId : "",
    };
  }
);

export default getGetCurrentThread;
