let myHeading = document.querySelector('h1');
let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/huohu.png')
    {
        myImage.setAttribute('src','images/baidu.png');
    }else{
        myImage.setAttribute('src','images/huohu.png');
    }
}
let myButton = document.querySelector('button');
function setUserName()
{
    let myName = prompt('请输入你的名字');
    if(!myName || myName === null)
    {
        setUserName();
    }else{
        localStorage.setItem( 'name',myName);
        myHeading.textContent = 'Hello, my son '+myName;
    }
} 
if(!localStorage.getItem('name'))
{
    setUserName();
}else
{
    let stortedName = localStorage.getItem('name');
    myHeading.textContent = "I'm glad to see you again, my son "+stortedName;
}
myButton.onclick = function(){
    setUserName();
}