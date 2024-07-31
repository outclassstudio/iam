import {
  LayerWrapper,
  Layer,
  LayerImage,
  LayerText,
} from "../../../style/project.style";
import ProjectLayout from "../ProjectLayout";

export default function Answering() {
  return (
    <ProjectLayout>
      <LayerWrapper>
        <Layer>
          <LayerImage src="../assets/answering_image_1.png"></LayerImage>
          <LayerText
            className="a"
            src="../assets/answering_text_1.png"
          ></LayerText>
        </Layer>
        <Layer>
          <LayerImage src="../assets/answering_image_2.png"></LayerImage>
        </Layer>
      </LayerWrapper>
    </ProjectLayout>
  );
}
