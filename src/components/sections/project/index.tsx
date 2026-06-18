import { Col, Row } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import ProjectCard from "./project.card";
import { PROJECTS, TLanguage } from "../../../helpers/data";

const Project = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage as TLanguage;

  return (
    <>
      <Row>
        <Col xs={12}>
          <h3 className="text-center">
            <Trans
              i18nKey="projectSection.title"
              components={[<span className="brand-red" />]}
            />
          </h3>
          <h6 className="text-center mb-md-5 mb-2">
            {t("projectSection.subtitle")}
          </h6>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {PROJECTS?.map((item) => {
          return (
            <Col md={4} className="project-card" key={item.id}>
              <ProjectCard
                imgPath={item.imgPath}
                title={item.title[lang]}
                description={item.description[lang]}
                githubLink={item.githubLink}
                demoLink={item.demoLink}
                githubLabel={t("projectSection.github")}
                demoLabel={t("projectSection.demo")}
              />
            </Col>
          );
        })}
      </Row>
      <div className="mb-7"></div>
    </>
  );
};

export default Project;
