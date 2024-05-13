import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Context, ContextProvider } from '../Context';

export default function SplashPage(props) {


    return(
        <div>
            <h1>Hello World!</h1>
        </div>
    )
}