import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx"
import "rxjs/add/operator/map";

@Injectable()

export class ImgService {

   constructor(private http: Http) {}

   getImages ( url: string ): Observable<any> {
   	return this.http.get( url )
   		.map( function( response ) {
   			return response.json();
   		})
   		.map( response => response.images )
   		.map( images => {
   			return images.map( image => {
   				return {
   					link: image.img
   				}
   			})
   		})
   }

   

}