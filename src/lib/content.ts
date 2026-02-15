export const site = {
    name: "Vaibhav Saini",
    headline: "Software and AI engineer",
    subheadline:
      "MS IT (Security) @ ASU • Building secure RAG • AI in Cybersecurity • NLP • Cognitive AI",
    location: "Tempe, AZ (Open to CA/SF/NYC/Remote)",
    email: "vaibhavbadolia@gmail.com",
    phone: "+1 (623) 261-0432",
    links: {
      linkedin: "https://www.linkedin.com/in/vaibhav-saini-050b30324/",
      github: "https://github.com/vaibhav-badoliasoft",
      resume: "/resume.pdf",
    },
    keywords: [
        "Artificial Intelligence",
        "Machine Learning",
        "AI in Cybersecurity",
        "Secure RAG",
        "Retrieval-Augmented Generation",
        "Natural Language Processing",
        "Cognitive AI",
        "Vector Similarity Search",
        "Embeddings (MiniLM)",
        "BM25 vs Dense Retrieval",
        "FastAPI",
        "REST APIs",
        "Python",
        "NumPy",
        "Pandas",
        "NoSQL",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "DynamoDB",
        "Docker",
        "AWS",
        "Azure",
        "Cloud Security",
        "Wireshark"
    ],
  };
  
  export type Project = {
    slug: string;
    title: string;
    subtitle: string;
    oneLiner: string;
    description: string;
    highlights: string[];
    tech: string[];
    links: { label: string; href: string }[];
    sections: { title: string; body: string[] }[];
  };
  
  export const projects: Project[] = [
    {
      slug: "secrag",
      title: "SecRAG",
      subtitle: "Retrieval-Augmented Generation backend over PDFs",
      oneLiner: "Semantic PDF retrieval with traceable chunking + top-k vector search.",
      description:
        "A modular semantic document retrieval system: PDF ingestion, structured chunking with metadata (char offsets, timestamps, source mapping), MiniLM embeddings, and cosine similarity top-k retrieval—built for clean architecture and future grounded generation with citations.",
      highlights: [
        "PDF ingestion + structured chunking for reliable retrieval",
        "Character-based chunking with offsets/timestamps for traceability",
        "384-d normalized MiniLM embeddings for semantic similarity search",
        "Cosine similarity top-k retrieval using dot product for efficiency",
        "Modular backend design ready for grounded generation + citations",
      ],
      tech: ["FastAPI", "Sentence-Transformers", "NumPy", "Vector Similarity Search", "RAG"],
      links: [{ label: "GitHub Repo", href: "https://github.com/vaibhav-badoliasoft/secrag" }],
      sections: [
        {
          title: "Problem",
          body: [
            "Many RAG demos fail because they can’t explain where an answer came from. SecRAG is designed around traceability, so retrieval results can be audited, improved, and defended in interviews.",
          ],
        },
        {
          title: "Architecture",
          body: [
            "Pipeline: Upload PDF → Extract text → Chunk with overlap + metadata → Embed chunks → Persist artifacts → Query embed → Cosine similarity → Return top-k chunks.",
            "Chunk offsets + metadata enable citations, evaluation, and debugging of retrieval quality.",
          ],
        },
        {
          title: "Next improvements",
          body: [
            "Hybrid retrieval (BM25 + dense) + reranking.",
            "Evaluation harness (retrieval metrics + groundedness checks).",
            "Auth + per-user document spaces + encrypted artifact storage.",
          ],
        },
      ],
    },
    {
      slug: "pulsescore",
      title: "PulseScore",
      subtitle: "Real-time AI inference & monitoring system",
      oneLiner: "Monitoring-first ML system: inference API + structured logs + latency tracking.",
      description:
        "PulseScore is a monitoring-oriented AI system focused on production ML engineering: low-latency inference APIs, structured logging, latency measurement, and an architecture designed for model evolution and operational visibility.",
      highlights: [
        "Low-latency inference API for real-time workflows",
        "Structured logging + latency monitoring for observability",
        "Modular serving architecture for model versioning",
        "Analytics foundation to detect degradation patterns",
        "Designed for deployability and reliability",
      ],
      tech: ["Python", "FastAPI", "Observability", "Monitoring Concepts", "ML Deployment"],
      links: [{ label: "GitHub Repo", href: "https://github.com/vaibhav-badoliasoft/pulsescore" }],
      sections: [
        {
          title: "Problem",
          body: [
            "Most ML demos stop at prediction. Real systems need monitoring, logs, latency tracking, and design for change.",
          ],
        },
        {
          title: "Design",
          body: [
            "Serving-first: inference endpoints, structured logs, latency measurement, and clear module boundaries to support future model versioning.",
          ],
        },
        {
          title: "Next improvements",
          body: [
            "Metrics endpoint + dashboards + alerting thresholds.",
            "Replayable evaluation streams for regression testing.",
          ],
        },
      ],
    },
    {
      slug: "secure-investment-platform",
      title: "Secure Investment Platform",
      subtitle: "Full-stack fintech app with RBAC, Docker, and Azure deployment",
      oneLiner: "RBAC-secured fintech system with containerization and cloud deployment.",
      description:
        "A full stack fintech application delivered with a team: Dockerized and deployed on Azure App Services, RBAC for secure transactions, and monitoring/threat detection via Azure Security Center.",
      highlights: [
        "Team delivery with Agile sprint planning",
        "Docker containerization and Azure App Services deployment",
        "RBAC implemented to prevent unauthorized actions",
        "Monitoring and threat detection via Azure Security Center",
        "Production reliability mindset for high request volume",
      ],
      tech: ["Angular", ".NET 8", "Docker", "Azure", "RBAC"],
      links: [],
      sections: [
        {
          title: "Impact",
          body: [
            "Built to be secure and reliable in production environments with strong access control and monitoring.",
          ],
        },
      ],
    },
  ];
  
  export const education = [
    {
      school: "Arizona State University",
      program: "M.S. in Information Technology (Security)",
      when: "Expected May 2026",
      bullets: ["GPA: 3.93"],
    },
    {
      school: "MMDU, Ambala, Haryana, India",
      program: "Bachelors in Computer Science (Data Science)",
      when: "June 2023",
      bullets: ["GPA: 7.62"],
    },
  ];
  
  export const certifications = [
    "AWS Certified Cloud Practitioner (July 2025)",
    "AWS Academy Graduate – Cloud Architecting (April 2025)",
  ];
  
  export const skills = {
    "AI in Cybersecurity": [
      "Secure RAG patterns",
      "Threat modeling for LLM apps",
      "Prompt injection awareness",
      "Grounding + citations",
      "Security-first design",
    ],
    NLP: ["Embeddings", "BM25 vs Dense Retrieval", "Chunking strategies", "Similarity search", "RAG evaluation mindset"],
    "Cognitive AI": ["Connectionism basics", "Learning as adaptation", "Pattern emergence vs rules", "Reasoning framing"],
    "Backend & Systems": ["FastAPI", "API design", "Modular architecture", "Docker basics", "Reliability mindset"],
    "Cloud & DevOps": ["AWS", "Azure", "Docker"], "Coding": ["Python", "Typescript", "React", "Angular"],
    Databases: ["MySQL", "MongoDB", "DynamoDB", "PostgreSQL"],
  };
  