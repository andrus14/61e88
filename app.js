const textBoxDiv = document.getElementById('text-box')
const typingArea = document.getElementById('typing-area')
const feedbackDiv = document.getElementById('feedback')

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis erat nec erat ultrices malesuada. Etiam urna ipsum, varius ac euismod eget, porttitor et nibh. Maecenas diam ligula, vehicula in lacinia ac, dapibus id urna. Praesent eu turpis ultricies, consectetur augue sit amet, ullamcorper nibh. Ut pharetra eros quis suscipit venenatis. Praesent ultricies mauris sed nibh pulvinar, vitae ullamcorper ligula tincidunt. Integer ullamcorper tincidunt ipsum, at tincidunt nulla lobortis interdum. Sed at massa magna. Sed dignissim accumsan augue, nec gravida dolor accumsan id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque posuere nisi a ipsum rhoncus, ac eleifend ex eleifend. Ut in interdum tortor, ut porttitor elit.'
const checkedWordArray = text.split(' ')
let wordCounter = 0

let errorCounter = 0
feedbackDiv.innerText = errorCounter

typingArea.focus()

highlight()

typingArea.addEventListener('keydown', event => {

    console.log(event.keyCode);

    if ( event.ctrlKey && event.keyCode == 82 ) {
        event.preventDefault()
        errorCounter = 0
        feedbackDiv.innerText = errorCounter

        console.log('ctrl + r')
    }

    if ( event.keyCode == 32 ) {
        const typedWordArray = typingArea.value.split(' ')

        if ( typedWordArray[wordCounter] == checkedWordArray[wordCounter] ) {
            checkedWordArray[wordCounter] = '<span class="correct-word">' + checkedWordArray[wordCounter] + '</span>'
            console.log('Yes')
        } else {
            errorCounter++
            feedbackDiv.innerText = errorCounter
            checkedWordArray[wordCounter] = '<span class="incorrect-word">' + checkedWordArray[wordCounter] + '</span>'
        }
        wordCounter++
        highlight()
    }
})

function highlight () {
    let wordArray = [...checkedWordArray]
    wordArray[wordCounter] = '<span class="highlighted">' + wordArray[wordCounter] + '</span>'
    textBoxDiv.innerHTML = wordArray.join(' ')
}