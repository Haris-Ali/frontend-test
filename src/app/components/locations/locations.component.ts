import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styles: [],
})
export class LocationsComponent {
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
