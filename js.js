

window.addEventListener( "load", () => {

    /* [ properties ] 
    ================================*/

    var l = document.querySelectorAll( "l" ),
        home = document.querySelector( "#home" ),
        fab = document.querySelector( "fab" ),
        fabCircle = document.querySelector( "circle" ),
        btn_d19d = document.querySelector( "#btn_d19d" ),
        drawer = document.querySelector( "drawer" ); 

    /* [ functions ] 
    =================================*/

    function print( c, e, o ) { o ? console.log( c, e, o ) : !o && e ? console.log( c, e ) : console.log( c ) }


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
    fab.addEventListener( "mouseover", ev => {
        fab.style.transform = "rotate( 150deg )";
        fab.style.borderRadius = "24px 15px 24px 15px";
        fabCircle.style.borderRadius = "24px 15px 24px 15px";
    } );
    fab.addEventListener( "mouseleave", ev => {
        fab.style.transform = "rotate( -5deg )";
        fab.style.borderRadius = "2rem";
        fabCircle.style.borderRadius = "2rem";
    } );

    btn_d19d.addEventListener( "click", ev => {
        home.innerHTML = d19d;
    } );



    
} );