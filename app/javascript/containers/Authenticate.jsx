import React, { useState, useEffect, useRef } from "react";
import "./Authenticate.scss";
import Login from "../components/authenticate/Login";
import Register from "../components/authenticate/Register";

const Authenticate = (props) => {
    const [loginActive, setLoginActive] = useState(true);
    const rightSide = useRef(null);
    const currentActive = useRef(null);

    useEffect(() => {
        rightSide.current.classList.add("right");
    }, [])

    const changeState = () => {
        if (loginActive) {
            rightSide.current.classList.remove("right");
            rightSide.current.classList.add("left");
        } else {
            rightSide.current.classList.remove("left");
            rightSide.current.classList.add("right");
        }
        setLoginActive(!loginActive);

    }

    const currentInactive = loginActive ? "Register" : "Login";
    return (
        <div className="Authenticate">
            <div className="login">
                <div className="container">
                    {loginActive && (
                        <Login containerRef={currentActive} />
                    )}
                    {!loginActive && (
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

export default Authenticate;