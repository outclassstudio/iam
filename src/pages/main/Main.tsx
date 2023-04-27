import styled from "styled-components";
import Layout from "../Layout";
import FirstLayer from "./FirstLayer";
import SecondLayer from "./SecondLayer";
import ThirdLayer from "./ThirdLayer";

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

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
