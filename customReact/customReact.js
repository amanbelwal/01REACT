function customrender(reactElement,Container)
{
   const  domElement = document.createElement(reactElement.type)
   domElement.innerHTML= reactElement.children
   domElement.setAttribute('href', reactElement.props.href)
   domElement.setAttribute('target', reactElement.props.target)
   Container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props :{
     href : 'https://dsa-helper-frontend-rishabhk5236.vercel.app/',
     target : '_blank' ,   
    },
    children : 'pls click here to visit the website', 
}

const mainContainer = document.querySelectorAll('#root');

customrender(reactElement,mainContainer)