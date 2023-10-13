import { useState, useRef } from "react";
import styled from "styled-components";
import { LayerWrapper, Layer } from "./Project";
import { mediaQuery } from "../../style/global.style";

const WhoIAM = () => {
  const [showThumbnail, setShowThumbnail] = useState(true);
  const introVideo = useRef<HTMLVideoElement | null>(null);

  const handleThumbnailClick = () => {
    if (introVideo.current) {
      introVideo.current.play();
      setShowThumbnail(false);
    }
  };

  const handleVideoEnded = () => {
    setShowThumbnail(true);
  };

  return (
    <LayerWrapper>
      <Layer>
        <IntroTitle src="assets/WhoIAM-IntroductionTitle(PC).png" />
        <MobileIntroTitle src="assets/WhoIAM-IntroductionTitle(Mobile).png" />

        <IntroThumbnail
          src="assets/WhoIAM-IntroductionImg.png"
          showThumbnail={showThumbnail}
          onClick={handleThumbnailClick}
        />
        <IntroVideo
          ref={introVideo}
          showThumbnail={showThumbnail}
          onEnded={handleVideoEnded}
          controls
          controlsList="nodownload"
          disablePictureInPicture
        >
          <source src="assets/WhoIAM_Video.mp4" type="video/mp4" />
        </IntroVideo>

        <IntroText src="assets/WhoIAM-IntroductionText(PC).png" />
        <MobileIntroText src="assets/WhoIAM-IntroductionText(Mobile).png" />
      </Layer>
      <Layer>
        <Composition src="assets/WhoIAM-Composition(PC).png" />
        <MobileComposition src="assets/WhoIAM-Composition(Mobile).png" />
      </Layer>
      <Layer>
        <Schedule src="assets/WhoIAM-Schedule(PC).png" />
        <MobileSchedule src="assets/WhoIAM-Schedule(Mobile).png" />
      </Layer>
    </LayerWrapper>
  );
};

export default WhoIAM;

// Intro 비디오
const IntroThumbnail = styled.img<{ showThumbnail: boolean }>`
  display: ${(props) => (props.showThumbnail ? "block" : "none")};
  width: 100vw;

  ${mediaQuery.mobile} {
    height: 32vh;
  }
`;

const IntroVideo = styled.video<{ showThumbnail: boolean }>`
  display: ${(props) => (!props.showThumbnail ? "block" : "none")};
  width: 100vw;

  ${mediaQuery.mobile} {
    height: 32vh;
  }
`;

// PC 해상도
const IntroTitle = styled.img`
  width: 15vw;
  margin-top: 20px;

  ${mediaQuery.mobile} {
    display: none;
  }
`;

const IntroText = styled(IntroTitle)`
  width: 40vw;
`;

const Composition = styled(IntroTitle)`
  width: 100vw;
`;
const Schedule = styled(IntroTitle)`
  width: 35vw;
`;

// Mobile 해상도
const MobileIntroTitle = styled.img`
  display: none;
  width: 35vw;
  margin-top: 20px;

  ${mediaQuery.mobile} {
    display: block;
  }
`;

const MobileIntroText = styled(MobileIntroTitle)`
  width: 95vw;
  margin-top: 0px;
  margin-left: 30px;
`;

const MobileComposition = styled(MobileIntroTitle)`
  width: 100vw;
`;
const MobileSchedule = styled(MobileIntroTitle)`
  width: 100vw;
`;
