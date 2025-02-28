import axios from 'axios';

function create(baseURL, options) {
  const instance = axios.create({
    baseURL,
    ...options
  })

  return instance;
}

export const posts = create(`${import.meta.env.VITE_APP_API_URL}/posts`);
// development 환경에서는 5000번 포트로 실행
// production 환경에서는 5001번 포트로 실행
// import.meta.env.VITE_APP_API_URL 참고하여 환경에 따라 포트 번호 변경
