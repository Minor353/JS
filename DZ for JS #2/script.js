///////////////////Задание 1///////////////////

const elem = document.createElement('div');

document.body.appendChild(elem);

elem.textContent = 'Этот элемент создан при помощи DOM API';

////////////////////////////////////////////////////

//////////////////Задание 2//////////////////////////

const elem2 = document.createElement('div');

elem2.classList.add('inner');

elem2.textContent = 'Этот элемент тоже создан при помощи DOM API';

elem.appendChild(elem2);

/////////////////////////////////////////////////////////

///////////////////Задание 3////////////////////////////

elem2.style.color = 'red';

////////////////////////////////////////////////////////

////////////////////Задание 4//////////////////////////

elem.addEventListener('click', function(){
    console.log('Этот текст говорит о том, что я всё сделал правильно');
})

////////////////////Задание 5///////////////////////////

const link = document.createElement('a');

link.setAttribute('href', 'https://loftschool.com');

document.body.appendChild(link);

link.textContent = 'Ссылка!';

link.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Я кликнул на ссылку ' + link.getAttribute('href'));
})

//////////////////////////////////////////////////////////