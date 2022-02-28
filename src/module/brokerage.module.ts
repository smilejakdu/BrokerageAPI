import { TypeOrmModule } from '@nestjs/typeorm';
import { ApartmentEntity } from '../entity/Apartment';
import { ApartmentService } from '../service/ApartmentService';
import { BrokerageQueryController } from '../controller/BrokerageQueryController';
import { Module } from '@nestjs/common';

@Module({
	imports: [TypeOrmModule.forFeature([ApartmentEntity])],
	providers: [ApartmentService],
	controllers: [BrokerageQueryController],
})
export class BrokerageModule {}
