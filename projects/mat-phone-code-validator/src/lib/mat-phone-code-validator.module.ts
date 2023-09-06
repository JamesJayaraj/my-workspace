import { NgModule } from '@angular/core';
import { MatPhoneCodeValidatorComponent } from './mat-phone-code-validator.component';
import { MatDialogModule} from '@angular/material/dialog';
import { DialogcomponentComponent } from './dialogcomponent/dialogcomponent.component';

@NgModule({
  declarations: [
    MatPhoneCodeValidatorComponent,
    DialogcomponentComponent
  ],
  imports: [
    MatDialogModule,
  ],
  exports: [
    MatPhoneCodeValidatorComponent
  ],
  entryComponents:[
    DialogcomponentComponent
  ]
  
})
export class MatPhoneCodeValidatorModule { }
