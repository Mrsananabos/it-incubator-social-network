import React from 'react';
import classes from './FormControls.module.css'

export function TextArea ({input, meta, ...props}: any) {
    debugger
    const hasError = meta.touched && meta.error
    return (
        <div className={`${classes.formControl} ${hasError ? classes.error : ''}`}>
            <textarea {...input} {...props}/>
            {hasError && <span>{' some error'}</span>}
        </div>
    )
}

export function Input ({input, meta, ...props}: any) {
    const hasError = meta.touched && meta.error
    return (
        <div className={`${classes.formControl} ${hasError ? classes.error : ''}`}>
            <input {...input} {...props}/>
            {hasError && <span>{'some error'}</span>}
        </div>
    )
}