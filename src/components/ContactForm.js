import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
          mode: "onChange"
      });
      const onSubmit = (data) => {
        alert(JSON.stringify(data));
      };
      return (
        <>
        <div className='container'>
            <div className="row my-5 mx-auto">
                <h3 className="text-center mb-5">
                    <u>Contact Us</u>
                </h3>
                    {/*Section description*/}
                    <p className="text-center w-responsive mx-auto mb-0">
                    Do you have any questions?
                    <br />
                    Please do not hesitate to contact us directly.
                    <br />
                    Our team will come back to you within a matter of hours to help you.
                    </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row d-flex justify-content-center">
                    {/*Grid column*/}
                    <div className="col-md-10 col-lg-8 col-xl-6 mb-5 mx-5">
                    {/*Grid row*/}
                        <div className="row mx-auto">
                        {/*Grid column*/}
                            <div className="col-md-6">
                            
                            <div className="md-form mb-2">
                            
                            <label htmlFor="name">Name:</label>
                            <input name="name" id="name"
                                placeholder="Jon Dough" className="form-control"
                                {...register("name", { required: true, maxLength: 80 })}
                                />
                                {errors.name && <p className="text-danger">Please enter a name less than 80 characters.</p>}
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="md-form mb-0">
                            <label htmlFor="email">Email:</label>
                            <input className="form-control"name="email" id="email"
                                placeholder="doughjo@hotmail.com"
                                type="email"
                                {...register("email",{required:true, pattern: /^\S+@\S+$/i})}
                            />
                                {errors.email && <p className="text-danger">Please enter a valid email address.</p>}
                            </div>
                            </div>
                        </div>
                    <div className="row mx-auto">
                        <div className="col-12">
                        <div className="md-form mb-2">
                        <label htmlFor="subject">Subject:</label><br></br>
                        <input className="form-control" name="subject" id="subject"
                        placeholder="Customer Service"
                        type="text"
                        {...register("subject",{required:true, maxLength: 50})}
                    />
                        {errors.subject && <p className="text-danger">Please enter subject less than 50 characters.</p>}
                        </div>
                        </div>
                    </div>
                    <div className="row mx-auto">
                        <div className="col-12">
                        <div className="md-form mb-0"></div>
                        <label htmlFor='message'>Message:</label><br></br>
                        <textarea id="message" name="message" className="form-control md-textarea" {...register("message", {required: true, minLength: 5, maxLength: 500})} />
                        {errors.message && <p className="text-danger">Please enter a message that is between 5 to 500 characters.</p>}
                        </div>
                        </div>
                    </div>
                    <div className="row mx-auto">
                        <div className="col-12 mx-auto">
                        <div className="md-form mb-5 mx-auto text-center">
                        <input type="submit" value="Send!" className='btn btn-info text-whitemb-5'/>
                        </div>
                        </div>
                    </div>
              </div>          
            </form>
        </div>
        </>
      );
    }