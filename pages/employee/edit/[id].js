import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';


export default function UpdateEmployee({ employee }) {

    const router = useRouter();

    const [Employee_id, setEmployee_id] = useState(employee.Employeeid);
    const [Employee_name, setEmployee_name] = useState(employee.Employeename);
    const [Employee_username, setEmployee_username] = useState(employee.Employeeusername);
    const [Employee_password, setEmployee_password] = useState(employee.Employeepassword);

    const UpdateEmployees = (ID) => {
        Axios.put('http://localhost:8080/employees/' + ID, {
          employeeid: Employee_id,
          employeename: Employee_name,
          employeeusername: Employee_username,
          employeepassword: Employee_password
      })
      .then(function (response) {
        console.log(response);
        router.push('/employee/employee');
      })
      .catch(function (error) {
        console.log(error);
        router.push('/employee/employee');

      });

      }

  return (
    <>
      <br /><br />
      <div className="container">
      <div className="card">
  <div className="card-header">
    ฟอร์มแก้ไขข้อมูล
  </div>
  <div className="card-body">
        <form action="/" method="post">
        <input type="text" className="form-control" placeholder="รห้ส" onChange={(e) => { setId(e.target.value) }} defaultValue={employee.ID}/>
        <br />
        <input type="number" className="form-control" placeholder="รหัสพนักงาน" onChange={(e) => { setEmployee_id(e.target.value) }} defaultValue={employee.Employeeid}/>
        <br />
        <input type="text" className="form-control" placeholder="ชื่อ-นามสกุล" onChange={(e) => { setEmployee_name(e.target.value) }} defaultValue={employee.Employeename}/>
        <br />
        <input type="text" className="form-control" placeholder="ชื่อผู้ใช้" onChange={(e) => { setEmployee_username(e.target.value) }} defaultValue={employee.Employeeusername}/>
        <br />
        <input type="text" className="form-control" placeholder="รหัสผ่าน" onChange={(e) => { setEmployee_password(e.target.value) }} defaultValue={employee.Employeepassword}/>
        <br />
        <button type="button" className="btn btn-success" onClick={() => { UpdateEmployees(employee.ID)}}>บันทึก</button>
        </form>
        </div>
</div>
    </div>
    </>
  )
}

export const getServerSideProps = async ({ params }) => {
    const { data } = await Axios.get(`http://localhost:8080/employees/${params.id}`);
 
    if (!data) {
      return {
        notFound: true,
      };
    }
 
    const employee = data;
    return {
      props: {
        employee,
      },
    };
  };