import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { useEffect } from "react";
import { fetchStream, deleteStream } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const StreamDelete = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  const handleClick = () => {
    props.deleteStream(props.match.params.id);
  };

  const renderActions = (
    <React.Fragment>
      <button onClick={handleClick} className="ui negative button">
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </React.Fragment>
  );

  const renderContent = () => {
    if (!props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return (
      "Are you sure you want to delete the stream with title: " +
      props.stream.title
    );
  };

  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={renderActions}
      onDismiss={() => history.push("/")}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
