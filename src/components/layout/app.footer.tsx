import { useTranslation } from "react-i18next";

const AppFooter = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center my-3">
      Copyright © {new Date().getFullYear()} Phung Hoang Anh. {t("footer.madeWith")}{" "}
      <span
        style={{
          color: "#e25555",
        }}
      >
        ♥
      </span>{" "}
      {t("footer.in")}
    </div>
  );
};

export default AppFooter;
