import React, { Component } from "react";
import "./index.css";
const About = props => {
  return (
    <React.Fragment>
      <div
        className="container"
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div className="display-2 aboutMeDisplay" style={popWhite}>
          Quick Bio
        </div>
        <div
          className="container"
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <div>
            <h3 style={{ color: "white" }}>
              Hi there, here's a few things about me for anyone interested. My
              name is Matt Solomon, I'm originally from Cleveland Ohio (lived
              there until I was 18). Once I graduated from highschool I left
              Ohio to join the Marines, I spent my first few months in South
              Carolina and once I finished bootcamp I was sent over to be
              stationed on Camp Pendleton in Oceanside California. I spent the
              next five years in the marines completing two deployments during
              my service, after which I was honorably discharged and decided to
              continue living in California (can't beat the weather). I then
              tried my luck at joining the Navy, unfortunately things didn't
              work out with that so I decided to utilize my GI bill and go back
              to school. Initially my plans were to pursue a career as a fireman
              but after a few semesters I started feeling as though that wasn't
              going to be a great fit. Around that same time a friend of mine
              had shown me some code he was working on and suggested I look into
              that and see if it interested me at all. After completing a few
              courses on codecademy I'd become pretty hooked on development, and
              was recommended by my same friend who introduced me to it, to
              check into coding bootcamps. Luckily I found a place (Sabio) that
              accepted the GI bill up in Los Angeles. I spent six months there
              learning the fundamentals and was on my way. I was put in touch
              with a company called Seqqure through Sabio and worked as a full
              stack developer to create an MVP for them. Once that was finished
              I got a job offer from my current employer and made the move to
              Flagstaff Arizona to pursue that. Currently I'm at the same
              company and continuing to hone my skills and learn new
              technologies whenever the opportunity presents itself, however I
              am always keeping my options open and plan on moving back to
              Southern California to find more challenging work and continue
              growing as a developer. That's the quick and easy for my story.
            </h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const popWhite = {
  color: "white",
  fontWeight: "bold"
};
export default About;
