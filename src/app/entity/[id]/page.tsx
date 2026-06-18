"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { entitiesData } from "@/data/entities";
import { ArrowLeft, ExternalLink, Briefcase, Newspaper, BookOpen, Activity, GraduationCap, GitBranch } from "lucide-react";

interface LiveData {
  news: Array<{ title: string; date: string; url: string }>;
  jobs: Array<{ role: string; type: string; link: string }>;
  research: Array<{ title: string; year: number }>;
  open_source: Array<{ name: string; url: string; description: string; stars: number; language: string }>;
  scholarships: Array<{ name: string; type: string; coverage: string; desc: string }>;
}

export default function EntityPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  
  const entity = entitiesData.find(e => e.id === id);
  const [liveData, setLiveData] = useState<LiveData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Fetch live intelligence from our API
      fetch(`/api/entity/${id}`, { cache: 'no-store' })
        .then(res => res.json())
        .then(data => {
          setLiveData(data);
          setLoading(false);
        })
        .catch(console.error);
    }
  }, [id]);

  if (!entity) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl text-white mb-4">Entity not found</h1>
        <button onClick={() => router.push('/')} className="text-accent-blue hover:text-accent-cyan">
          &larr; Return to Radar
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent-blue/5 blur-[120px]" />
      </div>

      <button onClick={() => router.push('/')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Radar
      </button>

      <div className="glass-panel p-8 rounded-2xl mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{entity.name}</h1>
            <p className="text-gray-400 text-lg">{entity.location} &bull; <span className="capitalize">{entity.entity_type.replace('_', ' ')}</span></p>
          </div>
          <a href={entity.website_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-white font-medium">
            <ExternalLink className="w-4 h-4" /> Visit Website
          </a>
        </div>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          {entity.deep_science_description}
        </p>

        <div className="flex flex-wrap gap-2">
          {entity.technical_tags.map(tag => (
            <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-gray-300 text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <Activity className="w-8 h-8 text-accent-blue animate-pulse" />
          <p className="text-gray-400 animate-pulse">Aggregating live intelligence...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Opportunities / Jobs */}
          <div className="glass-panel p-6 rounded-2xl md:col-span-1 h-fit">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
              <Briefcase className="w-5 h-5 text-accent-cyan" />
              Open Positions
            </h3>
            <div className="space-y-4">
              {liveData?.jobs.map((job, i) => (
                <div key={i} className="group">
                  <a href={job.link} className="block text-sm text-white font-medium group-hover:text-accent-cyan transition-colors">{job.role}</a>
                  <span className="text-xs text-gray-500">{job.type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Research & News */}
          <div className="md:col-span-2 space-y-6">
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
                <BookOpen className="w-5 h-5 text-accent-purple" />
                Current Research Focus
              </h3>
              <ul className="space-y-3">
                {liveData?.research.map((paper, i) => (
                  <li key={i} className="flex justify-between items-start gap-4">
                    <span className="text-sm text-gray-300">{paper.title}</span>
                    <span className="text-xs text-gray-500 shrink-0">{paper.year}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
                <Newspaper className="w-5 h-5 text-accent-rose" />
                Latest News & Alerts
              </h3>
              <ul className="space-y-4">
                {liveData?.news.map((item, i) => (
                  <li key={i}>
                    <a href={item.url} className="text-sm text-gray-300 hover:text-white transition-colors block mb-1">
                      {item.title}
                    </a>
                    <span className="text-xs text-accent-rose/70">
                      {new Date(item.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Open Source Projects */}
          {liveData?.open_source && liveData.open_source.length > 0 && (
            <div className="md:col-span-3 glass-panel p-6 rounded-2xl border border-white/10 mt-2">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
                <GitBranch className="w-5 h-5 text-gray-300" />
                Open Source (GitHub)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {liveData.open_source.map((repo, i) => (
                  <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group">
                    <a href={repo.url} target="_blank" rel="noreferrer" className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-white text-sm group-hover:text-accent-blue transition-colors flex items-center gap-2">
                        {repo.name}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <span className="text-xs flex items-center gap-1 text-gray-400">
                        ⭐ {repo.stars.toLocaleString()}
                      </span>
                    </a>
                    <p className="text-sm text-gray-400 mb-3">{repo.description}</p>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${repo.language === 'Python' ? 'bg-blue-500' : 'bg-pink-500'}`}></span>
                      <span className="text-xs text-gray-400">{repo.language}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Scholarships */}
          {liveData?.scholarships && liveData.scholarships.length > 0 && (
            <div className="md:col-span-3 glass-panel p-6 rounded-2xl border border-yellow-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
                <GraduationCap className="w-5 h-5 text-yellow-500" />
                Funding & Scholarships (Available for Indian Students)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {liveData.scholarships.map((schol, i) => (
                  <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-white text-sm">{schol.name}</h4>
                      <span className="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded-md whitespace-nowrap ml-2">
                        {schol.type}
                      </span>
                    </div>
                    <p className="text-xs text-accent-cyan font-medium mb-1">{schol.coverage}</p>
                    <p className="text-sm text-gray-400">{schol.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
