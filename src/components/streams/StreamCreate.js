import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamCreate = (props) => {
  const handleSubmit = (formValues) => {
    props.createStream(formValues);
  };

  return (
    <div>
      <h3>Create A Stream</h3>
      <StreamForm onSubmit={handleSubmit} />
    </div>
  );
};

export default connect(null, { createStream })(StreamCreate);
