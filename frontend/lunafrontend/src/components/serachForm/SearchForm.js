import React from 'react'
import {FormWrapper, SearchBox, DropDownButton, Button } from './style'
import ArrowIcon from '../../images/svg/arrow.svg'

const SearchForm = () => {
    return (
        <FormWrapper>
            <SearchBox>
                <input type='text' placeholder='Search' />
            </SearchBox>
                <Button>
                    <span>Select a category...</span>
                    <img src={ArrowIcon} />
                </Button>
        </FormWrapper>
    )
}

export default SearchForm
