import React from "react";
import Header from "./components/Header";
import "./App.scss";
import InfoBar from "./components/InfoBar";
import WorkExperience from "./components/WorkExperience";
import Widget from "./components/Widget";
import Chip from "./components/Chip";
import { v4 as uuidv4 } from "uuid";
import Skill from "./components/Skill";
import Certificate from "./components/Certificate";
import Education from "./components/Education";
import Language from "./components/Language";

class App extends React.Component {
  workExperiences = [
    {
      id: uuidv4(),
      title: "Frontend & Product manager",
      company: "Homa Games",
      companyType: "Game publishing",
      dates: "03/2019 - Present",
      location: "Paris, France",
      type: "Acheivements",
      items: [
        {
          id: uuidv4(),
          text:
            "Lead development of tool to manage Video Game lifecycle from idea to initial launch in just 3 months",
        },
        {
          id: uuidv4(),
          text:
            "Organised, recruited and mentored a team of 3 developers to become competent and autonomous",
        },
        {
          id: uuidv4(),
          text:
            "Planned technical roadmap and helped refine product roadmap with team members and Product owner",
        },
        {
          id: uuidv4(),
          text:
            "Launched and supported Frontend application using VueJS, Typescript and GraphQL",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Frontend & Product manager",
      company: "Bidmotion",
      companyType: "Ad tech & services",
      dates: "07/2015 - 02/2019",
      location: "Paris, France",
      type: "Acheivements",
      items: [
        {
          id: uuidv4(),
          text:
            "Lead design and development of Frontend for successful Ad tech SaaS product used by 5+ clients and 200+ users",
        },
        {
          id: uuidv4(),
          text:
            "Improved and created new Agile processes to track and adapt to challenges to reach the team goals",
        },
        {
          id: uuidv4(),
          text:
            "Supported the team in simultaneous development of multiple projects in fast-paced environment",
        },
        {
          id: uuidv4(),
          text:
            "Designed architecture and lead migration from AngularJS V1 to V2 and GraphQL API",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Senior Frontend Developer",
      company: "Paytm",
      companyType: "E-commerce portal",
      dates: "10/2012 - 06/2015",
      location: "Delhi, India",
      type: "Acheivements",
      items: [
        {
          id: uuidv4(),
          text:
            "Lead major transition of E-commerce website from server rendered to Single-Page application (SPA), used by 1+ million users everyday",
        },
        {
          id: uuidv4(),
          text:
            "Developed web and mobile portal for Payments, including ultra light version for 2G internet mobiles",
        },
        {
          id: uuidv4(),
          text:
            "Developed frontend for Bus ticket booking portal with best practices for user experience",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Frontend Developer",
      company: "PlayUp",
      companyType: "Social games company",
      dates: "01/2012 - 09/2012",
      location: "Paris, France",
      type: "Acheivements",
      items: [
        {
          id: uuidv4(),
          text:
            "Developed various web based Social games on Facebook platform, supporting 10,000+ realtime users",
        },
      ],
    },
  ];

  technicalSkills = [
    {
      id: uuidv4(),
      title: "Modern Web",
      text:
        "Good knowledge of base technologies of modern web (Javascipt, HTML, CSS)",
    },
    {
      id: uuidv4(),
      title: "Javascript Frameworks",
      text:
        "Mastery of creating modular web applications with JavaScript framework VueJS, AngularJS and React JS (beginner)",
    },
    {
      id: uuidv4(),
      title: "API & Backend",
      text:
        "Ability to create simple backend services on Node.js and to integrate third-party APIs with REST or GraphQL webservices",
    },
    {
      id: uuidv4(),
      title: "Design",
      text:
        "A particular appetite for Design in general and an ability to create mockups and work with a Web Designer",
    },
    {
      id: uuidv4(),
      title: "Testing",
      text:
        "Knowledge of software testing (unit and / or integration testing, code quality, coverage)",
    },
    {
      id: uuidv4(),
      title: "Agile",
      text:
        "Knowledge of Agile / Scrum or Kanban methodologies and experience as a Scrum Master",
    },
    {
      id: uuidv4(),
      title: "Product Owner",
      text:
        "Experience in creating Product vision, feature backlog and prioritisation",
    },
  ];

  skills = [
    {
      id: uuidv4(),
      text: "Javascript",
    },
    {
      id: uuidv4(),
      text: "HTML",
    },
    {
      id: uuidv4(),
      text: "CSS",
    },
    {
      id: uuidv4(),
      text: "Typescript",
    },
    {
      id: uuidv4(),
      text: "VueJS",
    },
    {
      id: uuidv4(),
      text: "AngularJS",
    },
    {
      id: uuidv4(),
      text: "ReactJS",
    },
    {
      id: uuidv4(),
      text: "NodeJS",
    },
    {
      id: uuidv4(),
      text: "API",
    },
    {
      id: uuidv4(),
      text: "GraphQL",
    },
    // {
    //   id: uuidv4(),
    //   text: "Apollo",
    // },
    
    {
      id: uuidv4(),
      text: "GIT",
    },
    {
      id: uuidv4(),
      text: "CircleCI",
    },
    {
      id: uuidv4(),
      text: "Unit / E2E testing",
    },
    {
      id: uuidv4(),
      text: "Continuous Integration",
    },

    {
      id: uuidv4(),
      text: "Coaching",
    },
    {
      id: uuidv4(),
      text: "Performance",
    },
    {
      id: uuidv4(),
      text: "SCRUM",
    },
    {
      id: uuidv4(),
      text: "Mixpanel",
    },
    {
      id: uuidv4(),
      text: "Asana",
    },
    {
      id: uuidv4(),
      text: "Backlog",
    },
  ];

  interests = [
    {
      id: uuidv4(),
      text: "Technology",
    },
    {
      id: uuidv4(),
      text: "Travel",
    },
    {
      id: uuidv4(),
      text: "Music",
    },
    {
      id: uuidv4(),
      text: "Dance",
    },
    {
      id: uuidv4(),
      text: "Space",
    },
    {
      id: uuidv4(),
      text: "History",
    },
    {
      id: uuidv4(),
      text: "Guitar",
    },
    {
      id: uuidv4(),
      text: "Culture",
    },
    {
      id: uuidv4(),
      text: "Language",
    },
  ];

  certificates = [
    {
      id: uuidv4(),
      title: "Certified Scrum Product Owner (CSPO®)",
      dates: "(02/2019 - Present)",
      description: "Scrum Alliance",
    },
  ];

  educations = [
    {
      id: uuidv4(),
      title: "Bachelor of Technology, Computer Science",
      text: "GGS Indraprastha University",
      location: "Delhi, India",
    },
  ];

  languages = [
    {
      id: uuidv4(),
      title: "English",
      text: "Native or Bilingual Proficiency",
    },
    {
      id: uuidv4(),
      title: "French",
      text: "Limited Working Proficiency",
    },
  ];

  render() {
    return (
      <div className="app">
        <Header />
        <InfoBar />
        <div className="layout content mt-3">
          <div className="flex column column-left">
            <Widget
              title="WORK EXPERIENCE"
              content={this.workExperiences.map((item) => (
                <WorkExperience key={item.id} info={item} />
              ))}
            />
            <Widget
              title="EDUCATION"
              content={this.educations.map((item) => (
                <Education key={item.id} info={item} />
              ))}
            />
          </div>
          <div className="flex column column-right">
            <Widget
              title="SKILLS"
              content={this.skills.map((item) => (
                <Chip key={item.id} text={item.text} />
              ))}
            />
            <Widget
              title="TECHNICAL SKILLS"
              content={this.technicalSkills.map((item) => (
                <Skill key={item.id} info={item} />
              ))}
            />
            <Widget
              title="CERTIFICATES"
              content={this.certificates.map((item) => (
                <Certificate key={item.id} info={item} />
              ))}
            />
            <Widget
              title="LANGUAGES"
              content={
                <div className="layout">
                  {this.languages.map((item) => (
                    <div className="flex">
                      <Language key={item.id} info={item} />
                    </div>
                  ))}
                </div>
              }
            />
            <Widget
              title="INTERESTS"
              content={this.interests.map((item) => (
                <Chip key={item.id} outlined text={item.text} />
              ))}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
