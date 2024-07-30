import styled from "styled-components";
import { fadeAction, mediaQuery } from "../../style/global.style";
import Layout from "../Layout";

export default function Contact() {
  return (
    <Layout>
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
          </ContactContentWrapper>
        </ContactWrapper>
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
  flex-direction: column;
  justify-content: center;
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
