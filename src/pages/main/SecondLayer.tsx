import styled from "styled-components";
import { formatWithOptions } from "util";

export default function SecondLayer() {
  return (
    <SecondLayerContainer>
      <ImageWrapper>
        <WhoIam src="/assets/wau2.png" />
      </ImageWrapper>
    </SecondLayerContainer>
  );
}

const SecondLayerContainer = styled.div`
  background-image: url("/assets/boy.png");
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 792px;
  position: relative;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 5px;
`;

const WhoIam = styled.img`
  width: 280px;
`;
