import { SpaceMLEntity } from "@/data/entities";
import { Rocket, Building2, Microchip, GraduationCap, Cpu, Eye, BookOpen, Target, Plane, GitBranch } from "lucide-react";

interface Props {
  entity: SpaceMLEntity;
  matchScore?: number;
}

export function EntityCard({ entity, matchScore }: Props) {
  const getIcon = () => {
    switch (entity.entity_type) {
      case "startup": return <Rocket className="w-5 h-5 text-accent-cyan" />;
      case "industry": return <Building2 className="w-5 h-5 text-accent-blue" />;

      case "masters_program": return <GraduationCap className="w-5 h-5 text-accent-rose" />;
      case "professor": return <BookOpen className="w-5 h-5 text-yellow-500" />;
      case "open_source": return <GitBranch className="w-5 h-5 text-green-400" />;
    }
  };

  return (
    <div className={`glass-panel p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full gap-4 relative overflow-hidden ${matchScore && matchScore > 80 ? 'ring-2 ring-yellow-500/50' : ''}`}>
      {matchScore !== undefined && (
        <div className="absolute top-0 right-0 bg-yellow-500/20 text-yellow-400 text-xs font-bold px-3 py-1 rounded-bl-xl border-l border-b border-yellow-500/30 flex items-center gap-1">
          <Target className="w-3 h-3" />
          {matchScore.toFixed(0)}% Match
        </div>
      )}

      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-white mb-1 pr-16">{entity.name}</h3>
          <p className="text-sm text-gray-400">{entity.location}</p>
        </div>
        <div className="p-2 bg-white/5 rounded-lg border border-white/10 shrink-0">
          {getIcon()}
        </div>
      </div>

      <p className="text-sm text-gray-300 leading-relaxed flex-grow">
        {entity.deep_science_description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {entity.technical_tags.map(tag => (
          <span key={tag} className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-md text-gray-300">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-2">
        <div className="flex items-center gap-1.5" title="Hardware Acceleration Score">
          <Cpu className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-semibold text-white">{entity.hardware_score}/10</span>
        </div>
        <div className="flex items-center gap-1.5" title="Computer Vision Pipeline Score">
          <Eye className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-semibold text-white">{entity.vision_score}/10</span>
        </div>
        <div className="flex items-center gap-1.5" title="Aerospace Integration Score">
          <Plane className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-semibold text-white">{entity.aerospace_score}/10</span>
        </div>
        <a  
          href={`/entity/${entity.id}`}
          className="ml-auto text-xs text-accent-blue hover:text-accent-cyan transition-colors"
        >
          View Detailed Profile &rarr;
        </a>
      </div>
    </div>
  );
}
