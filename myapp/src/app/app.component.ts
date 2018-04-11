import { Component } from '@angular/core';

@Component({
  selector: 'myapp',
  template: `
    <ul>
      <li><a href='/'>Home</a></li>
      <li><a href='/about'>About</a></li>
    </ul>
    <router-outlet></router-outlet>
    `
    ,
})
export class AppComponent  { 
  name = 'Amiya Aloke';
  email = 'aaloke@slb.com';
  address = {
    street: '1000 Main st.',
    city: 'Houston',
    state: 'TX',
    zipcode: 77001
  }
 }
