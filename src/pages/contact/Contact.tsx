import { useState, useRef } from "react";
import styled from "styled-components";
import AnotherHeader from "../../components/AnotherHeader";
import { fadeAction, mediaQuery } from "../../style/global.style";
import Layout from "../Layout";

export default function Contact() {
  const [currentPage, setCurrentPage] = useState("");

  const handleCurrentPage = (page: string) => setCurrentPage(page);

  const content1Ref = useRef<HTMLDivElement>(null);
  const content2Ref = useRef<HTMLDivElement>(null);

  return (
    <Layout>
      <AnotherHeader />
      <ContactPageContainer>
        <ContactTitle></ContactTitle>
        <ContactWrapper>
          <ContactImage src="assets/contact.png" />
          <ContactContentWrapper>
            <SubTitle>Office Hour</SubTitle>
            <SubText>09:00 - 18:00(Mon - Fri)</SubText>
            <SubTitle>Break Time</SubTitle>
            <SubText>12:00 - 13:00</SubText>
            <SubTitle>제휴/문의</SubTitle>
            <SubText>iamcreatorss@gmail.com</SubText>
            <Spacer/>
            <SubHyperLink
              onClick={() => {
                handleCurrentPage("Terms1");
                setTimeout(() => {
                  content1Ref.current?.scrollIntoView({behavior: 'smooth'});
                }, 100);
              }
            }
              >
              이메일 무단수집 거부
            </SubHyperLink>
            <SubHyperLink
              onClick={() => {
                handleCurrentPage("Terms2");
                setTimeout(() => {
                  content2Ref.current?.scrollIntoView({behavior: 'smooth'});
                }, 100);
              }
            }
              >
              개인정보 수집 이용 약관
            </SubHyperLink>
          </ContactContentWrapper>
        </ContactWrapper>
        {currentPage === "Terms1" ? (
          <>
          <Spacer ref={content1Ref}/>
          <TermsTitle>이메일 무단수집 거부</TermsTitle>
          <EmailTerms></EmailTerms>
          </>
        ) : null}
        {currentPage === "Terms2" ? (
          <>
          <Spacer ref={content2Ref}/>
          <TermsTitle>개인정보 수집 이용 약관</TermsTitle>
          <PersonalPolicy></PersonalPolicy>   
          </>
        ) : null}
      </ContactPageContainer>
    </Layout>
  );
}

const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 200px 0px 50px 0px;
  animation: 0.6s ease-in-out ${fadeAction};

  ${mediaQuery.mobile} {
    margin: 170px 0px 0px 0px;
  }
`;
const ContactWrapper = styled.div`
  display: flex;
  margin-bottom: 50px;

  ${mediaQuery.mobile} {
    flex-direction: column;
  }
`;
const ContactTitle = styled.div`
  background-image: url("/assets/contact_title.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 690px;
  height: 20px;
  margin-bottom: 60px;

  ${mediaQuery.mobile} {
    width: 350px;
    margin-bottom: 20px;
  }
`;
const ContactImage = styled.img`
  ${mediaQuery.mobile} {
    width: 350px;
    margin-bottom: 20px;
  }
`;
const ContactContentWrapper = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 25px;
  /* align-items: center; */
`;
const SubTitle = styled.div`
  font-size: 23px;

  ${mediaQuery.mobile} {
    font-size: 18px;
  }
`;
const SubText = styled.div`
  font-size: 18px;
  color: #636363;
  margin-bottom: 20px;

  ${mediaQuery.mobile} {
    font-size: 16px;
  }
`;
const SubHyperLink = styled.div`
  font-size: 18px;
  color: #636363;
  text-decoration: underline;
  margin-top: 6px;
  cursor: pointer;
`;
const Spacer = styled.div`
  margin-top:95px;
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
