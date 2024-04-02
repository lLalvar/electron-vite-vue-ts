import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  // default locale

  locale: 'en',

  // translations

  messages: {
    en: {
      mode: 'mode',
      appTitle: 'Mushahed'
    },

    ar: {
      mode: 'الوضع',
      appTitle: 'مشاهد'
    }
  }
})

export default i18n
