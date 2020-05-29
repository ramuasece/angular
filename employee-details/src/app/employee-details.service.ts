import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  url="http://localhost:3000/employees"

  constructor(private http :HttpClient) { }
  getList()
  {
    return this.http.get(this.url)
  }

  saveEmployeeDetails(data)
  {
    return this.http.post(this.url, data)
  }

  getCurrentEmployeeDetails(id)
  {
    return this.http.get(`${this.url}/${id}`)
  }

  updateEmployeeDetails(id, data)
  {
    return this.http.put(`${this.url}/${id}`, data)
  }

  deleteEmployeeDetails(id)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
}
