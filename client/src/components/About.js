import React, { Component } from "react";
import "./index.css";
const About = props => {
  return (
    <React.Fragment>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            alignSelf: "center"
          }}
        >
          <i
            className="fa aboutMePointer fa-hand-o-right fa-2x"
            style={{ color: "white", fontWeight: "bold" }}
          />
          <div
            className="shit"
            data-toggle="collapse"
            data-target="#collapseExample"
            href="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h3> About</h3>
          </div>
          <i
            className="fa aboutMePointer fa-hand-o-left fa-2x"
            style={{ color: "white", fontWeight: "bold" }}
          />
        </div>
        <div
          className="container"
          style={{
            marginTop: "2%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <div id="collapseExample" className="collapse show">
            <h5
              style={{
                color: "white",
                fontFamily: '"Courier New", Courier, monospace'
              }}
            >
              Come back to this and write about me. Sed ut perspiciatis unde
              omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
              qui in ea voluptate velit esse quam nihil molestiae consequatur,
              vel illum qui dolorem eum fugiat quo voluptas nulla pariaturSed ut
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariaturSed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
              quia consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit, sed quia non numquam eius
              modi tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur
            </h5>
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
