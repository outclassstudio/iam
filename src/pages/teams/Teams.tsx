import styled from "styled-components";
import { fadeAction, mediaQuery } from "../../style/global.style";
import Layout from "../Layout";
import { FlexColumnDiv } from "style/utility.style";

export default function Teams() {
  return (
    <Layout>
      <TeamsPageContainer>
        <FirstLayer></FirstLayer>
        <SecondLayer></SecondLayer>
        <ThirdLayer></ThirdLayer>
      </TeamsPageContainer>
    </Layout>
  );
}

const TeamsPageContainer = styled(FlexColumnDiv)`
  margin-top: 170px;
  animation: 0.6s ease-in-out ${fadeAction};
`;
const FirstLayer = styled.div`
  background-image: url("/assets/media.png");
  background-size: cover;
  background-position: center;
  width: 690px;
  height: 548px;
  margin-bottom: 60px;

  ${mediaQuery.mobile} {
    width: 345px;
    height: 274px;
  }
`;
const SecondLayer = styled.div`
  background-image: url("/assets/communication.png");
  background-size: cover;
  background-position: center;
  width: 690px;
  height: 589px;
  margin-bottom: 60px;

  ${mediaQuery.mobile} {
    width: 345px;
    height: 299px;
  }
`;
const ThirdLayer = styled.div`
  background-image: url("/assets/answering.png");
  background-size: cover;
  background-position: center;
  width: 690px;
  height: 543px;
  margin-bottom: 60px;

  ${mediaQuery.mobile} {
    width: 345px;
    height: 272px;
  }
`;
