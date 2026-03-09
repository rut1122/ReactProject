import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form"; // ייבוא ה-Hooks
import { addTaskToProject } from "../store/projectsSlice";

// MUI Core
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  TextField,
  Snackbar,
  Paper,
  Stack,
  FormHelperText,
} from "@mui/material";

// MUI Date Pickers
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const AddTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { projectId } = useParams();

  // הגדרת ה-Form
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // השליחה ל-Redux
    dispatch(
      addTaskToProject({
        projectId: projectId,
        task: {
          ...data,
          id: Date.now().toString(),
          date: data.date ? data.date.format("YYYY-MM-DD") : "",
        },
      }),
    );
    navigate(`/Projects/${projectId}/TasksList`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "#f9f9f9",
        p: 2,
        direction: "rtl",
      }}
    >
      <Paper
        elevation={3}
        sx={{ p: 4, width: "100%", maxWidth: "450px", borderRadius: "16px" }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#b85e5e",
            marginBottom: "25px",
          }}
        >
          הוספת משימה חדשה
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            {/* שדה כותרת */}
            <TextField
              label="כותרת המשימה *"
              fullWidth
              {...register("title", { required: "שדה זה חובה" })}
              error={!!errors.title}
              helperText={errors.title?.message}
            />

            <TextField
              label="תיאור המשימה"
              fullWidth
              multiline
              rows={3}
              {...register("description")}
            />

            {/* שדה סטטוס */}
            <FormControl fullWidth error={!!errors.status}>
              <InputLabel>סטטוס משימה *</InputLabel>
              <Select
                label="סטטוס משימה *"
                {...register("status", { required: "נא לבחור סטטוס" })}
              >
                <MenuItem value="To Do">To Do</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Testing">Testing</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
              </Select>
              {errors.status && (
                <FormHelperText>{errors.status.message}</FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>עדיפות</InputLabel>
              <Select label="עדיפות" {...register("priority")}>
                <MenuItem value="Low">נמוכה</MenuItem>
                <MenuItem value="Medium">בינונית</MenuItem>
                <MenuItem value="High">גבוהה</MenuItem>
              </Select>
            </FormControl>

            <Controller
              name="date"
              control={control}
              render={({ field: { onChange, value, ...field } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="תאריך יעד"
                    {...field}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        // זה הקסם: אומר ל-MUI להזיז את האייקון ימינה
                        InputProps: {
                          sx: {
                            "& .MuiInputAdornment-root": {
                              order: -1, // מעביר את האייקון להתחלה (ימין)
                              marginRight: 0,
                              marginLeft: 1.5,
                            },
                          },
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
              )}
            />

            <Stack direction="row" spacing={2}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ py: 1.5, bgcolor: "#b85e5e" }}
              >
                שמור
              </Button>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => navigate(-1)}
                sx={{ color: "#b85e5e", borderColor: "#b85e5e" }}
              >
                ביטול
              </Button>
            </Stack>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default AddTask;
