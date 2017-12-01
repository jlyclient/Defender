$(function () {
	$("#element_id").cxCalendar();
	$("#element_id2").cxCalendar();
	var cityobj = {},tableobj = {};
	$('#check-city').click('on',function () {
		$('#breakfast').find('input').map(function () {
			if($(this).attr('value')){
				cityobj[$(this).attr('value')] =  this.checked;
			}else{
				cityobj.time=$("#element_id").val();
			}
		})
		$('.check-reason').empty();
		$.ajax({
			url:'',
			data:cityobj,
			success:function () {
				var obj = [table1='',table2='',table3=''];
				var option = "";
				obj.map(function () {
					 option += "<table class='table table-bordered'>"+
					"<tr>"+
					"<th>序号</th>"+
					"<th>城市名称</th>"+
					"<th>字母简称</th>"+
					"</tr>"+
					"<tr>"+
					"<td>1</td>"+
					"<td>成都</td>"+
					"<td>CD</td>"+
					"</tr>"+
					"</table>"
				})
				$('.check-reason').append(option)
			}
		})
		console.log(cityobj);
	});
	$('#check-table').click('on',function () {
		$('#lunch').find('input').map(function () {
			if($(this).attr('value')){
				tableobj[$(this).attr('value')] =  this.checked;
			}else{
				tableobj.time=$("#element_id").val();
			}
		})
		$('.check-reason').empty();
		$.ajax({
			url:'',
			data:tableobj,
			success:function () {
				var obj = [table1='',table2='',table3=''];
				var option = "";
				obj.map(function () {
					option += "<table class='table table-bordered'>"+
						"<tr>"+
						"<th>序号</th>"+
						"<th>城市11</th>"+
						"<th>字母22</th>"+
						"</tr>"+
						"<tr>"+
						"<td>1</td>"+
						"<td>成都33</td>"+
						"<td>44</td>"+
						"</tr>"+
						"</table>"
				})
				$('.check-reason').append(option)
			}
		})
		console.log(tableobj)
	})
})