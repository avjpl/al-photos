import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';

import behance from '../../web/images/icons/social/behance.svg';
import blogger from '../../web/images/icons/social/blogger.svg';
import dribble from '../../web/images/icons/social/dribble.svg';
import dropbox from '../../web/images/icons/social/dropbox.svg';
import facebook from '../../web/images/icons/social/facebook.svg';
import flickr from '../../web/images/icons/social/flickr.svg';
import gmail from '../../web/images/icons/social/gmail.svg';
import googlePlus from '../../web/images/icons/social/google_plus.svg';
import hike from '../../web/images/icons/social/hike.svg';
import instagram from '../../web/images/icons/social/instagram.svg';
import linkedln from '../../web/images/icons/social/linkedln.svg';
import pinterest from '../../web/images/icons/social/pinterest.svg';
import skype from '../../web/images/icons/social/skype.svg';
import soundcloud from '../../web/images/icons/social/soundcloud.svg';
import stumbleUpon from '../../web/images/icons/social/stumble_upon.svg';
import twitter from '../../web/images/icons/social/twitter.svg';
import vimeo from '../../web/images/icons/social/vimeo.svg';
import websiteLink from '../../web/images/icons/social/website_link.svg';
import whatsApp from '../../web/images/icons/social/whatsApp.svg';
import yahoo from '../../web/images/icons/social/yahoo.svg';
import youTube from '../../web/images/icons/social/youTube.svg';
import menuLines from '../../web/images/icons/menu-lines.svg';

import css from './SVGIcon.css';

const iconMap = {
  behance,
  blogger,
  dribble,
  dropbox,
  facebook,
  flickr,
  gmail,
  googlePlus,
  hike,
  instagram,
  linkedln,
  pinterest,
  skype,
  soundcloud,
  stumbleUpon,
  twitter,
  vimeo,
  websiteLink,
  whatsApp,
  yahoo,
  youTube,
  menuLines,
};

const SVGIcon = ({ icon }) => (
  <SVGInline
    svg={ iconMap[icon] }
    component='div'
    className={css.icon}
  />
);

SVGIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default SVGIcon;
