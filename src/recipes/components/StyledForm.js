import styled from "styled-components";
import { device, theme } from "../../Theme";

export const ProgressLabel = styled.h1`
  text-align: center;
  background: ${(props) => props.theme.colors.yellow};
  width: 15rem;
  border: 0.15rem solid black;
  margin: 0.5rem auto;
  font-size: ${(props) => props.theme.fontSizes.XL};
`;

//login and signup
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 79%;
  font-family: ${(props) => props.theme.font};
  margin: 0 auto;
  text-align: left;
`;

export const StyledForm = styled.form`
  width: 60%;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 2rem;
  height: 100%;
  margin: 0 auto;
  font-family: ${(props) => props.theme.font};
  font-size: ${theme.fontSizes.medium};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.43);
  overflow: auto;
  @media ${device.laptop}, ${device.wide} {
    margin: 0 auto 6rem auto;
  }
  @media ${device.small} {
    width: 90%;
    margin: 0 auto 2rem auto;
  }
  @media ${device.medium} {
    width: 75%;
    margin: 0 auto 4rem auto;
  }

  & > p {
    margin: 0;
    padding: -1rem 0 0 0;
    font-size: 16px;
    color: #ff0000;
  }
  & > div {
    margin: 0.5rem 0;
  }
`;
export const TextInput = styled.input`
  border-radius: 8px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin: 0.5rem 0;
  width: 100%;
  height: 3rem;
  padding: 0.5rem;
  border: 1px solid black;
`;
export const TextArea = styled.textarea`
  border-radius: 8px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-family: ${(props) => props.theme.font};
  margin: 0.5rem 0;
  width: 100%;
  height: 6rem;
  padding: 0.5rem;
  border: 1px solid black;
`;
export const Submit = styled.button`
  font-family: ${(props) => props.theme.font};
  font-size: 26px;
  /* width: 8rem; */
  height: auto;
  background: black;
  color: white;
  padding: 0.5rem;
  float: right;
  border: none;
  cursor: pointer;
`;

export const HourMinute = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  @media ${device.small} {
    flex-direction: column;
    width: 100%;
  } 
`;

export const ImageUpload = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: black;
  color: white;
  width: 100%;
  height: 5rem;
  text-align: center;
  @media ${device.laptop}, ${device.wide} {
    height: 15rem;
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
`;

export const OtherModalContainer = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 1;
  display: flex;
  align-items: center;
`;

export const OtherModal = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  z-index: 1;
  width: 50%;
  height: 30%;
  background: white;
  color: black;
  border-radius: 5px;
  margin: 0 auto;
  font-size: ${(props) => props.theme.fontSizes.medium};
  padding: 1rem;
`;

export const OtherRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const OtherBtn = styled.button`
  width: 7rem;
  height: 3rem;
  color: white;
  background: black;
  border: none;
  border-radius: 8px;
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: ${(props) => props.theme.fontSizes.small};
`;
