import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-accepted',
  templateUrl: './accepted.page.html',
  styleUrls: ['./accepted.page.scss'],
})
export class AcceptedPage implements OnInit {
fabAction = false;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

toggleFab(){
    this.fabAction = !this.fabAction;
   }
	
 on_way() {
    this.navCtrl.navigateRoot(['./on-way']);
  } 
}
