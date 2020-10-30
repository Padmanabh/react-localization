// import React, { Component } from "react";
// import { withTranslation } from "react-i18next";

// class LegacyComponentClass extends Component {
//   render() {
//     const { t, i18n } = this.props;
//     i18n.changeLanguage("chin");

//     return <h1>{t("Title")}</h1>;
//   }
// }
// const MyComponent = withTranslation()(LegacyComponentClass);

// // i18n translations might still be loaded by the http backend
// // use react's Suspense
// export default MyComponent;

// import React from "react";
// import { useTranslation } from "react-i18next";

// export default function MyComponent() {
//   const { t, i18n } = useTranslation();

//   return <h1>{t("Welcome to React")}</h1>;
// }
