import styled from "styled-components";
import { mediaQuery } from "../../style/global.style";
import Layout from "../Layout";
import { FlexColumnDiv } from "style/utility.style";

export default function Policy() {
  return (
    <Layout>
      <PolicyPageContainer>
        <PolicyContentWrapper>
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <TermsTitle>개인정보 이용 약관</TermsTitle>
          <Spacer />
          <PersonalPolicy />
        </PolicyContentWrapper>
      </PolicyPageContainer>
    </Layout>
  );
}

const PolicyPageContainer = styled(FlexColumnDiv)`
  margin-top: 100px;
`;
const PolicyContentWrapper = styled(FlexColumnDiv)`
  align-content: center;
`;
const Spacer = styled.div`
  margin-top: 25px;
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
const PersonalPolicy = styled.div`
  background-image: url("/assets/personal_policy.png");
  background-size: contain;
  background-position: center;
  width: 669px;
  height: 3700px;
  background-repeat: no-repeat;
  margin-bottom: 60px;

  ${mediaQuery.mobile} {
    width: 335px;
    height: 1720px;
  }
`;
