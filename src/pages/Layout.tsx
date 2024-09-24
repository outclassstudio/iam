import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FlexColumnDiv, FlexDiv } from "style/utility.style";

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

const MainContainer = styled(FlexColumnDiv)``;

const ChildrenDiv = styled(FlexDiv)`
  justify-content: center;
  background: none;
`;
