<style type="text/css">
	input{
		outline: none;
		border:none;
		padding: 0;
		margin: 0;
	}
	.nav-outer{
		background:linear-gradient(to bottom,#086ed5,#055db5);
	}
	.nav-wrap{
		height: 46px;
		border-bottom: 1px solid #044e97;
		padding-left: 5px;
		padding-right: 10px;
		color: white;
		margin:auto auto;
		width: 960px;
	}	
	.nav-logo{
		height:30px; 
		margin: 8px 0px;
		width:61px;
		background-image: url('../dest/image/logo_banner.png');
		display: inline-block;
	}
	.nav-search-wrap{
		width: 367px;
		height: 100%;
		display: inline-block;
		vertical-align: top;
		margin-left: 10px;
		font-size: 0px;
	}
	.nav-search-wrap input{
			height: 17px;
			padding:7px 10px;
			border: 1px solid #045bb2;
			margin-top: 5px;
			background-color:#e1eaf2;
			border-top-left-radius: 4px;
			border-bottom-left-radius: 4px;
			-moz-box-shadow: inset 0 3px 8px rgba(0,0,0,.4);
            -webkit-box-shadow: inset 0 3px 8px rgba(0,0,0,.4);
    		box-shadow: inset 0 3px 8px rgba(0,0,0,.24);
    		width:305px;
    		border-right: 0;
    		color: #49525c;
    		font-size: 14px;
    		line-height: 17px;
	}
	.nav-search-wrap input:focus{
		background-color: white;
	}
	.nav-search-wrap div{
		height: 31px;
		width: 40px;
		border-top-right-radius:4px;
		border-bottom-right-radius: 4px; 
		background-color: #0e75de;
		-moz-box-shadow: 0 0 5px  rgba(0,0,0,.3);
        -webkit-box-shadow:0 0 5px  rgba(0,0,0,.3);
    	box-shadow: 0 0 5px  rgba(0,0,0,.1);
		display: inline-block;
		vertical-align: top;
		margin-top: 5px;
		border:1px solid #045bb2;
		border-right: 0px;
		cursor: pointer;
	}
	.nav-search-wrap div span{
		background-image: url("../dest/image/spritesIndex.png");
		background-position: -82px 0;
    	width: 15px;
    	height: 15px;
    	margin-top: 8px;
    	margin-left: 12.5px;
    	display: inline-block;
    }

	.nav-list{
		display: inline-block;
		font-size: 0;
		vertical-align: top;
		margin-left: 10px;
	}
	.nav-list li {
		width: 54px;
		display: inline-block;
		font-size: 14px;
		height:45px;
		text-align: center;
	}
	.nav-list li a{
		width: 54px;
		line-height: 45px;
		cursor: pointer;
		display:inline-block;
	}
	.nav-list-active{
		background-color:#075fb6
	}
	.nav-ask-quest{
		margin-left: 90px;
		width: 66px;
		vertical-align: top;
		margin-top: 6px;
		height: 34px;
		border:1px solid #045bb2;
		border-radius: 4px;
		color: white;
		font-size: 14px;
		text-align: center;
		background-color: #0e75de;
        -moz-box-shadow: 0 0 5px  rgba(0,0,0,.3);
        -webkit-box-shadow:0 0 5px  rgba(0,0,0,.3);
    	box-shadow: 0 0 5px  rgba(0,0,0,.1);

	}
	.nav-person{
		display: inline-block;
		vertical-align: top;
		cursor: pointer;
	}
	.nav-person span{
		display: inline-block;
		vertical-align: top;
		margin-top: 14px;
		width: 60px;
		font-size: 14px;
		height: 18px;
		margin-left: 5px;
	}
	.nav-person-head{
		margin-top: 9px;
		width:27px;
		height:27px;
		display: inline-block;
		background-image: url("../dest/image/head.jpg");
	}
</style>

<template>
<div class="nav-outer">
	<div class="nav-wrap">
		<div class="nav-logo">
			
		</div>
		<div class="nav-search-wrap">
			<input type="type" name="search" required="" placeholder="搜索你感兴趣的内容...">
			<div>
			<span>
				
			</span>
			</div>
		</div>
		<ul class="nav-list">
			<li v-for="item in navitems" class="{{item.active}}">
				<a>{{item.name}}</a>
			</li>
		</ul>
		<input type="button" name="ask" value="提问" class="nav-ask-quest">
		<div class="nav-person ml2">
			<div class="nav-person-head">
				
			</div>
			<span class="ellipsis">
				vgyyuiof
			</span>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">

	module.exports = {
		data:function(){
			return {
				navitems: [{name:"首页",url:"",active:"nav-list-active"},{name:"话题",url:""},{name:"发现",url:""},{name:"消息",url:""}]
			}
		}
	}

</script>