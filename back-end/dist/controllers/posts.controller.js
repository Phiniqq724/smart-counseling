"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = exports.getPosts = void 0;
const global_js_1 = require("../global.js");
const getPosts = async (req, res) => {
    try {
        const { search } = req.query;
        const posts = await global_js_1.db.posts.findMany({
            where: {
                title: {
                    contains: search,
                    mode: "insensitive",
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        return res.status(200).json({
            status: true,
            data: posts,
            message: "Posts fetched successfully",
        });
    }
    catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal server error",
        });
    }
};
exports.getPosts = getPosts;
const createPost = async (req, res) => {
    try {
        const { userName, absent, authorClass, phoneNumber, title, description } = req.body;
        const newPost = await global_js_1.db.posts.create({
            data: {
                userName,
                absent,
                authorClass,
                phoneNumber,
                title,
                description,
            },
        });
        return res.status(200).json({
            status: true,
            data: newPost,
            message: "Post created successfully",
        });
    }
    catch (error) {
        return res.status(500).json({
            status: false,
            message: `Internal server error ${error}`,
        });
    }
};
exports.createPost = createPost;
//# sourceMappingURL=posts.controller.js.map