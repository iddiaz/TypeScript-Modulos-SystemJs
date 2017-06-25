System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function obtenerError(numError) {
        if (numError > MENSAJES.length) {
            return 'El codigo de error no existe';
        }
        return MENSAJES[numError];
    }
    exports_1("obtenerError", obtenerError);
    var MENSAJES;
    return {
        setters: [],
        execute: function () {
            MENSAJES = [
                'EL texto es muy corto',
                'El texto es muy largo'
            ];
        }
    };
});
