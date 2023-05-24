const $ = ( e ) => document.querySelector( e );
const $$ = ( e ) => document.querySelectorAll( e );

$$( ".number, .operator" ).forEach( ( btn ) =>
{
    btn.addEventListener( "click", () =>
    {
        $( "#history-value" ).innerHTML += btn.attributes.val.value;
    } );
} );

$( ".equal" ).addEventListener( "click", () =>
{
    let x = $( "#history-value" ).innerHTML;
    let y = eval( x );
    $( "#output-value" ).innerHTML = y;
} );

$( "#clear" ).addEventListener( "click", () =>
{
    $( "#history-value" ).innerHTML = " ";
    $( "#output-value" ).innerHTML = " ";
} );

$( "#backspace" ).addEventListener( "click", () =>
{
    var inputVal = $( "#history-value" ).innerHTML;
    sliceInpVal = inputVal.length;
    inputVal = inputVal.slice( 0, sliceInpVal - 1 );
    $( "#history-value" ).innerHTML = inputVal;
} );
