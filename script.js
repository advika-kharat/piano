const c = document.getElementById('c')
const d = document.getElementById('d')
const e = document.getElementById('e')
const f = document.getElementById('f')
const g = document.getElementById('g')
const a = document.getElementById('a')
const b = document.getElementById('b')
const c2 = document.getElementById('c2')
const db = document.getElementById('db')
const eb = document.getElementById('eb')
const gb = document.getElementById('gb')
const ab = document.getElementById('ab')
const bb = document.getElementById('bb')




const c_note = new Audio('assets/piano-mp3_C3.mp3')
const d_note = new Audio('assets/piano-mp3_D3.mp3')
const e_note = new Audio('assets/piano-mp3_E3.mp3')
const f_note = new Audio('assets/piano-mp3_F3.mp3')
const g_note = new Audio('assets/piano-mp3_G3.mp3')
const a_note = new Audio('assets/piano-mp3_A3.mp3')
const b_note = new Audio('assets/piano-mp3_B3.mp3')
const c2_note = new Audio('assets/piano-mp3_C4.mp3')
const db_note = new Audio('assets/piano-mp3_Db3.mp3')
const eb_note = new Audio('assets/piano-mp3_Eb3.mp3')
const gb_note = new Audio('assets/piano-mp3_Gb3.mp3')
const ab_note = new Audio('assets/piano-mp3_Ab3.mp3')
const bb_note = new Audio('assets/piano-mp3_Bb3.mp3')



c.addEventListener('click', () => {
    c_note.play()
})

d.addEventListener('click', () => {
    d_note.play()
})

e.addEventListener('click', () => {
    e_note.play()
})

f.addEventListener('click', () => {
    f_note.play()
})

g.addEventListener('click', () => {
    g_note.play()
})

a.addEventListener('click', () => {
    a_note.play()
})

b.addEventListener('click', () => {
    b_note.play()
})

c2.addEventListener('click', () => {
    c2_note.play()
})

db.addEventListener('click', () => {
    db_note.play()
})

eb.addEventListener('click', () => {
    eb_note.play()
})

ab.addEventListener('click', () => {
    ab_note.play()
})

gb.addEventListener('click', () => {
    gb_note.play()
})

bb.addEventListener('click', () => {
    bb_note.play()
})

