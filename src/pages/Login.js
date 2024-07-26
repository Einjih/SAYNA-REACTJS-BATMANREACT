import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState(''); //décomposition
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = UserAuth();

const onSubmit = async (e) => {
  e.preventDefault();
  setError('');

  try {
    await login(email, password);
    navigate('/compte');
  } catch (e) {
    setError(e.message);
    console.log(e.message);
    
  }

}

  return (
    <>
    <section id='hero'>
    <div className='hero-image'>
<div className="container">

</div>
    </div>
    </section>
    <div className="container formulaire">
        <h2>Connexion</h2>
        <p>
            Vous n'avez pas encore un compte?
            <Link to="/signup">Inscrivez vous ici.</Link>
        </p>
        <div className="form-body">
        
        <form onSubmit={onSubmit}>
<div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
<input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
</div>
<div className="mb-3">
<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
<input value={password}onChange={(e)=> setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
</div>
<div className="mb-3 form-check">
<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
</div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>

        <div className="">{error}</div>

        </div>
    </div>
   
       
    
</>
  )
}

export default Login