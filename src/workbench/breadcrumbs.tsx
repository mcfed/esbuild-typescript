import React from 'react'
import { Breadcrumb, Breadcrumbs, IBreadcrumbProps, Icon } from '@blueprintjs/core'

interface PBreadcrumbs{


}


export function RFBreadcrumbs(props:PBreadcrumbs){
    const BREADCRUMBS: IBreadcrumbProps[] = [
        { href: "/users", icon: "folder-close", text: "Users" },
        { href: "/users/janet", icon: "folder-close", text: "Janet" },
        { icon: "document", text: "image.jpg" },
    ];
    function  renderCurrentBreadcrumb ({ text, ...restProps }: IBreadcrumbProps) {
        // customize rendering of last breadcrumb
        return <Breadcrumb {...restProps}>{text} <Icon icon="star" /></Breadcrumb>;
    };

    return (
        <Breadcrumbs currentBreadcrumbRenderer={renderCurrentBreadcrumb} items={BREADCRUMBS}
     />
    )
}