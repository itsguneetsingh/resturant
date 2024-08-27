import React from "react";
import "./collaborate.css";

const Collaborate = () => {
  return (
    <div className="collaborate-background">
      <div className="community-heading" id="collaborate-heading">
        <span id="collab-strike">COLLABORATE</span>
        <div>
          <span className="strike-text" id="with-us">
            WITH US
          </span>
          <div className="line" id="white-line"></div>
          <div className="community-description" id="collab-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
            <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore
          </div>
        </div>
      </div>
      <div className="form-master">
        <div className="pair">
          <div className="entry">
            <span>NAME</span>
            <input placeholder="Name" />
          </div>
          <div className="entry">
            <span>SURNAME</span>
            <input placeholder="Surname" />
          </div>
        </div>
        <div className="pair">
          <div className="entry">
            <span>PHONE</span>
            <input placeholder="Phone" />
          </div>
          <div className="entry">
            <span>EMAIL ADDRESS</span>
            <input placeholder="Email" />
          </div>
        </div>
        <div className="pair">
          <div className="entry">
            <span>EXPERIENCE</span>
            <select>
              <option disabled selected hidden>
                Select
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="entry">
            <span>WHERE DID YOU HEAR ABOUT US?</span>
            <select>
              <option disabled selected hidden>
                Select
              </option>
              <option value="Linkedin">LinkedIn</option>
              <option value="Instagram">Instagram</option>
              <option value="twitter">Twitter</option>
              <option>Friend</option>
            </select>
          </div>
        </div>
        <div className="pair" id="button">
          <button id="send-button">SEND</button>
        </div>
      </div>
      <img src="Images/detail02@3x.png" className="background-image" />
    </div>
  );
};

export default Collaborate;
