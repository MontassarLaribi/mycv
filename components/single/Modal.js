import {
  ModalBackground,
  ModalContainer,
  ModalContent,
  ModalContentFigure,
  ModalContentFigureButton,
  ModalContentFigureCaption,
  ModalContentFigureCaptionBar,
  ModalContentFigureCaptionBarCounter,
  ModalContentFigureCaptionBarText,
  ModalContentFigureContainer,
  ModalContentFigureImage,
  ModalContentWrapper,
  ModalWrapper,
} from "../styled/modal";
import { useDispatch } from "react-redux";
import { hide, selectShowModalContent } from "../../store/zoom/zoomSlice";
import { useSelector } from "react-redux";

const Modal = ({ showModal }) => {
  const dispatch = useDispatch();
  const { image, caption } = useSelector(selectShowModalContent);
  return (
    <ModalWrapper showModal={showModal}>
      <ModalBackground></ModalBackground>
      <ModalContentWrapper>
        <ModalContainer>
          <ModalContent>
            <ModalContentFigureContainer>
              <ModalContentFigureButton
                onClick={() => dispatch(hide())}
                type="close"
                title="Close"
              >
                x
              </ModalContentFigureButton>
              <ModalContentFigure>
                <ModalContentFigureImage src={image}></ModalContentFigureImage>
                <ModalContentFigureCaption>
                  <ModalContentFigureCaptionBar>
                    <ModalContentFigureCaptionBarText>
                      {caption}
                    </ModalContentFigureCaptionBarText>
                    <ModalContentFigureCaptionBarCounter></ModalContentFigureCaptionBarCounter>
                  </ModalContentFigureCaptionBar>
                </ModalContentFigureCaption>
              </ModalContentFigure>
            </ModalContentFigureContainer>
          </ModalContent>
        </ModalContainer>
      </ModalContentWrapper>
    </ModalWrapper>
  );
};

export default Modal;
