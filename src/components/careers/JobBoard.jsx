import React, { useState } from "react";
import JobApplicationForm from "./JobApplicationForm";
import "./JobBoard.css";

const JobBoard = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showOpenOnly, setShowOpenOnly] = useState(true);

  const jobs = [
    // Open positions
    {
      id: 1,
      title: "Freelance Graphic Designer",
      company: "Al Thakeel",
      location: "Remote",
      description:
        "Create engaging and on-brand graphics for various digital platforms. Collaborate with marketing and product teams to design promotional materials tailored for e-commerce growth. Proven experience with Adobe Creative Suite and a strong portfolio required.",
      details: [
        "Design promotional materials for digital platforms",
        "Collaborate with marketing and product teams",
        "Focus on e-commerce growth and branding",
        "Proven experience with Adobe Creative Suite",
        "Strong portfolio required",
      ],
      datePosted: "2025-07-01",
      status: "open",
      salary: "Competitive",
    },
    {
      id: 2,
      title: "Digital Marketing Manager",
      company: "Al Thakeel",
      location: "Dubai, UAE",
      description:
        "Lead digital marketing campaigns focused on e-commerce sales growth. Requires 3+ years of experience in digital marketing, including SEO, PPC, email marketing, and social media strategy. Must have proven success managing online ad spend and driving conversion improvements for retail/e-commerce businesses.",
      details: [
        "Lead e-commerce focused digital marketing campaigns",
        "3+ years experience in SEO, PPC, email marketing",
        "Social media strategy and content planning",
        "Manage online ad spend and ROI analysis",
        "Experience in retail/e-commerce preferred",
      ],
      datePosted: "2025-06-25",
      status: "open",
      salary: "AED 8,000 - 10,000",
    },

    // Closed positions
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
    <div style={{ background: "rgb(2, 28, 53)", padding: "25px 0" ,minHeight:"35vh"}}>
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
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-company-location">
                    {job.company} — {job.location}
                  </p>
                  <p className="job-date">Posted: {job.datePosted}</p>
                  <p className="job-description">{job.description}</p>
                </div>
                <div className="job-salary">Salary: {job.salary}</div>

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
                  </h2>
                  <p>
                    <strong>Company:</strong> {selectedJob.company}
                  </p>
                  <p>
                    <strong>Location:</strong> {selectedJob.location}
                  </p>
                  <p className="modal-job-description">{selectedJob.description}</p>

                  <p>
                    <strong>Salary:</strong> {selectedJob.salary}
                  </p>

                  <h3>Key Responsibilities & Requirements:</h3>
                  <ul>
                    {selectedJob.details?.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>

                  {selectedJob.status !== "closed" && (
                    <button
                      className="apply-button"
                      onClick={() => setShowForm(true)}
                    >
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
