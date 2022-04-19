import api from "../apiService";
import config from "../../config/apiConfig";
import axios from "axios";

jest.mock("axios");

const cities = [{ country_code: "RUS", name: "Novosibirsk", code: "NSK" }];

describe("Test API Service", () => {
  it("Success fetch cities", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: cities }));
    await expect(api.cities()).resolves.toEqual(cities);
    expect(axios.get).toHaveBeenCalledWith(`${config.url}/cities`);
  });

  it("Fetch cities failure", async () => {
    const err = "Api error";
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(err)));
    await expect(api.cities()).rejects.toThrow(err);
  });
});
