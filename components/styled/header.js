import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  z-index: 999;
  top: 0;
  height: 70px;
  background-color: transparent;
  position: fixed;
  display: flex;
  background-color: #222;
  box-shadow: 0px 1px 2px 1px rgb(255 255 255 / 30%);
  @media only screen and (max-width: 1024px) {
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
  }
`;

export const HeaderTitleList = styled.ul`
  margin-right: auto;
  list-style: none;
  display: flex;
  flex-direction: row;
  color: white;
`;
export const HeaderTitleItem = styled.li`
  margin-right: 30px;
  align-self: center;
  transition: color 1s ease;
  display: inline;
  position: relative;
  z-index: 2;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
  :hover {
    color: #04b4e0;
  }

  ::before {
    width: 0;
    position: absolute;
    z-index: -1;
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  ::after {
    position: absolute;
    z-index: -1;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: #04b4e0;
    width: 0;
  }

  :focus::after,
  :hover::after,
  :focus::before,
  :hover::before {
    background-color: #04b4e0;
    width: 100%;
    height: 2px;
    outline: 0;
    transition: all 1s ease 0s;
  }
  @media only screen and (max-width: 1024px) {
    font-size: small;
  }
`;
export const ToggleWrapper = styled.div`
  align-self: center;
  width: 80px;
  height: 40px;
  margin: 10px;
  border-radius: 50px;
  display: inline-block;
  position: relative;
  background: #616161;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  & > span {
    background: url("data:image/png;base64,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")
      no-repeat center;
    background-size: cover;
  }
  &.active {
    & > span {
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACoUlEQVR42u3VvUrCYRjG4ds+REgHsQ8oIiFoao1Wz6SOoGPoJFyjzqStIWgKgia30pTGQsG3NSgI/k3ZdY0P73QPvzcBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAFUfty2e+fJOmaprpOu5He8XbOz47S3WmluVY3SgVlOsv86Tlv/YvMbu9SRuOkFMNUN+g83Fx9Pqx88+g0Sc9W1U1e3zN+fc/hQccYv/md6qtZ3tvNfDhKGb4Y5Peuk/wYAOCfEAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAEwAQgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAMBfC8BlkmvTVNdpN7LebuT+cZLuTivNtbpRKijTWeZPz1na2kxtayNlNE5KMUx1AxMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALCwPgBvNzcbC0hw8gAAAABJRU5ErkJggg==")
        no-repeat center;
      background-size: cover;
      left: 38px;
    }
  }
  @media only screen and (max-width: 1024px) {
    & > span {
      position: relative;
      left: 22.5px;
    }
    &.active {
      & > span {
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACoUlEQVR42u3VvUrCYRjG4ds+REgHsQ8oIiFoao1Wz6SOoGPoJFyjzqStIWgKgia30pTGQsG3NSgI/k3ZdY0P73QPvzcBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAFUfty2e+fJOmaprpOu5He8XbOz47S3WmluVY3SgVlOsv86Tlv/YvMbu9SRuOkFMNUN+g83Fx9Pqx88+g0Sc9W1U1e3zN+fc/hQccYv/md6qtZ3tvNfDhKGb4Y5Peuk/wYAOCfEAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAEwAQgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAMBfC8BlkmvTVNdpN7LebuT+cZLuTivNtbpRKijTWeZPz1na2kxtayNlNE5KMUx1AxMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALCwPgBvNzcbC0hw8gAAAABJRU5ErkJggg==")
          no-repeat center;
        background-size: cover;
        position: relative;
        left: 22.5px;
      }
    }
  }
`;
export const ToggleInput = styled.input`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 9;
  cursor: pointer;
  filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
`;
export const ToggleSpan = styled.span`
  width: 30px;
  height: 30px;
  background-color: #ff9800;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 5px;
  top: 50%;
  margin-top: -15px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
`;
export const MainTitle = styled.h1`
  align-self: center;
  margin-left: 20px;
  font-size: medium;
  color: #04b4e0;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
export const MainTitleSmall = styled.h1`
  display: none;
  align-self: center;
  margin-left: 20px;
  font-size: medium;
  color: #04b4e0;
  @media only screen and (max-width: 1024px) {
    display: initial;
  }
`;
export const List = styled.ul`
  color: white;
  list-style: none;
  margin-left: 20px;
`;
export const ListItem = styled.li`
  padding: 5px 0;
  ::before {
    content: "";
    display: block;
    margin-top: 2px;
    width: 17px;
    height: 17px;
    position: absolute;
    margin-left: -20px;
    border-radius: 10px;
    background-color: #04b4e0;
    opacity: 0.25;
    z-index: 0;
  }

  & > span {
    ::before {
      content: "";
      display: block;
      position: absolute;
      margin-top: 5px;
      width: 6px;
      height: 6px;
      margin-left: -16.5px;
      background-color: #222;
      border-radius: 5px;
      border: 2px solid #04b4e0;
      z-index: 1;
    }
  }
`;
