import { Body, Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CalcBrokerageDto } from '../constants/DealType';
import { BrokeragePolicyFactory } from '../policy/BrokeragePolicyFactory';
import { ApartmentService } from '../service/ApartmentService';

@ApiTags('BOARD')
@Controller('brokerage')
export class BrokerageQueryController {
	constructor(private readonly apartmentService: ApartmentService) {}

	@Get('calc/brokerage')
	async calcBrokerage(@Body() body: CalcBrokerageDto) {
		// TODO : 중개수수료 계산하는 로직
		const { price, dealType } = body;
		const policy = await BrokeragePolicyFactory.BrokeragePolicy(dealType);
		return policy.calculate(price);
	}

	@Get('calc/apartment/:id')
	async calcBrokerageByApartmentId(
		@Param('id', ParseIntPipe) id: number,
		@Body() data: CalcBrokerageDto,
	) {
		const policy = await BrokeragePolicyFactory.BrokeragePolicy(data.dealType);
		const price = await this.apartmentService.getPrice(data.price);
		return policy.calculate(price);
	}
}
