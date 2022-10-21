import styled from "styled-components";
import { device, theme } from "../../../Theme";

export const Main = styled.div`
  font-family: ${(props) => props.theme.font};
  width: 100%;
  display: flex;
  margin-bottom: 5rem;
  flex-direction: column;

  @media ${device.laptop} {
    width: 96%;
  }

  @media ${device.wide} {
    width: 97%;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-top: 2px solid black;
  @media ${device.small} {
    flex-direction: column;
    border-top: none;
  }
`;

export const StyledContainer = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
  padding: 2rem;
  height: 100%;
  margin: 0 auto;
  font-family: ${(props) => props.theme.font};
  font-size: ${theme.fontSizes.medium};
  display: flex;
  flex-direction: column;
  background: #F5F5F5;
  justify-content: space-evenly;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.43);
  overflow: auto;
  @media ${device.laptop}, ${device.wide} {
    margin: 0 auto 6rem auto;
    width: 75rem;
  }
  @media ${device.small} {
    width: 30rem;
    margin: 0 auto 6rem auto;
  }
  @media ${device.medium} {
    width: 45rem;
    margin: 0 auto 6rem auto;
  }
  @media ${device.ipad} {
    width: 55rem;
    margin: 0 auto 6rem auto;
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

export const Description = styled.div`
  width: 25rem;
  font-size: ${(props) => props.theme.fontSizes.small};
  padding: 1rem;
  background: ${(props) => props.theme.colors.yellow};
  order: 2;
  display: flex;
  flex-direction: column;
  border-right: 2px solid black;
  justify-content: space-between;
  @media ${device.ipad}, ${device.laptop}, ${device.wide} {
    font-size: ${(props) => props.theme.fontSizes.medium};
    padding: 2rem;
  }
  @media ${device.small} {
    border-bottom: 2px solid black;
    border-right: none;
    width: auto;
  }
`;
export const Middle = styled.div`
  width: 25rem;
  min-height: 25rem;
  height: 100%;
  padding: 1rem;
  order: 3;
  font-size: ${(props) => props.theme.fontSizes.small};
  display: flex;
  flex-direction: column;
  & > p {
    margin: 0.5rem 0;
  }
  :nth-child(3) {
    background: ${(props) => props.theme.colors.yellow};
  }
  @media ${device.ipad}, ${device.laptop}, ${device.wide} {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontSizes.medium};
    :nth-child(2) {
      border-right: 2px solid black;
    }
  }
  @media ${device.small} {
    border-bottom: 2px solid black;
    width: auto;
    min-height: 0;
    :nth-last-child(1) {
			border-bottom: 0px solid black;
		}
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  background: none;
  padding: 1rem;
  border: none;
  cursor: pointer;
  :nth-child(1) {
    border-right: 2px solid black;
  }
`;

export const RecipeName = styled.h1`
  justify-content: center;
  text-align: center;
  font-weight: 800;
  font-size: ${(props) => props.theme.fontSizes.XL};
  @media ${device.small} {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
  @media ${device.small}, ${device.medium}, ${device.large}, ${device.ipad} {
    text-align: center;
  }
`;

export const Category = styled.h2`
  margin: 1rem 0 0.5rem 0;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
`;

export const BottomDesc = styled.div`
  & > div > p {
    margin: 0;
    font-weight: 600;
    font-size: ${(props) => props.theme.fontSizes.small};
  }
  & > ul {
    margin: 0 auto;
  }
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Modification = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  @media ${device.wide}, ${device.laptop} {
    border-top: 2px solid black;
  }
`;
export const DeleteModalContainer = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 1;
  display: flex;
  align-items: center;
  transition: all 200ms ease-in-out;
`;

export const DeleteModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  z-index: 1;
  width: 30%;
  height: 40%;
  background: white;
  color: black;
  border-radius: 5px;
  margin: 0 auto;
  font-size: ${(props) => props.theme.fontSizes.medium};
  padding: 1rem;
  @media ${device.small} {
    width: 100%;
  }
`;

export const DeleteBtn = styled.button`
  width: 7rem;
  height: 3rem;
  color: white;
  background: black;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const DeleteRow = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 2rem;
  justify-content: space-around;
`;
