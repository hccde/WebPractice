<style type="text/css">
	.list-li{
		width:642px;
		padding: 15px 0;
		border-bottom: 1px solid #eee;
	}
	.list-li *{
		font-family: '';
	}
	.list-item-head img{
		height: 38px;
		width: 38px;
		cursor: pointer;
	}
	.list-item-votebar{
		width: 38px;
		margin-right: 10px;
		vertical-align: top;
		display: inline-block;
	}
	.list-item-vote{
		margin-top: 5px;
		width: 38px;
		height: 24px;
		color: #698ebf;
		background-color: #eff6fa;
		text-align: center;
		line-height: 24px;
		font-size: 12px;
		font-weight: 600;
		cursor: pointer;
	}
	.list-item-content{
		position: relative;
		width: 584px;
		display: inline-block;
	}
	.list-item-content p{
		font-size: 13px;
		color: #999;
		width: 49%;
	}
	.list-item-content h3{
		font-size: 14px;
		color:#259;
		font-weight: 600;
		padding:10px 0px;
		position: relative;
		cursor: pointer;
	}
	.list-item-content h3 span{
		position: absolute;
		background-image: url('../dest/image/spritestotal.png');
		background-position: -261px -62px;
		width: 20px;
		height: 20px;
		right: 0px;
		top: 7px;
		cursor: pointer;
	}
	.list-item-content-time{
		right: 0px;
		position: absolute;
		top: 0px;
		text-align: right;
	}
	.list-item-author{
		font-size: 13px;
		color: #222;
		line-height: 1.7;
		cursor: pointer;

	}
	.list-item-author span{
		font-weight: 600
	}
	.list-item-content section{
		line-height: 1.7;
		font-size: 0px;
		font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
	}

	.list-item-content section span{
		color: #259;
		cursor: pointer;
	}
	.list-item-content section div{
		font-size:13px;
		width: 384px;
		display: inline-block;
		vertical-align: middle;
		vertical-align: top;
	}
	.list-item-content section img{
		width: 200px;
		height: 112px;
		display: inline-block;
	}

	.list-item-bottom{
		margin-top: 15px;
	}

	.list-item-add{
		background-image: url('../dest/image/spritestotal.png');
		background-position: -97px -23px;
		width: 12px;
		height: 10px;
		display: inline-block;
	}
	.list-item-comment{
		background-image: url('../dest/image/spritestotal.png');
		background-position: -28px -22px;
		width: 12px;
		height: 10px;
		margin-left: 4px;
		display: inline-block;
	}

</style>
<template>
<!-- li的宽度先写死 实际是由右边栏决定的 -->
<li class="list-li">
	<div class="list-item-votebar">
		<div class="list-item-head">
			<img src="../dest/image/listhead.jpg">
		</div>
		<p class="list-item-vote">
			<span>
				817
			</span>
		</p>
	</div>

	<div class="list-item-content">
	<div>
		<p>
			顾扯淡、徐湘楠 赞同该回答
		</p>
		<p class="list-item-content-time">
			51 分钟前
		</p>
		<h3>
			如何评价动画电影 《大鱼海棠》?
			<span class="list-item-del">
			</span>
		</h3>
	</div>
	<div class="list-item-author"><span>刘幸桥</span>，谈笑风生又一年</div>
	<section>
			<img src="../dest/image/example.png">
			<div>
			为什么没有大V出来给大家发声音？我就想问问就现在微博上面还有哪几个经常指出政府或法规错误，还要关心弱势群体，在乎百姓感受，偶尔用自己的专业知识提出切实可行而且在理的整改意见，目的是想让社会变得更好。同时粉丝数和社	会地位都能配得上「大V」两个...<span>显示全部</span>
			</div>
	</section>
		<p class="list-item-bottom">
			<span class="list-item-add"></span><span>关注问题</span>
			<span class="list-item-comment"></span><span><span>4</span>&nbsp条评论</span>
			<span style="font-weight:800;width:line-height: 8px;display: inline-block;vertical-align: middle;font-size:18px;">·</span><span>作者保留权利</span>
		</p>
	</div>
</li>
</template>

<script type="text/javascript">
module.exports = {
	data:function(){
		return {
			list:{
				name:"",
				time:"",
				head:"",
				joiner:"",
				action:"",
				title:"",
				content:"",
				comments:""
			}
		}
	}
}
</script>