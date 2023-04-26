import { useContext } from "react";
import { Mails } from "../componants/Mails";
import { MailContext } from "../context/MailContext";

export const Spam = () => {
  const { state } = useContext(MailContext);

  const spammedMails = state.mails.filter((email) => email.isSpammed);

  return (
    <div>
      {spammedMails.length !== 0 ? (
        <div>
          <h1> Spam</h1>
          <ul>
            {spammedMails.map((email) => (
              <Mails {...email} key={email.mId} spam />
            ))}
          </ul>
        </div>
      ) : (
        <h2 style={{ textAlign: "center" }}> Your Spam is empty.</h2>
      )}
    </div>
  );
};
