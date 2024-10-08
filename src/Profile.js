import React, { useEffect } from "react";
import './Profile.css'; // Import the CSS file

function Profile() {
  useEffect(() => {
    document.title = "Profile - เกี่ยวกับเรา"; // อัปเดต title ของหน้า
  }, []);

  return (
    <div className="profile-container">
      <h2 className="profile-title">ติดต่อเรา</h2>
      <p className="profile-text">This is the profile of the user.</p>

      {/* ฝัง Google Map ด้วย iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.4645483021413!2d101.03163371534552!3d13.44543670794028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d370465112e59%3A0xaca69425f428e248!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5guC4i-C4meC4teC5iCDguYDguJfguITguYLguJnguYLguKXguKLguLUgKOC4m-C4o-C4sOC5gOC4l-C4qOC5hOC4l-C4oikgKOC4quC4suC4guC4siAxKQ!5e0!3m2!1sth!2sth!4v1642927369044!5m2!1sth!2sth"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Google Map"
      />
    </div>
  );
}

export default Profile;
