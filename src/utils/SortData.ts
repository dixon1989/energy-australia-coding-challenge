import { MusicFestival, Band, FestivalBands } from "../types";

/* 
  Requirement: at the top level, it should show the band record label, 
  below that it should list out all bands under their management, 
  and below that it should display which festivals they've attended, if any.
*/
export const getFestivalsData = (festivalData: MusicFestival[] = []) => {
  if (festivalData.length === 0) {
    return;
  }
  let filteredFestivalArray: FestivalBands[] = [];
  festivalData.forEach((festival: MusicFestival) => {
    const bands: Band[] = festival.bands;
    bands.forEach((band) => {
      /* 
        Part 1 -
        When analysing the data, I found out that there are record label that are empty or not exist. 
        I am handling them by adding the band into an [ Unknown Label ].
      */
      const label = band.recordLabel ? band.recordLabel : "[ Unknown Label ]";

      // -1 === New Record --- If same recordLabel was found or exist in array return the position of the index.
      const filterFestivalIndex: number = filteredFestivalArray.length
        ? filteredFestivalArray.findIndex(
            (record: FestivalBands) => record.name === label
          )
        : -1;

      /* 
        Part 2 -
        If record exist locate the previous record and add new band to the existing recordLabel
        Else create a new index position of record. 
      */
      if (filterFestivalIndex > -1) {
        /* 
          This part will check if the band name has already exist inside recordLabel
          If exist, add the new string record into musicFestivalName Array
          Else create a new index position of record with its new musicFestivalName Array. 
        */

        // -1 === New Record --- If same band name was found or exist in array return the position of the index.
        const filterBandIndex: number = filteredFestivalArray[
          filterFestivalIndex
        ].bands.length
          ? filteredFestivalArray[filterFestivalIndex].bands.findIndex(
              (record) => record.name === band.name
            )
          : -1;

        /*
          Part 3 -
          If band name exist push into existing musicFestivalName else add a new record.
        */
        if (filterBandIndex > -1) {
          // Ensure that music festival name does not contain any duplicates string data. Distinct.
          // If exists Ignore else push in new music festival name
          filteredFestivalArray[filterFestivalIndex].bands[
            filterBandIndex
          ].musicFestivalName?.indexOf(festival.name) === -1 &&
            filteredFestivalArray[filterFestivalIndex].bands[
              filterBandIndex
            ].musicFestivalName?.push(festival.name);
        } else {
          filteredFestivalArray[filterFestivalIndex].bands.push({
            name: band.name,
            musicFestivalName: [festival.name],
          });
        }
      } else {
        filteredFestivalArray.push({
          name: label,
          bands: [{ name: band.name, musicFestivalName: [festival.name] }],
        });
      }
    });
  });

  /*
      Part 4 -
      Finally, sort by recordLable name Alphacetically.
  */
  return sortByName(filteredFestivalArray);
};

// Sorting by band name alphabethically. Requirement: All entries should be sorted alphabetically.
export const sortByName = (list: FestivalBands[]) => {
  return list.sort((a: FestivalBands, b: FestivalBands) =>
    (a.name as string) > (b.name as string) ? 1 : -1
  );
};
