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
        <TextWrapper className="top">
        <SmallTextWrapper>
        <Link to="/terms">
          <SubHyperLink onClick={handleTop}>이메일 무단수집 거부</SubHyperLink>
        </Link>
        <Link to="/policy">
          <SubHyperLink onClick={handleTop}>개인정보 이용 약관</SubHyperLink>
        </Link>
        </SmallTextWrapper>
          <MiddleText>사업자번호 : 102-80-03659</MiddleText>
        </TextWrapper>
        <TextWrapper>
          <SmallTextWrapper>
            <SmallText>비영리단체 : 아이엠 </SmallText>
            <SmallText className="bar">|</SmallText>
            <SmallText>대표 : 한승목, 이민형</SmallText>
          </SmallTextWrapper>
          <SmallTextWrapper>
            <SmallText>주소 : 노원구 동일로 1029 6F</SmallText>
            <SmallText className="bar">|</SmallText>
            <SmallText> 문의 : iamcreatorss@gmail.com</SmallText>
          </SmallTextWrapper>
          <SmallTextWrapper>
            <Copyright>© I AM All Rights Reserved.</Copyright>
          </SmallTextWrapper>
        </TextWrapper>
        
      </Left>
      <Right>
        <Link to="/about">
          <PathName onClick={handleTop}>About</PathName>
        </Link>
        <Link to="/teams">
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

const FooterDiv = styled(FlexDivCentered)`
  width: 100%;
  height: 120px;
  margin: 0;
  border: none;
  color: white;
  font-family: "Pretendard-Regular";

  ${mediaQuery.mobile} {
    width: 360px;
    height: 130px;
    margin-bottom: 10px;
  }
`;

const Left = styled.div`
  padding-left: 35px;
  flex: 1 0 auto;

  a {
    text-decoration: none;
    color: #1e1e1e;
  }

  div {
    font-size: 11px;
  }

  ${mediaQuery.mobile} {
    padding-left: 25px;
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
    padding-right: 0px;
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

  ${mediaQuery.mobile} {
    /* display: none; */
  }
`;

const TextWrapper = styled.div`
  margin: 6px 0px 3px 0px;

  ${mediaQuery.mobile} {
    &.top {
      /* display: flex;
      flex-direction: column;
      gap: 3px; */
    }
  }
`;

const MiddleText = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 15px;
  color: #777777;
`;

const SmallTextWrapper = styled.div`
  display: flex;
  gap: 5px;

  ${mediaQuery.mobile} {
    flex-direction: column;
    /* margin-bottom: 5px; */
    gap: 0px;
  }
`;

const SmallText = styled.div`
  font-weight: 300;
  font-size: 9px;
  line-height: 16px;
  color: #9a9a9a;

  ${mediaQuery.mobile} {
    &.bar {
      display: none;
    }
  }
`;
const SubHyperLink = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  font-style: normal;
  color: #777777;
  cursor: pointer;
`;