import {CircleDashboardCard} from "../circles/CircleDashboardCard.tsx";

const CardLayout = () => {
    return (
        <div className="row g-4">
            <div className=" col-md-4">
                <CircleDashboardCard title="Загрузка данных" value={70} color="tomato"/>
            </div>
            <div className="col-md-4">
                <CircleDashboardCard title="Пользователи" value={45} color="cornflowerblue"/>
            </div>
            <div className="col-md-4">
                <CircleDashboardCard title="CPU Usage" value={87} color="seagreen"/>
            </div>

        </div>

    );
};

export default CardLayout;