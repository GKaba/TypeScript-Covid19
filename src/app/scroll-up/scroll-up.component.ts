import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-up',
  templateUrl: './scroll-up.component.html',
  styleUrls: ['./scroll-up.component.css']
})
export class ScrollUpComponent implements OnInit {
  isShow: boolean;
  toptostart = 100;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset ||document.body.scrollTop > 300 || document.documentElement.scrollTop > 300;

    if (scrollPosition >= this.toptostart) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  gotoTop(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }


  constructor() { }

  ngOnInit(): void {
    this.gotoTop();
  }

}
