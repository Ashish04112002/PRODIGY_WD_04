import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Social = () =>{
    return(
        <div className="home_social">
            <a href="https://instagram.com/ashu_kahar04" className="home_social-icon" target="_black">
                <InstagramIcon/>
            </a>

            <a href="https://www.linkedin.com/in/ashishkahar" className="home_social-icon" target="_black">
                <LinkedInIcon/>
            </a>

            <a href="https://github.com/Ashish04112002" className="home_social-icon" target="_black">
                <GitHubIcon/>
            </a>
        </div>
    )
}
export default Social;