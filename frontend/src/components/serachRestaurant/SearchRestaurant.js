import React from 'react'
import {SearchFormWrapper, FormWrapper, InputContainer, Button } from './style'

const SearchForm = () => {
    return (
        <SearchFormWrapper>
            <FormWrapper>
                <InputContainer>
                    <input type='text' placeholder='Search...' />
                    <Button>Search</Button>
                </InputContainer>
            </FormWrapper>
        </SearchFormWrapper>
    )
}

export default SearchForm;
