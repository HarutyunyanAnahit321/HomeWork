import React from "react";
import Name from "./UserInfo/Name";
import Surname from "./UserInfo/Surname";
import Image from "./UserInfo/Image";
import Photo from './download.jpeg';
function User() {
  return (
    <div>
      <Image photo={Photo}/>
      <br/>
      Hello <Name name="Jack"/>  <Surname surname="Sparrow"/>
    </div>
  )
}
export default User;
