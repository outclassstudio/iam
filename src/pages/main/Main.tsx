import styled from "styled-components";
import Header from "../../components/Header";
import { fadeAction } from "../../style/global.style";
import Layout from "../Layout";
import FirstLayer from "./FirstLayer";
import SecondLayer from "./SecondLayer";
import ThirdLayer from "./ThirdLayer";

export default function Main() {
  return (
    <Layout title="main">
      <Header />
      <MainContainer>
        <FirstLayer />
        <SecondLayer />
        <ThirdLayer />
      </MainContainer>
    </Layout>
  );
}

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  animation: 0.6s ease-in-out ${fadeAction};
`;
