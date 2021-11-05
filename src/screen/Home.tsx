import * as React from "react";
import { getDataResults } from "../api";
import { MusicFestival } from "../types";
import { parseFestivalsData } from "../utils";

const Home: React.FC = () => {
  const [festivalData, setFestivalData] = React.useState<MusicFestival[]>();
  React.useEffect(() => {
    // Should Start grabbing data from webServices API
    const load = async () => {
      setFestivalData(await getDataResults());
    };
    load();
  }, []);

  let festivalList = festivalData ? parseFestivalsData(festivalData) : undefined
  
  return (
    <></>
  );
};

export default Home;
