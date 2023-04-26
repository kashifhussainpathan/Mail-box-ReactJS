import { useContext } from "react";
import { Mails } from "../componants/Mails";

import { MailContext } from "../context/MailContext";

export const Trash = () => {
  const { state } = useContext(MailContext);
  const deletedMails = state.mails.filter((email) => email.isDeleted);
  return (
    <div>
      <div>
        {deletedMails.length === 0 ? (
          <h2 style={{ textAlign: "center" }}> Trash is empty. </h2>
        ) : (
          <div>
            <ul>
              <h1>Trash</h1>
              {deletedMails.map((email) => (
                <Mails {...email} key={email.mId} trash />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
