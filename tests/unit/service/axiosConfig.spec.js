import axios from "axios";
import axiosObj from "../../../src/service/axiosonfig";

jest.mock("../../../src/service/axiosonfig");
describe("In clientApi", () => {
  const baseURL = "https://api.tvmaze.com";

  it("clientApi to be defined", () => {
    expect(axiosObj).toBeDefined();
  });
  it("axios.create sets the baseUrl", () => {
    const expected = axios.create({
      baseURL,
    });
    expect(axiosObj.baseURL).toEqual(expected.baseURL);
  });
});
