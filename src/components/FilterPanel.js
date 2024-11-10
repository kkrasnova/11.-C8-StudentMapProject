import React from 'react';
import { 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Box,
  Paper,
  TextField,
  Chip,
  OutlinedInput
} from '@mui/material';

const FilterPanel = ({ 
  faculties, 
  courses, 
  activities,
  selectedFaculty, 
  selectedCourse,
  selectedActivities,
  onFacultyChange, 
  onCourseChange,
  onActivitiesChange,
  searchQuery,
  onSearchChange
}) => {
  return (
    <Paper elevation={3} sx={{ p: 2, mb: 2, borderRadius: 2 }}>
      <Box sx={{ 
        display: 'flex', 
        gap: 2, 
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <TextField
          label="Пошук студента"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          sx={{ minWidth: 200 }}
        />

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Факультет</InputLabel>
          <Select
            value={selectedFaculty}
            label="Факультет"
            onChange={(e) => onFacultyChange(e.target.value)}
          >
            <MenuItem value="">Всі факультети</MenuItem>
            {faculties.map(faculty => (
              <MenuItem key={faculty} value={faculty}>
                {faculty}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Курс</InputLabel>
          <Select
            value={selectedCourse}
            label="Курс"
            onChange={(e) => onCourseChange(e.target.value)}
          >
            <MenuItem value="">Всі курси</MenuItem>
            {courses.map(course => (
              <MenuItem key={course} value={course}>
                {course} курс
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Активності</InputLabel>
          <Select
            multiple
            value={selectedActivities}
            onChange={(e) => onActivitiesChange(e.target.value)}
            input={<OutlinedInput label="Активності" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {activities.map((activity) => (
              <MenuItem key={activity} value={activity}>
                {activity}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Paper>
  );
};

export default FilterPanel;