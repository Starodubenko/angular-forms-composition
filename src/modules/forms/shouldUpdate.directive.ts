import {AfterViewInit, ChangeDetectorRef, Directive, Input, OnChanges} from "@angular/core";

@Directive({
  selector: `[shouldUpdate]`
})
export class ShouldUpdateDirective implements OnChanges, AfterViewInit{
  @Input() shouldUpdate;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnChanges() {
    if (this.shouldUpdate) {
      this.shouldUpdate.subscribe(() => {
        this.cd.detectChanges();
      });
    }
  }

  ngAfterViewInit() {
    if (this.shouldUpdate) {
      this.cd.detach();
    }
  }
}
