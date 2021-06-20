import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppBarComponent } from './app-bar/app-bar.component';
import { ProfBarComponent } from './prof-bar/prof-bar.component';



@NgModule({
  declarations: [AppBarComponent, ProfBarComponent],
  exports: [AppBarComponent, ProfBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
