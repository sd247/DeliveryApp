import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-on-way',
  templateUrl: './on-way.page.html',
  styleUrls: ['./on-way.page.scss'],
})
export class OnWayPage implements OnInit {
fabAction = false;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

toggleFab(){
    this.fabAction = !this.fabAction;
   }
	
 delivered_succesfully() {
    this.navCtrl.navigateRoot(['./delivered-succesfully']);
  } 
}
