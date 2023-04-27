import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colorSet, mediaQuery } from "../style/global.style";

interface Props {
  title?: string;
}

export function Header({ title }: Props) {
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
        className={scrollPosition < 100 ? "original_header" : "changed_header"}
      >
        <PathName
          className={window.location.pathname === "/" ? "active" : ""}
          onClick={() => movePage("/")}
        >
          About
        </PathName>
        <PathName
          className={
            window.location.pathname.indexOf("/team") !== -1 ? "active" : ""
          }
          onClick={() => movePage("/team")}
        >
          Teams
        </PathName>
        <PathName
          className={
            window.location.pathname.indexOf("/project") !== -1 ? "active" : ""
          }
          onClick={() => movePage("/project")}
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
            src="assets/title_logo.png"
            alt=""
          />
        </Link>
      </HeaderStyle>
    </Background>
  );
}

export default Header;

interface ScrollPosition {
  scrollPosition: number;
}

const Background = styled.div<ScrollPosition>`
  /* width: 100vw; */
  display: flex;
  align-items: center;
  /* justify-content: space-around;
  flex-direction: column; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  height: ${(props) => (props.scrollPosition > 100 ? "50px" : "114px")};
  padding: 10px;
  /* padding: ${(props) => (props.scrollPosition > 100 ? "0px" : "15px")}; */
  /* background-color: ${(props) =>
    props.scrollPosition > 100 ? "rgba(255, 255, 255, 0.9)" : colorSet.base}; */
  /* background-color: ${(props) =>
    props.scrollPosition > 100 ? "rgba(255, 255, 255, 0.9)" : "white"}; */
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 10px 0px; */
  /* box-shadow: ${(props) =>
    props.scrollPosition > 100
      ? "rgba(0, 0, 0, 0.1) 0px 3px 2px 0px"
      : "none"}; */
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
    color: white;
  }
  img {
    width: 152px;
    margin: 10px;
  }

  ${mediaQuery.mobile} {
    img {
      width: 170px;
    }
  }
`;

const Navbar = styled.div<ScrollPosition>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 25px;

  &.changed_header {
    display: none;
  }

  .active {
    color: #ee292f;
  }

  a {
    cursor: pointer;
    color: white;
    /* color: ${(props) =>
      props.scrollPosition > 100 ? colorSet.darkPink : "black"}; */
    text-decoration: none;
  }
  a:hover {
    color: ${colorSet.base};
  }

  ${mediaQuery.mobile} {
    font-size: 13px;
  }
`;

const PathName = styled.a``;

const DropdownBackGround = styled.div`
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  top: 0%;
  left: 0%;
  bottom: 0%;
  right: 0%;
`;
