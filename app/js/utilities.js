/**
 * Is mobile device or not
 */
function isMobile(){
	if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 768){
		return true;
	}else{
		return false;
	}
}