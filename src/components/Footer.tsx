import { Link } from "react-router-dom";
import styled from "styled-components";
import { mediaQuery } from "../style/global.style";
import { FlexDiv, FlexDivCentered } from "../style/utility.style";

export default function Footer() {
  // 클릭하면 스크롤이 위로 올라가는 함수
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FooterDiv>
      <Left>
        <TextWrapper>
          <MiddleText>이용약관</MiddleText>
          <MiddleText>사업자정보확인</MiddleText>
        </TextWrapper>
        <TextWrapper>
          <SmallText>비영리단체 : 아이엠 / 대표 : 한승목</SmallText>
          <SmallText>
            주소 : 노원구 동일로 1352 4F / 문의 : whoiam@gmail.com
          </SmallText>
        </TextWrapper>
        <Copyright>© I AM All Rights Reserved.</Copyright>
      </Left>
      <Right>
        <Link to="/">
          <PathName onClick={handleTop}>About</PathName>
        </Link>
        <Link to="/team">
          <PathName onClick={handleTop}>Teams</PathName>
        </Link>
        <Link to="/project">
          <PathName onClick={handleTop}>Project</PathName>
        </Link>
        <Link to="/contact">
          <PathName onClick={handleTop}>Contact</PathName>
        </Link>
      </Right>
    </FooterDiv>
  );
}

// const MainDiv = styled(FlexDiv)`
//   justify-content: center;
//   background-color: white;
//   margin-top: 10px;
// `;

const FooterDiv = styled(FlexDivCentered)`
  /* width: 1150px; */
  width: 100%;
  height: 120px;
  margin: 0;
  border: none;
  color: white;
  font-family: "Pretendard-Regular";

  ${mediaQuery.mobile} {
    width: 360px;
    height: 80px;
  }
`;

const Left = styled.div`
  padding-left: 35px;
  flex: 1 0 auto;

  img {
    width: 150px;
  }

  div {
    font-size: 11px;
  }

  ${mediaQuery.mobile} {
    img {
      width: 100px;
    }
    div {
      display: none;
    }
  }
`;

const Right = styled(FlexDiv)`
  padding-right: 35px;
  gap: 10px;
  justify-content: right;
  flex: 1 0 auto;
  font-size: 13px;

  a {
    text-decoration: none;
    color: #1e1e1e;
  }
  a:hover {
    text-decoration: underline;
  }

  ${mediaQuery.mobile} {
    a {
      font-size: 11px;
    }
  }
`;

const PathName = styled.div``;
const Copyright = styled.div`
  color: #777777;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

const TextWrapper = styled.div`
  margin: 6px 0px 3px 0px;
`;

const MiddleText = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 15px;
  color: #777777;
`;

const SmallText = styled.div`
  font-weight: 300;
  font-size: 9px;
  line-height: 16px;
  color: #9a9a9a;
`;
