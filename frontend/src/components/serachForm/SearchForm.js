import React, {Fragment, useState, useEffect} from 'react'
import {FormWrapper, Dropdown, SearchBox, DropDownButton, Button, Input, ButtonNew } from './style'
import ArrowIcon from '../../images/svg/arrow.svg'


const SearchForm = () => {

    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);


    return (
        <Fragment>
            <FormWrapper>
                <Input type='text' placeholder='Search' />
                <Button onClick={onClick}>
                    <span>Select a category...</span>
                    <img src={ArrowIcon} />

                    {isActive ? (
                     <Dropdown>
                            <p>Japanse Food</p>
                            <p>Korean Food</p>
                            <p>Italian Food</p>
                            <p>Spanish Food</p>
                     </Dropdown>
                     ) : null}
                </Button>
                <ButtonNew><p>+</p></ButtonNew>
            </FormWrapper>
        </Fragment>
    )
}

export default SearchForm
