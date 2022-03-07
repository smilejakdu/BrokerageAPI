import { BrokeragePolicy } from './BrokeragePolicy';
import { BrokerageRule } from './BrokerageRule';

export class PurchaseBrokeragePolicy implements BrokeragePolicy {
	private rule: BrokerageRule[] = [];
	public PurchaseBrokeragePolicy() {
		this.rule.push(
			new BrokerageRule(50000000, 0.6, 250000),
			new BrokerageRule(200000000, 0.5, 800000),
			new BrokerageRule(600000000, 0.4, null),
			new BrokerageRule(900000000, 0.5, null),
			new BrokerageRule(Math.max(), 0.9, null),
		);
	}

	async createRule(price: number) {
		// let rule: BrokerageRule;
		// if (price < 50000000) {
		// 	rule = new BrokerageRule(50000000, 0.6, 250000);
		// } else if (price < 200000000) {
		// 	rule = new BrokerageRule(200000000, 0.5, 800000);
		// } else if (price < 600000000) {
		// 	rule = new BrokerageRule(600000000, 0.4, null);
		// } else if (price < 900000000) {
		// 	rule = new BrokerageRule(900000000, 0.5, null);
		// } else {
		// 	rule = new BrokerageRule(Math.max(price), 0.9, null);
		// }
		// return rule;
	}

	async calculate(price: number): Promise<number> {
		const rule: BrokerageRule = await this.createRule(price);
		return rule.calculate(price);
	}
}
