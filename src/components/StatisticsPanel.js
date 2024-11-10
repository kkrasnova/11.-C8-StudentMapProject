import React from 'react';
import { 
  Paper, 
  Typography, 
  Grid, 
  Box,
  LinearProgress
} from '@mui/material';
import {
  School,
  Group,
  Stars,
  Home
} from '@mui/icons-material';

const StatisticsPanel = ({ students, selectedFaculty, selectedCourse }) => {
  const filteredStudents = students.filter(student => 
    (!selectedFaculty || student.faculty === selectedFaculty) &&
    (!selectedCourse || student.course === selectedCourse)
  );

  const averageRating = filteredStudents.reduce((acc, student) => acc + student.rating, 0) / filteredStudents.length;
  const dormitoryCount = filteredStudents.filter(student => student.dormitory).length;
  
  const stats = [
    {
      title: "Кількість студентів",
      value: filteredStudents.length,
      icon: <Group sx={{ fontSize: 40, color: 'primary.main' }} />
    },
    {
      title: "Середній рейтинг",
      value: averageRating.toFixed(1),
      icon: <Stars sx={{ fontSize: 40, color: 'primary.main' }} />
    },
    {
      title: "Проживають у гуртожитку",
      value: dormitoryCount,
      icon: <Home sx={{ fontSize: 40, color: 'primary.main' }} />
    },
    {
      title: "Факультетів",
      value: new Set(filteredStudents.map(s => s.faculty)).size,
      icon: <School sx={{ fontSize: 40, color: 'primary.main' }} />
    }
  ];

  return (
    <Paper elevation={3} sx={{ p: 2, mb: 2, borderRadius: 2 }}>
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              textAlign: 'center'
            }}>
              {stat.icon}
              <Typography variant="h4" sx={{ my: 1, fontWeight: 'bold' }}>
                {stat.value}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 3 }}>
        <Typography variant="subtitle2" gutterBottom>
          Загальний прогрес успішності
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={averageRating} 
          sx={{ height: 10, borderRadius: 5 }}
        />
      </Box>
    </Paper>
  );
};

export default StatisticsPanel;