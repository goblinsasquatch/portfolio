import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home-outline' },
    // {
    //   title: 'Full Stack Web-Dev',
    //   url: '/folder/Full Stack Web-Dev',
    //   icon: 'globe-outline',
    // },
    // { title: 'Python', url: '/folder/Python', icon: 'logo-python' },
    // {
    //   title: 'Machine Learning',
    //   url: '/folder/Machine Learning',
    //   icon: 'bulb-outline',
    // },
    // {
    //   title: 'Natural Language Processing',
    //   url: '/folder/Natural Language Processing',
    //   icon: 'chatbubbles-outline',
    // },
    // {
    //   title: 'Palantir Foundry - PySpark',
    //   url: '/folder/Palantir Foundry - PySpark',
    //   icon: 'hammer-outline',
    // },
    // {
    //   title: 'Raspberry Pi',
    //   url: '/folder/Raspberry Pi',
    //   icon: 'assets/icon/raspberry-pi-icon.png',
    // },
    // {
    //   title: 'Other Tech Skills',
    //   url: '/folder/Other Tech Skills',
    //   icon: 'add-outline',
    // },
  ];
  constructor(private menu: MenuController) {}

  ngOnInit() {
    this.menu.open();
  }
}
