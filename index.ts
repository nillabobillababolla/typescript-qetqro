// import operators.
import { of } from 'rxjs';
import { fromEvent } from 'rxjs';
import { map,filter,debounceTime,take,concat,mergeMap } from 'rxjs/operators';
import { BounceBall } from './Ball';
/*
 *  'of' allows you to deliver values in a sequence
 *  In this case, it will emit 1,2,3,4,5 in order.
 */
const dataSource = of(1, 2, 3, 4, 5);

// subscribe to our source observable
const subscription = dataSource
  .pipe(
    // add 1 to each emitted value
    map(value => value + 1),
    //filter values between 3-5
    filter(value=>value>2 && value<=5),
    //take first 2 values.
    take(2),
    //pause stream for 200ms.
    debounceTime(200)
  )
  // log: 2, 3, 4, 5, 6
  .subscribe(value => console.log(value));

  const dataSource2 = of("with","some","string","values");

const subscription2=dataSource2.pipe(
  concat(
  dataSource,
  // will begin when 'dataSource` completes
  dataSource2,
  // will begin when 'dataSource2` completes
)).subscribe(values => {
  console.log(values);
});

const button = document.getElementById("myBtn");
const formEvents = fromEvent(button, 'click');
const subscription3 = formEvents
  .pipe(
    map(btnClick => console.log("Button Clicked"))
  )
  .subscribe();
  
// Try uncommenting the line below :)
// import pad from 'left-pad'; alert(pad);
 
// Set gravity effect on the ball.
// 1 = Earth, .16 = Moon, 2 = Jupiter.
const GRAVITY = 1;

// Color of the ball.
const COLOR = 'deepskyblue';

// Bounce the ball!
BounceBall({
  color: COLOR,
  gravity: GRAVITY
});