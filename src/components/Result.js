import React from 'react';
import { useSelector } from 'react-redux';

function Result(props) {
    const userAnswers = useSelector((state) => state.answers);

    const arr = Object.entries(userAnswers);

    const sortByHighest = (a, b) => {
        if (a[1] > b[1]) {
            return -1;
        } else if (a[1] < b[1]) {
            return 1;
        }
    };

    arr.sort(sortByHighest);

    const result = arr[0][0];
    let resultImage;

    switch (result) {
        case 'Gryffindor':
            resultImage = '/Gryffindor.png';
            break;
        case 'Hufflepuff':
            resultImage = '/Hufflepuff.png';
            break;
        case 'Ravenclaw':
            resultImage = '/Ravenclaw.png';
            break;
        case 'Slytherin':
            resultImage = '/Slytherin.png';
            break;
        default:
            break;
    }

    return (
        <div className="results-container">
            <img src={require('../images' + resultImage)} alt="house-logo" />
            <p>Hmm... You will be a good fit in {result}!</p>
        </div>
    );
}

export default Result;
