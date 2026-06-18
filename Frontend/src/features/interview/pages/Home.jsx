import React from "react";
import "../style/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="intake-analysis-container">
        <div className="intake-header">
          <h1 className="intake-title">Create your Custom Interview Plan</h1>
          <p className="intake-subtitle">
            Provide your Details below to initiate the preparation sequence.
          </p>
        </div>

        <form className="intake-form">
          {/* Resume Upload Section */}
          <div className="form-section">
            <div className="section-header">
              <span className="section-icon">📄</span>
              <label className="section-label">Resume Upload</label>
            </div>
            <div className="upload-area">
              <div className="upload-icon">📁</div>
              <p className="upload-text">Drag and drop your PDF here</p>
              <p className="upload-subtext">or click to browse files</p>
              <input
                type="file"
                id="resume-upload"
                className="file-input"
                accept=".pdf"
                hidden
              />
            </div>
          </div>

          {/* Target Job Description Section */}
          <div className="form-section">
            <div className="section-header">
              <span className="section-icon">🎯</span>
              <label htmlFor="job-description" className="section-label">
                Target Job Description
              </label>
              <span className="section-badge required">Required</span>
            </div>
            <textarea
              id="job-description"
              className="form-textarea"
              placeholder="Paste the full job description or key requirements here..."
              rows="5"
            ></textarea>
          </div>

          {/* Self Description & Context Section */}
          <div className="form-section">
            <div className="section-header">
              <span className="section-icon">👤</span>
              <label htmlFor="self-description" className="section-label">
                Self Description & Context
              </label>
              <span className="section-badge optional">Optional</span>
            </div>
            <textarea
              id="self-description"
              className="form-textarea"
              placeholder="Highlight specific experiences, gaps you want to address, or areas of focus..."
              rows="5"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="analyze-button">
            ✨ Analyze and Prepare
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;






