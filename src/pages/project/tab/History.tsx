import { historyData } from "../../../data/history.data";
import styled from "styled-components";
import SingleProject from "components/SingleProject";

export default function History() {
  return (
    <ProjectContainer>
      {historyData.map((item: any, idx: number) => (
        <SingleProject
          key={idx}
          id={item.id}
          title={item.title}
          img={item.thumbnail}
        />
      ))}
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  place-items: center;
`;
