
import { useState } from "react";

import {
    Shield,
    LayoutDashboard,
    Package,
    Bug,
    FileText,
    Settings,
    Search,
    Bell,
    ChevronDown,
    ChevronRight,
    AlertTriangle,
    ShieldCheck,
    Activity,
    X,
    ExternalLink,
    Filter,
    Menu,
    CircleHelp
} from "lucide-react";

import "./Vulnerabilities.css";

const findings = [
    {
        id: "CVE-2024-3094",
        package: "xz-utils",
        version: "5.6.1",
        severity: "Critical",
        score: "10.0",
        status: "Open",
        date: "Mar 29, 2024",
        description:
            "A malicious code injection was discovered in XZ Utils. It may allow unauthorized access to affected systems.",
        fix: "Upgrade to a safe version of XZ Utils.",
        source: "GitHub Security Advisory"
    },
    {
        id: "CVE-2024-21626",
        package: "runc",
        version: "1.1.11",
        severity: "High",
        score: "8.6",
        status: "Open",
        date: "Feb 01, 2024",
        description:
            "A container escape issue may allow an attacker to access files outside the container.",
        fix: "Update runc to version 1.1.12 or later.",
        source: "NVD"
    },
    {
        id: "CVE-2023-44487",
        package: "http2",
        version: "1.2.0",
        severity: "High",
        score: "7.5",
        status: "Open",
        date: "Oct 10, 2023",
        description:
            "HTTP/2 rapid reset can be used to cause denial of service.",
        fix: "Apply the recommended security update.",
        source: "NVD"
    },
    {
        id: "CVE-2023-45857",
        package: "axios",
        version: "1.5.0",
        severity: "Medium",
        score: "6.5",
        status: "Open",
        date: "Oct 26, 2023",
        description:
            "An issue in Axios may expose sensitive information under certain conditions.",
        fix: "Update Axios to a patched version.",
        source: "GitHub Security Advisory"
    },
    {
        id: "CVE-2023-26136",
        package: "tough-cookie",
        version: "4.1.2",
        severity: "Medium",
        score: "6.1",
        status: "Open",
        date: "Jul 18, 2023",
        description:
            "A prototype pollution issue was found in tough-cookie.",
        fix: "Upgrade to a patched version.",
        source: "NVD"
    },
    {
        id: "CVE-2023-29017",
        package: "git",
        version: "2.40.0",
        severity: "Low",
        score: "3.1",
        status: "Open",
        date: "Apr 25, 2023",
        description:
            "A security issue may occur when Git handles certain configuration files.",
        fix: "Update Git to the latest secure version.",
        source: "GitHub Security Advisory"
    }
];

const filters = ["All", "Critical", "High", "Medium", "Low"];

function Vulnerabilities() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [search, setSearch] = useState("");
    const [selectedFinding, setSelectedFinding] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const filteredFindings = findings.filter((item) => {
        const matchesFilter =
            activeFilter === "All" || item.severity === activeFilter;

        const matchesSearch =
            item.id.toLowerCase().includes(search.toLowerCase()) ||
            item.package.toLowerCase().includes(search.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    const countSeverity = (severity) =>
        findings.filter((item) => item.severity === severity).length;

    return (
        <div className="dashboard">

            <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
                <div className="brand">
                    <div className="brand-icon">
                        <Shield size={23} />
                    </div>
                    <div>
                        <h2>DepShield</h2>
                        <span>Security Platform</span>
                    </div>
                    <button
                        className="close-sidebar"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="sidebar-label">MAIN MENU</div>

                <nav className="navigation">
                    <a href="#overview">
                        <LayoutDashboard size={19} />
                        Dashboard
                    </a>

                    <a href="#dependencies">
                        <Package size={19} />
                        Dependencies
                    </a>

                    <a href="#findings" className="active">
                        <Bug size={19} />
                        Vulnerabilities
                        <span className="nav-count">6</span>
                    </a>

                    <a href="#reports">
                        <FileText size={19} />
                        Reports
                    </a>
                </nav>

                <div className="sidebar-label">SYSTEM</div>

                <nav className="navigation">
                    <a href="#settings">
                        <Settings size={19} />
                        Settings
                    </a>

                    <a href="#help">
                        <CircleHelp size={19} />
                        Help Center
                    </a>
                </nav>

                <div className="sidebar-bottom">
                    <div className="user-avatar">R</div>
                    <div className="user-info">
                        <strong>Project Team</strong>
                        <span>Security Analyst</span>
                    </div>
                    <ChevronDown size={17} />
                </div>
            </aside>

            {sidebarOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <main className="main-content">

                <header className="topbar">
                    <button
                        className="menu-button"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Menu size={22} />
                    </button>

                    <div className="breadcrumb">
                        <span>Security</span>
                        <ChevronRight size={15} />
                        <strong>Vulnerabilities</strong>
                    </div>

                    <div className="top-actions">
                        <button className="icon-button">
                            <Bell size={19} />
                            <span className="notification-dot" />
                        </button>
                        <div className="top-avatar">PT</div>
                    </div>
                </header>

                <div className="page-content">

                    <section className="page-heading">
                        <div>
                            <div className="small-heading">
                                SECURITY MANAGEMENT
                            </div>
                            <h1>Vulnerabilities</h1>
                            <p>
                                Find, review and manage security issues in your
                                open-source dependencies.
                            </p>
                        </div>

                        <button className="report-button">
                            <FileText size={17} />
                            Generate Report
                        </button>
                    </section>

                    <section className="summary-section">
                        <div className="section-title">
                            <h2>Security Overview</h2>
                            <span>Sample project data</span>
                        </div>

                        <div className="summary-grid">

                            <div className="summary-card">
                                <div className="summary-top">
                                    <span>Total Findings</span>
                                    <div className="summary-icon blue">
                                        <Activity size={20} />
                                    </div>
                                </div>
                                <h3>{findings.length}</h3>
                                <p>All detected issues</p>
                            </div>

                            <div className="summary-card">
                                <div className="summary-top">
                                    <span>Critical</span>
                                    <div className="summary-icon red">
                                        <AlertTriangle size={20} />
                                    </div>
                                </div>
                                <h3>{countSeverity("Critical")}</h3>
                                <p className="red-text">Needs urgent action</p>
                            </div>

                            <div className="summary-card">
                                <div className="summary-top">
                                    <span>High Risk</span>
                                    <div className="summary-icon orange">
                                        <Shield size={20} />
                                    </div>
                                </div>
                                <h3>{countSeverity("High")}</h3>
                                <p className="orange-text">Needs attention</p>
                            </div>

                            <div className="summary-card">
                                <div className="summary-top">
                                    <span>Safe Status</span>
                                    <div className="summary-icon green">
                                        <ShieldCheck size={20} />
                                    </div>
                                </div>
                                <h3>Monitor</h3>
                                <p className="green-text">Review recommendations</p>
                            </div>

                        </div>
                    </section>

                    <section className="findings-section" id="findings">

                        <div className="findings-heading">
                            <div>
                                <h2>Security Findings</h2>
                                <p>Review detected vulnerabilities in your packages.</p>
                            </div>

                            <button className="filter-button">
                                <Filter size={16} />
                                Filters
                            </button>
                        </div>

                        <div className="toolbar">

                            <div className="filter-tabs">
                                {filters.map((filter) => (
                                    <button
                                        key={filter}
                                        onClick={() => setActiveFilter(filter)}
                                        className={
                                            activeFilter === filter ? "selected-filter" : ""
                                        }
                                    >
                                        {filter}
                                        {filter === "All" && (
                                            <span className="filter-number">
                                                {findings.length}
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>

                            <div className="search-box">
                                <Search size={17} />
                                <input
                                    type="text"
                                    placeholder="Search package or CVE..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>

                        </div>

                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>VULNERABILITY</th>
                                        <th>PACKAGE</th>
                                        <th>SEVERITY</th>
                                        <th>CVSS SCORE</th>
                                        <th>STATUS</th>
                                        <th>DATE FOUND</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredFindings.map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                <strong className="cve-id">{item.id}</strong>
                                            </td>

                                            <td>
                                                <div className="package-name">
                                                    <Package size={16} />
                                                    <div>
                                                        <strong>{item.package}</strong>
                                                        <span>v{item.version}</span>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <span className={`severity ${item.severity.toLowerCase()}`}>
                                                    {item.severity}
                                                </span>
                                            </td>

                                            <td>
                                                <strong>{item.score}</strong>
                                            </td>

                                            <td>
                                                <span className="status">
                                                    <span />
                                                    {item.status}
                                                </span>
                                            </td>

                                            <td className="date-cell">{item.date}</td>

                                            <td>
                                                <button
                                                    className="view-button"
                                                    onClick={() => setSelectedFinding(item)}
                                                >
                                                    View
                                                    <ChevronRight size={15} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {filteredFindings.length === 0 && (
                                <div className="empty-state">
                                    <Search size={30} />
                                    <h3>No findings found</h3>
                                    <p>Try another search or severity filter.</p>
                                </div>
                            )}
                        </div>

                        <div className="table-footer">
                            <span>
                                Showing {filteredFindings.length} of {findings.length} findings
                            </span>
                            <span>Demo data</span>
                        </div>

                    </section>

                    <section className="security-note">
                        <div className="note-icon">
                            <ShieldCheck size={23} />
                        </div>
                        <div>
                            <h3>Security Recommendation</h3>
                            <p>
                                Review critical and high severity findings first.
                                Update affected packages and check the security
                                advisory before deploying your application.
                            </p>
                        </div>
                    </section>

                    <footer className="footer">
                        <span>© 2026 DepShield. Security Dashboard.</span>
                        <span>Built for open-source security</span>
                    </footer>

                </div>
            </main>

            {selectedFinding && (
                <div
                    className="modal-backdrop"
                    onClick={() => setSelectedFinding(null)}
                >
                    <div
                        className="advisory-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-header">
                            <div>
                                <span className="small-heading">SECURITY ADVISORY</span>
                                <h2>Vulnerability Details</h2>
                            </div>
                            <button
                                className="close-button"
                                onClick={() => setSelectedFinding(null)}
                            >
                                <X size={21} />
                            </button>
                        </div>

                        <div className="modal-body">
                            <span
                                className={`severity ${selectedFinding.severity.toLowerCase()}`}
                            >
                                {selectedFinding.severity}
                            </span>

                            <h3>{selectedFinding.id}</h3>
                            <p className="modal-description">
                                {selectedFinding.description}
                            </p>

                            <div className="detail-grid">
                                <div>
                                    <span>Package</span>
                                    <strong>{selectedFinding.package}</strong>
                                </div>
                                <div>
                                    <span>Version</span>
                                    <strong>{selectedFinding.version}</strong>
                                </div>
                                <div>
                                    <span>CVSS Score</span>
                                    <strong>{selectedFinding.score}</strong>
                                </div>
                                <div>
                                    <span>Status</span>
                                    <strong>{selectedFinding.status}</strong>
                                </div>
                                <div>
                                    <span>Date Found</span>
                                    <strong>{selectedFinding.date}</strong>
                                </div>
                                <div>
                                    <span>Source</span>
                                    <strong>{selectedFinding.source}</strong>
                                </div>
                            </div>

                            <div className="fix-box">
                                <ShieldCheck size={20} />
                                <div>
                                    <strong>Recommended Fix</strong>
                                    <p>{selectedFinding.fix}</p>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button
                                className="cancel-button"
                                onClick={() => setSelectedFinding(null)}
                            >
                                Close
                            </button>
                            <button
                                className="primary-button"
                                onClick={() => setSelectedFinding(null)}
                            >
                                Mark Reviewed
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Vulnerabilities;
