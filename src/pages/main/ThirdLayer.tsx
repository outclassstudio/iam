import styled from "styled-components";
import { mediaQuery } from "../../style/global.style";
import { FlexColumnDiv, FlexDiv, FlexDivCentered } from "style/utility.style";

export default function ThirdLayer() {
  const images = [
    "/assets/Frame1.jpg",
    "/assets/Frame2.png",
    "/assets/Frame3.png",
  ];

  return (
    <ThirdLayerContainer>
      <ProfileText>Core Value</ProfileText>
      <ImageWrapper>
        {images.map((el, idx) => (
          <SingleImage key={idx} imageUrl={el}></SingleImage>
        ))}
      </ImageWrapper>
    </ThirdLayerContainer>
  );
}

interface Url {
  imageUrl: string;
}

const ThirdLayerContainer = styled(FlexColumnDiv)``;

const ProfileText = styled(FlexDivCentered)`
  padding: 15px 0px;
  font-size: 32px;
  color: #7294ae;
  font-style: italic;
  font-weight: 900;
  box-shadow: 10 10 10 rgba(0, 0, 0);

  ${mediaQuery.mobile} {
    font-size: 22px;
  }
`;

const ImageWrapper = styled(FlexDiv)``;

const SingleImage = styled.div<Url>`
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: cover;
  flex: 1 0 0;
  height: 1080px;

  ${mediaQuery.mobile} {
    height: 540px;
  }
`;
