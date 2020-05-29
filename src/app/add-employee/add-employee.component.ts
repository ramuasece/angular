import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeDetails = new FormGroup({
    title: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    primary_addr: new FormControl(''),
    secondary_addr: new FormControl(''),
    dob: new FormControl(''),
    designation: new FormControl('')
  })

  constructor(private employeeDetails:EmployeeDetailsService) { }
  
  alert:boolean=false

  ngOnInit(): void {
  }

  collectEmployeeDetails()
  {
    this.employeeDetails.saveEmployeeDetails(this.addEmployeeDetails.value).subscribe((result)=>{
      this.alert=true
    })
    // this.addEmployeeDetails.reset({})
  }

  closeAlert()
  {
    this.alert=false
  }
}
