import React from "react";

const profileData = {
  NYchicken: {
    name: "강수정",
    description: "Frontend Engeineer",
  },
  homer: {
    name: "호머심슨",
    description: "심슨 아빠",
  },
};

function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자 입니다</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;
