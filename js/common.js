'use strict';

// search

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// console.log(searchEl,searchInputEl);
searchEl.addEventListener('click', () =>{
    searchInputEl.focus();
});
searchInputEl.addEventListener('focus',(e)=>{
    searchEl.classList.add('focused');
    e.target.setAttribute('placeholder','통합검색');
});
searchInputEl.addEventListener('blur',(e)=>{
    searchEl.classList.remove('focused');
    e.target.setAttribute('placeholder','');
});

// 연도
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

// to-top 버튼을 클릭하면 문서의 상단으로 이동
// gsap에서 모든 기능들을 구현 한다면
// 로딩 시간등의 무거운 사이트가 된다.
// 이를 보완하기 위해 별도 기능별로 구분
// gsap의 scrollTopPlugin을 사용해야 한다.
// window 이벤트에 적용

