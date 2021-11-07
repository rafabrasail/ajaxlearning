console.log('hello world')

const helloWorld = document.getElementById('hello-world')
const postsBox = document.getElementById('posts-box')
const spinnerBox = document.getElementById('spinner-box')
const spinnerBoxx = document.getElementById('spinner-boxx')

// helloWorld.textContent = 'hello world'
// helloWorld.innerHTML = 'hello <b>world</b>'

$.ajax({
    type: 'GET',
    url: '/hello/',
    success: function(response){
        console.log('success', response.text)
        console.log('success', response)
        helloWorld.innerHTML = 'hello <b>world</b>'
    },
    error: function(error){
        console.log('error', error)
    }
})

$.ajax({
    type: 'GET',
    url: '/data/',
    success: function(response){
        console.log(response)
        const data = response.data
        setTimeout( () => {
            spinnerBox.classList.add('not-visible')
            spinnerBoxx.classList.add('not-visible')
            console.log(data)
            data.forEach(el => {
                postsBox.innerHTML += `
                    <div class="card mb-2">
                        <div class="card-body">
                            <h5 class="card-title">${el.title}</h5>
                            <p class="card-text">${el.body}</p>
                        </div>
                        <div class="card-footer">   
                            <div class="row">
                                <div class="col">
                                    <a href="#" class="btn btn-primary">Details</a>
                                </div>
                                <div class="col">
                                    <a href="#" class="btn btn-primary">Like</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            });
        }, 1000)
    },
    error: function(error){
        console.log(error)
    }
})