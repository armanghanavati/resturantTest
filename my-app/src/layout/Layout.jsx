import React from 'react'
import { useSelector } from 'react-redux'
import ViewMenuModal from '../components/modals/foodMenu/ViewMenuModal'
import { selectShowModal } from '../components/slices/menuSlice'

const Layout = (props) => {
    const showModal = useSelector(selectShowModal)

    return (
        <>
            {props.children}
            {showModal && <ViewMenuModal />}
        </>
    )
}

export default Layout