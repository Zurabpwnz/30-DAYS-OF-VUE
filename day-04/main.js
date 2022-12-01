new Vue({
	el: '#app',
	data: {
		greeting: 'Hello World!',
		user: 'Hassan Djirdeh',
		city: 'Toronto',
		cityImage: 'https://bit.ly/2SKJPqJ'
	},
	methods: {
		changeGreeting() {
			this.greeting = this.greeting === 'Hello World!' ?
				'What is up!' :
				'Hello World!';
		},
		alertMessageGreeting() {
			this.alertMessage = 'You typed something!';
		},
		alertEnterGreeting() {
			this.alertMessage = 'You typed and pressed Enter!';
		},
		changeCity() {
			if(this.city === 'Toronto') {
				this.city = 'Lagos';
				this.cityImage = 'https://bit.ly/2Rd4gQ3';
			} else {
				this.city = 'Toronto';
				this.cityImage = 'https://bit.ly/2SKJPqJ';
			}
		}
	}
});