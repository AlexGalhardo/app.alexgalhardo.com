// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';

import app from '../../../app';

describe('TESTING GET PUBLIC GAMES ENDPOINTS...', () => {
    it('should return all games', async () => {
        const response = await request(app).get('/api/public/games');

        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.status).toBe(200);
        expect(response.redirect).toBeFalsy();
        expect(response.type).toBe('application/json');
        expect(response.charset).toBe('utf-8');
        expect(response.ok).toBeTruthy();
    });

    it('should return a random game', async () => {
        const response = await request(app).get('/api/public/games/random');

        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.status).toBe(200);
        expect(response.redirect).toBeFalsy();
        expect(response.type).toBe('application/json');
        expect(response.charset).toBe('utf-8');
        expect(response.ok).toBeTruthy();
    });

    it('should return a game by id', async () => {
        const response = await request(app).get(
            '/api/public/games/198b5133-2fa6-4478-ba9b-7613d6ec556b'
        );

        expect(response.body).toHaveProperty('platforms');
        expect(response.body).toHaveProperty('igdb_link');
        expect(response.body).toHaveProperty('igdb_rating');
        expect(response.body).toHaveProperty('developer');
        expect(response.body).toHaveProperty('id');
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.status).toBe(200);
        expect(response.redirect).toBeFalsy();
        expect(response.type).toBe('application/json');
        expect(response.charset).toBe('utf-8');
        expect(response.ok).toBeTruthy();
    });
});
