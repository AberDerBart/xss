//thx to gion_13 from stackoverflow for the code to extract GET variables: https://stackoverflow.com/questions/12049620/how-to-get-get-variables-value-in-javascript

var $_GET = {};

if(document.location.toString().indexOf('?') !== -1) {
    var query = document.location
                   .toString()
                   // get the query string
                   .replace(/^.*?\?/, '')
                   // and remove any existing hash string (thanks, @vrijdenker)
                   .replace(/#.*$/, '')
                   .split('&');

    for(var i=0, l=query.length; i<l; i++) {
       var aux = decodeURIComponent(query[i]).split('=');
       $_GET[aux[0]] = aux[1];
    }
}

var $warningMsg = "This site will execute code sent to you via the URL on YOUR computer. Do you trust the person that sent you the code and want it to be executed?";

if($_GET['code'] && confirm($warningMsg)){
		var $code = $_GET['code'];
		eval($code)
}
