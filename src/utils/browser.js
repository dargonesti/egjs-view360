/**
 * Copyright (c) 2015 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/* eslint-disable no-new-func, no-nested-ternary */
const win = typeof window !== "undefined" && window.Math === Math ? window : typeof self !== "undefined" && self.Math === Math ? self : Function("return this")();
/* eslint-enable no-new-func, no-nested-ternary */

const doc = win.document;
const userAgent = win.navigator.userAgent;
const IS_SAFARI_ON_DESKTOP =
	userAgent.indexOf("Safari") !== -1 &&
	userAgent.indexOf("Chrome") === -1 &&
	userAgent.indexOf("Mac OS X") !== -1;

export {
	win as window,
	doc as document,
	IS_SAFARI_ON_DESKTOP
};
