import { createAsyncThunk } from "@reduxjs/toolkit";
import { postRequest, isError } from "../../../../lib/requests";
export const getAllThreads = createAsyncThunk(
  "chatPanel/getAllThreads",
  async (payload, thunkAPI) => {
    const {
      authentication: { uuid },
    } = thunkAPI.getState();

    const threads = await postRequest("/user_conv/", {
      user_id: uuid,
    });

    if (isError(threads)) {
      console.log("error");
      return thunkAPI.rejectWithValue({
        message: threads.error,
      });
    }

    console.log(threads, "threads");

    return {
      conversations: threads?.data?.user_info?.conversations
        ? threads.data.user_info.conversations
        : [],
    };
  }
);
