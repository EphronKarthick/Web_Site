import React from 'react';
import powerAppsImg from '../assets/images/power-apps.jpg';
import automationImg from '../assets/images/automation.jpg';
import powerBiImg from '../assets/images/power-bi.jpg';
import copilotImg from '../assets/images/copilot.jpg';

const servicesData = [
  { 
    title: "Power Apps Development", 
    desc: "Build custom enterprise canvas and model-driven business applications rapidly using the Microsoft Power Platform.", 
    img: powerAppsImg 
  },
  { 
    title: "Power Automate Workflows", 
    desc: "Automate complex business processes and cross-platform approvals with intelligent cloud flows and robotic process automation (RPA).", 
    img: automationImg 
  },
  { 
    title: "Power BI Analytics", 
    desc: "Transform enterprise data into powerful, interactive real-time executive dashboards and actionable reporting matrices.", 
    img: powerBiImg 
  },
  { 
    title: "Microsoft Copilot Studio", 
    desc: "Integrate custom AI copilots and intelligent virtual agents to enhance workplace productivity and customer service automation.", 
    img: copilotImg 
  }
];

export default function Services() {
  return (
    <section className="container" id="services">
      <h2>What We Offer</h2>
      <div className="grid-4">
        {servicesData.map((s, idx) => (
          <div className="card" key={idx}>
            <img src={s.img} alt={s.title} />
            <div className="card-content">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}