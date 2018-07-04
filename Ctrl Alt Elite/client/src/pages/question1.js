import React from 'react';
import {
    Alert
  } from 'reactstrap';


class Question1 extends React.Component {
    render() {
        
        return (
            <div>
                <p>
                Given an array of integers, find the sum of its elements.
                </p>
                <p>
                <strong>Input Format</strong>
                </p>
                <p>
                The first line contains an integer, n, denoting the size of the array. 
                The second line contains n space-separated integers representing the array's elements.
                </p>

                <p>
                <strong>Output Format</strong>
                </p>
                <p>
                Print the sum of the array's elements as a single integer.
                </p>

                <p>
                <strong>Sample Input</strong>
                </p>
                
                <Alert color="primary">
                6<br />
                1 2 3 4 10 11
                </Alert>
                
                <p>
                <strong>Sample Output</strong>
                </p>
                <Alert color="primary">31</Alert>

                <p>
                <strong>Explanation</strong>
                </p>
                <p>We print the sum of the array's elements: 1+2+3+10+11=31</p> 
            </div>
        );
    };
}

export default Question1 ;