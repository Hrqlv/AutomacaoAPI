import { test, expect } from '@playwright/test';

const BASE_URL = 'https://reqres.in'
/*
const username = 'NextQA@gmail.com';
const password = 'riq123';
const ID = '4';
const name = 'Henrique';
const work = 'Ti'
*/

let apiContext; 

test('Cadastre um novo usuário', async ({ request }) => {
  const cadastrarIssue = await request.post(`${BASE_URL}/api/users`, {
    data:{
      "name": "morpheus",
      "job": "leader"
  }
});
  expect(cadastrarIssue.ok()).toBeTruthy();
});

test('Busque pelo ID do usuário cadastrado', async ({ request }) => {
  const buscarIDIssue = await request.get(`${BASE_URL}/api/users`, {
    data: {
      ID: 'id'
    }
  });
  expect(buscarIDIssue.ok()).toBeTruthy();
});


test('Atualize os dados do usuário', async ({ request }) => {
  const AtualizarOsDadosIssue = await request.put(`${BASE_URL}/api/users/2/issues`, {
    data: {
      name: 'name',
      work: 'job'
    }
  });
  expect(AtualizarOsDadosIssue.ok()).toBeTruthy();
});


test('Delete o usuário', async ({ request }) => {
  const DeletarIssue = await request.delete(`${BASE_URL}/api/users/2/issues`, {
    data: {
      username: 'user',
      password: 'password'
    }
  });
  expect(DeletarIssue.ok()).toBeTruthy();
});


test('Busque pelo ID do usuário que foi deletado', async ({ request }) => {
  const BuscarIDdeletadoIssue = await request.get(`${BASE_URL}/api/users/2`, {
    data: {

    }
  });
  expect(BuscarIDdeletadoIssue.ok()).toBeTruthy();
});
