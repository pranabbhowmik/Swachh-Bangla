import React from "react";
import NotificationComponent from "../components/Notification/NotificationComponent";

function Notification() {
  return (
    <>
      <NotificationComponent
        type="success"
        message=" You have successfully submitted the task!"
      />
      <NotificationComponent type="info" message=" Welcome to Swachh Bangla!" />
      <NotificationComponent
        type="warning"
        message=" Please select a category before submitting."
      />
    </>
  );
}

export default Notification;
