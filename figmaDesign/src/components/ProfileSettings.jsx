import React, { useRef, useState } from "react";
import "./ProfileSettings.css";

const DEFAULT_AVATAR = "https://ui-avatars.com/api/?name=Clara+Smith&background=e5e7eb&color=64748b&size=96";

function ProfileSettings() {
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && ["image/png", "image/jpeg", "image/svg+xml", "image/gif"].includes(file.type)) {
      const reader = new FileReader();
      reader.onload = (ev) => setProfileImage(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (["image/png", "image/jpeg", "image/svg+xml", "image/gif"].includes(file.type)) {
        const reader = new FileReader();
        reader.onload = (ev) => setProfileImage(ev.target.result);
        reader.readAsDataURL(file);
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="profile-settings">
      <div className="settings-header-row">
        <h1 className="settings-title">Settings</h1>
        <div className="settings-search">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="settings-tabs">
        <button className="tab active">My details</button>
        <button className="tab">Company Profile</button>
        <button className="tab">Appearance</button>
        <button className="tab">Team</button>
        <button className="tab">Billing and Plan</button>
        <button className="tab">Notifications</button>
        <button className="tab">Integrations</button>
      </div>
      <form className="settings-form">
        <section className="form-section personal-info">
          <h2>Personal info</h2>
          <p>Update your photo and personal details here.</p>
          <div className="personal-info-fields">
            <div className="form-group">
              <label htmlFor="firstName">Name *</label>
              <div className="form-inline">
                <input id="firstName" type="text" value="Clara" readOnly />
                <input id="lastName" type="text" value="Smith" readOnly />
              </div>
            </div>
            <hr className="form-divider" />
            <div className="form-group">
              <label htmlFor="email">Email address *</label>
              <div className="form-inline">
                <input id="email" type="email" value="clara@bizclues.com" readOnly />
                <button className="verify-btn" type="button">Verify</button>
              </div>
            </div>
            <hr className="form-divider" />
            <div className="form-group">
              <label>Your photo *</label>
              <div
                className="photo-upload"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                tabIndex={0}
                aria-label="Profile image upload area"
              >
                <div
                  className="photo-placeholder"
                  onClick={() => fileInputRef.current.click()}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={profileImage || DEFAULT_AVATAR}
                    alt="Profile preview"
                    className="profile-img-preview"
                  />
                </div>
                <div
                  className="photo-upload-box"
                  onClick={() => fileInputRef.current.click()}
                  style={{ cursor: "pointer" }}
                >
                  Click to upload or drag and drop<br />
                  <span>SVG, PNG, JPG or GIF (max. 800x400px)</span>
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/svg+xml, image/gif"
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    onChange={handleImageChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="form-section change-password">
          <h2>Change Password</h2>
          <p>Your new password must be different to previously used passwords.</p>
          <div className="form-row">
            <div className="form-group">
              <label>Old Password</label>
              <input type="password" value="********" readOnly />
            </div>
            <hr className="form-divider" />
            <div className="form-group">
              <label>New Password</label>
              <input type="password" value="********" readOnly />
              <div className="password-hints">
                <div>Must be at least 8 characters</div>
                <div>Must contain one special character</div>
              </div>
            </div>
            <button className="reset-password-btn" type="button">Reset password</button>
          </div>
        </section>
        <section className="form-section other-info">
          <div className="form-row">
            <div className="form-group">
              <label>Role</label>
              <input type="text" value="Admin" readOnly />
              <div className="role-hint">Please note the role can be changed through <b>Settings &gt; Team &gt; Edit Roles</b>, <a href="#">click here</a> to change the role.</div>
            </div>
            <hr className="form-divider" />
            <div className="form-group">
              <label>Country *</label>
              <select value="Australia" readOnly>
                <option>Australia</option>
              </select>
            </div>
            <hr className="form-divider" />
            <div className="form-group">
              <label>Mobile Number *</label>
              <div className="form-inline">
                <select value="US" readOnly>
                  <option>US</option>
                </select>
                <input type="text" value="+1 (555) 000-0000" readOnly />
                <button className="verify-btn" type="button">Verify</button>
              </div>
            </div>
            <hr className="form-divider" />
            <div className="form-group">
              <label>Timezone</label>
              <select value="Pacific Standard Time (PST)" readOnly>
                <option>Pacific Standard Time (PST) UTC-08:00</option>
              </select>
            </div>
          </div>
        </section>
        <section className="form-section bio-section">
          <div className="form-group">
            <label>Bio *</label>
            <select value="Regular" readOnly>
              <option>Regular</option>
            </select>
            <textarea value="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development." readOnly />
            <div className="char-count">275 characters left</div>
          </div>
        </section>
      </form>
    </div>
  );
}

export default ProfileSettings;
