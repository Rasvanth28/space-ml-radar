export type EntityType = 'startup' | 'industry' | 'masters_program' | 'professor' | 'open_source';

export interface SpaceMLEntity {
  id: string;
  name: string;
  entity_type: EntityType;
  location: string;
  website_url: string;
  hardware_score: number; // 0 to 10
  vision_score: number;   // 0 to 10
  aerospace_score: number; // 0 to 10
  technical_tags: string[];
  deep_science_description: string;
}

export const entitiesData: SpaceMLEntity[] = [
  {
    id: "1",
    name: "Pixxel",
    entity_type: "startup",
    location: "Bengaluru, India & Los Angeles, USA",
    website_url: "https://www.pixxel.space",
    hardware_score: 7,
    vision_score: 10,
    aerospace_score: 9,
    technical_tags: ["Hyperspectral Imaging", "Earth Observation", "Aurora AI Platform"],
    deep_science_description: "Building a constellation of hyperspectral earth imaging satellites and analytical tools to mine insights from that data."
  },
  {
    id: "2",
    name: "BlackSky",
    entity_type: "industry",
    location: "Herndon, Virginia, USA",
    website_url: "https://www.blacksky.com",
    hardware_score: 8,
    vision_score: 9,
    aerospace_score: 10,
    technical_tags: ["Geospatial Intelligence", "Sensor Analytics", "Satellite Operations"],
    deep_science_description: "Provides real-time geospatial intelligence combining high-resolution satellite imagery with AI-driven analytics."
  },
  {
    id: "3",
    name: "Slingshot Aerospace",
    entity_type: "startup",
    location: "El Segundo, California, USA",
    website_url: "https://slingshotaerospace.com",
    hardware_score: 5,
    vision_score: 8,
    aerospace_score: 10,
    technical_tags: ["Space Traffic Coordination", "Orbital Modeling", "AI Satellite Tracking"],
    deep_science_description: "Develops situational awareness technology mapping space objects using AI/ML algorithms to manage orbital traffic and reduce collision risks."
  },
  {
    id: "4",
    name: "USC AI & Machine Learning in Aerospace",
    entity_type: "masters_program",
    location: "Los Angeles, California, USA",
    website_url: "https://viterbigradadmission.usc.edu/",
    hardware_score: 6,
    vision_score: 7,
    aerospace_score: 9,
    technical_tags: ["Computational Modeling", "Robotics", "Controls"],
    deep_science_description: "MS in Aerospace and Mechanical Engineering with a concentration in AI and Machine Learning, equipping engineers with deep computational and robotic skills."
  },
  {
    id: "5",
    name: "Arizona State University (ASU)",
    entity_type: "masters_program",
    location: "Tempe, Arizona, USA",
    website_url: "https://engineering.asu.edu/",
    hardware_score: 5,
    vision_score: 6,
    aerospace_score: 8,
    technical_tags: ["AI Engineering", "Aerospace Systems"],
    deep_science_description: "MS in Artificial Intelligence Engineering with an aerospace concentration, focusing on applied AI in traditional aerospace problems."
  },
  {
    id: "6",
    name: "Lockheed Martin AI Center (LAIC)",
    entity_type: "industry",
    location: "Bethesda, Maryland, USA",
    website_url: "https://www.lockheedmartin.com/en-us/capabilities/artificial-intelligence.html",
    hardware_score: 9,
    vision_score: 8,
    aerospace_score: 10,
    technical_tags: ["Autonomous Systems", "Mission Planning", "Predictive Maintenance"],
    deep_science_description: "Centralized hub infusing ML into aerospace platforms, from onboard AI inference engines to cognitive warfare and drone swarms."
  },
  {
    id: "7",
    name: "University of Stuttgart",
    entity_type: "masters_program",
    location: "Stuttgart, Germany",
    website_url: "https://www.uni-stuttgart.de/",
    hardware_score: 7,
    vision_score: 8,
    aerospace_score: 10,
    technical_tags: ["Smart Spacecraft", "Sustainable Systems"],
    deep_science_description: "Pioneering specialization in Artificial Intelligence for Aerospace Engineering, pushing the bounds on autonomous, secure satellite navigation."
  },
  {
    id: "8",
    name: "SatSure",
    entity_type: "startup",
    location: "Bengaluru, India",
    website_url: "https://www.satsure.co/",
    hardware_score: 4,
    vision_score: 9,
    aerospace_score: 7,
    technical_tags: ["Decision Intelligence", "Satellite Analytics"],
    deep_science_description: "Utilizes deep learning to fuse satellite and ground data for complex geospatial analytics, primarily for climate resilience and agriculture."
  },
  {
    id: "9",
    name: "Honeywell Aerospace",
    entity_type: "industry",
    location: "Phoenix, Arizona, USA",
    website_url: "https://aerospace.honeywell.com/",
    hardware_score: 9,
    vision_score: 5,
    aerospace_score: 10,
    technical_tags: ["Honeywell Forge", "Predictive Maintenance", "Flight Path Optimization"],
    deep_science_description: "Embedding predictive analytics and intelligent algorithms into aircraft and spacecraft systems to maximize operational efficiency."
  },
  {
    id: "10",
    name: "Air Space Intelligence",
    entity_type: "startup",
    location: "San Francisco, California, USA",
    website_url: "https://www.airspace-intelligence.com/",
    hardware_score: 3,
    vision_score: 6,
    aerospace_score: 9,
    technical_tags: ["Air Operations", "Routing Optimization"],
    deep_science_description: "Develops software platforms that apply modern AI/ML to optimize complex flight routing and air traffic control."
  },
  {
    id: "11",
    name: "Prof. Vivienne Sze",
    entity_type: "professor",
    location: "MIT (EECS)",
    website_url: "https://sze.mit.edu/",
    hardware_score: 10,
    vision_score: 8,
    aerospace_score: 6,
    technical_tags: ["Energy-efficient AI", "Hardware Accelerators", "Eyeriss"],
    deep_science_description: "Focuses on co-designing algorithms and hardware for energy-efficient deep learning and computer vision, crucial for edge aerospace applications."
  },
  {
    id: "12",
    name: "Prof. Pulkit Agrawal",
    entity_type: "professor",
    location: "MIT (CSAIL)",
    website_url: "https://people.csail.mit.edu/pulkitag/",
    hardware_score: 4,
    vision_score: 9,
    aerospace_score: 5,
    technical_tags: ["Sensorimotor Learning", "Robotic Vision", "Autonomy"],
    deep_science_description: "Research in deep reinforcement learning and computer vision to enable autonomous robots to operate in complex, unstructured environments."
  },
  {
    id: "13",
    name: "Prof. Mykel Kochenderfer",
    entity_type: "professor",
    location: "Stanford (Aero/Astro)",
    website_url: "https://aeroastro.stanford.edu/people/mykel-kochenderfer",
    hardware_score: 5,
    vision_score: 7,
    aerospace_score: 10,
    technical_tags: ["Decision-Making", "Autonomous Aerospace", "ML"],
    deep_science_description: "Develops advanced decision-making and planning algorithms using machine learning specifically tailored for autonomous aerospace systems and drones."
  },
  {
    id: "14",
    name: "Prof. Priyanka Raina",
    entity_type: "professor",
    location: "Stanford (Accelerate Lab)",
    website_url: "https://accelerate.stanford.edu/",
    hardware_score: 10,
    vision_score: 6,
    aerospace_score: 4,
    technical_tags: ["Domain-specific Architectures", "Edge AI", "VLSI"],
    deep_science_description: "Leads research on designing agile, energy-efficient hardware accelerators for machine learning, optimizing silicon for edge inference."
  },
  {
    id: "15",
    name: "Prof. Luca Benini",
    entity_type: "professor",
    location: "ETH Zurich (D-ITET)",
    website_url: "https://iis.ee.ethz.ch/people/prof-dr-luca-benini.html",
    hardware_score: 9,
    vision_score: 6,
    aerospace_score: 5,
    technical_tags: ["Low-power Design", "Embedded Systems", "IoT"],
    deep_science_description: "World-renowned expert in low-power embedded computing and hardware acceleration for AI, driving compute efficiency in extreme edge environments."
  },
  {
    id: "16",
    name: "Prof. Davide Scaramuzza",
    entity_type: "professor",
    location: "ETH Zurich / UZH",
    website_url: "https://rpg.ifi.uzh.ch/",
    hardware_score: 5,
    vision_score: 10,
    aerospace_score: 8,
    technical_tags: ["Autonomous Drones", "Event Cameras", "Vision-based Navigation"],
    deep_science_description: "Pioneer in autonomous drone navigation using purely onboard computer vision and event-based cameras without reliance on GPS."
  },
  {
    id: "17",
    name: "Prof. Gim Hee Lee",
    entity_type: "professor",
    location: "NUS (School of Computing)",
    website_url: "https://www.comp.nus.edu.sg/~gimhee/",
    hardware_score: 3,
    vision_score: 9,
    aerospace_score: 6,
    technical_tags: ["3D Vision", "Robotic Perception", "SLAM"],
    deep_science_description: "Leads the Computer Vision and Robotic Perception Lab, focusing on 3D scene understanding and robust navigation for autonomous systems."
  },
  {
    id: "18",
    name: "Prof. Trevor E. Carlson",
    entity_type: "professor",
    location: "NUS (ECE)",
    website_url: "https://carlson.dev/",
    hardware_score: 9,
    vision_score: 4,
    aerospace_score: 3,
    technical_tags: ["AI Accelerators", "Secure Computing", "Computer Architecture"],
    deep_science_description: "Focuses on energy-efficient computer architecture, designing novel hardware accelerators to improve the performance of complex AI workloads."
  },
  {
    id: "19",
    name: "Raster Vision",
    entity_type: "open_source",
    location: "Global / GitHub",
    website_url: "https://github.com/azavea/raster-vision",
    hardware_score: 3,
    vision_score: 10,
    aerospace_score: 8,
    technical_tags: ["Satellite Imagery", "PyTorch", "Semantic Segmentation"],
    deep_science_description: "An open-source Python framework built specifically for deep learning on satellite and aerial imagery, enabling end-to-end pipelines for chip classification and semantic segmentation."
  },
  {
    id: "20",
    name: "gym-pybullet-drones",
    entity_type: "open_source",
    location: "Global / GitHub",
    website_url: "https://github.com/utiasDSL/gym-pybullet-drones",
    hardware_score: 8,
    vision_score: 6,
    aerospace_score: 9,
    technical_tags: ["Reinforcement Learning", "UAV Simulation", "PyBullet"],
    deep_science_description: "A popular Gym environment for single and multi-agent reinforcement learning of quadcopter control, utilizing the PyBullet physics engine."
  },
  {
    id: "21",
    name: "NeuralFoil",
    entity_type: "open_source",
    location: "Global / GitHub",
    website_url: "https://github.com/Open-Source-Aerospace/NeuralFoil",
    hardware_score: 2,
    vision_score: 3,
    aerospace_score: 10,
    technical_tags: ["Physics-Informed ML", "Aerodynamics", "Python"],
    deep_science_description: "A physics-informed machine learning tool for rapid airfoil aerodynamics analysis, replacing computationally expensive CFD simulations."
  },
  {
    id: "22",
    name: "TensorAeroSpace",
    entity_type: "open_source",
    location: "Global / GitHub",
    website_url: "https://github.com/tensoraerospace/tensoraerospace",
    hardware_score: 6,
    vision_score: 8,
    aerospace_score: 10,
    technical_tags: ["Deep RL", "Flight Dynamics", "Gymnasium"],
    deep_science_description: "A comprehensive framework built with PyTorch for deep reinforcement learning (SAC, PPO, DDPG) and adaptive control for aerospace vehicles like UAVs and satellites."
  }
];
