import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';

const CoachDashboard = ({ coachId }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Set up Pusher
    const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
      cluster: process.env.REACT_APP_PUSHER_CLUSTER,
    });

    // Subscribe to the coach's channel
    const coachChannel = pusher.subscribe(`coach-${coachId}`);

    // Listen for new-subscriber events
    coachChannel.bind('new-subscriber', (data) => {
      // Handle the new subscriber notification
      console.log(data)
      // Update the notifications state with the new notification
      setNotifications((prevNotifications) => [...prevNotifications, data]);
    });

    return () => {
      pusher.unsubscribe(`coach-${coachId}`);
    };
  }, [coachId]);

  return (
    <div>
      {/* Coach Dashboard UI */}
      <div>
        <h2>Notifications</h2>
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id}>{notification.message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CoachDashboard;
