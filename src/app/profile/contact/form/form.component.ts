import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-profile-contact-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {

  @Input() emailInput: string = '';
  @Output() submitted: EventEmitter<{address:string}> = new EventEmitter<{address:string}>();

  address: string = '';
  
  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called',changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }
  
  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }

  submit() {
    console.log('btn clicked');
    
    // this.submitted.emit(this.address);
    this.submitted.emit({address: this.address});
  }

}
