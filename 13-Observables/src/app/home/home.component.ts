import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Observer, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numberObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    this.numberObsSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('first package');
        }, 2000);

        setTimeout(() => {
          observer.next('second package');
        }, 4000);

        setTimeout(() => {
          // observer.error('This does not work ');
          observer.complete();
        }, 5000);

        setTimeout(() => {
          // observer.error('This does not work ');
          observer.next('third message');
        }, 6000);
      }
    );

    this.customObsSubscription = myObservable.subscribe(
      (message: string) => {
        console.log('The Message Is: ' + message);
      },
      (error: string) => {
        console.log('The Error Is: ' + error);
      },
      () => {
        console.log('Completed');
      }
    );
  }

  ngOnDestroy() {
    this.numberObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();

  }


}
