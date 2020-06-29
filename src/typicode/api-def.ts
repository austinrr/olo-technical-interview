import * as rm from 'typed-rest-client/RestClient';
import * as rs from './resource';

let baseUrl = 'https://jsonplaceholder.typicode.com';
let restc = new rm.RestClient('jsonplaceholder.typicode-model')

export async function getPost(postId: number) {
    return await restc.get<rs.post>(
        `${baseUrl}/posts/${postId}`
    );
}

export async function listPosts() {
    return await restc.get<rs.post[]>(
        `${baseUrl}/posts`
    );
}

export async function createPost(newPost: rs.post | any) {
    return await restc.create<rs.post>(
        `${baseUrl}/posts`,
        newPost
    );
}