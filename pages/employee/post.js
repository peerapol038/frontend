import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

export default function post() {

  const router = useRouter()
  const [Employee_id, setEmployee_id] = useState("");
  const [Employee_name, setEmployee_name] = useState("");
  const [Employee_username, setEmployee_username] = useState("");
  const [Employee_password, setEmployee_password] = useState("");



  const addEmployee = () => {

    var data1 = Employee_id;
    var data2 = Employee_name;
    var data3 = Employee_username;
    var data4 = Employee_password;

    Axios.post('http://localhost:8080/employees', {
      employeeid: Employee_id,
      employeename: Employee_name,
      employeeusername: Employee_username,
      employeepassword: Employee_password
    })
      .then(function (response) {
        console.log(response);

        if (data1 != null & data2 != null & data3 != null & data4 != null) {
          Swal.fire({
            icon: 'success',
            title: '<h3>บันทึกข้อมูลเรียบร้อยแล้ว</h3>',
            showConfirmButton: false,
            timer: 2000
          })
        } else {
          Swal.fire({
            icon: 'warning',
            title: '<h3>ไม่สามารถบันทึกข้อมูลได้</h3>',
            showConfirmButton: false,
            timer: 2000
          })
        }


        router.push('/employee/employee');
      })
      .catch(function (error) {
        console.log(error);

        if (data1 != '' & data2 != '' & data3 != '' & data4 != '') {
          Swal.fire({
            icon: 'success',
            title: '<h3>บันทึกข้อมูลเรียบร้อยแล้ว</h3>',
            showConfirmButton: false,
            timer: 2000
          })
        } else {
          Swal.fire({
            icon: 'warning',
            title: '<h3>ไม่สามารถบันทึกข้อมูลได้</h3>',
            showConfirmButton: false,
            timer: 2000
          })
        }
        router.push('/employee/employee');
      });
  }

  return (
    <div class="p-4 m-4">
      <form action="/" method="post" class="p-4 border border-dark border rounded-4">
        <input type="number" className="form-control" placeholder="ไอดี" onChange={(e) => { setEmployee_id(e.target.value) }} />
        <br />
        <input type="text" className="form-control" placeholder="ชื่อ" onChange={(e) => { setEmployee_name(e.target.value) }} />
        <br />
        <input type="text" className="form-control" placeholder="ชื่อผู้ใช้" onChange={(e) => { setEmployee_username(e.target.value) }} />
        <br />
        <input type="text" className="form-control" placeholder="รหัสผ่าน" onChange={(e) => { setEmployee_password(e.target.value) }} />
        <br />
        <button type="button" className="btn btn-success" onClick={addEmployee}>บันทึก</button>
      </form>
    </div>
  )
}