import { db } from '../db/index.js';

export class ArticleController {
    async create(req, res) {
        try {
            const { user_id, title, content } = req.body;
            const user = await db.query('SELECT * FROM users WHERE id = $1', [user_id]);

            if (!user?.rows[0]) {
                return res.status(409).json({
                    error: `User not found by id: ${user_id}`
                });
            }

            const result = await db.query('INSERT INTO articles (user_id, title, content) VALUES ($1, $2, $3) RETURNING *', [user_id, title, content]);

            return res.status(201).json({
                statusCode: 201,
                message: error.message,
                data: result?.rows[0]
            });
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }
}
