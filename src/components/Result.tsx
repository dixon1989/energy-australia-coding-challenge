import * as React from "react";
import {
  StyledResultHeaderText,
  StyledResult,
  StyledResultFestival,
  StyledResultLabelText,
  StyledResultBandText,
  StyledResultFestivalText,
} from "./StyledResult";
import { FestivalBands } from "../types";

type Props = {
  results?: FestivalBands[];
};

const Result: React.FC<Props> = ({ results }) => {
  return (
    <StyledResult>
      <StyledResultHeaderText>Final Result</StyledResultHeaderText>
      <div>
        {results?.map((label, i) => {
          return (
            <StyledResultFestival key={i}>
              <StyledResultLabelText name={label.name}>{label.name}</StyledResultLabelText>
              <div>
                <ul>
                  {label.bands?.map((label, j) => {
                    return (
                      <li key={j}>
                        <StyledResultBandText>
                          {label.name}
                        </StyledResultBandText>
                        <div>
                          <ul>
                            {label.musicFestivalName?.map((festivalName, k) => {
                              return (
                                <li key={k}>
                                  <StyledResultFestivalText>
                                    {festivalName
                                      ? festivalName
                                      : "[ No festivals ]"}
                                  </StyledResultFestivalText>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </StyledResultFestival>
          );
        })}
      </div>
    </StyledResult>
  );
};

export default Result;
