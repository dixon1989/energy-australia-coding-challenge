import { getFestivalsData } from "./SortData";

describe("Making sure sorting returning data successfully by alphabetical order", () => {
  it("should show the band record label, below that it should list out all bands under their management, and below that it should display which festivals they've attended, if any. All entries should be sorted alphabetically.", () => {
    const lists = [
      {
        name: "LOL-palooza",
        bands: [
          {
            name: "Winter Primates",
            recordLabel: "",
          },
          {
            name: "Frank Jupiter",
            recordLabel: "Pacific Records",
          },
          {
            name: "Frank Jupiter",
            recordLabel: "Pacific Records",
          },
        ],
      },
      {
        name: "Small Night In",
        bands: [
          {
            name: "Winter Primates",
            recordLabel: "",
          },
        ],
      },
    ];
    const expectedResults = [
      {
        name: "Pacific Records",
        bands: [
          {
            name: "Frank Jupiter",
            musicFestivalName: ["LOL-palooza"],
          },
        ],
      },
      {
        name: "[ Unknown Label ]",
        bands: [
          {
            name: "Winter Primates",
            musicFestivalName: ["LOL-palooza", "Small Night In"],
          },
        ],
      },
    ];
    const mock = getFestivalsData(lists);
    expect(mock).toEqual(expectedResults);
  });
});
