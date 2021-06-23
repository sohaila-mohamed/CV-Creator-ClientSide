import "./profile.css"
import "./profileResponsive.css"
import logo from "./assets/cv logo.png"
import  settings  from "./assets/settings 1.svg";
import  logout  from "./assets/logout 1.svg";
import avatar from "./assets/emily.jpeg";
import share from "./assets/share 1.svg";
import view from "./assets/view 2.svg"
import download from "./assets/download 1.svg";
import cv1 from "./assets/cv1.jpg";
import cv2 from "./assets/cv2.png";
import addSign from "./assets/add 1.svg";
import uploadIco from "./assets/upload.svg";


  const Profile = ()=>{
    return (
        <div>
        <div className="cover">
            <p> cover image</p>
            <label for="coverImg">
                <img src={uploadIco}/>
            </label>
            <input type="file" id="coverImg"/>
          </div>
      <div className="sideNav">
        <img className="sideNav__profilePic" src={avatar}/>
        <p className="sideNav__profileName">emily blunt</p>
        <a className="sideNav__type1">my cv's</a>
       
        <a className="sideNav__type2">cv creator</a>
        <a className="sideNav__type2">best practices guid</a>

        <a className="sideNav__type3"><img src={settings}/>settings</a>
        <a className="sideNav__type3"> <img src={logout}/> logout</a>
    </div>


    <div class="cvContainerLabel">
        profile / my CV's
    </div>

    
    <div class="cvContainer">
        <div class="cvContainer__cvCard">
            <img src={cv2}/>
            <div class="cvContainer__cvCard__panel">
                <img src={share}/>
                <img src={view}/>
                <img src={download}/>
            </div>
     
        </div>
        
        <div class="cvContainer__cvCard">
            <img src={cv1}/>
            <div class="cvContainer__cvCard__panel">
                <img src={share}/>
                <img src={view}/>
                <img src={download}/>
            </div>
        </div>
        <div class="cvContainer__cvCard">
            <img src={cv2}/>
            <div class="cvContainer__cvCard__panel">
                <img src={share}/>
                <img src={view}/>
                <img src={download}/>
            </div>
     
        </div>
        
        <div class="cvContainer__cvCard">
            <img src={cv1}/>
            <div class="cvContainer__cvCard__panel">
                <img src={share}/>
                <img src={view}/>
                <img src={download}/>
            </div>
     
        </div>
        <div class="cvContainer__cvCard" id="newCV">
            <p>create new for new job profile</p>
            <a>
                <img src={addSign} />
            </a>
        </div>

    </div>


        </div>
    )
}
export default Profile;