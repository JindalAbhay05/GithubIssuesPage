import React, { useState, useEffect, useCallback, useRef } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaAngleDown, FaBullseye,FaRegCommentAlt,FaGitter } from "react-icons/fa";
import fetchData from "../utility/fetchData";
import "./style.css";
const actions = [
  { title: "Author" },
  { title: "Label" },
  { title: "Projects" },
  { title: "MileStones" },
  { title: "Assignee" },
  { title: "Sort" },
];
const List = ({setErr}) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchDataFromApi = async ({setErr}) => {
    setLoading(true)
    const { data:newData, page: oldPage } = await fetchData({ page:page+1, setErr });
    setData([...data,...newData]);
    setPage(oldPage);
    setLoading(false)
  };

  const observer = useRef();
  const lastBookElementRef = useCallback(  // (*)
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            fetchDataFromApi && fetchDataFromApi({})
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  useEffect(() => {
    fetchDataFromApi({ setErr: setErr });
  }, []);
  return (
    <div>
      {/* Top Bar */}
      {/* <button onClick={()=>setErr("New Error")}>Generate Error</button> */}
      {/* <button onClick={()=>setErr("New Biggerrrrrrrrrr Error")}>Generate Error</button> */}
      <div
        className="flexStyle"
        style={{
          justifyContent: "space-between",
          backgroundColor: "#EFF5F5",
          paddingLeft: 10,
          borderTopRightRadius: "10px",
          borderTopLeftRadius: "10px",
          border: "1px solid #ccc",
          borderBottom: "none",
        }}
      >
        {/* Issues Open */}
        <div className="flexStyle">
          <div className="flexStyle">
            <div
              className="flexStyle"
              style={{ marginRight: 10, alignItems: "center" }}
            >
              <span style={{ color: "#000", fontWeight: "bold" }}>
                <AiFillGithub style={{ alignItems: "center" }} /> 625 Open
              </span>
            </div>
            <div className="flexStyle" style={{ alignItems: "center" }}>
              <span>
                <AiFillGithub style={{ align: "center" }} /> 10,104 Closed
              </span>
            </div>
          </div>
        </div>
        {/* Actions */}
        <div className="flexStyle">
          {actions.map((element,index) => {
            return (
              <div
                key={index}
                className="flexStyle"
                style={{ alignItems: "center", padding: 8, margin: 8 }}
              >
                <p className="nostylep" style={{ marginRight: 2 }}>
                  {element.title}
                </p>
                <FaAngleDown />
              </div>
            );
          })}
        </div>
      </div>
      {/* List */}
      <div style={{borderBottomRightRadius: "10px",
                borderBottomLeftRadius: "10px",border: "1px solid #ccc",}}>
      <div>
        {data.map((element) => {
          return (
            <div
              key={element.id}
              className="flexStyle"
              style={{
                padding: 10,
                borderBottom: "1px solid #ccc",
              }}
            >
              {/* Icon- leftContainer */}
              <div style={{ marginRight: 10 }}>
                <FaBullseye style={{ color: "green" }} />
              </div>
              {/* Explanation- RightContainer */}
              <div className="flexStyle" style={{flex:1}}>
                <div style={{flex:0.7}}>
                  <p
                    className="nostylep flexStyle"
                    style={{ fontWeight: "bold", flexWrap: "wrap" }}
                  >
                    {element.title}
                    {element.labels.map((label,index) => {
                      return (
                        <span
                          key={index}
                          style={{
                            marginLeft: 5,
                            fontSize: 10,
                            fontWeight: "normal",
                            padding: "5px 10px",
                            backgroundColor: `#${label.color}`,
                            borderRadius: "10px",
                          }}
                        >
                          {label.name}
                        </span>
                      );
                    })}
                  </p>
                  <p style={{ color: "#333", fontSize: 12 }}>
                    {`#${element.number} opened 1 hour ago by ${
                      element.user.login || ""
                    }`}
                  </p>
                </div>
                <div className="flexStyle" style={{flex:0.1,alignItems:'center',justifyContent:'center'}}>
                    {element?.comments?<FaGitter/>:null}
                    <span style={{marginLeft:5,fontSize:12}}>{element.comments?element?.comments:""}</span> 
                </div>
                <div className="flexStyle" style={{flex:0.1,alignItems:'center',justifyContent:'center',borderRadius:"100%"}}>
                    <img
                        src={element.user.avatar_url}
                        width="20%"
                        style={{borderRadius:"100%"}}
                    />
                </div>
                <div className="flexStyle" style={{flex:0.1,alignItems:'center',justifyContent:'center'}}>
                    {element?.comments?<FaRegCommentAlt/>:null}
                    <span style={{marginLeft:5,fontSize:12}}>{element.comments?element?.comments:""}</span> 
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
      <div ref={lastBookElementRef} className="flexStyle" style={{justifyContent:'center'}} >
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default List;
