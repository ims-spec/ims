import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'


export const CircleDashboardCard = ({title, value, color}: {
    title: string;
    value: number;
    color?: string;
}) => {
    return (
        <div className="card text-center shadow-sm shadow-lg">
            <div className="card-body">
                <h5 className="card-title mb-3">{title}</h5>
                <div style={{width: 100, height: 100, margin: '0 auto'}}>
                    <CircularProgressbar
                        value={value}
                        text={`${value}%`}
                        styles={buildStyles({
                            pathColor: color || "tomato",
                            textColor: "#333",
                            trailColor: "#eee",
                            textSize: '16px',
                            pathTransitionDuration: 1.2,
                        })}
                    />
                </div>
            </div>
        </div>
    );
};

