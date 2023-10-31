'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelector('.close-modal');
//全选类名相同的元素
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  //只有在querySelector时才需要dot,对class进行移除操作时不需要添加dot
  //移除CSS中对modal的隐藏
  modal.classList.remove('hidden');
  //移除CSS中对overlay的隐藏
  overlay.classList.remove('hidden');
  //将所有需要更改的CSS部分聚合到一个class中，更方便操作，如果要使用style逐个修改，将十分繁琐
};

//The dry principle
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);

  //The dry principle
  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  btnsCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  // btnsCloseModal.addEventListener('click', function () {
  //   modal.classList.add('hidden');
  //   overlay.classList.add('hidden');
  // });

  // overlay.addEventListener('click', function () {
  //   modal.classList.add('hidden');
  //   overlay.classList.add('hidden');
  // });

  document.addEventListener('keydown', function (e) {
    //按下键盘按键时会触发事件
    //e可以帮助我们知道事件发生的具体信息
    console.log(e.key); //获取按键名称
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      // console.log('Escape was pressed');
      closeModal();
    }
  });
}
