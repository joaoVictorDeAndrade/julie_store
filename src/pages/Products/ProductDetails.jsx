import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";
import { ProductForm } from "./Products.styles";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useForm from "../../Hooks/UseForm";

export default function ProductDetails() {
    const params = useParams();
    const productId = params.id;

    return (
        <Container>
            <>
                <Title text={productId ? 'Editar Produto' : 'Adicionar Produto'} />

                <ProductForm>
                    <Title fontSize="1.25rem" text={"Dados Pessoais"} />
                </ProductForm>


            </>
        </Container>
    )
}