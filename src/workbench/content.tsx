import { NonIdealState } from '@blueprintjs/core'
import React, { ReactElement } from 'react'


interface PContent {
    children?: ReactElement | ReactElement[]
}

export function RFContent(props: PContent) {

    return (
        <div className="app-content">
            <NonIdealState title="No search results" description={undefined} action={undefined} />
        </div>
    )
}