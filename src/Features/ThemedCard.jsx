import React, { useContext } from 'react'
import { ThemeContext } from '../App'

export default function ThemedCard() {
    const theme = useContext(ThemeContext);
    const styles = {
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '1rem'
    };
    return (
        <div>
            <div style={styles}>I change with the theme</div>
        </div>
    )
}