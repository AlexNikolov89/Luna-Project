import React, {Fragment, useState} from 'react'
import {FormWrapper, SearchBox, Dropdown, ButtonUsersProfile, DropDownButton, Button, Input } from './style'
import ArrowIcon from '../../images/svg/arrow.svg'

const SearchForm = ({restaurants}) => {

    const [open, setOpen] = useState(false);
    const [select, setSelect] = useState([]);
    const handleClick = () => setOpen(!open)


    return (
        <Fragment>
            <FormWrapper>
                <Input type='text' placeholder='Search' />
                <Button onClick={handleClick}>
                    <span>Select a category...</span>
                    <img src={ArrowIcon} />
                    {open ? (
                        <Dropdown>
                        <p>Mexican</p>
                        <p>Italian</p>
                        <p>Korean</p>
                    </Dropdown>
                    ) : null }
                </Button>
                <ButtonUsersProfile><p>+</p></ButtonUsersProfile>
            </FormWrapper>
        </Fragment>
    )
}

export default SearchForm
