import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Artista } from "./artistas";



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
   // this.artista.push(new Artista (1, "System of a down", "Rock", "USA", "Rock", 560));
  }

  artistas: Artista[] = [];

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get ("artistas")
  obtenerArtista(): Artista[] {
    //this.artista.push(new Artista (1, "System of a down", "Rock", "USA", "Rock", 560));
    return this.artistas;
  }

  @Get ("artistas/:id")
  obtenerID( @Param("id") id: number): Artista[] {
    //codigo de busqueda
    return this.artistas[0];
  }

  @Post ("artistas")
  nuevoArtista( @Body() artistas:Artista): Artista {
    this.artistas.push(artistas);
    return null;
  } 


}
