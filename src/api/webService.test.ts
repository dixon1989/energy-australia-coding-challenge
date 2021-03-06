import axios from "axios";

jest.mock("axios");

describe("Get Initial Data from mock JSON API", () => {
  test("Making Sure the given API returns the status code successfully", async () => {
    const request = { status: 200 };
    axios.get = jest.fn().mockResolvedValueOnce(request);
    const mock = await axios.get(
      `https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals`
    );
    expect(mock).toEqual(request);
  });
});
