export const PHONE_DISPLAY = '(85) 98534-1851'
export const PHONE_NUMBER = '5585985341851'
export const EMAIL = 'ts.refrigeracaoclimatiza@gmail.com'
export const DEFAULT_MESSAGE =
  'Olá, gostaria de solicitar um atendimento para instalação ou manutenção de ar-condicionado.'

export const whatsappUrl = (message = DEFAULT_MESSAGE) =>
  `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`
