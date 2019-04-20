 // Grab some JSON goodness from Reddit.
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://github.com/mdn/fetch-examples/


// Set the Request API URL.
var apiUrl = 'https://www.reddit.com/r/Vaporwaveaesthetics/top/.json?=?sort=top&t=week';

// Build a card with a new Vue instance.
var card = new Vue({

	el: '#content',

	data: {
		posts: null
	},

	created: function created() {
		this.getRedditPosts();
	},

	mounted: function mounted() {
	},


	methods: {

		getImage: function getImage() {
			var items = this.getRedditPosts();
		},

		getRedditPosts: function getRedditPosts() {var _this = this;

			// Go fetch! 🚚
			fetch(apiUrl)

			.then(function (response) {return response.json();})

			.then(function (json) {

				_this.posts = json.data.children;
			})

			.catch(function (error) {
				console.error(error);
			});
		} } });
