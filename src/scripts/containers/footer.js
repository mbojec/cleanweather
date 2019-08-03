require('../../resources/style/main.scss');
import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import GithubLogo from "../../resources/svg/github-logo";

class Footer extends Component{


  render() {
    return(
      <>
        <div className={'row footer'}>
          <div className={'col-xs-12 col-sm-8 footer__dark_sky_info'}><a href={'https://darksky.net/poweredby/'}>Powered by Dark Sky</a></div>
          <div className={'col-xs-12 col-sm-4 footer__contact_container'}>
            <div>Contact</div>
            <div className={'footer__contact_container__email'}><FontAwesomeIcon className={'footer__contact_container__email__logo'} icon={faEnvelope}/><div className={'footer__contact_container__email__address'}>mbojec.dev@gmail.com</div></div>
            <div className={'footer__contact_container__github'}><GithubLogo/><a className={'footer__contact_container__github'} href={'https://github.com/mbojec'}>mbojec</a></div>
          </div>
        </div>
      </>
    )
  }
}

export {Footer}