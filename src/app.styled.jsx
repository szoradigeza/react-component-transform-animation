import styled, {
  css,
  keyframes,
  FlattenSimpleInterpolation
} from "styled-components";

const animationOne = keyframes`
  from {margin-left: 0px;}
  to {margin-left: 45%}
`;

const rotate = keyframes`
  from {top: 0px;}
  to {top: 200px; background-color: red; border-radius: 0%;}
`;

const animationTwo = keyframes`
  from {margin-left: 45%}
  to {margin-left: 90%}
`;

export const testComponent = styled.div((prop) => {
  console.log(prop);
  return css`
    margin-left: 0px;
    margin-top: 25%;
    border-radius: 50%;
    position: absolute;
    height: 100px;
    width: 100px;
    background-color: red;
    animation: ${(props) =>
      props.animate &&
      css`
        ${animationOne} 2s linear
      `};
  `;
});

export const testComponentTwo = styled.div((props) => {
  return css`
    margin-top: 25%;
    margin-left: 90%;
    margin-right: auto;
    border-radius: 50%;
    position: absolute;
    height: 100px;
    width: 100px;
    background-color: red;
    animation: ${(props) =>
      props.animate &&
      css`
        ${animationTwo} 2s linear
      `};
  `;
});
