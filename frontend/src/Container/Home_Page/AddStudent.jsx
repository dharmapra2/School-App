import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { http } from "../../CommonApi/http";
import Swal from "sweetalert2";

function AddStudent() {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    const getTeacher = async () => {
      await http
        .get("getTeachers")
        .then((res) => {
          setTeachers(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return () => {
      getTeacher();
    };
  }, []);
  // console.log(teachers);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    data = JSON.stringify({ ...data, prin_id: 1 });
    console.log(data);
    // await http
    //   .post("storeStudent", data)
    //   .then((res) => {
    //     // console.log(res);
    //     if (res.status === 200) {
    //       Swal.fire({
    //         icon: "success",
    //         title: "Saved",
    //         text: res.data.success,
    //       });
    //       reset();
    //     } else if (res.status === 206) {
    //       Swal.fire({
    //         icon: "warning",
    //         title: "",
    //         text: res.data.warning,
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: "Something went wrong!",
    //     });
    //   });
  };
  return (
    <div className="container-fluid mt-1 p-1">
      <div className="card text-center">
        <div className="card-header bg-dark">
          <ul className="nav nav-tabs card-header-tabs nav-justified">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="true" to="/">
                Principal
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="true"
                to="/addTeacher"
              >
                Add Teacher
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="true"
                to="/addStudent"
              >
                Add Student
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="card-body container">
          <h4 className="card-title border-bottom border-info border-2">
            Add Student Details
          </h4>
          <div className="card-body">
            <form id="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="row g-1">
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    {/* is-valid */}
                    <input
                      type="text"
                      className="form-control form-sm-control border-info"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="stud_name"
                      {...register("stud_name", { required: true })}
                    />
                    <label htmlFor="floatingInputInvalid">
                      Enter Full Name
                    </label>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    <input
                      type="email"
                      className="form-control form-sm-control border-info"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="stud_email"
                      {...register("stud_email", { required: true })}
                    />
                    <label htmlFor="floatingInputInvalid">Enter Email Id</label>
                  </div>
                </div>
              </div>
              <div className="row g-1">
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    <input
                      type="text"
                      className="form-control form-sm-control border-info"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="stud_class"
                      {...register("stud_class", { required: true })}
                    />
                    <label htmlFor="floatingInputInvalid">Enter Class</label>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    <input
                      type="tel"
                      className="form-control form-sm-control border-info"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="stud_ph_no"
                      {...register("stud_ph_no", { required: true })}
                    />
                    <label htmlFor="floatingInputInvalid">
                      Enter Contact Number
                    </label>
                  </div>
                </div>
              </div>
              <div className="row g-1">
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    <input
                      type="text"
                      className="form-control form-sm-control border-info"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="stud_father_name"
                      {...register("stud_father_name", { required: true })}
                    />
                    <label htmlFor="floatingInputInvalid">
                      Enter Father Number
                    </label>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    <input
                      type="tel"
                      className="form-control form-sm-control border-info"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="stud_mother_name"
                      {...register("stud_mother_name", { required: true })}
                    />
                    <label htmlFor="floatingInputInvalid">
                      Enter Mother Name
                    </label>
                  </div>
                </div>
              </div>
              <div className="row g-1">
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    <input
                      type="text"
                      className="form-control form-sm-control border-info"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="stud_address"
                      {...register("stud_address", { required: true })}
                    />
                    <label htmlFor="floatingInputInvalid">
                      Enter Full Address
                    </label>
                  </div>
                </div>
                <div className="col-sm mb-1">
                  <div className="form-floating">
                    <select
                      className="form-select form-sm-select border-info"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                      name="techers[]" multiple='multiple'
                      {...register("teachers[]")}
                    >
                      {/* <option selected disabled>
                        select Teacher
                      </option> */}
                      {teachers.map((data, i) => {
                        return (
                          <option value={data.teach_id} key={i}>
                            {data.teach_name}
                          </option>
                        );
                      })}
                    </select>
                    <label htmlFor="floatingSelect">Assign Teacher</label>
                  </div>
                </div>
              </div>
              <div className="row g-1">
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    <select
                      className="form-select border-primary"
                      id="floatingSelect"
                      {...register("gender", { required: true })}
                    >
                      <option selected disabled>
                        select Gender
                      </option>
                      <option value="male">male</option>
                      <option value="female">female</option>
                      <option value="other">other</option>
                    </select>
                    <label htmlFor="floatingSelect">Select Gender</label>
                  </div>
                </div>
              </div>
              <div className="row g-1">
                <button className="btn btn-info">Add Student</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
