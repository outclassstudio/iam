import styled from "styled-components";
import { fadeAction } from "../../style/global.style";
import Layout from "../Layout";
import FirstLayer from "./FirstLayer";
import SecondLayer from "./SecondLayer";
import ThirdLayer from "./ThirdLayer";
import { FlexColumnDiv } from "style/utility.style";

export default function Main() {
  return (
    <Layout title="main">
      <MainContainer>
        <FirstLayer />
        <SecondLayer />
        <ThirdLayer />
      </MainContainer>
    </Layout>
  );
}

const MainContainer = styled(FlexColumnDiv)`
  animation: 0.6s ease-in-out ${fadeAction};
`;
