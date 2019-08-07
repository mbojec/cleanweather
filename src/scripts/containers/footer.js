require('../../resources/style/main.scss');
import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import GithubLogo from "../../resources/svg/githubLogo";
import LinkedinLogo from "../../resources/svg/linkedinLogo";
import GmailLogo from "../../resources/svg/gmailLogo";

class Footer extends Component{


  render() {
    return(
      <div className={'footer'}>
        <div className={'row'}>
          <div className={'col-xs-12'}><h4>Contact</h4></div>
          <div className={'col-xs-12 footer__icons-container'}>
            <a title={'mbojec'} href={'https://github.com/mbojec'}><GithubLogo/></a>
            <a title={'Marek Bojęć'} href={'https://www.linkedin.com/in/marek-boj%C4%99%C4%87-425b68117/'}><LinkedinLogo/></a>
            <a title={'mbojec.dev@gmail.com'} href={'mailto:mbojec.dev@gmail.com'}><GmailLogo/></a>
            <span style={{zIndex:'50',fontSize:'1.0em',}}>
              <a href={'https://darksky.net/poweredby/'}>Powered by Dark Sky</a>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export {Footer}