import React from 'react'
import {FormWrapper, SearchBox, DropDownButton, Button, Input } from './style'
import ArrowIcon from '../../images/svg/arrow.svg'

const SearchForm = () => {
    return (
        <FormWrapper>
                <Input type='text' placeholder='Search' />
                <Button>
                    <span>Select a category...</span>
                    <img src={ArrowIcon} />
                </Button>
        </FormWrapper>
    )
}

export default SearchForm
