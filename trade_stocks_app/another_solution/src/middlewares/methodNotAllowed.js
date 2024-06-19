"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methodNotAllowed = void 0;
var allowedMethods = ['GET', 'POST'];
function methodNotAllowed(req, res, next) {
    if (!allowedMethods.includes(req.method.toLowerCase())) {
        res.status(405).send('Not allowed');
    }
    else {
        next();
    }
}
exports.methodNotAllowed = methodNotAllowed;
