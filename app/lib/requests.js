import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.montaignelabs.com/genesis",
});

const getRequest = async (endpoint) => {
  try {
    const response = await instance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(`Error in GET request: ${error}`);
    const axiosError = error;
    return (
      axiosError?.response?.data || { error: "An error occurred", status: 500 }
    );
  }
};

// const postRequest = async (endpoint, data) => {
//   try {
//     const response = await instance.post(endpoint, data);
//     return response.data;
//   } catch (error) {
//     console.error(`Error in POST request: ${endpoint} ${error}`);
//     const axiosError = error;
//     return (
//       axiosError?.response?.data || { error: "An error occurred", status: 500 }
//     );
//   }
// };

const postRequest = async (endpoint, data) => {
  try {
    let sendata = {
      endpoint: endpoint,
      data: data,
    };
    // const response = await axios.post(
    //   "http://localhost:4000/api/makepost",
    //   sendata
    // );

    let response = await fetch(`http://localhost:4000/api/makepost`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendata),
    });
    response = await response.json();
    return response.data;
  } catch (error) {
    console.error(`Error in POST request: ${endpoint} ${error}`);
    const axiosError = error;
    return (
      axiosError?.response?.data || { error: "An error occurred", status: 500 }
    );
  }
};

const isError = (data) => {
  return data.error !== undefined && data.status !== undefined;
};

export { getRequest, postRequest, isError };
