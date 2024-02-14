import { useState } from 'react';
import { Ballon } from 'components'
import { ConfigProvider, Carousel, Modal, } from 'antd'
import 'assets/base.css';


const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export const History = () => {
  const [show, SetShow] = useState(false);

  const items = [
    {
      title: '하늘의 별따기',
      text: 'music talk concert 하늘의 별따기 숨 막힐 듯 바쁜 일상, 잠시 쉬어갈 정거장이 되어줄 감성 뮤직 토크 콘서트!',
      thumbnail:'assets/photo_1.jpg',
      details: ['assets/photo_1.jpg','assets/photo_2.jpg','assets/photo_3.jpg']
    }
  ]

  const itemsDetails =  ['assets/photo_1.jpg','assets/photo_2.jpg','assets/photo_3.jpg'];
  const fnOk = () => {
    SetShow(true);
  }
  const fnCancel = () => {
    SetShow(false);
  }

  return (
    <>
      <Ballon 
          text='music talk concert 하늘의 별따기 숨 막힐 듯 바쁜 일상, 잠시 쉬어갈 정거장이 되어줄 감성 뮤직 토크 콘서트!'
          title='하늘의 별따기'
          button={<button className='press' onClick={()=>fnOk()}>MORE</button>}
      >
        <img src="assets/photo_1.jpg" width={'300px'} height={'100%'}/>
      </Ballon>
      <Modal
          open={show}
          title="하늘의 별따기 (23년 5월)"
          onOk={fnOk}
          onCancel={fnCancel}
          footer={[
          ]}
        >
        <ConfigProvider
            theme={{
              components: {
                Carousel: {
                  dotActiveWidth:10,
                  dotHeight: 10,
                  dotWidth: 10,

                },
              },
            }}
        >
          <Carousel>
            {itemsDetails.map((it)=>{return (
              <div style={contentStyle}>
                <img src={it}  width={'100%'}/>
              </div>
            )}
            
            )}
          </Carousel>
        </ConfigProvider>

        </Modal>
    </>

  )
}


