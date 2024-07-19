import React from 'react';

const Notifications = ({ notifications }) => {
  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-4xl mx-auto bg-white p-5 rounded shadow">
        <h2 className="text-2xl mb-5 text-center font-bold">Notifications</h2>
        {notifications.length === 0 ? (
          <p className="text-gray-500">No notifications.</p>
        ) : (
          <div>
            {notifications.map(notification => (
              <div key={notification.id} className="bg-gray-100 p-3 mb-3 rounded">
                <p className="text-sm">{notification.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
