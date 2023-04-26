import { useContext } from "react";

import { MailContext } from "../context/MailContext";

// font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { Filters } from "../componants/Filters";
import { Mails } from "../componants/Mails";

export const Inbox = () => {
  const { state, filteredMails } = useContext(MailContext);

  return (
    <div className="inbox">
      {/****************** CheckBox ************/}
      <Filters />

      {/****************** Unread Count ************/}
      <h4>
        Unread <FontAwesomeIcon icon={faMailBulk} /> : {state.unReadCount}
      </h4>

      {/****************** Rendering Mails ************/}
      <ul className="inbox-mails">
        {filteredMails.map((email) => (
          <Mails {...email} key={email.mId} inbox />
        ))}
      </ul>
    </div>
  );
};
