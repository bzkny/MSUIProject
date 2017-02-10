$( document ).ready(function() {
	console.log("ready");

  $(".table-row").on("focus", function(){

  	var accntNumAsString = $(this).find(".assets").text();

  	function correctStringtoNum(number) {
  		var accntNumEscaped = accntNumAsString.replace(/[^0-9]/g, "");

  		return accntNumEscaped;

  	};

  	var assets = correctStringtoNum();

  	var digit = assets[0];

  	for (var counter = 0; counter <= assets.length; counter ++){

  		var currentAssetDigit = assets[counter];

  		if (digit <= currentAssetDigit){
  			
  			if (counter === assets.length - 1) {

  			//then addClass active state
  			$(this).addClass("active-state-digits-ascend");
  			
  			}

  		} else {
  			break;
  		}
  		digit = currentAssetDigit;


  	}//CLOSES LOOP

  });//CLOSES FOCUS EVENT
  

});


//QUESTION 1 

//   var Account = function(){

//   	//Create row/entry for each Account 
//		//
//   }

//   var AccountEntry = function(name, assets, changePercent, changeActual)
//   	Account.call(this);
//   	this.name = name;
//   	this.title = assets;
//   	this.changePercent = changePercent;
//   	this.title = changeActual;
// });
// AccountEntry(bea, 10000, 0.08, 7000)


// AccountEntry.prototype = Object.create(Account.prototype);
// AccountEntry.prototype.constructor = AccountEntry;

// $.get( "theAPI", function( data ) {
// 	data.forEach(function(accountName){
//   		$( ".accountName" ).append( "<h2>" + data.name + "</h2>" );
// 	}
// }, "json" );



