"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CardEffect = //卡牌效果
function CardEffect() {
	_classCallCheck(this, CardEffect);

	if (new.target === CardEffect) {
		throw new Error("abstract class");
	}
};

var CardBase = (function (_CardEffect) {
	_inherits(CardBase, _CardEffect);

	//卡牌基本属性

	function CardBase(hp, mp) {
		var rank = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

		_classCallCheck(this, CardBase);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CardBase).call(this));

		_this.hp = hp;
		_this.mp = mp;
		_this.rank = rank;
		return _this;
	}

	return CardBase;
})(CardEffect);

var Card = (function (_CardBase) {
	_inherits(Card, _CardBase);

	//卡牌

	function Card(hp, mp) {
		_classCallCheck(this, Card);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Card).call(this, hp, mp));
	}

	return Card;
})(CardBase);

exports.Card = Card;