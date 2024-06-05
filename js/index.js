const btnBox3Tab1 = document.getElementById('box-3-tab-btn-id-1');
const btnBox3Tab2 = document.getElementById('box-3-tab-btn-id-2');
const box3ShowBefore = document.getElementById('box-3-ShowBefore');
const box3ShowAfter = document.getElementById('box-3-ShowAfter');
btnBox3Tab1.addEventListener('click', function(){
    box3ShowBefore.style.display = 'block';
    box3ShowAfter.style.display = 'none';
    btnBox3Tab1.style.borderBottom = '1px solid black';
    btnBox3Tab1.style.color = 'black';
    btnBox3Tab2.style.color = '#888'
    btnBox3Tab2.style.borderBottom = 'none';


})

btnBox3Tab2.addEventListener('click', function(){
    box3ShowBefore.style.display = 'none';
    box3ShowAfter.style.display = 'block';
    btnBox3Tab2.style.borderBottom = '1px solid black';
    btnBox3Tab2.style.color = 'black';
    btnBox3Tab1.style.color = '#888';
    btnBox3Tab1.style.borderBottom = 'none';
})

