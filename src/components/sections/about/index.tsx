import { Col, Row } from "react-bootstrap";
import AnimationLottie from "components/share/animation-lottie";
import codingJSON from "assets/lottie/coding.json";
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";

import GlowCard from "components/share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import { Trans, useTranslation } from "react-i18next";
import Divider from "../divider";
import { LANGUAGES_DATA, TLanguage } from "helpers/data";
import SocialMedia from "../social.media";
import "./about.scss";

const About = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage as TLanguage;

  return (
    <>
      <Row>
        <Col md={6} xs={12}>
          <h3 className="text-center mb-md-5 mb-2">
            <Trans
              i18nKey="aboutSection.title"
              components={[<span className="brand-red" />]}
            />
          </h3>
          <div>
            <p>{t("aboutSection.intro1")}</p>
            <p>{t("aboutSection.intro2")}</p>
            <p>{t("aboutSection.intro3")}</p>
          </div>
          <div>
            <p>{t("aboutSection.hobbiesIntro")}</p>
            <ul>
              <li>{t("aboutSection.hobby1")}</li>
              <li>{t("aboutSection.hobby2")}</li>
              <li>{t("aboutSection.hobby3")}</li>
            </ul>
          </div>
          <div>
            <p className="text-center brand-red">{t("aboutSection.quote")}</p>
          </div>
        </Col>
        <Col
          md={6}
          xs={12}
          className="d-flex align-items-center justify-content-center"
        >
          <AnimationLottie width="80%" animationPath={codingJSON} />
        </Col>
      </Row>

      <Row className="mb-4 mb-md-5">
        <Col
          md={6}
          xs={12}
          className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
        >
          <AnimationLottie
            width="50%"
            //animation with rp => convert sang text
            // https://github.com/airbnb/lottie-web/issues/2070
            animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
          />
        </Col>
        <Col md={6} xs={12} className="mt-md-5 mt-3">
          <div className="d-flex flex-column gap-4">
            <div>
              <h4 className="text-center brand-red mb-3">
                {t("aboutSection.educationTitle")}
              </h4>
              <GlowCard identifier={`education-1`}>
                <div className="p-3 relative">
                  <div className="experience-container">
                    <div className="duration-text">
                      <p>2022-2026</p>
                    </div>
                    <div className="details">
                      <div className="icon">
                        <FaGraduationCap size={36} />
                      </div>
                      <div className="info">
                        <p className="title">{t("aboutSection.eduMajor")}</p>
                        <p className="company">{t("aboutSection.eduSchool")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>

            <div>
              <h4 className="text-center brand-red mb-3">
                {t("aboutSection.languagesTitle")}
              </h4>
              <div className="language-list">
                {LANGUAGES_DATA.map((item) => (
                  <div className="language-card" key={item.id}>
                    <span className="language-name">{item.name[lang]}</span>
                    <span className="language-level">{item.level[lang]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Divider />
      <Row className="align-items-center">
        <Col md={6} xs={12} className=" mt-md-5 mt-3">
          <h3 className="mb-2">
            <Trans
              i18nKey="contactSection.title"
              components={[<span className="brand-red" />]}
            />
          </h3>
          <p className="text-muted-1">{t("contactSection.subtitle")}</p>
          <SocialMedia />
        </Col>
        <Col
          md={6}
          xs={12}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <AnimationLottie
            width="50%"
            //animation with rp => convert sang text
            // https://github.com/airbnb/lottie-web/issues/2070
            animationPath={JSON.parse(CONTACT_LOTTIE)}
          />
        </Col>
      </Row>
      <div className="mb-5"></div>
    </>
  );
};

export default About;
