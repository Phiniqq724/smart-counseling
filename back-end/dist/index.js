"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const global_js_1 = require("./global.js");
const posts_controller_js_1 = require("./controllers/posts.controller.js");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", posts_controller_js_1.getPosts);
app.post("/", posts_controller_js_1.createPost);
app.listen(global_js_1.PORT, () => {
    console.log(`Server is running on port ${global_js_1.PORT}`);
});
//# sourceMappingURL=index.js.map