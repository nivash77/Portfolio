export default function PortfolioSummary() {
  return (
    <section className="section section--paper portfolio-summary" id="summary">
      <div className="frame portfolio-summary__inner">
        <h2 className="h2">Portfolio Summary</h2>
        <p className="lede">
          QA Engineer at AboveCloud9.Ai, specializing in backend automation
          testing with Playwright, API suites, and MCP integrations. Computer
          Science graduate from Sri Shakthi Institute with hands-on experience
          shipping role-based learning platforms, blogs, AI-powered
          applications, and automated test suites.
        </p>
        <div className="portfolio-summary__grid">
          <div className="portfolio-summary__card">
            <h3>Frontend</h3>
            <p>React, Next.js, Tailwind CSS, HTML/CSS</p>
          </div>
          <div className="portfolio-summary__card">
            <h3>Backend</h3>
            <p>Java, Spring Boot, Express.js, Node.js</p>
          </div>
          <div className="portfolio-summary__card">
            <h3>Database</h3>
            <p>MongoDB, MySQL, SQL</p>
          </div>
          <div className="portfolio-summary__card">
            <h3>Tools & Testing</h3>
            <p>Git, GitHub, Postman, Playwright, Appium, MCP</p>
          </div>
        </div>
        <div className="portfolio-summary__highlight">
          <p>
            <strong>Current Focus:</strong> Building reliable backend test
            automation with Playwright, API suites, and MCP integrations as a
            QA Engineer at AboveCloud9.Ai.
          </p>
        </div>
      </div>
    </section>
  );
}