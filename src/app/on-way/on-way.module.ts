import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { OnWayPageRoutingModule } from './on-way-routing.module';

import { OnWayPage } from './on-way.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,    
    OnWayPageRoutingModule
  ],
  declarations: [OnWayPage]
})
export class OnWayPageModule {}
