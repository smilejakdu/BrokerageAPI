import {
	Body,
	Controller,
	Get,
	HttpStatus,
	Param,
	ParseIntPipe,
	Post,
	Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CalcBrokerageDto, DealTypeDto } from '../constants/DealType';
import { BrokeragePolicyFactory } from '../policy/BrokeragePolicyFactory';
import { ApartmentService } from '../service/ApartmentService';
import { ApartmentEntity } from '../entity/Apartment';
import { CoreResponse } from '../shared/core/CoreResponse';

@ApiTags('BROKERAGE')
@Controller('brokerage')
export class BrokerageQueryController {
	constructor(private readonly apartmentService: ApartmentService) {}

	@Get('calc/brokerage')
	async calcBrokerage(@Query() query: CalcBrokerageDto): Promise<CoreResponse> {
		// TODO : 중개수수료 계산하는 로직
		const { price, dealType } = query;
		const policy = await BrokeragePolicyFactory.BrokeragePolicy(dealType);
		const result = await policy.calculate(price);

		return {
			statusCode: HttpStatus.OK,
			message: 'SUCCESS',
			data: result,
		};
	}

	@Get('calc/:id/apartment')
	async calcBrokerageByApartmentId(
		@Param('id', ParseIntPipe) apartmentId: number,
		@Query() data: DealTypeDto,
	): Promise<CoreResponse> {
		const policy = await BrokeragePolicyFactory.BrokeragePolicy(data.dealType);
		const price = await this.apartmentService.getPrice(apartmentId);
		const result = await policy.calculate(price);
		return {
			statusCode: HttpStatus.OK,
			message: 'SUCCESS',
			data: result,
		};
	}

	@Post()
	async createBrokerage(@Body() data: ApartmentEntity): Promise<CoreResponse> {
		const responseCreatedApartment = await this.apartmentService.createApartment(data);
		return {
			statusCode: responseCreatedApartment.statusCode,
			message: responseCreatedApartment.message,
		};
	}
}
