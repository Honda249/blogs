import storeData from '/storage/article.json'


export const state = () => ({
  articles: storeData.articles
})


export const getters = {
    getArticles(state) {
        return state.articles 
    },
    findArticles:(state) => (article_id) => {
        return state.articles.find(article => article.id == article_id);
    }
}


export const actions = {
    addArticle({commit}, blog){
        commit('setArticle', blog)
    }
}


export const mutations = {
  setArticle(state, newValue){
    state.articles.push(newValue)
  }
}