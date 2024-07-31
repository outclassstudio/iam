import {
  LayerWrapper,
  Layer,
  LayerImage,
  LayerText,
} from "../../../style/project.style";
import ProjectLayout from "../ProjectLayout";

export default function Media() {
  return (
    <ProjectLayout>
      <LayerWrapper>
        <Layer>
          <LayerImage src="../assets/media_image_1.png"></LayerImage>
          <LayerText className="a" src="../assets/media_text_1.png"></LayerText>
        </Layer>
        <Layer>
          <LayerImage src="../assets/media_image_2.png"></LayerImage>
          <LayerText className="a" src="../assets/media_text_2.png"></LayerText>
        </Layer>
      </LayerWrapper>
    </ProjectLayout>
  );
}
