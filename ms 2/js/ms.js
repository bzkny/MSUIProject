$( document ).ready(function() {

  // $.ajax({
  //   url: 'http://localhost:8000//ms%202/js/data.json',
  //   method: 'GET',
  //   dataType: 'json',
  // }).then(function(data) {


    $.getJSON("http://localhost:8000//ms%202/js/data.json", function(data) {  
    var usersTotal = data.users;

    function numberPunctuation(assets, change){

      //You'd probably want to do something more sophisticated like get locale and create locale object with currency as value then assign to a variable to be used as arguments in below assignments

      //Fix each number for 2 decimals and commas
      var assets = assets.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      var change = change.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      return [assets, change];
    }
    
    
    function colorCode(change, thisRow){

       //Checks for negative or positive change number and adds relevant class
      if (change < 0) {
            thisRow.find('.change').addClass('negative-num');
      } else if (change > 0 ){ 
            thisRow.find('.change').addClass('positive-num');
      } 
        
    }


    function drawRow(currentuserData, indexforTabIndex, punctuated_assets, punctuated_change, change) {
      
      var row = $('<div class="table-row" tabindex=' + indexforTabIndex + '></div>');
      $('#dynamicTable').append(row);

      row.append($("<div class='table-col left'><h2 class='accountName'>" + currentuserData.accountID + "</h2></div>"));

      var thisRow = row.append($("<div class='table-col right'><h2 class='assets'>" + punctuated_assets + "</h2><h3 class='change'><span class='percent'>" + currentuserData.percent + "</span><span class='dollars'>" + punctuated_change + "</span></h3></div>"));

      colorCode(change, thisRow);


    }

    function drawTable(data) {
      
      for (var i = 0; i < usersTotal.length; i++) {
        
        //Loop through array of user objects
        var currentuserData = usersTotal[i];

        //Store index of each user object
        var indexforTabIndex = usersTotal.indexOf(currentuserData);

        //Store value of each account's "totalAssets" and change numbers
        var assets = usersTotal[indexforTabIndex].totalAssets;
        var change = usersTotal[indexforTabIndex].changeAssets;

        //Return both punctuated change and assets
        var punctuated_Numbers = numberPunctuation(assets, change);
        var punctuated_assets = punctuated_Numbers[0];
        var punctuated_change = punctuated_Numbers[1];
        

        //Model on UI
        drawRow(currentuserData, indexforTabIndex, punctuated_assets, punctuated_change, change);

      }
    }
    drawTable(data);


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

});



