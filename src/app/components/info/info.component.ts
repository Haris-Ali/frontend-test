import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styles: [],
})
export class InfoComponent {
  isMobileView: boolean = false;

  ngOnInit() {
    if (window.innerWidth < 672) {
      this.isMobileView = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 672) {
      this.isMobileView = true;
    } else {
      this.isMobileView = false;
    }
  }
}
