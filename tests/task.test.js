const request = require('supertest');
const { PrismaClient } = require('@prisma/client');
const app = require('../index'); 
const prisma = new PrismaClient();

describe('Tasks API', () => {
    let taskId;
  
    it('should fetch all tasks', async () => {
      const response = await request(app).get('/tasks');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  
    it('should create a new task', async () => {
      const newTask = { title: 'New Task', color: 'green' };
      const response = await request(app).post('/tasks').send(newTask);
      taskId = response.body.id; 
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('title', newTask.title);
    });
  
    it('should fetch a task by ID', async () => {
      const response = await request(app).get(`/tasks/${taskId}`);
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id', taskId);
    });
  
    it('should return 404 if task is not found', async () => {
      const response = await request(app).get('/tasks/9999');
      expect(response.status).toBe(404);
    });
  
    it('should update a task', async () => {
      const updatedTask = { title: 'Updated Task', color: 'red', completed: true };
      const response = await request(app).put(`/tasks/${taskId}`).send(updatedTask);
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('title', updatedTask.title);
    });
  
    it('should delete a task', async () => {
      const response = await request(app).delete(`/tasks/${taskId}`);
      expect(response.status).toBe(204);
    });
  });