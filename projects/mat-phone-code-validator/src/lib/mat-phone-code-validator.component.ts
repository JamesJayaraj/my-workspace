import { Component, OnInit } from '@angular/core';
//import { MatDialog } from '@angular/material/dialog';
import { DialogcomponentComponent } from './dialogcomponent/dialogcomponent.component';
@Component({
  selector: 'lib-mat-phone-code-validator',
  template: `
    <button (click)="test()">Submit</button>
  `,
  styles: [
  ]
})
export class MatPhoneCodeValidatorComponent implements OnInit {

  constructor() { }
  // public dialog:MatDialog
  ngOnInit(): void {
  }

  test(){
    console.log("Successfully npm activated");
    // this.dialog.open(DialogcomponentComponent,{
    //   width:"500px",
    //   height:"300px"
      
    // }).afterClosed().subscribe(res=>{
    //   console.log("diglog closed successfully");
    // })
  }
}
