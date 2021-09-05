//预加载layer
layui.use('layer', function()
{

});	
//layer加载函数
function layer_load(vname,str)
{
    layui.use('layer', function(){	
			  var vname=  layer.msg(str, {
						  icon: 16,
						  shade: 0.01,
						   time:false
						  });
     });

}
//layer提示函数（确定，关闭按钮）
function layer_msg(msc,iconname)
{
		 layui.use('layer', function(){	
		       layer.alert(msc,{icon: iconname});
			   //$("#"+rback).focus();
		 });
}

//layer提示函数（自动关闭）
function layer_tip(msc)
{
		 layui.use('layer', function(){	
		          layer.msg(msc, {
							icon: 6,
							shade: 0.01
							,time:5000 //1000为1s
				   });
		 });
}
//layer确定函数
function layer_msg2(msc,btn,url,icon)
{
		layer.confirm(msc, {
		  icon: icon
		  ,btn: [btn] //可以无限个按钮
		  ,yes: function(index, layero){
			  
			window.location.href=url; 
		  }

		});
}