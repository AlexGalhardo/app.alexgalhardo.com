// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';

import app from '../../../app';

describe('TESTING GET PUBLIC TV SHOWS ENDPOINTS...', () => {
    it('should return all tvshows', async () => {
        const response = await request(app).get('/api/public/tvshows');

        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.status).toBe(200);
        expect(response.redirect).toBeFalsy();
        expect(response.type).toBe('application/json');
        expect(response.charset).toBe('utf-8');
        expect(response.ok).toBeTruthy();
    });

    it('should return a random tv show', async () => {
        const response = await request(app).get('/api/public/tvshows/random');

        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.status).toBe(200);
        expect(response.redirect).toBeFalsy();
        expect(response.type).toBe('application/json');
        expect(response.charset).toBe('utf-8');
        expect(response.ok).toBeTruthy();
    });

    it('should return a tvshow by id', async () => {
        const response = await request(app).get(
            '/api/public/tvshows/0b0a668c-6ab9-46e9-8f03-ab4d99f05002'
        );

        expect(response.body).toHaveProperty('tmdb_link');
        expect(response.body).toHaveProperty('tmdb_rating');
        expect(response.body).toHaveProperty('duration');
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.status).toBe(200);
        expect(response.redirect).toBeFalsy();
        expect(response.type).toBe('application/json');
        expect(response.charset).toBe('utf-8');
        expect(response.ok).toBeTruthy();
    });
});
