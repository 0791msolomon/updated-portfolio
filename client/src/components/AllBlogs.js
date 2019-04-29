import React from "react";
import axios from "axios";
import moment from "moment";
import BlogComments from "./BlogComments";
import "./index.css";
import * as blogServices from "../services/BlogServices";
import Modal from "react-awesome-modal";
class AllBlogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      displayBlog: null,
      modal: false,
      replyBody: "",
      showComments: false
    };
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
      displayBlog: blog,
      showComments: false
    });
  };
  likeBlog = id => {
    blogServices
      .likeBlog(id)
      .then(res => {
        this.replaceBlogEntry(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  replaceBlogEntry = blog => {
    let blogs = this.state.blogs;
    blogs.map((item, i) => {
      if (item._id === blog._id) {
        blogs[i] = blog;
        this.setState({
          blogs,
          displayBlog: blog,
          modal: false,
          replyBody: ""
        });
      }
    });
  };
  closeModal() {
    this.setState({
      modal: false,
      replyBody: ""
    });
  }
  submitReply = () => {
    // e.preventDefault();
    blogServices
      .reply(this.state.displayBlog._id, this.state.replyBody)
      .then(res => {
        this.replaceBlogEntry(res.data);
      });
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  displayBlogs = () => {
    return this.state.blogs.map((blog, i) => {
      if (blog._id === this.state.displayBlog._id) {
        return;
      }
      return (
        <div
          className="card blogCard"
          key={blog._id}
          style={{
            marginTop: "2%",
            background: (0, 151, 19, 0.6),
            color: "white"
          }}
          onClick={() => this.setDisplayBlog(blog)}
        >
          <div className="card-body" style={{ border: "1px solid white" }}>
            <h5 className="card-title">{blog.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
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
            <div className="bigBox col-lg-7 col-sm-12 buttonFadeUp">
              <div
                className="card  text-center"
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
                  <h5
                    className="card-header"
                    style={{ alignSelf: "flex-start" }}
                  >
                    {`Currently viewing: "${this.state.displayBlog.title.toUpperCase()}"`}
                  </h5>
                  <div
                    className="card-header"
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap"
                    }}
                  >
                    <h5 style={{ alignSelf: "flex-start" }}>
                      {`Likes:  ${this.state.displayBlog.likes || 0}`}
                    </h5>
                    <h5 style={{ marginLeft: "2%" }}>
                      {`Replies:  ${this.state.displayBlog.replies.length ||
                        0}`}
                    </h5>
                  </div>
                </div>
                <div
                  className="card-body"
                  style={{
                    maxHeight: "50vh",
                    minHeight: "50vh",
                    overflow: "auto"
                  }}
                >
                  <h3 className="card-text">{this.state.displayBlog.body}</h3>
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
                  <button
                    className="form-control btn-success col-lg-3 col-sm-12"
                    onClick={() => this.setState({ modal: true })}
                  >
                    <span>
                      {" "}
                      Reply <i className="fa fa-comment" />
                    </span>
                  </button>
                  <div className="col-lg-3 col-sm-12 card-footer text-muted">
                    {moment(this.state.displayBlog.time).format("lll")}
                  </div>
                  <button
                    className="form-control btn-info col-lg-3 col-sm-12"
                    onClick={() => this.likeBlog(this.state.displayBlog._id)}
                  >
                    <span>
                      Like <i className="fa fa-thumbs-up" />
                    </span>
                  </button>
                </div>
              </div>
              {this.state.displayBlog.replies.length > 0 &&
              !this.state.showComments ? (
                <button
                  style={{ marginTop: "2%" }}
                  className="form-control btn-primary"
                  onClick={() => this.setState({ showComments: true })}
                >
                  Comments
                </button>
              ) : this.state.displayBlog.replies.length > 0 &&
                this.state.showComments ? (
                <button
                  style={{ marginTop: "2%" }}
                  className="form-control btn-warning"
                  onClick={() => this.setState({ showComments: false })}
                >
                  Hide Comments
                </button>
              ) : null}
              {this.state.displayBlog.replies.length > 0 &&
              this.state.showComments ? (
                <div>
                  <BlogComments comments={this.state.displayBlog.replies} />
                </div>
              ) : null}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxHeight: "50vh",
                overflow: "auto"
              }}
            >
              <div
                style={{
                  color: "white",
                  alignSelf: "center"
                }}
              >
                All Blogs
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxHeight: "50vh",
                  overflow: "auto"
                }}
                className="blogsFadeInRight"
              >
                {this.displayBlogs()}
              </div>
            </div>
          </div>
        ) : null}
        <Modal
          visible={this.state.modal}
          height="400"
          width="500"
          effect="fadeInLeft"
          onClickAway={() => this.closeModal()}
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
            className="container"
          >
            <h4
              style={{
                fontFamily: '"Times New Roman", Times, serif',
                marginTop: "1%"
              }}
            >
              {this.state.displayBlog
                ? `You are replying to "${this.state.displayBlog.title}"`
                : ""}
            </h4>
            <label className="higherLowerRollIn2">Comment:</label>
            <textarea
              value={this.state.replyBody}
              name="replyBody"
              onChange={this.onChange}
              className="form-control  higherLowerRollIn2"
              rows="10"
              id="comment"
            />
            <button
              style={{ alignSelf: "flex-end", marginTop: "2%" }}
              className="btn-info form-control"
              onClick={() => this.submitReply()}
            >
              Reply
            </button>
            <button
              style={{
                alignSelf: "flex-end",
                marginTop: "2%",
                marginBottom: "2%"
              }}
              className="btn-danger form-control"
              onClick={() => this.closeModal()}
            >
              Close
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}
export default AllBlogs;
