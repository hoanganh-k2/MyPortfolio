import Typewriter from "typewriter-effect";
import SocialMedia from "../social.media";
import { useTranslation } from "react-i18next";
import "./hero.scss";
import ResizeButton from "../resize.button";
import { CONTACT } from "../../../helpers/data";
import { MdFileDownload } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";

interface IProps {
  scrollToExp: () => void;
}

const HeroLeft = (props: IProps) => {
  const { scrollToExp } = props;
  const { t, i18n } = useTranslation();

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const ReviewCv = () => {
    openInNewTab(CONTACT.CV_URL);
  };

  const roles = t("heroSection.roles", { returnObjects: true }) as string[];

  return (
    <div className="hero-left">
      <h3>
        {t("heroSection.greeting")}{" "}
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h3>
      <h3 style={{ paddingTop: 10, paddingBottom: 5 }}>
        {t("heroSection.iam")} &nbsp;
        <strong className="brand-red">PHUNG HOANG ANH</strong>
      </h3>
      <div className="hero-typewriter">
        <Typewriter
          key={i18n.resolvedLanguage}
          options={{
            strings: roles,
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            wrapperClassName: "brand-green",
          }}
        />
      </div>
      <div className="hero-badges">
        <span className="hero-badge">TOPIK 5</span>
        <span className="hero-badge">TOEIC 795</span>
        <span className="hero-badge">BrSE / KRSE</span>
      </div>
      <div className="mt-md-5 mt-3 mb-md-5 mb-2">
        <SocialMedia />
      </div>
      <div className="d-md-flex d-none gap-4">
        <ResizeButton
          onClick={scrollToExp}
          btnText={t("heroSection.exp")}
          btnIcons={<AiFillFire style={{ color: "orange" }} />}
          btnStyle={{
            background: "unset",
            border: "1px solid var(--border-hero-right)",
            color: "var(--text-white-1)",
          }}
        />
        <ResizeButton
          onClick={ReviewCv}
          btnText={t("heroSection.cv")}
          btnIcons={<MdFileDownload />}
        />
      </div>
    </div>
  );
};

export default HeroLeft;
