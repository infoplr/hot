// var d19d = require( "./d19d.mjs" );
// var d19d = await import('./d19d.js');
// import { d19d } from "d19d.cjs";

window.addEventListener( "load", () => {

    /* [ properties ] 
    ================================*/

    var l = document.querySelectorAll( "l" ),
        home = document.querySelector( "#home" ),
        fab = document.querySelector( "fab" ),
        btn_d19d = document.querySelector( "#btn_d19d" ),
        drawer = document.querySelector( "drawer" ); 

    /* [ functions ] 
    =================================*/

    function print( v ) { console.log( v ) }


    /* [ events ] 
    =============================== */

    l.forEach( v => {
        // v.style.color = "#ff9e00";
        v.style.cursor = "pointer";
        v.style.textDecoration = "none";
        v.addEventListener( "click", event => {
            window.open( v.getAttribute( "href" ), "" );
        } );
    } );

    fab.addEventListener( "click", () => {
        drawer.style.width == "" ? 
        drawer.style.width = "0px" :
        drawer.style.width == "0px" ?
        drawer.style.width = "clamp( 100px, 70vw, 250px )" :
        drawer.style.width = "0px" ;
    } );

    btn_d19d.addEventListener( "click", ev => {
        home.innerHTML = d19d;
    } );



    
} );