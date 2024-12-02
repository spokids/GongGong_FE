import LessonInfo from '@pages/Home/components/LessonInfo';
import { Link } from 'react-router-dom';

const SaveProgramming = () => {
    return (
        <div>
            <Link to='/Program-info'>
                <div className='mt-5'>
                <LessonInfo
                    programId={1}
                    programType="수영"
                    programName="그룹레슨3"
                    facilityName="강남스포츠문화센터수영장"
                    programAge="만 7세 ~ 만 12세"
                    programDate="24.11.01 - 24.11.30"
                />
            </div>
            </Link>
        </div>
    );
};

export default SaveProgramming;