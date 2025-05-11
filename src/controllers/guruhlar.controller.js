import { db } from '../db/index.js';

export class GuruhController {
    async createGuruh(req, res) {
        try {
            const { name } = req.body;
            const result = await db.query('INSERT INTO guruhlar (name) VALUES ($1) RETURNING *', [name]);

            return res.status(201).json({
                statusCode: 201,
                message: 'success',
                data: result.rows[0]
            });
        } catch (error) {
            return res.status(500).json({
                error: error.message,
                stack: error.stack
            });
        }
    }
}