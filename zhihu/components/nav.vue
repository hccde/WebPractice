<style type="text/css">
	input{
		outline: none;
		border:none;
		padding: 0;
		margin: 0;
	}
	.nav-wrap{
		height: 40px;
		background-color: #0769ca;
		padding-left: 5px;
		padding-right: 10px;
		color: white;
	}	
	.nav-logo{
		height:30px; 
		margin: 5px 0px;
		width:61px;
		background-image: url('../dest/image/logo_banner.png');
		display: inline-block;
	}
	.nav-search-wrap{
		width: 240px;
		height: 100%;
		display: inline-block;
		vertical-align: top;
		margin-left: 10px;
		font-size: 0px;
	}
	.nav-search-wrap input{
			height: 30px;
			margin-top: 5px;
			background-color:#e1eaf2;
			border-top-left-radius: 4px;
			border-bottom-left-radius: 4px;
			-moz-box-shadow: inset 0 3px 8px rgba(0,0,0,.4);
            -webkit-box-shadow: inset 0 3px 8px rgba(0,0,0,.4);
    		box-shadow: inset 0 3px 8px rgba(0,0,0,.24);
    		text-indent: 1em;
    		width:200px;
	}
	.nav-search-wrap div{
		height: 30px;
		width: 40px;
		border-top-right-radius:4px;
		border-bottom-right-radius: 4px; 
		background-color: #0e79e9;
		-moz-box-shadow: outset 0 3px 8px rgba(0,0,0,.4);
        -webkit-box-shadow: outset 0 3px 8px rgba(0,0,0,.4);
    	box-shadow: outset 0 3px 8px rgba(0,0,0,.24);
		display: inline-block;
		vertical-align: top;
		margin-top: 5px;
	}
</style>

<template>
	<div class="nav-wrap">
		<div class="nav-logo">
			
		</div>
		<div class="nav-search-wrap">
			<input type="type" name="search" required="" placeholder="搜索你感兴趣的内容...">
			<div>
				dsdf
			</div>
		</div>
		<ul class="nav-list">
			<li v-for="item in navitems">
				item.name
			</li>
		</ul>
		<input type="button" name="ask" value="提问">
		<div class="nav-person">
			<div>
				
			</div>
			<span>
				vgyyuiop
			</span>
		</div>
	</div>
</template>
<script type="text/javascript">

	module.exports = {
		data:function(){
			return {
				message:"hello tem",
				navitems: [{name:"首页"},{name:"首页2"}]
			}
		}
	}

</script>