import { Component } from '@angular/core';

@Component({
  selector: 'app-databind',
  standalone: false,
  templateUrl: './databind.html',
  styleUrl: './databind.css',
})

export class Databind {
  name="Suresh";
  company="IBM";

  abc(){
    console.log("Hello");
  }

  user:string="";
  xyz(myname:string){
    this.user=myname;
    console.log("Hello "+myname);
  }

  foodimg="https://images.unsplash.com/photo-1550547660-d9450f859349"
  altmsg="Image loding....!"
}
