import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { ContactFriendsContext } from '../../context/ContactFriendsContext';

const Stats = () => {

      const { timeline } = useContext(ContactFriendsContext);
const data =[
        {name: 'Call', value:  timeline.filter((item) => item.type === "call").length, fill: '#244D3F'},
        {name: 'Text', value:  timeline.filter((item) => item.type === "text").length , fill: '#7F00FF'},
        {name: 'Video', value:  timeline.filter((item) => item.type === "video").length , fill: '#00C45F'},
    ]
    
    return (
        <div className='my-10 shadow p-10 rounded-md border-slate-300 container mx-auto'>
            <h2 className='font-semibold text-3xl mb-16 text-center'>Friendship Analytics</h2>
              <PieChart
               style={{
                 width: '100%',
                 maxWidth: '500px',
                 maxHeight: '80vh',
                 margin: 'auto',
                 aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend></Legend>
      <Tooltip></Tooltip>
    </PieChart>
        </div>
    );

};

export default Stats;