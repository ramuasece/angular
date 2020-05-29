import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  constructor(private employeeDetails:EmployeeDetailsService) { }
  collection:any=[];

  ngOnInit(): void {
    this.employeeDetails.getList().subscribe((result)=>{
      // console.warn(result)
      this.collection=result
    })
  }

  deleteEmployeeDetails(item)
  {
    // console.warn(item)
    this.collection.splice(item-1, 1)

    this.employeeDetails.deleteEmployeeDetails(item).subscribe((result)=>{
      console.warn(result)
    })
  }
}
