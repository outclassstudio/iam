import { Carousel, ConfigProvider } from "antd";
import Modal from "antd/es/modal/Modal";
import Layout from "pages/Layout";
import { useParams } from "react-router-dom";
import { fadeMoveAction, mediaQuery } from "style/global.style";
import styled from "styled-components";
import { historyData, SingleHistory } from "../../../data/history.data";
import { useState } from "react";
import { FlexColumnDiv, FlexDivCentered } from "style/utility.style";

export default function ProjectDetail() {
  const params = useParams();
  const data = historyData.find((e: SingleHistory) => `${e.id}` === params.id);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Layout title={"project"}>
      <DetailContainer>
        <Poster src={`../${data?.thumbnail}`} alt={data?.title} />
        <ContentsWrapper>
          <TextWrapper>
            <Title>{data?.title}</Title>
            <Content>{data?.text}</Content>
          </TextWrapper>
          <Title>Photos</Title>
          <ImageWrapper>
            {data?.details?.map((e: string, idx: number) => (
              <img onClick={openModal} key={idx} src={`../${e}`} alt="" />
            ))}
          </ImageWrapper>
        </ContentsWrapper>
        {data?.details && (
          <ConfigProvider
            theme={{
              components: {
                Modal: {
                  titleFontSize: 20,
                },
              },
            }}
          >
            <Modal
              open={showModal}
              title={data?.title}
              onCancel={openModal}
              footer={[]}
              centered={true}
              closeIcon={false}
              width={700}
            >
              <Carousel arrows>
                {data?.details.map((detail: string, index: number) => (
                  <div key={index}>
                    <img
                      src={`../${detail}`}
                      style={{ width: "100%", height: "auto" }}
                      alt={`Detail ${index + 1}`}
                    />
                  </div>
                ))}
              </Carousel>
            </Modal>
          </ConfigProvider>
        )}
      </DetailContainer>
    </Layout>
  );
}

const DetailContainer = styled(FlexDivCentered)`
  margin: 170px 20px 10px 20px;
  gap: 30px;
  max-width: 1000px;
  padding: 20px;
  animation: 0.6s ease-in-out ${fadeMoveAction};

  ${mediaQuery.mobile} {
    gap: 15px;
    margin: 150px 10px 10px 10px;
  }
`;

const Poster = styled.img`
  width: 42%;
  box-shadow: rgba(0, 0, 0, 0.103) 0px 4px 12px;
`;

const ContentsWrapper = styled(FlexColumnDiv)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TextWrapper = styled(FlexColumnDiv)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 1000;
  border-bottom: solid 1px #5c5c5c;
  padding-bottom: 10px;

  ${mediaQuery.mobile} {
    font-size: 14px;
  }
`;

const Content = styled.div`
  font-size: 18px;
  line-height: 1.5;

  ${mediaQuery.mobile} {
    font-size: 10px;
    line-height: 1.3;
  }
`;

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  place-items: center;

  img {
    width: 100%;
    cursor: pointer;
  }

  ${mediaQuery.pad} {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  ${mediaQuery.mobile} {
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  }
`;
