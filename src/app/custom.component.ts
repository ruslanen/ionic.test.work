import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './custom.html'
})
export class CustomComponent {
	@Input() img;
}