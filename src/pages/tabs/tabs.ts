import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PhotoPage } from '../photo/photo';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PhotoPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = HomePage;

  constructor() {

  }
}
