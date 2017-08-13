$(document).ready(function () {

    var model = {
    	catCurrent : null,
    cats:[{
    		 catname : 'redcat',
    		 catId : 0,
    		 count : 0,
    		 urle : 'images/catimage.jpg',
    	}, {
      	   	catname : 'blackcat',
      	 	catId : 1,
      	 	count : 0,
      	 	urle : 'images/catimage2.jpg',
      	}, {
      	 	catname :'bluecat',
      	 	catId : 2,
      	 	count : 0,
      		urle : 'images/catimage3.jpg',
      	}, {
      	 	catname :'pinkcat',
      	 	catId : 3,
      	 	count : 0,
      	 	urle : 'images/catimage4.jpg',
      	}, {
      	 	catname :'whitecat',
      	 	catId : 4,
      	 	count : 0,
      	 	urle : 'images/catimage5.jpg',
      	}]
    };

    var octopus = {
    	init: function(){
    		model.catCurrent=model.cats[0];
    		view1.init();
    		view2.init();
    	},

    	getCatList: function(){
    		return model.cats;
    	},

    	setCurrentCat : function(cat){
    		return model.catCurrent=cat;
    	},

    	getCurrentCat: function(){
    		return model.catCurrent;
    	}
    	

    };

    var view1 = {

    	init : function(){
 
    		var $sec=$('#section');
			var $catList=$('#cat-list');
			var $catimg=$('#cat-img');
			view1.render();
			
    	},

    	render : function(){
    		
    		var $sec=$('#section');
    		var catsc=octopus.getCatList();
    		

    		for(var i=0;i<catsc.length;i++)
    		{
    			var catselect=catsc[i];

    			$sec.append('<button id="cat">'+catselect.catname+'</button>');
    			var $cat= $('#cat');

    			$cat.on('click',(function(catcopy){
    				return function(){
    					octopus.setCurrentCat(catcopy);
    					
    				};
    				})(catselect));
    		}
    		view2.render();
    	}

    };


    var view2={
    	init : function(){
    		var $cati= $('#cat-img');
    		// view2.render();
    	
    	},

    	render : function(){
    		var $cati=$('#cat-img');
    		var curCat= octopus.getCurrentCat();
    		console.log(curCat);
    		var url= curCat.urle;
    		$cati.attr("src",url);
    		$cati.attr("alt",curCat.catname);

    	}
    };
    octopus.init();
});
