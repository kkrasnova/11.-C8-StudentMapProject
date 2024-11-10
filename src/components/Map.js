import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoia3Jhc25vdmFtYXJpYSIsImEiOiJjbHRxbWVxbmkwMXNqMmlvNjVqZGxqZGxvIn0.Ry0e_yXmHE_oUqYPZvqbhw';

const Map = ({ students, selectedFaculty, selectedCourse }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [31.1656, 48.3794], // Центр України
        zoom: 5.5
      });
    }

    // Очищаємо попередні маркери
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Фільтруємо та додаємо нові маркери
    const filteredStudents = students.filter(student => 
      (!selectedFaculty || student.faculty === selectedFaculty) &&
      (!selectedCourse || student.course === selectedCourse)
    );

    filteredStudents.forEach(student => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.width = '20px';
      el.style.height = '20px';
      el.style.borderRadius = '50%';
      el.style.backgroundColor = student.faculty === "Комп'ютерні науки" ? '#FF0000' : '#00FF00';
      el.style.cursor = 'pointer';

      const marker = new mapboxgl.Marker(el)
        .setLngLat(student.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <h3>${student.name}</h3>
              <p>Факультет: ${student.faculty}</p>
              <p>Курс: ${student.course}</p>
            `)
        )
        .addTo(map.current);

      markersRef.current.push(marker);
    });

    // Анімація появи маркерів
    document.querySelectorAll('.marker').forEach(marker => {
      marker.style.animation = 'markerAppear 0.5s ease-out';
    });

  }, [students, selectedFaculty, selectedCourse]);

  return (
    <div 
      ref={mapContainer} 
      style={{ 
        width: '100%', 
        height: '600px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
    />
  );
};

export default Map;
