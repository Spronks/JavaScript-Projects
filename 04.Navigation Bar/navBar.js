let navStatus = 0;

document.getElementById('navBtn').addEventListener('click', openNav)

function openNav() {
    //closed
    if (!navStatus){  
        document.getElementById('mainDiv').style.width = '100%'
        document.querySelectorAll('li').forEach(el => el.style.display = 'block');
        navStatus = 1;
    //open
    } else {           
        document.getElementById('mainDiv').style.width = '0'
        document.querySelectorAll('li').forEach(el => el.style.display = 'none');
        navStatus = 0;
    }

    // using jquery
    // if(!navStatus)
    // {
    //     $('.mainDiv').css('width','100%')
    //     $('li').css('display', 'block')
    //     navStatus=1
    // } else {
    //     $('.mainDiv').css('width','0')
    //     $('li').css('display', 'none')
    //     navStatus=0
    // }
}
