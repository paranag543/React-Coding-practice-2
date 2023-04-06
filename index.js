const Box = (props) => {
  //  Write your code here.
  const { className, text } = props;
  const containerClassName = `box-container ${className}`;

  return (
    <div className={containerClassName}>
      <p className="text">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="box-app-container">
    <h1>Boxes</h1>
    <div className="box-list-container">
      <Box className="small-box" text="Small" />
      <Box className="medium-box" text="Medium" />
      <Box className="large-box" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
