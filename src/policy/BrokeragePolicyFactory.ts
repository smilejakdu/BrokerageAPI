import { DealType } from '../constants/DealType';
import { PurchaseBrokeragePolicy } from './PurchaseBrokeragePolicy';
import { RentBrokeragePolicy } from './RentBrokeragePolicy';
import { HttpException } from '@nestjs/common';
import { ErrorCode, StatusCode } from '../shared/errorCode/ErrorCode';

export class BrokeragePolicyFactory {
	static BrokeragePolicy(dealType: DealType) {
		switch (dealType) {
			case DealType.PURCHASE:
				return new PurchaseBrokeragePolicy();
			case DealType.RENT:
				return new RentBrokeragePolicy();
			default:
				throw new HttpException(ErrorCode.INVALID_REQUEST, StatusCode.BAD_REQUEST);
		}
	}
}
