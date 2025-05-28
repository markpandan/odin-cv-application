import "../styles/BasicInfo.css";

export default function BasicInfo() {
  return (
    <div className="card basic-info-section">
      <div className="personal-info">
        <input type="text" id="input-name" placeholder="Name" />
        <input type="text" id="input-occupation" placeholder="Occupation" />
      </div>

      <div className="contact-info">
        <input type="text" id="input-phone-number" placeholder="Phone Number" />
        <input type="text" id="input-email" placeholder="Email" />
        <input type="text" id="input-address" placeholder="Address" />
      </div>
    </div>
  );
}
