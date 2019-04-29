import React from "react";
import axios from "axios";
import moment from "moment";
import * as blogServices from "../services/BlogServices";
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
  setDisplayBlog = blog => {
    this.setState({
      displayBlog: blog
    });
  };
  likeBlog = id => {
    blogServices
      .likeBlog(id)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  displayBlogs = () => {
    return this.state.blogs.map((blog, i) => {
      if (blog._id === this.state.displayBlog._id) {
        return;
      }
      return (
        <div
          class="card"
          key={blog._id}
          style={{
            marginTop: "2%",
            background: (0, 151, 19, 0.6),
            color: "white"
          }}
          onClick={() => this.setDisplayBlog(blog)}
        >
          <div class="card-body" style={{ border: "1px solid white" }}>
            <h5 class="card-title">{blog.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              {moment(blog.time).format("lll")}
            </h6>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div style={{ maxHeight: "100%" }}>
        {this.state.blogs && this.state.displayBlog ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              flexWrap: "wrap"
            }}
          >
            <div className="bigBox col-lg-7 col-sm-12">
              <div
                class="card  text-center"
                style={{
                  background: (0, 151, 19, 0.9),
                  color: "white",
                  border: "solid 1px white"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <div class="card-header" style={{ alignSelf: "flex-start" }}>
                    <u>
                      {`Currently viewing: "${this.state.displayBlog.title.toUpperCase()}"`}
                    </u>
                  </div>
                  <div
                    class="card-header"
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap"
                    }}
                  >
                    <span style={{ alignSelf: "flex-start" }}>
                      <u>{`Likes:  ${this.state.displayBlog.likes || 0}`}</u>
                    </span>
                    <span style={{ marginLeft: "2%" }}>
                      <u>
                        {`Replies:  ${this.state.displayBlog.replies || 0}`}
                      </u>
                    </span>
                  </div>
                </div>
                <div
                  class="card-body"
                  style={{
                    maxHeight: "50vh",
                    minHeight: "50vh",
                    overflow: "auto"
                  }}
                >
                  <p class="card-text">{this.state.displayBlog.body}</p>
                </div>
                <div
                  style={{
                    marginTop: "3%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    flexWrap: "wrap"
                  }}
                >
                  <button className="form-control btn-success col-lg-3 col-sm-12">
                    Reply
                  </button>
                  <div className="col-lg-3 col-sm-12 card-footer text-muted">
                    {moment(this.state.displayBlog.time).format("lll")}
                  </div>
                  <button
                    className="form-control btn-info col-lg-3 col-sm-12"
                    onClick={() => this.likeBlog(this.state.displayBlog._id)}
                  >
                    Like
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div style={{ color: "white", alignSelf: "center" }}>
                All Blogs
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxHeight: "50vh",
                  overflow: "auto"
                }}
              >
                {this.displayBlogs()}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
export default AllBlogs;
