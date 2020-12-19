import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: 0.92em;
  margin: 20px 25px;
  color: #f5f5f5;
`;

export const SpanBox = styled.span`
  display: inline-block;
  background-color: #04b4e0;
  border-radius: 3px;
  color: #fff;
  padding: 5px 10px;
  margin: 3px 2px;
  font-size: 13px;
`;

export const ShadowBox = styled.div`
  width: ${(props) => (props.full === true ? "100%" : "50%")};
  max-width: ${(props) => (props.full === true ? "auto" : "50%")};
  position: relative;
  text-align: center;
  display: block;
  margin: 0 10px 15px;
  background: #333;
  padding: 15px 10px 15px;
  border: 2px solid #444;
  border-radius: 10px;
  box-shadow: none;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  :hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 17px rgba(0, 0, 0, 0.12);
  }
`;
export const ShadowBoxContainer = styled.div`
  place-content: center;
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
  max-width: 75%;
  display: flex;
  margin: auto;
`;
export const CenterImage = styled.img`
  filter: ${(props) => (props.invert === true ? "invert(1)" : "invert(0)")};
  width: 100%;
  border-radius: 10px;
`;

export const Article = styled.div`
  margin-right: 10px;
  cursor: pointer;
  position: relative;
  display: table;
  table-layout: fixed;
  width: 50%;
  border: 2px solid #444;
  border-radius: 8px;
  margin-bottom: 20px;
  transition: all 0.2s ease-in-out;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;
export const ArticleImageWrapper = styled.div`
  display: table-cell;
  width: 120px;
  height: 100%;
  background-color: #444;
  padding: 25px;
  vertical-align: middle;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;
export const ArticleImage = styled.img`
  display: block;
  max-width: 100%;
  filter: ${(props) => (props.noInvert === true ? "invert(0)" : "invert(1)")};
`;
export const ArticleContentWrapper = styled.div`
  display: table-cell;
  width: 100%;
  padding: 20px 25px;
  vertical-align: middle;
`;
export const ArticleTitle = styled.h4`
  font-size: 16px;
  margin: 0 0 5px;
  color: white;
`;
export const ArticleText = styled.span`
  font-size: 0.9em;
  color: #777;
`;
