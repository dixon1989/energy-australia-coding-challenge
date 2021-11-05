import axios from "axios";

// Using Axios as mock retrieving json data
export const getDataResults = async () => {
  // hosting proxy server to bypass CORS error.
  // (You will need to access to that link to request a temporary access to a demo server)
  const serverBypass = "https://cors-anywhere.herokuapp.com/";
  try {
    const req = await axios.get(
      serverBypass +
        `https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals`
    );
    if (req.status === 200) {
      let data = req.data;
      return data;
    }
  } catch (error) {
    console.log("Couldnt Retrieve Data: ", error);
  }
};
