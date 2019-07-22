$(document).ready(function() {

  // globally available productData from the data.js file
  // console.log(productData);


// the product ID is the key, see in data JS
// to loop through object, key is also the same as ID
// 		var key = "457032";
// 		var data = productData[x];
// for every key in the object it will loop through each one, becomes individual key that you're on



// pass a whole product into the item tile, create a new tile to loop

// var $mainImage = productData.mainImage;

// for (var mainImage in productData) {
// 	var photo1 = productData[mainImage];
// 	console.log(mainImage);
// }


  function init(){

  	for (var key in productData) {
		var product = productData[key];
		console.log(product);

		// var $container = $('.container');
      var $maingrid = $('.main-grid');
      var $tile = $('<div class="tile"></div>');

      // var name = user.name.first + ' ' + user.name.last;
      // var $name = $('<p></p>');
      // $name.text(name);

      // var location = user.location.city + ' ' = user.location.state;
      // var $location = $('<p></p>');
      // $location.text(location);

      var $img = $('<img>');
      $img.attr('src', product.images.mainImage);

      // var $p = $('<p></p>');
      // $p.text(name);
      // $container.append($img, $p);

      $tile.append($img);
      $maingrid.append($tile);
	}

  }

  init();



  // .style-bar, .filters, p class small (categories, Newest), p class wide (size)

  // TODO-drop down wide filter for size

  // TODO- drop down small filter for category

  // TODO- drop down small filter for sort by

  var $stylenav = $('.dropcat');
  $stylenav.on('mouseover', function() {

  	var $this = $(this);
  	var $dropdown = $this.siblings('.dropdown');


    if($dropdown.hasClass('show')) {
    		$dropdown.removeClass('show')
    	} else {
    		$('.dropdown.show').removeClass('show');
    		$dropdown.addClass('show');
    	}



  })



  var $stylenavwide = $('.dropcatwide');

  $stylenavwide.on('mouseenter', function() {
    var $dropdownwide = $('.dropdownwide');
    $dropdownwide.addClass('show');
  });

  $stylenavwide.on('mouseleave', function() {
    var $dropdownwide = $('.dropdownwide');
    $dropdownwide.removeClass('show');
  });

  $('.dropdownwide').on('mouseenter', function() {
    $(this).addClass('show');
  });

   $('.dropdownwide').on('mouseleave', function() {
    $(this).removeClass('show');
  });


  

});
