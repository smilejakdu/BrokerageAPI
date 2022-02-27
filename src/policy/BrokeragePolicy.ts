export interface BrokeragePolicy {
	calculate(price: number): Promise<number>;
	createRule(price: number);
}
