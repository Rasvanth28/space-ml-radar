"use client";

import { SpaceMLEntity } from "@/data/entities";
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ZAxis, Cell } from "recharts";

interface Props {
  data: SpaceMLEntity[];
  myInterest?: { hardware_score: number; vision_score: number; aerospace_score: number; enabled: boolean };
}

export function ScatterPlot({ data, myInterest }: Props) {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const entity = payload[0].payload as SpaceMLEntity;
      return (
        <div className="glass-panel p-4 rounded-lg shadow-xl max-w-xs border border-white/20">
          <h4 className="font-bold text-white mb-1">{entity.name}</h4>
          <p className="text-xs text-gray-400 mb-2 capitalize">{(entity.entity_type as string) === 'my_interest' ? 'My Interest' : entity.entity_type.replace('_', ' ')}</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-gray-400">HW:</span>
              <span className="text-white ml-1 font-semibold">{entity.hardware_score}</span>
            </div>
            <div>
              <span className="text-gray-400">CV:</span>
              <span className="text-white ml-1 font-semibold">{entity.vision_score}</span>
            </div>
            <div className="col-span-2">
              <span className="text-gray-400">Aero:</span>
              <span className="text-white ml-1 font-semibold">{entity.aerospace_score}</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'startup': return '#06b6d4'; // cyan
      case 'industry': return '#3b82f6'; // blue
      case 'lab': return '#8b5cf6'; // purple
      case 'masters_program': return '#f43f5e'; // rose
      case 'professor': return '#eab308'; // yellow
      case 'my_interest': return '#ffffff'; // white
      default: return '#ffffff';
    }
  };

  const plotData = [...data];
  if (myInterest?.enabled) {
    plotData.push({
      id: "my_interest",
      name: "My Target Interest",
      entity_type: "my_interest" as any,
      location: "",
      website_url: "",
      hardware_score: myInterest.hardware_score,
      vision_score: myInterest.vision_score,
      aerospace_score: myInterest.aerospace_score,
      technical_tags: [],
      deep_science_description: ""
    });
  }

  return (
    <div className="glass-panel p-6 rounded-2xl h-[500px] w-full flex flex-col">
      <h3 className="text-xl font-bold text-white mb-6">Radar Analysis: Hardware vs. Vision</h3>
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              type="number" 
              dataKey="hardware_score" 
              name="Hardware Score" 
              domain={[0, 10]} 
              tick={{ fill: '#9ca3af' }}
              label={{ value: 'Hardware Acceleration (0-10)', position: 'insideBottom', offset: -10, fill: '#9ca3af' }}
            />
            <YAxis 
              type="number" 
              dataKey="vision_score" 
              name="Vision Score" 
              domain={[0, 10]} 
              tick={{ fill: '#9ca3af' }}
              label={{ value: 'CV Pipelines (0-10)', angle: -90, position: 'insideLeft', fill: '#9ca3af' }}
            />
            <ZAxis dataKey="aerospace_score" type="number" range={[60, 400]} name="Aerospace Score" />
            <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={plotData} animationDuration={1000}>
              {plotData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getColor(entry.entity_type)} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
