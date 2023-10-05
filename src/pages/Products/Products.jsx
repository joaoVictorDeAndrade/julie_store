import { useState, useEffect } from "react";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Loading from "../../components/Loading/Loading";

import { ProductForm, SearchProductWrapper } from "./Products.styles";

const inputStyle = { padding: '0' }


export default function Products() {
    const [search, setSearch] = useState('');


    const handleSearchProduct = (e) => {
        e.preventDefault()
    }

    return (
        <Container>
            <>
                <Title text="Lista de Produtos" />

                <ProductForm onSubmit={handleSearchProduct} >
                    <SearchProductWrapper>
                        <Input
                            value={search}
                            onChange={({ target }) => setSearch(target.value)}
                            style={inputStyle}
                            placeholder="Digite aqui o nome ou ID do Produto que deseja procurar"
                            label="Busque o produto desejado"
                        />
                        <Button text="Pesquisar" />
                    </SearchProductWrapper>
                </ProductForm>
            </>
        </Container>
    )
}