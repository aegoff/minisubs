import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

export const LoginForm = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
      mode: "onChange"
  });
  const navigate=useNavigate();
  const [username, setUsername] = useState('')
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    navigate(`/myaccount/${username}`);
  };

  return (
    <>
      <div className="container-fluid">
        <div>
          <div className="bg-white pt-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row d-flex justify-content-center">
                    {/*Grid column*/}
                    <div className="col-xs-12 col-md-8 mb-5 mx-5">
                    {/*Grid row*/}
                        <div className="row mx-auto">
                        {/*Grid column*/}
                            <div className="col-12">
                            
                            <div className="md-form mb-2">
                            
                            <label htmlFor="username">Username:</label>
                            <input name="username" id="username"
                                placeholder="Jondough12" className="form-control"
                                {...register("username", { required: true, maxLength: 30 })}
                                onChange={event => setUsername(event.target.value)}
                                />
                                {errors.name && <p className="text-danger">Please enter a valid username less than 30 characters.</p>}
                            </div>
                            </div>
                            <div className="col-12">
                            <div className="md-form mb-0">
                            <label htmlFor="email">Email:</label>
                            <input className="form-control" name="email" id="email"
                                placeholder="doughjo@hotmail.com"
                                type="email"
                                {...register("email",{required:true, pattern: /^\S+@\S+$/i})}
                            />
                                {errors.email && <p className="text-danger">Please enter a valid email address.</p>}
                            </div>
                            </div>
                        <div className="col-12">
                        <div className="md-form my-2">
                        <label htmlFor="pw">Password:</label><br></br>
                        <input className="form-control" name="pw" id="pw"
                        placeholder="xxxxxxxx"
                        type="password"
                        {...register("pw",{required:true, minLength:5,maxLength: 50})}
                    />
                        {errors.pw && <p className="text-danger">Please enter a password between the length of 5 to 50 characters.</p>}
                        </div>
                        </div>
                    </div>
                    <div className="row mx-auto">
                        <div className="col-12 mx-auto">
                        <div className="md-form my-5 mx-auto text-center">
                        <input type="submit" value="Submit" className='btn btn-info text-whitemb-5'/>
                        </div>
                        </div>
                    </div>
                    <div className="rowmx-auto">
                        <div className="col-12 mx-auto">
                        <div className="md-form mb-2 mx-auto text-center">
                        <span class="bg-white text-gray-500">
                          Or <Link to="signup"> Signup</Link>
                        </span>
                        </div>
                        </div>
                    </div>
                    </div>
              </div>          
            </form>
          </div>
        </div>
      </div>
    </>
  );

};