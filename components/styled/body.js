import styled from "styled-components";

export const TitleContainerPrimary = styled.div`
  display: inline-block;
  position: relative;
  padding-right: 25px;
  padding-bottom: 15px;
  width: fit-content;
  &::after {
    position: absolute;
    opacity: 0.45;
    top: 10px;
    left: 80%;
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

export const BodyTitle = styled.h2`
  ::before {
    display: block;
    position: absolute;
    content: "";
    width: 100%;
    background-color: #353535;
    height: 2px;
    bottom: 30px;
  }
  ::after {
    display: block;
    position: absolute;
    content: "";
    width: 30px;
    background-color: white;
    height: 2px;
    bottom: 30px;
  }
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
  & > .section-title:not(:first-child) {
    margin-top: 30px;
  }
  width: ${(props) => (props.full === true ? "100%" : "50%")};
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
    padding: 5px 10px;
    margin: 3px 2px;
    font-size: 13px;
  }
`;
export const SkillsListItem = styled.li``;
export const TimeLine = styled.div``;
export const TimeLineItem = styled.div`
  position: relative;
  display: table;
  table-layout: fixed;
  width: 100%;
  padding-bottom: 15px;
`;
export const TimeLineLeft = styled.div`
  width: 30%;
  display: table-cell;
  padding-right: 25px;
  min-height: 100%;
  text-align: right;
  vertical-align: top;
`;
export const TimeLineLeftPeriod = styled.h5`
  color: #aaa;
  margin: 3px 0;
  font-size: 14px;
  line-height: 1.4em;
`;
export const TimeLineLeftTitle = styled.span`
  display: block;
  margin: 0 0 4px;
  font-size: 13px;
  font-weight: 300;
  line-height: 1.45em;
  color: #a5a6a7;
`;
export const TimeLineRight = styled.div`
  margin-top: 0;
  width: 70%;
  display: table-cell;
  padding-left: 25px;
  padding-right: 15px;
  vertical-align: top;
  color: white;
`;
export const TimeLineRightTitle = styled.h4`
  margin-top: 0;
  font-size: 16px;
  margin-bottom: 3px;
`;
export const TimeLineRightDescription = styled.span`
  font-size: 0.92em;
`;
export const TimeLineDivider = styled.div`
  position: absolute;
  top: 0;
  left: 30%;
  bottom: 0;
  width: 1px;
  background-color: #444;
  ::before {
    content: "";
    display: block;
    position: absolute;
    margin-top: 4px;
    width: 17px;
    height: 17px;
    position: absolute;
    margin-left: -8px;
    border-radius: 10px;
    background-color: #04b4e0;
    opacity: 0.25;
    z-index: 0;
  }
  ::after {
    content: "";
    display: block;
    position: absolute;
    margin-top: 8px;
    width: 6px;
    height: 6px;
    margin-left: -4.5px;
    background-color: #222;
    border-radius: 5px;
    border: 2px solid #04b4e0;
    z-index: 1;
  }
`;

export const ShadowBox = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  display: block;
  margin: 0 10px 15px;
  background: #333;
  padding: 15px 10px 15px;
  border: 2px solid #444;
  border-radius: 10px;
  box-shadow: none;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  cursor: ${(props) => (props.zoomable === true ? "pointer" : "auto")};
  :hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 17px rgba(0, 0, 0, 0.12);
  }
`;
export const ShadowBoxContainer = styled.div`
  display: flex;
`;
export const ShadowBoxText = styled.span`
  font-size: small;
  color: #bdbdbd;
  margin: 10px -30px 0;
`;

export const CenterImageDiv = styled.div`
  flex-direction: column;
  position: relative;
  max-width: 125px;
  display: flex;
  margin: auto;
`;
export const CenterImage = styled.img`
  width: 100%;
  border-radius: 10px;
  max-width: 250px;
`;
export const ShadowTable = styled.table`
  position: relative;
  text-align: center;
  width: 100%;
  margin: 0 10px 15px;
  background: #333;
  padding: 15px 10px 15px;
  border: 2px solid #444;
  border-radius: 10px;
  box-shadow: none;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 17px rgba(0, 0, 0, 0.12);
  }
`;
export const ShadowTableRow = styled.tr`
  color: white;
`;
export const ShadowTableColumn = styled.td`
  padding: 5px 0;
  :nth-child(2) {
    color: #bdbdbd;
  }
`;
export const LanguageSpan = styled.span`
  border-bottom: 2px solid #04b4e0;
`;

export const TimeLineSecondary = styled.div`
  ::before,
  ::after {
    content: " ";
    display: table;
  }
`;
export const TimeLineSecondaryItem = styled.div`
  :first-child {
    padding-top: 3px;
  }
  position: relative;
  padding: 25px 0 20px 40px;
  ::before {
    content: "";
    position: absolute;
    display: block;
    height: 100%;
    background-color: #333;
    width: 1px;
    left: 15px;
    bottom: 5px;
  }
  ::after {
    content: "";
    position: absolute;
    display: block;
    height: 1px;
    background-color: #333;
    width: calc(100% - 15px);
    left: 15px;
    bottom: 3px;
  }
`;
export const TimeLineSecondaryItemPeriod = styled.h5`
  margin-top: 0;
  display: inline-block;
  position: relative;
  font-size: 12px;
  font-weight: 500;
  margin: 0 0 5px -40px;
  color: #d5d5d5;
  background-color: #222;
  padding: 0 10px;
  line-height: 23px;
  border: 2px solid #007ced;
  border-radius: 30px;
`;
export const TimeLineSecondaryItemCompany = styled.span`
  display: inline-block;
  font-size: 12px;
  color: #aaa;
  opacity: 0.7;
  margin-left: 5px;
`;
export const TimeLineSecondaryItemTitle = styled.h4`
  margin: 10px 0 7px;
  color: #f5f5f5;
  line-height: 1.2;
`;
export const TimeLineSecondaryItemDescription = styled.p`
  color: #a5a6a7;
`;

export const FooterContainer = styled.div`
  background-color: #333;
  border-top: 2px solid #444;
  padding: 30px 0;
  text-align: center;
`;
export const FooterText = styled.span`
  color: white;
`;
