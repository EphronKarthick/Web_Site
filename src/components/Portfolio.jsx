import React from 'react';
import appImage from '../assets/images/app-development.jpg';
import workflowImage from '../assets/images/workflow-case.jpg';
import dashboardImage from '../assets/images/analytics-case.jpg';
import canvasAppImage from '../assets/images/portal-case.jpg';

export default function Portfolio() {
  return (
    <section className="container" id="portfolio">
      <h2>Case Studies</h2>
      <p style={{ marginBottom: '2rem', maxWidth: '1200px', fontSize: '1.05rem', color: 'var(--text-muted)' }}>
        Explore how BAGYAM TEC transforms enterprise operations with tailored Microsoft Power Platform architectures, delivering high ROI and seamless user adoption.
      </p>

      <div className="grid-4">
        {/* Case Study 1: Canvas Apps */}
        <div className="card">
          <img src={appImage} alt="Canvas Apps Enterprise Solution" />
          <div className="card-content">
            <span style={{ display: 'inline-block', padding: '0.2rem 0.6rem', background: 'rgba(2, 132, 199, 0.1)', color: 'var(--primary-color)', borderRadius: '4px', fontWeight: '600', fontSize: '0.75rem', marginBottom: '0.6rem' }}>
              Power Apps: Canvas Architecture
            </span>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', letterSpacing: '-0.2px' }}>Global Logistics Field Operations App</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.2rem' }}>
              Developed a custom pixel-perfect mobile-first Canvas App integrated with Azure SQL and offline data caching. Enabled field agents to log shipments, capture digital signatures, and sync inventory metrics instantly.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary-color)', borderTop: '1px solid var(--border-color)', paddingTop: '0.8rem' }}>
              <span>Impact: +45% Field Efficiency</span>
              <span>Stack: Power Apps Canvas, Dataverse</span>
            </div>
          </div>
        </div>

        {/* Case Study 2: Model-Driven Apps */}
        <div className="card">
          <img src={workflowImage} alt="Model Driven Apps Enterprise Solution" />
          <div className="card-content">
            <span style={{ display: 'inline-block', padding: '0.2rem 0.6rem', background: 'rgba(2, 132, 199, 0.1)', color: 'var(--primary-color)', borderRadius: '4px', fontWeight: '600', fontSize: '0.75rem', marginBottom: '0.6rem' }}>
              Power Apps: Model-Driven Architecture
            </span>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', letterSpacing: '-0.2px' }}>Enterprise Asset Management System</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.2rem' }}>
              Engineered a comprehensive Model-Driven App backed by Microsoft Dataverse and embedded Business Process Flows. Streamlined asset lifecycle tracking, automated compliance reviews, and role-based security clearance.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary-color)', borderTop: '1px solid var(--border-color)', paddingTop: '0.8rem' }}>
              <span>Impact: 60% Faster Audit Cycles</span>
              <span>Stack: Model-Driven Apps, Dataverse, Power Automate</span>
            </div>
          </div>
        </div>

        {/* Case Study 3: Cloud Workflows */}
        <div className="card">
          <img src={canvasAppImage} alt="Automated Cloud Workflows" />
          <div className="card-content">
            <span style={{ display: 'inline-block', padding: '0.2rem 0.6rem', background: 'rgba(2, 132, 199, 0.1)', color: 'var(--primary-color)', borderRadius: '4px', fontWeight: '600', fontSize: '0.75rem', marginBottom: '0.6rem' }}>
              Power Automate & Integration
            </span>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', letterSpacing: '-0.2px' }}>Automated Invoice Processing Pipeline</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.2rem' }}>
              Implemented an intelligent document automation pipeline using AI Builder and Power Automate cloud flows to extract PDF invoice details, route multi-tier approvals, and sync records directly to ERP systems.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary-color)', borderTop: '1px solid var(--border-color)', paddingTop: '0.8rem' }}>
              <span>Impact: 80% Reduction in Processing Time</span>
              <span>Stack: Power Automate, AI Builder, SharePoint</span>
            </div>
          </div>
        </div>

        {/* Case Study 4: Power BI Analytics */}
        <div className="card">
          <img src={dashboardImage} alt="Power BI Executive Analytics" />
          <div className="card-content">
            <span style={{ display: 'inline-block', padding: '0.2rem 0.6rem', background: 'rgba(2, 132, 199, 0.1)', color: 'var(--primary-color)', borderRadius: '4px', fontWeight: '600', fontSize: '0.75rem', marginBottom: '0.6rem' }}>
              Power BI Analytics
            </span>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', letterSpacing: '-0.2px' }}>Executive Financial & Operations Dashboard</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.2rem' }}>
              Designed real-time executive Power BI data models combining disparate SQL and cloud data sources. Provided executive leadership with granular visibility into revenue streams, KPIs, and bottleneck reporting.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary-color)', borderTop: '1px solid var(--border-color)', paddingTop: '0.8rem' }}>
              <span>Impact: Real-Time Data Insights</span>
              <span>Stack: Power BI, Azure Analysis Services</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
