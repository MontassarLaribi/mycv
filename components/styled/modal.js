import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: ${(props) => (props.showModal === true ? "initial" : "none")};
`;
export const ModalBackground = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1042;
  overflow: hidden;
  position: fixed;
  background: #0b0b0b;
  opacity: 0.8;
`;
export const ModalContentWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1043;
  position: fixed;
  outline: none !important;
  backface-visibility: hidden;
`;
export const ModalContainer = styled.div`
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 0 8px;
  box-sizing: border-box;
  ::before {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
`;
export const ModalContent = styled.div`
  opacity: 1;
  transition: all 0.25s ease-out;
  max-width: 100%;
  cursor: auto;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto;
  text-align: left;
  z-index: 1045;
`;
export const ModalContentFigureContainer = styled.div`
  line-height: 0;
  ::after {
    content: "";
    position: absolute;
    left: 0;
    top: 40px;
    bottom: 40px;
    display: block;
    right: 0;
    width: auto;
    height: auto;
    z-index: -1;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
    background: #444;
  }
`;
export const ModalContentFigureButton = styled.button`
  color: #fff;
  right: -6px;
  text-align: right;
  padding-right: 6px;
  width: 100%;
  overflow: visible;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
  display: block;
  outline: none;
  padding: 0;
  z-index: 1046;
  box-shadow: none;
  touch-action: manipulation;
  height: 44px;
  line-height: 44px;
  position: absolute;
  top: 0;
  text-decoration: none;
  opacity: 0.65;
  font-size: 28px;
  user-select: none;
  margin-bottom: 0.75em;
  margin-right: 0.25em;
  transition: all 0.3s ease-in-out;
`;

export const ModalContentFigure = styled.figure`
  margin: 0;
`;
export const ModalContentFigureImage = styled.img`
  max-height: 722px;
  width: auto;
  max-width: 100%;
  height: auto;
  display: block;
  line-height: 0;
  box-sizing: border-box;
  padding: 40px 0 40px;
  margin: 0 auto;
`;

export const ModalContentFigureCaption = styled.figcaption`
  margin: 0;
`;
export const ModalContentFigureCaptionBar = styled.div`
  margin-top: -36px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  cursor: auto;
`;
export const ModalContentFigureCaptionBarText = styled.div`
  margin-top: 3px;
  text-align: left;
  line-height: 18px;
  color: #f3f3f3;
  word-wrap: break-word;
  padding-right: 36px;
`;
export const ModalContentFigureCaptionBarCounter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: #ccc;
  font-size: 12px;
  line-height: 18px;
  white-space: nowrap;
  user-select: none;
`;
