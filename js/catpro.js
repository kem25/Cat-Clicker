$(document).ready(function () {

    var model = {
    	catCurrent : null,
    cats:[{
    		 'catname' : 'redcat',
    		 'catId' : 0,
    		 'count' : 0,
    		 'urle' : 'images/catimage.jpg',
    	}, {
      	   	'catname' : 'blackcat',
      	 	'catId' : 1,
      	 	'count' : 0,
      	 	'urle' : 'images/catimage2.jpg',
      	}, {
      	 	'catname' :'bluecat',
      	 	'catId' : 2,
      	 	'count' : 0,
      		'urle' : 'images/catimage3.jpg',
      	}, {
      	 	'catname' :'pinkcat',
      	 	'catId' : 3,
      	 	'count' : 0,
      	 	'urle' : 'images/catimage4.jpg',
      	}, {
      	 	'catname' :'whitecat',
      	 	'catId' : 4,
      	 	'count' : 0,
      	 	'urle' : 'images/catimage5.jpg',
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
    		model.catCurrent=cat;
    	},

    	getCurrentCat: function(){
    		return model.catCurrent;
    	},

    	incrementCatCounter: function(){
    		model.catCurrent.count++;
    		 view2.render();
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
    		
    		$sec.html('');
    		for(var i=0;i<catsc.length;i++)
    		{
    			var catselect=catsc[i];

    			$sec.append('<button id="'+catselect.catId+'">'+catselect.catname+'</button>');
    			var $cat= $('#cat');
    		}

    		 $('button').on('click',function(catcopy){
    				var cat_id=parseInt($(this).attr("id"));
    				var catts=octopus.getCatList();
    				octopus.setCurrentCat(catts[cat_id]);
    				view2.render();
    				});	
    	}

    };


    var view2={
    	init : function(){
    		var $cati= $('#cat-img');
    		var $catname=$('#cat-name');
    		var $catcount=$('#cat-count');

    		 $('img').on('click',function(){
    			 octopus.incrementCatCounter();
    			 // view1.render();    			
     });
    		view2.render();
    	
    	},

    	render : function(){
    		var $cati=$('#cat-img');
    		var $catname=$('#cat-name');
    		var $catcount=$('#cat-count');
    		

    		var curCat= octopus.getCurrentCat();
    		console.log(curCat);
    		var url= curCat.urle;
    		$catname.text(curCat.catname);
    		$catcount.text("Your clicks is:"+curCat.count);
    		// $cati.attr("id",curCat.catId);
    		$cati.attr("src",url);
    		$cati.attr("alt",curCat.catname);

    		
}
};
    octopus.init();
});
