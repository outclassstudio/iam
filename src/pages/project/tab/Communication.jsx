import { LayerWrapper,Layer,LayerImage,LayerText} from "../../../style/basic.style";

export const Communication = () => {
  return (
    <>
        <LayerWrapper>
          <Layer>
            <LayerImage src="assets/communication_image_1.png"></LayerImage>
            <LayerText className="a" src="assets/communication_text_1.png"></LayerText>
          </Layer>
          <Layer>
            <LayerImage src="assets/communication_image_2.png"></LayerImage>
          </Layer>
        </LayerWrapper>
    </>

  )
}
