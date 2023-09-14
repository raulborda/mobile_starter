import { useEffect, useRef, useState } from "react";
import Menu from "../menu/Menu";
import Nav from "../navBar/Nav";
import "./MainLayout.css";
import { SpinLoading } from "antd-mobile";

const MainLayout = ({ children, titulo = "", modo = "" }) => {
  
  // PULL TO REFRESH
  const [startPoint, setStartPoint] = useState(0);
  const [pullChange, setPullChange] = useState();
  const refreshCont = useRef(0);

  const [loading, setLoading] = useState(false);

  const pullStart = (e) => {
    const { screenY } = e.targetTouches[0];
    setStartPoint(screenY);
  };

  const initLoading = () => {
    setLoading(true);

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const pull = (e) => {
    /**
     * get the current user touch event data
     */
    const touch = e.targetTouches[0];
    /**
     * get the touch position on the screen's Y axis
     */
    const { screenY } = touch;
    /**
     * The length of the pull
     *
     * if the start touch position is lesser than the current touch position, calculate the difference, which gives the `pullLength`
     *
     * This tells us how much the user has pulled
     */
    let pullLength = startPoint < screenY ? Math.abs(screenY - startPoint) : 0;
    setPullChange(pullLength);
  };

  const endPull = (e) => {
    setStartPoint(0);
    setPullChange(0);
    if (pullChange > 220) initLoading();
  };

  useEffect(() => {
    window.addEventListener("touchstart", pullStart);
    window.addEventListener("touchmove", pull);
    window.addEventListener("touchend", endPull);
    return () => {
      window.removeEventListener("touchstart", pullStart);
      window.removeEventListener("touchmove", pull);
      window.removeEventListener("touchend", endPull);
    };
  });

  //

  return (
    <div
      className="vista_home_wrapper"
      ref={refreshCont}
      style={{ marginTop: pullChange / 3.118 || "" }}
    >
      {loading && (
        <div className="refresh-loading">
          <SpinLoading color="#56B43C" style={{ "--size": "24px" }} />
        </div>
      )}
      <div className="vista_home_content">
        <div className="home_nav">
          <Nav titulo={titulo} modo={modo} />
        </div>
        <div className="home_contenido">{children}</div>
        <div className="home_menuInf">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
