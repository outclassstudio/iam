import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface IPrjProps {
  id: number;
  title: string;
  img: string;
}

export default function SingleProject({ id, title, img }: IPrjProps) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <ProjectContainer onClick={onClick}>
      <ProjectThumbnail src={img} alt={title} />
      <TitleWrapper>{title}</TitleWrapper>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectThumbnail = styled.img`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.103) 0px 4px 12px;
  border-radius: 10px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.03) translateY(-5px);
  }
`;

const TitleWrapper = styled.div`
  margin: 10px;
  font-size: 16px;
  font-weight: 1000;
  color: #313131;
  cursor: pointer;
`;
