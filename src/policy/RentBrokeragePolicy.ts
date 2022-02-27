import { BrokeragePolicy } from './BrokeragePolicy';
import { BrokerageRule } from './BrokerageRule';

export class RentBrokeragePolicy implements BrokeragePolicy {
	createRule(price: number) {
		let rule: BrokerageRule;
		if (price < 50000000) {
			rule = new BrokerageRule(0.5, 200000);
		} else if (price < 100000000) {
			rule = new BrokerageRule(0.4, 300000);
		} else if (price < 300000000) {
			rule = new BrokerageRule(0.3, null);
		} else if (price < 600000000) {
			rule = new BrokerageRule(0.4, null);
		} else {
			rule = new BrokerageRule(0.8, null);
		}
		return rule;
	}

	async calculate(price: number) {
		const rule: BrokerageRule = await this.createRule(price);
		return rule.calculate(price);
	}
}
