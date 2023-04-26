import { createContext, useEffect, useState, useReducer } from "react";

import { mails as mailsDetails } from "../mailsData/mailsData";

export const MailContext = createContext();

const mailReducer = (state, action) => {
  switch (action.type) {
    // Checkbox
    case "STARRED":
      return { ...state, isStarred: !state.isStarred };

    case "READ":
      return { ...state, isRead: !state.isRead };

    // buttons

    case "DELETE":
      const updatedMail = state.mails.map((email) => {
        if (email.mId === action.id) {
          return { ...email, isDeleted: true };
        } else {
          return email;
        }
      });

      return {
        ...state,
        mails: updatedMail
      };
    case "RESTORE":
      const restoredMail = state.mails.map((email) => {
        if (email.mId === action.id) {
          return { ...email, isDeleted: false };
        } else {
          return email;
        }
      });

      return {
        ...state,
        mails: restoredMail
      };

    case "SPAM":
      const spammedMail = state.mails.map((email) => {
        if (email.mId === action.id) {
          return { ...email, isSpammed: !email.isSpammed };
        } else {
          return email;
        }
      });
      return { ...state, mails: spammedMail };

    case "READ-UNREAD":
      const readUnreadMail = state.mails.map((email) => {
        if (email.mId === action.id) {
          return { ...email, unread: !email.unread };
        } else {
          return email;
        }
      });
      const unread = readUnreadMail.reduce(
        (acc, email) => (email.unread ? acc + 1 : acc),
        0
      );
      return { ...state, mails: readUnreadMail, unReadCount: unread };

    case "STAR-UNSTAR":
      const starredMail = state.mails.map((email) => {
        if (email.mId === action.id) {
          return { ...email, isStarred: !email.isStarred };
        } else {
          return email;
        }
      });
      return { ...state, mails: starredMail };
    default:
      return state;
  }
};

// Context
export const MailProvider = ({ children }) => {
  const [mails, setMails] = useState([]);

  useEffect(() => {
    setMails(mailsDetails);
  }, []);

  // Initial Unread Mails Count

  const initialUnread = mailsDetails.reduce(
    (acc, email) => (email.unread ? acc + 1 : acc),
    0
  );

  // reducer
  const [state, dispatch] = useReducer(mailReducer, {
    mails: [...mailsDetails],
    isRead: false,
    isStarred: false,
    unReadCount: initialUnread
  });

  // FilteredData
  const filteredMails = state.mails.filter(
    (mail) =>
      (state.isRead ? mail.unread : true) &&
      (state.isStarred ? mail.isStarred : true) &&
      !mail.isDeleted &&
      !mail.isSpammed
  );

  return (
    <MailContext.Provider value={{ mails, state, dispatch, filteredMails }}>
      {children}
    </MailContext.Provider>
  );
};
