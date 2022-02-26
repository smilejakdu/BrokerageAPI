import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ActionType } from '../constants/ActionType';


@ApiTags('BOARD')
@Controller('brokerage')
export class BrokerageQueryController {
  constructor() {}

  @Get('')
  async calcBrokerage(@Param() params:{[key:string]:ActionType}) {
    return ``;
  }
}
