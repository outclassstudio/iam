import styled from "styled-components";

export default function FirstLayer() {
  return (
    <FirstLayerContainer>
      <ImageWrapper>
        <WhoAreYou src="/assets/wau1.png" />
      </ImageWrapper>
    </FirstLayerContainer>
  );
}

const FirstLayerContainer = styled.div`
  background-image: url("/assets/main_resize.png");
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 964px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 920px;
`;

const WhoAreYou = styled.img`
  width: 280px;
`;
