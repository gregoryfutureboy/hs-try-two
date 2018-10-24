import React, { Component } from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  color: ${props => props.theme.blue};
`;

class Landing extends Component {
  render() {
    return <StyledTitle>Hello World</StyledTitle>;
  }
}

export default Landing;
