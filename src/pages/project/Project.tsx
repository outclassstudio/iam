import { useState } from "react";
import styled from "styled-components";
import { fadeAction } from "style/global.style";
import { Category } from "style/basic.style";
import Layout from "../Layout";
import WhoIAM from "./WhoIAM";
import { project_menu } from "data/menu";
import Media from "./tab/Media";
import Communication from "./tab/Communication";
import Answering from "./tab/Answering";
import History from "./tab/History";
import { useNavigate } from "react-router-dom";

export default function Project2() {
  const [currentPage, setCurrentPage] = useState("WhoIam");
  // const navigate = useNavigate();

  const handleCurrentPage = (page: any) => {
    setCurrentPage(page);
    // navigate(`/project/${page}`);
  };

  return (
    <Layout>
      <ProjectPageContainer>
        <ProjectHeader>
          {project_menu.map((it) => (
            <Category
              key={it.key}
              onClick={() => {
                handleCurrentPage(it.title);
              }}
              className={[
                it.title,
                currentPage === it.title && "Selected",
              ].join(" ")}
            >
              {it.title}
            </Category>
          ))}
        </ProjectHeader>
        {currentPage === "Media" && <Media />}
        {currentPage === "Communication" && <Communication />}
        {currentPage === "Answering" && <Answering />}
        {currentPage === "WhoIam" && <WhoIAM />}
        {currentPage === "History" && <History />}
      </ProjectPageContainer>
    </Layout>
  );
}

const ProjectPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 170px;
  animation: 0.6s ease-in-out ${fadeAction};
`;
const ProjectHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
`;
