import { updateAvailable } from './store'

if ('serviceWorker' in navigator) {
  console.log(process.env)
  if (process.env.NODE_ENV === 'production') {
    navigator.serviceWorker.register('/service-worker.js')
    .then((registration) => {
      registration.addEventListener('updatefound', () => {
        const worker = registration.installing
        worker.addEventListener('statechange', () => {
          if (worker.state === 'installed' && navigator.serviceWorker.controller) {
            console.info('[Service Worker] Update found')
            updateAvailable.set(true)
          }
        })
      })
    })
  } else {
    navigator.serviceWorker.getRegistrations()
    .then((registrations) => {
      registrations.forEach((registration) => {
        registration.unregister()
      })
      return registrations.length
    }).then((len) => {
      len > 0 && location.reload()
    })
  }
}
