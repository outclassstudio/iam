import { historyData, SingleHistory } from "../../../data/history.data";
import styled from "styled-components";
import SingleProject from "components/SingleProject";
import ProjectLayout from "../ProjectLayout";

export default function History() {
  return (
    <ProjectLayout>
      <ProjectContainer>
        {historyData.map((item: SingleHistory, idx: number) => (
          <SingleProject
            key={idx}
            id={item.id}
            title={item.title}
            img={item.thumbnail}
          />
        ))}
      </ProjectContainer>
    </ProjectLayout>
  );
}

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  place-items: center;
`;
