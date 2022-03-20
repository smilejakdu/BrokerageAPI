import { BrokeragePolicy } from './BrokeragePolicy';
import { BrokerageRule } from './BrokerageRule';

export class RentBrokeragePolicy implements BrokeragePolicy {
	rule: BrokerageRule[] = [];
	getRules: BrokerageRule[] = [];

	constructor() {
		this.rule.push(
			new BrokerageRule(50000000, 0.5, 200000),
			new BrokerageRule(10000000, 0.4, 300000),
			new BrokerageRule(300000000, 0.3, null),
			new BrokerageRule(600000000, 0.4, null),
			new BrokerageRule(Math.max(), 0.8, null),
		);
	}

	async calculate(price: number): Promise<number> {
		const brokerageRule: BrokerageRule = this.getRules.find(rule => price < rule.getLessThan());
		return brokerageRule.calculate(price);
	}
}
