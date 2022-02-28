import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApartmentEntity } from '../entity/Apartment';

@Injectable()
export class ApartmentService {
	constructor(
		@InjectRepository(ApartmentEntity) private apartmentRepository: Repository<ApartmentEntity>,
	) {}

	async getPrice(apartmentId: number): Promise<number> {
		const result = await this.apartmentRepository
			.createQueryBuilder('apartment')
			.where({ id: apartmentId })
			.getOne();

		return result.price;
	}

	async createApartment(data: ApartmentEntity) {
		await this.apartmentRepository
			.createQueryBuilder('apartment')
			.insert()
			.values({
				name: data.name,
				address: data.address,
				price: data.price,
			})
			.execute();
	}
}
