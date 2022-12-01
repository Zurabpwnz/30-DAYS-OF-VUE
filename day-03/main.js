new Vue( {
	el: '#app',
	data: {
		message: 'Hello World!',
		user: 'Hassan Djirdeh',
		city: 'Toronto',
	},
	methods: {
		changeGreeting() {
			this.message = this.message === 'Hello World!' ?
				'What is up!' :
				'Hello World!';
		}
	}
} );