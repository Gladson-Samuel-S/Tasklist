import Button from "./Button";

const Topbar = ({ onAdd, showAdd }) => {
  return (
    <div className="top-area">
      <h3>My lists</h3>
      <Button
        onClick={onAdd}
        color="#e7e7e7ea"
        text={showAdd ? "Close" : "Add"}
      />
    </div>
  );
};

export default Topbar;
