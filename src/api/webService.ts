import axios from "axios";

// Using Axios as mock retrieving json data
export const getDataResults = async () => {
  try {
    const req = await axios.get(
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
