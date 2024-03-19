import { useState, useEffect } from "react"; // Importování potřebných hooků z Reactu
import Cookies from "js-cookie"; // Importování modulu pro práci s cookies

// Vlastní hook pro správu souhlasu s cookies
function useCookieConsent() {
  // Stavy pro uchování informací o souhlasech s jednotlivými typy cookies a zobrazení banneru
  const [analyticsChecked, setAnalyticsChecked] = useState(false);
  const [technicalChecked, setTechnicalChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  // Efekt pro načtení stavů cookies při prvním renderu komponenty
  useEffect(() => {
    const cookieConsent = Cookies.get("cookieConsent"); // Získání souhlasu s používáním cookies
    if (cookieConsent === "true") {
      setAnalyticsChecked(true); //pokud je povolen cookie consent--check v modalnim okne
      setMarketingChecked(true);
      setShowCookieBanner(false); // Skrytí banneru, pokud je souhlas s cookies udělen
    } else {
      const analyticsConsent = Cookies.get("analyticsConsent"); // Získání souhlasu s analytickými cookies
      const technicalConsent = Cookies.get("technicalConsent"); // Získání souhlasu s technickými cookies
      const marketingConsent = Cookies.get("marketingConsent"); // Získání souhlasu s marketingovými cookies

      // Pokud je alespoň jeden druh cookies povolen, aktualizovat stavy a skrýt banner
      if (
        analyticsConsent === "true" ||
        technicalConsent === "true" ||
        marketingConsent === "true"
      ) {
        setAnalyticsChecked(analyticsConsent === "true"); // Nastavení stavu souhlasu s analytickými cookies
        setTechnicalChecked(technicalConsent === "true"); // Nastavení stavu souhlasu s technickými cookies
        setMarketingChecked(marketingConsent === "true"); // Nastavení stavu souhlasu s marketingovými cookies
        setShowCookieBanner(false); // Skrytí banneru
      }
    }
  }, []);

  // Funkce pro úpravu souhlasů s cookies
  const handleEdit = (newSettings) => {
    // Uložení nových nastavení do cookies
    Cookies.set("analyticsConsent", newSettings.analytics, {
      expires: newSettings.analytics ? 365 : 7,
    });
    Cookies.set("marketingConsent", newSettings.marketing, {
      expires: newSettings.marketing ? 365 : 7,
    });
    Cookies.set("technicalConsent", newSettings.technical, { expires: 365 }); // Nastavení souhlasu s technickými cookies

    // Aktualizace stavů
    setAnalyticsChecked(newSettings.analytics); // Nastavení stavu souhlasu s analytickými cookies
    setMarketingChecked(newSettings.marketing); // Nastavení stavu souhlasu s marketingovými cookies
    setTechnicalChecked(newSettings.technical); // Nastavení stavu souhlasu s technickými cookies

    // Pokud jsou všechny souhlasy povoleny, skrýt banner
    if (
      newSettings.analytics &&
      newSettings.marketing &&
      newSettings.technical
    ) {
      setShowCookieBanner(false); // Skrytí banneru
    }
  };
  useEffect(() => {
    const loadGoogleAnalyticsScript = () => {
      if (!analyticsChecked) return; // Skript se načte pouze pokud je souhlas s analytickými cookies

      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-M7154RCSE3";
      script.async = true;

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-M7154RCSE3");
      };

      document.head.appendChild(script);
    };

    loadGoogleAnalyticsScript();
  }, [analyticsChecked]);

  // Vrací objekt obsahující stavy a funkce pro správu souhlasu s cookies
  return {
    analyticsChecked,
    technicalChecked,
    marketingChecked,
    showCookieBanner,
    setAnalyticsChecked,
    setTechnicalChecked,
    handleEdit,
    setMarketingChecked,
  };
}

export default useCookieConsent; // Exportuje vlastní hook pro správu souhlasu s cookies
