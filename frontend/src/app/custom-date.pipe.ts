import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  transform(value: Date | null): string | null {
    // Parse the input date string
    //const parsedDate = new Date(value);
    if (value === null) {
      // Handle the case where the input value is null
      return ''; // or any other default value or error message you want to return
    }
    // Format the date using Angular's DatePipe
    const formattedDate = new DatePipe('en-US').transform(value, 'yyyy/MM/dd @ hh:mma');
    
    return formattedDate;
  }
}
