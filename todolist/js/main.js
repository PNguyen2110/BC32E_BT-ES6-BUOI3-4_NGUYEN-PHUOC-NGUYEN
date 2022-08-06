function getEle(id){
    return document.querySelector(id)
}

// add actives
function get(){

    getEle('#addItem').onclick = function() {
      const value = getEle('#newTask').value;
      
      getEle('#newTask').value = "";
    
      let html = 
      `<li>
        <span class="text">${value}</span>
        <div class="buttons">
            <button class="remove">
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="complete">
               <span> <i class="fa fa-check-circle"></i></span>
            </button>
        </div>
      
      </li>`
      document.querySelector('#todo').insertAdjacentHTML('afterbegin',html)
        actives()
    }
}
get()

// xoá và hoàn thành hoạt động

  
function actives(){
    const liList = document.querySelectorAll('li');
    liList.forEach(li => {
       // xoá
      const  btnRemove = li.querySelector('.remove');
     
        btnRemove.onclick = () => {
            li.remove()
        }
        // đánh dấu hoàn thành
        const btnComplete = li.querySelector('.complete');
        btnComplete.onclick = () => {

            const spanEle = btnComplete.querySelector('#completed span')
            if(!spanEle){

                getEle('#completed').insertAdjacentElement('afterbegin',li)
            }else{

                getEle('#todo').insertAdjacentElement('beforeEnd',li)


            }

        }
    })
}

// sắp xếp a -> z
    
    getEle('#two').onclick = () =>{
            let arr = [];
            document.querySelectorAll('.text').forEach(item => {
                arr.push(item.innerHTML);
                 arr.sort((a,b) => a > b ? 1 : -1)  
                });
                render(arr);
        };
    
//sắp xếp z -> a
let html = '';
getEle('#three').onclick = () => {
    let arr = [];
    // Dom thẻ li 
    document.querySelectorAll('.text' ).forEach(items => {
        arr.push(items.innerHTML);
        arr.sort((a,b) => a > b ? -1 : 1)
    });
    render(arr);
};
// render
function render(arr){
    arr.forEach((itemss) => {
        html += 
        `<li>
            <span class="text">${itemss}</span>
            <div class="buttons">
                <button class="remove">
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="complete">
                    <span><i class="fa fa-check-circle"></i></span>
                </button>
            </div>
         </li>`
    })
    getEle('#todo').innerHTML = html;
    arr = []
    html = '';
    actives()
}