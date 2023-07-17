import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-3/4  mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-belanosima font-semibold text-2xl text-yellow">
            MOHAMMED HAMID
          </p>
          <p className="font-belanosima text-md text-yellow">
            ©2023 HAMID. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
