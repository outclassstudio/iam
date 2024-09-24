import styled from "styled-components";
import { mediaQuery } from "../../style/global.style";
import { FlexDiv } from "style/utility.style";

export default function FirstLayer() {
  return (
    <FirstLayerContainer>
      <BackgroundVideo autoPlay muted loop>
        <VideoSource src="assets/main.mp4" type="video/mp4" />
      </BackgroundVideo>
      <ImageWrapper>
        <WhoAreYou src="assets/wau1.png" />
      </ImageWrapper>
    </FirstLayerContainer>
  );
}

const FirstLayerContainer = styled.div`
  position: relative;
`;
const BackgroundVideo = styled.video`
  width: 100%;
  height: 100%;
`;
const VideoSource = styled.source`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ImageWrapper = styled(FlexDiv)`
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 5px;
`;
const WhoAreYou = styled.img`
  width: 280px;

  ${mediaQuery.pad} {
    width: 196px;
  }

  ${mediaQuery.mobile} {
    width: 140px;
  }
`;
