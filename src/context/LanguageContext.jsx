import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('proposal_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('proposal_lang', lang);
  }, [lang]);

  const toggleLanguage = (newLang) => {
    if (newLang) {
      setLang(newLang);
    } else {
      setLang((prev) => (prev === 'en' ? 'nl' : 'en'));
    }
  };

  const t = (keyPath) => {
    const keys = keyPath.split('.');
    let current = translations[lang] || translations.en;
    
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to English if translation is missing
        let fallback = translations.en;
        for (const fk of keys) {
          if (fallback && fallback[fk] !== undefined) {
            fallback = fallback[fk];
          } else {
            return keyPath;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
