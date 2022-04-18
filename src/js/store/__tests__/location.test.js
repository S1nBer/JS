import locationsInstance, { Locations } from "../location";
import { formatDate } from "../../helpers/date";
import api, { Api } from "../../services/apiService";

const countries = [{ code: "RUS", name: "Russia" }];
const cities = [{ country_code: "RUS", name: "Novosibirsk", code: "NSK" }];
const airlines = [{ country_code: "RUS", name: "Airlines", code: "AVIA" }];

jest.mock("../../services/apiService", () => {
  const mockApi = {
    countries: jest.fn(() =>
      Promise.resolve([{ code: "RUS", name: "Russia" }])
    ),
    cities: jest.fn(() =>
      Promise.resolve([
        { country_code: "RUS", name: "Novosibirsk", code: "NSK" },
      ])
    ),
    airlines: jest.fn(() =>
      Promise.resolve([{ country_code: "RUS", name: "Airlines", code: "AVIA" }])
    ),
  };

  return {
    Api: jest.fn(() => mockApi),
  };
});

const apiService = new Api();

describe("Location store tests", () => {
  beforeEach(() => {
    locationsInstance.countries =
      locationsInstance.serializeCountries(countries);
    locationsInstance.cities = locationsInstance.serializeCountries(cities);
  });
  it("Check that locationsInstance is instance of Locations class", () => {
    expect(locationsInstance).toBeInstanceOf(Locations);
  });

  it("Success Locations instance create", () => {
    const instance = new Locations(api, { formatDate });
    expect(instance.countries).toBe(null);
    expect(instance.shortCitiesList).toEqual({});
    expect(instance.formatDate).toBe(formatDate);
  });

  it("Check correct countries serialize", () => {
    const res = locationsInstance.serializeCountries(countries);
    const expectedData = { RUS: { code: "RUS", name: "Russia" } };
    expect(res).toEqual(expectedData);
  });

  it("Check correct countries serialize with incorrect data", () => {
    const res = locationsInstance.serializeCountries(null);
    const expectedData = {};
    expect(res).toEqual(expectedData);
  });

  it("Check correct cities serialize", () => {
    const res = locationsInstance.serializeCities(cities);
    const expectedData = {
      NSK: {
        country_code: "RUS",
        name: "Novosibirsk",
        code: "NSK",
        country_name: "Russia",
        full_name: "Novosibirsk, Russia",
      },
    };
    expect(res).toEqual(expectedData);
  });

  it("Check correct get city name by code", () => {
    const res = locationsInstance.getCityNameByCode("NSK");
    expect(res).toEqual("Novosibirsk");
  });

  it("Check correct get city name by code", () => {
    const res = locationsInstance.getCityNameByCode("NSK");
    expect(res).toEqual("Novosibirsk");
  });

  it("Check correct init method call", () => {
    const instance = new Locations(apiService, { formatDate });
    expect(instance.init()).resolves.toEqual([countries, cities, airlines]);
  });
});
