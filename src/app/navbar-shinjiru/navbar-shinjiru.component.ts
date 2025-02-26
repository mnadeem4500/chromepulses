import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-shinjiru',
  templateUrl: './navbar-shinjiru.component.html',
  styleUrl: './navbar-shinjiru.component.css'
})
export class NavbarShinjiruComponent {
  ngOnInit(): void {
    console.log('Navbar component initialized');
  }
}
