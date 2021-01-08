import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import Login from "./login/login";
import Register from "./login/register";

const App = (props) => {
    const [LoginActive, setLoginActive] = useState(true);
    const rightSide = useRef(null);
    const currentActive = useRef(null);

    useEffect(() => {
        rightSide.current.classList.add("right");
    }, [])

    const changeState = () => {
        if (LoginActive) {
            rightSide.current.classList.remove("right");
            rightSide.current.classList.add("left");
        } else {
            rightSide.current.classList.remove("left");
            rightSide.current.classList.add("right");
        }
        setLoginActive(!LoginActive);

    }

    const currentInactive = LoginActive ? "Register" : "Login";
    return (
        <div className="App">
            <div className="login">
                <div className="container">
                    {LoginActive && (
                        <Login containerRef={currentActive} />
                    )}
                    {!LoginActive && (
                        <Register containerRef={currentActive} />
                    )}
                </div>
                <RightSide
                    currentInactive={currentInactive}
                    containerRef={rightSide}
                    onClick={changeState}
                />
            </div>
        </div>
    );
}

const RightSide = props => {
    return (
        <div
            className="right-side"
            ref={props.containerRef}
            onClick={props.onClick}
        >
            <div className="inner-container">
                <div className="text">{props.currentInactive}</div>
            </div>
        </div>
    );
};

export default App;