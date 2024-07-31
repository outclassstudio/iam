import styled from "styled-components";
import { mediaQuery } from "./global.style";

export const LayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Layer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;
`;

export const LayerImage = styled.img`
  width: 100vw;
`;

export const LayerText = styled.img`
  width: 650px;

  ${mediaQuery.pad} {
    width: 500px;
  }

  ${mediaQuery.mobile} {
    width: 350px;
  }
`;
