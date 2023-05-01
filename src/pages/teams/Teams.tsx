import styled from "styled-components";
import AnotherHeader from "../../components/AnotherHeader";
import { fadeAction } from "../../style/global.style";
import Layout from "../Layout";

export default function Teams() {
  return (
    <Layout>
      <AnotherHeader />
      <TeamsPageContainer>
        <FirstLayer></FirstLayer>
        <SecondLayer></SecondLayer>
        <ThirdLayer></ThirdLayer>
      </TeamsPageContainer>
    </Layout>
  );
}

const TeamsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
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
`;
const SecondLayer = styled.div`
  background-image: url("/assets/communication.png");
  background-size: cover;
  background-position: center;
  width: 690px;
  height: 589px;
  margin-bottom: 60px;
`;
const ThirdLayer = styled.div`
  background-image: url("/assets/answering.png");
  background-size: cover;
  background-position: center;
  width: 690px;
  height: 543px;
  margin-bottom: 60px;
`;
