import MainLayout from "../../layouts/mainLayout"
import { useGet } from '../../hooks/services/useGet'
import { IMovie } from '../../interfaces/IMovie'
import CardMovie from '../../components/cardMovie/indext'
import { HomeContainer, ItemContainer } from './style'
import { useSearchParams } from "react-router-dom"

const Home = () => {
    const { data, loading } = useGet<IMovie[]>()    
    const [searchParams] = useSearchParams()
    const search = searchParams.get('search-query') || ''

    const result = data?.filter((movie) => movie.title.toLowerCase().indexOf(search.toLowerCase()) + 1)

    return (
        <MainLayout loading={loading} resultSize={result?.length} showSearch>
            <HomeContainer>
                {
                    result?.map((movie, idx) => 
                        <ItemContainer key={idx}>
                            <CardMovie movie={movie} />
                        </ItemContainer>
                    )
                }
            </HomeContainer>
        </MainLayout>
    )
}

export default Home