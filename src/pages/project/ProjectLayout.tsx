import styled from "styled-components";
import { fadeAction, mediaQuery } from "style/global.style";
import { project_menu } from "data/menu";
import { useNavigate } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";

interface ILayoutProps {
  children: JSX.Element;
}

export default function ProjectLayout({ children }: ILayoutProps) {
  const navigate = useNavigate();
  const pathname = window.location.pathname.split("/")[2];

  const handleCurrentPage = (url: string) => {
    navigate(`/project${url}`);
  };

  return (
    <MainContainer>
      <Header title={"project"} />
      <ProjectHeader>
        {project_menu.map((it) => (
          <Category
            key={it.key}
            onClick={() => {
              handleCurrentPage(it.url);
            }}
            className={it.title.toLowerCase() === pathname ? "selected" : ""}
          >
            {it.title}
          </Category>
        ))}
      </ProjectHeader>
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
  animation: 0.6s ease-in-out ${fadeAction};
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
  margin-top: 170px;
`;

const Category = styled.div`
  color: #7e7e7e;
  cursor: pointer;

  &.selected {
    color: black;
    font-weight: 900;
  }

  ${mediaQuery.mobile} {
    font-size: 14px;
  }
`;
