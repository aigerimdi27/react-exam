import { useEffect, useState } from 'react'
import { getAllPhotos } from '../../api/project.api'
import './Home.scss'
import { Card } from '../../components/Card'

export const Home = () => {
    const [photos, setPhotos] = useState([])
    const [shownPhotos, setShownPhotos] = useState([])
    const photosArray = []
    
    const allPhotos = () => {
        for (let i = 1; i < 20;i++) {
            if (!photos[i]) {
                break
            }
            photosArray.push(photos[i])
        }
        setShownPhotos(photosArray)
    }
   


    const getPhotosFromApi = async () => {
        try {
            const resp = await getAllPhotos()
            setPhotos(resp)
            console.log(resp)

        } catch (err) {

        }
    }

    useEffect(() => {
        getPhotosFromApi()
    }, [])

    return (
        <>
           <section className="home">
                <div className="container grid">
                    {
                        shownPhotos?.map((photo) => (
                            <Card photo={photo}/>
                        ))
                    }
                </div>
            </section>
        </>
    )
}