import './Bar.css'
export const Bar = ({value, index}) => {
    const height = 5.3818 * value;
    return (
        <div className='Bar'>
                <span>{value}</span>
                <div className="bar" style={{height : `${height}px`}}>

                </div>
                <p>{index}</p>
        </div>
        
    )
}