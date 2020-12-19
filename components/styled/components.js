import styled from "styled-components";

export const MainApp = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #222;
  /* background: linear-gradient(#000000, #2e2e2e); */
  @media only screen and (max-width: 1024px) {
    height: auto;
  }
`;

export const MonitorWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  position: relative;
  display: flex;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ResumeSection = styled.div`
  position: fixed;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 25%;
  word-break: break-word;
  overflow-y: auto;
  background-color: #333;
  border-right: 2px solid #444;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }

  @media only screen and (max-width: 1024px) {
    position: initial;
    width: 100%;
    overflow-y: initial;
    margin-top: 100px;
    background-color: initial;
    border-right: none;
  }
`;

export const DetailsSection = styled.div`
  margin-left: 25%;
  margin-top: 70px;
  height: 100%;
  width: 75%;
  /* background-color: rgb(255, 255, 255, 0.4); */

  @media only screen and (max-width: 1024px) {
    margin-left: auto;
    width: 100%;
  }
`;

export const ProfileImageWrapper = styled.div`
  margin: 10px 75px;
  position: relative;
  align-self: center;
  ::before {
    position: absolute;
    top: 15px !important;
    bottom: -10px !important;
    left: 15px !important;
    right: -15px !important;
    border: 4px solid #04b4e0;
    border-radius: 10px;
    content: "";
    max-width: 250px;
  }
`;
export const ProfileImageDiv = styled.div`
  position: relative;
  max-width: 250px;
`;
export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #ff9800;
  max-width: 250px;
`;

export const ResumeTitle = styled.h2`
  color: #04b4e0;
  text-align: center;
  text-transform: uppercase;
  margin-top: 0;
`;

export const ResumeSubTitle = styled.h3`
  color: #ff9800;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  font-size: smaller;
  margin-bottom: 0;
  margin-top: 25px;
`;

export const ResumeDescription = styled.p`
  margin: 10px 25px;
  color: #bdbdbd;
  text-align: justify;
`;

export const ThemeColoredText = styled.span`
  color: #04b4e0;
`;
export const ThemeColoredTextSecondary = styled.span`
  color: #ff9800;
`;

export const BoldText = styled.span`
  color: white;
  font-weight: 600;
`;

export const ResumeList = styled.ul`
  list-style: none;
  color: #bdbdbd;
  margin: 10px 25px;
  padding: 0;
`;
export const ResumeListItem = styled.li`
  margin: 10px 0;
  & > a {
    color: #ff9800;
  }
`;
export const IcoFontIcon = styled.i`
  color: #04b4e0;
  font-size: 25px;
`;
export const DownloadButton = styled.button`
  max-width: 200px;
  text-transform: uppercase;
  color: white;
  background-color: #04b4e0;
  border: 0;
  border-radius: 5px;
  padding: 10px;
  align-self: center;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
`;

export const FlipWrapper = styled.div`
  height: 40px;
  overflow: hidden;
`;
export const FlipText = styled.ul`
  text-align: center;
  margin-top: 0;
  padding-left: 0;
  list-style: none;
  animation: 6s linear 0s normal none infinite change;
  & > li {
    line-height: 40px;
    margin: 0;
  }

  @-webkit-keyframes opacity {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes opacity {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes change {
    0% {
      margin-top: 0;
    }
    15% {
      margin-top: 0;
    }
    25% {
      margin-top: -40px;
    }
    40% {
      margin-top: -40px;
    }
    50% {
      margin-top: -80px;
    }
    65% {
      margin-top: -80px;
    }
    75% {
      margin-top: -40px;
    }
    85% {
      margin-top: -40px;
    }
    100% {
      margin-top: 0;
    }
  }
  @keyframes change {
    0% {
      margin-top: 0;
    }
    15% {
      margin-top: 0;
    }
    25% {
      margin-top: -40px;
    }
    40% {
      margin-top: -40px;
    }
    50% {
      margin-top: -80px;
    }
    65% {
      margin-top: -80px;
    }
    75% {
      margin-top: -40px;
    }
    85% {
      margin-top: -40px;
    }
    100% {
      margin-top: 0;
    }
  }
`;
