import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { MailContext } from "../context/MailContext";

import { Buttons } from "../componants/Buttons";

// Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faTrashRestore } from "@fortawesome/free-solid-svg-icons";

export const Mails = ({
  mId,
  dp,
  subject,
  senderEmail,
  content,
  unread,
  isStarred,
  inbox,
  trash,
  spam
}) => {
  const { dispatch } = useContext(MailContext);
  return (
    <div>
      <li key={mId} style={{ backgroundColor: unread ? "#f7f9fb" : "" }}>
        <div className="profileAndSenderEmail">
          {" "}
          <div>
            <img src={dp} alt={subject} style={{ borderRadius: "100px" }} />{" "}
            <span>{senderEmail}</span>
          </div>
        </div>

        <NavLink to={`/mail/${mId}`} className="viewDetails">
          {" "}
          <h3>Subject: {subject}</h3>{" "}
        </NavLink>
        {/* *********  buttons ************* */}
        <div className="btns">
          {trash && (
            <span
              onClick={() => dispatch({ type: "RESTORE", id: mId })}
              title="Restore"
              className="restore"
            >
              {" "}
              <FontAwesomeIcon icon={faTrashRestore} />
            </span>
          )}
          {spam && (
            <div className="spam-and-trash">
              <span
                onClick={() => dispatch({ type: "SPAM", id: mId })}
                title="Restore"
                className="restore"
              >
                {" "}
                <FontAwesomeIcon icon={faTrashRestore} />
              </span>
              <span
                className="btn-delete"
                onClick={() => dispatch({ type: "DELETE", id: mId })}
                title="Delete"
              >
                {" "}
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </div>
          )}
        </div>

        {/* <p className="extraMargin">
          {content.length > 20 ? `${content.substring(0, 120)}...` : content}
        </p> */}

        {/******************  Buttons ************/}
        {inbox && <Buttons mId={mId} unread={unread} isStarred={isStarred} />}
      </li>
    </div>
  );
};
