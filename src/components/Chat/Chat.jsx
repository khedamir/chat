import React, { useContext } from "react";
import Input from "./Input";
import Messages from "./Messages";
import "./Chat.scss";
import { ChatContext } from "../../context/ChatContext";
import { SidebarContext } from "../../pages/Home";

const Chat = () => {
  const { data } = useContext(ChatContext);
  const { sidebarVisisble, setSidebarVisible } = useContext(SidebarContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        {!sidebarVisisble && (
          <span onClick={() => setSidebarVisible(true)} className="openButton">
            &#9776;
          </span>
        )}
        <span>{data.user.displayName}</span>
        <div className="chatIcons">
          <img src="img/cam.png" alt="" />
          <img src="img/add.png" alt="" />
          <img src="img/more.png" alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
