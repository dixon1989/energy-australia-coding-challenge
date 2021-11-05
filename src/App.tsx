import React from "react";
import {
  StyledMain,
  StyledHeader,
  StyledHeaderText,
  StyledImg,
} from "./StyledApp";
import Home from "./screen/Home";
import Logo from "./assets/energyLogo.png";

// Delaring Function Component Type for App.js and Adding Styled Components onto respective HTML Tags
const App: React.FC = () => {
  return (
    <StyledMain>
      <StyledHeader>
        <StyledImg src={Logo} alt={"Energy Australia Logo"} />
        <StyledHeaderText>Your team is tasked with listing out music festival data in a particular manner: at the top level, it should show the band record label, below that it should list out all bands under their management, and below that it should display which festivals they've attended, if any. All entries should be sorted alphabetically.</StyledHeaderText>
      </StyledHeader>
      <Home />
    </StyledMain>
  );
};

export default App;
