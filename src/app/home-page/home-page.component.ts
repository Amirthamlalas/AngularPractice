import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  name=""
  class=""
  username=""
  password=""

  login=()=>{
    let data:any={
      "name":this.name,
      "class":this.class,
      "username":this.username,
      "password":this.password
    }

    console.log(data)
  }

}
