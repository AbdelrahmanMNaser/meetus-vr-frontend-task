import React from 'react';

const UserInfoCard = ({ user }) => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h3 className="font-semibold text-gray-700 mb-2">User Information</h3>
      <div className="space-y-2">
        <p className="text-sm text-gray-600">
          <span className="font-medium">ID:</span> {user?.id}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Name:</span> {user?.name}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Email:</span> {user?.email}
        </p>
      </div>
    </div>
  );
};

export default UserInfoCard;