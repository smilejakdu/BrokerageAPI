import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CalcBrokerageDto, DealTypeDto } from '../constants/DealType';
import { BrokeragePolicyFactory } from '../policy/BrokeragePolicyFactory';
import { ApartmentService } from '../service/ApartmentService';
import { ApartmentEntity } from '../entity/Apartment';

@ApiTags('BOARD')
@Controller('brokerage')
export class BrokerageQueryController {
	constructor(private readonly apartmentService: ApartmentService) {}

	@Get('calc/brokerage')
	async calcBrokerage(@Query() query: CalcBrokerageDto) {
		// TODO : 중개수수료 계산하는 로직
		console.log(query);
		const { price, dealType } = query;
		const policy = await BrokeragePolicyFactory.BrokeragePolicy(dealType);
		return policy.calculate(price);
	}

	@Get('calc/:id/apartment')
	async calcBrokerageByApartmentId(
		@Param('id', ParseIntPipe) apartmentId: number,
		@Query() data: DealTypeDto,
	) {
		const policy = await BrokeragePolicyFactory.BrokeragePolicy(data.dealType);
		const price = await this.apartmentService.getPrice(apartmentId);
		return policy.calculate(price);
	}

	@Post()
	async createBrokerage(@Body() data: ApartmentEntity) {
		await this.apartmentService.createApartment(data);
	}
}
