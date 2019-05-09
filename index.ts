// import operators.
import { of } from 'rxjs';
import { map,filter,debounceTime,take,concat } from 'rxjs/operators';
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