import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styles: [],
})
export class HeroSectionComponent {
  currentIdx: number = 0;
  isMobileView: boolean = false;

  ngOnInit() {
    if (window.innerWidth < 672) {
      this.isMobileView = true;
    }
  }

  toggleFeatures() {
    if (this.currentIdx === 3) this.currentIdx = 0;
    else this.currentIdx = this.currentIdx + 1;
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
