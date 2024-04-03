import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    mode: 'mode',
    light: 'light',
    dark: 'dark',
    singIn: 'Sing In',
    singUp: 'Sing Up',
    user: 'user',
    switch: 'switch',
    name: 'name',
    number: 'number',
    logOff: 'Log Off'
  },

  he: {
    mode: 'מצב',
    light: 'אור',
    dark: 'אפל'
  }
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n
