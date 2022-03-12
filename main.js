let theInput = document.querySelector('.inputbox input')
let btn = document.querySelector('.inputbox .icon')
let icon = document.querySelector('.inputbox .icon i')

var SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

if (SpeechRecognition) {
  console.log('good')
  let recognition = new SpeechRecognition()
  //   console.log(recognition)
  btn.addEventListener('click', function () {
    if (icon.classList.contains('fa-microphone')) {
      icon.classList.replace('fa-microphone', 'fa-microphone-slash')
      recognition.start()
    } else {
      icon.classList.replace('fa-microphone-slash', 'fa-microphone')
      recognition.stop()
    }
  })
  recognition.addEventListener('start', () => {
    icon.classList.replace('fa-microphone', 'fa-microphone-slash')
    console.log('started')
  })
  recognition.addEventListener('end', () => {
    icon.classList.replace('fa-microphone-slash', 'fa-microphone')
    console.log('ended')
  })
  recognition.addEventListener('result', (e) => {
    let transscript = e.results[0][0].transcript
    console.log(transscript)
    theInput.value = transscript
    setTimeout(() => {
      search(theInput.value)
    }, 2000)
  })
} else {
  console.log('Not Supported')
}

function search(searchval) {
  location.href = `https://www.google.com/search?q=${searchval}`
}
