import React from "react";
import {
  UnorderedListOutline,
  UserOutline,
  CalendarOutline,
  SetOutline,
} from "antd-mobile-icons";
import { TabBar } from "antd-mobile";
import "./Menu.css";
import { useHistory, useLocation } from "react-router-dom";



const Menu = () => {

  let history = useHistory();
  const location = useLocation();
  const { pathname } = location;

  const tabs = [
    {
      key: "/tareas",
      icon: <UnorderedListOutline />,
    },
    {
      key: "/clientes",
      icon: <UserOutline />,
    },
    // {
    //   key: "/calendario",
    //   icon: <CalendarOutline />,
    // },
    {
      key: "/configuracion",
      icon: <SetOutline />,
    },
  ];
  return (
    <>
      <TabBar activeKey={pathname} onChange={(key) => history.push(key)} className="menu_tabs">        
        {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon}/>
        ))}
      </TabBar>
    </>
  );
};

export default Menu;
