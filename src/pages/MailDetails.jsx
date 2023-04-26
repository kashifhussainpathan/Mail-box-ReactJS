import { NavLink, useParams } from "react-router-dom";

import { mails as mailsDetails } from "../mailsData/mailsData";

// font - awesome

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export const MailDetails = () => {
  // const { filteredMails } = useContext(MailContext);
  const { mailId } = useParams();
  const mailDetailsToShow = mailsDetails.find(({ mId }) => mId === mailId);

  return (
    <div>
      <h1>Mail Details</h1>
      <ul>
        <li className="mailDetails">
          <div className="profileAndSenderEmail">
            {" "}
            <div>
              <img
                src={mailDetailsToShow?.dp}
                alt={mailDetailsToShow?.subject}
                style={{ borderRadius: "100px" }}
              />{" "}
              <span>{mailDetailsToShow?.senderEmail}</span>
            </div>
            <NavLink to="/" className="GoBack">
              {" "}
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                style={{ fontSize: "18px" }}
                title="Go Back"
              />
            </NavLink>
          </div>
          <h3>Subject: {mailDetailsToShow?.subject}</h3>
          <p
            style={{ marginLeft: "45px" }}
            dangerouslySetInnerHTML={{ __html: mailDetailsToShow?.content }}
          ></p>

          {/* <h3> {mailDetailsToShow?.senderName} </h3> */}
        </li>
      </ul>
    </div>
  );
};
