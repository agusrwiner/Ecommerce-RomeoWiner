// const burger = document.querySelector('.burger');
// const tabs = document.querySelector('.tabs');
// const tab_LI = document.querySelectorAll(".tab-LI");
// const exitModal = document.querySelector('.exitModal');

// const displayNav = ()=>{
//     //activates 'burger' animation
//     burger.classList.toggle( 'burger-active' );
    
//    //activates 'tabs' animation
//     tabs.classList.toggle( 'tabs-active' );

//     //fade efect for each 'tab_LI'
//     tab_LI.forEach( (link,index) => {
//         if ( link.style.animation ) {
//             link.style.animation = ``;
//         }else{
//             link.style.animation = `linksFadeIn 500ms ease-out forwards ${index / 7 + .5}s`;
//         }
//     });

//     exitModal.classList.toggle( "exitModal-active" );

//     if ( tabs.getAttribute( "aria-expanded" ) === "true" ) {
//         tabs.setAttribute( "aria-expanded","false" );
//     } else if (tabs.getAttribute( "aria-expanded" ) === "false" ) {
//         tabs.setAttribute( "aria-expanded","true" );
//     }
// }

// burger.addEventListener( "click",displayNav );
// exitModal.addEventListener( "click",displayNav );
// tabs.addEventListener( "click",(e) => {
//     if ( tabs.getAttribute( "aria-expanded" ) === "true"  && !e.target.matches( ".tab-LI-A" ) && !e.target.matches( ".tab-LI" ) ) {
//         displayNav();
//     }
// });