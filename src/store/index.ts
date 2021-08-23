import { createStore } from 'vuex'
import { testPosts, testData } from '../testData'
import type { GlobalDataProps } from '../typings'
const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false },
  },
  mutations: {
    login(state) {
      state.user = {
        ...state.user,
        isLogin: true,
        name: 'ollie',
      }
    },
  },
  getters: {
    biggColumnLen(state) {
      return state.columns.filter((c) => c.id > 2).length
    },
    getColumnById: (state) => (id: number) => {
      return state.columns.find((c) => c.id === id)
    },
    getPostsByCid: (state) => (id: number) => {
      return state.posts.filter((post) => post.columnId === id)
    },
  },
})
export default store
