import styles from './FormsControls.module.css'

export const Input = ({input, meta, ...restProps}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={hasError?styles.error:''}>
            <div>
                <input {...input} {...restProps}/>
            </div>
            <div>
                {hasError && <span className={styles.spanError}>{meta.error}</span>}
            </div>
        </div>
    )
}