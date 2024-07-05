import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
function Signup() {
    const navigate = useNavigate();
    const [Name, setname] = useState('');
    const [Email, setemail] = useState(''); 
    const [Password, setpassword] = useState('');
    const [Role, setrole] = useState('');
    const handleclick = async (e) => {
        e.preventDefault(); 
         
        try {
            let res = await axios.post("http://localhost:8000//Api/v1/Signup", {
                Name, Email, Role, Password
            });
            
            setemail('');
            setname('');
            setpassword('');
            setrole('');
            if (res.data.success) {
                alert("USER CREATED");
                navigate("/login");
            }
        } catch (error) {
            console.log("Error during signup:", error); 
            alert("Internal Server Error. Please try again later.");
        }
        
        
    
    }
 

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Signup Page</h3>
              <form onSubmit={handleclick} >
                <div className="form-group mb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="Name"
                    className="form-control"
                    
                                      value={Name}
                    onChange={(e)=>setname(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email address</label>
                  <input
    type="email"
    className="form-control"
   
    value={Email}
    onChange={(e) => setemail(e.target.value)}
    required 
/>
                </div> 
                <div className="form-group mb-3">
                  <label htmlFor="role">Role</label>
                  <input
                    type="Role"
                    className="form-control"
                    
                                      value={Role}
                    onChange={(e)=>setrole(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Password">Password</label>
                  <input
                    type="Password"
                    className="form-control"
                    
                                      value={Password}
                    onChange={(e)=>setpassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block m-2">Create Account</button>
                <Link to='/login' className='btn btn-danger'>Already A  User</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup ;
