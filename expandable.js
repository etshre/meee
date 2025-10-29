const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

//select all q elements
for(let i=0; i < q.length; i++) {
    //add click event to all 't' elements
    q[i].addEventListener('click'. () => {
        //open the a element with the same i as clicked in the t element
        a[i].classList.toggle('a-opened');
        //rotate corresponding arr component
        arr[i].classList.toggle('arrow-rotated');
    });
}