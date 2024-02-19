import styled from "styled-components";
import {mediaQuery} from "./global.style";

export const Category = ({children, onClick, className}) => {
  const CategoryStyle =  styled.div`
    color: #7e7e7e;
    cursor: pointer;

    &.Selected {
      color: black;
      font-weight: 900;
    }

    ${mediaQuery.mobile} {
      font-size: 14px;
    }
  `;
  
    return (
        <CategoryStyle onClick={onClick} className={className}>
            {children}
        </CategoryStyle>
    )
}
export const LayerWrapper = ({children}) => {
    return (
        <LayerWrapperStyle>
            {children}
        </LayerWrapperStyle>
    )
}
export const Layer = ({children}) => {
    return (
        <LayerStyle>
            {children}
        </LayerStyle>
    )
}
export const LayerImage = ({src}) => {
    return (
        <LayerImageStyle src={src}>
        </LayerImageStyle>
    )
}
export const LayerText = ({src, className}) => {
    return (
        <LayerTextStyle src={src} className={className}>
        </LayerTextStyle>
    )
}


const LayerWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
const LayerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;
`;
const LayerImageStyle = styled.img`
  width: 100vw;
`;

const LayerTextStyle = styled.img`
  width: 650px;

  ${mediaQuery.pad} {
    width: 500px;
  }

  ${mediaQuery.mobile} {
    width: 350px;
  }
`;

