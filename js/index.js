var main = new Vue({
	el: "#main",
	data:{
		result: 0,
		products: [
			{ id:0, name: "test1", amount: 5, cost: 10 }
		]
	},
	//on page load
	mounted: function(e){
			this.updateResult();
	},

	methods: {
		updateResult: function(){
			//calculate result
			this.result = 0;
			for(var i = 0; i<this.products.length; i++){
				this.result += this.products[i].cost * this.products[i].amount;
			}
		},
		//adds new product to list
		addNewProduct: function(e){
			this.products.push({id: this.products.length, name: "", amount: 0, cost: 0});
			this.updateResult();
		},
		//removes product from list
		delElement: function(e){
			const id = e.target.parentNode.id;
			this.products.splice(id, 1);
			//fix bug when removing elem with id 1 when 3 elems and adding new = result - 2 elems with id 2
			this.products = this.products.map(function(product, index) {
				product.id = index;
				return product;
			});
			this.updateResult();
		}
	}
});