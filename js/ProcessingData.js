var obj ={time:'',alldata:'',diddata:''}
$(function () {
	$("#element_id").cxCalendar();
	$('#processing_data').click('on',function () {
		$('.delAlert').css({display:'block'});
		var obj ={time: $("#element_id").val(),alldata:'',diddata:''}
		$('.selectposition').map(function () {
			obj[$(this).attr('name')] = $(this).val();
		});
		console.log(obj);
	})
})
function sureDel() {
	$('.delAlert').css({display:'none'});
	obj.time =  $("#element_id").val();
	$.ajax({
		url:'',
		data:obj,
	})
}
function noDel() {
	$('.delAlert').css({display:'none'});
}
