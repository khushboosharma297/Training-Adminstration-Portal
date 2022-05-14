import React, {useEffect, useState} from "react";
import Course1 from "../UI/course1.png";
import Course2 from "../UI/course2.png";
import {NavLink} from "react-router-dom";
function Home(){
    useEffect(()=>{
        document.title = "Training Management Portal";
    })
    const [Course, setCourse] = useState([
        {
            ID: 1,
            title: "Learn React in 50 mins",
            tutor: {
                ID: 1,
                name: "Suresh Pal",
                username: "sureshpal",
            },
            duration: "50 min",            
            poster: Course1
        },
        {
            ID: 2,
            title: "Learn Node",
            tutor: {
                ID: 2,
                name: "Suresh Pal",
                username: "sureshpal",
            },
            duration: "1 hr 13 min",            
            poster: Course2
        }
    ]);
    var courseList = [];
    for(let i = 0; i < Course.length; i++){
        courseList.push(
            <a href={"/course/" + Course[i].ID} className="course rel" key={"course-" + i}>
                <div className="block rel" style={{
                    background: "#e2e2e2 url(" + Course[i].poster +") no-repeat center"
                }}>

                    <div className="user abs aic flex">
                        <div className="meta rel">
                            <h2 className="s15 name fontb cfff">{Course[i].tutor.name}</h2>
                            <h2 className="s13 uname fontn cfff">@{Course[i].tutor.username}</h2>
                        </div>
                    </div>

                    <div className="dura abs">
                        <h2 className="s13 name fontb cfff">{Course[i].duration}</h2>
                    </div>

                    <div className="course-title abs">
                        <h2 className="s15 name fontb cfff">{Course[i].title}</h2>
                    </div>

                </div>
            </a>
        );
    }

    return(
        <div className="home rel">
        <div className="section">
         <h2 className="title s24 fontb">Courses Available </h2>
                <div className="courses rel flex">
                    {courseList}
                </div>
        </div>
        </div>
    );
}
export default Home;