import { Notify } from 'quasar'
import Errors from 'src/utils/errors'

export const notificarErro = (msg, error = null) => {
  console.log('notificarErro', msg, error)
  let erro = ''
  if (error) {
    erro = error?.data?.error || error?.data?.msg || error?.data?.message || error?.response?.data.error || 'Não identificado'
  }
  const findErro = Errors.find(e => e.error == erro)
  let message = ''

  if (error && findErro.error) {
    message = `
      <p class="text-bold">
      Ops...<br>
      <span class="text-bold">${findErro.description}.</span>
      </p>
      <p>${findErro.detail}</p>
    `
  } else {
    message = `
    <p class="text-bold">
      Ops...<br>
      <span class="text-bold">${msg}</span>
    </p>
    <p>Detail: ${erro}</p>
    `
  }

  Notify.create({
    type: 'negative',
    progress: true,
    position: 'top',
    timeout: 2500,
    message,
    actions: [{
      icon: 'close',
      round: true,
      color: 'white'
    }],
    html: true
  })
  throw new Error(message)
}

export const notificarSucesso = (msg) => {
  const message = `Tudo certo... <br>${msg}.`
  Notify.create({
    type: 'positive',
    progress: true,
    position: 'top',
    message,
    timeout: 2500,
    actions: [{
      icon: 'close',
      round: true,
      color: 'white'
    }],
    html: true
  })
}
