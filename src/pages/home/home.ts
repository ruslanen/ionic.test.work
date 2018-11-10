import { Component } from '@angular/core';
import { ImgService } from '../../app/img.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ImgService],
})
export class HomePage {

  title = 'Список изображений';

  images = [];

  constructor(private imagesService: ImgService) {}

  ngOnInit () {
    this.imagesService.getImages('http://studentapi.myknitu.ru')
    .subscribe( value => {
      this.images = value
      console.log( value ) 
    }, 
    error => {
      console.log(0)
    });
  }

}
