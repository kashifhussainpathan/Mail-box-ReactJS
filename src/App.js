import "./styles.css";
import { Routes, Route } from "react-router-dom";

// Componants
import { Inbox } from "./pages/Inbox";
import { Spam } from "./pages/Spam";
import { Trash } from "./pages/Trash";
import { MailDetails } from "./pages/MailDetails";
import { Header } from "./componants/Header";

// Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="view-flex">
        <h1>
          <FontAwesomeIcon icon={faMailBulk} /> Mail Box{" "}
        </h1>

        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="/spam" element={<Spam />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/mail/:mailId" element={<MailDetails />} />
        </Routes>
      </div>
    </div>
  );
}
