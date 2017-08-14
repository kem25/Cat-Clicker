$(document).ready(function () {

    var model = {
    	catCurrent : null,
    	adminShow : false,
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
    	 },

    	 setAdmin : function(){
    	 	model.adminShow=true;
    	 	view3.render();
    	 },

    	 getAdmin : function(){
    	 	return model.adminShow;
    	 }

    };

    var view1 = {

    	init : function(){
 
    		var $sec=$('#section');
			var $catList=$('#cat-list');
			var $catimg=$('#cat-img');
			var $showform=$('#adminform');

			view1.render();
    		
			
    	},

    	render : function(){
    		
    		var $sec=$('#section');
    		var $showform=$('#adminform');
    		$showform.hide();
    		var catsc=octopus.getCatList();

    		
    		$sec.html('');
    		for(var i=0;i<catsc.length;i++)
    		{
    			var catselect=catsc[i];

    			$sec.append('<h3 id="'+catselect.catId+'">'+catselect.catname+'</h3>');
    			var $cat= $('#cat');
    		}

    		 $('h3').on('click',function(catcopy){
    				var cat_id=parseInt($(this).attr("id"));
    				var catts=octopus.getCatList();
    				octopus.setCurrentCat(catts[cat_id]);
    				view2.render();
    				view3.render();
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
    		
    		curCat= octopus.getCurrentCat();
    		console.log(curCat);
    		var url= curCat.urle;
    		$catname.text(curCat.catname);
    		$catcount.text("Your clicks is:"+curCat.count);
    		// $cati.attr("id",curCat.catId);
    		$cati.attr("src",url);
    		$cati.attr("alt",curCat.catname);

    		
    		 } 	


};

var view3={
	init: function(){
		var $showform=$('#adminform');
		var $submitbutton=$('#submit');
		var $cancel=$('#cancel');

		view3.render();
	},
    
    render: function(){
    	var $showform=$('#adminform');
    	var $cancel=$('#cancel');
    	var $submit=$('#submit');
    	catm=octopus.getCurrentCat();
    	var $newname=$('.newname');
    	var $newurl=$('.new-url');
    	var $newclicks=$('.newclicks');

    	var $adminbutton=$('#adminbutton');
		$('#adminbutton').on('click',function(){
    		 	octopus.setAdmin();
    		 });

		var adminkey=octopus.getAdmin();
    		 if(adminkey==true){
    		 	$showform.show();
				}

		$submit.on('click',function(){
			if($newname!= null){
				catm.catname=$newname.val();
			}
			else{
				catm.catname=catm.catname;
			}
			if($newurl!= null){
				catm.urle=$newurl.val();
			}
			else{
				catm.urle=catm.urle;
			}
			if($newclicks!=null){
				catm.count=$newclicks.val();
			}
			else{
				catm.count=catm.count;
			}
			view1.render();
			view2.render();
		})			


		$cancel.on('click',function(){
		$showform.hide();
		});
	}
};

    octopus.init();

});
