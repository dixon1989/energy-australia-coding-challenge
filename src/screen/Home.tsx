import * as React from "react";
import { getDataResults } from "../api";
import { MusicFestival } from "../types";

import Result from "../components/Result";
import { parseFestivalsData } from "../utils";

const Home: React.FC = () => {
  const [festivalData, setFestivalData] = React.useState<MusicFestival[] | undefined>();
  React.useEffect(() => {
    // Should Start grabbing data from webServices API
    const load = async () => {
      setFestivalData(await getDataResults());
    };
    load();
  }, []);

  let festivalList = festivalData ? parseFestivalsData(festivalData) : undefined

  return (
    <>{festivalData ? <Result results={festivalList} /> : <p>No Results Found</p>}</>
  );
};

export default Home;
