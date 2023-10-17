import styled from "styled-components";
import AnotherHeader from "../../components/AnotherHeader";
import { mediaQuery } from "../../style/global.style";
import Layout from "../Layout";

export default function Terms() {
  return (
    <Layout>
      <AnotherHeader/>
      <TermsPageContainer>
        <TermsContentWrapper>
        <TermsTitle>이메일 무단수집 거부</TermsTitle>
        <Spacer/>
        <EmailTerms/>
        </TermsContentWrapper>
      </TermsPageContainer>
    </Layout>
  );
}

const TermsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;
const TermsContentWrapper = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
`;
const Spacer = styled.div`
  margin-top:25px;
`;
const TermsTitle = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  line-height: 143.992%; /* 46.077px */

  ${mediaQuery.mobile} {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;
const EmailTerms = styled.div`
  background-image: url("/assets/email_terms.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 669px;
  height: 343px;
  margin-bottom: 60px;

  ${mediaQuery.mobile} {
    width: 335px;
    height: 172px;
  }
`;