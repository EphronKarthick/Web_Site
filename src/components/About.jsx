import React from 'react';
import teamImage from '../assets/images/team-collaboration.jpg';

export default function About() {
  return (
    <section className="container" id="about">
      <h2>Who We Are & Mission</h2>
      <div className="grid-2" style={{ alignItems: 'center' }}>
        <div>
          <p style={{ marginBottom: '1rem' }}>
            MK Nexa Solutions is a specialized software consulting firm focusing exclusively on the <strong>Microsoft Power Platform</strong>, modern cloud applications, and advanced analytics solutions. We help organizations streamline operations through rapid, scalable enterprise development.
          </p>
          <p>
            Our mission is to empower organizations with intelligent automation solutions built natively on Microsoft architecture. Our technical team includes certified architects, Power Platform developers, and analytics experts.
          </p>
        </div>
        <div className="card">
          <img src={teamImage} alt="Team Collaboration" />
        </div>
      </div>
    </section>
  );
}