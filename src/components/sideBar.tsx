import "./sideBar.css";

const SideBar = () => {
  return (
    <div id="navigationBar">
      <div className="navigationBarItem">
        <p id="center">כל ההודעות</p>
        <button>home</button>
      </div>

      <div className="navigationBarItem">
        <p id="center">פריטים שנשמרו</p>
        <button>note</button>
      </div>

      <div className="navigationBarItem">
        <p id="center">מועדפים</p>
        <button>heart</button>
      </div>
    </div>
  );
};

export default SideBar;