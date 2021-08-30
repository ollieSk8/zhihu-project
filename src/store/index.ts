import { createStore } from 'vuex'
import type { GlobalDataProps } from '../typings'
import { instance as axios } from '../apis'
const store = createStore<GlobalDataProps>({
  state: {
    columns: [],
    posts: [],
    user: { isLogin: true, name: 'ollie', columnId: 1 },
  },
  mutations: {
    login(state) {
      state.user = {
        ...state.user,
        isLogin: true,
        name: 'ollie',
      }
    },
    createPost(state, newPost) {
      state.posts.push(newPost)
    },
    fetchColums(state, rawData) {
      state.columns = rawData.data.list
    },
    fetchColum(state, rawData) {
      state.columns = [rawData.data]
    },
    fetchPosts(state, rawData) {
      state.posts = rawData.data.list
    },
  },
  actions: {
    fetchColums({ commit }) {
      axios.get('/columns?currentPage=1&pageSize=10').then((res) => {
        commit('fetchColums', res.data)
      })
    },
    fetchColum({ commit }, cid) {
      axios.get(`/columns/${cid}`).then((res) => {
        commit('fetchColum', res.data)
      })
    },
    fetchPosts({ commit }, cid) {
      axios.get(`/columns/${cid}/posts?currentPage=1&pageSize=10`).then((res) => {
        commit('fetchPosts', res.data)
      })
    },
  },
  getters: {
    getColumnById: (state) => (id: string) => {
      return state.columns.find((c) => c?._id === id)
    },
    getPostsByCid: (state) => (id: string) => {
      return state.posts.filter((post) => post?.column === id)
    },
  },
})
export default store
