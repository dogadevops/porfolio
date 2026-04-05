import 'server-only';

import { Locale } from '../config';

const dictionaries = {
  es: () => import('./es.json').then((module) => module.default),
  en: () => import('./en.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();