import { Link } from 'react-router';
import {
    FileText,
    MessageSquare,
    AlertTriangle,
    Map,
    CheckCircle,
    Zap,
} from 'lucide-react';
import '../../landing/landing.scss';

// ── Data ───────────────────────────────────────────────────────────────────────
const FEATURES = [
    {
        icon: <FileText size={20} />,
        title: 'Resume Analysis',
        desc: 'Deep-dive into your profile to align your experience with job requirements.',
    },
    {
        icon: <MessageSquare size={20} />,
        title: 'AI Interview Questions',
        desc: 'Tailored questions specifically generated for your target role and industry.',
    },
    {
        icon: <AlertTriangle size={20} />,
        title: 'Skill Gap Detection',
        desc: 'Pinpoint exactly where you need to improve before stepping into the interview.',
    },
    {
        icon: <Map size={20} />,
        title: 'Preparation Roadmap',
        desc: 'A step-by-step, personalized guide to help you tackle the role confidently.',
    },
    {
        icon: <CheckCircle size={20} />,
        title: 'ATS Optimisation',
        desc: 'Ensure you pass the automated filters used by top companies.',
    },
    {
        icon: <Zap size={20} />,
        title: 'Instant Insights',
        desc: 'Get actionable feedback in seconds — no waiting, no fluff.',
    },
];

const STEPS = [
    {
        num: '1',
        title: 'Upload Resume',
        desc: 'Securely upload your current resume in PDF or Word format.',
    },
    {
        num: '2',
        title: 'Add Job Description',
        desc: 'Paste the description of the role you are targeting.',
    },
    {
        num: '3',
        title: 'Generate A Report',
        desc: 'Our engine analyses the data to measure the alignment, skill gaps, and key metrics.',
    },
    {
        num: '4',
        title: 'Prepare for Interview',
        desc: 'Follow your personal roadmap and practise with generated questions.',
    },
];

// ── Mockup bar widths (purely decorative) ──────────────────────────────────────
const BAR_WIDTHS = ['82%', '65%', '91%', '54%', '78%'];

// ── Component ──────────────────────────────────────────────────────────────────
const Landing = () => {
    return (
        <div className="landing-root">

            {/* ── Navbar ── */}
            <nav className="lp-nav">
                <Link to="/landing" className="lp-nav__logo">
                    ●&nbsp;<span>Interview</span>AI
                </Link>

                <ul className="lp-nav__links">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="#features">Pricing</a></li>
                    <li><a href="#features">Resources</a></li>
                </ul>

                <div className="lp-nav__actions">
                    <Link to="/login" className="lp-nav__login-btn">
                        Log In
                    </Link>
                    <Link to="/register" className="lp-nav__cta-btn">
                        Get Started
                    </Link>
                </div>
            </nav>

            {/* ── Hero ── */}
            <section className="lp-hero">
                <div className="lp-hero__badge">✦ Elevate Your Game</div>

                <h1 className="lp-hero__headline">
                    AI Interview{' '}
                    <em>Preparation</em>{' '}
                    Platform
                </h1>

                <p className="lp-hero__sub">
                    Upload your resume, analyse job descriptions, and generate custom
                    interview questions. Identify skill gaps and build a winning
                    preparation roadmap with our AI.
                </p>

                <div className="lp-hero__cta-group">
                    <Link to="/register" className="lp-hero__primary-btn">
                        ✦ Get Started
                    </Link>
                    <Link to="/login" className="lp-hero__secondary-btn">
                        Login
                    </Link>
                </div>

                {/* Decorative app mockup */}
                <div className="lp-hero__mockup">
                    <div className="lp-hero__mockup-bar">
                        <span /><span /><span />
                    </div>
                    <div className="lp-hero__mockup-body">
                        {/* Left sidebar skeleton */}
                        <div className="lp-hero__mockup-sidebar">
                            <div className="lp-hero__mockup-item lp-hero__mockup-item--accent" />
                            <div className="lp-hero__mockup-item lp-hero__mockup-item--sm" />
                            <div className="lp-hero__mockup-item lp-hero__mockup-item--md" />
                            <div className="lp-hero__mockup-item lp-hero__mockup-item--lg" />
                            <div className="lp-hero__mockup-item lp-hero__mockup-item--sm" />
                            <div className="lp-hero__mockup-item lp-hero__mockup-item--md" />
                        </div>

                        {/* Right chart skeleton */}
                        <div className="lp-hero__mockup-chart">
                            {BAR_WIDTHS.map((w, i) => (
                                <div key={i} className="lp-hero__mockup-chart-bar">
                                    <div className="bar-track">
                                        <div
                                            className="bar-fill"
                                            style={{ width: w }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Features ── */}
            <section id="features" className="lp-section lp-features">
                <p className="lp-section__eyebrow">What We Offer</p>
                <h2 className="lp-section__title">Elevate Your Performance</h2>
                <p className="lp-section__sub">
                    Our AI engine breaks down exactly what you need to succeed in
                    your next high-stakes interview.
                </p>

                <div className="lp-features__grid">
                    {FEATURES.map((f) => (
                        <div key={f.title} className="lp-feat-card">
                            <div className="lp-feat-card__icon">{f.icon}</div>
                            <h3 className="lp-feat-card__title">{f.title}</h3>
                            <p className="lp-feat-card__desc">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── How It Works ── */}
            <section id="how-it-works" className="lp-section lp-how">
                <p className="lp-section__eyebrow">Simple Process</p>
                <h2 className="lp-section__title">How It Works</h2>
                <p className="lp-section__sub">
                    From resume to interview-ready in four straightforward steps.
                </p>

                <div className="lp-how__steps">
                    {STEPS.map((s) => (
                        <div key={s.num} className="lp-step">
                            <div className="lp-step__num">{s.num}</div>
                            <div className="lp-step__content">
                                <p className="lp-step__title">{s.title}</p>
                                <p className="lp-step__desc">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA Banner ── */}
            <section className="lp-cta-banner">
                <h2 className="lp-cta-banner__title">Ready to Ace Your Interview?</h2>
                <p className="lp-cta-banner__sub">
                    Join thousands of candidates who landed their dream role with
                    InterviewAI.
                </p>
                <Link to="/register" className="lp-cta-banner__btn">
                    ✦ Get Started — It's Free
                </Link>
            </section>

            {/* ── Footer ── */}
            <footer className="lp-footer">
                <div className="lp-footer__top">
                    <div className="lp-footer__brand">
                        <Link to="/landing" className="lp-footer__logo">
                            ●&nbsp;<span>Interview</span>AI
                        </Link>
                        <p className="lp-footer__tagline">
                            Elevate your performance with AI-driven interview preparation.
                        </p>
                    </div>

                    <div>
                        <p className="lp-footer__col-title">Product</p>
                        <ul className="lp-footer__col-links">
                            <li><a href="#features">Features</a></li>
                            <li><a href="#features">Pricing</a></li>
                            <li><a href="#features">Roadmap</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="lp-footer__col-title">Company</p>
                        <ul className="lp-footer__col-links">
                            <li><a href="#features">About Us</a></li>
                            <li><a href="#features">Careers</a></li>
                            <li><a href="#features">Privacy</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="lp-footer__col-title">Support</p>
                        <ul className="lp-footer__col-links">
                            <li><a href="#features">Help Center</a></li>
                            <li><a href="#features">Documentation</a></li>
                            <li><a href="#features">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="lp-footer__bottom">
                    <span className="lp-footer__copy">
                        © 2026 InterviewAI. Elevate your performance with AI-driven insights.
                    </span>
                    <div className="lp-footer__bottom-links">
                        <a href="#features">Terms</a>
                        <a href="#features">Privacy</a>
                        <a href="#features">Cookies</a>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Landing;
