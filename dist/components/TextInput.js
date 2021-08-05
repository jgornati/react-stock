import React from "react";
import "./TextInput.css";

const TextInput = ({
  type = "text",
  label,
  value,
  onChange
}) => /*#__PURE__*/React.createElement("div", {
  className: "simple-form-group"
}, label && /*#__PURE__*/React.createElement("label", {
  className: "simple-text-label"
}, label), /*#__PURE__*/React.createElement("input", {
  type: type,
  className: "simple-text-input",
  value: value,
  onChange: e => onChange && onChange(e.target.value)
}));

export default TextInput;