import { LayerWrapper,Layer,LayerImage,LayerText} from "../../../style/basic.style";

export const Media = () => {
  return (
    <>
        <LayerWrapper>
            <Layer>
            <LayerImage src="assets/media_image_1.png"></LayerImage>
            <LayerText className="a" src="assets/media_text_1.png"></LayerText>
            </Layer>
            <Layer>
            <LayerImage src="assets/media_image_2.png"></LayerImage>
            <LayerText className="a" src="assets/media_text_2.png"></LayerText>
            </Layer>
        </LayerWrapper>
    </>

  )
}



// export const LayerWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;