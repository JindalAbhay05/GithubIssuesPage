import React, { useState } from "react";
import { AiFillGithub, AiOutlineUser } from "react-icons/ai";
import "./style.css";
const NavbarOptions = [
  { id: "1", title: "Code", img: "", notification: "", selected: false },
  {
    id: "2",
    title: "Issue",
    img: <AiFillGithub />,
    notification: "625",
    selected: false,
  },
  {
    id: "3",
    title: "Pull requests",
    img: "",
    notification: "",
    selected: false,
  },
  { id: "4", title: "Actions", img: "", notification: "", selected: false },
  { id: "5", title: "Projects", img: "", notification: "", selected: false },
  { id: "6", title: "Wiki", img: "", notification: "", selected: false },
  { id: "7", title: "Security", img: "", notification: "", selected: false },
  { id: "8", title: "Insights", img: "", notification: "", selected: false },
];

const NavBar = () => {
  const [selectedTab, setSelectedTab] = useState("1");
  return (
    <div className="navbar">
      <div className="flexStyle" style={{ justifyContent: "space-between" }}>
        <div className="flexStyle" style={{ alignItems: "center" }}>
          <AiFillGithub style={{ marginRight: "5px" }} />
          <p style={{ color: "blue" }}>facebook/react</p>
        </div>
        <div
          className="flexStyle"
          style={{ alignItems: "center", justifyContent: "space-around" }}
        >
          <div
            className="flexStyle"
            style={{
              textAlign: "center",
              borderRadius: "5px",
              padding: "5px 10px",
              margin: "10px",
              border: "1px solid #ccc",
            }}
          >
            <AiOutlineUser style={{ marginRight: "5px" }} />
            <p className="nostylep" style={{ fontSize: "15px" }}>
              Notification
            </p>
          </div>
          <div
            className="flexStyle"
            style={{
              textAlign: "center",
              borderRadius: "5px",
              margin: "10px",
              border: "1px solid #ccc",
            }}
          >
            <div className="flexStyle" style={{padding: "5px 10px" }}>
              <AiOutlineUser style={{ marginRight: "0px" }} />
              <p className="nostylep" style={{ fontSize: "15px" }}>
                Star
              </p>
            </div>
            <div
              className="flexStyle"
              style={{
                flex: 1,
                backgroundColor: "#fff",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
                alignItems: "center",
                justifyContent: "center",
                paddingRight: 5,
                paddingLeft: 5,
                fontSize: 12
              }}
            >
              <p className="nostylep">175k</p>
            </div>
          </div>
          <div
            className="flexStyle"
            style={{
              textAlign: "center",
              borderRadius: "5px",
              margin: "10px",
              border: "1px solid #ccc",
            }}
          >
            <div className="flexStyle" style={{padding: "5px 10px" }}>
              <AiOutlineUser style={{ marginRight: "5px" }} />
              <p className="nostylep" style={{ fontSize: "15px" }}>
                Fork
              </p>
            </div>
            <div
              className="flexStyle"
              style={{
                flex: 1,
                backgroundColor: "#fff",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
                alignItems: "center",
                justifyContent: "center",
                paddingRight: 5,
                paddingLeft: 5,
                fontSize: 12
              }}
            >
              <p className="nostylep">35.3k</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flexStyle" style={{overflow:'scroll'}}>
        {NavbarOptions.map((el) => {
          return (
            <div
              key={el.id}
              onClick={() => setSelectedTab(el.id)}
              className="flexStyle"
              style={{
                alignItems: "center",
                padding: 10,
                paddingBottom: selectedTab === el.id ? 8 : 10,
                borderBottom: selectedTab === el.id ? "2px solid red" : "none",
                cursor: "pointer",
              }}
            >
              {el.img}
              {el.title}
              {!el.notification ? null : (
                <p
                  className="notificationStyle"
                  style={{ padding: 1, margin: 5 }}
                >
                  {el.notification}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
