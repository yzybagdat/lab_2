import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export interface LayoutModule {
Date:string;
Distance:string;
Time:string;
Average:string;
}
export class LayoutDataService {

layout: Layout[] = [
  {
    Date: '2018-04-11',
    Distance: '5,000.00',
    Time: '42:40',
    Average: '7.20',
  },
  {
    Date: '2018-04-11',
    Distance: '5,000.00',
    Time: '42:40',
    Average: '7.20',
  },
  {
    Date: '2018-04-11',
    Distance: '5,000.00',
    Time: '42:40',
    Average: '7.20',
  },
  {
    Date: '2018-04-11',
    Distance: '5,000.00',
    Time: '42:40',
    Average: '7.20',
  },
  {
    Date: '2018-04-11',
    Distance: '5,000.00',
    Time: '42:40',
    Average: '7.20',
  }
];

getLayout(): Observable<Employee[]> {
  return of(this.employees);
}

}
