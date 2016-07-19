import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "boxSizing": "border-box"
    },
    "body": {
        "background": "#FFF",
        "fontFamily": "Roboto, sans-serif",
        "fontWeight": "400",
        "lineHeight": 1.5,
        "color": "#888"
    },
    "h1": {
        "fontSize": 50,
        "lineHeight": 40,
        "fontWeight": "100"
    },
    "p": {
        "marginBottom": 1
    },
    "a": {
        "color": "#61C7B3",
        "textDecoration": "none",
        "transitionDuration": ".3s"
    },
    "a:hover": {
        "color": "#338f7d",
        "transitionDuration": ".05s",
        "textDecoration": "none"
    },
    "circle-icon": {
        "width": 30,
        "height": 30,
        "textAlign": "center",
        "lineHeight": 28,
        "border": "2px solid #B4BBC1",
        "borderRadius": 100,
        "fontSize": 14,
        "color": "#B4BBC1",
        "cursor": "pointer",
        "display": "block",
        "float": "left"
    },
    "circle-iconsmall": {
        "height": 25,
        "width": 25,
        "lineHeight": 23,
        "fontSize": 11
    },
    "circle-icon:hover": {
        "color": "#57636C",
        "borderColor": "#57636C"
    },
    "circle-iconred": {
        "color": "#D23B3D",
        "borderColor": "#D23B3D"
    },
    "circle-iconred:hover": {
        "color": "#791C1E",
        "borderColor": "#791C1E"
    },
    "message": {
        "position": "fixed",
        "top": 0,
        "bottom": 0,
        "width": "75%",
        "zIndex": 5,
        "transform": "translateX(200%)",
        "transitionDuration": ".5s",
        "paddingTop": 0,
        "paddingRight": 30,
        "paddingBottom": 0,
        "paddingLeft": 30,
        "background": "#EFEFEF"
    },
    "show-message message": {
        "transitionDuration": ".3s",
        "transform": "none"
    },
    "message header": {
        "marginBottom": 30,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "message header page-title": {
        "display": "block",
        "float": "none",
        "marginBottom": 20
    },
    "message header page-title icon": {
        "marginTop": 4,
        "marginRight": 10
    },
    "message header grey": {
        "marginLeft": 10,
        "color": "#999"
    },
    "message message-nano-wrapper": {
        "position": "absolute",
        "top": 165,
        "bottom": 0,
        "height": "auto",
        "left": 0,
        "right": 0,
        "width": "auto"
    },
    "message message-container": {
        "paddingTop": 0,
        "paddingRight": 30,
        "paddingBottom": 0,
        "paddingLeft": 30
    },
    "message message-container li": {
        "paddingTop": 25,
        "paddingRight": 25,
        "paddingBottom": 25,
        "paddingLeft": 25,
        "border": "1px solid rgba(0, 0, 0, 0.15)",
        "background": "#FFF",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0,
        "position": "relative"
    },
    "message message-container li:hover details left arrow": {
        "background": "#61C7B3",
        "border": "0px solid #61C7B3"
    },
    "message message-container li:hover details left arroworange": {
        "background": "#E2A917",
        "border": "0px solid #E2A917"
    },
    "message message-container li details": {
        "paddingBottom": 20,
        "borderBottom": "1px solid rgba(0, 0, 0, 0.1)",
        "marginBottom": 30,
        "overflow": "hidden"
    },
    "message message-container li details left": {
        "float": "left",
        "fontWeight": "600",
        "color": "#888",
        "transitionDuration": ".3s"
    },
    "message message-container li details left arrow": {
        "display": "inline-block",
        "position": "relative",
        "height": 2,
        "width": 20,
        "background": "rgba(0, 0, 0, 0.15)",
        "verticalAlign": "top",
        "marginTop": 12,
        "marginRight": 20,
        "marginBottom": 0,
        "marginLeft": 15,
        "border": "0px solid rgba(0, 0, 0, 0.15)",
        "transitionDuration": ".3s"
    },
    "message message-container li details left arrow:after": {
        "position": "absolute",
        "top": -4,
        "left": "100%",
        "height": 0,
        "width": 0,
        "border": "inherit",
        "borderWidth": 7,
        "borderStyle": "solid",
        "content": "''",
        "borderRight": 0,
        "borderTopColor": "transparent",
        "borderBottomColor": "transparent",
        "borderTopWidth": 5,
        "borderBottomWidth": 5
    },
    "message message-container li details right": {
        "float": "right",
        "color": "#999"
    },
    "message message-container li message": {
        "marginBottom": 40
    },
    "message message-container li:hover tool-box red-hover": {
        "color": "#D23B3D",
        "borderColor": "#D23B3D"
    },
    "message message-container li:hover tool-box red-hover:hover": {
        "color": "#791C1E",
        "borderColor": "#791C1E"
    },
    "message message-container li tool-box": {
        "position": "absolute",
        "bottom": 0,
        "right": 0,
        "border": "0px solid #DDDFE1",
        "borderTopWidth": 1,
        "borderLeftWidth": 1,
        "paddingTop": 8,
        "paddingRight": 10,
        "paddingBottom": 8,
        "paddingLeft": 10,
        "transitionDuration": ".3s"
    },
    "message message-container li tool-box a": {
        "marginRight": 10
    },
    "message message-container li tool-box a:last-child": {
        "marginRight": 0
    },
    "nano": {
        "position": "relative",
        "width": "100%",
        "height": "100%",
        "overflow": "hidden"
    },
    "nano > nano-content": {
        "position": "absolute",
        "overflow": "scroll",
        "overflowX": "hidden",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0
    },
    "nano > nano-content:focus": {
        "outline": "none"
    },
    "nano > nano-content::-webkit-scrollbar": {
        "visibility": "hidden"
    },
    "has-scrollbar > nano-content::-webkit-scrollbar": {
        "visibility": "visible"
    },
    "nano > nano-pane": {
        "background": "rgba(117, 117, 117, 0.2)",
        "position": "absolute",
        "width": 8,
        "right": 8,
        "top": 8,
        "bottom": 8,
        "visibility": "hidden\\9",
        "opacity": 0.01,
        "MozBorderRadius": 5,
        "WebkitBorderRadius": 5,
        "borderRadius": 5,
        "WebkitTransition": ".3s",
        "MozTransition": ".3s",
        "OTransition": ".3s",
        "transition": ".3s"
    },
    "nano > nano-pane > nano-slider": {
        "background": "#C7C7C7",
        "position": "relative",
        "MozBorderRadius": 3,
        "WebkitBorderRadius": 3,
        "borderRadius": 3,
        "WebkitTransition": ".3s",
        "MozTransition": ".3s",
        "OTransition": ".3s",
        "transition": ".3s",
        "WebkitTransitionProperty": "background",
        "MozTransitionProperty": "background",
        "OTransitionProperty": "background",
        "transitionProperty": "background"
    },
    "nano > nano-pane:hover > nano-slider": {
        "background": "#A6A6A6"
    },
    "nano > nano-paneactive > nano-slider": {
        "background": "#A6A6A6"
    },
    "nano:hover > nano-pane": {
        "visibility": "visible\\9",
        "opacity": 0.99
    },
    "nano-paneactive": {
        "visibility": "visible\\9",
        "opacity": 0.99
    },
    "nano-paneflashed": {
        "visibility": "visible\\9",
        "opacity": 0.99
    }
});