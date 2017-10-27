

var mainVm = new Vue({

	el: '#app',
	data: {
		dots: [ //pushedDot
		],
		



	},
	methods:{
		makeDot: function(event){
			
			// console.log(event.offsetX, event.offsetY)
			this.dots.push({
				pageX: event.offsetX+7 + 'px',
				pageY: event.offsetY-8 + 'px',
				message: '',
				isBeingEdited: true,
			})
			
		
		},

		submit: function(dot){
			console.log(dot)
			dot.isBeingEdited = false


		},

			
		
		removeDot: function(dot, index){
			
			this.dots.splice(index, 1)
			// for (var i = 0; i < this.dots.length; i++ ){
			// 	if(dot.pageX === this.dots[i].pageX && dot.pageY === this.dots[i].pageY){
					//this.dots.splice([i], 1)
			// 		console.log('removed!')
			// 	}

			// }

		},

		backToInput: function(dot){
			console.log(dot)
			dot.isBeingEdited = true
			
		},

	}

})