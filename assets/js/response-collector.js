const scriptURL = 'https://script.google.com/macros/s/AKfycbz8O6xbzb3JDm0p0Ho_QkSQklOLD2xctmDRIST1ZQohCxIk-M9JZD_WgQuQYbdTrmqZ/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
             form.reset()
            })