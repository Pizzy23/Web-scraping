import {
    Body,
    Controller,
    Delete,
    Get,
    Params,
    Patch,
    Post,
    Response,
  } from "@decorators/express";
  import  {ScrapingService} from "./axioService"
  
  @Controller("/braily")
  export class AxioController {
    req: any;
    res: any;
    service = new ScrapingService();
    constructor() {}
  
    @Post("/")
    async postUser(@Response() res: any, @Body() body: any) {
      try {
        const url = body.url
        await this.service.scraping(url, res);
      } catch (err) {
        res.send(err.message);
      }
    }
  }
  