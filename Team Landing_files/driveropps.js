function showops(fullstate,state) {
	var oppsCFC = new opps();
	oppsCFC.setCallbackHandler(populateOps);
	oppsCFC.searchOpps(state, fullstate);
}

function populateOps(result) {
	document.getElementById('opp-start').style.display = 'none';
	document.getElementById('opp-results').style.display = 'block';
	document.getElementById('state-name').innerHTML = result[0].FULLSTATE + " ";
	document.getElementById('state-total').innerHTML = result[0].OPPS + " ";
}