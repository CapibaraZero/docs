import React, { useState } from "react";

export default function MacToJson() {
  const [mac, setMac] = useState("");
  const [input_mac, setInputMac] = useState("");

  function mac_to_json(e) {
    e.preventDefault();
    if(input_mac.length != 17) {
      setMac("MAC length must be 17. Current length is: " + input_mac.length);
      return;
    }
    if(input_mac.split(":").length != 6) {
      setMac("Invalid MAC address");
      return;
    }
    setMac('[' + input_mac.split(":").map((a) => parseInt(a, 16)).join(",") + ']');
  }

  function update_form(e) {
    setInputMac(e.target.value);
  }

  return (
    <div>
      <form onSubmit={mac_to_json}>
        <label>MAC address:</label>
        <input
          type="text"
          id="mac_address"
          value={input_mac}
          onChange={update_form}
          placeholder="AA:BB:CC:DD:EE:FF"
        />
        <input type="submit" value="Convert MAC address to JSON array"/>
      </form>
      <p>Output MAC: {mac}</p>
    </div>
  );
}
