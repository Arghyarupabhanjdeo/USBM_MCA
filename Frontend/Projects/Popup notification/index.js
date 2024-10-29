function showNotification() {
  const notification = document.getElementById("notification");
 // notification.style.display = "block"; //show the notification

  //hide the notification after 5 seconds
  setTimeout(() => {
    notification.style.display= 'none';
  }, 5000);
}
