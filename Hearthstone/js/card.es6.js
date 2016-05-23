
class CardEffect{//卡牌效果
	constructor(){
		if(new.target===CardEffect){
			throw new Error("abstract class")
		}
		
	}
}

class CardBase extends CardEffect{//卡牌基本属性
	constructor(hp=0,mp=0,rank=0,camp=0,cost=0,name="小精灵"){
		super()
		this.hp = hp;
		this.mp = mp;
		this.rank = rank；
		this.camp = camp;
		this.cost = cost;
		this.name = name;
	}

}

class Card extends CardBase{//卡牌
	constructor(hp=0,mp=0,rank=0,camp=0,cost=0,name="小精灵"){
		super();

	}
}

export{Card};