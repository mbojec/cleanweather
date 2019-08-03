require('../../resources/style/main.scss');
import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import GithubLogo from "../../resources/svg/github-logo";

class Footer extends Component{


  render() {

    const style = {
      color: '#C7C7C7'
    };

    return(
      <>
        <div className={'row footer'}>
          <div className={'col-xs-12 col-sm-8 footer__dark-sky-info'}><a href={'https://darksky.net/poweredby/'}>Powered by Dark Sky</a></div>
          <div className={'col-xs-12 col-sm-4 footer__contact-container'}>
            <div className={'footer__contact-container__label'}>Contact</div>
            <div className={'footer__contact-container__email'}><FontAwesomeIcon className={'footer__contact-container__email__logo'} icon={faEnvelope}/><a style={style} href="mailto:mbojec.dev@gmail.com" className={'footer__contact-container__email__address'}>mbojec.dev@gmail.com</a></div>
            <div className={'footer__contact-container__github'}><GithubLogo/><a className={'footer__contact-container__github'} href={'https://github.com/mbojec'}>mbojec</a></div>
          </div>
        </div>
      </>
    )
  }
}

export {Footer}