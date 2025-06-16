import React, { useState } from 'react';
import { Map, Marker, ZoomControl } from 'pigeon-maps';
import Image from 'next/image';
import ItemContainer from '../ui-components/item-container';

export default function BangaloreMap() {
  // Bangalore coordinates
  const [center, setCenter] = useState<[number, number]>([12.9716, 77.5946]);
  const [zoom, setZoom] = useState(11);
  
  // Define popular locations in Bangalore
  const locations: { name: string; position: [number, number] }[] = [
    { name: "HSR Layout", position: [12.9116, 77.6474] },
  ];

  // Custom marker component with location name
  const CustomMarker = ({ color, name }:{color:string; name:string}) => {
    return (
      <div className="flex flex-col items-center">
        <div className={`w-3 h-3 rounded-full ${color}`}></div>
        <div className="text-xs font-semibold whitespace-nowrap mt-1">{name}</div>
      </div>
    );
  };

  // Function to generate color palette for markers
  const getMarkerColor = (index: number) => {
    const colors = [
      "bg-teal-400", "bg-green-400", "bg-blue-400", 
      "bg-indigo-400", "bg-purple-400", "bg-pink-400",
      "bg-red-400", "bg-orange-400"
    ];
    return colors[index % colors.length];
  };
  
  // Custom map style (optional - for visual improvement)
  const customMapStyle = {
    baseUrl: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  };

  return (
    <ItemContainer>
    <div className="w-full h-full relative rounded-xl overflow-hidden shadow-lg group">
      <Map
        center={center}
        zoom={zoom}
        onBoundsChanged={({ center, zoom }) => { 
          setCenter(center);
          setZoom(zoom);
        }}
        twoFingerDrag={false}
        provider={(x, y, z) => {
          const s = "abcd"[Math.floor(Math.random() * 4)];
          return customMapStyle.baseUrl
            .replace('{s}', s)
            .replace('{z}', z.toString())
            .replace('{x}', x.toString())
            .replace('{y}', y.toString())
            .replace('{r}', '');
        }} 
        dprs={[1, 2]} // Support retina displays
      >
        {/* Add zoom controls - positioned at bottom left */}
        <ZoomControl style={{ left: 10, bottom: 10, top: 'auto' }} />
        
        {/* Location markers */}
        {locations.map((location, index) => (
          <Marker 
            key={index}
            width={50}
            anchor={location.position}
            color="transparent"
          >
            <CustomMarker color={getMarkerColor(index)} name={location.name} />
          </Marker>
        ))}
      </Map>
      
      {/* User location marker (centered) */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
        <div className="bg-white w-20 h-20 p-2 rounded-full flex items-center justify-center   shadow-lg group-hover:scale-75 transition-all">
           <Image width={100} height={100} src={'/dp2.png'} alt='dp' className="w-full h-full object-contain"/> 
        </div>
      </div>
      
      {/* Major highways display (simplified visual indicators) */}
      
    </div>
    </ItemContainer>
  );
}