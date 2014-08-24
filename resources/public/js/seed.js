
$(document).ready(function () {
    showLoader();
    
    $.get("/api/agent-seed-details/"+currentSeedId(), function (seedArray) {
	        showLoader();
	        seedArray.forEach(function (seed) {
	    		appendSeedDetails(seed, "[data-agent=seed_details]");
	    		if (!seed.IsComplete) {
	    			activateRefreshTimer();
	    		}
	    	});
	    }, "json");

    $.get("/api/agent-seed-states/"+currentSeedId(), function (seedStates) {
	        showLoader();
	        seedStates.forEach(function (seedState) {
	        	appendSeedState(seedState);
	    	});
	    }, "json");
});	
