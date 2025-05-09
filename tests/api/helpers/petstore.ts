import { APIRequestContext, expect } from '@playwright/test';

export async function createPet(request: APIRequestContext, name: string, status: string) {
  const res = await request.post('/v2/pet', {
    data: {
      name,
      status,
      photoUrls: [],
    },
  });

  console.log(`Pet Creation Status: ${res.status()}`);
  const responseBody = await res.text();
  console.log(`Response Body: ${responseBody}`);

  expect(res.ok()).toBeTruthy();
  return res.json();
}

export async function getPetByStatus(request: APIRequestContext, status: string) {
  const res = await request.get(`/v2/pet/findByStatus?status=${status}`);

  console.log(`Get Pet By Status Response Status: ${res.status()}`);
  const responseBody = await res.text();
  console.log(`Response Body: ${responseBody}`);

  expect(res.ok()).toBeTruthy();
  return res.json();
}

export async function getPetById(request: APIRequestContext, petId: number) {
  const res = await request.get(`/pet/${petId}`);
  expect(res.status()).toBe(200);
  return res.json();
}

export async function createOrder(request: APIRequestContext, petId: number) {
  const res = await request.post('/v2/store/order', {
    data: {
      petId,
      quantity: 1,
      shipDate: new Date().toISOString(),
      status: 'placed',
      complete: true,
    },
  });

  console.log(`Create Order Status: ${res.status()}`);
  const responseBody = await res.text();
  console.log(`Response Body: ${responseBody}`);

  expect(res.ok()).toBeTruthy();
  return res.json();
}
