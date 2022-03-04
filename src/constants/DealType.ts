import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export enum DealType {
	PURCHASE = 'PURCHASE',
	RENT = 'RENT',
	description = 'description',
}

export class DealTypeDto {
	@ApiProperty({ enum: DealType, enumName: 'DealType' })
	dealType: DealType;
}

export class CalcBrokerageDto extends DealTypeDto {
	@IsNotEmpty()
	@ApiProperty({
		example: 100,
		description: 'price',
	})
	public price: number;
}
