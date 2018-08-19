import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
      OnInit,
      OnChanges,
      DoCheck,
      AfterContentInit,
      AfterContentChecked,
      AfterViewInit,
      AfterViewChecked,
      OnDestroy {

  // @Input() element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text content: ', this.header.nativeElement.textContent);
    console.log('Text content of paragraph: ', this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log('changes: ', changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');

  }

  ngAfterContentInit() {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    // Add 'implements AfterContentInit' to the class.
    console.log('ngAfterContentInit called!');
    console.log('Text content of paragraph: ', this.paragraph.nativeElement.textContent);


  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');

  }


  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('text content', this.header.nativeElement.textContent);


  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');

  }
  ngOnDestroy() {
    console.log('ngOnDestroy called!');

  }

}
