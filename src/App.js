import React, { useState } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import Map from './components/Map';
import FilterPanel from './components/FilterPanel';
import StatisticsPanel from './components/StatisticsPanel';
import { students, faculties, courses, activities } from './data/students';

function App() {
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudents = students.filter(student => {
    const matchesFaculty = !selectedFaculty || student.faculty === selectedFaculty;
    const matchesCourse = !selectedCourse || student.course === selectedCourse;
    const matchesActivities = selectedActivities.length === 0 || 
      selectedActivities.every(activity => student.activities.includes(activity));
    const matchesSearch = !searchQuery || 
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.group.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFaculty && matchesCourse && matchesActivities && matchesSearch;
  });

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: 3, 
            mb: 3, 
            borderRadius: 2,
            backgroundColor: '#1976d2',
            color: 'white'
          }}
        >
          <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom 
            align="center"
            sx={{ fontWeight: 'bold' }}
          >
            Інтерактивна карта студентів
          </Typography>
          <Typography 
            variant="subtitle1" 
            align="center"
            sx={{ opacity: 0.9 }}
          >
            Знаходьте студентів за різними критеріями
          </Typography>
        </Paper>

        <StatisticsPanel 
          students={students}
          selectedFaculty={selectedFaculty}
          selectedCourse={selectedCourse}
        />
        
        <FilterPanel
          faculties={faculties}
          courses={courses}
          activities={activities}
          selectedFaculty={selectedFaculty}
          selectedCourse={selectedCourse}
          selectedActivities={selectedActivities}
          searchQuery={searchQuery}
          onFacultyChange={setSelectedFaculty}
          onCourseChange={setSelectedCourse}
          onActivitiesChange={setSelectedActivities}
          onSearchChange={setSearchQuery}
        />

        <Map
          students={filteredStudents}
          selectedFaculty={selectedFaculty}
          selectedCourse={selectedCourse}
        />
      </Box>
    </Container>
  );
}

export default App;