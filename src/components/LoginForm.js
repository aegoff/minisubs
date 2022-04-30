import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from '../axios/axios';

export const LoginForm = ({}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail]=useState();
  const [pw, setPw]=useState();
  const navigate=useNavigate();
  let [auth, setAuth]=useState();
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          'https://fakestoreapi.com/users',
        );
        const realUser=data.filter(user=>user.username===username);
        if (realUser.length===0 ){
          setAuth(false);
        }
        else {
          setAuth(true);
          console.log(`User ${username} has been verified`)
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchUser()
  });
  
  
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
      mode: "onChange"
  });
  
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    if (auth){
      navigate(`/myaccount/${username}`)
    }
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
                                type="email" value={email} onChange={(event)=>setEmail(event.target.value)}
                                {...register("email",{required:true, pattern: /^\S+@\S+$/i})}
                            />
                                {errors.email && <p className="text-danger">Please enter a valid email address.</p>}
                            </div>
                            </div>
                        <div className="col-12">
                        <div className="md-form my-2">
                        <label htmlFor="pw">Password:</label><br></br>
                        <input className="form-control" name="pw" id="pw"
                        placeholder="xxxxxxxx" value={pw} onChange={(event)=>setPw(event.target.value)}
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