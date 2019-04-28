import React from "react";
import axios from "axios";
import moment from "moment";
class AllBlogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blogs: [], displayBlog: null };
  }
  componentDidMount = () => {
    axios
      .get("/api/blog")
      .then(res => {
        console.log(res.data);
        this.setState({ blogs: res.data, displayBlog: res.data[0] });
      })
      .catch(err => {
        console.log(err);
      });
  };

  displayBlogs = () => {
    return this.state.blogs.map(blog => {
      return (
        <div class="card" key={blog.id}>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">{blog.title}</h6>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.blogs && this.state.displayBlog ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
              height: "100%"
            }}
          >
            <div
              className="bigBox col-lg-7 col-sm-12"
              style={{ border: "solid 1px white" }}
            >
              <div
                class="card text-center"
                style={{ background: (0, 151, 19, 0.9), color: "white" }}
              >
                <div class="card-header">Currently Viewing</div>
                <div class="card-body">
                  <h5 class="card-title">
                    {this.state.displayBlog.title.toUpperCase()}
                  </h5>
                  <p class="card-text">{this.state.displayBlog.body}</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      flexWrap: "wrap"
                    }}
                  >
                    <button className="form-control btn-success col-lg-5 col-sm-12">
                      Reply
                    </button>
                    <button className="form-control btn-info col-lg-5 col-sm-12">
                      Like
                    </button>
                  </div>
                </div>
                <div class="card-footer text-muted">
                  {moment(this.state.displayBlog.time).format("lll")}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {this.displayBlogs()}
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}
export default AllBlogs;
