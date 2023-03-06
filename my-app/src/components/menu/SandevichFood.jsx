import React from "react";
import { Table, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sandevich } from '../data/listItem'
import { RsetShowModal, RsetType } from "../slices/menuSlice";

const SandevichFood = () => {
    const dispatch = useDispatch();

    return (
        <Table striped bordered hover responsive size="sm" >
            <thead>
                <tr className="text-center">
                    <th className="bg-secondary bg-danger text-white fw-normal">ردیف</th>
                    <th className="bg-secondary text-white fw-normal">نام</th>
                    <th className="bg-secondary text-white bg-danger fw-normal"> قیمت</th>
                    <th className="bg-secondary text-white fw-normal">مخلفات</th>
                    <th className="bg-secondary text-white bg-danger fw-normal">مشاهده</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {sandevich.map(item => {
                    return (
                        <tr>
                            <td> {item.id}  </td>
                            <td className="d-flex justify-content-end"> {item.name} <img src={item.image} className="me-4 rounded-circle" width="25px" height="25px" /> </td>
                            <td> {item.cost}  </td>
                            <td> {item.des}  </td>
                            <td>  <FontAwesomeIcon
                                onClick={() => {
                                    dispatch(RsetShowModal(true))
                                    dispatch(RsetType({ name: item.name, des: item.des, image: item.image, cost: item.cost }))
                                }}
                                className="text-danger cursorPointer align-items-center"
                                icon={faEye}
                            />
                            </td>
                        </tr>
                    )
                })
                }
            </tbody>
        </Table >
    );
};

export default SandevichFood;
