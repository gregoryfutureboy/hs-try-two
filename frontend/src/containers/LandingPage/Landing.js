import React, { Component } from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  color: ${props => props.theme.blue};
`;

const StyledPara = styled.p`
  font-family: "AvenirNext-Regular";
  font-size: 1.5rem;
`;

class Landing extends Component {
  render() {
    return (
      <div>
        <StyledTitle>Hello World</StyledTitle>
        <StyledPara>
          Helojdflsjflsdjfldsj jdsalfjdlsaj fdlsjfsldajf lsdfjlds jflsdjf
          dsljflsda jflsadjflsajfd
        </StyledPara>
      </div>
    );
  }
}

export default Landing;
