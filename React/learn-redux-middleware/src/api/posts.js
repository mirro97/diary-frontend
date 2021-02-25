// const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// // { id, title, body}
// const posts = [
//   {
//     id: 1,
//     title: "리덕스 미들웨어를 배우는중",
//     body: "너무 어렵다...",
//   },
//   {
//     id: 2,
//     title: "Redux-thunk 배우는중",
//     body: "redux-thunk를 사용해서 비동기 작업 처리해보기",
//   },
//   {
//     id: 3,
//     title: "Redux-sage를 배우는중",
//     body: "redux-sage도 곧 배울 예정!",
//   },
// ];

// // 가짜 api 함수 2가지 만들기
// export const getPosts = async () => {
//   await sleep(500);
//   return posts; // posts 배열
// };

// export const getPostById = async (id) => {
//   await sleep(500);
//   return posts.find((post) => post.id === id); // id 로 찾아서 반환
// };
import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get("http://localhost:4000/posts");
  return response.data;
};

export const getPostById = async (id) => {
  const response = await axios.get(`http://localhost:4000/posts/${id}`);
  return response.data;
};
