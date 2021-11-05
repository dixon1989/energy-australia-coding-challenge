import { MusicFestival, Band } from "../types";

export const parseFestivalsData = (festivalData: MusicFestival[] = []) => {
  if (festivalData.length === 0) {
    return;
  }
  festivalData.forEach((festival: MusicFestival) => {
    const bands: Band[] = festival.bands;
    bands.forEach((band) => {
      // getting list of band and their festival name
      console.log(band);
      console.log(festival.name);
    });
  });
};
