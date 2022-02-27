import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export enum DealType {
	PURCHASE = 'PURCHASE',
	RENT = 'RENT',
	description = 'description',
}

export class CalcBrokerageDto {
	@ApiProperty({ enum: DealType, enumName: 'DealType' })
	dealType: DealType;

	@IsNumber()
	@ApiProperty({
		example: '123123123',
		description: '비밀번호',
	})
	price: number;
}
