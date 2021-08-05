import React from "react";
import * as PropTypes from "prop-types";

//Components
import Empty from "./img/empty.svg";
import Full from "./img/full.svg";
import Low from "./img/low.svg";
import Medium from "./img/medium.svg";

const Indicator = (props) => {
    let levels = () => {
        if (props.stock >= props.config.high)
            return <img src={Full} alt=""/>
        else if (props.stock < props.config.high && props.stock >= props.config.low)
            return <img src={Medium} alt=""/>
        else if (props.stock > 0 && props.stock <= props.config.low)
            return <img src={Low} alt=""/>
        else if (props.stock <= 0)
            return <img src={Empty} alt=""/>
    }

    return (
        <div style={{...props.style}}>
            {levels()}
        </div>
    )
}
Indicator.propTypes = {
    stock: PropTypes.number.isRequired,
    config: PropTypes.object,
};

export default Indicator;