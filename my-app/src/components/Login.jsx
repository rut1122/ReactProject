import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/userSlice";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const schema = yup.object({
  userName: yup.string().required("שם משתמש הוא שדה חובה"),
  password: yup.string().min(5, "סיסמה חייבת להיות לפחות 5 תווים").required("חובה להזין סיסמה"),
}).required();

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginError = useSelector((state) => state.user.setLoginerror);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const { control, register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(login({ name: data.userName, password: data.password }));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/Projects");
    }
  }, [isLoggedIn, navigate]);

  return (
    /* הקופסה החיצונית שממרכזת את הכל באמצעות Flexbox */
    <Box sx={{
      width: '100vw',          // תופס את כל רוחב המסך
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '#dc3545',
      bgcolor: '##dc3545'
    }}>
      {/* הכרטיס המרכזי */}
      <Paper elevation={3} sx={{
        p: 4,
        width: '100%',
        maxWidth: 400,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Typography variant="h5" sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold' }}>
          התחברות למערכת
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            {...register("userName")}
            label="שם משתמש"
            variant="outlined"
            sx={{ mb: 2 }}
            error={!!errors.userName}
            helperText={errors.userName?.message}
          />
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <FormControl fullWidth variant="outlined" error={!!error} sx={{ mb: 2 }}>
                <InputLabel>סיסמה</InputLabel>
                <OutlinedInput {...field} type="password" label="סיסמה" />

                {/* כאן הוספתי את הצגת השגיאה של הסיסמה */}
                {error && (
                  <Typography color="error" sx={{ fontSize: '0.#dc3545', mt: 1, ml: 1 }}>
                    {error.message}
                  </Typography>
                )}
              </FormControl>
            )}
          />
          <Button type="submit" variant="contained" fullWidth size="large">
            התחבר
          </Button>

          {loginError && (
            <Typography color="error" sx={{ mt: 2, textAlign: 'center', fontWeight: 'bold' }}>
              שם משתמש או סיסמה שגויים
            </Typography>
          )}
        </form>
      </Paper>
    </Box>
  );
};

export default Login;