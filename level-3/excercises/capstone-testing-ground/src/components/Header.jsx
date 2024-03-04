import { useState } from 'react'


export default function Header() {
    return (
        <header className="header">
            <img 
                src="https://e7.pngegg.com/pngimages/247/793/png-clipart-subaru-forester-car-brand-logo-subaru-emblem-logo-thumbnail.png" 
                className="header--image"
            />
            <h2 className="header--title">Blake's Meme Generator</h2>
            <h4 className="header--project">React Course - Capstone Project 3</h4>
        </header>
    )
}