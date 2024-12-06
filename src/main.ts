import './style.css'

// Add type declaration for the View Transitions API
declare global {
  interface Document {
    startViewTransition(updateCallback: () => void): {
      ready: Promise<void>
      finished: Promise<void>
    }
  }
}

const messages = [
  'Hello, world! 👋',
  'How are you? 😊',
  'View Transitions are cool! ✨',
  'Try clicking again! 🔄'
]

let currentIndex = 0

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#toggle') as HTMLButtonElement
  const content = document.querySelector('#content') as HTMLDivElement

  button.addEventListener('click', () => {
    if (!document.startViewTransition) {
      alert('Your browser doesn\'t support the View Transitions API')
      return
    }

    document.startViewTransition(() => {
      currentIndex = (currentIndex + 1) % messages.length
      content.textContent = messages[currentIndex]
    })
  })
})
