import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  tabSelected:string;
 
  names= ["zalak","peenal","bhoomi","vishal","prachi","harsh","pooja","harnish"];
  getNames(name){
    if(name=="zalak"|| name=="peenal")
    return 'mee';
    else return 'classmates';
      

    

  }
}

