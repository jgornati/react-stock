import React from "react";
import "./Indicator.css";
import * as PropTypes from "prop-types";

//Components
import {ReactComponent as Empty} from "./img/empty.svg";
import {ReactComponent as Full} from "./img/full.svg";
import {ReactComponent as Low} from "./img/low.svg";
import {ReactComponent as Medium} from "./img/medium.svg";

export default function Indicator(props) {
    let levels = () => {
        if (props.stock >= props.config.high)
            return <Full/>
        else if (props.stock < props.config.high && props.stock > props.config.low)
            return <Medium/>
        else if (props.stock > 0 && props.stock <= props.config.low)
            return <Low/>
        else if (props.stock <= 0)
            return <Empty/>
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