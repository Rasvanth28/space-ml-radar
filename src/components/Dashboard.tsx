"use client";

import { useState } from "react";
import { entitiesData, EntityType, SpaceMLEntity } from "@/data/entities";
import { EntityCard } from "./EntityCard";
import { ScatterPlot } from "./ScatterPlot";
import { Search, Filter, Target } from "lucide-react";

export function Dashboard() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<EntityType | "all">("all");
  
  // Interest Matcher State
  const [interestEnabled, setInterestEnabled] = useState(false);
  const [targetHardware, setTargetHardware] = useState(5);
  const [targetVision, setTargetVision] = useState(5);
  const [targetAerospace, setTargetAerospace] = useState(5);

  const calculateMatchScore = (entity: SpaceMLEntity) => {
    const dist = Math.sqrt(
      Math.pow(entity.hardware_score - targetHardware, 2) + 
      Math.pow(entity.vision_score - targetVision, 2) +
      Math.pow(entity.aerospace_score - targetAerospace, 2)
    );
    // Max possible distance in a 10x10x10 grid is sqrt(300) ~ 17.32
    const maxDist = 17.32;
    return Math.max(0, 100 * (1 - dist / maxDist));
  };

  const processedData = entitiesData
    .filter(entity => {
      const matchesSearch = 
        entity.name.toLowerCase().includes(search.toLowerCase()) || 
        entity.technical_tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
      const matchesType = activeFilter === "all" || entity.entity_type === activeFilter;
      return matchesSearch && matchesType;
    })
    .map(entity => ({
      ...entity,
      matchScore: interestEnabled ? calculateMatchScore(entity) : undefined
    }))
    .sort((a, b) => {
      if (interestEnabled && a.matchScore !== undefined && b.matchScore !== undefined) {
        return b.matchScore - a.matchScore; // Sort by highest match score
      }
      return 0; // Keep default order if not matching
    });

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-accent-rose mb-4">
            Edge-Space-ML Radar
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            A specialized directory tracking the intersection of Space and Machine Learning, focusing on Low-Level Hardware Acceleration and Computer Vision Pipelines.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <ScatterPlot 
            data={processedData} 
            myInterest={{
              hardware_score: targetHardware,
              vision_score: targetVision,
              aerospace_score: targetAerospace,
              enabled: interestEnabled
            }}
          />
        </div>

        <div className="glass-panel p-6 rounded-2xl flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Filter className="w-5 h-5 text-accent-purple" />
              Controls
            </h3>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search entities or tags..." 
                className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-400 mb-3 font-medium">Filter by Type</p>
            <div className="flex flex-wrap gap-2">
              {(["all", "startup", "industry", "masters_program", "professor", "open_source"] as const).map(type => (
                <button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className={`px-3 py-1.5 rounded-md text-sm transition-all capitalize ${
                    activeFilter === type 
                      ? 'bg-white/20 text-white border-white/30' 
                      : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-gray-200'
                  } border`}
                >
                  {type.replace('_', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Interest Matcher Block */}
          <div className="p-4 bg-white/5 border border-white/10 rounded-xl mt-2">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-white flex items-center gap-2 text-sm">
                <Target className="w-4 h-4 text-yellow-500" />
                My Interest Matcher
              </h4>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={interestEnabled} onChange={() => setInterestEnabled(!interestEnabled)} />
                <div className="w-9 h-5 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-yellow-500"></div>
              </label>
            </div>
            
            {interestEnabled && (
              <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Target Hardware Score</span>
                    <span className="font-bold text-white">{targetHardware}</span>
                  </div>
                  <input type="range" min="0" max="10" step="1" value={targetHardware} onChange={e => setTargetHardware(parseInt(e.target.value))} className="w-full accent-yellow-500" />
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Target Vision Score</span>
                    <span className="font-bold text-white">{targetVision}</span>
                  </div>
                  <input type="range" min="0" max="10" step="1" value={targetVision} onChange={e => setTargetVision(parseInt(e.target.value))} className="w-full accent-yellow-500" />
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Target Aerospace Score</span>
                    <span className="font-bold text-white">{targetAerospace}</span>
                  </div>
                  <input type="range" min="0" max="10" step="1" value={targetAerospace} onChange={e => setTargetAerospace(parseInt(e.target.value))} className="w-full accent-yellow-500" />
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-auto pt-6 border-t border-white/10">
            <div className="flex justify-between items-center text-sm text-gray-400">
              <span>Showing {processedData.length} results</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {processedData.map(entity => (
          <EntityCard key={entity.id} entity={entity} matchScore={entity.matchScore} />
        ))}
        {processedData.length === 0 && (
          <div className="col-span-full py-20 text-center text-gray-500">
            No entities match your search criteria.
          </div>
        )}
      </div>
    </div>
  );
}
