import React from "react";
const Loading = () => {
  return (
    <div className="loading-full-page">
      <div className="loading-full-page-inner">
        <div className="loading-spinner-outer"></div>
        <div className="loading-spinner-inner"></div>
        <div className="loading-logo-glow"></div>
      </div>
      <div className="loading-text">Loading</div>
    </div>
  );
};

export default Loading;
