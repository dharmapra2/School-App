import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import { http } from "../../../CommonApi/http";
import Swal from "sweetalert2";
function UpdateStudent() {
  const [teacherData, setTeacherData] = useState([]);
  const navigate = useNavigate();
  let { id } = useParams();
  const [teachers, setTeachers] = useState([]);
  const [value, setvalue] = useState([]);
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  useEffect(() => {
    const getTeacherData = async () => {
      await http
        .get(`showTeacher/${id}`)
        .then((res) => {
          if (res.status === 200) {
            setTeacherData(res.data);
            reset(res.data);
          }
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.warning,
          });
          navigate("/teacher");
        });
    };
    return () => {
      getTeacherData();
    };
  }, [id, navigate, reset]);
  const onSubmit = async (data) => {
    data = JSON.stringify(data);
    await http
      .put(`updateTeacher/${id}`, data)
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Saved",
            text: res.data.success,
          });
          reset();
          navigate("/teacher");
        } else if (res.status === 206) {
          Swal.fire({
            icon: "warning",
            title: "",
            text: res.data.warning,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
  return (
    <div>
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
              {errors.stud_name && (
                <span className="text-danger float-start small">
                  This field is required
                </span>
              )}
              <label htmlFor="floatingInputInvalid">Enter Full Name</label>
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
              {errors.stud_email && (
                <span className="text-danger float-start small">
                  This field is required
                </span>
              )}
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
              {errors.stud_class && (
                <span className="text-danger float-start small">
                  This field is required
                </span>
              )}
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
                {...register("stud_ph_no", {
                  required: true,
                  pattern:
                    /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/,
                })}
              />
              {errors.stud_ph_no && (
                <span id="span" className="text-danger float-start small">
                  Enter Contact Number Like : +919090522384
                </span>
              )}
              <label htmlFor="floatingInputInvalid">Enter Contact Number</label>
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
              {errors.stud_father_name && (
                <span className="text-danger float-start small">
                  This field is required
                </span>
              )}
              <label htmlFor="floatingInputInvalid">Enter Father Name</label>
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
              {errors.stud_mother_name && (
                <span className="text-danger float-start small">
                  This field is required
                </span>
              )}
              <label htmlFor="floatingInputInvalid">Enter Mother Name</label>
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
              {errors.stud_address && (
                <span className="text-danger float-start small">
                  This field is required
                </span>
              )}
              <label htmlFor="floatingInputInvalid">Enter Full Address</label>
            </div>
          </div>
          <div className="col-sm">
            <div className="form-floating mb-1 p-0">
              <select
                className="form-select border-primary"
                id="floatingSelect"
                name="gender"
                {...register("gender", { required: true })}
              >
                {errors.gender && (
                  <span className="text-danger float-start small">
                    This field is required
                  </span>
                )}
                {/* <option  disabled>
            select Gender
          </option> */}
                <option defaultValue="male">male</option>
                <option defaultValue="female">female</option>
                <option defaultValue="other">other</option>
              </select>
              <label htmlFor="floatingSelect">Select Gender</label>
            </div>
          </div>
        </div>
        <div className="row g-1">
          <div className="col mb-1">
            <MultiSelect
              onChange={handleOnchange}
              options={options}
              className="form-control border-info"
            />
          </div>
        </div>
        <div className="row g-1">
          <button className="btn btn-info">Add Student</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateStudent;
