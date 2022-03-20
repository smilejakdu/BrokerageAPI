export interface BrokeragePolicy {
	calculate(price: number): Promise<number>;
}
