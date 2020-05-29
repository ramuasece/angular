import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  editEmployeeDetails = new FormGroup({
    title: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    primary_addr: new FormControl(''),
    secondary_addr: new FormControl(''),
    dob: new FormControl(''),
    designation: new FormControl('')
  })

  constructor(private router:ActivatedRoute, private employeeDetails:EmployeeDetailsService) { }

  alert:boolean=false

  ngOnInit(): void {
    this.employeeDetails.getCurrentEmployeeDetails(this.router.snapshot.params.id).subscribe((result)=>{
      this.editEmployeeDetails = new FormGroup({
        title: new FormControl(result['title']),
        first_name: new FormControl(result['first_name']),
        last_name: new FormControl(result['last_name']),
        primary_addr: new FormControl(result['primary_addr']),
        secondary_addr: new FormControl(result['secondary_addr']),
        dob: new FormControl(result['dob']),
        designation: new FormControl(result['designation']),
      })
    })
  }

  collection()
  {
    // console.warn("item", this.editEmployeeDetails.value)
    this.employeeDetails.updateEmployeeDetails(this.router.snapshot.params.id, this.editEmployeeDetails.value).subscribe((result)=>{
      // console.warn("result", result)
      this.alert=true
    })
  }

  closeAlert()
  {
    this.alert=false
  }
}
