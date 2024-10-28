import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

const Dashboard = ({ analysisData, aiResponses }) => {
    return (
        <div>
            <h1>Analysis Dashboard</h1>
            <Bar data={analysisData} />
            <h2>AI Responses</h2>
            <ul>
                {aiResponses.map((response, index) => (
                    <li key={index}>{response}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
