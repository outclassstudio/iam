import { LayerWrapper,Layer,LayerImage,LayerText} from "../../../style/basic.style";

export const Answering = () => {
  return (
    <>
        <LayerWrapper>
          <Layer>
            <LayerImage src="assets/answering_image_1.png"></LayerImage>
            <LayerText className="a" src="assets/answering_text_1.png"></LayerText>
          </Layer>
          <Layer>
            <LayerImage src="assets/answering_image_2.png"></LayerImage>
          </Layer>
        </LayerWrapper>
    </>

  )
}

