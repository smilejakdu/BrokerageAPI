import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApartmentEntity } from '../entity/Apartment';
import { ErrorCode } from '../shared/errorCode/ErrorCode';
import { isNil } from 'lodash';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(ApartmentEntity) private apartmentRepository: Repository<ApartmentEntity>,
	) {}

	async getPrice(apartmentId: number) {
		const result = await this.apartmentRepository
			.createQueryBuilder('apartment')
			.where({ id: apartmentId })
			.getOne();

		if (isNil(result)) {
			return {
				ok: false,
				message: ErrorCode.ENTITY_NOT_FOUND,
			};
		}
		return result;
	}
}
