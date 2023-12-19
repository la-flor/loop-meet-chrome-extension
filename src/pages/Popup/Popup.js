import React, { useEffect, useState } from 'react';
import logo from '../../assets/img/logo.svg';
// import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
var Popup = function () {
    var _a = useState(''), lat = _a[0], setLat = _a[1];
    var _b = useState(''), long = _b[0], setLong = _b[1];
    var _c = useState(''), error = _c[0], setError = _c[1];
    useEffect(function () {
        var generateDMS = function (coords, isLat) {
            if (isLat === void 0) { isLat = false; }
            var absCoords = Math.abs(coords);
            var deg = Math.floor(absCoords);
            var min = Math.floor((absCoords - deg) * 60);
            var sec = ((absCoords - deg - min / 60) * 3600).toFixed(1);
            var direction = coords >= 0 ? (isLat ? 'N' : 'E') : isLat ? 'S' : 'W';
            return "".concat(deg, "\u00B0").concat(min, "'").concat(sec, "\"").concat(direction);
        };
        navigator.geolocation.getCurrentPosition(function (loc) {
            var coords = loc.coords;
            var latitude = coords.latitude, longitude = coords.longitude;
            var lat = generateDMS(latitude, true);
            var long = generateDMS(longitude);
            setLat(lat);
            setLong(long);
        }, function (err) {
            setError('error (check console)');
            console.error(err);
        });
    }, []);
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("img", { src: logo, className: "App-logo", alt: "logo" }),
            React.createElement("p", null,
                "Edit ",
                React.createElement("code", null, "src/pages/Popup/Popup.jsx"),
                " and save to reload."),
            React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "React"),
            React.createElement("div", null,
                "Lat: ", lat !== null && lat !== void 0 ? lat : 'Unavailable'),
            React.createElement("div", null,
                "Long: ", long !== null && long !== void 0 ? long : 'Unavailable'),
            React.createElement("div", null,
                "Error: ",
                error))));
};
export default Popup;
