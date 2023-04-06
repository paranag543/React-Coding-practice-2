const Notification = (props) => {
  //  Write your code here.
  const { className, iconUrl, message } = props;
  const containerClassName = `notification-container ${className}`;

  return (
    <div className={containerClassName}>
      <img className="image" src={iconUrl} />
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="notifications-app-container">
    <h1 className="title">Notifications</h1>
    <div className="notifications-list-container">
      <Notification
        className="primary-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="information message"
      />
      <Notification
        className="success-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="success message"
      />
      <Notification
        className="warning-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="warning message"
      />
      <Notification
        className="danger-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
