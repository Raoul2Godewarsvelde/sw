import React, { useEffect, useRef, useState } from 'react'

import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts'

import _ from 'lodash'

const SimpleLineChart = ({ datas }) => {

    const interval = 1000

    const TABLE_LIST_1 = [{ x: 0, y: 0 }]

    const [time, setTime] = useState(0)
    const [list1, setlist1] = useState([...TABLE_LIST_1])

    function useInterval(callback, delay) {

        const savedCallback = useRef()
    
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback
        }, [callback])
    
        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current()
            }
            if (delay !== null) {
                let id = setInterval(tick, delay)
                return () => clearInterval(id)
            }
        }, [delay])
    }

    useInterval(() => {
        setTime(time + interval)

        let result = _.cloneDeep(list1)
            result.push({
                x: time / 1000,
                y: (time / 1000) * (time / 1000) - 2 * (time / 1000) + 1
            })
            console.log(result)
            setlist1(result)
    }, interval)

    return (
        <div>
            <ScatterChart
                width={600}
                height={400}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
                <CartesianGrid />
                <XAxis type='number' dataKey={'x'} />
                <YAxis type='number' dataKey={'y'} />
                <Tooltip cursor={{ strokeDasharray: '5 5' }} />
                <Legend />
                <Scatter
                    name='values'
                    data={list1}
                    fill='#ff0000'
                    line
                    shape='circle'
                />
            </ScatterChart>
        </div>
      )
}

export default SimpleLineChart