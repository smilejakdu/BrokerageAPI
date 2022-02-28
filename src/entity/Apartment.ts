import { Column, Entity } from 'typeorm';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
// Entity
import { CoreEntity } from './CoreEntity';

@Entity({ schema: 'brokerage_api', name: 'apartment' })
export class ApartmentEntity extends CoreEntity {
	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		example: '현대아파트',
		description: 'name',
	})
	@Column('varchar', { name: 'name', length: 80, nullable: false })
	name: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		example: '서울시 종로구',
		description: 'address',
	})
	@Column('varchar', { name: 'address', length: 150, nullable: false })
	address: string;

	@IsNumber()
	@ApiProperty({
		example: 100,
		description: 'price',
	})
	@Column({ type: 'int', name: 'price', nullable: false })
	price: number;
}
