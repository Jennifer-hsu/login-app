import { useForm } from "./useForm";

function App() {
  const { handleChange, handleSubmit, values, errors } = useForm()
  return (
    <> 
        <input  name="account" onChange={()=>handleChange('loginAccount')} value={values.account} id='loginAccount' placeholder="Account" /> 
        {errors.account && (<div>{errors.account}</div>)}
        <input name="password" onChange={()=>handleChange('loginPassword')} value={values.password} id='loginPassword' placeholder="password" /> 
        {errors.password && (<div>{errors.password}</div>)} 
        <label><input type="checkbox" name="rememberMe" onChange={()=>handleChange('loginRememberMe')} id='loginRememberMe' checked={values.rememberMe} />Remember Me</label> 
        <button onClick={()=>handleSubmit()}>Login</button> 
    </> 
  );
}

export default App;
