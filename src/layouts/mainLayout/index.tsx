import { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom"
import Header from "../../components/header"
import Loading from "../../components/loading"
import Search from "../../components/search"
import { IPropMainLayout } from "./interfaces/IPropMainLayout"
import { LoadingContainer, MainLayoutContainer } from "./style"

const MainLayout = ({children, loading, resultSize, showSearch}: IPropMainLayout) => {
    const [loadingSearch, setLoadingSearch] = useState<boolean>(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const searchQueryString = searchParams.get('search-query')

    useEffect(() => {
        let timer: NodeJS.Timeout;
        
        if(searchQueryString){
            setLoadingSearch(true);
    
            timer = setTimeout(() => {
              setLoadingSearch(false);
            }, 1000);
        }
    
        return () => {
          clearTimeout(timer);
        };
    }, [searchQueryString]);

    return (
        <MainLayoutContainer>
            <Header />
            {
                loading ?
                    <LoadingContainer>
                        <Loading />
                    </LoadingContainer>
                    :
                    <>
                        {showSearch && <Search resultSize={resultSize} showResolved={!loadingSearch} />}      
                        {
                            loadingSearch ?                            
                                <LoadingContainer>
                                    <Loading />
                                </LoadingContainer>
                                :
                                children
                        }
                    </>
            }
        </MainLayoutContainer>
    )
}

export default MainLayout