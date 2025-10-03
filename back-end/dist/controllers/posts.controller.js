import { db } from "../global.js";
export const getPosts = async (req, res) => {
    try {
        const { search } = req.query;
        const posts = await db.posts.findMany({
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
export const createPost = async (req, res) => {
    try {
        const { userName, absent, authorClass, phoneNumber, title, description } = req.body;
        const newPost = await db.posts.create({
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
            message: "Internal server error",
        });
    }
};
//# sourceMappingURL=posts.controller.js.map