import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import List from './List'

export default function ListDetails(props) {
    const { listId } = useParams()
    const foundList = List.find(list => list._id === listId)

    const navigate = useNavigate()
}