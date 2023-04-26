import { useContext } from "react";
import { MailContext } from "../context/MailContext";

export const Filters = () => {
  const { state, dispatch } = useContext(MailContext);
  return (
    <div>
      <div className="filter-main">
        <h3 className="filter-title">Filters</h3>
        <label htmlFor="unreadMails">
          <input
            type="checkbox"
            name="mail"
            checked={state.isRead}
            onChange={() => dispatch({ type: "READ" })}
          />{" "}
          Show Unread Mails
        </label>
        {/*******/}
        <label htmlFor="starredMails">
          <input
            type="checkbox"
            name="mail"
            checked={state.isStarred}
            onChange={() => dispatch({ type: "STARRED" })}
          />{" "}
          Show Starred Mails
        </label>
      </div>
    </div>
  );
};
