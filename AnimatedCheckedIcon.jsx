import React from "react";
import "./AnimatedCheckedIcon.css";

const AnimatedCheckedIcon = () => {
    return (
        <div className="success-checkmark">
            <div className="check-icon">
                <span className="icon-line line-tip"></span>
                <span className="icon-line line-long"></span>
                <div className="icon-circle"></div>
                <div className="icon-fix"></div>
            </div>
        </div>
        );
}

export default AnimatedCheckedIcon;
