export interface SingleHistory {
  id: number;
  title: string;
  text: string;
  thumbnail: string;
  details?: string[];
}

export const historyData: SingleHistory[] = [
  {
    id: 1,
    title: "Who I am Preview",
    text: "강연기획단체 'I AM' 에서 준비한 'Who I am' 프로그램 시작 전, 모두가 자유롭게 들어볼 수 있는 프리뷰 맛보기 강연입니다. \n'I AM'이 전하는 삶의 가치, 'Who I am' 참여를 통한 내 삶의 변화된 모습을 제시합니다.",
    thumbnail: "../assets/history_whoiampreview_P_2.jpg",
    details: [
      // "assets/history_whoiampreview_P_2.jpg",
      // "assets/history_whoiampreview_P_1.jpg",
      // "assets/history_whoiampreview_P_3.jpg",
      "../assets/history_whoiam_preview_1.jpg",
      "../assets/history_whoiam_preview_2.jpg",
      "../assets/history_whoiam_preview_3.jpg",
    ],
  },
  {
    id: 2,
    title: "I AM CLASS",
    text: "과연 Chat GPT보다 내가 더 가치가 있을까..? 진짜 나를 알고 가치를 발견하는 인문학 강연",
    thumbnail: "../assets/history_iamclass_P_2.jpg",
    details: [
      // "assets/history_iamclass_P_2.jpg",
      // "assets/history_iamclass_P_1.jpg",
      "../assets/history_iamclass_1.jpg",
    ],
  },
  {
    id: 3,
    title: "떡 하나 주면 안 잡아 먹지",
    text: "❤️ 떡 하나 주면 안 잡아 먹지: 해와 달이 된 오누이 ver. 인생의 한 시절은 마치 산의 한 고비를 넘는 것과 같다. \n유년기, 청소년기, 청년기 ...그동안 살아온 인생의 고비를 되짚어보며 더 나은 미래의 인생을 그려볼 수 있는 시간. ",
    thumbnail: "../assets/history_떡하나_P_1.jpg",
    details: [
      // "assets/history_떡하나_P_1.jpg",
      "../assets/history_떡하나_1.jpg",
      "../assets/history_떡하나_2.jpg",
    ],
  },
  {
    id: 4,
    title: "토끼가 탄 청룡열차",
    text: "이번 역은 검은 토끼의 해를 지나쳐 더 멋진 청룡의 해로 달려가는 열차입니다🚌💨\n다양한 체험과 찐 맛도리 사주 타로 운세까지 2024년 새해를 알차게 맞이해보세요!",
    thumbnail: "../assets/history_bluedragon_P_2.jpg",
    details: [
      // "assets/history_bluedragon_P_2.jpg",
      // "assets/history_bluedragon_P_1.jpg",
      "../assets/history_bluedragon_1.jpg",
      "../assets/history_bluedragon_2.jpg",
    ],
  },
  {
    id: 5,
    title: "You are, I'm",
    text: "유월, 자연이 싱그러워지는 초여름에, 꽃을 보며 한숨 돌리고, 나를 돌아보는 시간",
    thumbnail: "../assets/history_youareiam_P_1.jpg",
    // details: ["assets/history_You'are, I'm_P_1.jpg"],
  },
  {
    id: 6,
    title: "가치의 발견",
    text: "1) 1부 : 인문학 강연\n2) 2부 : 조별 토의와 토론\n※ 주중 조별 미션",
    thumbnail: "../assets/history_poster1_1.jpg",
    // details: ["assets/history_poster1_1.jpg"],
  },
  {
    id: 7,
    title: "LEADER",
    text: "4차 산업 시대 가운데 진정한 리더쉽을 발휘하려면 ? \n진짜 '나'를 알고 가치를 발견하는 인문학 강연 ",
    thumbnail: "../assets/history_LEADER_P.jpg",
    // details: ["assets/history_LEADER_P.jpg"],
  },
  {
    id: 8,
    title: "'도파민 제로약방' 테마카페",
    text: "일상 속 폭발하는 도파민 대신 건강한 힐링이 필요한 여러분을 위한 도파민 디톡스 팝업전시 [ 제로약방 ]",
    thumbnail:
      "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/f52755b5-9e02-48bb-7be0-ff63effbe500/public",
    details: [
      "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/858135e0-4c5f-4fba-ee6d-b047fe2e8600/public",
      "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/0c063680-762f-4ea6-fa1a-f3b2db2a8900/public",
      "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/a2f3f3bb-524f-4bdf-6074-bb09b33c1b00/public",
      "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/6d16be7e-ffae-46b6-8b37-262d45d0bc00/public",
      "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/52986657-43ce-4b55-3054-e58689b1aa00/public",
    ],
  },
  {
    id: 9,
    title: "관계일학",
    text: `혹시 자신을 소개하는 방법 또는 다른 사람을 알아가는 질문이 단조롭지 않으신가요?
    \n"나의 MBTI가 그래서.. 너의 MBTI가 그래서.."
    \n이런 생각은 이제 그만! 성향과 성격의 본질에 대해 알고 이해해보자!
    \n자신과 상대방을 이해하고 연애도, 취업도, 대인관계도 잘 풀어갈 수 있는 강연입니다.`,
    thumbnail:
      "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/4088d26b-da72-4f7d-44ea-b6656008e600/public",
    details: [
      "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/c0e6aa28-2fe7-48ea-a710-a73805c7a400/public",
      "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/cd96b290-013b-4c8e-e91e-cfe52155f400/public",
      "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/215e9c64-680d-4114-1630-667be645d300/public",
      "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/8a7ee182-60a0-440d-5435-96a0d3561f00/public",
    ],
  },
  {
    id: 10,
    title: "가치사전",
    text: `시간은 있는데, 어디서부터 어떻게 해야할지 고민이라면! 
올해를 새롭게 마음먹고 싶다면,
나를 위한 강연, 취업도, 대인관계도 잘 풀어갈 수 있는 강연으로 준비했습니다. `,
    thumbnail:
      "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/c698bfc9-0d92-4dc1-132a-cdb515d0e700/public",
    details: [
      "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/11353f4c-40c8-4ffc-c5d9-ad0abb773200/public",
      "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/61a6386d-fb1b-4165-b26a-c77a9da09600/public",
      "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/28035868-9a6c-4e86-bfe9-f2ca71b86900/public",
      "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/7c006ca6-e988-48a4-ff30-34119ecec100/public",
    ],
  },
];
