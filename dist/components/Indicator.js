import React from "react";
import * as PropTypes from "prop-types";
import { ReactSVG } from 'react-svg'; //Components

import Empty from "./img/empty.svg";
import Full from "./img/full.svg";
import Low from "./img/low.svg";
import Medium from "./img/medium.svg";

const Indicator = props => {
  let levels = () => {
    if (props.stock >= props.config.high) return /*#__PURE__*/React.createElement(ReactSVG, {
      src: Full
    });else if (props.stock < props.config.high && props.stock >= props.config.low) return /*#__PURE__*/React.createElement(ReactSVG, {
      src: Medium
    });else if (props.stock > 0 && props.stock <= props.config.low) return /*#__PURE__*/React.createElement(ReactSVG, {
      src: Low
    });else if (props.stock <= 0) return /*#__PURE__*/React.createElement(ReactSVG, {
      src: Empty
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    style: { ...props.style
    }
  }, levels());
};

Indicator.propTypes = {
  stock: PropTypes.number.isRequired,
  config: PropTypes.object
};
export default Indicator;