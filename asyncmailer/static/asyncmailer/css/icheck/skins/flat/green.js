import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "icheckbox_flat-green": {
        "display": "inline-block",
        "Display": "inline",
        "verticalAlign": "middle",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 20,
        "height": 20,
        "background": "url(green.png) no-repeat",
        "border": "none",
        "cursor": "pointer",
        "backgroundPosition": "0 0"
    },
    "iradio_flat-green": {
        "display": "inline-block",
        "Display": "inline",
        "verticalAlign": "middle",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 20,
        "height": 20,
        "background": "url(green.png) no-repeat",
        "border": "none",
        "cursor": "pointer",
        "backgroundPosition": "-88px 0"
    },
    "icheckbox_flat-greenchecked": {
        "backgroundPosition": "-22px 0"
    },
    "icheckbox_flat-greendisabled": {
        "backgroundPosition": "-44px 0",
        "cursor": "default"
    },
    "icheckbox_flat-greencheckeddisabled": {
        "backgroundPosition": "-66px 0"
    },
    "iradio_flat-greenchecked": {
        "backgroundPosition": "-110px 0"
    },
    "iradio_flat-greendisabled": {
        "backgroundPosition": "-132px 0",
        "cursor": "default"
    },
    "iradio_flat-greencheckeddisabled": {
        "backgroundPosition": "-154px 0"
    }
});