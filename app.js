System.register(["./validaciones/textos", "./validaciones/numeros"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var textos, numeros_1;
    return {
        setters: [
            function (textos_1) {
                textos = textos_1;
            },
            function (numeros_1_1) {
                numeros_1 = numeros_1_1;
            }
        ],
        execute: function () {
            console.log('cargado desde TS');
            // console.log(PI);
            console.log(textos.obtenerError(10));
            console.log('holass');
            console.log(numeros_1.default(10, 5));
        }
    };
});
