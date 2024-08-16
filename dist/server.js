"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(routes_1.router);
app.use('/files', express_1.default.static(path_1.default.resolve(__dirname, '..', 'tmp')));
app.use((e, req, res, next) => {
    if (e instanceof Error) {
        return res.status(400).json({
            error: e.message
        });
    }
    return res.status(500).json({
        status: 'error',
        message: 'internal server error'
    });
});
const port = process.env.PORT || 3111;
app.listen(port, () => console.log('Server is running on port 3111'));
