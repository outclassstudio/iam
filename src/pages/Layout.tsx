import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface ILayoutProps {
  children: JSX.Element;
  title?: string;
}

export default function Layout({ children, title }: ILayoutProps) {
  return (
    <MainContainer>
      <Header title={title} />
      <ChildrenDiv>{children}</ChildrenDiv>
      <Footer />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChildrenDiv = styled.div`
  display: flex;
  justify-content: center;
  background: none;
`;
