import { useForm } from "./useForm";

function App() {
  const { handleChange, handleSubmit, values, errors } = useForm();

  return (
    <> 
        <input  name="account" onChange={(e)=>handleChange(e.target)} value={values.account} placeholder="Account" /> 
        {errors.account && (<div>{errors.account}</div>)}
        <input name="password" onChange={(e)=>handleChange(e.target)} value={values.password} placeholder="password" /> 
        {errors.password && (<div>{errors.password}</div>)} 
        <label><input type="checkbox" name="rememberMe" onChange={(e)=>handleChange(e.target)} checked={values.rememberMe} />Remember Me</label> 
        <button onClick={()=>handleSubmit()}>Login</button>         
    </> 
  );
}

export default App;
