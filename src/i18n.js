import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        Title: "My Album",
        AppDescription:
          "Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.",
        CardHeading: "Heading",
        CardDescription:
          "This is a media card. You can use this section to describe the content.",
        ButtonView: "View",
        ButtonEdit: "Edit",
        Footer: "Footer",
        FooterTagLine: "Something here to give the footer a purpose!",
        PrimaryCallOut: "Book Now",
        SecondaryCallOut: "Contact Us",
        ImageTitle: "This is a random image",
        Copyright: "Copyright © ",
      },
    },
    hin: {
      translations: {
        Title: "मेरे एल्बम",
        AppDescription:
          "नीचे दिए गए संग्रह के बारे में कुछ छोटा और अग्रणी - इसकी सामग्री, निर्माता, आदि इसे छोटा और मीठा बनाते हैं, लेकिन बहुत छोटा नहीं है इसलिए लोग इसे पूरी तरह से छोड़ नहीं देते हैं।",
        CardHeading: "शीर्षक",
        CardDescription:
          "यह एक मीडिया कार्ड है। सामग्री का वर्णन करने के लिए आप इस अनुभाग का उपयोग कर सकते हैं।",
        ButtonView: "देखें",
        ButtonEdit: "संपादित करें",
        Footer: "फूटर",
        FooterTagLine: "कुछ यहाँ फूटर लेख एक उद्देश्य देने के लिए!",
        PrimaryCallOut: "अभी बुक करें",
        SecondaryCallOut: "संपर्क करें",
        ImageTitle: "यह एक यादृच्छिक छवि है",
        Copyright: "कॉपीराइट © ",
      },
    },
    chin: {
      translations: {
        Title: "我的专辑",
        AppDescription:
          "以下是关于该系列的简短内容和主要内容-它的内容，创作者等。使它简短有趣，但又不要太短，以使人们不会简单地完全跳过它。",
        CardHeading: "标题",
        CardDescription: "这是媒体卡。您可以使用此部分描述内容。",
        ButtonView: "视图",
        ButtonEdit: "编辑",
        Footer: "页脚",
        FooterTagLine: "这里有一些东西可以使页脚有目的！",
        PrimaryCallOut: "现在预订",
        SecondaryCallOut: "联系我们",
        ImageTitle: "这是随机图像",
        Copyright: "版权所有©",
      },
    },
  },
  fallbackLng: "en",
  debug: true,
  lng: "en",

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ",",
  },

  react: {
    wait: true,
  },
});

export default i18n;
