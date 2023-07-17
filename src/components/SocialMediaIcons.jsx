import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faVimeoV, faYoutube, faImdb, faGithub, faArtstation } from '@fortawesome/free-brands-svg-icons'

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://linkedin.com/in/mhamid3d"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://vimeo.com/user56193956"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faVimeoV} size="2x"/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.youtube.com/channel/UCTZjGre5oTur_iW9gpNvlwg/featured"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x"/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.imdb.com/name/nm10376670"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faImdb} size="2x"/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/mhamid3d"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="2x"/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.artstation.com/mhamid3d"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faArtstation} size="2x"/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
