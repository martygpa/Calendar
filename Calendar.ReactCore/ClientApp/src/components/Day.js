"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Calendar.prototype.render = function () {
        console.log("load");
        var today = new Date();
        var daysInMonth = 30;
        var daysInWeek = 7;
        return (React.createElement("div", null,
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "card", style: { width: "10%", height: "5%" } },
                    React.createElement("div", { className: "card-body" },
                        React.createElement("h5", { className: "card-title" }, "Card title"),
                        React.createElement("a", { href: "#", className: "btn btn-primary" }, "Go somewhere"))),
                React.createElement("div", { className: "card", style: { width: "10%", height: "5%" } },
                    React.createElement("div", { className: "card-body" },
                        React.createElement("h5", { className: "card-title" }, "Card title"),
                        React.createElement("p", { className: "card-text" }, "Some  text t."),
                        React.createElement("a", { href: "#", className: "btn btn-primary" }, "Go somewhere"))),
                React.createElement("div", { className: "card", style: { width: "10%", height: "5%" } },
                    React.createElement("div", { className: "card-body" },
                        React.createElement("h5", { className: "card-title" }, "Card title"),
                        React.createElement("p", { className: "card-text" }, "Some quick example text to build on the card title and make up the bulk of the card's content."),
                        React.createElement("a", { href: "#", className: "btn btn-primary" }, "Go somewhere"))),
                React.createElement("div", { className: "card", style: { width: "10%", height: "5%" } },
                    React.createElement("div", { className: "card-body" },
                        React.createElement("h5", { className: "card-title" }, "Card title"),
                        React.createElement("p", { className: "card-text" }, "Some quick example text to build on the card title and make up the bulk of the card's content."),
                        React.createElement("a", { href: "#", className: "btn btn-primary" }, "Go somewhere"))),
                "                    ",
                React.createElement("div", { className: "card", style: { width: "10%", height: "5%" } },
                    React.createElement("div", { className: "card-body" },
                        React.createElement("h5", { className: "card-title" }, "Card title"),
                        React.createElement("p", { className: "card-text" }, "Some quick example text to build on the card title and make up the bulk of the card's content."),
                        React.createElement("a", { href: "#", className: "btn btn-primary" }, "Go somewhere"))),
                "                    ",
                React.createElement("div", { className: "card", style: { width: "10%", height: "5%" } },
                    React.createElement("div", { className: "card-body" },
                        React.createElement("h5", { className: "card-title" }, "Card title"),
                        React.createElement("p", { className: "card-text" }, "Some quick example text to build on the card title and make up the bulk of the card's content."),
                        React.createElement("a", { href: "#", className: "btn btn-primary" }, "Go somewhere"))))));
    };
    return Calendar;
}(React.Component));
;
//# sourceMappingURL=Day.js.map