import * as postsAPI from "../api/posts";
import {
  handleAsyncActions,
  handleAsyncActionsById,
  reducerUtils,
  createPromiseSagaById,
  createPromiseSaga,
} from "../lib/asynUtils";
import { takeEvery } from "redux-saga/effects";

// 여러개를 불러오는 action
const GET_POSTS = "GET_POSTS"; // 특정 요청이 시작되었다고 알리는 action
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"; // GET_POSTS action이 발생하고 요청이 끝나고 나서 action이 dispatch되고나면 로딩이 끝난다 = 요청의 성공. 성공 데이터를 담는다
const GET_POSTS_ERROR = "GET_POSTS_ERROR"; // 오류가 났고, 로딩이 끝났고, 에러에 대한 상태를 담겠다 는 action

// 단일 post 를 불러오는 action
const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

const CLEAR_POST = "CLEAR_POST";

/*
    asyncUtils 사용하기전

    export const getPosts = () => async (dispatch) => {
    // 요청이 시작됨
    dispatch({ type: GET_POSTS });

    //API 호출
    try {
        const posts = await postAPI.getPosts();

        //성공했을 때
        dispatch({
        type: GET_POSTS_SUCCESS,
        posts,
        });
    } catch (e) {
        // 실패했을 때
        dispatch({ type: GET_POSTS_ERROR, error: e });
    }
    };

    export const getPost = () => async (dispatch) => {
    // 요청이 시작됨
    dispatch({ type: GET_POST });

    //API 호출
    try {
        const post = await postAPI.getPostById();

        //성공했을 때
        dispatch({
        type: GET_POST_SUCCESS,
        post,
        });
    } catch (e) {
        // 실패했을 때
        dispatch({ type: GET_POST_ERROR, error: e });
    }
    };
*/

export const getPosts = () => ({ type: GET_POSTS });
export const getPost = (id) => ({ type: GET_POST, payload: id, meta: id });

const getPostsSaga = createPromiseSaga(GET_POSTS, postsAPI.getPosts);
const getPostSaga = createPromiseSagaById(GET_POST, postsAPI.getPostById);

export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
}

// asyncUtils 사용한 후
export const goToHome = () => (dispatch, getState, { history }) => {
  history.push("/");
};

export const clearPost = () => ({ type: CLEAR_POST });

const initialState = {
  posts: reducerUtils.initial(),
  post: {},
};

const getPostsReducer = handleAsyncActions(GET_POSTS, "posts", true);
const getPostReducer = handleAsyncActionsById(GET_POST, "post", true);

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return getPostsReducer(state, action);

    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return getPostReducer(state, action);

    case CLEAR_POST:
      return {
        ...state,
        post: reducerUtils.initial(),
      };
    default:
      return state;
  }
}

/*
    asyncUtils 사용하기 전

    export default function posts(state = initialState, action) {
        switch (action.type) {
            case GET_POSTS:
            return {
                ...state,
                posts: reducerUtils.loading(),
            };
            case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: reducerUtils.success(action.payload),
            };
            case GET_POSTS_ERROR:
            return {
                ...state,
                posts: reducerUtils.error(action.payload),
            };
            case GET_POST:
            return {
                ...state,
                post: reducerUtils.loading(),
            };
            case GET_POST_SUCCESS:
            return {
                ...state,
                post: reducerUtils.success(action.payload),
            };
            case GET_POST_ERROR:
            return {
                ...state,
                post: reducerUtils.error(action.payload),
            };
            default:
            return state;
        }
    }
*/
