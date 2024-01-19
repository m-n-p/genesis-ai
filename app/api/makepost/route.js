import axios from "axios";
import { NextResponse } from "next/server";

const instance = axios.create({
  baseURL: "https://api.montaignelabs.com/genesis",
});

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { endpoint, data } = body;
    console.log(endpoint, data);
    const response = await axios.post(
      `https://api.montaignelabs.com/genesis${endpoint}`,
      data
    );
    console.log(response?.data);
    return NextResponse.json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
