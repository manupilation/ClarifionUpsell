import GenericMargin from "../../templates/GenericMargin";
import FooterStyles from "./Footer.module.scss";
import WhiteLock from "../../../public/svgs/WhiteLock.svg";

const Footer = () => {
  return (
    <GenericMargin classname={FooterStyles.footerContainer}>
      <footer className={FooterStyles.footerWrapper}>
        <div>
          <p>Copyright (c) 2023</p>
          <p>Clarifionsupport@clarifion.com</p>
        </div>

        <p><img src={WhiteLock} alt="" />Secure 256-bit SSL encryption.</p>
      </footer>
    </GenericMargin>
  );
};

export default Footer;