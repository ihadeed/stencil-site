import { Component, Prop, Method } from '@stencil/core';

@Component({
    tag: 'site-title'
})
export class SiteTitle {
    @Prop() suffix: string;
    @Prop() separator: string = ' | ';
    @Method() setTitle(title: string, appendSuffix: boolean = true) {
        document.title = appendSuffix? title + this.separator + this.suffix : title;
    }
}