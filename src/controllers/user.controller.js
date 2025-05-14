import { db } from '../db/index.js';

export class UserController {
    async register(req, res) {
        try {
            const { name, email } = req.body;
            const existEmail = await db.query('SELECT email FROM users WHERE email = $1', [email]);

            if (existEmail?.rows[0]) {
                return res.status(409).json({
                    error: 'Email already exist'
                });
            }

            const result = await db.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
            const {
                device_type,
                os,
                client,
                raw_user_agent
            } = req.deviceInfo;

            await db.query('INSERT INTO device_logs (user_id, device_type, os, client, raw_user_agent) VALUES($1, $2, $3, $4, $5)', [result.rows[0].id, device_type, os, client, raw_user_agent])

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

    async getArticlesByUserId(req, res) {
        try {
            const { user_id } = req.params;
            const user = await db.query('SELECT * FROM users WHERE id = $1', [user_id]);

            if (!user?.rows[0]) {
                return res.status(409).json({
                    error: `User not found by id: ${user_id}`
                });
            }

            const result = await db.query('SELECT * FROM articles WHERE user_id = $1', [user_id]);

            return res.status(201).json({
                statusCode: 201,
                message: error.message,
                data: result?.rows
            });
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }

    async getDeviceLogsByUserId(req, res) {
        try {
            const { user_id } = req.params;
            const user = await db.query('SELECT * FROM users WHERE id = $1', [user_id]);

            if (!user?.rows[0]) {
                return res.status(409).json({
                    error: `User not found by id: ${user_id}`
                });
            }

            const result = await db.query('SELECT * FROM device_logs WHERE user_id = $1', [user_id]);

            return res.status(201).json({
                statusCode: 201,
                message: error.message,
                data: result?.rows
            });
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }
}
