// fake code !!!!!!!!!!!


// app.js
const app = new Vue({})
const store = new Vuex.Store({})

const router = new Router({
	routes:[
		{path:'/p1',component:page1},
		{path:'/p2',component:page1},
		{path:'/p3',component:page3}
	]
})

// entry-server.js
export default context = {
	router.push(context.url)

	return Promise.all(router.getMatchedComponents().map(
			component => {
				if(component.fetchServerData) {
					return component.fetchServerData(store)
				}
			}
		))
	.then(function(){
		context.state = store.state
		return app
	})
}



store.replaceState(window.__INITIAL_STATE__)
app.$mount('#app')