import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [{
                id: 1,
                title: "First post",
                previewText: "this is our first post",
                thumbnail: "https://images.tech.co/wp-content/uploads/2015/08/techco-web.png"
              },
              {
                id: 2,
                title: "Second post",
                previewText: "this is our second post",
                thumbnail: "https://images.tech.co/wp-content/uploads/2015/08/techco-web.png"
              },
              {
                id: 3,
                title: "First third",
                previewText: "this is our third post",
                thumbnail: "https://images.tech.co/wp-content/uploads/2015/08/techco-web.png"
              }
            ])
            resolve();
          }, 1500);
        });
      },
      setPosts(context, posts) {
        context.commit('setPosts', posts)
      }
    },
    getters: {
      posts(state) {
        return state.loadedPosts
      }
    }
  })
};

export default createStore;
