export class BrokerageRule {
	private percentBrokerage: number;
	private limitAmount: number;

	constructor(percentBrokerage: number, limitAmount: number) {
		this.percentBrokerage = percentBrokerage;
		this.limitAmount = limitAmount;
	}

	calculate(price: number) {
		if (this.limitAmount === null) {
			return this.multiplyPercent(price);
		}
		return Math.min(this.limitAmount, this.multiplyPercent(price));
	}

	multiplyPercent(price: number) {
		return this.percentBrokerage / (100 * price);
	}
}
