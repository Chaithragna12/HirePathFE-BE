import "../pages/styles.css";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Dream Job Today</h1>

          <p>
            Discover thousands of job opportunities from top companies.
            Save your favourite jobs and track your applications effortlessly.
          </p>

          <div className="search-box">
            <input type="text" placeholder="Job title or keyword" />
            <button>Search Jobs</button>
          </div>
        </div>
      </section>

      {/* Stats */}

      <section className="stats">

        <div className="stat-card">
          <h2>15K+</h2>
          <p>Jobs Available</p>
        </div>

        <div className="stat-card">
          <h2>1200+</h2>
          <p>Companies</p>
        </div>

        <div className="stat-card">
          <h2>30K+</h2>
          <p>Job Seekers</p>
        </div>

      </section>

      {/* Features */}

      <section className="features">

        <h2>Why Choose HirePath?</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>🔍 Smart Search</h3>
            <p>Find jobs using keywords, location and salary filters.</p>
          </div>

          <div className="feature-card">
            <h3>❤️ Save Jobs</h3>
            <p>Bookmark jobs and apply whenever you're ready.</p>
          </div>

          <div className="feature-card">
            <h3>📄 Track Applications</h3>
            <p>Monitor your application status in one place.</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;