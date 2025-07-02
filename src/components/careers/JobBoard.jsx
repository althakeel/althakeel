import React, { useState } from "react";
import JobApplicationForm from "./JobApplicationForm";
import "./JobBoard.css";

const JobBoard = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showOpenOnly, setShowOpenOnly] = useState(true);

  const jobs = [
   

  {
    id: 1,
    title: "Graphic Designer – Remote",
    company: "Al Thakeel",
    location: "Remote",
    description:
      "We are looking for a creative and detail-oriented Graphic Designer with strong expertise in creating infographics, A+ content, and marketplace-ready assets for ecommerce platforms such as Amazon and Noon. The ideal candidate should possess a deep understanding of marketplace visual standards and consumer psychology, along with the ability to produce engaging motion graphics and infographic videos to elevate product listings and brand marketing efforts.",
    details: [
      "Design high-quality infographics, banners, and A+ content optimized for Amazon, Noon, and other ecommerce platforms",
      "Collaborate with the product and marketing teams to translate product features and benefits into compelling visuals",
      "Develop motion graphics and short videos to enhance product listings and advertisements",
      "Ensure all designs meet the technical specifications and brand consistency required by each marketplace",
      "Stay updated with ecommerce trends, design standards, and platform-specific updates",
      "Handle design tasks for multiple brands and product categories",
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, After Effects, Premiere Pro)",
      "Experience with motion graphics, animations, and infographic-style video content",
      "Understanding of Amazon & Noon marketplace image/video specs and design guidelines",
      "Portfolio showcasing relevant design work is required",
    ],
    datePosted: "2025-07-01",
    status: "open",
    salary: "Competitive",
         urgent: true,
  },
  {
    id: 2,
    title: "Retail & eCommerce Marketing Manager – UAE Region",
    company: "Al Thakeel",
    location: "Dubai, UAE",
    description:
      "We are seeking a dynamic and results-driven Retail & eCommerce Marketing Manager to lead the development and execution of integrated marketing strategies across both offline and online channels in the UAE region. The ideal candidate will have a proven track record in scaling retail and digital-first brands, with strong knowledge of the UAE market landscape, consumer behavior, and brand positioning.",
    details: [
      "Develop and implement 360° marketing strategies for retail and ecommerce channels aligned with brand and business objectives",
      "Plan and manage PR campaigns, brand launches, and storytelling initiatives to drive media exposure and relevance",
      "Establish and manage strategic partnerships with local retailers, distributors, and brand collaborators",
      "Represent the brand at trade fairs, exhibitions, and industry events to build networks and growth opportunities",
      "Oversee in-store branding, activation campaigns, and retail merchandising strategies",
      "Drive digital marketing initiatives including SEO, social media strategy, influencer collaborations, email campaigns, and paid ads",
      "Analyze market trends, competitor positioning, and customer insights to refine strategies and identify new growth areas",
      "Manage marketing budgets, track campaign performance, and report ROI-driven outcomes",
      "Coordinate with creative, product, commercial, and logistics teams to ensure consistency across all touchpoints",
      "Lead internal marketing teams and external agencies to ensure timely and impactful campaign execution",
      "6–8 years of experience in brand building, retail, and ecommerce marketing",
      "At least 5 years of experience in the UAE/GCC market with deep understanding of consumer trends",
      "Strong expertise in launching new brands or products through integrated marketing strategies",
      "Well-connected within the UAE’s retail ecosystem, preferably in fashion, beauty, lifestyle, or FMCG",
      "Bachelor’s degree in Marketing or a related field (MBA is a plus)",
      "Bilingual proficiency (English required; Arabic is a plus)",
    ],
    datePosted: "2025-07-02",
    status: "open",
     urgent: true,
    // salary: "AED 18,000 - 22,000",
  },

     {
    id: 5,
    title: "Sales Executive",
    company: "Al Thakeel",
    location: "Dubai, UAE",
    description:
      "Drive sales growth by identifying new business opportunities and managing client relationships. Requires excellent communication skills and a track record of meeting sales targets within retail or e-commerce sectors.",
    details: [
      "Identify and pursue new sales opportunities in retail and ecommerce",
      "Build and maintain strong client relationships",
      "Achieve or exceed monthly and quarterly sales targets",
      "Prepare sales reports and forecasts for management",
      "Coordinate with marketing and product teams to align on sales strategies",
      "Excellent negotiation and closing skills required",
      "Prior experience in retail or ecommerce sales preferred",
    ],
    datePosted: "2025-07-01",
    status: "open",
    salary: "AED 10,000 - 14,000 + Commission",
  },
  {
    id: 6,
    title: "Accountant",
    company: "Al Thakeel",
    location: "Dubai, UAE",
    description:
      "Manage financial records, prepare reports, and ensure compliance with UAE accounting standards. Minimum 3 years experience in accounting, preferably within retail or e-commerce companies.",
    details: [
      "Prepare and maintain financial statements and reports",
      "Manage accounts payable and receivable",
      "Ensure compliance with local tax laws and accounting regulations",
      "Coordinate audits and financial reviews",
      "Work with cross-functional teams to manage budgets",
      "Proficiency in accounting software such as QuickBooks or Tally",
      "3+ years accounting experience, preferably in retail/ecommerce",
    ],
    datePosted: "2025-07-02",
    status: "open",
    salary: "AED 8,000 - 12,000",
  },
  {
    id: 7,
    title: "Content Writer",
    company: "Al Thakeel",
    location: "Remote",
    description:
      "Create compelling and SEO-optimized content for ecommerce websites, product descriptions, blogs, and marketing materials. Strong command of English with 3+ years writing experience required.",
    details: [
      "Write clear, engaging product descriptions and ecommerce content",
      "Produce SEO-friendly blog posts and marketing copy",
      "Collaborate with marketing and design teams on campaigns",
      "Research industry-related topics to generate new content ideas",
      "Edit and proofread content to ensure high quality and consistency",
      "Experience with SEO tools and content management systems (CMS)",
      "3+ years of professional writing experience",
    ],
    datePosted: "2025-07-02",
    status: "open",
    salary: "Competitive",
  },

  // CLOSED JOBS

  {
    id: 3,
    title: "IT Manager",
    company: "Al Thakeel",
    location: "Dubai, UAE",
    description:
      "Oversee the IT infrastructure and security of the company. 5+ years experience required, preferably with e-commerce platforms and cloud solutions. Lead a team of IT professionals to maintain uptime and implement technology improvements.",
    details: [
      "Manage company IT infrastructure and security",
      "5+ years experience with e-commerce platforms",
      "Lead IT team and coordinate cloud solutions",
      "Ensure system uptime and maintenance",
    ],
    datePosted: "2025-05-15",
    status: "closed",
    salary: "AED 20,000 - 25,000",
  },
  {
    id: 4,
    title: "Graphic Designer",
    company: "Al Thakeel",
    location: "Dubai, UAE",
    description:
      "Develop creative visuals supporting marketing and product teams, with a strong focus on e-commerce campaigns. 2+ years of experience in graphic design for retail/e-commerce is a must. Proficiency in Adobe Photoshop, Illustrator, and InDesign required.",
    details: [
      "Design creative visuals for marketing and product teams",
      "Focus on e-commerce promotional campaigns",
      "2+ years experience in retail/e-commerce design",
      "Proficiency with Adobe Photoshop, Illustrator, InDesign",
    ],
    datePosted: "2025-04-30",
    status: "closed",
    salary: "Not disclosed",
  },
  {
    id: 8,
    title: "Customer Service Representative",
    company: "Al Thakeel",
    location: "Dubai, UAE",
    description:
      "Provide excellent customer support across multiple channels. Minimum 2 years customer service experience required.",
    details: [
      "Respond promptly to customer inquiries",
      "Resolve customer complaints professionally",
      "Maintain detailed records of customer interactions",
      "Coordinate with logistics and sales teams",
    ],
    datePosted: "2025-03-20",
    status: "closed",
    salary: "AED 4,000 - 6,000",
  },
  {
    id: 9,
    title: "Warehouse Supervisor",
    company: "Al Thakeel",
    location: "Dubai, UAE",
    description:
      "Supervise warehouse operations ensuring efficiency and accuracy. 3+ years experience in warehouse management required.",
    details: [
      "Oversee inventory management and stock control",
      "Manage warehouse staff and schedules",
      "Ensure safety and compliance protocols",
      "Coordinate with logistics for timely dispatch",
    ],
    datePosted: "2025-02-10",
    status: "closed",
    salary: "AED 7,000 - 9,000",
  }
  ];

  const filteredJobs = jobs.filter((job) =>
    showOpenOnly ? job.status === "open" : job.status === "closed"
  );

  const openApplyForm = (job) => {
    setSelectedJob(job);
    setShowForm(true);
  };

  const openJobDetails = (job) => {
    setSelectedJob(job);
    setShowForm(false);
  };

  return (
    <div style={{ background: "rgb(2, 28, 53)", padding: "25px 0", minHeight: "35vh" }}>
      <div className="job-board-container">
        <header className="job-board-header">
          <div
            className={`toggle-tab ${showOpenOnly ? "active" : ""}`}
            onClick={() => setShowOpenOnly(true)}
            aria-label="Show open vacancies"
          >
            Open Vacancies ({jobs.filter((j) => j.status === "open").length})
          </div>
          <div
            className={`toggle-tab ${!showOpenOnly ? "active" : ""}`}
            onClick={() => setShowOpenOnly(false)}
            aria-label="Show closed vacancies"
          >
            Closed Vacancies ({jobs.filter((j) => j.status === "closed").length})
          </div>
        </header>

        <main className="jobs-grid">
          {filteredJobs.length === 0 && (
            <p className="no-jobs-message">
              {showOpenOnly
                ? "No open vacancies at the moment."
                : "No closed vacancies to show."}
            </p>
          )}

          {filteredJobs.map((job) => {
            const isClosed = job.status === "closed";
            return (
              <article
                key={job.id}
                className={`job-card ${isClosed ? "closed-job" : "open-job"}`}
                tabIndex={0}
                aria-label={`${job.title} at ${job.company}`}
              >
                <div className="job-info">
                  <h3 className="job-title">
                    {job.title}
                    {job.urgent && (
                      <span className="urgent-badge" aria-label="Urgent job">
                        Urgent
                      </span>
                    )}
                  </h3>
                  <p className="job-company-location">
                    {job.company} — {job.location}
                  </p>
                  <p className="job-date">Posted: {job.datePosted}</p>
<p className="job-description" style={{ fontFamily: 'Montserrat, sans-serif' }}>
  {job.description}
</p>
                </div>

                {!isClosed && (
                  <div className="job-buttons">
                    <button
                      className="apply-now-button"
                      onClick={() => openApplyForm(job)}
                      aria-label={`Apply now for ${job.title}`}
                    >
                      Apply Now
                    </button>
                    <button
                      className="know-more-button"
                      onClick={() => openJobDetails(job)}
                      aria-label={`Know more about ${job.title}`}
                    >
                      Job Details
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </main>

        {/* Modal */}
        {selectedJob && (
          <div
            className="modal-overlay"
            onClick={() => {
              setSelectedJob(null);
              setShowForm(false);
            }}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <button
                className="modal-close-button"
                onClick={() => {
                  setSelectedJob(null);
                  setShowForm(false);
                }}
                aria-label="Close job details"
              >
                &times;
              </button>

              {showForm ? (
                <JobApplicationForm
                  onClose={() => {
                    setShowForm(false);
                    setSelectedJob(null);
                  }}
                  jobTitle={selectedJob.title}
                />
              ) : (
                <>
                  <h2 id="modal-title" className="modal-job-title">
                    {selectedJob.title}
                    {selectedJob.urgent && (
                      <span className="urgent-badge" aria-label="Urgent job">
                        Urgent
                      </span>
                    )}
                  </h2>
                  <p>
                    <strong>Company:</strong> {selectedJob.company}
                  </p>
                  <p>
                    <strong>Location:</strong> {selectedJob.location}
                  </p>
                  <p className="modal-job-description">{selectedJob.description}</p>

                  <h3>Key Responsibilities & Requirements:</h3>
                  <ul>
                    {selectedJob.details?.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>

                  {selectedJob.status !== "closed" && (
                    <button className="apply-button" onClick={() => setShowForm(true)}>
                      Apply Now
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobBoard;
