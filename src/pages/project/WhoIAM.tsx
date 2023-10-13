import styled from "styled-components";
import { LayerWrapper, Layer } from "./Project";
import { mediaQuery } from "../../style/global.style";

const WhoIAM = () => {
  return (
    <LayerWrapper>
      <Layer>
        <Introduction src="assets/WhoIAM-Introduction(PC).png" />
        <MobileIntroduction src="assets/WhoIAM-Introduction(Mobile).png" />
        <MobileIntroducionText src="assets/WhoIAM-IntroductionText(Mobile).png" />
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

const Introduction = styled.img`
  width: 100vw;
  margin-top: 20px;

  ${mediaQuery.mobile} {
    display: none;
  }
`;

const Composition = styled(Introduction)``;
const Schedule = styled(Introduction)`
  width: 35vw;
`;

const MobileIntroduction = styled.img`
  display: none;

  ${mediaQuery.mobile} {
    display: block;
    width: 100vw;
    margin-top: 20px;
  }
`;

const MobileIntroducionText = styled(MobileIntroduction)`
  width: 95vw;
  margin-top: 0px;
  margin-left: 30px;
`;

const MobileComposition = styled(MobileIntroduction)``;
const MobileSchedule = styled(MobileIntroduction)``;
