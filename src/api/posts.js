import axios from 'axios';

const posts = [
  {
    id: 1,
    title: '제목',
    content: '내용',
    createdAt: '2025-02-26',
  },
  {
    id: 2,
    title: '제목2',
    content: '내용2',
    createdAt: '2025-02-26',
  },
  {
    id: 3,
    title: '제목3',
    content: '내용3',
    createdAt: '2025-02-26',
  },
  {
    id: 4,
    title: '제목4',
    content: '내용4',
    createdAt: '2025-02-26',
  },
  {
    id: 5,
    title: '제목5',
    content: '내용5',
    createdAt: '2025-02-26',
  },
  {
    id: 6,
    title: '제목6',
    content: '내용6',
    createdAt: '2025-02-26',
  },
];

// 정렬을 위한 파라미터 전달
export function getPosts(params) {
  return axios.get('http://localhost:5000/posts', {params});
}


export function getPostById(id) {
  const numberId = parseInt(id);
  return axios.get(`http://localhost:5000/posts/${numberId}`);
}

export function createPost(data) {
  return axios.post('http://localhost:5000/posts', data);
}

export function updatePost(id, data) {
  return axios.put(`http://localhost:5000/posts/${id}`, data);
}

export function deletePost(id) {
  return axios.delete(`http://localhost:5000/posts/${id}`);
}