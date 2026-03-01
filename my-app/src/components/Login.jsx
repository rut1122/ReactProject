import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom"; // 1. ייבוא
import AddProject from "./AddProject";

const schema = yup.object({
  userName: yup.string().required("שם משתמש הוא שדה חובה"),
  password: yup.string().min(5, "סיסמה חייבת להיות לפחות 5 תווים").required("חובה להזין סיסמה"),
}).required();

const Login = () => {
  const navigate = useNavigate(); // 2. הגדרה
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("התחברת בהצלחה!", data);
    // 3. כאן קורה הקסם - מעבר לדף הפרויקטים
    navigate("/projects"); 
  };

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