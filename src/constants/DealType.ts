import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export enum DealType {
	PURCHASE = 'PURCHASE',
	RENT = 'RENT',
	description = 'description',
}

export class CalcBrokerageDto {
	@ApiProperty({ enum: DealType, enumName: 'DealType' })
	dealType: DealType;

	@ApiProperty({
		example: 100,
		description: 'price',
	})
	@IsNumber()
	@IsNotEmpty()
	price: number;
}
