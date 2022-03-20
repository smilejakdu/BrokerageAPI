import { DealType } from '../constants/DealType';
import { PurchaseBrokeragePolicy } from './PurchaseBrokeragePolicy';
import { RentBrokeragePolicy } from './RentBrokeragePolicy';
import { HttpException } from '@nestjs/common';
import { ErrorCode, StatusCode } from '../shared/core/ErrorCode';

export class BrokeragePolicyFactory {
	private static rentBrokeragePolicy = new RentBrokeragePolicy();
	private static purchaseBrokeragePolicy = new PurchaseBrokeragePolicy();

	static BrokeragePolicy(dealType: DealType) {
		switch (dealType) {
			case DealType.PURCHASE:
				return BrokeragePolicyFactory.purchaseBrokeragePolicy;
			case DealType.RENT:
				return BrokeragePolicyFactory.rentBrokeragePolicy;
			default:
				throw new HttpException(ErrorCode.INVALID_REQUEST, StatusCode.BAD_REQUEST);
		}
	}
}
