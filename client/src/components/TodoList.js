import React from "react";
import Checkbox from "./Checkbox";
import * as todoServices from "../services/TodoService";
class TodoList extends React.Component {
  state = { priority: 1, color: "red", task: "", incompleteTasks: [] };
  setPriority = (n, color) => {
    this.setState({ priority: n, color });
  };
  componentDidMount = () => {
    todoServices
      .getTodos()
      .then(res => {
        this.setState(
          {
            incompleteTasks: res.data
          },
          () => console.log(this.state.incompleteTasks)
        );
      })
      .catch(err => {
        console.log(err);
      });
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  setTask = e => {
    e.preventDefault();
    todoServices.postTodo(this.state.task, this.state.priority).then(res => {
      console.log(res);
    });
  };

  renderIncompletes = () => {
    return this.state.incompleteTasks.map((task, i) => {
      return (
        <div
          key={task._id}
          style={{ color: "white", border: "solid 1px white", padding: "1%" }}
        >
          {`Task ${i}`}
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={inputBoxes}>New Task:</label>
          <textarea
            value={this.state.task}
            name="task"
            onChange={this.onChange}
            className="form-control higherLowerRollIn2"
            rows="10"
            id="comment"
            style={inputBoxes}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
          >
            <h5 style={{ color: "white" }}>Priority Level (1 being high)</h5>
            <div className="col-lg-4 col-sm-12">
              <button
                className="form-control btn-success"
                onClick={this.setTask}
              >
                Set Task <i className="fa fa-paper-plane" />
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap"
            }}
          >
            <Checkbox
              value={1}
              setPriority={this.setPriority}
              color="red"
              defaultChecked={true}
            />
            <Checkbox value={2} setPriority={this.setPriority} color="orange" />
            <Checkbox value={3} setPriority={this.setPriority} color="yellow" />
            <Checkbox value={4} setPriority={this.setPriority} color="green" />
            <Checkbox value={5} setPriority={this.setPriority} color="blue" />
          </div>
          <div style={{ color: this.state.color }} className="display-3">
            {this.state.priority}
          </div>
          <div
            className="col-12"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
          >
            {this.state.incompleteTasks.length > 0
              ? this.renderIncompletes()
              : null}
          </div>
        </div>
      </div>
    );
  }
}
const inputBoxes = {
  background: (0, 151, 19, 0.1),
  color: "white",
  fontWeight: "bold",
  marginBottom: "1%"
};
export default TodoList;
