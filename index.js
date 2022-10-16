const addButton =document.querySelector('#add');
  const updateLSData=()=>{
    const textarea=document.querySelectorAll('textarea');
    const notes=[];
    textarea.forEach((note)=>{
        return notes.push(note.value);
    })

    localStorage.setItem('notes',JSON.stringify(notes));


  }
const addNewNote=(text='')=>{
    const note  =document.createElement('div');
    note.classList.add('note');
    const htmlData=` 
    <div class="operation">
        <button class="edit"><i class="fa-regular fa-pen-to-square"></i></button>
        <button class="delete"><i class="fa-solid fa-trash"></i></button>
    </div>

    <div class="main ${text ? '' : 'hidden' }"></div>
    <textarea class="${text ? 'hidden' : '' }"></textarea>`;

    
    note.insertAdjacentHTML("afterbegin",htmlData);


    const editButton=note.querySelector('.edit');
    const delButton=note.querySelector('.delete');
    const maindiv=note.querySelector('.main');
    const textarea=note.querySelector('textarea');

    //deleting
    delButton.addEventListener('click',()=>{
        note.remove();
        updateLSData();
    })
   
    //toggling
    textarea.value=text;
    maindiv.innerHTML=text;

    editButton.addEventListener('click',()=>{
        maindiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');

        updateLSData();

    })

    textarea.addEventListener('change',(event)=>{
        const value=event.target.value;

        maindiv.innerHTML=value;
    })


    document.body.appendChild(note);
    
}

const notes=JSON.parse(localStorage.getItem('notes'));

if(notes){
    notes.forEach((note)=> addNewNote(note)) };


addButton.addEventListener('click',()=>{
    return addNewNote();
})