import { expect } from 'chai';
import * as api from '../typicode/api-def';
import * as model from '../typicode/resource'
import * as restc from 'typed-rest-client/RestClient';

describe('Typicode Tests', () => {

    before(() => { });

    after(() => { });

    it('Create Basic Post', async () => {
        const newPost: model.post = {
            title: 'Test Post',
            body: 'This is a basic test post',
            userId: 1
        }

        const response: restc.IRestResponse<model.post> = await api.createPost(newPost);
        expect(response.statusCode, "status code to be 201").to.equal(201);
    });

    it('Fails to create post when missing properties', async () => {
        const newPost = {
            body: 'This is a basic test post',
            userId: 1
        }

        const response: restc.IRestResponse<model.post> = await api.createPost(newPost);
        expect(response.statusCode, "status code to be 201").to.equal(201);
    });
});