function EmptyLink(){
    event.preventDefault();
    alert('Ooops...Just continue scrolling our page');
}
set_onbeforeunload = function(){
	return true;
};
