import styled from "styled-components";

export default function ThirdLayer() {
  const images = [
    { url: "/assets/land1.png", text: "/assets/Thoughtful.png" },
    { url: "/assets/land2.png", text: "/assets/Unitive.png" },
    { url: "/assets/land3.png", text: "/assets/Energetic.png" },
  ];

  return (
    <ThirdLayerContainer>
      <ProfileText>Our Profile </ProfileText>
      <ImageWrapper>
        {images.map((el, idx) => {
          return (
            <SingleImage imageUrl={el.url}></SingleImage>
            // <SingleImageWrapper key={idx}>
            //   <SingleImage imageUrl={el.url}></SingleImage>
            //   {/* <ImageText src={el.text}></ImageText> */}
            // </SingleImageWrapper>
          );
        })}
      </ImageWrapper>
    </ThirdLayerContainer>
  );
}

interface Url {
  imageUrl: string;
}

const ThirdLayerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileText = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  align-items: center;
  font-size: 32px;
  color: #7294ae;
  text-decoration: underline;
`;

const ImageWrapper = styled.div`
  display: flex;
`;

const SingleImageWrapper = styled.div`
  /* position: relative; */
  flex: 1 0 0;
  height: 1080px;
`;

const SingleImage = styled.div<Url>`
  background-image: url(${(props) => props.imageUrl});
  flex: 1 0 0;
  height: 1080px;
`;

const ImageText = styled.img`
  position: absolute;
`;
