import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mediaQuery } from "../style/global.style";

interface Props {
  title?: string;
}

export default function Header({ title }: Props) {
  const navigate = useNavigate();

  //스크롤 포지션 상태
  const [scrollPosition, setScrollPosition] = useState(0);

  //스크롤 포지션 업데이트 함수
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  //페이지 이동 함수
  const movePage = (page: string) => {
    navigate(page);

    //*페이지 최상단으로 이동
    window.scrollTo({
      top: 0,
      // behavior: "instant",
    });
  };

  //스크롤 될 때 마다 실행
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <Background scrollPosition={scrollPosition}>
      <Navbar
        scrollPosition={scrollPosition}
        title={title}
        className={scrollPosition < 70 ? "original_header" : "changed_header"}
      >
        <PathName
          className={window.location.pathname === "/about" ? "active" : ""}
          onClick={() => movePage("/about")}
        >
          About
        </PathName>
        <PathName
          className={
            window.location.pathname.indexOf("/teams") !== -1 ? "active" : ""
          }
          onClick={() => movePage("/teams")}
        >
          Teams
        </PathName>
        <PathName
          className={
            window.location.pathname.indexOf("/project") !== -1 ? "active" : ""
          }
          onClick={() => movePage("/project/whoiam")}
        >
          Project
        </PathName>
        <PathName
          className={window.location.pathname === "/contact" ? "active" : ""}
          onClick={() => movePage("/contact")}
        >
          Contact
        </PathName>
      </Navbar>
      <HeaderStyle>
        <Link to="/">
          <img
            className={
              scrollPosition < 100 ? "original_header" : "changed_header"
            }
            src={
              title === "main"
                ? "assets/title_logo.png"
                : title === "project"
                ? "../assets/title_logo_black.png"
                : "assets/title_logo_black.png"
            }
            alt=""
          />
        </Link>
      </HeaderStyle>
    </Background>
  );
}

interface ScrollPosition {
  scrollPosition: number;
}

const Background = styled.div<ScrollPosition>`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  height: ${(props) => (props.scrollPosition > 100 ? "50px" : "114px")};
  padding: 10px;
`;

const HeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 15px;

  .changed_header {
    display: none;
  }

  a {
    text-decoration: none;
    color: #9a9a9a;
  }
  img {
    width: 152px;
    margin: 10px;
  }

  ${mediaQuery.mobile} {
    img {
      width: 120px;
    }
  }
`;

const Navbar = styled.div<ScrollPosition>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 25px;
  gap: 3px;

  &.changed_header {
    display: none;
  }

  .active {
    color: black;
  }

  a {
    cursor: pointer;
    color: ${(props) => (props.title === "main" ? "white" : "#9a9a9a")};
    text-decoration: none;
  }
  a:hover {
    color: black;
  }

  ${mediaQuery.mobile} {
    padding-left: 10px;
    font-size: 12px;
  }
`;

const PathName = styled.a``;
