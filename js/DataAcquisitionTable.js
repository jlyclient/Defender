$(function () {
	$("#element_id").cxCalendar();
	$("#sure_file").click('on',function () {
		var sure_file=$(this).prev('input').val();
		var photoExt=sure_file.split('.');
		var name = photoExt[photoExt.length-1].toLowerCase();
		if(name == 'xlsx'||name=='xls'){
			$.ajax({
				url:'',
				data:sure_file,
				success:function (msg) {
					//
				}
			})
		}else{
			alert('只可以上传Excel文件！');
		}
		console.log(sure_file);
	})
	
})
