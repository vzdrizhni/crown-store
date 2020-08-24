"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCurrentUser = void 0;

var setCurrentUser = function setCurrentUser(user) {
  return {
    type: 'SET_CURRENT_USER',
    payload: user
  };
};

exports.setCurrentUser = setCurrentUser;