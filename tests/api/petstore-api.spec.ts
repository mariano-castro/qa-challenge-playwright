import { test, expect, request } from '@playwright/test';
import { createPet, getPetByStatus, getPetById, createOrder } from './helpers/petstore';

test('Create pets and get details', async ({ request }) => {
  const pets = [];

  for (let i = 0; i < 5; i++) {
    const pet = await createPet(request, `Pet-Available-${i}`, 'available');
    pets.push(pet);
  }

  for (let i = 0; i < 4; i++) {
    const pet = await createPet(request, `Pet-Pending-${i}`, 'pending');
    pets.push(pet);
  }

  const soldPet = await createPet(request, 'Pet-Sold', 'sold');
  pets.push(soldPet);

  const fetchedSold = await getPetById(request, soldPet.id);
  expect(fetchedSold.status).toBe('sold');
});

test('List available items and create orders', async ({ request }) => {
  const availablePets = await getPetByStatus(request, 'available');
  const selectedPets = availablePets.slice(0, 5);

  for (const pet of selectedPets) {
    const order = await createOrder(request, pet.id);
    expect(order.petId).toBe(pet.id);
  }
});
