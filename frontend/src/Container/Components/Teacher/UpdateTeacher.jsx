import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { http } from "../../../CommonApi/http";
import Swal from "sweetalert2";
function UpdateTeacher() {
  const [teacherData, setTeacherData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const getTeacherData = async () => {
      await http
        .get(`showTeacher/${id}`)
        .then((res) => {
          if (res.status === 200) {
            setTeacherData(res.data.data);
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
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...teacherData,
    },
  });
  const onSubmit = async (data) => {
    data = JSON.stringify({ ...data, prin_id: 1 });
    console.log(data);
    // await http
    //   .post("storeTeacher", data)
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
    <div className="modal-body">
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row g-1">
          <div className="col-sm">
            <input
              type="hidden"
              className="form-control form-sm-control border-warning"
              id="floatingInputInvalid"
              placeholder=" "
              ref={register}
              name="teach_id"
              {...register("teach_id", { required: true })}
            />
            <div className="form-floating mb-1 p-0">
              {/* is-valid */}
              <input
                type="text"
                className="form-control form-sm-control border-warning"
                id="floatingInputInvalid"
                placeholder=" "
                ref={register}
                name="teach_name"
                {...register("teach_name", { required: true })}
              />
              <label htmlFor="floatingInputInvalid">Enter Name</label>
              {errors.teach_name && (
                <span className="text-danger float-start small">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="col-sm">
            <div className="form-floating mb-1 p-0">
              <input
                type="email"
                className="form-control form-sm-control border-warning"
                id="floatingInputInvalid"
                placeholder=" "
                name="teach_email"
                {...register("teach_email", {
                  required: true,
                })}
              />
              <label htmlFor="floatingInputInvalid">Enter Email</label>
              {errors.teach_email && (
                <span className="text-danger float-start small">
                  This field is required
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="row g-1">
          <div className="col-sm">
            <div className="form-floating mb-1 p-0">
              <input
                type="text"
                className="form-control form-sm-control border-warning"
                id="floatingInputInvalid"
                placeholder=" "
                name="teach_subject"
                {...register("teach_subject", { required: true })}
              />
              <label htmlFor="floatingInputInvalid">Enter subject</label>
              {errors.teach_subject && (
                <span className="text-danger float-start small">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="col-sm">
            <div className="form-floating mb-1 p-0">
              <input
                type="tel"
                className="form-control form-sm-control border-warning"
                id="floatingInputInvalid"
                placeholder=" "
                name="teach_contact"
                {...register("teach_contact", { required: true })}
              />
              <label htmlFor="floatingInputInvalid">Enter Contact Number</label>
              {errors.teach_contact && (
                <span className="text-danger float-start small">
                  This field is required
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="row g-1">
          <div className="col-sm">
            <div className="form-floating mb-1 p-0">
              <input
                type="text"
                className="form-control form-sm-control border-warning"
                id="floatingInputInvalid"
                placeholder=" "
                name="teach_address"
                {...register("teach_address", { required: true })}
              />
              <label htmlFor="floatingInputInvalid">Address</label>
              {errors.teach_address && (
                <span className="text-danger float-start small">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="col-sm">
            <div className="form-floating mb-1 p-0">
              <input
                type="text"
                className="form-control form-sm-control border-warning"
                id="floatingInputInvalid"
                placeholder=" "
                name="teach_city"
                {...register("teach_city", { required: true })}
              />
              <label htmlFor="floatingInputInvalid">City</label>
              {errors.teach_city && (
                <span className="text-danger float-start small">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="row g-1">
            <div className="col-sm">
              <div className="form-floating mb-1 p-0">
                <select
                  className="form-select border-warning"
                  id="floatingSelect"
                  {...register("gender", { required: true })}
                >
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="other">other</option>
                </select>
                <label htmlFor="floatingSelect">Select Gender</label>
              </div>
            </div>
          </div>
          <div className="row g-1">
            <button type="submit" className="btn btn-sm btn-outline-primary">
              Update teacher
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateTeacher;
