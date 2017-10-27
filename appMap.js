var mainVm = new Vue({

	el: '#app',
	data: {
		dots: [
		],
		notes: [
		],



	},
	methods:{
		makeDot: function(event){
			// console.log(event)
			// console.log(event.offsetX, event.offsetY)
			this.dots.push({
				pageX: event.offsetX+7 + 'px',
				pageY: event.offsetY-8 + 'px',
			})

			prompt('Add notes about your location')
			
			this.notes.push({
				notesX: event.offset+15 + 'px',
				notesY: event.offset-16 + 'px',

			})
		
		},
			
		
		removeDot: function(dot, index){
			// console.log(index)
			this.dots.splice(index, 1)

			// for (var i = 0; i < this.dots.length; i++ ){
			// 	if(dot.pageX === this.dots[i].pageX && dot.pageY === this.dots[i].pageY){
					//this.dots.splice([i], 1)
			// 		console.log('removed!')
			// 	}

			// }

		}

	}

})