import { useContext } from "react";

import { MailContext } from "..";

// font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen, faSackXmark } from "@fortawesome/free-solid-svg-icons";
import { faTrash, faStar } from "@fortawesome/free-solid-svg-icons";

export const Buttons = ({ unread, mId, isStarred }) => {
  const { dispatch } = useContext(MailContext);
  return (
    <div className="btns">
      <span
        title="Delete"
        className="btn btn-delete"
        onClick={() => dispatch({ type: "DELETE", id: mId })}
      >
        <FontAwesomeIcon icon={faTrash} />
      </span>

      <span
        title={unread ? "Mark As Read" : "Mark As Unread"}
        className="btn btn-read-unread"
        onClick={() => dispatch({ type: "READ-UNREAD", id: mId })}
      >
        {unread ? (
          <FontAwesomeIcon icon={faBoxOpen} style={{ color: "#505050" }} />
        ) : (
          <FontAwesomeIcon icon={faBoxOpen} style={{ color: "grey" }} />
        )}
      </span>
      <span
        title="Spam"
        className="btn btn-spam"
        onClick={() => dispatch({ type: "SPAM", id: mId })}
      >
        <FontAwesomeIcon icon={faSackXmark} />
      </span>
      <span
        title={isStarred ? "Unstar" : "Star"}
        className="btn btn-star"
        onClick={() => dispatch({ type: "STAR-UNSTAR", id: mId })}
      >
        {isStarred ? (
          <FontAwesomeIcon icon={faStar} style={{ color: "#eaea01" }} />
        ) : (
          <FontAwesomeIcon icon={faStar} style={{ color: "grey" }} />
        )}
      </span>
    </div>
  );
};
