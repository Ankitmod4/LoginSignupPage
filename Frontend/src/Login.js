import react,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  
    const [Email, setemail] = useState(''); 
    const [Password, setpassword] = useState('');
    const navigate = useNavigate();
   
 
        
       
 

    const handleclick = async (e) => {
        e.preventDefault();
         
        try {
           
            let res = await axios.post("https://login-signup-page-lac.vercel.app//Api/v1/Login", {
               Email,  Password  
            });
            
            setemail('');
            setpassword('');
           
            if (res.data.success) { 
            
                
               
                const token = res.data.get.Token;
                const rol = res.data.get.Role;
                console.log(rol);
               
               
                localStorage.setItem('Token', token); 
            localStorage.setItem('Role', rol);  
                localStorage.setItem('email', Email);
                alert("USER Loged IN"); 
                if (!token) {
                    navigate('/login')
                }
                if (rol === 'Admin') {
                    navigate('/Admin');
                }
                else { 
                    navigate('/Student');
                } 
                
                 
            } 
            
            
        } catch (error) {
            console.log("Error during Login:", error);
            alert("Internal Server Error. Please try again later.");
        }
    }
 

        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title text-center mb-4">Login</h3>
                                <form onSubmit={handleclick}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={Email}
                                            onChange={(e) => setemail(e.target.value)}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password:</label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            value={Password}
                                            onChange={(e)=>setpassword(e.target.value)}
                                            className="form-control"
                                            required
                                        /> 
                                    </div>
                             
                                    <button type="submit" className="btn btn-primary btn-block m-2 ">Login</button>
                                    <Link to='/' className='btn btn-danger' >Not a User</Link>
                                 
                                </form>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default Login;
