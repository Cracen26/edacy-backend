import { Controller,Get } from '@nestjs/common';
import { RssService } from './rss.service';
const parser = require('rss-url-parser')



@Controller('rss')
export class RssController {
    constructor(private rssService:RssService){}
    @Get()
    async findAll(): Promise<any> {
        const data = await parser('https://www.lemonde.fr/rss/en_continu.xml')
        // data.forEach((item) => console.log(item.title))
        return data
    }
}
