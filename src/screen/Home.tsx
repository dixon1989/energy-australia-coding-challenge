import * as React from "react";
import { getDataResults } from "../api";

const Home: React.FC = () => {
  const [bandData, setBandData] = React.useState<any>();
  React.useEffect(() => {
    // Should Start grabbing data from webServices API
    const load = async () => {
        setBandData(await getDataResults());
    };
    load();
  }, []);
  console.log("from home", bandData)
  return (
    <></>
  );
};

export default Home;
