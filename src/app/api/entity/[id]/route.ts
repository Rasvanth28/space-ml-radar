import { NextResponse } from 'next/server';
import { entitiesData } from "@/data/entities";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  const entity = entitiesData.find(e => e.id === id);
  if (!entity) {
    return NextResponse.json({ error: "Entity not found" }, { status: 404 });
  }

  // NOTE FOR USER: This is where you would integrate Supabase and your 
  // live search API (e.g. SerpApi, Google Custom Search, or Tavily)
  // to fetch the ABSOLUTE LATEST news, papers, and jobs for this entity ID.
  
  // Simulated Live Data Fetching
  const liveData = {
    news: [
      { title: `Latest breakthrough by ${entity.name} in aerospace AI`, date: new Date().toISOString(), url: "#" },
      { title: `Funding and expansion plans announced for 2026`, date: new Date(Date.now() - 86400000).toISOString(), url: "#" }
    ],
    jobs: [
      { role: "Computer Vision Engineer (On-site)", type: "Full-Time", link: "#" },
      { role: "Hardware Acceleration Researcher", type: "PhD / Postdoc", link: "#" },
      { role: "Aerospace Control Systems Lead", type: "Full-Time", link: "#" }
    ],
    research: [
      { title: "Energy-Efficient Neuromorphic Processing for Satellites", year: 2026 },
      { title: "Onboard Object Detection in Low Earth Orbit", year: 2025 }
    ],
    open_source: [
      { name: `${entity.name.replace(/\s+/g, '-').toLowerCase()}/aero-vision`, url: "https://github.com", description: "Open source PyTorch models for aerial and satellite imagery segmentation.", stars: 1250, language: "Python" },
      { name: `${entity.name.replace(/\s+/g, '-').toLowerCase()}/hw-accelerator-sim`, url: "https://github.com", description: "C++ simulator for testing neuromorphic hardware architectures.", stars: 840, language: "C++" }
    ],
    scholarships: [] as Array<{ name: string; type: string; coverage: string; desc: string }>
  };

  // --- SCHOLARSHIP MATCHING ENGINE ---
  const loc = entity.location.toLowerCase();
  
  // Global / External Scholarships for Indians (Added to all international entities)
  const externalScholarships = [
    { name: "Inlaks Shivdasani Foundation", type: "Graduate", coverage: "Up to $100,000", desc: "Merit-based for young Indian students to study at top American and European institutions." },
    { name: "JN Tata Endowment", type: "Graduate", coverage: "Loan Scholarship", desc: "For higher studies abroad. Highly competitive for Indian nationals." }
  ];

  if (loc.includes('usa') || loc.includes('mit') || loc.includes('stanford') || loc.includes('california') || loc.includes('arizona')) {
    liveData.scholarships = [
      { name: "University Financial Aid", type: "Undergrad", coverage: "Need-based up to Full Ride", desc: "MIT and Stanford offer need-based aid for international undergrads. Meet 100% of demonstrated need." },
      { name: "Research/Teaching Assistantships", type: "Graduate", coverage: "Tuition Waiver + Stipend", desc: "Funding provided directly by the department/professor for Master's and PhD students." },
      { name: "Knight-Hennessy Scholars (Stanford)", type: "Graduate", coverage: "Full Tuition + Living Stipend", desc: "Highly competitive, fully-endowed scholarship for graduate study at Stanford." },
      ...externalScholarships
    ];
  } else if (loc.includes('switzerland') || loc.includes('zurich')) {
    liveData.scholarships = [
      { name: "Excellence Scholarship & Opportunity Programme (ESOP)", type: "Masters", coverage: "Full Tuition + Living Costs", desc: "Merit-based for the top 10% of Bachelor's graduates applying to ETH." },
      { name: "ETH-D Scholarship", type: "Masters", coverage: "Partial Stipend + Assistantship", desc: "Merit-based departmental scholarship for ETH Master's programs." },
      { name: "Swiss Government Excellence Scholarships", type: "PhD / Postdoc", coverage: "Monthly Stipend + Fees", desc: "Offered by the Swiss Confederation to international researchers." },
      ...externalScholarships
    ];
  } else if (loc.includes('singapore') || loc.includes('nus')) {
    liveData.scholarships = [
      { name: "Science & Technology Undergraduate Scholarship", type: "Undergrad", coverage: "Full Tuition + Allowances", desc: "Merit-based for Asian students. Includes a 6-year bond with a Singapore-registered company." },
      { name: "NUS Global Merit Scholarship", type: "Undergrad", coverage: "Full Tuition + Allowances", desc: "Highly prestigious award for exceptional international students." },
      { name: "MOE Tuition Grant Scheme", type: "Undergrad / Grad", coverage: "Substantial Fee Subsidy", desc: "Available to international students in exchange for a 3-year service bond in Singapore." },
      ...externalScholarships
    ];
  } else if (loc.includes('india') && !loc.includes('usa')) { // purely Indian
    liveData.scholarships = [
      { name: "KVPY / INSPIRE", type: "Undergrad", coverage: "Annual Stipend", desc: "National fellowship for students pursuing basic sciences and research." },
      { name: "PMRF (Prime Minister's Research Fellows)", type: "PhD", coverage: "High Stipend + Research Grant", desc: "For top students pursuing PhDs in engineering and technology in premier Indian institutes." }
    ];
  } else {
    // Fallback global
    liveData.scholarships = externalScholarships;
  }

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));

  return NextResponse.json(liveData);
}
