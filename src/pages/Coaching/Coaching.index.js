import React, { useEffect, useState } from 'react';
import { CoachingProfileCard } from '../../components/CoachProfile/CoachingProfileCard';
import { coachData } from '../../data/coachData';
import './Coaching.css';
import { useHistory } from 'react-router';
import { getCoaches } from '../../libs/getCoaches';

function Coaching() {
    const [user, setUser] = useState(
        JSON.parse(sessionStorage.getItem('profile'))
    );
    const [coaches, setCoaches] = useState([]);

    const history = useHistory();

    const userInfo = JSON.parse(sessionStorage.getItem('profile'));
    const onClickBtn = () => {
        history.push('/newcoach');
    };

    const handleSearch = async (e) => {
        const search = e.target.value;
        const coaches = await getCoaches(search);
        setCoaches(coaches);
    };

    useEffect(() => {
        (async () => {
            const coaches = await getCoaches();
            setCoaches(coaches);
        })();
    }, []);

    return (
        <div className='Coaching'>
            <div>
                {console.log(`process.env.NODE_ENV`, process.env.NODE_ENV)}
                <h1 className='coaching_header'>Explore our Coaches</h1>
                <div className='searchCoach'>
                    <input
                        onChange={handleSearch}
                        type='text'
                        placeholder='Search Coach'
                    />
                </div>
                {userInfo && userInfo.role === 0 ? (
                    <div className='flex-header'>
                        <button className='coachbtn' onClick={onClickBtn}>
                            Want to become a coach?
                        </button>
                    </div>
                ) : (
                    <div>
                        {userInfo && userInfo.role === 3 ? (
                            <div>You already applied</div>
                        ) : (
                            ''
                        )}
                    </div>
                )}
            </div>
            <div className='coachingCards'>
                {coaches && coaches.length > 0 &&
                    coaches.map((coach, index) => {
                        return <CoachingProfileCard coachData={coach} index={index} />;
                    })}
            </div>
        </div>
    );
}

export default Coaching;
