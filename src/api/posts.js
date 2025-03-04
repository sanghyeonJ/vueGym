import { posts } from './index';


// 정렬을 위한 파라미터 전달
export function getPosts(params) {
  return posts.get('/', {params});
}

export function getPostById(id) {
  const numberId = parseInt(id);
  return posts.get(`/${numberId}`);
}

export function createPost(data) {
  return posts.post('/', data);
}

// export function updatePost(id, data) {
//   return posts.put(`/${id}`, data);
// }
export function updatePost(id, data) {
  return posts.patch(`/${id}`, data);
}

export function deletePost(id) {
  return posts.delete(`/${id}`);
}