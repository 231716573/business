$(function (){	

	$(".ui-select1 select").change(function(event) {
		var getSelectText = $(".ui-select1 option:selected").text();
		$(".ui-select1 span").html(getSelectText)
	});
	$(".ui-select2 select").change(function(event) {
		var getSelectText = $(".ui-select2 option:selected").text();
		$(".ui-select2 span").html(getSelectText)
	});

})
		
$(function () {
	// 活动时间
    //$('#datetimepicker').datetimepicker();
	$(".datepicker_begin").datetimepicker();

    $(".datepicker_end").datetimepicker();
    
    // 报名时间
    $(".datepicker_signbegin").datetimepicker();

    $(".datepicker_signend").datetimepicker();

    $(".sumbitapply").click(function (){
    	// 活动起止时间检测
    	if($(".datepicker_begin").val() != "" &&  $(".datepicker_end").val() != ""){

	    	var datepickerBegin = $(".datepicker_begin").val().split(/[\/ :]/);
	    	var dateBegin = new Date(datepickerBegin[0],datepickerBegin[1]-1,datepickerBegin[2]);

	    	var datepickerEnd = $(".datepicker_end").val().split(/[\/ :]/);
	    	var dateEnd = new Date(datepickerEnd[0],datepickerEnd[1]-1,datepickerEnd[2]);

	    	if(dateBegin.getTime() > dateEnd.getTime()){
	    		alert("活动开始时间请不要大于活动结束时间")
	    		return false;
	    	}
	    }

	    // 活动报名起止时间检测
	    if($(".datepicker_signbegin").val() != "" &&  $(".datepicker_signend").val() != ""){

	    	var datepickersignbegin = $(".datepicker_signbegin").val().split(/[\/ :]/);
	    	var datesignBegin = new Date(datepickersignbegin[0],datepickersignbegin[1]-1,datepickersignbegin[2]);

	    	var datepickersignEnd = $(".datepicker_signend").val().split(/[\/ :]/);
	    	var datesignEnd = new Date(datepickersignEnd[0],datepickersignEnd[1]-1,datepickersignEnd[2]);

	    	if(datesignBegin.getTime() > datesignEnd.getTime()){
	    		alert("活动报名开始时间请不要大于活动报名结束时间")
	    		return false;
	    	}
    	}
    })

    // 活动费用选择
    $(".tcchoose_free").bind("click",function (){
        $("#cw_main_tclist div").css("display","none");
    })
    $(".tcchoose_number").bind("click",function (){
        $("#cw_main_tclist div").css("display","none");
        $(".tclist_first").show();
    })
    $(".tcchoose_tc").bind("click",function (){
        $("#cw_main_tclist div").css("display","none");
        $(".tclist_last").show();
    })
});
