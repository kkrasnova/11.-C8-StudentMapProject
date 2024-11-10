export const students = [
    {
      id: 1,
      name: "Іван Петренко",
      course: 1,
      faculty: "Комп'ютерні науки",
      coordinates: [30.5234, 50.4501],
      rating: 85,
      group: "КН-11",
      dormitory: true,
      activities: ["Спортивний клуб", "IT Club"]
    },
    {
      id: 2,
      name: "Марія Коваленко",
      course: 2,
      faculty: "Економіка",
      coordinates: [36.2304, 49.9935],
      rating: 92,
      group: "ЕК-21",
      dormitory: false,
      activities: ["Студентська рада", "Дебатний клуб"]
    },
    {
      id: 3,
      name: "Олександр Сидоренко",
      course: 3,
      faculty: "Комп'ютерні науки",
      coordinates: [24.0315, 49.8397],
      rating: 78,
      group: "КН-31",
      dormitory: true,
      activities: ["IT Club"]
    },
    {
      id: 4,
      name: "Юлія Мельник",
      course: 2,
      faculty: "Економіка",
      coordinates: [35.0387, 48.4647],
      rating: 95,
      group: "ЕК-22",
      dormitory: false,
      activities: ["Волонтерський клуб"]
    },
    {
      id: 5,
      name: "Андрій Ковальчук",
      course: 4,
      faculty: "Комп'ютерні науки",
      coordinates: [30.7233, 46.4825],
      rating: 88,
      group: "КН-41",
      dormitory: true,
      activities: ["IT Club", "Спортивний клуб"]
    },
    {
      id: 6,
      name: "Ольга Шевченко",
      course: 1,
      faculty: "Медицина",
      coordinates: [32.0597, 49.4444],
      rating: 91,
      group: "МД-11",
      dormitory: true,
      activities: ["Медичний гурток"]
    },
    {
      id: 7,
      name: "Максим Литвин",
      course: 3,
      faculty: "Медицина",
      coordinates: [28.6487, 50.2649],
      rating: 83,
      group: "МД-31",
      dormitory: true,
      activities: ["Волонтерський клуб", "Медичний гурток"]
    },
    {
      id: 8,
      name: "Наталія Бондар",
      course: 2,
      faculty: "Економіка",
      coordinates: [25.9358, 48.2920],
      rating: 89,
      group: "ЕК-21",
      dormitory: false,
      activities: ["Дебатний клуб"]
    }
  ];
  
  export const faculties = [...new Set(students.map(student => student.faculty))];
  export const courses = [...new Set(students.map(student => student.course))];
  export const activities = [...new Set(students.flatMap(student => student.activities))];
  export const groups = [...new Set(students.map(student => student.group))];