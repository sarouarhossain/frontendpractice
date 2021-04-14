import React from 'react'
import ReactDom from 'react-dom'

function Greeting() {
    return <Book/>
}

const Book = () => {
    return <div>
        <Image/>
        <Title/>
        <Author/>
    </div>;
}

const Image = () => {
    return <img src="https://images-na.ssl-images-amazon.com/images/I/9179sstke4L._AC_UL200_SR200,200_.jpg" alt=""/>
}

const Title = () => {
    return <article>Lighter step by step instant pot.</article>
}

const Author = () => {
    return <p>Jeffrey Eisner</p>
}

ReactDom.render( <Greeting/> , document.getElementById('root'));