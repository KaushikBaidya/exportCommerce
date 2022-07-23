import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

function Language() {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(
    localStorage.getItem("i18nextLng").slice(0, 2)
  );

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.currentTarget.value);
    setLanguage(e.currentTarget.value);
  };

  return (
    <>
      <div className="p-2 text-white flex rounded border-transparent border-b-4 text-md font-medium uppercase">
        {language === "en" ? (
          <button
            className="flex items-center border px-1 space-x-1"
            value="bn"
            type="submit"
            onClick={handleLanguageChange}
          >
            <span>BN</span>
            <img src="/images/icons/bd.png" className="w-5 h-5" alt="uk" />
          </button>
        ) : (
          <button
            className="flex items-center border px-1 space-x-1"
            value="en"
            type="submit"
            onClick={handleLanguageChange}
          >
            <span>EN</span>
            <img src="/images/icons/uk.png" className="w-5 h-5" alt="uk" />
          </button>
        )}
      </div>
    </>
  );
}

export default Language;

// import React, { useEffect, useState } from "react";

// import { useTranslation } from "react-i18next";
// import i18next from "i18next";

// function Language() {
//   const { i18n } = useTranslation();

//   const [language, setLanguage] = useState(
//     localStorage.getItem("i18nextLng").slice(0, 2)
//   );

//   useEffect(() => {
//     if (localStorage.getItem("i18nextLng")?.length > 2) {
//       i18next.changeLanguage("en");
//     }
//   }, []);

//   const handleLanguageChange = (e) => {
//     console.log(e.Target.value, "yyy");
//     i18n.changeLanguage(e.target.value);
//     setLanguage(e.target.value);
//   };

//   console.log(language);
//   return (
//     <>
//       <div className="p-2 text-white flex rounded border-transparent border-b-4 hover:text-white text-md font-medium uppercase">
//         {language === "en" ? (
//           <button
//             className="flex items-center border px-1 space-x-1 cursor-pointer"
//             value="bn"
//             onClick={handleLanguageChange}
//           >
//             <span>BN</span>
//             <img src="/images/icons/bd.png" width="20" height="20" alt="bn" />
//           </button>
//         ) : (
//           <button
//             className="flex items-center border px-1 space-x-1 cursor-pointer"
//             value="en"
//             onClick={handleLanguageChange}
//           >
//             <span>EN</span>
//             <img src="/images/icons/uk.png" width="20" height="20" alt="uk" />
//           </button>
//         )}
//       </div>
//     </>
//   );
// }

// export default Language;
