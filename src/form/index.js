const defaults = require("lodash.defaults");
const isFunction = require("lodash.isfunction");
import merge from "merge-deep";

function defaultOptions(config) {

  return {
    outline: "0",
    borderRadius: ".25rem",
    padding: "1rem",
    input: {
      backgroundColor: config("colors.grey-lightest"),
      color: config("colors.black")
    }
  };
}

export const form = function (params = { form: {}, input: {} }) {

  return function ({ addComponents, config }) {
    const options = merge(defaultOptions(config), params);
    
    addComponents([
      {
        ".form-input": {
          outline: options.outline,
          borderRadius: options.borderRadius,
          padding: options.padding,
          backgroundColor: options.input.backgroundColor,
          color: options.input.color
        }
      }
    ]);
  };
};
