import { createStore } from 'vuex'
import { testPosts, testData } from '../testData'
import type { GlobalDataProps } from '../typings'
const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false },
  },
})
export default store
