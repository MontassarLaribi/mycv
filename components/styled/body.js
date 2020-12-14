import styled from "styled-components";

export const TitleContainerPrimary = styled.div`
  display: inline-block;
  position: relative;
  padding-right: 25px;
  padding-bottom: 15px;
  &::after {
    position: absolute;
    opacity: 0.45;
    top: 10px;
    left: 120px;
    content: "";
    height: 30px;
    width: 50px;
    background-image: -webkit-repeating-radial-gradient(
      center center,
      #ff9800,
      #ff9800 1px,
      transparent 0px,
      transparent 100%
    );
    background-image: -moz-repeating-radial-gradient(
      center center,
      #ff9800,
      #ff9800 1px,
      transparent 0px,
      transparent 100%
    );
    background-image: -ms-repeating-radial-gradient(
      center center,
      #ff9800,
      #ff9800 1px,
      transparent 0px,
      transparent 100%
    );
    -webkit-background-size: 6px 6px;
    -moz-background-size: 6px 6px;
    background-size: 6px 6px;
    z-index: 0;
  }
`;
export const TitleContainerSecondary = styled.div`
  display: inline-block;
  position: relative;
  padding-right: 25px;
  padding-bottom: 15px;
  &::after {
    position: absolute;
    opacity: 0.45;
    top: 10px;
    left: 65px;
    content: "";
    height: 30px;
    width: 50px;
    background-image: -webkit-repeating-radial-gradient(
      center center,
      #04b4e0,
      #04b4e0 1px,
      transparent 0px,
      transparent 100%
    );
    background-image: -moz-repeating-radial-gradient(
      center center,
      #04b4e0,
      #04b4e0 1px,
      transparent 0px,
      transparent 100%
    );
    background-image: -ms-repeating-radial-gradient(
      center center,
      #04b4e0,
      #04b4e0 1px,
      transparent 0px,
      transparent 100%
    );
    -webkit-background-size: 6px 6px;
    -moz-background-size: 6px 6px;
    background-size: 6px 6px;
    z-index: 0;
  }
`;

export const BodyTitle = styled.h2`
  color: #04b4e0;
  text-align: left;
  text-transform: uppercase;
  margin-top: 0;
`;

export const BodySubTitle = styled.h3`
  color: #ff9800;
  text-align: left;
  text-transform: uppercase;
  font-weight: 400;
  font-size: smaller;
  margin-bottom: 0;
  margin-top: 25px;
`;
export const BodyTitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BodySectionContainer = styled.div`
  margin-left: 20px;
`;
export const BodySectionColumn = styled.div`
  width: 50%;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;
export const BodySectionFlex = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const SkillsList = styled.ul`
  & > li {
    display: inline-block;
    background-color: #04b4e0;
    border-radius: 3px;
    color: #fff;
    padding: 1px 10px;
    margin: 3px 2px;
    font-size: 13px;
  }
`;
export const SkillsListItem = styled.li``;
