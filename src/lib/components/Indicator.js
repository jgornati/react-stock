import React from "react";
import * as PropTypes from "prop-types";
import { ReactSVG } from 'react-svg'

//Components
import Empty from "./img/empty.svg";
import Full from "./img/full.svg";
import Low from "./img/low.svg";
import Medium from "./img/medium.svg";

const Indicator = (props) => {
    let levels = () => {
        if (props.stock >= props.config.high)
            return <ReactSVG src={Full}/>
        else if (props.stock < props.config.high && props.stock >= props.config.low)
            return <ReactSVG src={Medium}/>
        else if (props.stock > 0 && props.stock <= props.config.low)
            return <ReactSVG src={Low}/>
        else if (props.stock <= 0)
            return <ReactSVG src={Empty}/>
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