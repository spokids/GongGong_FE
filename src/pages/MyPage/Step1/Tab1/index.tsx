import { useGetScrap } from '@api/hooks/user/useGetScrp';
import { Scraps } from '@api/types/user';
import LessonInfo from '@pages/HomePage/LessonInfo';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SaveProgramming = () => {
    const [lastScrapId, setLastScrapId] = useState<number | undefined>(undefined);
    const [scraps, setScraps] = useState<Scraps[]>([]);

    const { data } = useGetScrap(lastScrapId);


    useEffect(() => {
        if (data) {
            setScraps((prev) => [...prev, ...data.scraps]);
        }
    }, [data]);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 100
        ) {
            if (data?.hasNext) {
                const lastId = scraps[scraps.length - 1]?.scrapId;
                setLastScrapId(lastId);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scraps, data?.hasNext]);

    return (
        <div>
            {data && (
                scraps.map((scrap, index) => (
                    <Link to={`/Program-info/${scrap.programId}`} key={`${scrap.programId}-${index}`}>
                        <div className='mt-5'>
                            <LessonInfo
                                programId={scrap.programId}
                                programType={scrap.programType}
                                programName={scrap.programName}
                                facilityName={scrap.facilityName}
                                programAge={scrap.programAge}
                                programDate={scrap.programDate}
                            />
                        </div>
                     </Link>
                ))
            )}
        </div>
    );
};

export default SaveProgramming;
