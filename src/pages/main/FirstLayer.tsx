import styled from "styled-components";
import { mediaQuery } from "../../style/global.style";

export default function FirstLayer() {
  return (
    <FirstLayerContainer>
      <BackgroundVideo autoPlay muted loop>
        <VideoSource
          src="https://cdn.discordapp.com/attachments/938684956916449330/1103987476655251486/main_video.mp4"
          type="video/mp4"
        />
      </BackgroundVideo>
      <ImageWrapper>
        <WhoAreYou src="assets/wau1.png" />
      </ImageWrapper>
    </FirstLayerContainer>
  );
}

const FirstLayerContainer = styled.div`
  /* background-image: url("/assets/main_resize.png");
  background-position: center;
  background-size: cover; */
  position: relative;
  width: 100vw;
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
const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 5px;
  /* top: 920px; */
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
