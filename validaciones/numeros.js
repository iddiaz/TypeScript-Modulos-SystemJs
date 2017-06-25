System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function restar(num1, num2) {
        return num1 - num2;
    }
    exports_1("default", restar);
    var PI;
    return {
        setters: [],
        execute: function () {
            exports_1("PI", PI = 3.1416);
        }
    };
});
