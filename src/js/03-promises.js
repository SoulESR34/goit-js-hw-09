import Notiflix from "notiflix";

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject)=>{
    if (shouldResolve) {
      resolve({position, delay})
    } else {
      reject({position, delay})
    }
  })

  promise
    .then(({position, delay})=>{
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
    })
    .catch(({position, delay})=>{
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
    })
}

function runFunction(initDelay ,intervalTime, amount){
  let count = 1;
  const intervalId = setInterval(() => {
    if(count === amount + 1){
      clearInterval(intervalId)
    } else {
      createPromise(count, initDelay)
      initDelay += intervalTime;
      count ++;
    }
  }, intervalTime);
}



const btn = document.querySelector('button[type="submit"]'); 

btn.addEventListener('click', (e)=>{
  e.preventDefault();

  const amount = Number(document.querySelector('input[name="amount"]').value);
  const delay = Number(document.querySelector('input[name="delay"]').value);
  let step = Number(document.querySelector('input[name="step"]').value);

  setTimeout(()=>runFunction(delay, step, amount), delay)
})

