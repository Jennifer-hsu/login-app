import React, { useState } from 'react';

export function useForm() {
    const [values,setValues]=useState({account:"",password:"",rememberMe: false}); //initialValues
    const [errors,setErrors]=useState({account:"",password:""}); //initialErrors

    const saveGet=(obj)=>{
        return JSON.parse(JSON.stringify(obj));
    }
    
    const validation=()=>{
        let errorsObj=saveGet(errors);
        let isValidationSucess=true;

        if (!values.account) { 
            errorsObj.account="請輸入帳號";
            isValidationSucess=false;
        }else{
            errorsObj.account="";
        }

        if (!values.password) { 
            errorsObj.password = "請輸入密碼" 
            isValidationSucess=false;
        }else{
            errorsObj.password="";
        }
              
        setErrors(errorsObj);
        return isValidationSucess;
    }

    const handleChange=(target)=>{     
         let valuesObj=saveGet(values);

         if(target.name === 'rememberMe'){
            valuesObj[target.name]=target.checked;
         }else{
            valuesObj[target.name]=target.value;
         }
         
         setValues(valuesObj);
    }

    const handleSubmit=()=>{
        const isValidationSucess=validation();
        if(!isValidationSucess) return; //by pass 
        console.log(values);      
    }

    return { handleChange, handleSubmit, values, errors }
}