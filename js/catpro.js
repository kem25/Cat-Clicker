$(document).ready(function () {

    var model = {
    cats:[
    	  {
    		 catname : 'redcat',
    		 catId : 1,
    		 count : 0,
    		 urle : 'catimage.jpg',
    	},
      {
      	 catname : 'blackcat',
      	 catId : 2,
      	 count : 0,
      	 urle : 'catimage2.jpg',
      },
      {
      	 catname :'bluecat',
      	 catId : 3,
      	 count : 0,
      	urle : 'catimage3.jpg',
      },
      {
      	 catname :'pinkcat',
      	 catId : 4,
      	 count : 0,
      	 urle : 'catimage4.jpg',
      },
      {
      	 catname :'whitecat',
      	 catId : 5,
      	 count : 0,
      	 urle : 'catimage5.jpg',
      }
	]
    };

    var octopus = {

    	getCatList: function(){
    		return model.cats;
    	},

    	init: function(){
    		view.init();
    	}

    };

    var view = {

    	init : function(){
    		var $cat= $('#cat');
    		var $sec=$('#section');
			var $catList=$('#cat-list');
    	},

    	render : function(){
    		
    		
    		var catsc=octopus.getCatList();

    		for(var i=0;i<cats.length;i++)
    		{
    			var catselect=catsc[i];

    			$sec.append('<button class="'+catselect.catId+'">'+catselect.name+'</button>');

    		}

    	}

    };
    octopus.init();
});
