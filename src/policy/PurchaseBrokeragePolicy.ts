import { BrokeragePolicy } from './BrokeragePolicy';
import { BrokerageRule } from './BrokerageRule';

export class PurchaseBrokeragePolicy implements BrokeragePolicy {
	rule: BrokerageRule[] = [];
	getRules: BrokerageRule[] = [];

	constructor() {
		this.rule.push(
			new BrokerageRule(50000000, 0.6, 250000),
			new BrokerageRule(200000000, 0.5, 800000),
			new BrokerageRule(600000000, 0.4, null),
			new BrokerageRule(900000000, 0.5, null),
			new BrokerageRule(Math.max(), 0.9, null),
		);
	}

	async calculate(price: number): Promise<number> {
		const brokerageRule: BrokerageRule = this.getRules.find(rule => price < rule.getLessThan());
		return brokerageRule.calculate(price);
	}
}
