import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  backgrounds = [
    "url('../../assets/person2.jpg')",
    "url('../../assets/image2.jpg')",
  ];

  currentBg = this.backgrounds[0];

  ngOnInit() {
    let index = 0;
    setInterval(() => {
      index = (index + 1) % this.backgrounds.length;
      this.currentBg = this.backgrounds[index];
    }, 3000); 
  }

}
