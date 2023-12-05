import { useState } from "react";
import "./App.css";
const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    content: "Authorize the user data ✅",
  },
  {
    id: 2,
    title: "ITEM 2",
    content: "Redirect user to cart page 🛒 ",
  },
  {
    id: 3,
    title: "ITEM 3",
    content: "Create new payment for the user 💰",
  },
];
function ActiveTab() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <button id="show-btn" onClick={() => setIsOpen(!isOpen)}>
        Display / Hide it!
      </button>
      <div className="tab">{isOpen && <ShowResult />}</div>
    </div>
  );
}

export default ActiveTab;

function ShowResult() {
  const [activeTab, setActiveTab] = useState(1);
  function handleActiveTab(id) {
    setActiveTab(id);
  }
  return (
    <div id="mainTab">
      <div className="tab__header">
        {tabData.map((tab) => {
          return (
            <button
              className={activeTab === tab.id ? "active" : " "}
              onClick={() => handleActiveTab(tab.id)}
              key={tab.id}
            >
              <span className="tab-item__title">{tab.title}</span>
              <span className="tab-indicator"></span>
            </button>
          );
        })}
      </div>
      <div className="tab__content">{tabData[activeTab - 1].content}</div>
    </div>
  );
}
