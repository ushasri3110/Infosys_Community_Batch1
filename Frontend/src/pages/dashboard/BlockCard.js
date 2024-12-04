import { Card } from '@mui/material'
import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function BlockCard() {
    const occupancyPercentage=15;
  return (
    <Card className='flex space-y-1 p-3 text-sm font-semibold'>
        <div className='flex flex-col p-2'>
        <h1 className='text-blue-500 text-2xl font-bold'>Block-A</h1>
        <p>Total no of flats: 20</p>
        <p>Total no of Members: 3</p>
        <p>Total no of Flats Occupied: 1</p>
        <p>Total no of Flats Unoccupied: 19</p>
        </div>
        <div style={{ width: 100, height: 100 }}>
                    <CircularProgressbar
                        value={occupancyPercentage}
                        text={`${Math.round(occupancyPercentage)}%`}
                        styles={buildStyles ({
                            textColor: "#3b82f6",
                            pathColor: "#3b82f6",
                            trailColor: "#d6d6d6",
                        })}
                    />
                </div>
    </Card>
  )
}

export default BlockCard