import { Body, Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CalcBrokerageDto } from '../constants/DealType';

@ApiTags('BOARD')
@Controller('brokerage')
export class BrokerageQueryController {
	constructor() {}

	@Get('calc/brokerage')
	async calcBrokerage(@Body() body: CalcBrokerageDto) {
		// TODO : 중개수수료 계산하는 로직
		const { price, dealType } = body;
		return ``;
	}

	@Get('calc/apartment/:id')
	async calcBrokerageByApartmentId(
		@Param('id', ParseIntPipe) id: number,
		@Body() data: CalcBrokerageDto,
	) {
		console.log(id);
	}
}
