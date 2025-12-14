import { test, expect, request } from '@playwright/test';

test.describe('DummyJSON API (Playwright)', () => {

  test('GET /products should return array', async () => {
    const req = await request.newContext();

    const r = await req.get('https://dummyjson.com/products');
    expect(r.status()).toBe(200);

    const body = await r.json();
    expect(body).toHaveProperty('products');
    expect(Array.isArray(body.products)).toBeTruthy();
    expect(body.products.length).toBeGreaterThan(0);

    await req.dispose();
  });

  test('GET /products/1 has id 1', async () => {
    const req = await request.newContext();

    const r = await req.get('https://dummyjson.com/products/1');
    expect(r.status()).toBe(200);

    const body = await r.json();
    expect(body.id).toBe(1);
    expect(body).toHaveProperty('title');

    await req.dispose();
  });

  test('GET /products/category/smartphones returns only smartphones', async () => {
    const req = await request.newContext();

    const r = await req.get('https://dummyjson.com/products/category/smartphones');
    expect(r.status()).toBe(200);

    const body = await r.json();
    expect(Array.isArray(body.products)).toBeTruthy();

    body.products.forEach((p: any) => {
      expect(p.category).toBe('smartphones');
    });

    await req.dispose();
  });

  test('GET /users/1 has id and email', async () => {
    const req = await request.newContext();

    const r = await req.get('https://dummyjson.com/users/1');
    expect(r.status()).toBe(200);

    const body = await r.json();
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('email');

    await req.dispose();
  });

});