"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
exports.app = app;
/**
 * Configuration for cross origin requests
 */
const options = {
    origin: process.env.CORS_ORIGIN,
    credentials: true,
};
app.use((0, cors_1.default)(options));
app.use(express_1.default.json({ limit: "16kb" }));
app.use(express_1.default.urlencoded({ extended: true, limit: "16kb" }));
app.use(express_1.default.static("public"));
app.use((0, cookie_parser_1.default)());
// Routes imported 
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const record_routes_1 = __importDefault(require("./routes/record.routes"));
// Define routes
app.use("/api/v1/user", user_routes_1.default);
app.use("/api/v1/record", record_routes_1.default);
//# sourceMappingURL=app.js.map