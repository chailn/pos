import React, { useState } from "react";
import CustomBtn from "./elements/CustomBtn";
import SendMessage from "./elements/tabs/SendMessage";
import Request from "./elements/tabs/Request";
import Reservation from "./elements/tabs/Reservation";

const Information = () => {
  const [tab, setTab] = useState("sendMessage");

  return (
    <div className="w-full min-h-screen bg-img7 bg-cover bg-center uppercase p-8 children:m-4">
      <div className="children:m-4">
        <CustomBtn
          onClickItem={() => setTab("sendMessage")}
          children="Send Message"
        />
        <CustomBtn
          onClickItem={() => setTab("requestInfo")}
          children="Request Info"
        />
        <CustomBtn
          onClickItem={() => setTab("makeRes")}
          children="Make Reservation"
        />
      </div>

      {tab === "sendMessage" && <SendMessage />}
      {tab === "requestInfo" && <Request />}
      {tab === "makeRes" && <Reservation />}
    </div>
  );
};

export default Information;
