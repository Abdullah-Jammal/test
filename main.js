
let main = document.querySelector('main')
let section = document.querySelectorAll('section')
let info = document.querySelectorAll('.sss')

console.log(info)

let tl = gsap.timeline({
    scrollTrigger : {
        trigger : main,
        start : 'top top',
        scrub : 1,
        pin: true,
        end : `+=3400`
    }
})
.to(main, {
    x : () => -(main.scrollWidth - document.documentElement.clientWidth) + 'px',
    duration : 1,
    ease : 'none'
})
.to({}, {duration : 2 / (section.length + 1)})









