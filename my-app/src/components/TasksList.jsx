import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import TaskCard from "./TaskCard";
import {  Typography,  Box,Grid, Button,  Paper, Stack,  Container,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";
//הצגת המשימות לפי הסטטוס
const TasksList = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const projects = useSelector((state) => state.projects.list);
  const project = projects.find((p) => String(p.id) === String(projectId));
  const tasks = project?.tasks || [];

  const statuses = [
    { id: "To Do", title: "משימות לביצוע", color: "#d32f2f" },
    { id: "In Progress", title: "בביצוע מפתח", color: "#ed6c02" },
    { id: "Testing", title: "מוכן לבדיקות", color: "#0288d1" },
    { id: "Done", title: "נבדקו", color: "#2e7d32" },
  ];

  if (!project)
    return (
      <>
        <Button
          startIcon={<ArrowForwardIcon sx={{ ml: 1 }} />}
          onClick={() => navigate("/Projects")}
          sx={{
            color: "#b85e5e",
            fontWeight: "bold",
            fontSize: "1.2rem",
            padding: "10px 24px",
            borderRadius: "8px",
          }}
        >
          חזרה
        </Button>
        <Typography sx={{ textAlign: "center", mt: 5 }}>
          טוען פרויקט...
        </Typography>
        ;
      </>
    );
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", pb: 5 }}
    >
      <Box
        sx={{
          width: "100%",
          bgcolor: "white",
          py: 2,
          px: 4,
          mb: 4,
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          direction: "rtl",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
         <Button
          startIcon={<ArrowForwardIcon sx={{ ml: 1 }} />}
          onClick={() => navigate("/Projects")}
          sx={{
            color: "#b85e5e",
            fontWeight: "bold",
            fontSize: "1.2rem",
            padding: "10px 24px",
            borderRadius: "8px",
          }}
        >
          חזרה
        </Button>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#b85e5e" }}
          >
            {project.name}
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon sx={{ ml: 1 }} />}
            onClick={() => navigate(`/Projects/${projectId}/AddTask`)}
            sx={{
              bgcolor: "#b85e5e",
              "&:hover": { bgcolor: "#a34f4f" },
              borderRadius: "20px",
            }}
          >
            משימה חדשה
          </Button>
        </Stack>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap",
          px: 3,
        }}
      >
        {statuses.map((status) => (
          <Paper
            key={status.id}
            elevation={0}
            sx={{
              p: 2,
              bgcolor: "#ebedf0",
              borderRadius: "12px",
              minHeight: "80vh",
              width: "280px",
              minWidth: "280px",
              borderTop: `5px solid ${status.color}`,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
            >
              {status.title}
            </Typography>

            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              {tasks
                .filter((t) => t.status === status.id)
                .map((t) => (
                  <TaskCard key={t.id} task={t} />
                ))}
            </Stack>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default TasksList;
