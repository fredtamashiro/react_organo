import { useState } from 'react';

const useTimes = () => {
    const [listaTimes, setTimes] = useState([
        {
            id: 1,
            nome: 'Programação',
            cor: '#47667b',
        },
        {
            id: 2,
            nome: 'Front-End',
            cor: '#ebb57f',
        },
        {
            id: 3,
            nome: 'Data Science',
            cor: '#b1ba8e',
        },
        {
            id: 4,
            nome: 'Devops',
            cor: '#d436a9',
        },
        {
            id: 5,
            nome: 'UX e Design',
            cor: '#007e99',
        },
        {
            id: 6,
            nome: 'Mobile',
            cor: '#4682b4',
        },
        {
            id: 7,
            nome: 'Inovação e Gestão',
            cor: '#32cd32',
        }
    ]);

    return [listaTimes, setTimes];
};

export default useTimes;
