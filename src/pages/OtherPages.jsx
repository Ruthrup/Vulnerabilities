
import {
    Shield,
    LayoutDashboard,
    Package,
    Bug,
    FileText,
    Settings,
    CircleHelp,
    Bell,
    Search,
    ShieldCheck,
    AlertTriangle,
    Activity
} from "lucide-react";

import "./OtherPages.css";

const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Dependencies", path: "/dependencies", icon: Package },
    { name: "Vulnerabilities", path: "/vulnerabilities", icon: Bug },
    { name: "Reports", path: "/reports", icon: FileText },
    { name: "Settings", path: "/settings", icon: Settings },
    { name: "Help Center", path: "/help", icon: CircleHelp }
];

function PageLayout({ title, description, children, active }) {
    return (
        <div className="other-dashboard">
            <aside className="other-sidebar">
                <div className="other-brand">
                    <div className="other-brand-icon">
                        <Shield size={23} />
                    </div>
                    <div>
                        <h2>DepShield</h2>
                        <span>Security Platform</span>
                    </div>
                </div>

                <p className="other-menu-title">MAIN MENU</p>

                <nav className="other-navigation">
                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <a
                                key={item.path}
                                href={item.path}
                                className={active === item.name ? "other-active" : ""}
                            >
                                <Icon size={19} />
                                {item.name}
                            </a>
                        );
                    })}
                </nav>

                <div className="other-user">
                    <div className="other-avatar">R</div>
                    <div>
                        <strong>Project Team</strong>
                        <span>Security Analyst</span>
                    </div>
                </div>
            </aside>

            <main className="other-main">
                <header className="other-topbar">
                    <span>Security / {title}</span>
                    <div className="other-top-avatar">PT</div>
                </header>

                <div className="other-content">
                    <div className="other-heading">
                        <span>SECURITY MANAGEMENT</span>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>

                    {children}
                </div>
            </main>
        </div>
    );
}

export function DashboardPage() {
    return (
        <PageLayout
            title="Dashboard"
            description="Welcome to your open-source security dashboard."
            active="Dashboard"
        >
            <div className="other-card-grid">
                <div className="other-card">
                    <Activity />
                    <p>Total Findings</p>
                    <h2>6</h2>
                </div>

                <div className="other-card">
                    <AlertTriangle className="danger-icon" />
                    <p>Critical Issues</p>
                    <h2>1</h2>
                </div>

                <div className="other-card">
                    <Package />
                    <p>Dependencies</p>
                    <h2>24</h2>
                </div>

                <div className="other-card">
                    <ShieldCheck className="safe-icon" />
                    <p>Security Status</p>
                    <h2>Monitor</h2>
                </div>
            </div>

            <div className="other-panel">
                <h2>Welcome to DepShield</h2>
                <p>
                    Use this dashboard to review dependencies, find security
                    problems and manage your project reports.
                </p>
                <a href="/vulnerabilities">View Vulnerabilities</a>
            </div>
        </PageLayout>
    );
}

export function DependenciesPage() {
    return (
        <PageLayout
            title="Dependencies"
            description="View and manage the packages used in your project."
            active="Dependencies"
        >
            <div className="other-panel">
                <div className="other-panel-heading">
                    <h2>Project Dependencies</h2>
                    <span>Sample data</span>
                </div>

                <div className="dependency-row">
                    <div>
                        <strong>React</strong>
                        <span>Frontend library</span>
                    </div>
                    <span className="dependency-version">19.0.0</span>
                    <span className="safe-label">Healthy</span>
                </div>

                <div className="dependency-row">
                    <div>
                        <strong>Axios</strong>
                        <span>HTTP client</span>
                    </div>
                    <span className="dependency-version">1.5.0</span>
                    <span className="warning-label">Review</span>
                </div>

                <div className="dependency-row">
                    <div>
                        <strong>Vite</strong>
                        <span>Build tool</span>
                    </div>
                    <span className="dependency-version">6.0.0</span>
                    <span className="safe-label">Healthy</span>
                </div>

                <div className="dependency-row">
                    <div>
                        <strong>Lucide React</strong>
                        <span>Icon library</span>
                    </div>
                    <span className="dependency-version">0.468.0</span>
                    <span className="safe-label">Healthy</span>
                </div>
            </div>
        </PageLayout>
    );
}

export function ReportsPage() {
    return (
        <PageLayout
            title="Reports"
            description="Review security reports and project summaries."
            active="Reports"
        >
            <div className="other-panel">
                <h2>Security Reports</h2>
                <div className="report-row">
                    <FileText />
                    <div>
                        <strong>Vulnerability Summary</strong>
                        <span>Summary of detected security issues</span>
                    </div>
                    <span className="report-status">Available</span>
                </div>

                <div className="report-row">
                    <FileText />
                    <div>
                        <strong>Dependency Report</strong>
                        <span>Overview of project packages</span>
                    </div>
                    <span className="report-status">Available</span>
                </div>
            </div>
        </PageLayout>
    );
}

export function SettingsPage() {
    return (
        <PageLayout
            title="Settings"
            description="Manage your dashboard preferences."
            active="Settings"
        >
            <div className="other-panel">
                <h2>General Settings</h2>

                <div className="setting-row">
                    <div>
                        <strong>Project Name</strong>
                        <span>DepShield security project</span>
                    </div>
                    <span className="setting-value">DepShield</span>
                </div>

                <div className="setting-row">
                    <div>
                        <strong>Theme</strong>
                        <span>Dashboard appearance</span>
                    </div>
                    <span className="setting-value">Dark</span>
                </div>

                <div className="setting-row">
                    <div>
                        <strong>Notifications</strong>
                        <span>Security alerts</span>
                    </div>
                    <span className="safe-label">Enabled</span>
                </div>
            </div>
        </PageLayout>
    );
}

export function HelpPage() {
    return (
        <PageLayout
            title="Help Center"
            description="Learn how to use the DepShield security dashboard."
            active="Help Center"
        >
            <div className="other-panel">
                <h2>How can we help?</h2>

                <div className="help-item">
                    <h3>What is DepShield?</h3>
                    <p>
                        DepShield is a dashboard for reviewing open-source
                        dependencies and their security risks.
                    </p>
                </div>

                <div className="help-item">
                    <h3>How do I check vulnerabilities?</h3>
                    <p>
                        Open the Vulnerabilities page. Use the severity filters
                        to review Critical, High, Medium and Low findings.
                    </p>
                </div>

                <div className="help-item">
                    <h3>How do I view dependencies?</h3>
                    <p>
                        Open the Dependencies page to review the packages
                        used by your project.
                    </p>
                </div>
            </div>
        </PageLayout>
    );
}
