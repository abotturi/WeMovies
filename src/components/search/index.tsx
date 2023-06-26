import { useRef, useState } from "react";
import { BtnIcon, NumberSearchResult, SearchIcon, SearchInput, SearchMainContainer, SearchResultContainer, TextSearchResult } from "./style"
import { AiOutlineSearch } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import { useSearchParams } from "react-router-dom";
import { IPropsSearch } from "./interfaces/IPropsSearch";

const Search = ({ resultSize = 0, showResolved = true }: IPropsSearch) => {    
    const [searchParams, setSearchParams] = useSearchParams()
    const searchQueryString = searchParams.get('search-query')
    const [textSearch, setTextSearch] = useState<string>(searchQueryString || '')
    const inputRef = useRef<HTMLInputElement>(null);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextSearch(event.target.value)
    }

    const handleSearch = () => {
        if(textSearch){
            setSearchParams({'search-query': textSearch})
        }

        if(inputRef.current){
            inputRef.current.blur()
        };
    }

    const clearSearch = () => {
        searchParams.delete('search-query')
        setSearchParams(searchParams)
        setTextSearch('')
    }

    const handleOnClick = () => {
        if(searchQueryString){
            clearSearch()
            return
        }

        handleSearch()
    }

    const checkEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <SearchMainContainer>
            <SearchIcon>
                <BtnIcon onClick={handleOnClick}>
                    {
                        searchQueryString ?
                            <GrClose size={24} />
                            :    
                            <AiOutlineSearch color={textSearch ? "#2F2E41" : "#CCC"} size={24} />
                    }
                </BtnIcon>
            </SearchIcon>
            <SearchInput value={textSearch} onChange={handleOnChange} ref={inputRef} placeholder="Buscar filme pelo nome" onKeyDown={checkEnter}/>
            {
                (searchQueryString && showResolved)  &&
                    <SearchResultContainer>
                        <TextSearchResult>
                            Exibindo resultados para "{searchQueryString}"
                        </TextSearchResult>
                        <NumberSearchResult>
                            {resultSize} resultado encontrado
                        </NumberSearchResult>
                    </SearchResultContainer>
            }
        </SearchMainContainer>
    )
}

export default Search