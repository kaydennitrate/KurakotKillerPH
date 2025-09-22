"use client";

import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/components/providers/LanguageProvider';

// Mock data for corruption projects
const corruptionProjects = [
  {
    id: 1,
    name: 'Manila Bay Pump Station',
    lat: 14.5995,
    lng: 120.9842,
    cost: '$100M',
    stolen: '60%',
    status: 'Ghost Project',
    location: 'Metro Manila'
  },
  {
    id: 2,
    name: 'Cebu Flood Wall Project',
    lat: 10.3157,
    lng: 123.8854,
    cost: '$50M',
    stolen: '45%',
    status: 'Substandard',
    location: 'Cebu'
  },
  {
    id: 3,
    name: 'Davao Drainage System',
    lat: 7.1907,
    lng: 125.4553,
    cost: '$75M',
    stolen: '38%',
    status: 'Overpriced',
    location: 'Davao'
  },
  {
    id: 4,
    name: 'Iloilo River Dredging',
    lat: 10.7202,
    lng: 122.5621,
    cost: '$30M',
    stolen: '52%',
    status: 'Ghost Project',
    location: 'Iloilo'
  },
  {
    id: 5,
    name: 'Baguio Landslide Protection',
    lat: 16.4023,
    lng: 120.5960,
    cost: '$25M',
    stolen: '41%',
    status: 'Incomplete',
    location: 'Baguio'
  }
];

export function CorruptionHeatmap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    // Map implementation would go here with Leaflet
    // For now, we'll show a static representation
    const loadMap = async () => {
      if (typeof window !== 'undefined' && mapRef.current) {
        // Dynamic import of Leaflet for client-side only
        try {
          const L = (await import('leaflet')).default;
          
          // Create map
          const map = L.map(mapRef.current).setView([12.8797, 121.7740], 6);
          
          // Add tile layer
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
          }).addTo(map);

          // Add markers for corruption projects
          corruptionProjects.forEach(project => {
            const marker = L.marker([project.lat, project.lng]).addTo(map);
            
            const popupContent = `
              <div class="p-2">
                <h3 class="font-bold text-lg">${project.name}</h3>
                <p class="text-sm text-gray-600 mb-2">${project.location}</p>
                <div class="space-y-1 text-sm">
                  <p><strong>Cost:</strong> ${project.cost}</p>
                  <p><strong>Stolen:</strong> <span class="text-red-600 font-bold">${project.stolen}</span></p>
                  <p><strong>Status:</strong> <span class="text-orange-600">${project.status}</span></p>
                </div>
              </div>
            `;
            
            marker.bindPopup(popupContent);
          });

          return () => {
            map.remove();
          };
        } catch (error) {
          console.error('Error loading map:', error);
        }
      }
    };

    loadMap();
  }, []);

  return (
    <Card className="bg-gray-800 border-red-600">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full corruption-pulse"></div>
          {t('corruption_heatmap')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          ref={mapRef} 
          className="w-full h-96 rounded-lg bg-gray-700 mb-6"
          style={{ minHeight: '400px' }}
        />
        
        {/* Project Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {corruptionProjects.map(project => (
            <div key={project.id} className="bg-gray-700 p-4 rounded-lg border border-gray-600">
              <h4 className="font-semibold text-white mb-2">{project.name}</h4>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">
                  <span className="font-medium">{t('cost')}:</span> {project.cost}
                </p>
                <p className="text-gray-300">
                  <span className="font-medium">{t('stolen')}:</span> 
                  <span className="text-red-400 font-bold ml-1">{project.stolen}</span>
                </p>
                <p className="text-gray-300">
                  <span className="font-medium">{t('status')}:</span> 
                  <span className="text-orange-400 ml-1">{project.status}</span>
                </p>
                <p className="text-gray-400 text-xs">{project.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 p-4 bg-gray-700 rounded-lg">
          <h4 className="font-semibold text-white mb-3">{t('legend')}</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-600 rounded-full"></div>
              <span className="text-gray-300">{t('ghost_project')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-300">{t('overpriced')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-gray-300">{t('substandard')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              <span className="text-gray-300">{t('incomplete')}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}