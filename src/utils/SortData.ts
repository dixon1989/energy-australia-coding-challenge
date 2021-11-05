import { MusicFestival, Band, FestivalBands } from "../types";

export const parseFestivalsData = (festivalData: MusicFestival[] = []) => {
  if (festivalData.length === 0) {
    return;
  }
  let filteredArray: FestivalBands[] = [];
  festivalData.forEach((festival: MusicFestival) => {
    const bands: Band[] = festival.bands;
    bands.forEach((band) => {
      const filterIndex: number = filteredArray.length
        ? filteredArray.findIndex(
            (record: any) => record.name === band.recordLabel
          )
        : -1;
      filterIndex > -1
        ? filteredArray[filterIndex].bands.push({
            name: band.name,
            musicFestivalName: festival.name,
          })
        : filteredArray.push({
            name: band.recordLabel,
            bands: [{ name: band.name, musicFestivalName: festival.name }],
          });
    });
  });
  sortByName(filteredArray);
};

// Sorting by band name alphabethically
export const sortByName = (list: FestivalBands[]) => {
  return list.sort((a: FestivalBands, b: FestivalBands) =>
    (a.name as string) > (b.name as string) ? 1 : -1
  );
};
