import React from 'react'
import Tabs from './Tab';

export default function TabRenderer() {
    return (
        <Tabs>
            <Tabs.List>
                <Tabs.Tab id="facts">Cat Facts</Tabs.Tab>
                <Tabs.Tab id="photos">Cat Photos</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel id="facts"><p>A cat sleeps 16 hours a day</p></Tabs.Panel>
            <Tabs.Panel id="photos"><img src="..." alt="cat" /></Tabs.Panel>
        </Tabs>
    )
}