import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const items = [
    { id: '1', title: 'Accordion 1', details: 'Details for accordion 1' },
    { id: '2', title: 'Accordion 2', details: 'Details for accordion 2' },
    { id: '3', title: 'Accordion 3', details: 'Details for accordion 3' },
    { id: '4', title: 'Accordion 4', details: 'Details for accordion 4' },
];

export default function Accordions(){
    const [openId, setOpenId] = useState(null);
    console.log(openId)

    return(
        <div className='accordion-group'>
            <div className='acc-parent'>
            {items.map(({ id, title, details }) => (
                <div key={id}>
                    <div id={`panel${id}-header`}  onClick={() => setOpenId(openId === id ? null : id)} style={{'width': '250px', 'height': '40px', 'border': '1px solid black'}}>
                        <Typography>{title}</Typography>
                    </div>
                    {openId === id && <div style={{'width': '250px', 'height': '100px', 'border': '1px solid black'}}>
                        <Typography>{details}</Typography>
                    </div>}
                </div>
            ))}
            </div>
        </div>
    )
}