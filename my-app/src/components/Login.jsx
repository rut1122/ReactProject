import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom"; // 1. ייבוא
import AddProject from "./AddProject";
import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/userSlice";

const schema = yup.object({
  userName: yup.string().required("שם משתמש הוא שדה חובה"),
  password: yup.string().min(5, "סיסמה חייבת להיות לפחות 5 תווים").required("חובה להזין סיסמה"),
}).required();

const Login = () => {
  const navigate = useNavigate(); // 2. הגדרה
  const dispatch=useDispatch();
  const isLoggedIn=useSelector((state)=>state.user.isLoggedIn)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
dispatch(login({name:data.userName,password:data.password}))

};
//האזנה לשינוי שמנשתנה סטטוס ההתחברות
useEffect(()=>{
  if(isLoggedIn){
    navigate("/Projects");
  }
},[isLoggedIn, navigate])

  return (
    <div style={{ padding: "20px", direction: "rtl" }}>
      <h2>התחברות למערכת</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>שם משתמש:</label><br />
          <input {...register("userName")} />
          <p style={{ color: "red" }}>{errors.userName?.message}</p>
        </div>

        <div>
          <label>סיסמה:</label><br />
          <input type="password" {...register("password")} />
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>

        {/* ב-Submit לא שמים onClick, ה-handleSubmit מטפל בזה */}
        <button type="submit">התחבר</button>
      </form>
    </div>
  );
};

export default Login;