import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "button": {
        "color": "#666",
        "backgroundColor": "#EEE",
        "borderColor": "#EEE",
        "fontWeight": "300",
        "fontSize": 16,
        "fontFamily": "\"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif",
        "textDecoration": "none",
        "textAlign": "center",
        "lineHeight": 40,
        "height": 40,
        "paddingTop": 0,
        "paddingRight": 40,
        "paddingBottom": 0,
        "paddingLeft": 40,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "display": "inline-block",
        "appearance": "none",
        "cursor": "pointer",
        "border": "none",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "WebkitTransitionProperty": "all",
        "transitionProperty": "all",
        "WebkitTransitionDuration": ".3s",
        "transitionDuration": ".3s"
    },
    "button:visited": {
        "color": "#666"
    },
    "button:hover": {
        "backgroundColor": "#f6f6f6",
        "textDecoration": "none",
        "outline": "none"
    },
    "button:focus": {
        "backgroundColor": "#f6f6f6",
        "textDecoration": "none",
        "outline": "none"
    },
    "button:active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.3)",
        "textDecoration": "none",
        "backgroundColor": "#eeeeee",
        "borderColor": "#cfcfcf",
        "color": "#d4d4d4",
        "WebkitTransitionDuration": "0s",
        "transitionDuration": "0s",
        "WebkitBoxShadow": "inset 0 1px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "inset 0 1px 3px rgba(0, 0, 0, 0.2)"
    },
    "buttonactive": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.3)",
        "textDecoration": "none",
        "backgroundColor": "#eeeeee",
        "borderColor": "#cfcfcf",
        "color": "#d4d4d4",
        "WebkitTransitionDuration": "0s",
        "transitionDuration": "0s",
        "WebkitBoxShadow": "inset 0 1px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "inset 0 1px 3px rgba(0, 0, 0, 0.2)"
    },
    "buttonis-active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.3)",
        "textDecoration": "none",
        "backgroundColor": "#eeeeee",
        "borderColor": "#cfcfcf",
        "color": "#d4d4d4",
        "WebkitTransitionDuration": "0s",
        "transitionDuration": "0s",
        "WebkitBoxShadow": "inset 0 1px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "inset 0 1px 3px rgba(0, 0, 0, 0.2)"
    },
    "buttondisabled": {
        "top": "0 !important",
        "background": "#EEE !important",
        "border": "1px solid #DDD !important",
        "textShadow": "0 1px 1px white !important",
        "color": "#CCC !important",
        "cursor": "default !important",
        "appearance": "none !important",
        "WebkitBoxShadow": "none !important",
        "boxShadow": "none !important",
        "opacity": ".8 !important"
    },
    "buttonis-disabled": {
        "top": "0 !important",
        "background": "#EEE !important",
        "border": "1px solid #DDD !important",
        "textShadow": "0 1px 1px white !important",
        "color": "#CCC !important",
        "cursor": "default !important",
        "appearance": "none !important",
        "WebkitBoxShadow": "none !important",
        "boxShadow": "none !important",
        "opacity": ".8 !important"
    },
    "button:disabled": {
        "top": "0 !important",
        "background": "#EEE !important",
        "border": "1px solid #DDD !important",
        "textShadow": "0 1px 1px white !important",
        "color": "#CCC !important",
        "cursor": "default !important",
        "appearance": "none !important",
        "WebkitBoxShadow": "none !important",
        "boxShadow": "none !important",
        "opacity": ".8 !important"
    },
    "button-uppercase": {
        "textTransform": "uppercase"
    },
    "button-lowercase": {
        "textTransform": "lowercase"
    },
    "button-capitalize": {
        "textTransform": "capitalize"
    },
    "button-small-caps": {
        "fontVariant": "small-caps"
    },
    "button-icon-txt-large": {
        "fontSize": "36px !important"
    },
    "button-width-small": {
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": "!important",
        "paddingLeft": 10
    },
    "button-primary": {
        "backgroundColor": "#1B9AF7",
        "borderColor": "#1B9AF7",
        "color": "#FFF"
    },
    "button-primary-flat": {
        "backgroundColor": "#1B9AF7",
        "borderColor": "#1B9AF7",
        "color": "#FFF"
    },
    "button-primary:visited": {
        "color": "#FFF"
    },
    "button-primary-flat:visited": {
        "color": "#FFF"
    },
    "button-primary:hover": {
        "backgroundColor": "#4cb0f9",
        "borderColor": "#4cb0f9",
        "color": "#FFF"
    },
    "button-primary:focus": {
        "backgroundColor": "#4cb0f9",
        "borderColor": "#4cb0f9",
        "color": "#FFF"
    },
    "button-primary-flat:hover": {
        "backgroundColor": "#4cb0f9",
        "borderColor": "#4cb0f9",
        "color": "#FFF"
    },
    "button-primary-flat:focus": {
        "backgroundColor": "#4cb0f9",
        "borderColor": "#4cb0f9",
        "color": "#FFF"
    },
    "button-primary:active": {
        "backgroundColor": "#2798eb",
        "borderColor": "#2798eb",
        "color": "#0880d7"
    },
    "button-primaryactive": {
        "backgroundColor": "#2798eb",
        "borderColor": "#2798eb",
        "color": "#0880d7"
    },
    "button-primaryis-active": {
        "backgroundColor": "#2798eb",
        "borderColor": "#2798eb",
        "color": "#0880d7"
    },
    "button-primary-flat:active": {
        "backgroundColor": "#2798eb",
        "borderColor": "#2798eb",
        "color": "#0880d7"
    },
    "button-primary-flatactive": {
        "backgroundColor": "#2798eb",
        "borderColor": "#2798eb",
        "color": "#0880d7"
    },
    "button-primary-flatis-active": {
        "backgroundColor": "#2798eb",
        "borderColor": "#2798eb",
        "color": "#0880d7"
    },
    "button-plain": {
        "backgroundColor": "#FFF",
        "borderColor": "#FFF",
        "color": "#1B9AF7"
    },
    "button-plain-flat": {
        "backgroundColor": "#FFF",
        "borderColor": "#FFF",
        "color": "#1B9AF7"
    },
    "button-plain:visited": {
        "color": "#1B9AF7"
    },
    "button-plain-flat:visited": {
        "color": "#1B9AF7"
    },
    "button-plain:hover": {
        "backgroundColor": "white",
        "borderColor": "white",
        "color": "#1B9AF7"
    },
    "button-plain:focus": {
        "backgroundColor": "white",
        "borderColor": "white",
        "color": "#1B9AF7"
    },
    "button-plain-flat:hover": {
        "backgroundColor": "white",
        "borderColor": "white",
        "color": "#1B9AF7"
    },
    "button-plain-flat:focus": {
        "backgroundColor": "white",
        "borderColor": "white",
        "color": "#1B9AF7"
    },
    "button-plain:active": {
        "backgroundColor": "white",
        "borderColor": "white",
        "color": "#e6e6e6"
    },
    "button-plainactive": {
        "backgroundColor": "white",
        "borderColor": "white",
        "color": "#e6e6e6"
    },
    "button-plainis-active": {
        "backgroundColor": "white",
        "borderColor": "white",
        "color": "#e6e6e6"
    },
    "button-plain-flat:active": {
        "backgroundColor": "white",
        "borderColor": "white",
        "color": "#e6e6e6"
    },
    "button-plain-flatactive": {
        "backgroundColor": "white",
        "borderColor": "white",
        "color": "#e6e6e6"
    },
    "button-plain-flatis-active": {
        "backgroundColor": "white",
        "borderColor": "white",
        "color": "#e6e6e6"
    },
    "button-inverse": {
        "backgroundColor": "#222",
        "borderColor": "#222",
        "color": "#EEE"
    },
    "button-inverse-flat": {
        "backgroundColor": "#222",
        "borderColor": "#222",
        "color": "#EEE"
    },
    "button-inverse:visited": {
        "color": "#EEE"
    },
    "button-inverse-flat:visited": {
        "color": "#EEE"
    },
    "button-inverse:hover": {
        "backgroundColor": "#3c3c3c",
        "borderColor": "#3c3c3c",
        "color": "#EEE"
    },
    "button-inverse:focus": {
        "backgroundColor": "#3c3c3c",
        "borderColor": "#3c3c3c",
        "color": "#EEE"
    },
    "button-inverse-flat:hover": {
        "backgroundColor": "#3c3c3c",
        "borderColor": "#3c3c3c",
        "color": "#EEE"
    },
    "button-inverse-flat:focus": {
        "backgroundColor": "#3c3c3c",
        "borderColor": "#3c3c3c",
        "color": "#EEE"
    },
    "button-inverse:active": {
        "backgroundColor": "#222222",
        "borderColor": "#222222",
        "color": "#090909"
    },
    "button-inverseactive": {
        "backgroundColor": "#222222",
        "borderColor": "#222222",
        "color": "#090909"
    },
    "button-inverseis-active": {
        "backgroundColor": "#222222",
        "borderColor": "#222222",
        "color": "#090909"
    },
    "button-inverse-flat:active": {
        "backgroundColor": "#222222",
        "borderColor": "#222222",
        "color": "#090909"
    },
    "button-inverse-flatactive": {
        "backgroundColor": "#222222",
        "borderColor": "#222222",
        "color": "#090909"
    },
    "button-inverse-flatis-active": {
        "backgroundColor": "#222222",
        "borderColor": "#222222",
        "color": "#090909"
    },
    "button-action": {
        "backgroundColor": "#A5DE37",
        "borderColor": "#A5DE37",
        "color": "#FFF"
    },
    "button-action-flat": {
        "backgroundColor": "#A5DE37",
        "borderColor": "#A5DE37",
        "color": "#FFF"
    },
    "button-action:visited": {
        "color": "#FFF"
    },
    "button-action-flat:visited": {
        "color": "#FFF"
    },
    "button-action:hover": {
        "backgroundColor": "#b9e563",
        "borderColor": "#b9e563",
        "color": "#FFF"
    },
    "button-action:focus": {
        "backgroundColor": "#b9e563",
        "borderColor": "#b9e563",
        "color": "#FFF"
    },
    "button-action-flat:hover": {
        "backgroundColor": "#b9e563",
        "borderColor": "#b9e563",
        "color": "#FFF"
    },
    "button-action-flat:focus": {
        "backgroundColor": "#b9e563",
        "borderColor": "#b9e563",
        "color": "#FFF"
    },
    "button-action:active": {
        "backgroundColor": "#a1d243",
        "borderColor": "#a1d243",
        "color": "#8bc220"
    },
    "button-actionactive": {
        "backgroundColor": "#a1d243",
        "borderColor": "#a1d243",
        "color": "#8bc220"
    },
    "button-actionis-active": {
        "backgroundColor": "#a1d243",
        "borderColor": "#a1d243",
        "color": "#8bc220"
    },
    "button-action-flat:active": {
        "backgroundColor": "#a1d243",
        "borderColor": "#a1d243",
        "color": "#8bc220"
    },
    "button-action-flatactive": {
        "backgroundColor": "#a1d243",
        "borderColor": "#a1d243",
        "color": "#8bc220"
    },
    "button-action-flatis-active": {
        "backgroundColor": "#a1d243",
        "borderColor": "#a1d243",
        "color": "#8bc220"
    },
    "button-highlight": {
        "backgroundColor": "#FEAE1B",
        "borderColor": "#FEAE1B",
        "color": "#FFF"
    },
    "button-highlight-flat": {
        "backgroundColor": "#FEAE1B",
        "borderColor": "#FEAE1B",
        "color": "#FFF"
    },
    "button-highlight:visited": {
        "color": "#FFF"
    },
    "button-highlight-flat:visited": {
        "color": "#FFF"
    },
    "button-highlight:hover": {
        "backgroundColor": "#fec04e",
        "borderColor": "#fec04e",
        "color": "#FFF"
    },
    "button-highlight:focus": {
        "backgroundColor": "#fec04e",
        "borderColor": "#fec04e",
        "color": "#FFF"
    },
    "button-highlight-flat:hover": {
        "backgroundColor": "#fec04e",
        "borderColor": "#fec04e",
        "color": "#FFF"
    },
    "button-highlight-flat:focus": {
        "backgroundColor": "#fec04e",
        "borderColor": "#fec04e",
        "color": "#FFF"
    },
    "button-highlight:active": {
        "backgroundColor": "#f3ab26",
        "borderColor": "#f3ab26",
        "color": "#e59501"
    },
    "button-highlightactive": {
        "backgroundColor": "#f3ab26",
        "borderColor": "#f3ab26",
        "color": "#e59501"
    },
    "button-highlightis-active": {
        "backgroundColor": "#f3ab26",
        "borderColor": "#f3ab26",
        "color": "#e59501"
    },
    "button-highlight-flat:active": {
        "backgroundColor": "#f3ab26",
        "borderColor": "#f3ab26",
        "color": "#e59501"
    },
    "button-highlight-flatactive": {
        "backgroundColor": "#f3ab26",
        "borderColor": "#f3ab26",
        "color": "#e59501"
    },
    "button-highlight-flatis-active": {
        "backgroundColor": "#f3ab26",
        "borderColor": "#f3ab26",
        "color": "#e59501"
    },
    "button-caution": {
        "backgroundColor": "#FF4351",
        "borderColor": "#FF4351",
        "color": "#FFF"
    },
    "button-caution-flat": {
        "backgroundColor": "#FF4351",
        "borderColor": "#FF4351",
        "color": "#FFF"
    },
    "button-caution:visited": {
        "color": "#FFF"
    },
    "button-caution-flat:visited": {
        "color": "#FFF"
    },
    "button-caution:hover": {
        "backgroundColor": "#ff7680",
        "borderColor": "#ff7680",
        "color": "#FFF"
    },
    "button-caution:focus": {
        "backgroundColor": "#ff7680",
        "borderColor": "#ff7680",
        "color": "#FFF"
    },
    "button-caution-flat:hover": {
        "backgroundColor": "#ff7680",
        "borderColor": "#ff7680",
        "color": "#FFF"
    },
    "button-caution-flat:focus": {
        "backgroundColor": "#ff7680",
        "borderColor": "#ff7680",
        "color": "#FFF"
    },
    "button-caution:active": {
        "backgroundColor": "#f64c59",
        "borderColor": "#f64c59",
        "color": "#ff1022"
    },
    "button-cautionactive": {
        "backgroundColor": "#f64c59",
        "borderColor": "#f64c59",
        "color": "#ff1022"
    },
    "button-cautionis-active": {
        "backgroundColor": "#f64c59",
        "borderColor": "#f64c59",
        "color": "#ff1022"
    },
    "button-caution-flat:active": {
        "backgroundColor": "#f64c59",
        "borderColor": "#f64c59",
        "color": "#ff1022"
    },
    "button-caution-flatactive": {
        "backgroundColor": "#f64c59",
        "borderColor": "#f64c59",
        "color": "#ff1022"
    },
    "button-caution-flatis-active": {
        "backgroundColor": "#f64c59",
        "borderColor": "#f64c59",
        "color": "#ff1022"
    },
    "button-royal": {
        "backgroundColor": "#7B72E9",
        "borderColor": "#7B72E9",
        "color": "#FFF"
    },
    "button-royal-flat": {
        "backgroundColor": "#7B72E9",
        "borderColor": "#7B72E9",
        "color": "#FFF"
    },
    "button-royal:visited": {
        "color": "#FFF"
    },
    "button-royal-flat:visited": {
        "color": "#FFF"
    },
    "button-royal:hover": {
        "backgroundColor": "#a49ef0",
        "borderColor": "#a49ef0",
        "color": "#FFF"
    },
    "button-royal:focus": {
        "backgroundColor": "#a49ef0",
        "borderColor": "#a49ef0",
        "color": "#FFF"
    },
    "button-royal-flat:hover": {
        "backgroundColor": "#a49ef0",
        "borderColor": "#a49ef0",
        "color": "#FFF"
    },
    "button-royal-flat:focus": {
        "backgroundColor": "#a49ef0",
        "borderColor": "#a49ef0",
        "color": "#FFF"
    },
    "button-royal:active": {
        "backgroundColor": "#827ae1",
        "borderColor": "#827ae1",
        "color": "#5246e2"
    },
    "button-royalactive": {
        "backgroundColor": "#827ae1",
        "borderColor": "#827ae1",
        "color": "#5246e2"
    },
    "button-royalis-active": {
        "backgroundColor": "#827ae1",
        "borderColor": "#827ae1",
        "color": "#5246e2"
    },
    "button-royal-flat:active": {
        "backgroundColor": "#827ae1",
        "borderColor": "#827ae1",
        "color": "#5246e2"
    },
    "button-royal-flatactive": {
        "backgroundColor": "#827ae1",
        "borderColor": "#827ae1",
        "color": "#5246e2"
    },
    "button-royal-flatis-active": {
        "backgroundColor": "#827ae1",
        "borderColor": "#827ae1",
        "color": "#5246e2"
    },
    "button-block": {
        "display": "block"
    },
    "button-stacked": {
        "display": "block"
    },
    "button-square": {
        "borderRadius": 0,
        "paddingTop": 0,
        "paddingRight": "!important",
        "paddingBottom": 0,
        "paddingLeft": "!important",
        "width": 40
    },
    "button-box": {
        "borderRadius": 10,
        "paddingTop": 0,
        "paddingRight": "!important",
        "paddingBottom": 0,
        "paddingLeft": "!important",
        "width": 40
    },
    "button-rounded": {
        "borderRadius": 4
    },
    "button-pill": {
        "borderRadius": 200
    },
    "button-circle": {
        "borderRadius": "100%",
        "paddingTop": 0,
        "paddingRight": "!important",
        "paddingBottom": 0,
        "paddingLeft": "!important",
        "width": 40
    },
    "button-circlebutton-giant": {
        "width": 70
    },
    "button-boxbutton-giant": {
        "width": 70
    },
    "button-squarebutton-giant": {
        "width": 70
    },
    "button-circlebutton-jumbo": {
        "width": 60
    },
    "button-boxbutton-jumbo": {
        "width": 60
    },
    "button-squarebutton-jumbo": {
        "width": 60
    },
    "button-circlebutton-large": {
        "width": 50
    },
    "button-boxbutton-large": {
        "width": 50
    },
    "button-squarebutton-large": {
        "width": 50
    },
    "button-circlebutton-normal": {
        "width": 40
    },
    "button-boxbutton-normal": {
        "width": 40
    },
    "button-squarebutton-normal": {
        "width": 40
    },
    "button-circlebutton-small": {
        "width": 30
    },
    "button-boxbutton-small": {
        "width": 30
    },
    "button-squarebutton-small": {
        "width": 30
    },
    "button-circlebutton-tiny": {
        "width": 24
    },
    "button-boxbutton-tiny": {
        "width": 24
    },
    "button-squarebutton-tiny": {
        "width": 24
    },
    "button-border": {
        "background": "none",
        "borderWidth": 2,
        "borderStyle": "solid",
        "lineHeight": 36
    },
    "button-border-thin": {
        "background": "none",
        "borderWidth": 1,
        "borderStyle": "solid",
        "lineHeight": 36
    },
    "button-border-thick": {
        "background": "none",
        "borderWidth": 3,
        "borderStyle": "solid",
        "lineHeight": 36
    },
    "button-border:hover": {
        "backgroundColor": "rgba(255, 255, 255, 0.9)"
    },
    "button-border-thin:hover": {
        "backgroundColor": "rgba(255, 255, 255, 0.9)"
    },
    "button-border-thick:hover": {
        "backgroundColor": "rgba(255, 255, 255, 0.9)"
    },
    "button-border:active": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "textShadow": "none",
        "WebkitTransitionProperty": "all",
        "transitionProperty": "all",
        "WebkitTransitionDuration": ".3s",
        "transitionDuration": ".3s"
    },
    "button-border-thin:active": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "textShadow": "none",
        "WebkitTransitionProperty": "all",
        "transitionProperty": "all",
        "WebkitTransitionDuration": ".3s",
        "transitionDuration": ".3s"
    },
    "button-border-thick:active": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "textShadow": "none",
        "WebkitTransitionProperty": "all",
        "transitionProperty": "all",
        "WebkitTransitionDuration": ".3s",
        "transitionDuration": ".3s"
    },
    "button-borderactive": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "textShadow": "none",
        "WebkitTransitionProperty": "all",
        "transitionProperty": "all",
        "WebkitTransitionDuration": ".3s",
        "transitionDuration": ".3s"
    },
    "activebutton-border-thin": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "textShadow": "none",
        "WebkitTransitionProperty": "all",
        "transitionProperty": "all",
        "WebkitTransitionDuration": ".3s",
        "transitionDuration": ".3s"
    },
    "activebutton-border-thick": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "textShadow": "none",
        "WebkitTransitionProperty": "all",
        "transitionProperty": "all",
        "WebkitTransitionDuration": ".3s",
        "transitionDuration": ".3s"
    },
    "button-borderis-active": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "textShadow": "none",
        "WebkitTransitionProperty": "all",
        "transitionProperty": "all",
        "WebkitTransitionDuration": ".3s",
        "transitionDuration": ".3s"
    },
    "is-activebutton-border-thin": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "textShadow": "none",
        "WebkitTransitionProperty": "all",
        "transitionProperty": "all",
        "WebkitTransitionDuration": ".3s",
        "transitionDuration": ".3s"
    },
    "is-activebutton-border-thick": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "textShadow": "none",
        "WebkitTransitionProperty": "all",
        "transitionProperty": "all",
        "WebkitTransitionDuration": ".3s",
        "transitionDuration": ".3s"
    },
    "button-borderbutton-primary": {
        "color": "#1B9AF7"
    },
    "button-primarybutton-border-thin": {
        "color": "#1B9AF7"
    },
    "button-primarybutton-border-thick": {
        "color": "#1B9AF7"
    },
    "button-border-thinbutton-primary": {
        "color": "#1B9AF7"
    },
    "button-border-thickbutton-primary": {
        "color": "#1B9AF7"
    },
    "button-borderbutton-primary:hover": {
        "backgroundColor": "rgba(76, 176, 249, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-primarybutton-border-thin:hover": {
        "backgroundColor": "rgba(76, 176, 249, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-primarybutton-border-thick:hover": {
        "backgroundColor": "rgba(76, 176, 249, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-borderbutton-primary:focus": {
        "backgroundColor": "rgba(76, 176, 249, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-primarybutton-border-thin:focus": {
        "backgroundColor": "rgba(76, 176, 249, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-primarybutton-border-thick:focus": {
        "backgroundColor": "rgba(76, 176, 249, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-border-thinbutton-primary:hover": {
        "backgroundColor": "rgba(76, 176, 249, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-border-thinbutton-primary:focus": {
        "backgroundColor": "rgba(76, 176, 249, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-border-thickbutton-primary:hover": {
        "backgroundColor": "rgba(76, 176, 249, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-border-thickbutton-primary:focus": {
        "backgroundColor": "rgba(76, 176, 249, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-borderbutton-primary:active": {
        "backgroundColor": "rgba(39, 152, 235, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-primarybutton-border-thin:active": {
        "backgroundColor": "rgba(39, 152, 235, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-primarybutton-border-thick:active": {
        "backgroundColor": "rgba(39, 152, 235, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-borderbutton-primaryactive": {
        "backgroundColor": "rgba(39, 152, 235, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-primaryactivebutton-border-thin": {
        "backgroundColor": "rgba(39, 152, 235, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-primaryactivebutton-border-thick": {
        "backgroundColor": "rgba(39, 152, 235, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-borderbutton-primaryis-active": {
        "backgroundColor": "rgba(39, 152, 235, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-primaryis-activebutton-border-thin": {
        "backgroundColor": "rgba(39, 152, 235, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-primaryis-activebutton-border-thick": {
        "backgroundColor": "rgba(39, 152, 235, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thinbutton-primary:active": {
        "backgroundColor": "rgba(39, 152, 235, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thinbutton-primaryactive": {
        "backgroundColor": "rgba(39, 152, 235, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thinbutton-primaryis-active": {
        "backgroundColor": "rgba(39, 152, 235, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thickbutton-primary:active": {
        "backgroundColor": "rgba(39, 152, 235, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thickbutton-primaryactive": {
        "backgroundColor": "rgba(39, 152, 235, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thickbutton-primaryis-active": {
        "backgroundColor": "rgba(39, 152, 235, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-borderbutton-plain": {
        "color": "#FFF"
    },
    "button-plainbutton-border-thin": {
        "color": "#FFF"
    },
    "button-plainbutton-border-thick": {
        "color": "#FFF"
    },
    "button-border-thinbutton-plain": {
        "color": "#FFF"
    },
    "button-border-thickbutton-plain": {
        "color": "#FFF"
    },
    "button-borderbutton-plain:hover": {
        "backgroundColor": "rgba(255, 255, 255, 0.9)",
        "color": "rgba(27, 154, 247, 0.9)"
    },
    "button-plainbutton-border-thin:hover": {
        "backgroundColor": "rgba(255, 255, 255, 0.9)",
        "color": "rgba(27, 154, 247, 0.9)"
    },
    "button-plainbutton-border-thick:hover": {
        "backgroundColor": "rgba(255, 255, 255, 0.9)",
        "color": "rgba(27, 154, 247, 0.9)"
    },
    "button-borderbutton-plain:focus": {
        "backgroundColor": "rgba(255, 255, 255, 0.9)",
        "color": "rgba(27, 154, 247, 0.9)"
    },
    "button-plainbutton-border-thin:focus": {
        "backgroundColor": "rgba(255, 255, 255, 0.9)",
        "color": "rgba(27, 154, 247, 0.9)"
    },
    "button-plainbutton-border-thick:focus": {
        "backgroundColor": "rgba(255, 255, 255, 0.9)",
        "color": "rgba(27, 154, 247, 0.9)"
    },
    "button-border-thinbutton-plain:hover": {
        "backgroundColor": "rgba(255, 255, 255, 0.9)",
        "color": "rgba(27, 154, 247, 0.9)"
    },
    "button-border-thinbutton-plain:focus": {
        "backgroundColor": "rgba(255, 255, 255, 0.9)",
        "color": "rgba(27, 154, 247, 0.9)"
    },
    "button-border-thickbutton-plain:hover": {
        "backgroundColor": "rgba(255, 255, 255, 0.9)",
        "color": "rgba(27, 154, 247, 0.9)"
    },
    "button-border-thickbutton-plain:focus": {
        "backgroundColor": "rgba(255, 255, 255, 0.9)",
        "color": "rgba(27, 154, 247, 0.9)"
    },
    "button-borderbutton-plain:active": {
        "backgroundColor": "rgba(255, 255, 255, 0.7)",
        "color": "rgba(27, 154, 247, 0.5)",
        "opacity": 0.3
    },
    "button-plainbutton-border-thin:active": {
        "backgroundColor": "rgba(255, 255, 255, 0.7)",
        "color": "rgba(27, 154, 247, 0.5)",
        "opacity": 0.3
    },
    "button-plainbutton-border-thick:active": {
        "backgroundColor": "rgba(255, 255, 255, 0.7)",
        "color": "rgba(27, 154, 247, 0.5)",
        "opacity": 0.3
    },
    "button-borderbutton-plainactive": {
        "backgroundColor": "rgba(255, 255, 255, 0.7)",
        "color": "rgba(27, 154, 247, 0.5)",
        "opacity": 0.3
    },
    "button-plainactivebutton-border-thin": {
        "backgroundColor": "rgba(255, 255, 255, 0.7)",
        "color": "rgba(27, 154, 247, 0.5)",
        "opacity": 0.3
    },
    "button-plainactivebutton-border-thick": {
        "backgroundColor": "rgba(255, 255, 255, 0.7)",
        "color": "rgba(27, 154, 247, 0.5)",
        "opacity": 0.3
    },
    "button-borderbutton-plainis-active": {
        "backgroundColor": "rgba(255, 255, 255, 0.7)",
        "color": "rgba(27, 154, 247, 0.5)",
        "opacity": 0.3
    },
    "button-plainis-activebutton-border-thin": {
        "backgroundColor": "rgba(255, 255, 255, 0.7)",
        "color": "rgba(27, 154, 247, 0.5)",
        "opacity": 0.3
    },
    "button-plainis-activebutton-border-thick": {
        "backgroundColor": "rgba(255, 255, 255, 0.7)",
        "color": "rgba(27, 154, 247, 0.5)",
        "opacity": 0.3
    },
    "button-border-thinbutton-plain:active": {
        "backgroundColor": "rgba(255, 255, 255, 0.7)",
        "color": "rgba(27, 154, 247, 0.5)",
        "opacity": 0.3
    },
    "button-border-thinbutton-plainactive": {
        "backgroundColor": "rgba(255, 255, 255, 0.7)",
        "color": "rgba(27, 154, 247, 0.5)",
        "opacity": 0.3
    },
    "button-border-thinbutton-plainis-active": {
        "backgroundColor": "rgba(255, 255, 255, 0.7)",
        "color": "rgba(27, 154, 247, 0.5)",
        "opacity": 0.3
    },
    "button-border-thickbutton-plain:active": {
        "backgroundColor": "rgba(255, 255, 255, 0.7)",
        "color": "rgba(27, 154, 247, 0.5)",
        "opacity": 0.3
    },
    "button-border-thickbutton-plainactive": {
        "backgroundColor": "rgba(255, 255, 255, 0.7)",
        "color": "rgba(27, 154, 247, 0.5)",
        "opacity": 0.3
    },
    "button-border-thickbutton-plainis-active": {
        "backgroundColor": "rgba(255, 255, 255, 0.7)",
        "color": "rgba(27, 154, 247, 0.5)",
        "opacity": 0.3
    },
    "button-borderbutton-inverse": {
        "color": "#222"
    },
    "button-inversebutton-border-thin": {
        "color": "#222"
    },
    "button-inversebutton-border-thick": {
        "color": "#222"
    },
    "button-border-thinbutton-inverse": {
        "color": "#222"
    },
    "button-border-thickbutton-inverse": {
        "color": "#222"
    },
    "button-borderbutton-inverse:hover": {
        "backgroundColor": "rgba(60, 60, 60, 0.9)",
        "color": "rgba(238, 238, 238, 0.9)"
    },
    "button-inversebutton-border-thin:hover": {
        "backgroundColor": "rgba(60, 60, 60, 0.9)",
        "color": "rgba(238, 238, 238, 0.9)"
    },
    "button-inversebutton-border-thick:hover": {
        "backgroundColor": "rgba(60, 60, 60, 0.9)",
        "color": "rgba(238, 238, 238, 0.9)"
    },
    "button-borderbutton-inverse:focus": {
        "backgroundColor": "rgba(60, 60, 60, 0.9)",
        "color": "rgba(238, 238, 238, 0.9)"
    },
    "button-inversebutton-border-thin:focus": {
        "backgroundColor": "rgba(60, 60, 60, 0.9)",
        "color": "rgba(238, 238, 238, 0.9)"
    },
    "button-inversebutton-border-thick:focus": {
        "backgroundColor": "rgba(60, 60, 60, 0.9)",
        "color": "rgba(238, 238, 238, 0.9)"
    },
    "button-border-thinbutton-inverse:hover": {
        "backgroundColor": "rgba(60, 60, 60, 0.9)",
        "color": "rgba(238, 238, 238, 0.9)"
    },
    "button-border-thinbutton-inverse:focus": {
        "backgroundColor": "rgba(60, 60, 60, 0.9)",
        "color": "rgba(238, 238, 238, 0.9)"
    },
    "button-border-thickbutton-inverse:hover": {
        "backgroundColor": "rgba(60, 60, 60, 0.9)",
        "color": "rgba(238, 238, 238, 0.9)"
    },
    "button-border-thickbutton-inverse:focus": {
        "backgroundColor": "rgba(60, 60, 60, 0.9)",
        "color": "rgba(238, 238, 238, 0.9)"
    },
    "button-borderbutton-inverse:active": {
        "backgroundColor": "rgba(34, 34, 34, 0.7)",
        "color": "rgba(238, 238, 238, 0.5)",
        "opacity": 0.3
    },
    "button-inversebutton-border-thin:active": {
        "backgroundColor": "rgba(34, 34, 34, 0.7)",
        "color": "rgba(238, 238, 238, 0.5)",
        "opacity": 0.3
    },
    "button-inversebutton-border-thick:active": {
        "backgroundColor": "rgba(34, 34, 34, 0.7)",
        "color": "rgba(238, 238, 238, 0.5)",
        "opacity": 0.3
    },
    "button-borderbutton-inverseactive": {
        "backgroundColor": "rgba(34, 34, 34, 0.7)",
        "color": "rgba(238, 238, 238, 0.5)",
        "opacity": 0.3
    },
    "button-inverseactivebutton-border-thin": {
        "backgroundColor": "rgba(34, 34, 34, 0.7)",
        "color": "rgba(238, 238, 238, 0.5)",
        "opacity": 0.3
    },
    "button-inverseactivebutton-border-thick": {
        "backgroundColor": "rgba(34, 34, 34, 0.7)",
        "color": "rgba(238, 238, 238, 0.5)",
        "opacity": 0.3
    },
    "button-borderbutton-inverseis-active": {
        "backgroundColor": "rgba(34, 34, 34, 0.7)",
        "color": "rgba(238, 238, 238, 0.5)",
        "opacity": 0.3
    },
    "button-inverseis-activebutton-border-thin": {
        "backgroundColor": "rgba(34, 34, 34, 0.7)",
        "color": "rgba(238, 238, 238, 0.5)",
        "opacity": 0.3
    },
    "button-inverseis-activebutton-border-thick": {
        "backgroundColor": "rgba(34, 34, 34, 0.7)",
        "color": "rgba(238, 238, 238, 0.5)",
        "opacity": 0.3
    },
    "button-border-thinbutton-inverse:active": {
        "backgroundColor": "rgba(34, 34, 34, 0.7)",
        "color": "rgba(238, 238, 238, 0.5)",
        "opacity": 0.3
    },
    "button-border-thinbutton-inverseactive": {
        "backgroundColor": "rgba(34, 34, 34, 0.7)",
        "color": "rgba(238, 238, 238, 0.5)",
        "opacity": 0.3
    },
    "button-border-thinbutton-inverseis-active": {
        "backgroundColor": "rgba(34, 34, 34, 0.7)",
        "color": "rgba(238, 238, 238, 0.5)",
        "opacity": 0.3
    },
    "button-border-thickbutton-inverse:active": {
        "backgroundColor": "rgba(34, 34, 34, 0.7)",
        "color": "rgba(238, 238, 238, 0.5)",
        "opacity": 0.3
    },
    "button-border-thickbutton-inverseactive": {
        "backgroundColor": "rgba(34, 34, 34, 0.7)",
        "color": "rgba(238, 238, 238, 0.5)",
        "opacity": 0.3
    },
    "button-border-thickbutton-inverseis-active": {
        "backgroundColor": "rgba(34, 34, 34, 0.7)",
        "color": "rgba(238, 238, 238, 0.5)",
        "opacity": 0.3
    },
    "button-borderbutton-action": {
        "color": "#A5DE37"
    },
    "button-actionbutton-border-thin": {
        "color": "#A5DE37"
    },
    "button-actionbutton-border-thick": {
        "color": "#A5DE37"
    },
    "button-border-thinbutton-action": {
        "color": "#A5DE37"
    },
    "button-border-thickbutton-action": {
        "color": "#A5DE37"
    },
    "button-borderbutton-action:hover": {
        "backgroundColor": "rgba(185, 229, 99, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-actionbutton-border-thin:hover": {
        "backgroundColor": "rgba(185, 229, 99, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-actionbutton-border-thick:hover": {
        "backgroundColor": "rgba(185, 229, 99, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-borderbutton-action:focus": {
        "backgroundColor": "rgba(185, 229, 99, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-actionbutton-border-thin:focus": {
        "backgroundColor": "rgba(185, 229, 99, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-actionbutton-border-thick:focus": {
        "backgroundColor": "rgba(185, 229, 99, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-border-thinbutton-action:hover": {
        "backgroundColor": "rgba(185, 229, 99, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-border-thinbutton-action:focus": {
        "backgroundColor": "rgba(185, 229, 99, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-border-thickbutton-action:hover": {
        "backgroundColor": "rgba(185, 229, 99, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-border-thickbutton-action:focus": {
        "backgroundColor": "rgba(185, 229, 99, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-borderbutton-action:active": {
        "backgroundColor": "rgba(161, 210, 67, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-actionbutton-border-thin:active": {
        "backgroundColor": "rgba(161, 210, 67, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-actionbutton-border-thick:active": {
        "backgroundColor": "rgba(161, 210, 67, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-borderbutton-actionactive": {
        "backgroundColor": "rgba(161, 210, 67, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-actionactivebutton-border-thin": {
        "backgroundColor": "rgba(161, 210, 67, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-actionactivebutton-border-thick": {
        "backgroundColor": "rgba(161, 210, 67, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-borderbutton-actionis-active": {
        "backgroundColor": "rgba(161, 210, 67, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-actionis-activebutton-border-thin": {
        "backgroundColor": "rgba(161, 210, 67, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-actionis-activebutton-border-thick": {
        "backgroundColor": "rgba(161, 210, 67, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thinbutton-action:active": {
        "backgroundColor": "rgba(161, 210, 67, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thinbutton-actionactive": {
        "backgroundColor": "rgba(161, 210, 67, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thinbutton-actionis-active": {
        "backgroundColor": "rgba(161, 210, 67, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thickbutton-action:active": {
        "backgroundColor": "rgba(161, 210, 67, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thickbutton-actionactive": {
        "backgroundColor": "rgba(161, 210, 67, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thickbutton-actionis-active": {
        "backgroundColor": "rgba(161, 210, 67, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-borderbutton-highlight": {
        "color": "#FEAE1B"
    },
    "button-highlightbutton-border-thin": {
        "color": "#FEAE1B"
    },
    "button-highlightbutton-border-thick": {
        "color": "#FEAE1B"
    },
    "button-border-thinbutton-highlight": {
        "color": "#FEAE1B"
    },
    "button-border-thickbutton-highlight": {
        "color": "#FEAE1B"
    },
    "button-borderbutton-highlight:hover": {
        "backgroundColor": "rgba(254, 192, 78, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-highlightbutton-border-thin:hover": {
        "backgroundColor": "rgba(254, 192, 78, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-highlightbutton-border-thick:hover": {
        "backgroundColor": "rgba(254, 192, 78, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-borderbutton-highlight:focus": {
        "backgroundColor": "rgba(254, 192, 78, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-highlightbutton-border-thin:focus": {
        "backgroundColor": "rgba(254, 192, 78, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-highlightbutton-border-thick:focus": {
        "backgroundColor": "rgba(254, 192, 78, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-border-thinbutton-highlight:hover": {
        "backgroundColor": "rgba(254, 192, 78, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-border-thinbutton-highlight:focus": {
        "backgroundColor": "rgba(254, 192, 78, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-border-thickbutton-highlight:hover": {
        "backgroundColor": "rgba(254, 192, 78, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-border-thickbutton-highlight:focus": {
        "backgroundColor": "rgba(254, 192, 78, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-borderbutton-highlight:active": {
        "backgroundColor": "rgba(243, 171, 38, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-highlightbutton-border-thin:active": {
        "backgroundColor": "rgba(243, 171, 38, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-highlightbutton-border-thick:active": {
        "backgroundColor": "rgba(243, 171, 38, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-borderbutton-highlightactive": {
        "backgroundColor": "rgba(243, 171, 38, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-highlightactivebutton-border-thin": {
        "backgroundColor": "rgba(243, 171, 38, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-highlightactivebutton-border-thick": {
        "backgroundColor": "rgba(243, 171, 38, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-borderbutton-highlightis-active": {
        "backgroundColor": "rgba(243, 171, 38, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-highlightis-activebutton-border-thin": {
        "backgroundColor": "rgba(243, 171, 38, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-highlightis-activebutton-border-thick": {
        "backgroundColor": "rgba(243, 171, 38, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thinbutton-highlight:active": {
        "backgroundColor": "rgba(243, 171, 38, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thinbutton-highlightactive": {
        "backgroundColor": "rgba(243, 171, 38, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thinbutton-highlightis-active": {
        "backgroundColor": "rgba(243, 171, 38, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thickbutton-highlight:active": {
        "backgroundColor": "rgba(243, 171, 38, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thickbutton-highlightactive": {
        "backgroundColor": "rgba(243, 171, 38, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thickbutton-highlightis-active": {
        "backgroundColor": "rgba(243, 171, 38, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-borderbutton-caution": {
        "color": "#FF4351"
    },
    "button-cautionbutton-border-thin": {
        "color": "#FF4351"
    },
    "button-cautionbutton-border-thick": {
        "color": "#FF4351"
    },
    "button-border-thinbutton-caution": {
        "color": "#FF4351"
    },
    "button-border-thickbutton-caution": {
        "color": "#FF4351"
    },
    "button-borderbutton-caution:hover": {
        "backgroundColor": "rgba(255, 118, 128, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-cautionbutton-border-thin:hover": {
        "backgroundColor": "rgba(255, 118, 128, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-cautionbutton-border-thick:hover": {
        "backgroundColor": "rgba(255, 118, 128, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-borderbutton-caution:focus": {
        "backgroundColor": "rgba(255, 118, 128, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-cautionbutton-border-thin:focus": {
        "backgroundColor": "rgba(255, 118, 128, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-cautionbutton-border-thick:focus": {
        "backgroundColor": "rgba(255, 118, 128, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-border-thinbutton-caution:hover": {
        "backgroundColor": "rgba(255, 118, 128, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-border-thinbutton-caution:focus": {
        "backgroundColor": "rgba(255, 118, 128, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-border-thickbutton-caution:hover": {
        "backgroundColor": "rgba(255, 118, 128, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-border-thickbutton-caution:focus": {
        "backgroundColor": "rgba(255, 118, 128, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-borderbutton-caution:active": {
        "backgroundColor": "rgba(246, 76, 89, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-cautionbutton-border-thin:active": {
        "backgroundColor": "rgba(246, 76, 89, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-cautionbutton-border-thick:active": {
        "backgroundColor": "rgba(246, 76, 89, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-borderbutton-cautionactive": {
        "backgroundColor": "rgba(246, 76, 89, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-cautionactivebutton-border-thin": {
        "backgroundColor": "rgba(246, 76, 89, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-cautionactivebutton-border-thick": {
        "backgroundColor": "rgba(246, 76, 89, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-borderbutton-cautionis-active": {
        "backgroundColor": "rgba(246, 76, 89, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-cautionis-activebutton-border-thin": {
        "backgroundColor": "rgba(246, 76, 89, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-cautionis-activebutton-border-thick": {
        "backgroundColor": "rgba(246, 76, 89, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thinbutton-caution:active": {
        "backgroundColor": "rgba(246, 76, 89, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thinbutton-cautionactive": {
        "backgroundColor": "rgba(246, 76, 89, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thinbutton-cautionis-active": {
        "backgroundColor": "rgba(246, 76, 89, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thickbutton-caution:active": {
        "backgroundColor": "rgba(246, 76, 89, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thickbutton-cautionactive": {
        "backgroundColor": "rgba(246, 76, 89, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thickbutton-cautionis-active": {
        "backgroundColor": "rgba(246, 76, 89, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-borderbutton-royal": {
        "color": "#7B72E9"
    },
    "button-royalbutton-border-thin": {
        "color": "#7B72E9"
    },
    "button-royalbutton-border-thick": {
        "color": "#7B72E9"
    },
    "button-border-thinbutton-royal": {
        "color": "#7B72E9"
    },
    "button-border-thickbutton-royal": {
        "color": "#7B72E9"
    },
    "button-borderbutton-royal:hover": {
        "backgroundColor": "rgba(164, 158, 240, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-royalbutton-border-thin:hover": {
        "backgroundColor": "rgba(164, 158, 240, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-royalbutton-border-thick:hover": {
        "backgroundColor": "rgba(164, 158, 240, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-borderbutton-royal:focus": {
        "backgroundColor": "rgba(164, 158, 240, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-royalbutton-border-thin:focus": {
        "backgroundColor": "rgba(164, 158, 240, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-royalbutton-border-thick:focus": {
        "backgroundColor": "rgba(164, 158, 240, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-border-thinbutton-royal:hover": {
        "backgroundColor": "rgba(164, 158, 240, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-border-thinbutton-royal:focus": {
        "backgroundColor": "rgba(164, 158, 240, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-border-thickbutton-royal:hover": {
        "backgroundColor": "rgba(164, 158, 240, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-border-thickbutton-royal:focus": {
        "backgroundColor": "rgba(164, 158, 240, 0.9)",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "button-borderbutton-royal:active": {
        "backgroundColor": "rgba(130, 122, 225, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-royalbutton-border-thin:active": {
        "backgroundColor": "rgba(130, 122, 225, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-royalbutton-border-thick:active": {
        "backgroundColor": "rgba(130, 122, 225, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-borderbutton-royalactive": {
        "backgroundColor": "rgba(130, 122, 225, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-royalactivebutton-border-thin": {
        "backgroundColor": "rgba(130, 122, 225, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-royalactivebutton-border-thick": {
        "backgroundColor": "rgba(130, 122, 225, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-borderbutton-royalis-active": {
        "backgroundColor": "rgba(130, 122, 225, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-royalis-activebutton-border-thin": {
        "backgroundColor": "rgba(130, 122, 225, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-royalis-activebutton-border-thick": {
        "backgroundColor": "rgba(130, 122, 225, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thinbutton-royal:active": {
        "backgroundColor": "rgba(130, 122, 225, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thinbutton-royalactive": {
        "backgroundColor": "rgba(130, 122, 225, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thinbutton-royalis-active": {
        "backgroundColor": "rgba(130, 122, 225, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thickbutton-royal:active": {
        "backgroundColor": "rgba(130, 122, 225, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thickbutton-royalactive": {
        "backgroundColor": "rgba(130, 122, 225, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-border-thickbutton-royalis-active": {
        "backgroundColor": "rgba(130, 122, 225, 0.7)",
        "color": "rgba(255, 255, 255, 0.5)",
        "opacity": 0.3
    },
    "button-borderbutton-giant": {
        "lineHeight": 66
    },
    "button-giantbutton-border-thin": {
        "lineHeight": 66
    },
    "button-giantbutton-border-thick": {
        "lineHeight": 66
    },
    "button-border-thinbutton-giant": {
        "lineHeight": 66
    },
    "button-border-thickbutton-giant": {
        "lineHeight": 66
    },
    "button-borderbutton-jumbo": {
        "lineHeight": 56
    },
    "button-jumbobutton-border-thin": {
        "lineHeight": 56
    },
    "button-jumbobutton-border-thick": {
        "lineHeight": 56
    },
    "button-border-thinbutton-jumbo": {
        "lineHeight": 56
    },
    "button-border-thickbutton-jumbo": {
        "lineHeight": 56
    },
    "button-borderbutton-large": {
        "lineHeight": 46
    },
    "button-largebutton-border-thin": {
        "lineHeight": 46
    },
    "button-largebutton-border-thick": {
        "lineHeight": 46
    },
    "button-border-thinbutton-large": {
        "lineHeight": 46
    },
    "button-border-thickbutton-large": {
        "lineHeight": 46
    },
    "button-borderbutton-normal": {
        "lineHeight": 36
    },
    "button-normalbutton-border-thin": {
        "lineHeight": 36
    },
    "button-normalbutton-border-thick": {
        "lineHeight": 36
    },
    "button-border-thinbutton-normal": {
        "lineHeight": 36
    },
    "button-border-thickbutton-normal": {
        "lineHeight": 36
    },
    "button-borderbutton-small": {
        "lineHeight": 26
    },
    "button-smallbutton-border-thin": {
        "lineHeight": 26
    },
    "button-smallbutton-border-thick": {
        "lineHeight": 26
    },
    "button-border-thinbutton-small": {
        "lineHeight": 26
    },
    "button-border-thickbutton-small": {
        "lineHeight": 26
    },
    "button-borderbutton-tiny": {
        "lineHeight": 20
    },
    "button-tinybutton-border-thin": {
        "lineHeight": 20
    },
    "button-tinybutton-border-thick": {
        "lineHeight": 20
    },
    "button-border-thinbutton-tiny": {
        "lineHeight": 20
    },
    "button-border-thickbutton-tiny": {
        "lineHeight": 20
    },
    "button-borderless": {
        "background": "none",
        "border": "none",
        "paddingTop": 0,
        "paddingRight": 8,
        "paddingBottom": "!important",
        "paddingLeft": 8,
        "color": "#EEE",
        "fontSize": 20.8,
        "fontWeight": "200"
    },
    "button-borderless:hover": {
        "background": "none"
    },
    "button-borderless:focus": {
        "background": "none"
    },
    "button-borderless:active": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "textShadow": "none",
        "WebkitTransitionProperty": "all",
        "transitionProperty": "all",
        "WebkitTransitionDuration": ".3s",
        "transitionDuration": ".3s",
        "opacity": 0.3
    },
    "button-borderlessactive": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "textShadow": "none",
        "WebkitTransitionProperty": "all",
        "transitionProperty": "all",
        "WebkitTransitionDuration": ".3s",
        "transitionDuration": ".3s",
        "opacity": 0.3
    },
    "button-borderlessis-active": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "textShadow": "none",
        "WebkitTransitionProperty": "all",
        "transitionProperty": "all",
        "WebkitTransitionDuration": ".3s",
        "transitionDuration": ".3s",
        "opacity": 0.3
    },
    "button-borderlessbutton-primary": {
        "color": "#1B9AF7"
    },
    "button-borderlessbutton-plain": {
        "color": "#FFF"
    },
    "button-borderlessbutton-inverse": {
        "color": "#222"
    },
    "button-borderlessbutton-action": {
        "color": "#A5DE37"
    },
    "button-borderlessbutton-highlight": {
        "color": "#FEAE1B"
    },
    "button-borderlessbutton-caution": {
        "color": "#FF4351"
    },
    "button-borderlessbutton-royal": {
        "color": "#7B72E9"
    },
    "button-borderlessbutton-giant": {
        "fontSize": 36.4,
        "height": 52.4,
        "lineHeight": 52.4
    },
    "button-borderlessbutton-jumbo": {
        "fontSize": 31.2,
        "height": 47.2,
        "lineHeight": 47.2
    },
    "button-borderlessbutton-large": {
        "fontSize": 26,
        "height": 42,
        "lineHeight": 42
    },
    "button-borderlessbutton-normal": {
        "fontSize": 20.8,
        "height": 36.8,
        "lineHeight": 36.8
    },
    "button-borderlessbutton-small": {
        "fontSize": 15.6,
        "height": 31.6,
        "lineHeight": 31.6
    },
    "button-borderlessbutton-tiny": {
        "fontSize": 12.48,
        "height": 28.48,
        "lineHeight": 28.48
    },
    "button-raised": {
        "borderColor": "#e1e1e1",
        "borderStyle": "solid",
        "borderWidth": 1,
        "lineHeight": 38,
        "background": "linear-gradient(#f6f6f6, #e1e1e1)",
        "WebkitBoxShadow": "inset 0px 1px 0px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.15)",
        "boxShadow": "inset 0px 1px 0px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.15)"
    },
    "button-raised:hover": {
        "background": "linear-gradient(top, white, gainsboro)"
    },
    "button-raised:focus": {
        "background": "linear-gradient(top, white, gainsboro)"
    },
    "button-raised:active": {
        "background": "#eeeeee",
        "WebkitBoxShadow": "inset 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 0px white",
        "boxShadow": "inset 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 0px white"
    },
    "button-raisedactive": {
        "background": "#eeeeee",
        "WebkitBoxShadow": "inset 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 0px white",
        "boxShadow": "inset 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 0px white"
    },
    "button-raisedis-active": {
        "background": "#eeeeee",
        "WebkitBoxShadow": "inset 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 0px white",
        "boxShadow": "inset 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 0px white"
    },
    "button-raisedbutton-primary": {
        "borderColor": "#088ef0",
        "background": "linear-gradient(#34a5f8, #088ef0)"
    },
    "button-raisedbutton-primary:hover": {
        "background": "linear-gradient(top, #42abf8, #0888e6)"
    },
    "button-raisedbutton-primary:focus": {
        "background": "linear-gradient(top, #42abf8, #0888e6)"
    },
    "button-raisedbutton-primary:active": {
        "borderColor": "#0880d7",
        "background": "#2798eb"
    },
    "button-raisedbutton-primaryactive": {
        "borderColor": "#0880d7",
        "background": "#2798eb"
    },
    "button-raisedbutton-primaryis-active": {
        "borderColor": "#0880d7",
        "background": "#2798eb"
    },
    "button-raisedbutton-plain": {
        "borderColor": "#f2f2f2",
        "background": "linear-gradient(white, #f2f2f2)"
    },
    "button-raisedbutton-plain:hover": {
        "background": "linear-gradient(top, white, #ededed)"
    },
    "button-raisedbutton-plain:focus": {
        "background": "linear-gradient(top, white, #ededed)"
    },
    "button-raisedbutton-plain:active": {
        "borderColor": "#e6e6e6",
        "background": "white"
    },
    "button-raisedbutton-plainactive": {
        "borderColor": "#e6e6e6",
        "background": "white"
    },
    "button-raisedbutton-plainis-active": {
        "borderColor": "#e6e6e6",
        "background": "white"
    },
    "button-raisedbutton-inverse": {
        "borderColor": "#151515",
        "background": "linear-gradient(#2f2f2f, #151515)"
    },
    "button-raisedbutton-inverse:hover": {
        "background": "linear-gradient(top, #363636, #101010)"
    },
    "button-raisedbutton-inverse:focus": {
        "background": "linear-gradient(top, #363636, #101010)"
    },
    "button-raisedbutton-inverse:active": {
        "borderColor": "#090909",
        "background": "#222222"
    },
    "button-raisedbutton-inverseactive": {
        "borderColor": "#090909",
        "background": "#222222"
    },
    "button-raisedbutton-inverseis-active": {
        "borderColor": "#090909",
        "background": "#222222"
    },
    "button-raisedbutton-action": {
        "borderColor": "#9ad824",
        "background": "linear-gradient(#afe24d, #9ad824)"
    },
    "button-raisedbutton-action:hover": {
        "background": "linear-gradient(top, #b5e45a, #94cf22)"
    },
    "button-raisedbutton-action:focus": {
        "background": "linear-gradient(top, #b5e45a, #94cf22)"
    },
    "button-raisedbutton-action:active": {
        "borderColor": "#8bc220",
        "background": "#a1d243"
    },
    "button-raisedbutton-actionactive": {
        "borderColor": "#8bc220",
        "background": "#a1d243"
    },
    "button-raisedbutton-actionis-active": {
        "borderColor": "#8bc220",
        "background": "#a1d243"
    },
    "button-raisedbutton-highlight": {
        "borderColor": "#fea502",
        "background": "linear-gradient(#feb734, #fea502)"
    },
    "button-raisedbutton-highlight:hover": {
        "background": "linear-gradient(top, #febc44, #f49f01)"
    },
    "button-raisedbutton-highlight:focus": {
        "background": "linear-gradient(top, #febc44, #f49f01)"
    },
    "button-raisedbutton-highlight:active": {
        "borderColor": "#e59501",
        "background": "#f3ab26"
    },
    "button-raisedbutton-highlightactive": {
        "borderColor": "#e59501",
        "background": "#f3ab26"
    },
    "button-raisedbutton-highlightis-active": {
        "borderColor": "#e59501",
        "background": "#f3ab26"
    },
    "button-raisedbutton-caution": {
        "borderColor": "#ff2939",
        "background": "linear-gradient(#ff5c69, #ff2939)"
    },
    "button-raisedbutton-caution:hover": {
        "background": "linear-gradient(top, #ff6c77, #ff1f30)"
    },
    "button-raisedbutton-caution:focus": {
        "background": "linear-gradient(top, #ff6c77, #ff1f30)"
    },
    "button-raisedbutton-caution:active": {
        "borderColor": "#ff1022",
        "background": "#f64c59"
    },
    "button-raisedbutton-cautionactive": {
        "borderColor": "#ff1022",
        "background": "#f64c59"
    },
    "button-raisedbutton-cautionis-active": {
        "borderColor": "#ff1022",
        "background": "#f64c59"
    },
    "button-raisedbutton-royal": {
        "borderColor": "#665ce6",
        "background": "linear-gradient(#9088ec, #665ce6)"
    },
    "button-raisedbutton-royal:hover": {
        "background": "linear-gradient(top, #9c95ef, #5e53e4)"
    },
    "button-raisedbutton-royal:focus": {
        "background": "linear-gradient(top, #9c95ef, #5e53e4)"
    },
    "button-raisedbutton-royal:active": {
        "borderColor": "#5246e2",
        "background": "#827ae1"
    },
    "button-raisedbutton-royalactive": {
        "borderColor": "#5246e2",
        "background": "#827ae1"
    },
    "button-raisedbutton-royalis-active": {
        "borderColor": "#5246e2",
        "background": "#827ae1"
    },
    "button-3d": {
        "position": "relative",
        "top": 0,
        "WebkitBoxShadow": "0 7px 0 #bbbbbb, 0 8px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 7px 0 #bbbbbb, 0 8px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3d:hover": {
        "WebkitBoxShadow": "0 7px 0 #bbbbbb, 0 8px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 7px 0 #bbbbbb, 0 8px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3d:focus": {
        "WebkitBoxShadow": "0 7px 0 #bbbbbb, 0 8px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 7px 0 #bbbbbb, 0 8px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3d:active": {
        "top": 5,
        "WebkitTransitionProperty": "all",
        "transitionProperty": "all",
        "WebkitTransitionDuration": ".15s",
        "transitionDuration": ".15s",
        "WebkitBoxShadow": "0 2px 0 #bbbbbb, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 #bbbbbb, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3dactive": {
        "top": 5,
        "WebkitTransitionProperty": "all",
        "transitionProperty": "all",
        "WebkitTransitionDuration": ".15s",
        "transitionDuration": ".15s",
        "WebkitBoxShadow": "0 2px 0 #bbbbbb, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 #bbbbbb, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3dis-active": {
        "top": 5,
        "WebkitTransitionProperty": "all",
        "transitionProperty": "all",
        "WebkitTransitionDuration": ".15s",
        "transitionDuration": ".15s",
        "WebkitBoxShadow": "0 2px 0 #bbbbbb, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 #bbbbbb, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3dbutton-primary": {
        "WebkitBoxShadow": "0 7px 0 #0880d7, 0 8px 3px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0 7px 0 #0880d7, 0 8px 3px rgba(0, 0, 0, 0.3)"
    },
    "button-3dbutton-primary:hover": {
        "WebkitBoxShadow": "0 7px 0 #077ace, 0 8px 3px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0 7px 0 #077ace, 0 8px 3px rgba(0, 0, 0, 0.3)"
    },
    "button-3dbutton-primary:focus": {
        "WebkitBoxShadow": "0 7px 0 #077ace, 0 8px 3px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0 7px 0 #077ace, 0 8px 3px rgba(0, 0, 0, 0.3)"
    },
    "button-3dbutton-primary:active": {
        "WebkitBoxShadow": "0 2px 0 #0662a6, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 #0662a6, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3dbutton-primaryactive": {
        "WebkitBoxShadow": "0 2px 0 #0662a6, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 #0662a6, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3dbutton-primaryis-active": {
        "WebkitBoxShadow": "0 2px 0 #0662a6, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 #0662a6, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3dbutton-plain": {
        "WebkitBoxShadow": "0 7px 0 #e6e6e6, 0 8px 3px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0 7px 0 #e6e6e6, 0 8px 3px rgba(0, 0, 0, 0.3)"
    },
    "button-3dbutton-plain:hover": {
        "WebkitBoxShadow": "0 7px 0 #e0e0e0, 0 8px 3px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0 7px 0 #e0e0e0, 0 8px 3px rgba(0, 0, 0, 0.3)"
    },
    "button-3dbutton-plain:focus": {
        "WebkitBoxShadow": "0 7px 0 #e0e0e0, 0 8px 3px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0 7px 0 #e0e0e0, 0 8px 3px rgba(0, 0, 0, 0.3)"
    },
    "button-3dbutton-plain:active": {
        "WebkitBoxShadow": "0 2px 0 #cccccc, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 #cccccc, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3dbutton-plainactive": {
        "WebkitBoxShadow": "0 2px 0 #cccccc, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 #cccccc, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3dbutton-plainis-active": {
        "WebkitBoxShadow": "0 2px 0 #cccccc, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 #cccccc, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3dbutton-inverse": {
        "WebkitBoxShadow": "0 7px 0 #090909, 0 8px 3px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0 7px 0 #090909, 0 8px 3px rgba(0, 0, 0, 0.3)"
    },
    "button-3dbutton-inverse:hover": {
        "WebkitBoxShadow": "0 7px 0 #030303, 0 8px 3px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0 7px 0 #030303, 0 8px 3px rgba(0, 0, 0, 0.3)"
    },
    "button-3dbutton-inverse:focus": {
        "WebkitBoxShadow": "0 7px 0 #030303, 0 8px 3px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0 7px 0 #030303, 0 8px 3px rgba(0, 0, 0, 0.3)"
    },
    "button-3dbutton-inverse:active": {
        "WebkitBoxShadow": "0 2px 0 black, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 black, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3dbutton-inverseactive": {
        "WebkitBoxShadow": "0 2px 0 black, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 black, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3dbutton-inverseis-active": {
        "WebkitBoxShadow": "0 2px 0 black, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 black, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3dbutton-action": {
        "WebkitBoxShadow": "0 7px 0 #8bc220, 0 8px 3px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0 7px 0 #8bc220, 0 8px 3px rgba(0, 0, 0, 0.3)"
    },
    "button-3dbutton-action:hover": {
        "WebkitBoxShadow": "0 7px 0 #84b91f, 0 8px 3px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0 7px 0 #84b91f, 0 8px 3px rgba(0, 0, 0, 0.3)"
    },
    "button-3dbutton-action:focus": {
        "WebkitBoxShadow": "0 7px 0 #84b91f, 0 8px 3px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0 7px 0 #84b91f, 0 8px 3px rgba(0, 0, 0, 0.3)"
    },
    "button-3dbutton-action:active": {
        "WebkitBoxShadow": "0 2px 0 #6b9619, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 #6b9619, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3dbutton-actionactive": {
        "WebkitBoxShadow": "0 2px 0 #6b9619, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 #6b9619, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3dbutton-actionis-active": {
        "WebkitBoxShadow": "0 2px 0 #6b9619, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 #6b9619, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3dbutton-highlight": {
        "WebkitBoxShadow": "0 7px 0 #e59501, 0 8px 3px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0 7px 0 #e59501, 0 8px 3px rgba(0, 0, 0, 0.3)"
    },
    "button-3dbutton-highlight:hover": {
        "WebkitBoxShadow": "0 7px 0 #db8e01, 0 8px 3px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0 7px 0 #db8e01, 0 8px 3px rgba(0, 0, 0, 0.3)"
    },
    "button-3dbutton-highlight:focus": {
        "WebkitBoxShadow": "0 7px 0 #db8e01, 0 8px 3px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0 7px 0 #db8e01, 0 8px 3px rgba(0, 0, 0, 0.3)"
    },
    "button-3dbutton-highlight:active": {
        "WebkitBoxShadow": "0 2px 0 #b27401, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 #b27401, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3dbutton-highlightactive": {
        "WebkitBoxShadow": "0 2px 0 #b27401, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 #b27401, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3dbutton-highlightis-active": {
        "WebkitBoxShadow": "0 2px 0 #b27401, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 #b27401, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3dbutton-caution": {
        "WebkitBoxShadow": "0 7px 0 #ff1022, 0 8px 3px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0 7px 0 #ff1022, 0 8px 3px rgba(0, 0, 0, 0.3)"
    },
    "button-3dbutton-caution:hover": {
        "WebkitBoxShadow": "0 7px 0 #ff0618, 0 8px 3px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0 7px 0 #ff0618, 0 8px 3px rgba(0, 0, 0, 0.3)"
    },
    "button-3dbutton-caution:focus": {
        "WebkitBoxShadow": "0 7px 0 #ff0618, 0 8px 3px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0 7px 0 #ff0618, 0 8px 3px rgba(0, 0, 0, 0.3)"
    },
    "button-3dbutton-caution:active": {
        "WebkitBoxShadow": "0 2px 0 #dc0010, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 #dc0010, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3dbutton-cautionactive": {
        "WebkitBoxShadow": "0 2px 0 #dc0010, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 #dc0010, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3dbutton-cautionis-active": {
        "WebkitBoxShadow": "0 2px 0 #dc0010, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 #dc0010, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3dbutton-royal": {
        "WebkitBoxShadow": "0 7px 0 #5246e2, 0 8px 3px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0 7px 0 #5246e2, 0 8px 3px rgba(0, 0, 0, 0.3)"
    },
    "button-3dbutton-royal:hover": {
        "WebkitBoxShadow": "0 7px 0 #493de1, 0 8px 3px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0 7px 0 #493de1, 0 8px 3px rgba(0, 0, 0, 0.3)"
    },
    "button-3dbutton-royal:focus": {
        "WebkitBoxShadow": "0 7px 0 #493de1, 0 8px 3px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0 7px 0 #493de1, 0 8px 3px rgba(0, 0, 0, 0.3)"
    },
    "button-3dbutton-royal:active": {
        "WebkitBoxShadow": "0 2px 0 #2f21d4, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 #2f21d4, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3dbutton-royalactive": {
        "WebkitBoxShadow": "0 2px 0 #2f21d4, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 #2f21d4, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-3dbutton-royalis-active": {
        "WebkitBoxShadow": "0 2px 0 #2f21d4, 0 3px 3px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 0 #2f21d4, 0 3px 3px rgba(0, 0, 0, 0.2)"
    },
    "button-glow": {
        "WebkitAnimationDuration": "3s",
        "animationDuration": "3s",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite",
        "WebkitAnimationName": "glowing",
        "animationName": "glowing"
    },
    "button-glow:active": {
        "WebkitAnimationName": "none",
        "animationName": "none"
    },
    "button-glowactive": {
        "WebkitAnimationName": "none",
        "animationName": "none"
    },
    "button-glowis-active": {
        "WebkitAnimationName": "none",
        "animationName": "none"
    },
    "button-glowbutton-primary": {
        "WebkitAnimationName": "glowing-primary",
        "animationName": "glowing-primary"
    },
    "button-glowbutton-plain": {
        "WebkitAnimationName": "glowing-plain",
        "animationName": "glowing-plain"
    },
    "button-glowbutton-inverse": {
        "WebkitAnimationName": "glowing-inverse",
        "animationName": "glowing-inverse"
    },
    "button-glowbutton-action": {
        "WebkitAnimationName": "glowing-action",
        "animationName": "glowing-action"
    },
    "button-glowbutton-highlight": {
        "WebkitAnimationName": "glowing-highlight",
        "animationName": "glowing-highlight"
    },
    "button-glowbutton-caution": {
        "WebkitAnimationName": "glowing-caution",
        "animationName": "glowing-caution"
    },
    "button-glowbutton-royal": {
        "WebkitAnimationName": "glowing-royal",
        "animationName": "glowing-royal"
    },
    "button-dropdown": {
        "position": "relative",
        "overflow": "visible",
        "display": "inline-block"
    },
    "button-dropdown-list": {
        "display": "none",
        "position": "absolute",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "top": 0,
        "left": 0,
        "zIndex": 1000,
        "minWidth": "100%",
        "listStyleType": "none",
        "background": "rgba(255, 255, 255, 0.95)",
        "borderStyle": "solid",
        "borderWidth": 1,
        "borderColor": "#d4d4d4",
        "fontFamily": "\"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif",
        "WebkitBoxShadow": "0 2px 7px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 2px 7px rgba(0, 0, 0, 0.2)",
        "borderRadius": 3,
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "button-dropdown-listis-below": {
        "top": "100%",
        "borderTop": "none",
        "borderRadius": "0 0 3px 3px"
    },
    "button-dropdown-listis-above": {
        "bottom": "100%",
        "top": "auto",
        "borderBottom": "none",
        "borderRadius": "3px 3px 0 0",
        "WebkitBoxShadow": "0 -2px 7px rgba(0, 0, 0, 0.2)",
        "boxShadow": "0 -2px 7px rgba(0, 0, 0, 0.2)"
    },
    "button-dropdown-list > li": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "display": "block"
    },
    "button-dropdown-list > li > a": {
        "display": "block",
        "lineHeight": 40,
        "fontSize": 12.8,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "float": "none",
        "color": "#666",
        "textDecoration": "none"
    },
    "button-dropdown-list > li > a:hover": {
        "color": "#5e5e5e",
        "background": "#f6f6f6",
        "textDecoration": "none"
    },
    "button-dropdown-divider": {
        "borderTop": "1px solid #e6e6e6"
    },
    "button-dropdownbutton-dropdown-primary button-dropdown-list": {
        "background": "rgba(27, 154, 247, 0.95)",
        "borderColor": "#0880d7"
    },
    "button-dropdownbutton-dropdown-primary button-dropdown-list button-dropdown-divider": {
        "borderColor": "#0888e6"
    },
    "button-dropdownbutton-dropdown-primary button-dropdown-list > li > a": {
        "color": "#FFF"
    },
    "button-dropdownbutton-dropdown-primary button-dropdown-list > li > a:hover": {
        "color": "#f2f2f2",
        "background": "#088ef0"
    },
    "button-dropdownbutton-dropdown-plain button-dropdown-list": {
        "background": "rgba(255, 255, 255, 0.95)",
        "borderColor": "#e6e6e6"
    },
    "button-dropdownbutton-dropdown-plain button-dropdown-list button-dropdown-divider": {
        "borderColor": "#ededed"
    },
    "button-dropdownbutton-dropdown-plain button-dropdown-list > li > a": {
        "color": "#1B9AF7"
    },
    "button-dropdownbutton-dropdown-plain button-dropdown-list > li > a:hover": {
        "color": "#088ef0",
        "background": "#f2f2f2"
    },
    "button-dropdownbutton-dropdown-inverse button-dropdown-list": {
        "background": "rgba(34, 34, 34, 0.95)",
        "borderColor": "#090909"
    },
    "button-dropdownbutton-dropdown-inverse button-dropdown-list button-dropdown-divider": {
        "borderColor": "#101010"
    },
    "button-dropdownbutton-dropdown-inverse button-dropdown-list > li > a": {
        "color": "#EEE"
    },
    "button-dropdownbutton-dropdown-inverse button-dropdown-list > li > a:hover": {
        "color": "#e1e1e1",
        "background": "#151515"
    },
    "button-dropdownbutton-dropdown-action button-dropdown-list": {
        "background": "rgba(165, 222, 55, 0.95)",
        "borderColor": "#8bc220"
    },
    "button-dropdownbutton-dropdown-action button-dropdown-list button-dropdown-divider": {
        "borderColor": "#94cf22"
    },
    "button-dropdownbutton-dropdown-action button-dropdown-list > li > a": {
        "color": "#FFF"
    },
    "button-dropdownbutton-dropdown-action button-dropdown-list > li > a:hover": {
        "color": "#f2f2f2",
        "background": "#9ad824"
    },
    "button-dropdownbutton-dropdown-highlight button-dropdown-list": {
        "background": "rgba(254, 174, 27, 0.95)",
        "borderColor": "#e59501"
    },
    "button-dropdownbutton-dropdown-highlight button-dropdown-list button-dropdown-divider": {
        "borderColor": "#f49f01"
    },
    "button-dropdownbutton-dropdown-highlight button-dropdown-list > li > a": {
        "color": "#FFF"
    },
    "button-dropdownbutton-dropdown-highlight button-dropdown-list > li > a:hover": {
        "color": "#f2f2f2",
        "background": "#fea502"
    },
    "button-dropdownbutton-dropdown-caution button-dropdown-list": {
        "background": "rgba(255, 67, 81, 0.95)",
        "borderColor": "#ff1022"
    },
    "button-dropdownbutton-dropdown-caution button-dropdown-list button-dropdown-divider": {
        "borderColor": "#ff1f30"
    },
    "button-dropdownbutton-dropdown-caution button-dropdown-list > li > a": {
        "color": "#FFF"
    },
    "button-dropdownbutton-dropdown-caution button-dropdown-list > li > a:hover": {
        "color": "#f2f2f2",
        "background": "#ff2939"
    },
    "button-dropdownbutton-dropdown-royal button-dropdown-list": {
        "background": "rgba(123, 114, 233, 0.95)",
        "borderColor": "#5246e2"
    },
    "button-dropdownbutton-dropdown-royal button-dropdown-list button-dropdown-divider": {
        "borderColor": "#5e53e4"
    },
    "button-dropdownbutton-dropdown-royal button-dropdown-list > li > a": {
        "color": "#FFF"
    },
    "button-dropdownbutton-dropdown-royal button-dropdown-list > li > a:hover": {
        "color": "#f2f2f2",
        "background": "#665ce6"
    },
    "button-group": {
        "position": "relative",
        "display": "inline-block"
    },
    "button-group:after": {
        "content": " ",
        "display": "block",
        "clear": "both"
    },
    "button-group button": {
        "float": "left"
    },
    "button-group button-dropdown": {
        "float": "left"
    },
    "button-group button:not(:first-child):not(:last-child)": {
        "borderRadius": 0,
        "borderRight": "none"
    },
    "button-group button-dropdown:not(:first-child):not(:last-child)": {
        "borderRadius": 0,
        "borderRight": "none"
    },
    "button-group button:first-child": {
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0,
        "borderRight": "none"
    },
    "button-group button-dropdown:first-child": {
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0,
        "borderRight": "none"
    },
    "button-group button:last-child": {
        "borderTopLeftRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "button-group button-dropdown:last-child": {
        "borderTopLeftRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "button-wrap": {
        "border": "1px solid #e3e3e3",
        "display": "inline-block",
        "paddingTop": 9,
        "paddingRight": 9,
        "paddingBottom": 9,
        "paddingLeft": 9,
        "background": "linear-gradient(#f2f2f2, #FFF)",
        "borderRadius": 200,
        "WebkitBoxShadow": "inset 0 1px 3px rgba(0, 0, 0, 0.04)",
        "boxShadow": "inset 0 1px 3px rgba(0, 0, 0, 0.04)"
    },
    "button-longshadow": {
        "overflow": "hidden"
    },
    "button-longshadow-right": {
        "overflow": "hidden"
    },
    "button-longshadowbutton-primary": {
        "textShadow": "0px 0px #0880d7, 1px 1px #0880d7, 2px 2px #0880d7, 3px 3px #0880d7, 4px 4px #0880d7, 5px 5px #0880d7, 6px 6px #0880d7, 7px 7px #0880d7, 8px 8px #0880d7, 9px 9px #0880d7, 10px 10px #0880d7, 11px 11px #0880d7, 12px 12px #0880d7, 13px 13px #0880d7, 14px 14px #0880d7, 15px 15px #0880d7, 16px 16px #0880d7, 17px 17px #0880d7, 18px 18px #0880d7, 19px 19px #0880d7, 20px 20px #0880d7, 21px 21px #0880d7, 22px 22px #0880d7, 23px 23px #0880d7, 24px 24px #0880d7, 25px 25px #0880d7, 26px 26px #0880d7, 27px 27px #0880d7, 28px 28px #0880d7, 29px 29px #0880d7, 30px 30px #0880d7, 31px 31px #0880d7, 32px 32px #0880d7, 33px 33px #0880d7, 34px 34px #0880d7, 35px 35px #0880d7, 36px 36px #0880d7, 37px 37px #0880d7, 38px 38px #0880d7, 39px 39px #0880d7, 40px 40px #0880d7, 41px 41px #0880d7, 42px 42px #0880d7, 43px 43px #0880d7, 44px 44px #0880d7, 45px 45px #0880d7, 46px 46px #0880d7, 47px 47px #0880d7, 48px 48px #0880d7, 49px 49px #0880d7, 50px 50px #0880d7, 51px 51px #0880d7, 52px 52px #0880d7, 53px 53px #0880d7, 54px 54px #0880d7, 55px 55px #0880d7, 56px 56px #0880d7, 57px 57px #0880d7, 58px 58px #0880d7, 59px 59px #0880d7, 60px 60px #0880d7, 61px 61px #0880d7, 62px 62px #0880d7, 63px 63px #0880d7, 64px 64px #0880d7, 65px 65px #0880d7, 66px 66px #0880d7, 67px 67px #0880d7, 68px 68px #0880d7, 69px 69px #0880d7, 70px 70px #0880d7, 71px 71px #0880d7, 72px 72px #0880d7, 73px 73px #0880d7, 74px 74px #0880d7, 75px 75px #0880d7, 76px 76px #0880d7, 77px 77px #0880d7, 78px 78px #0880d7, 79px 79px #0880d7, 80px 80px #0880d7, 81px 81px #0880d7, 82px 82px #0880d7, 83px 83px #0880d7, 84px 84px #0880d7, 85px 85px #0880d7"
    },
    "button-longshadow-rightbutton-primary": {
        "textShadow": "0px 0px #0880d7, 1px 1px #0880d7, 2px 2px #0880d7, 3px 3px #0880d7, 4px 4px #0880d7, 5px 5px #0880d7, 6px 6px #0880d7, 7px 7px #0880d7, 8px 8px #0880d7, 9px 9px #0880d7, 10px 10px #0880d7, 11px 11px #0880d7, 12px 12px #0880d7, 13px 13px #0880d7, 14px 14px #0880d7, 15px 15px #0880d7, 16px 16px #0880d7, 17px 17px #0880d7, 18px 18px #0880d7, 19px 19px #0880d7, 20px 20px #0880d7, 21px 21px #0880d7, 22px 22px #0880d7, 23px 23px #0880d7, 24px 24px #0880d7, 25px 25px #0880d7, 26px 26px #0880d7, 27px 27px #0880d7, 28px 28px #0880d7, 29px 29px #0880d7, 30px 30px #0880d7, 31px 31px #0880d7, 32px 32px #0880d7, 33px 33px #0880d7, 34px 34px #0880d7, 35px 35px #0880d7, 36px 36px #0880d7, 37px 37px #0880d7, 38px 38px #0880d7, 39px 39px #0880d7, 40px 40px #0880d7, 41px 41px #0880d7, 42px 42px #0880d7, 43px 43px #0880d7, 44px 44px #0880d7, 45px 45px #0880d7, 46px 46px #0880d7, 47px 47px #0880d7, 48px 48px #0880d7, 49px 49px #0880d7, 50px 50px #0880d7, 51px 51px #0880d7, 52px 52px #0880d7, 53px 53px #0880d7, 54px 54px #0880d7, 55px 55px #0880d7, 56px 56px #0880d7, 57px 57px #0880d7, 58px 58px #0880d7, 59px 59px #0880d7, 60px 60px #0880d7, 61px 61px #0880d7, 62px 62px #0880d7, 63px 63px #0880d7, 64px 64px #0880d7, 65px 65px #0880d7, 66px 66px #0880d7, 67px 67px #0880d7, 68px 68px #0880d7, 69px 69px #0880d7, 70px 70px #0880d7, 71px 71px #0880d7, 72px 72px #0880d7, 73px 73px #0880d7, 74px 74px #0880d7, 75px 75px #0880d7, 76px 76px #0880d7, 77px 77px #0880d7, 78px 78px #0880d7, 79px 79px #0880d7, 80px 80px #0880d7, 81px 81px #0880d7, 82px 82px #0880d7, 83px 83px #0880d7, 84px 84px #0880d7, 85px 85px #0880d7"
    },
    "button-longshadowbutton-primary:active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadowbutton-primaryactive": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadowbutton-primaryis-active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-rightbutton-primary:active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-rightbutton-primaryactive": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-rightbutton-primaryis-active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadowbutton-plain": {
        "textShadow": "0px 0px #e6e6e6, 1px 1px #e6e6e6, 2px 2px #e6e6e6, 3px 3px #e6e6e6, 4px 4px #e6e6e6, 5px 5px #e6e6e6, 6px 6px #e6e6e6, 7px 7px #e6e6e6, 8px 8px #e6e6e6, 9px 9px #e6e6e6, 10px 10px #e6e6e6, 11px 11px #e6e6e6, 12px 12px #e6e6e6, 13px 13px #e6e6e6, 14px 14px #e6e6e6, 15px 15px #e6e6e6, 16px 16px #e6e6e6, 17px 17px #e6e6e6, 18px 18px #e6e6e6, 19px 19px #e6e6e6, 20px 20px #e6e6e6, 21px 21px #e6e6e6, 22px 22px #e6e6e6, 23px 23px #e6e6e6, 24px 24px #e6e6e6, 25px 25px #e6e6e6, 26px 26px #e6e6e6, 27px 27px #e6e6e6, 28px 28px #e6e6e6, 29px 29px #e6e6e6, 30px 30px #e6e6e6, 31px 31px #e6e6e6, 32px 32px #e6e6e6, 33px 33px #e6e6e6, 34px 34px #e6e6e6, 35px 35px #e6e6e6, 36px 36px #e6e6e6, 37px 37px #e6e6e6, 38px 38px #e6e6e6, 39px 39px #e6e6e6, 40px 40px #e6e6e6, 41px 41px #e6e6e6, 42px 42px #e6e6e6, 43px 43px #e6e6e6, 44px 44px #e6e6e6, 45px 45px #e6e6e6, 46px 46px #e6e6e6, 47px 47px #e6e6e6, 48px 48px #e6e6e6, 49px 49px #e6e6e6, 50px 50px #e6e6e6, 51px 51px #e6e6e6, 52px 52px #e6e6e6, 53px 53px #e6e6e6, 54px 54px #e6e6e6, 55px 55px #e6e6e6, 56px 56px #e6e6e6, 57px 57px #e6e6e6, 58px 58px #e6e6e6, 59px 59px #e6e6e6, 60px 60px #e6e6e6, 61px 61px #e6e6e6, 62px 62px #e6e6e6, 63px 63px #e6e6e6, 64px 64px #e6e6e6, 65px 65px #e6e6e6, 66px 66px #e6e6e6, 67px 67px #e6e6e6, 68px 68px #e6e6e6, 69px 69px #e6e6e6, 70px 70px #e6e6e6, 71px 71px #e6e6e6, 72px 72px #e6e6e6, 73px 73px #e6e6e6, 74px 74px #e6e6e6, 75px 75px #e6e6e6, 76px 76px #e6e6e6, 77px 77px #e6e6e6, 78px 78px #e6e6e6, 79px 79px #e6e6e6, 80px 80px #e6e6e6, 81px 81px #e6e6e6, 82px 82px #e6e6e6, 83px 83px #e6e6e6, 84px 84px #e6e6e6, 85px 85px #e6e6e6"
    },
    "button-longshadow-rightbutton-plain": {
        "textShadow": "0px 0px #e6e6e6, 1px 1px #e6e6e6, 2px 2px #e6e6e6, 3px 3px #e6e6e6, 4px 4px #e6e6e6, 5px 5px #e6e6e6, 6px 6px #e6e6e6, 7px 7px #e6e6e6, 8px 8px #e6e6e6, 9px 9px #e6e6e6, 10px 10px #e6e6e6, 11px 11px #e6e6e6, 12px 12px #e6e6e6, 13px 13px #e6e6e6, 14px 14px #e6e6e6, 15px 15px #e6e6e6, 16px 16px #e6e6e6, 17px 17px #e6e6e6, 18px 18px #e6e6e6, 19px 19px #e6e6e6, 20px 20px #e6e6e6, 21px 21px #e6e6e6, 22px 22px #e6e6e6, 23px 23px #e6e6e6, 24px 24px #e6e6e6, 25px 25px #e6e6e6, 26px 26px #e6e6e6, 27px 27px #e6e6e6, 28px 28px #e6e6e6, 29px 29px #e6e6e6, 30px 30px #e6e6e6, 31px 31px #e6e6e6, 32px 32px #e6e6e6, 33px 33px #e6e6e6, 34px 34px #e6e6e6, 35px 35px #e6e6e6, 36px 36px #e6e6e6, 37px 37px #e6e6e6, 38px 38px #e6e6e6, 39px 39px #e6e6e6, 40px 40px #e6e6e6, 41px 41px #e6e6e6, 42px 42px #e6e6e6, 43px 43px #e6e6e6, 44px 44px #e6e6e6, 45px 45px #e6e6e6, 46px 46px #e6e6e6, 47px 47px #e6e6e6, 48px 48px #e6e6e6, 49px 49px #e6e6e6, 50px 50px #e6e6e6, 51px 51px #e6e6e6, 52px 52px #e6e6e6, 53px 53px #e6e6e6, 54px 54px #e6e6e6, 55px 55px #e6e6e6, 56px 56px #e6e6e6, 57px 57px #e6e6e6, 58px 58px #e6e6e6, 59px 59px #e6e6e6, 60px 60px #e6e6e6, 61px 61px #e6e6e6, 62px 62px #e6e6e6, 63px 63px #e6e6e6, 64px 64px #e6e6e6, 65px 65px #e6e6e6, 66px 66px #e6e6e6, 67px 67px #e6e6e6, 68px 68px #e6e6e6, 69px 69px #e6e6e6, 70px 70px #e6e6e6, 71px 71px #e6e6e6, 72px 72px #e6e6e6, 73px 73px #e6e6e6, 74px 74px #e6e6e6, 75px 75px #e6e6e6, 76px 76px #e6e6e6, 77px 77px #e6e6e6, 78px 78px #e6e6e6, 79px 79px #e6e6e6, 80px 80px #e6e6e6, 81px 81px #e6e6e6, 82px 82px #e6e6e6, 83px 83px #e6e6e6, 84px 84px #e6e6e6, 85px 85px #e6e6e6"
    },
    "button-longshadowbutton-plain:active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadowbutton-plainactive": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadowbutton-plainis-active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-rightbutton-plain:active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-rightbutton-plainactive": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-rightbutton-plainis-active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadowbutton-inverse": {
        "textShadow": "0px 0px #090909, 1px 1px #090909, 2px 2px #090909, 3px 3px #090909, 4px 4px #090909, 5px 5px #090909, 6px 6px #090909, 7px 7px #090909, 8px 8px #090909, 9px 9px #090909, 10px 10px #090909, 11px 11px #090909, 12px 12px #090909, 13px 13px #090909, 14px 14px #090909, 15px 15px #090909, 16px 16px #090909, 17px 17px #090909, 18px 18px #090909, 19px 19px #090909, 20px 20px #090909, 21px 21px #090909, 22px 22px #090909, 23px 23px #090909, 24px 24px #090909, 25px 25px #090909, 26px 26px #090909, 27px 27px #090909, 28px 28px #090909, 29px 29px #090909, 30px 30px #090909, 31px 31px #090909, 32px 32px #090909, 33px 33px #090909, 34px 34px #090909, 35px 35px #090909, 36px 36px #090909, 37px 37px #090909, 38px 38px #090909, 39px 39px #090909, 40px 40px #090909, 41px 41px #090909, 42px 42px #090909, 43px 43px #090909, 44px 44px #090909, 45px 45px #090909, 46px 46px #090909, 47px 47px #090909, 48px 48px #090909, 49px 49px #090909, 50px 50px #090909, 51px 51px #090909, 52px 52px #090909, 53px 53px #090909, 54px 54px #090909, 55px 55px #090909, 56px 56px #090909, 57px 57px #090909, 58px 58px #090909, 59px 59px #090909, 60px 60px #090909, 61px 61px #090909, 62px 62px #090909, 63px 63px #090909, 64px 64px #090909, 65px 65px #090909, 66px 66px #090909, 67px 67px #090909, 68px 68px #090909, 69px 69px #090909, 70px 70px #090909, 71px 71px #090909, 72px 72px #090909, 73px 73px #090909, 74px 74px #090909, 75px 75px #090909, 76px 76px #090909, 77px 77px #090909, 78px 78px #090909, 79px 79px #090909, 80px 80px #090909, 81px 81px #090909, 82px 82px #090909, 83px 83px #090909, 84px 84px #090909, 85px 85px #090909"
    },
    "button-longshadow-rightbutton-inverse": {
        "textShadow": "0px 0px #090909, 1px 1px #090909, 2px 2px #090909, 3px 3px #090909, 4px 4px #090909, 5px 5px #090909, 6px 6px #090909, 7px 7px #090909, 8px 8px #090909, 9px 9px #090909, 10px 10px #090909, 11px 11px #090909, 12px 12px #090909, 13px 13px #090909, 14px 14px #090909, 15px 15px #090909, 16px 16px #090909, 17px 17px #090909, 18px 18px #090909, 19px 19px #090909, 20px 20px #090909, 21px 21px #090909, 22px 22px #090909, 23px 23px #090909, 24px 24px #090909, 25px 25px #090909, 26px 26px #090909, 27px 27px #090909, 28px 28px #090909, 29px 29px #090909, 30px 30px #090909, 31px 31px #090909, 32px 32px #090909, 33px 33px #090909, 34px 34px #090909, 35px 35px #090909, 36px 36px #090909, 37px 37px #090909, 38px 38px #090909, 39px 39px #090909, 40px 40px #090909, 41px 41px #090909, 42px 42px #090909, 43px 43px #090909, 44px 44px #090909, 45px 45px #090909, 46px 46px #090909, 47px 47px #090909, 48px 48px #090909, 49px 49px #090909, 50px 50px #090909, 51px 51px #090909, 52px 52px #090909, 53px 53px #090909, 54px 54px #090909, 55px 55px #090909, 56px 56px #090909, 57px 57px #090909, 58px 58px #090909, 59px 59px #090909, 60px 60px #090909, 61px 61px #090909, 62px 62px #090909, 63px 63px #090909, 64px 64px #090909, 65px 65px #090909, 66px 66px #090909, 67px 67px #090909, 68px 68px #090909, 69px 69px #090909, 70px 70px #090909, 71px 71px #090909, 72px 72px #090909, 73px 73px #090909, 74px 74px #090909, 75px 75px #090909, 76px 76px #090909, 77px 77px #090909, 78px 78px #090909, 79px 79px #090909, 80px 80px #090909, 81px 81px #090909, 82px 82px #090909, 83px 83px #090909, 84px 84px #090909, 85px 85px #090909"
    },
    "button-longshadowbutton-inverse:active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadowbutton-inverseactive": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadowbutton-inverseis-active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-rightbutton-inverse:active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-rightbutton-inverseactive": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-rightbutton-inverseis-active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadowbutton-action": {
        "textShadow": "0px 0px #8bc220, 1px 1px #8bc220, 2px 2px #8bc220, 3px 3px #8bc220, 4px 4px #8bc220, 5px 5px #8bc220, 6px 6px #8bc220, 7px 7px #8bc220, 8px 8px #8bc220, 9px 9px #8bc220, 10px 10px #8bc220, 11px 11px #8bc220, 12px 12px #8bc220, 13px 13px #8bc220, 14px 14px #8bc220, 15px 15px #8bc220, 16px 16px #8bc220, 17px 17px #8bc220, 18px 18px #8bc220, 19px 19px #8bc220, 20px 20px #8bc220, 21px 21px #8bc220, 22px 22px #8bc220, 23px 23px #8bc220, 24px 24px #8bc220, 25px 25px #8bc220, 26px 26px #8bc220, 27px 27px #8bc220, 28px 28px #8bc220, 29px 29px #8bc220, 30px 30px #8bc220, 31px 31px #8bc220, 32px 32px #8bc220, 33px 33px #8bc220, 34px 34px #8bc220, 35px 35px #8bc220, 36px 36px #8bc220, 37px 37px #8bc220, 38px 38px #8bc220, 39px 39px #8bc220, 40px 40px #8bc220, 41px 41px #8bc220, 42px 42px #8bc220, 43px 43px #8bc220, 44px 44px #8bc220, 45px 45px #8bc220, 46px 46px #8bc220, 47px 47px #8bc220, 48px 48px #8bc220, 49px 49px #8bc220, 50px 50px #8bc220, 51px 51px #8bc220, 52px 52px #8bc220, 53px 53px #8bc220, 54px 54px #8bc220, 55px 55px #8bc220, 56px 56px #8bc220, 57px 57px #8bc220, 58px 58px #8bc220, 59px 59px #8bc220, 60px 60px #8bc220, 61px 61px #8bc220, 62px 62px #8bc220, 63px 63px #8bc220, 64px 64px #8bc220, 65px 65px #8bc220, 66px 66px #8bc220, 67px 67px #8bc220, 68px 68px #8bc220, 69px 69px #8bc220, 70px 70px #8bc220, 71px 71px #8bc220, 72px 72px #8bc220, 73px 73px #8bc220, 74px 74px #8bc220, 75px 75px #8bc220, 76px 76px #8bc220, 77px 77px #8bc220, 78px 78px #8bc220, 79px 79px #8bc220, 80px 80px #8bc220, 81px 81px #8bc220, 82px 82px #8bc220, 83px 83px #8bc220, 84px 84px #8bc220, 85px 85px #8bc220"
    },
    "button-longshadow-rightbutton-action": {
        "textShadow": "0px 0px #8bc220, 1px 1px #8bc220, 2px 2px #8bc220, 3px 3px #8bc220, 4px 4px #8bc220, 5px 5px #8bc220, 6px 6px #8bc220, 7px 7px #8bc220, 8px 8px #8bc220, 9px 9px #8bc220, 10px 10px #8bc220, 11px 11px #8bc220, 12px 12px #8bc220, 13px 13px #8bc220, 14px 14px #8bc220, 15px 15px #8bc220, 16px 16px #8bc220, 17px 17px #8bc220, 18px 18px #8bc220, 19px 19px #8bc220, 20px 20px #8bc220, 21px 21px #8bc220, 22px 22px #8bc220, 23px 23px #8bc220, 24px 24px #8bc220, 25px 25px #8bc220, 26px 26px #8bc220, 27px 27px #8bc220, 28px 28px #8bc220, 29px 29px #8bc220, 30px 30px #8bc220, 31px 31px #8bc220, 32px 32px #8bc220, 33px 33px #8bc220, 34px 34px #8bc220, 35px 35px #8bc220, 36px 36px #8bc220, 37px 37px #8bc220, 38px 38px #8bc220, 39px 39px #8bc220, 40px 40px #8bc220, 41px 41px #8bc220, 42px 42px #8bc220, 43px 43px #8bc220, 44px 44px #8bc220, 45px 45px #8bc220, 46px 46px #8bc220, 47px 47px #8bc220, 48px 48px #8bc220, 49px 49px #8bc220, 50px 50px #8bc220, 51px 51px #8bc220, 52px 52px #8bc220, 53px 53px #8bc220, 54px 54px #8bc220, 55px 55px #8bc220, 56px 56px #8bc220, 57px 57px #8bc220, 58px 58px #8bc220, 59px 59px #8bc220, 60px 60px #8bc220, 61px 61px #8bc220, 62px 62px #8bc220, 63px 63px #8bc220, 64px 64px #8bc220, 65px 65px #8bc220, 66px 66px #8bc220, 67px 67px #8bc220, 68px 68px #8bc220, 69px 69px #8bc220, 70px 70px #8bc220, 71px 71px #8bc220, 72px 72px #8bc220, 73px 73px #8bc220, 74px 74px #8bc220, 75px 75px #8bc220, 76px 76px #8bc220, 77px 77px #8bc220, 78px 78px #8bc220, 79px 79px #8bc220, 80px 80px #8bc220, 81px 81px #8bc220, 82px 82px #8bc220, 83px 83px #8bc220, 84px 84px #8bc220, 85px 85px #8bc220"
    },
    "button-longshadowbutton-action:active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadowbutton-actionactive": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadowbutton-actionis-active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-rightbutton-action:active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-rightbutton-actionactive": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-rightbutton-actionis-active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadowbutton-highlight": {
        "textShadow": "0px 0px #e59501, 1px 1px #e59501, 2px 2px #e59501, 3px 3px #e59501, 4px 4px #e59501, 5px 5px #e59501, 6px 6px #e59501, 7px 7px #e59501, 8px 8px #e59501, 9px 9px #e59501, 10px 10px #e59501, 11px 11px #e59501, 12px 12px #e59501, 13px 13px #e59501, 14px 14px #e59501, 15px 15px #e59501, 16px 16px #e59501, 17px 17px #e59501, 18px 18px #e59501, 19px 19px #e59501, 20px 20px #e59501, 21px 21px #e59501, 22px 22px #e59501, 23px 23px #e59501, 24px 24px #e59501, 25px 25px #e59501, 26px 26px #e59501, 27px 27px #e59501, 28px 28px #e59501, 29px 29px #e59501, 30px 30px #e59501, 31px 31px #e59501, 32px 32px #e59501, 33px 33px #e59501, 34px 34px #e59501, 35px 35px #e59501, 36px 36px #e59501, 37px 37px #e59501, 38px 38px #e59501, 39px 39px #e59501, 40px 40px #e59501, 41px 41px #e59501, 42px 42px #e59501, 43px 43px #e59501, 44px 44px #e59501, 45px 45px #e59501, 46px 46px #e59501, 47px 47px #e59501, 48px 48px #e59501, 49px 49px #e59501, 50px 50px #e59501, 51px 51px #e59501, 52px 52px #e59501, 53px 53px #e59501, 54px 54px #e59501, 55px 55px #e59501, 56px 56px #e59501, 57px 57px #e59501, 58px 58px #e59501, 59px 59px #e59501, 60px 60px #e59501, 61px 61px #e59501, 62px 62px #e59501, 63px 63px #e59501, 64px 64px #e59501, 65px 65px #e59501, 66px 66px #e59501, 67px 67px #e59501, 68px 68px #e59501, 69px 69px #e59501, 70px 70px #e59501, 71px 71px #e59501, 72px 72px #e59501, 73px 73px #e59501, 74px 74px #e59501, 75px 75px #e59501, 76px 76px #e59501, 77px 77px #e59501, 78px 78px #e59501, 79px 79px #e59501, 80px 80px #e59501, 81px 81px #e59501, 82px 82px #e59501, 83px 83px #e59501, 84px 84px #e59501, 85px 85px #e59501"
    },
    "button-longshadow-rightbutton-highlight": {
        "textShadow": "0px 0px #e59501, 1px 1px #e59501, 2px 2px #e59501, 3px 3px #e59501, 4px 4px #e59501, 5px 5px #e59501, 6px 6px #e59501, 7px 7px #e59501, 8px 8px #e59501, 9px 9px #e59501, 10px 10px #e59501, 11px 11px #e59501, 12px 12px #e59501, 13px 13px #e59501, 14px 14px #e59501, 15px 15px #e59501, 16px 16px #e59501, 17px 17px #e59501, 18px 18px #e59501, 19px 19px #e59501, 20px 20px #e59501, 21px 21px #e59501, 22px 22px #e59501, 23px 23px #e59501, 24px 24px #e59501, 25px 25px #e59501, 26px 26px #e59501, 27px 27px #e59501, 28px 28px #e59501, 29px 29px #e59501, 30px 30px #e59501, 31px 31px #e59501, 32px 32px #e59501, 33px 33px #e59501, 34px 34px #e59501, 35px 35px #e59501, 36px 36px #e59501, 37px 37px #e59501, 38px 38px #e59501, 39px 39px #e59501, 40px 40px #e59501, 41px 41px #e59501, 42px 42px #e59501, 43px 43px #e59501, 44px 44px #e59501, 45px 45px #e59501, 46px 46px #e59501, 47px 47px #e59501, 48px 48px #e59501, 49px 49px #e59501, 50px 50px #e59501, 51px 51px #e59501, 52px 52px #e59501, 53px 53px #e59501, 54px 54px #e59501, 55px 55px #e59501, 56px 56px #e59501, 57px 57px #e59501, 58px 58px #e59501, 59px 59px #e59501, 60px 60px #e59501, 61px 61px #e59501, 62px 62px #e59501, 63px 63px #e59501, 64px 64px #e59501, 65px 65px #e59501, 66px 66px #e59501, 67px 67px #e59501, 68px 68px #e59501, 69px 69px #e59501, 70px 70px #e59501, 71px 71px #e59501, 72px 72px #e59501, 73px 73px #e59501, 74px 74px #e59501, 75px 75px #e59501, 76px 76px #e59501, 77px 77px #e59501, 78px 78px #e59501, 79px 79px #e59501, 80px 80px #e59501, 81px 81px #e59501, 82px 82px #e59501, 83px 83px #e59501, 84px 84px #e59501, 85px 85px #e59501"
    },
    "button-longshadowbutton-highlight:active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadowbutton-highlightactive": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadowbutton-highlightis-active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-rightbutton-highlight:active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-rightbutton-highlightactive": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-rightbutton-highlightis-active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadowbutton-caution": {
        "textShadow": "0px 0px #ff1022, 1px 1px #ff1022, 2px 2px #ff1022, 3px 3px #ff1022, 4px 4px #ff1022, 5px 5px #ff1022, 6px 6px #ff1022, 7px 7px #ff1022, 8px 8px #ff1022, 9px 9px #ff1022, 10px 10px #ff1022, 11px 11px #ff1022, 12px 12px #ff1022, 13px 13px #ff1022, 14px 14px #ff1022, 15px 15px #ff1022, 16px 16px #ff1022, 17px 17px #ff1022, 18px 18px #ff1022, 19px 19px #ff1022, 20px 20px #ff1022, 21px 21px #ff1022, 22px 22px #ff1022, 23px 23px #ff1022, 24px 24px #ff1022, 25px 25px #ff1022, 26px 26px #ff1022, 27px 27px #ff1022, 28px 28px #ff1022, 29px 29px #ff1022, 30px 30px #ff1022, 31px 31px #ff1022, 32px 32px #ff1022, 33px 33px #ff1022, 34px 34px #ff1022, 35px 35px #ff1022, 36px 36px #ff1022, 37px 37px #ff1022, 38px 38px #ff1022, 39px 39px #ff1022, 40px 40px #ff1022, 41px 41px #ff1022, 42px 42px #ff1022, 43px 43px #ff1022, 44px 44px #ff1022, 45px 45px #ff1022, 46px 46px #ff1022, 47px 47px #ff1022, 48px 48px #ff1022, 49px 49px #ff1022, 50px 50px #ff1022, 51px 51px #ff1022, 52px 52px #ff1022, 53px 53px #ff1022, 54px 54px #ff1022, 55px 55px #ff1022, 56px 56px #ff1022, 57px 57px #ff1022, 58px 58px #ff1022, 59px 59px #ff1022, 60px 60px #ff1022, 61px 61px #ff1022, 62px 62px #ff1022, 63px 63px #ff1022, 64px 64px #ff1022, 65px 65px #ff1022, 66px 66px #ff1022, 67px 67px #ff1022, 68px 68px #ff1022, 69px 69px #ff1022, 70px 70px #ff1022, 71px 71px #ff1022, 72px 72px #ff1022, 73px 73px #ff1022, 74px 74px #ff1022, 75px 75px #ff1022, 76px 76px #ff1022, 77px 77px #ff1022, 78px 78px #ff1022, 79px 79px #ff1022, 80px 80px #ff1022, 81px 81px #ff1022, 82px 82px #ff1022, 83px 83px #ff1022, 84px 84px #ff1022, 85px 85px #ff1022"
    },
    "button-longshadow-rightbutton-caution": {
        "textShadow": "0px 0px #ff1022, 1px 1px #ff1022, 2px 2px #ff1022, 3px 3px #ff1022, 4px 4px #ff1022, 5px 5px #ff1022, 6px 6px #ff1022, 7px 7px #ff1022, 8px 8px #ff1022, 9px 9px #ff1022, 10px 10px #ff1022, 11px 11px #ff1022, 12px 12px #ff1022, 13px 13px #ff1022, 14px 14px #ff1022, 15px 15px #ff1022, 16px 16px #ff1022, 17px 17px #ff1022, 18px 18px #ff1022, 19px 19px #ff1022, 20px 20px #ff1022, 21px 21px #ff1022, 22px 22px #ff1022, 23px 23px #ff1022, 24px 24px #ff1022, 25px 25px #ff1022, 26px 26px #ff1022, 27px 27px #ff1022, 28px 28px #ff1022, 29px 29px #ff1022, 30px 30px #ff1022, 31px 31px #ff1022, 32px 32px #ff1022, 33px 33px #ff1022, 34px 34px #ff1022, 35px 35px #ff1022, 36px 36px #ff1022, 37px 37px #ff1022, 38px 38px #ff1022, 39px 39px #ff1022, 40px 40px #ff1022, 41px 41px #ff1022, 42px 42px #ff1022, 43px 43px #ff1022, 44px 44px #ff1022, 45px 45px #ff1022, 46px 46px #ff1022, 47px 47px #ff1022, 48px 48px #ff1022, 49px 49px #ff1022, 50px 50px #ff1022, 51px 51px #ff1022, 52px 52px #ff1022, 53px 53px #ff1022, 54px 54px #ff1022, 55px 55px #ff1022, 56px 56px #ff1022, 57px 57px #ff1022, 58px 58px #ff1022, 59px 59px #ff1022, 60px 60px #ff1022, 61px 61px #ff1022, 62px 62px #ff1022, 63px 63px #ff1022, 64px 64px #ff1022, 65px 65px #ff1022, 66px 66px #ff1022, 67px 67px #ff1022, 68px 68px #ff1022, 69px 69px #ff1022, 70px 70px #ff1022, 71px 71px #ff1022, 72px 72px #ff1022, 73px 73px #ff1022, 74px 74px #ff1022, 75px 75px #ff1022, 76px 76px #ff1022, 77px 77px #ff1022, 78px 78px #ff1022, 79px 79px #ff1022, 80px 80px #ff1022, 81px 81px #ff1022, 82px 82px #ff1022, 83px 83px #ff1022, 84px 84px #ff1022, 85px 85px #ff1022"
    },
    "button-longshadowbutton-caution:active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadowbutton-cautionactive": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadowbutton-cautionis-active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-rightbutton-caution:active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-rightbutton-cautionactive": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-rightbutton-cautionis-active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadowbutton-royal": {
        "textShadow": "0px 0px #5246e2, 1px 1px #5246e2, 2px 2px #5246e2, 3px 3px #5246e2, 4px 4px #5246e2, 5px 5px #5246e2, 6px 6px #5246e2, 7px 7px #5246e2, 8px 8px #5246e2, 9px 9px #5246e2, 10px 10px #5246e2, 11px 11px #5246e2, 12px 12px #5246e2, 13px 13px #5246e2, 14px 14px #5246e2, 15px 15px #5246e2, 16px 16px #5246e2, 17px 17px #5246e2, 18px 18px #5246e2, 19px 19px #5246e2, 20px 20px #5246e2, 21px 21px #5246e2, 22px 22px #5246e2, 23px 23px #5246e2, 24px 24px #5246e2, 25px 25px #5246e2, 26px 26px #5246e2, 27px 27px #5246e2, 28px 28px #5246e2, 29px 29px #5246e2, 30px 30px #5246e2, 31px 31px #5246e2, 32px 32px #5246e2, 33px 33px #5246e2, 34px 34px #5246e2, 35px 35px #5246e2, 36px 36px #5246e2, 37px 37px #5246e2, 38px 38px #5246e2, 39px 39px #5246e2, 40px 40px #5246e2, 41px 41px #5246e2, 42px 42px #5246e2, 43px 43px #5246e2, 44px 44px #5246e2, 45px 45px #5246e2, 46px 46px #5246e2, 47px 47px #5246e2, 48px 48px #5246e2, 49px 49px #5246e2, 50px 50px #5246e2, 51px 51px #5246e2, 52px 52px #5246e2, 53px 53px #5246e2, 54px 54px #5246e2, 55px 55px #5246e2, 56px 56px #5246e2, 57px 57px #5246e2, 58px 58px #5246e2, 59px 59px #5246e2, 60px 60px #5246e2, 61px 61px #5246e2, 62px 62px #5246e2, 63px 63px #5246e2, 64px 64px #5246e2, 65px 65px #5246e2, 66px 66px #5246e2, 67px 67px #5246e2, 68px 68px #5246e2, 69px 69px #5246e2, 70px 70px #5246e2, 71px 71px #5246e2, 72px 72px #5246e2, 73px 73px #5246e2, 74px 74px #5246e2, 75px 75px #5246e2, 76px 76px #5246e2, 77px 77px #5246e2, 78px 78px #5246e2, 79px 79px #5246e2, 80px 80px #5246e2, 81px 81px #5246e2, 82px 82px #5246e2, 83px 83px #5246e2, 84px 84px #5246e2, 85px 85px #5246e2"
    },
    "button-longshadow-rightbutton-royal": {
        "textShadow": "0px 0px #5246e2, 1px 1px #5246e2, 2px 2px #5246e2, 3px 3px #5246e2, 4px 4px #5246e2, 5px 5px #5246e2, 6px 6px #5246e2, 7px 7px #5246e2, 8px 8px #5246e2, 9px 9px #5246e2, 10px 10px #5246e2, 11px 11px #5246e2, 12px 12px #5246e2, 13px 13px #5246e2, 14px 14px #5246e2, 15px 15px #5246e2, 16px 16px #5246e2, 17px 17px #5246e2, 18px 18px #5246e2, 19px 19px #5246e2, 20px 20px #5246e2, 21px 21px #5246e2, 22px 22px #5246e2, 23px 23px #5246e2, 24px 24px #5246e2, 25px 25px #5246e2, 26px 26px #5246e2, 27px 27px #5246e2, 28px 28px #5246e2, 29px 29px #5246e2, 30px 30px #5246e2, 31px 31px #5246e2, 32px 32px #5246e2, 33px 33px #5246e2, 34px 34px #5246e2, 35px 35px #5246e2, 36px 36px #5246e2, 37px 37px #5246e2, 38px 38px #5246e2, 39px 39px #5246e2, 40px 40px #5246e2, 41px 41px #5246e2, 42px 42px #5246e2, 43px 43px #5246e2, 44px 44px #5246e2, 45px 45px #5246e2, 46px 46px #5246e2, 47px 47px #5246e2, 48px 48px #5246e2, 49px 49px #5246e2, 50px 50px #5246e2, 51px 51px #5246e2, 52px 52px #5246e2, 53px 53px #5246e2, 54px 54px #5246e2, 55px 55px #5246e2, 56px 56px #5246e2, 57px 57px #5246e2, 58px 58px #5246e2, 59px 59px #5246e2, 60px 60px #5246e2, 61px 61px #5246e2, 62px 62px #5246e2, 63px 63px #5246e2, 64px 64px #5246e2, 65px 65px #5246e2, 66px 66px #5246e2, 67px 67px #5246e2, 68px 68px #5246e2, 69px 69px #5246e2, 70px 70px #5246e2, 71px 71px #5246e2, 72px 72px #5246e2, 73px 73px #5246e2, 74px 74px #5246e2, 75px 75px #5246e2, 76px 76px #5246e2, 77px 77px #5246e2, 78px 78px #5246e2, 79px 79px #5246e2, 80px 80px #5246e2, 81px 81px #5246e2, 82px 82px #5246e2, 83px 83px #5246e2, 84px 84px #5246e2, 85px 85px #5246e2"
    },
    "button-longshadowbutton-royal:active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadowbutton-royalactive": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadowbutton-royalis-active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-rightbutton-royal:active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-rightbutton-royalactive": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-rightbutton-royalis-active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-left": {
        "overflow": "hidden"
    },
    "button-longshadow-leftbutton-primary": {
        "textShadow": "0px 0px #0880d7, -1px 1px #0880d7, -2px 2px #0880d7, -3px 3px #0880d7, -4px 4px #0880d7, -5px 5px #0880d7, -6px 6px #0880d7, -7px 7px #0880d7, -8px 8px #0880d7, -9px 9px #0880d7, -10px 10px #0880d7, -11px 11px #0880d7, -12px 12px #0880d7, -13px 13px #0880d7, -14px 14px #0880d7, -15px 15px #0880d7, -16px 16px #0880d7, -17px 17px #0880d7, -18px 18px #0880d7, -19px 19px #0880d7, -20px 20px #0880d7, -21px 21px #0880d7, -22px 22px #0880d7, -23px 23px #0880d7, -24px 24px #0880d7, -25px 25px #0880d7, -26px 26px #0880d7, -27px 27px #0880d7, -28px 28px #0880d7, -29px 29px #0880d7, -30px 30px #0880d7, -31px 31px #0880d7, -32px 32px #0880d7, -33px 33px #0880d7, -34px 34px #0880d7, -35px 35px #0880d7, -36px 36px #0880d7, -37px 37px #0880d7, -38px 38px #0880d7, -39px 39px #0880d7, -40px 40px #0880d7, -41px 41px #0880d7, -42px 42px #0880d7, -43px 43px #0880d7, -44px 44px #0880d7, -45px 45px #0880d7, -46px 46px #0880d7, -47px 47px #0880d7, -48px 48px #0880d7, -49px 49px #0880d7, -50px 50px #0880d7, -51px 51px #0880d7, -52px 52px #0880d7, -53px 53px #0880d7, -54px 54px #0880d7, -55px 55px #0880d7, -56px 56px #0880d7, -57px 57px #0880d7, -58px 58px #0880d7, -59px 59px #0880d7, -60px 60px #0880d7, -61px 61px #0880d7, -62px 62px #0880d7, -63px 63px #0880d7, -64px 64px #0880d7, -65px 65px #0880d7, -66px 66px #0880d7, -67px 67px #0880d7, -68px 68px #0880d7, -69px 69px #0880d7, -70px 70px #0880d7, -71px 71px #0880d7, -72px 72px #0880d7, -73px 73px #0880d7, -74px 74px #0880d7, -75px 75px #0880d7, -76px 76px #0880d7, -77px 77px #0880d7, -78px 78px #0880d7, -79px 79px #0880d7, -80px 80px #0880d7, -81px 81px #0880d7, -82px 82px #0880d7, -83px 83px #0880d7, -84px 84px #0880d7, -85px 85px #0880d7"
    },
    "button-longshadow-leftbutton-primary:active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-leftbutton-primaryactive": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-leftbutton-primaryis-active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-leftbutton-plain": {
        "textShadow": "0px 0px #e6e6e6, -1px 1px #e6e6e6, -2px 2px #e6e6e6, -3px 3px #e6e6e6, -4px 4px #e6e6e6, -5px 5px #e6e6e6, -6px 6px #e6e6e6, -7px 7px #e6e6e6, -8px 8px #e6e6e6, -9px 9px #e6e6e6, -10px 10px #e6e6e6, -11px 11px #e6e6e6, -12px 12px #e6e6e6, -13px 13px #e6e6e6, -14px 14px #e6e6e6, -15px 15px #e6e6e6, -16px 16px #e6e6e6, -17px 17px #e6e6e6, -18px 18px #e6e6e6, -19px 19px #e6e6e6, -20px 20px #e6e6e6, -21px 21px #e6e6e6, -22px 22px #e6e6e6, -23px 23px #e6e6e6, -24px 24px #e6e6e6, -25px 25px #e6e6e6, -26px 26px #e6e6e6, -27px 27px #e6e6e6, -28px 28px #e6e6e6, -29px 29px #e6e6e6, -30px 30px #e6e6e6, -31px 31px #e6e6e6, -32px 32px #e6e6e6, -33px 33px #e6e6e6, -34px 34px #e6e6e6, -35px 35px #e6e6e6, -36px 36px #e6e6e6, -37px 37px #e6e6e6, -38px 38px #e6e6e6, -39px 39px #e6e6e6, -40px 40px #e6e6e6, -41px 41px #e6e6e6, -42px 42px #e6e6e6, -43px 43px #e6e6e6, -44px 44px #e6e6e6, -45px 45px #e6e6e6, -46px 46px #e6e6e6, -47px 47px #e6e6e6, -48px 48px #e6e6e6, -49px 49px #e6e6e6, -50px 50px #e6e6e6, -51px 51px #e6e6e6, -52px 52px #e6e6e6, -53px 53px #e6e6e6, -54px 54px #e6e6e6, -55px 55px #e6e6e6, -56px 56px #e6e6e6, -57px 57px #e6e6e6, -58px 58px #e6e6e6, -59px 59px #e6e6e6, -60px 60px #e6e6e6, -61px 61px #e6e6e6, -62px 62px #e6e6e6, -63px 63px #e6e6e6, -64px 64px #e6e6e6, -65px 65px #e6e6e6, -66px 66px #e6e6e6, -67px 67px #e6e6e6, -68px 68px #e6e6e6, -69px 69px #e6e6e6, -70px 70px #e6e6e6, -71px 71px #e6e6e6, -72px 72px #e6e6e6, -73px 73px #e6e6e6, -74px 74px #e6e6e6, -75px 75px #e6e6e6, -76px 76px #e6e6e6, -77px 77px #e6e6e6, -78px 78px #e6e6e6, -79px 79px #e6e6e6, -80px 80px #e6e6e6, -81px 81px #e6e6e6, -82px 82px #e6e6e6, -83px 83px #e6e6e6, -84px 84px #e6e6e6, -85px 85px #e6e6e6"
    },
    "button-longshadow-leftbutton-plain:active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-leftbutton-plainactive": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-leftbutton-plainis-active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-leftbutton-inverse": {
        "textShadow": "0px 0px #090909, -1px 1px #090909, -2px 2px #090909, -3px 3px #090909, -4px 4px #090909, -5px 5px #090909, -6px 6px #090909, -7px 7px #090909, -8px 8px #090909, -9px 9px #090909, -10px 10px #090909, -11px 11px #090909, -12px 12px #090909, -13px 13px #090909, -14px 14px #090909, -15px 15px #090909, -16px 16px #090909, -17px 17px #090909, -18px 18px #090909, -19px 19px #090909, -20px 20px #090909, -21px 21px #090909, -22px 22px #090909, -23px 23px #090909, -24px 24px #090909, -25px 25px #090909, -26px 26px #090909, -27px 27px #090909, -28px 28px #090909, -29px 29px #090909, -30px 30px #090909, -31px 31px #090909, -32px 32px #090909, -33px 33px #090909, -34px 34px #090909, -35px 35px #090909, -36px 36px #090909, -37px 37px #090909, -38px 38px #090909, -39px 39px #090909, -40px 40px #090909, -41px 41px #090909, -42px 42px #090909, -43px 43px #090909, -44px 44px #090909, -45px 45px #090909, -46px 46px #090909, -47px 47px #090909, -48px 48px #090909, -49px 49px #090909, -50px 50px #090909, -51px 51px #090909, -52px 52px #090909, -53px 53px #090909, -54px 54px #090909, -55px 55px #090909, -56px 56px #090909, -57px 57px #090909, -58px 58px #090909, -59px 59px #090909, -60px 60px #090909, -61px 61px #090909, -62px 62px #090909, -63px 63px #090909, -64px 64px #090909, -65px 65px #090909, -66px 66px #090909, -67px 67px #090909, -68px 68px #090909, -69px 69px #090909, -70px 70px #090909, -71px 71px #090909, -72px 72px #090909, -73px 73px #090909, -74px 74px #090909, -75px 75px #090909, -76px 76px #090909, -77px 77px #090909, -78px 78px #090909, -79px 79px #090909, -80px 80px #090909, -81px 81px #090909, -82px 82px #090909, -83px 83px #090909, -84px 84px #090909, -85px 85px #090909"
    },
    "button-longshadow-leftbutton-inverse:active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-leftbutton-inverseactive": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-leftbutton-inverseis-active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-leftbutton-action": {
        "textShadow": "0px 0px #8bc220, -1px 1px #8bc220, -2px 2px #8bc220, -3px 3px #8bc220, -4px 4px #8bc220, -5px 5px #8bc220, -6px 6px #8bc220, -7px 7px #8bc220, -8px 8px #8bc220, -9px 9px #8bc220, -10px 10px #8bc220, -11px 11px #8bc220, -12px 12px #8bc220, -13px 13px #8bc220, -14px 14px #8bc220, -15px 15px #8bc220, -16px 16px #8bc220, -17px 17px #8bc220, -18px 18px #8bc220, -19px 19px #8bc220, -20px 20px #8bc220, -21px 21px #8bc220, -22px 22px #8bc220, -23px 23px #8bc220, -24px 24px #8bc220, -25px 25px #8bc220, -26px 26px #8bc220, -27px 27px #8bc220, -28px 28px #8bc220, -29px 29px #8bc220, -30px 30px #8bc220, -31px 31px #8bc220, -32px 32px #8bc220, -33px 33px #8bc220, -34px 34px #8bc220, -35px 35px #8bc220, -36px 36px #8bc220, -37px 37px #8bc220, -38px 38px #8bc220, -39px 39px #8bc220, -40px 40px #8bc220, -41px 41px #8bc220, -42px 42px #8bc220, -43px 43px #8bc220, -44px 44px #8bc220, -45px 45px #8bc220, -46px 46px #8bc220, -47px 47px #8bc220, -48px 48px #8bc220, -49px 49px #8bc220, -50px 50px #8bc220, -51px 51px #8bc220, -52px 52px #8bc220, -53px 53px #8bc220, -54px 54px #8bc220, -55px 55px #8bc220, -56px 56px #8bc220, -57px 57px #8bc220, -58px 58px #8bc220, -59px 59px #8bc220, -60px 60px #8bc220, -61px 61px #8bc220, -62px 62px #8bc220, -63px 63px #8bc220, -64px 64px #8bc220, -65px 65px #8bc220, -66px 66px #8bc220, -67px 67px #8bc220, -68px 68px #8bc220, -69px 69px #8bc220, -70px 70px #8bc220, -71px 71px #8bc220, -72px 72px #8bc220, -73px 73px #8bc220, -74px 74px #8bc220, -75px 75px #8bc220, -76px 76px #8bc220, -77px 77px #8bc220, -78px 78px #8bc220, -79px 79px #8bc220, -80px 80px #8bc220, -81px 81px #8bc220, -82px 82px #8bc220, -83px 83px #8bc220, -84px 84px #8bc220, -85px 85px #8bc220"
    },
    "button-longshadow-leftbutton-action:active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-leftbutton-actionactive": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-leftbutton-actionis-active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-leftbutton-highlight": {
        "textShadow": "0px 0px #e59501, -1px 1px #e59501, -2px 2px #e59501, -3px 3px #e59501, -4px 4px #e59501, -5px 5px #e59501, -6px 6px #e59501, -7px 7px #e59501, -8px 8px #e59501, -9px 9px #e59501, -10px 10px #e59501, -11px 11px #e59501, -12px 12px #e59501, -13px 13px #e59501, -14px 14px #e59501, -15px 15px #e59501, -16px 16px #e59501, -17px 17px #e59501, -18px 18px #e59501, -19px 19px #e59501, -20px 20px #e59501, -21px 21px #e59501, -22px 22px #e59501, -23px 23px #e59501, -24px 24px #e59501, -25px 25px #e59501, -26px 26px #e59501, -27px 27px #e59501, -28px 28px #e59501, -29px 29px #e59501, -30px 30px #e59501, -31px 31px #e59501, -32px 32px #e59501, -33px 33px #e59501, -34px 34px #e59501, -35px 35px #e59501, -36px 36px #e59501, -37px 37px #e59501, -38px 38px #e59501, -39px 39px #e59501, -40px 40px #e59501, -41px 41px #e59501, -42px 42px #e59501, -43px 43px #e59501, -44px 44px #e59501, -45px 45px #e59501, -46px 46px #e59501, -47px 47px #e59501, -48px 48px #e59501, -49px 49px #e59501, -50px 50px #e59501, -51px 51px #e59501, -52px 52px #e59501, -53px 53px #e59501, -54px 54px #e59501, -55px 55px #e59501, -56px 56px #e59501, -57px 57px #e59501, -58px 58px #e59501, -59px 59px #e59501, -60px 60px #e59501, -61px 61px #e59501, -62px 62px #e59501, -63px 63px #e59501, -64px 64px #e59501, -65px 65px #e59501, -66px 66px #e59501, -67px 67px #e59501, -68px 68px #e59501, -69px 69px #e59501, -70px 70px #e59501, -71px 71px #e59501, -72px 72px #e59501, -73px 73px #e59501, -74px 74px #e59501, -75px 75px #e59501, -76px 76px #e59501, -77px 77px #e59501, -78px 78px #e59501, -79px 79px #e59501, -80px 80px #e59501, -81px 81px #e59501, -82px 82px #e59501, -83px 83px #e59501, -84px 84px #e59501, -85px 85px #e59501"
    },
    "button-longshadow-leftbutton-highlight:active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-leftbutton-highlightactive": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-leftbutton-highlightis-active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-leftbutton-caution": {
        "textShadow": "0px 0px #ff1022, -1px 1px #ff1022, -2px 2px #ff1022, -3px 3px #ff1022, -4px 4px #ff1022, -5px 5px #ff1022, -6px 6px #ff1022, -7px 7px #ff1022, -8px 8px #ff1022, -9px 9px #ff1022, -10px 10px #ff1022, -11px 11px #ff1022, -12px 12px #ff1022, -13px 13px #ff1022, -14px 14px #ff1022, -15px 15px #ff1022, -16px 16px #ff1022, -17px 17px #ff1022, -18px 18px #ff1022, -19px 19px #ff1022, -20px 20px #ff1022, -21px 21px #ff1022, -22px 22px #ff1022, -23px 23px #ff1022, -24px 24px #ff1022, -25px 25px #ff1022, -26px 26px #ff1022, -27px 27px #ff1022, -28px 28px #ff1022, -29px 29px #ff1022, -30px 30px #ff1022, -31px 31px #ff1022, -32px 32px #ff1022, -33px 33px #ff1022, -34px 34px #ff1022, -35px 35px #ff1022, -36px 36px #ff1022, -37px 37px #ff1022, -38px 38px #ff1022, -39px 39px #ff1022, -40px 40px #ff1022, -41px 41px #ff1022, -42px 42px #ff1022, -43px 43px #ff1022, -44px 44px #ff1022, -45px 45px #ff1022, -46px 46px #ff1022, -47px 47px #ff1022, -48px 48px #ff1022, -49px 49px #ff1022, -50px 50px #ff1022, -51px 51px #ff1022, -52px 52px #ff1022, -53px 53px #ff1022, -54px 54px #ff1022, -55px 55px #ff1022, -56px 56px #ff1022, -57px 57px #ff1022, -58px 58px #ff1022, -59px 59px #ff1022, -60px 60px #ff1022, -61px 61px #ff1022, -62px 62px #ff1022, -63px 63px #ff1022, -64px 64px #ff1022, -65px 65px #ff1022, -66px 66px #ff1022, -67px 67px #ff1022, -68px 68px #ff1022, -69px 69px #ff1022, -70px 70px #ff1022, -71px 71px #ff1022, -72px 72px #ff1022, -73px 73px #ff1022, -74px 74px #ff1022, -75px 75px #ff1022, -76px 76px #ff1022, -77px 77px #ff1022, -78px 78px #ff1022, -79px 79px #ff1022, -80px 80px #ff1022, -81px 81px #ff1022, -82px 82px #ff1022, -83px 83px #ff1022, -84px 84px #ff1022, -85px 85px #ff1022"
    },
    "button-longshadow-leftbutton-caution:active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-leftbutton-cautionactive": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-leftbutton-cautionis-active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-leftbutton-royal": {
        "textShadow": "0px 0px #5246e2, -1px 1px #5246e2, -2px 2px #5246e2, -3px 3px #5246e2, -4px 4px #5246e2, -5px 5px #5246e2, -6px 6px #5246e2, -7px 7px #5246e2, -8px 8px #5246e2, -9px 9px #5246e2, -10px 10px #5246e2, -11px 11px #5246e2, -12px 12px #5246e2, -13px 13px #5246e2, -14px 14px #5246e2, -15px 15px #5246e2, -16px 16px #5246e2, -17px 17px #5246e2, -18px 18px #5246e2, -19px 19px #5246e2, -20px 20px #5246e2, -21px 21px #5246e2, -22px 22px #5246e2, -23px 23px #5246e2, -24px 24px #5246e2, -25px 25px #5246e2, -26px 26px #5246e2, -27px 27px #5246e2, -28px 28px #5246e2, -29px 29px #5246e2, -30px 30px #5246e2, -31px 31px #5246e2, -32px 32px #5246e2, -33px 33px #5246e2, -34px 34px #5246e2, -35px 35px #5246e2, -36px 36px #5246e2, -37px 37px #5246e2, -38px 38px #5246e2, -39px 39px #5246e2, -40px 40px #5246e2, -41px 41px #5246e2, -42px 42px #5246e2, -43px 43px #5246e2, -44px 44px #5246e2, -45px 45px #5246e2, -46px 46px #5246e2, -47px 47px #5246e2, -48px 48px #5246e2, -49px 49px #5246e2, -50px 50px #5246e2, -51px 51px #5246e2, -52px 52px #5246e2, -53px 53px #5246e2, -54px 54px #5246e2, -55px 55px #5246e2, -56px 56px #5246e2, -57px 57px #5246e2, -58px 58px #5246e2, -59px 59px #5246e2, -60px 60px #5246e2, -61px 61px #5246e2, -62px 62px #5246e2, -63px 63px #5246e2, -64px 64px #5246e2, -65px 65px #5246e2, -66px 66px #5246e2, -67px 67px #5246e2, -68px 68px #5246e2, -69px 69px #5246e2, -70px 70px #5246e2, -71px 71px #5246e2, -72px 72px #5246e2, -73px 73px #5246e2, -74px 74px #5246e2, -75px 75px #5246e2, -76px 76px #5246e2, -77px 77px #5246e2, -78px 78px #5246e2, -79px 79px #5246e2, -80px 80px #5246e2, -81px 81px #5246e2, -82px 82px #5246e2, -83px 83px #5246e2, -84px 84px #5246e2, -85px 85px #5246e2"
    },
    "button-longshadow-leftbutton-royal:active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-leftbutton-royalactive": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-longshadow-leftbutton-royalis-active": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.4)"
    },
    "button-giant": {
        "fontSize": 28,
        "height": 70,
        "lineHeight": 70,
        "paddingTop": 0,
        "paddingRight": 70,
        "paddingBottom": 0,
        "paddingLeft": 70
    },
    "button-jumbo": {
        "fontSize": 24,
        "height": 60,
        "lineHeight": 60,
        "paddingTop": 0,
        "paddingRight": 60,
        "paddingBottom": 0,
        "paddingLeft": 60
    },
    "button-large": {
        "fontSize": 20,
        "height": 50,
        "lineHeight": 50,
        "paddingTop": 0,
        "paddingRight": 50,
        "paddingBottom": 0,
        "paddingLeft": 50
    },
    "button-normal": {
        "fontSize": 16,
        "height": 40,
        "lineHeight": 40,
        "paddingTop": 0,
        "paddingRight": 40,
        "paddingBottom": 0,
        "paddingLeft": 40
    },
    "button-small": {
        "fontSize": 12,
        "height": 30,
        "lineHeight": 30,
        "paddingTop": 0,
        "paddingRight": 30,
        "paddingBottom": 0,
        "paddingLeft": 30
    },
    "button-tiny": {
        "fontSize": 9.6,
        "height": 24,
        "lineHeight": 24,
        "paddingTop": 0,
        "paddingRight": 24,
        "paddingBottom": 0,
        "paddingLeft": 24
    }
});