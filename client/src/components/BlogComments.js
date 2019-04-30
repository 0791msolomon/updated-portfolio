import React from "react";
import moment from "moment";
const BlogComments = props => {
  const renderComments = () => {
    return props.comments.map(item => {
      return (
        <div key={item.time ? item.time : item}>
          <textarea
            className="form-control higherLowerRollIn2"
            rows="7"
            style={{
              overflow: "auto",
              marginTop: "2%",
              background: (0, 151, 19, 0.1),
              color: "white",
              fontWeight: "bold"
            }}
            id="comment"
            defaultValue={
              item.time
                ? ` ${moment(item.time).format("ll")} - ${item.comment} `
                : item
            }
            disabled={true}
          />
        </div>
      );
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      {renderComments()}
    </div>
  );
};
export default BlogComments;
